export interface MapOffer {
    count:       number;
    city:        string;
    province:    string;
    coordinates: Coordinates;
}

export interface Coordinates {
    lat: number;
    lng: number;
}
