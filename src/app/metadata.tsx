import { Metadata } from 'next'

export const metadata = async function generateMetadata (): Promise<Metadata> {
  const title = 'TechInfoJobs - Portal de búsqueda de empleo líder en el sector tecnológico'
  const description = 'Descubre las mejores ofertas de empleo Tech y acelera tu carrera profesional en el sector tecnológico con TechJob. Conectamos a profesionales altamente cualificados con oportunidades laborales a medida. ¡Explora ahora y encuentra tu próximo desafío en TechJob!'
  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico'
    },
    themeColor: '#167DB7',
    keywords: 'trabajo, empleo, ofertas de trabajo, bolsa de trabajo, sector tecnológico, tech'
  }
}
