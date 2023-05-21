/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
'use client'

import { MapOffer } from '@/app/model/mapOffer'
import GoogleMap from 'google-maps-react-markers'
import { useCallback, useEffect, useRef, useState } from 'react'
import Supercluster from 'supercluster'
import { Marker } from '../marker/marker.component'

const containerStyle = {
  width: '100%',
  height: '700px'
}

interface MapComponentProps {
  mapOffers: MapOffer[]
  points: any[]
}

export default function Map ({ mapOffers, points }: MapComponentProps) {
  const mapRef = useRef(null)
  const [bounds, setBounds] = useState([])
  const [clusters, setClusters] = useState([])
  const [zoom, setZoom] = useState(10)

  const index = new Supercluster({
    radius: 75,
    maxZoom: 16,
    map: props => ({ sum: props.count }),
    reduce: (accumulated, props) => { accumulated.sum += props.sum }
  })
  index.load(points)

  const defaultProps = {
    center: {
      lat: mapOffers[0]?.coordinates.lat,
      lng: mapOffers[0]?.coordinates.lng
    }
  }

  useEffect(() => {
    setClusters(index.getClusters(bounds, zoom))
  }, [bounds, zoom])

  const createHandleOnClick = (id: number, latitude: number, longitude: number) => () => {
    const expansionZoom = Math.min(
      index.getClusterExpansionZoom(id),
      20
    )
    mapRef.current?.setZoom && mapRef.current?.setZoom(expansionZoom)
    mapRef.current?.panTo({ lat: latitude, lng: longitude })
  }

  useEffect(() => {
    console.log('render')
  })

  const handleApiLoaded = useCallback(({ map, maps }) => {
    // use map and maps objects
    mapRef.current = map
  }, [])

  return (
    // Important! Always set the container height explicitly
    <div style={containerStyle}>
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string}
        defaultCenter={defaultProps.center}
        defaultZoom={10}
        onGoogleApiLoaded={handleApiLoaded}
        onChange={({ bounds, zoom }) => {
          console.log(bounds)
          const ne = bounds.getNorthEast()
          const sw = bounds.getSouthWest()
          setZoom(zoom)
          setBounds([
            sw.lng(), sw.lat(), ne.lng(), ne.lat()
          ])
        }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const {
            cluster: isCluster,
            sum,
            count
          } = cluster.properties

          return (
            isCluster
              ? <Marker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                  onClick={createHandleOnClick(cluster.id, latitude, longitude)}
                >
                {sum}
              </Marker>
              : <Marker
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
