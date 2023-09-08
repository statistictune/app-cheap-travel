export interface GetPlacesModel {
    user_id: string;
}

export interface GetPlaceModel {
    user_id: string;
    id: string;
}

export interface ChangeStatusPlaceModel {
    user_id: string;
    id: string;
    active: boolean;
}

export interface PlaceModel {
    id: string,
    user_id: string,
    datetime_register: Date,
    origin: string,
    destination: string,
    departure_date: Date,
    return_date: Date,
    min_value: number,
    active: boolean
}




