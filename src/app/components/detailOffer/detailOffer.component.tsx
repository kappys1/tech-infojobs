
import { APIOfferDetail } from '@/app/model/offerDetail'
import { OfferTime } from '../cardOffer/cardOffer.component'

export const DetailOffer = ({ offer }: { offer: APIOfferDetail }) => {
  return (
    <section className='flex flex-col gap-4 pt-8'>
      <div className='flex flex-row items-center min-h-[200px] max-h-[250px] bg-white border border-gray-200 rounded-lg shadow lg:w-full md:flex-row lg:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 '>
        <img className='object-cover w-24 h-24 ml-6 rounded-sm' src={offer.profile?.logoUrl ?? '/none-logo.jpg'} alt='image author' />
        <div className='flex flex-col p-4 leading-normal w-full h-full grow md:self-start'>
          <h2 className='mb-0 md:text-xl font-bold tracking-tight text-gray-700 dark:text-blue-infojobs-400'>{offer.title}</h2>
          <a className='mb-8 text-sm font-normal dark:text-gray-300 text-blue-infojobs-400 hover:underline' href={offer.profile.websiteUrl}>{offer.profile.name}</a>
          <div className='flex gap-8'>
            <div className='flex gap-2 flex-col'>
              <p className='text-[0.85rem] font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.city}, {offer.province.value} ({offer.country.value})</p>
              <p className='text-[0.85rem] font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>Jornada {offer.journey.value}</p>
              <p className='text-[0.85rem] font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.contractType.value}</p>
            </div>
            <div className='flex gap-2 flex-col'>
              <p className='text-[0.85rem] font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.experienceMin.value}</p>
              <p className='text-[0.85rem] font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'><OfferTime updated={new Date(offer.updateDate)} published={new Date(offer.creationDate)} /></p>
              <p className='text-[0.85rem] font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.salaryDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col  p-4  min-h-[200px] bg-white border border-gray-200 rounded-lg shadow lg:w-full lg:max-w-2xl dark:border-gray-700 dark:bg-gray-800 relative'>
        <a className='absolute right-4 px-3 py-2 text-sm w-2/5 font-medium text-center text-white bg-blue-infojobs-400 rounded-lg hover:bg-blue-infojobs-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-infojobs-400 dark:hover:bg-blue-infojobs-700 ' href={`https://www.infojobs.net/candidate/application/index.xhtml?id_oferta=${offer.id}`}>Inscribirme en esta oferta</a>
        <div className='flex flex-col gap-2'>
          <h2 className='mb-2 text-2xl text-blue-infojobs-400 font-bold dark:text-white'>Requisitos</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400 dark:text-white'>Estudios mínimos</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.studiesMin.value}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400 dark:text-white'>Experiencia mínima</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.experienceMin.value}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400 dark:text-white'>Requisitos Mínimos</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.minRequirements}</p>
            </div>
          </div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='flex flex-col gap-2'>
          <h2 className='mb-2 text-2xl font-bold text-blue-infojobs-400 dark:text-white'>Descripción</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.description}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400 dark:text-white'>Categoría</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.category.value}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400 dark:text-white'>Nivel</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.jobLevel.value}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400  dark:text-white'>Vacantes</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.vacancies}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400 dark:text-white'>Salario</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.salaryDescription}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-md font-bold text-blue-infojobs-400 dark:text-white'>Inscritos en la oferta</h3>
              <p className='text-md font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'>{offer.applications}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
