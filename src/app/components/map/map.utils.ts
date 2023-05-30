export const getNightModeStyles = () => {
  const nightModeStyles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e'
        }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#746855'
        }
      ]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e'
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3ba8e7'
        },
        {
          weight: 1
        }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#309bd9'
        }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#3ba8e7'
        }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3ba8e7'
        },
        {
          saturation: -10
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'poi.attraction',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#309bd9'
        }
      ]
    },
    {
      featureType: 'poi.government',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.medical',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#309bd9'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76'
        }
      ]
    },
    {
      featureType: 'poi.place_of_worship',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.school',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#309bd9'
        }
      ]
    },
    {
      featureType: 'poi.sports_complex',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#309bd9'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#b2ddf6'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#0e5076'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c'
        }
      ]
    }
  ]

  return nightModeStyles
}
