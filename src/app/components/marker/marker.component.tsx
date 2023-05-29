
import React from 'react'

interface MarkerProps {
  text?: string
  lat: number
  lng: number
  onClick?: () => void

}

export const Marker = (props: React.PropsWithChildren<MarkerProps>) => {
  return <div className='flex justify-center items-center w-3 h-3 border-blue-infojobs-500 border-4 rounded-full bg-white text-blue-infojobs-500 text-md font-bold p-4' onClick={props.onClick}>{props.children}</div>
}
