'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error)
  }, [error])

  return (
    <main className="flex flex-col justify-center self-center m-auto p-8 max-w-screen-2xl">
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none  text-blue-infojobs-500 md:text-5xl lg:text-6xl lg:leading-[1.2] dark:text-blue-infojobs-400">
            We are experiencing <span className="text-red-500">errors</span>{' '}
            with the InfoJobs API.
          </h1>
          <p className="my-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
            Please, try again later or go directly to{' '}
            <a
              className="text-blue-infojobs-500"
              href="https://www.infojobs.net/"
            >
              InfoJobs
            </a>
          </p>
        </div>
        {/* workaround for scroll on refresh page */}
        <div id="ref-top" className="relative bottom-12 opacity-0">
          top{' '}
        </div>
      </section>
    </main>
  )
}
