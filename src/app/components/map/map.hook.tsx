/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useRef, useState } from 'react'
import Supercluster from 'supercluster'
import { MapComponentProps } from './map.component'
import { getNightModeStyles } from './map.utils'

export const useInitMap = ({ mapOffers, center }: MapComponentProps) => {
  const mapRef = useRef<any>(null)
  const [bounds, setBounds] = useState<any>([])
  const [clusters, setClusters] = useState < Array<Supercluster.PointFeature<any>>>([])
  const [zoom, setZoom] = useState(10)
  const indexCluster = useRef<any>(null)

  const defaultProps = {
    center: {
      lat: center ? center.lat : mapOffers[0]?.coordinates.lat,
      lng: center ? center.lng : mapOffers[0]?.coordinates.lng
    },
    style: document.documentElement.classList.contains('dark') ? getNightModeStyles() : {}
  }

  const points: Array<Supercluster.PointFeature<any>> = mapOffers.map(map => ({
    type: 'Feature',
    properties: { cluster: false, coordinateId: `${map.city.key}-${map.country.key}`, category: `${map.city.key}-${map.country.key}`, count: map.count },
    geometry: {
      type: 'Point',
      coordinates: [
        map.coordinates.lng,
        map.coordinates.lat
      ]
    } as any
  }))

  indexCluster.current = new Supercluster({
    radius: 75,
    maxZoom: 16,
    map: props => ({ sum: props.count }),
    reduce: (accumulated, props) => { accumulated.sum += props.sum }
  })

  indexCluster.current.load(points)

  useEffect(() => {
    setClusters(indexCluster.current.getClusters(bounds, zoom))
  }, [bounds, zoom, mapOffers])

  useEffect(() => {
    mapRef.current?.panTo(center ?? defaultProps.center)
  }, [center])

  const checkTheme = () => {
    const theme = localStorage.getItem('color-theme')
    if (theme === 'dark' || document.documentElement.classList.contains('dark')) {
      mapRef.current?.setOptions({ styles: getNightModeStyles() })
    } else {
      mapRef.current?.setOptions({ styles: {} })
    }
  }

  // night mode
  useEffect(() => {
    const changeDarkMode = () => checkTheme()
    window.addEventListener('theme-changed', changeDarkMode)
    return () => window.removeEventListener('theme-changed', changeDarkMode)
  }, [])

  const handleApiLoaded = ({ map }: any) => {
    // use map and maps objects
    mapRef.current = map
    // checkTheme()
  }

  return { mapRef, bounds, setBounds, clusters, setZoom, defaultProps, indexCluster, handleApiLoaded }
}
