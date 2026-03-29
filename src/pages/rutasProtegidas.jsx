import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, Image } from 'lucide-react'

const CATEGORIAS = ['Todas', 'Canchas', 'Instalaciones', 'Eventos', 'Nocturnas']

const FOTOS = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/proyecto3/image/upload/v1774668920/Captura_de_pantalla_2026-03-28_003424_wlohvq.png',
    thumb: 'https://res.cloudinary.com/proyecto3/image/upload/v1774668920/Captura_de_pantalla_2026-03-28_003424_wlohvq.png',
    categoria: 'Canchas',
    featured: true,
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/proyecto3/image/upload/v1774668886/WhatsApp_Image_2026-03-28_at_12.12.13_AM_jpmvvs.jpg',
    thumb: 'https://res.cloudinary.com/proyecto3/image/upload/v1774668886/WhatsApp_Image_2026-03-28_at_12.12.13_AM_jpmvvs.jpg',
    categoria: 'Canchas',
    titulo: 'Cancha 2 — Fútbol 5',
    desc: 'Iluminación LED de alta potencia. Disponible de noche.',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/proyecto3/image/upload/v1774670517/WhatsApp_Image_2026-03-27_at_11.52.59_PM_1_shbdkt.jpg',
    thumb: 'https://res.cloudinary.com/proyecto3/image/upload/v1774670517/WhatsApp_Image_2026-03-27_at_11.52.59_PM_1_shbdkt.jpg',
    categoria: 'Nocturnas',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/proyecto3/image/upload/v1774669192/WhatsApp_Image_2026-03-27_at_11.52.59_PM_lonwtj.jpg',
    thumb: 'https://res.cloudinary.com/proyecto3/image/upload/v1774669192/WhatsApp_Image_2026-03-27_at_11.52.59_PM_lonwtj.jpg',
    categoria: 'Canchas',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/proyecto3/image/upload/v1774669431/WhatsApp_Image_2026-03-28_at_12.40.46_AM_tvfz3s.jpg',
    thumb: 'https://res.cloudinary.com/proyecto3/image/upload/v1774669431/WhatsApp_Image_2026-03-28_at_12.40.46_AM_tvfz3s.jpg',
    categoria: 'Instalaciones',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=75',
    categoria: 'Eventos',
    featured: true,
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/proyecto3/image/upload/v1774669602/WhatsApp_Image_2026-03-28_at_12.46.22_AM_ni6wyx.jpg',
    thumb: 'https://res.cloudinary.com/proyecto3/image/upload/v1774669602/WhatsApp_Image_2026-03-28_at_12.46.22_AM_ni6wyx.jpg',
    categoria: 'Eventos',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=600&q=75',
    categoria: 'Nocturnas',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=75',
    categoria: 'Instalaciones',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&q=75',
    categoria: 'Canchas',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=75',
    categoria: 'Eventos',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=600&q=75',
    categoria: 'Nocturnas',
    featured: true,
  },
]
