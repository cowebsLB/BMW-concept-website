import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ExperienceContext = createContext(null);

const STORAGE_KEY = 'bmw-vision-favorites-v1';

const isBrowser = typeof window !== 'undefined';

const loadFavorites = () => {
  if (!isBrowser) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const persistFavorites = (favorites) => {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    // ignore
  }
};

export const ExperienceProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(loadFavorites);

  useEffect(() => {
    persistFavorites(favorites);
  }, [favorites]);

  const track = useCallback((eventName, payload = {}) => {
    if (!isBrowser) return;
    const entry = {
      event: eventName,
      payload,
      ts: new Date().toISOString()
    };

    // Simple event buffer for debugging / portfolio storytelling
    if (!window.__bmw_vision_events) {
      window.__bmw_vision_events = [];
    }
    window.__bmw_vision_events.push(entry);

    // Keep console output compact but visible in dev tools
    // eslint-disable-next-line no-console
    console.info('[BMW Vision Event]', eventName, payload);
  }, []);

  const toggleFavorite = useCallback(
    (id, meta = {}) => {
      setFavorites((prev) => {
        const exists = prev.find((item) => item.id === id);
        if (exists) {
          track('favorite_removed', { id, name: exists.name, source: exists.source });
          return prev.filter((item) => item.id !== id);
        }
        const next = {
          id,
          name: meta.name || id,
          type: meta.type || '',
          source: meta.source || 'unknown'
        };
        track('favorite_added', next);
        return [...prev, next];
      });
    },
    [track]
  );

  const isFavorite = useCallback(
    (id) => {
      return favorites.some((item) => item.id === id);
    },
    [favorites]
  );

  const value = {
    favorites,
    track,
    toggleFavorite,
    isFavorite
  };

  return <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>;
};

export const useExperience = () => {
  const ctx = useContext(ExperienceContext);
  if (!ctx) {
    throw new Error('useExperience must be used within an ExperienceProvider');
  }
  return ctx;
};


