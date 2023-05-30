'use client'

import { Coordinates, MapOffer } from '@/app/model/mapOffer'
import GoogleMap from 'google-maps-react-markers'
import { useCallback } from 'react'

import { Marker } from '../marker/marker.component'
import { useInitMap } from './map.hook'

export interface MapComponentProps {
  mapOffers: MapOffer[]
  center: Coordinates | undefined
}

export const Map = ({ mapOffers, center }: MapComponentProps) => {
  const { clusters, defaultProps, mapRef, setBounds, setZoom, indexCluster, handleApiLoaded } = useInitMap({
    mapOffers,
    center
  })

  const createHandleOnClick =
    (id: number | string | undefined, latitude: number, longitude: number) => () => {
      const expansionZoom = Math.min(indexCluster.current.getClusterExpansionZoom(id), 20)
      mapRef.current?.setZoom && mapRef.current?.setZoom(expansionZoom)
      mapRef.current?.panTo({ lat: latitude, lng: longitude })
    }

  const handleOnChange = useCallback(({ bounds, zoom }: any) => {
    const ne = bounds.getNorthEast()
    const sw = bounds.getSouthWest()
    setZoom(zoom)
    setBounds([sw.lng(), sw.lat(), ne.lng(), ne.lat()])
  }, [])

  return (
  // Important! Always set the container height explicitly

    <div className='w-full h-[500px] lg:h-[700px] '>
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string}
        defaultCenter={defaultProps.center}
        defaultZoom={7}
        onGoogleApiLoaded={handleApiLoaded}
        onChange={handleOnChange}
        sty
        options={{
          disableDefaultUI: true,
          fullscreenControl: true,
          zoomControl: true,
          scaleControl: true
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const { cluster: isCluster, sum, count } = cluster.properties
          return isCluster
            ? (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
                onClick={createHandleOnClick(cluster.id, latitude, longitude)}
              >
                {sum}
              </Marker>
              )
            : (
              <Marker
                key={`crime-${cluster.properties.coordinateId}`}
                lat={latitude}
                lng={longitude}
              >
                {count}
              </Marker>
              )
        })}
      </GoogleMap>
    </div>
  )
}
