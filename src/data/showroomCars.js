const UNSPLASH_PLACEHOLDER = 'https://images.unsplash.com/...';

export const showroomCars = [
  // Heritage / concept examples
  {
    name: 'BMW 3 Series',
    code: 'E21–G20',
    years: '1975 – present',
    type: 'Sedan',
    image:
      'https://images.unsplash.com/photo-1617817108989-0abb97936e93?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'The benchmark sports sedan balancing everyday usability with dynamic handling.',
      highlights: [
        'Iconic kidney grille evolution',
        'Rear- and all-wheel drive options',
        'Available M Performance variants'
      ]
    }
  },
  {
    name: 'BMW i8',
    code: 'I12/I15',
    years: '2014 – 2020',
    type: 'Plug‑in Hybrid',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'A halo plug‑in hybrid sports car showcasing BMW’s vision for futuristic design.',
      highlights: [
        'Carbon-fibre passenger cell',
        'Scissor doors',
        'Electric + turbocharged petrol powertrain'
      ]
    }
  },
  {
    name: 'BMW i3',
    code: 'I01',
    years: '2013 – 2022',
    type: 'Electric',
    image:
      'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpua8rQbhSIqppglBgbRGal384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSDUqoQh47wMvcYi9M%25bgMb3islBglUb6%25cRScH8Z4MbnMdoPEyJGy5BRbrQ%25r9YEUW8zWunUUqogqaGQQl3ilU%2540cRScHz8oMbnMdgHOyJGy5ieSrQ%25r9SQHW8zWun87qogqaGhqogqaDJKl3ilUCQIcRScH4%25fMbnMdJmSyJGy5QinrQ%25r985RW8zWuo86qogqa3s7l3ilURKdcRScH715MbnMdgC0yJGy5QJlrQ%25r98BYW8zWun9rqogqa3oyl3ilUj7mcRScH78gMbnMdezJyJGy5iRarQ%25r9SDGW8JYHltW7%25ZnjTW8JuzM8nq0z6Fboy6oEd82',
    specs: {
      description: 'A pioneering compact EV with sustainable materials and a distinctive silhouette.',
      highlights: [
        'Carbon-fibre chassis',
        'Recycled and renewable interior materials',
        'Optional range extender'
      ]
    }
  },
  {
    name: 'BMW X5 (Generations)',
    code: 'E53–G05',
    years: '1999 – present',
    type: 'SAV',
    image:
      'https://images.unsplash.com/photo-1617814066438-b4712b9a3a45?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'The original Sports Activity Vehicle combining luxury, space, and off-road ability.',
      highlights: [
        'xDrive all-wheel drive',
        'Plug‑in hybrid and high‑performance variants',
        'Three-row seating on select models'
      ]
    }
  },

  // Current X family (SUVs)
  {
    name: 'X1 xDrive28i',
    type: 'SUV',
    image:
      'https://images.unsplash.com/photo-1617814066438-b4712b9a3a45?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'The compact, yet intrepid, four-door X1 SUV.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $42,800'
      ]
    }
  },
  {
    name: 'X1 M35i',
    type: 'SUV · BMW M',
    image:
      'https://images.unsplash.com/photo-1617814066438-b4712b9a3a45?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'A compact performance SUV engineered by BMW M.',
      highlights: [
        '2.0-liter BMW M TwinPower Turbo inline 4-cylinder',
        'xDrive intelligent all-wheel drive',
        'Starting MSRP $51,900'
      ]
    }
  },
  {
    name: 'X2 xDrive28i',
    type: 'Coupe SUV',
    image:
      'https://images.unsplash.com/photo-1617814066438-b4712b9a3a45?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'The most rebellious member of the X family.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $44,300'
      ]
    }
  },
  {
    name: 'X2 M35i',
    type: 'Coupe SUV · BMW M',
    image:
      'https://images.unsplash.com/photo-1617814066438-b4712b9a3a45?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'High-performance compact coupe SUV tuned by BMW M.',
      highlights: [
        '2.0-liter BMW M TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $53,400'
      ]
    }
  },
  {
    name: 'X3 30 xDrive',
    type: 'SUV',
    image:
      'https://images.unsplash.com/photo-1617785437642-9a18a1a08e99?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'An engaging SUV born for adventure.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $50,900'
      ]
    }
  },
  {
    name: 'X3 M50 xDrive',
    type: 'SUV · BMW M',
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'M-tuned X3 with commanding performance and agility.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $65,900'
      ]
    }
  },
  {
    name: 'X5 sDrive40i',
    type: 'SUV',
    image:
      'https://images.unsplash.com/photo-1617814066438-0abb97936e93?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'The original X5 with rear-wheel drive dynamics.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive (sDrive)',
        'Starting MSRP $67,600'
      ]
    }
  },
  {
    name: 'X5 xDrive40i',
    type: 'SUV',
    image:
      'https://images.unsplash.com/photo-1617814066438-0abb97936e93?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'The X5 that inspired every X to follow.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $69,900'
      ]
    }
  },
  {
    name: 'X5 M60i',
    type: 'SUV · BMW M',
    image:
      'https://images.unsplash.com/photo-1617814066438-0abb97936e93?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'A powerful V-8 X5 refined by BMW M.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8 engine',
        'xDrive all-wheel drive',
        'Starting MSRP $92,600'
      ]
    }
  },
  {
    name: 'X5 xDrive50e',
    type: 'SUV · Electrified',
    image:
      'https://images.unsplash.com/photo-1617814066438-0abb97936e93?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'Plug‑in hybrid X5 blending electric efficiency with long-range touring.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder with integrated electric motor',
        'xDrive all-wheel drive',
        'Starting MSRP $75,200'
      ]
    }
  },
  {
    name: 'X5 M Competition',
    type: 'SUV · BMW M',
    image:
      'https://images.unsplash.com/photo-1617814066438-0abb97936e93?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'Dominant M-tuned SUV primed for road and track.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8',
        'M xDrive all-wheel-drive system',
        'Starting MSRP $129,700'
      ]
    }
  },
  {
    name: 'X6 xDrive40i',
    type: 'Coupe SUV',
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'Refined coupe-style SUV with commanding presence.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $76,400'
      ]
    }
  },
  {
    name: 'X6 M60i',
    type: 'Coupe SUV · BMW M',
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200',
    specs: {
      description: 'V-8 powered X6 with BMW M Performance tuning.',
      highlights: [
        '4.4-liter BMW M Performance TwinPower Turbo V-8',
        'xDrive intelligent all-wheel drive',
        'Starting MSRP $96,900'
      ]
    }
  },

  // Additional X family, XM and iX
  {
    name: 'X6 M Competition',
    type: 'Coupe SUV · BMW M',
    specs: {
      description: 'Overwhelming power and unapologetic design in the X6 M Competition.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8',
        'M xDrive all-wheel-drive system',
        'Starting MSRP $134,600'
      ]
    }
  },
  {
    name: 'X7 xDrive40i',
    type: 'SUV',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for X7 xDrive40i
    specs: {
      description: 'The largest and most luxurious BMW ever built.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $86,700'
      ]
    }
  },
  {
    name: 'X7 M60i',
    type: 'SUV · BMW M',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for X7 M60i
    specs: {
      description: 'A flagship X7 with V-8 performance tuned by BMW M.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8 engine',
        'xDrive intelligent all-wheel drive',
        'Starting MSRP $113,900'
      ]
    }
  },
  {
    name: 'ALPINA XB7',
    type: 'SUV · ALPINA',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for ALPINA XB7
    specs: {
      description: 'Handcrafted luxury performance SUV from BMW ALPINA.',
      highlights: [
        '4.4-liter BMW ALPINA Bi-Turbo V-8',
        'xDrive with ALPINA calibration',
        'Starting MSRP $156,000'
      ]
    }
  },
  {
    name: 'BMW XM',
    type: 'SUV · BMW M · Plug-in Hybrid',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for BMW XM
    specs: {
      description: 'The most powerful BMW SUV ever, blending M performance with plug-in hybrid tech.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8 with plug-in hybrid system',
        'M xDrive all-wheel-drive system',
        'Starting MSRP $159,600'
      ]
    }
  },
  {
    name: 'iX1',
    type: 'Electric SUV',
    specs: {
      description: 'Compact all-electric Sports Activity Vehicle in the BMW i family.',
      highlights: [
        'Dual all-electric motors on select variants',
        'BMW i design cues and digital-first cabin',
        'Full-electric driving with everyday usability'
      ]
    }
  },
  {
    name: 'iX3',
    type: 'Electric SUV',
    specs: {
      description: 'An all-electric reinterpretation of the BMW X3.',
      highlights: [
        'Rear-mounted electric motor',
        'Characteristic BMW i blue accents',
        'Full-electric alternative to the X3 SAV'
      ]
    }
  },
  {
    name: 'iX xDrive45',
    type: 'Electric SUV',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for iX xDrive45
    specs: {
      description: 'An all-electric SUV redefining aerodynamics, technology, and luxury.',
      highlights: [
        'Dual all-electric motors',
        'xDrive dual-motor all-wheel drive',
        'Starting MSRP $75,150'
      ]
    }
  },
  {
    name: 'iX xDrive60',
    type: 'Electric SUV',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for iX xDrive60
    specs: {
      description: 'Extended-range iX with elevated performance and comfort.',
      highlights: [
        'Dual all-electric motors',
        'xDrive dual-motor all-wheel drive',
        'Starting MSRP $88,500'
      ]
    }
  },
  {
    name: 'iX M70',
    type: 'Electric SUV · BMW M',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for iX M70
    specs: {
      description: 'High-performance all-electric SUV engineered by BMW M.',
      highlights: [
        'Dual high-performance electric motors',
        'xDrive dual-motor all-wheel drive',
        'Starting MSRP $111,500'
      ]
    }
  },
  {
    name: 'iX M60',
    type: 'Electric SUV · BMW M',
    image: UNSPLASH_PLACEHOLDER, // TODO: replace with exact Unsplash image for iX M60
    specs: {
      description: 'Performance-focused iX variant tuned by BMW M.',
      highlights: [
        'Dual high-performance electric motors',
        'xDrive dual-motor all-wheel drive',
        'Full-electric M performance in an SUV form'
      ]
    }
  },

  // Sedans and Gran Coupes
  {
    name: '228 xDrive Gran Coupe',
    type: 'Sedan · Gran Coupe',
    specs: {
      description: 'A four-door 2 Series Gran Coupe with spirited performance.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $41,600'
      ]
    }
  },
  {
    name: 'M235 xDrive Gran Coupe',
    type: 'Sedan · Gran Coupe · BMW M',
    specs: {
      description: 'M-tuned 2 Series Gran Coupe with confident all-weather traction.',
      highlights: [
        '2.0-liter BMW M TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $49,500'
      ]
    }
  },
  {
    name: '228 Gran Coupe',
    type: 'Sedan · Gran Coupe',
    specs: {
      description: 'Front-drive 2 Series Gran Coupe with extroverted styling.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Front-wheel drive',
        'Starting MSRP $39,600'
      ]
    }
  },
  {
    name: '330i xDrive Sedan',
    type: 'Sedan',
    specs: {
      description: 'All-wheel-drive 3 Series sports sedan.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $49,500'
      ]
    }
  },
  {
    name: 'M340i xDrive Sedan',
    type: 'Sedan · BMW M',
    specs: {
      description: 'M Performance 3 Series sedan with inline-six power.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $63,700'
      ]
    }
  },
  {
    name: '330i Sedan',
    type: 'Sedan',
    specs: {
      description: 'The benchmark rear-wheel-drive 3 Series sports sedan.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $47,500'
      ]
    }
  },
  {
    name: 'M340i Sedan',
    type: 'Sedan · BMW M',
    specs: {
      description: 'M-tuned 3 Series with classic rear-wheel-drive dynamics.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $61,700'
      ]
    }
  },
  {
    name: '430i Gran Coupe',
    type: 'Gran Coupe',
    specs: {
      description: 'A sleek four-door 4 Series with coupe-like roofline.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $50,600'
      ]
    }
  },
  {
    name: '430i xDrive Gran Coupe',
    type: 'Gran Coupe',
    specs: {
      description: 'All-wheel-drive 4 Series Gran Coupe blending balance and beauty.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $52,600'
      ]
    }
  },
  {
    name: 'M440i xDrive Gran Coupe',
    type: 'Gran Coupe · BMW M',
    specs: {
      description: 'M-engineered 4 Series Gran Coupe with abundant power.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $66,400'
      ]
    }
  },
  {
    name: 'M440i Gran Coupe',
    type: 'Gran Coupe · BMW M',
    specs: {
      description: 'Rear-wheel-drive M440i Gran Coupe for purist dynamics.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $64,400'
      ]
    }
  },
  {
    name: '530i xDrive Sedan',
    type: 'Sedan',
    specs: {
      description: 'All-wheel-drive 5 Series where sport and luxury intersect.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $62,200'
      ]
    }
  },
  {
    name: '540i xDrive Sedan',
    type: 'Sedan',
    specs: {
      description: 'Inline-six 5 Series sedan with confident all-weather traction.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $67,100'
      ]
    }
  },
  {
    name: '550e xDrive Sedan',
    type: 'Sedan · Plug-in Hybrid',
    specs: {
      description: 'Electrified 5 Series sedan for efficient long-distance comfort.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'Plug-in hybrid with xDrive all-wheel drive',
        'Starting MSRP $74,800'
      ]
    }
  },
  {
    name: '530i Sedan',
    type: 'Sedan',
    specs: {
      description: 'Rear-wheel-drive 5 Series sedan with poised performance.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $59,900'
      ]
    }
  },
  {
    name: '740i xDrive Sedan',
    type: 'Sedan',
    specs: {
      description: 'All-wheel-drive 7 Series flagship luxury sedan.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $102,300'
      ]
    }
  },
  {
    name: '750e xDrive Sedan',
    type: 'Sedan · Plug-in Hybrid',
    specs: {
      description: 'Electrified 7 Series sedan with integrated electric motor.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder with electric motor',
        'xDrive all-wheel drive',
        'Starting MSRP $110,000'
      ]
    }
  },
  {
    name: '760i xDrive Sedan',
    type: 'Sedan',
    specs: {
      description: 'V-8 powered 7 Series flagship with xDrive traction.',
      highlights: [
        '4.4-liter BMW TwinPower Turbo V-8 engine',
        'xDrive all-wheel drive',
        'Starting MSRP $124,700'
      ]
    }
  },
  {
    name: '740i Sedan',
    type: 'Sedan',
    specs: {
      description: 'Rear-wheel-drive 7 Series with executive comfort.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $99,300'
      ]
    }
  },
  {
    name: '840i Gran Coupe',
    type: 'Gran Coupe',
    specs: {
      description: 'Four-door 8 Series designed to live up to its performance heritage.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $93,500'
      ]
    }
  },
  {
    name: '840i xDrive Gran Coupe',
    type: 'Gran Coupe',
    specs: {
      description: 'All-wheel-drive 8 Series Gran Coupe with grand touring comfort.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $96,500'
      ]
    }
  },
  {
    name: 'M850i xDrive Gran Coupe',
    type: 'Gran Coupe · BMW M',
    specs: {
      description: 'M-tuned 8 Series Gran Coupe with V-8 power.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8 engine',
        'xDrive all-wheel drive',
        'Starting MSRP $109,400'
      ]
    }
  },

  // High-performance M sedans and Gran Coupes
  {
    name: 'M3 Sedan',
    type: 'Sedan · BMW M',
    specs: {
      description: 'The true high-performance sports sedan icon.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $78,400'
      ]
    }
  },
  {
    name: 'M3 Competition xDrive Sedan',
    type: 'Sedan · BMW M',
    specs: {
      description: 'All-wheel-drive M3 Competition Sedan for maximum traction.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'M xDrive all-wheel-drive system',
        'Starting MSRP $87,700'
      ]
    }
  },
  {
    name: 'M3 Competition',
    type: 'Sedan · BMW M',
    specs: {
      description: 'Rear-wheel-drive M3 Competition focused on purist performance.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $82,600'
      ]
    }
  },
  {
    name: 'M5 Sedan',
    type: 'Sedan · BMW M',
    specs: {
      description: 'The quintessential M-tuned 5 Series for road and track.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8',
        'M xDrive all-wheel-drive system with 2WD capability',
        'Starting MSRP $121,900'
      ]
    }
  },
  {
    name: 'M5 Touring',
    type: 'Touring · BMW M',
    specs: {
      description: 'Versatile M5 Touring with space, speed, and everyday usability.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8',
        'M xDrive all-wheel-drive system with 2WD capability',
        'Starting MSRP $123,900'
      ]
    }
  },
  {
    name: 'M8 Competition Gran Coupe',
    type: 'Gran Coupe · BMW M',
    specs: {
      description: 'High-adrenaline M8 Competition Gran Coupe with prestige and performance.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8',
        'M xDrive all-wheel-drive system with 2WD capability',
        'Starting MSRP $140,000'
      ]
    }
  },

  // Electric i4, i5, i7
  {
    name: 'i4 eDrive40',
    type: 'Electric Gran Coupe',
    specs: {
      description: 'All-electric i4 Gran Coupe built for comfort and performance.',
      highlights: [
        'Single all-electric motor',
        'Rear-wheel drive',
        'Starting MSRP $57,900'
      ]
    }
  },
  {
    name: 'i4 xDrive40',
    type: 'Electric Gran Coupe',
    specs: {
      description: 'Dual-motor all-wheel-drive i4 for confident traction.',
      highlights: [
        'Dual all-electric motors',
        'xDrive all-wheel drive',
        'Starting MSRP $62,300'
      ]
    }
  },
  {
    name: 'i4 M60',
    type: 'Electric Gran Coupe · BMW M',
    specs: {
      description: 'High-performance all-electric i4 engineered by BMW M.',
      highlights: [
        'Dual all-electric motors',
        'xDrive all-wheel drive',
        'Starting MSRP $70,700'
      ]
    }
  },
  {
    name: 'i5 eDrive40',
    type: 'Electric Sedan',
    specs: {
      description: 'The new all-electric 5 Series sedan setting the performance standard.',
      highlights: [
        'Single all-electric motor',
        'Rear-wheel drive',
        'Starting MSRP $67,100'
      ]
    }
  },
  {
    name: 'i5 xDrive40',
    type: 'Electric Sedan',
    specs: {
      description: 'Dual-motor all-wheel-drive variant of the i5 Sedan.',
      highlights: [
        'Dual all-electric motors',
        'xDrive all-wheel drive',
        'Starting MSRP $70,100'
      ]
    }
  },
  {
    name: 'i5 M60',
    type: 'Electric Sedan · BMW M',
    specs: {
      description: 'BMW M tuned i5 with dual high-output electric motors.',
      highlights: [
        'Dual all-electric motors',
        'xDrive all-wheel drive',
        'Starting MSRP $84,100'
      ]
    }
  },
  {
    name: 'i7 eDrive50',
    type: 'Electric Luxury Sedan',
    specs: {
      description: 'All-electric executive luxury sedan defining new standards.',
      highlights: [
        'High-performance rear electric motor',
        'Rear-wheel drive',
        'Starting MSRP $105,700'
      ]
    }
  },
  {
    name: 'i7 xDrive60',
    type: 'Electric Luxury Sedan',
    specs: {
      description: 'Dual-motor i7 with all-wheel drive and elevated luxury.',
      highlights: [
        'Dual high-performance electric motors',
        'xDrive all-wheel drive',
        'Starting MSRP $124,200'
      ]
    }
  },
  {
    name: 'i7 M70',
    type: 'Electric Luxury Sedan · BMW M',
    specs: {
      description: 'Top-tier M tuned i7 with peak electric performance.',
      highlights: [
        'Dual high-performance electric motors',
        'xDrive all-wheel drive',
        'Starting MSRP $168,500'
      ]
    }
  },

  // Coupes
  {
    name: '230i Coupe',
    type: 'Coupe',
    specs: {
      description: 'A compact 2 Series coupe with features to stun.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $41,700'
      ]
    }
  },
  {
    name: '230i xDrive Coupe',
    type: 'Coupe',
    specs: {
      description: 'All-wheel-drive 2 Series coupe with compact footprint.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $43,700'
      ]
    }
  },
  {
    name: 'M240i Coupe',
    type: 'Coupe · BMW M',
    specs: {
      description: 'Rear-drive M240i Coupe with classic sports coupe feel.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $53,000'
      ]
    }
  },
  {
    name: 'M240i xDrive Coupe',
    type: 'Coupe · BMW M',
    specs: {
      description: 'All-wheel-drive M240i Coupe for all-season performance.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $55,000'
      ]
    }
  },
  {
    name: '430i Coupe',
    type: 'Coupe',
    specs: {
      description: 'Edgy, sleek two-door 4 Series coupe.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $52,600'
      ]
    }
  },
  {
    name: '430i xDrive Coupe',
    type: 'Coupe',
    specs: {
      description: 'All-wheel-drive 4 Series coupe with composed handling.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $54,600'
      ]
    }
  },
  {
    name: 'M440i Coupe',
    type: 'Coupe · BMW M',
    specs: {
      description: 'M-tuned 4 Series coupe with powerful inline-six.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $66,300'
      ]
    }
  },
  {
    name: 'M4 Competition xDrive Coupe',
    type: 'Coupe · BMW M',
    specs: {
      description: 'M4 Competition Coupe with xDrive all-wheel traction.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'M xDrive all-wheel drive',
        'Starting MSRP $90,600'
      ]
    }
  },
  {
    name: 'M4 Coupe',
    type: 'Coupe · BMW M',
    specs: {
      description: 'High-performance M4 Coupe with rear-wheel-drive purity.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $81,300'
      ]
    }
  },
  {
    name: 'M4 Competition Coupe',
    type: 'Coupe · BMW M',
    specs: {
      description: 'M4 Competition Coupe with increased output and presence.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $85,500'
      ]
    }
  },
  {
    name: '840i Coupe',
    type: 'Coupe',
    specs: {
      description: '8 Series coupe designed to live up to its thrilling heritage.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $93,500'
      ]
    }
  },
  {
    name: '840i xDrive Coupe',
    type: 'Coupe',
    specs: {
      description: 'All-wheel-drive 8 Series coupe for confident grand touring.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $96,500'
      ]
    }
  },
  {
    name: 'M850i xDrive Coupe',
    type: 'Coupe · BMW M',
    specs: {
      description: 'M850i xDrive Coupe with a 4.4-liter V-8 for effortless power.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8 engine',
        'xDrive all-wheel drive',
        'Starting MSRP $109,400'
      ]
    }
  },

  // Convertibles & Roadsters
  {
    name: '430i Convertible',
    type: 'Convertible',
    specs: {
      description: '4 Series Convertible with retractable four-panel roof.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $60,600'
      ]
    }
  },
  {
    name: '430i xDrive Convertible',
    type: 'Convertible',
    specs: {
      description: 'All-wheel-drive 4 Series Convertible for all-season open-air driving.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $62,600'
      ]
    }
  },
  {
    name: 'M440i Convertible',
    type: 'Convertible · BMW M',
    specs: {
      description: 'M440i Convertible with rear-wheel-drive excitement.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $74,400'
      ]
    }
  },
  {
    name: 'M440i xDrive Convertible',
    type: 'Convertible · BMW M',
    specs: {
      description: 'All-wheel-drive M440i Convertible for ultimate traction.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $76,400'
      ]
    }
  },
  {
    name: '840i Convertible',
    type: 'Convertible',
    specs: {
      description: 'Defining BMW open-top grand tourer.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $103,400'
      ]
    }
  },
  {
    name: '840i xDrive Convertible',
    type: 'Convertible',
    specs: {
      description: 'All-wheel-drive 8 Series Convertible with refined dynamics.',
      highlights: [
        '3.0-liter BMW TwinPower Turbo inline 6-cylinder',
        'xDrive all-wheel drive',
        'Starting MSRP $106,400'
      ]
    }
  },
  {
    name: 'M850i xDrive Convertible',
    type: 'Convertible · BMW M',
    specs: {
      description: 'M-tuned 8 Series Convertible with V-8 power.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8 engine',
        'xDrive all-wheel drive',
        'Starting MSRP $119,100'
      ]
    }
  },
  {
    name: 'M4 Competition xDrive Convertible',
    type: 'Convertible · BMW M',
    specs: {
      description: 'M4 Competition Convertible with xDrive for open-air performance.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'M xDrive all-wheel drive',
        'Starting MSRP $97,500'
      ]
    }
  },
  {
    name: 'M8 Competition Convertible',
    type: 'Convertible · BMW M',
    specs: {
      description: 'Open-air freedom meets M8 Competition performance.',
      highlights: [
        '4.4-liter BMW M TwinPower Turbo V-8',
        'M xDrive all-wheel-drive system with 2WD capability',
        'Starting MSRP $150,000'
      ]
    }
  },
  {
    name: 'Z4 sDrive30i',
    type: 'Roadster',
    specs: {
      description: 'BMW’s classic roadster legacy continued.',
      highlights: [
        '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $56,100'
      ]
    }
  },
  {
    name: 'Z4 M40i',
    type: 'Roadster · BMW M',
    specs: {
      description: 'M40i roadster combining open-top style with inline-six power.',
      highlights: [
        '3.0-liter BMW M TwinPower Turbo inline 6-cylinder',
        'Rear-wheel drive',
        'Starting MSRP $68,400'
      ]
    }
  }
]
