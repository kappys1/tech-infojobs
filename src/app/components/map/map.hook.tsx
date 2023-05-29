/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useRef, useState } from 'react'
import Supercluster from 'supercluster'
import { MapComponentProps } from './map.component'

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
    }
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

  const handleApiLoaded = ({ map }: any) => {
    // use map and maps objects
    mapRef.current = map
    console.log(mapRef.current)
  }

  return { mapRef, bounds, setBounds, clusters, setZoom, defaultProps, indexCluster, handleApiLoaded }
}
