import { Location } from "../model/geocoding"

interface Cache {
    [key: string]: Location
}

export const cache: Cache = {
    'Madrid, Madrid': { lat: 40.4167754, lng: -3.7037902 },
    'Tomelloso, Ciudad Real': { lat: 39.15837450000001, lng: -3.0214475 },
    'Girona, Girona': { lat: 41.9794005, lng: 2.8214264 },
    'Almería, Almería': { lat: 37.1035929, lng: -2.302446 },
    'Murcia, Murcia': { lat: 37.9922399, lng: -1.1306544 },
    'Sevilla, Sevilla': { lat: 37.3890924, lng: -5.9844589 },
    'Guadalajara, Guadalajara': { lat: 20.6596988, lng: -103.3496092 },
    'Boadilla del Monte, Madrid': { lat: 40.4122794, lng: -3.8887699 },
    'Barcelona, Barcelona': { lat: 41.3873974, lng: 2.168568 },
    'Pozuelo de Alarcón, Madrid': { lat: 40.4440627, lng: -3.8058517 },
    'Coslada, Madrid': { lat: 40.4260459, lng: -3.5651646 },
    'Sant Cugat del Vallès, Barcelona': { lat: 41.4664438, lng: 2.0701279 },
    'Sant Pere de Riudebitlles, Barcelona': { lat: 41.4504992, lng: 1.7044013 },
    'Toda España, Madrid': { lat: 40.4167754, lng: -3.7037902 },
    'Tres Cantos, Madrid': { lat: 40.600727, lng: -3.7079745 },
    'Zaragoza, Vizcaya/Bizkaia': { lat: 41.6488226, lng: -0.8890853 },
    'Málaga, Málaga': { lat: 36.7211113, lng: -4.4210306 },
    'Getafe, Madrid': { lat: 40.3082504, lng: -3.7323934 },
    'Santa Cruz de Tenerife, Santa Cruz de Tenerife': { lat: 28.2915637, lng: -16.6291304 },
    'Valencia, Valencia/València': { lat: 39.4699075, lng: -0.3762881 },
    'Cáceres, Cáceres': { lat: 39.4751257, lng: -6.371453 },
    'Alzira, Valencia/València': { lat: 39.1511854, lng: -0.4333643 },
    'Granada, Granada': { lat: 37.1774605, lng: -3.5984368 }
}
