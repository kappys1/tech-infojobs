
import React from 'react'
import styles from './marker.module.css'

interface MarkerProps {
  text?: string
  lat: number
  lng: number
  onClick?: () => void

}

export const Marker = (props: React.PropsWithChildren<MarkerProps>) => {
  return <div className={styles.marker} onClick={props.onClick}>{props.children}</div>
}
