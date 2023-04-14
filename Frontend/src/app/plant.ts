export interface Plant {

    id:              number;
    common_name:     string;
    scientific_name: string[];
    other_name:      string[] | null;
    cycle?:          string;
    watering?:       string;
    sunlight:        string[];
    default_image:   DefaultImage;
}

export interface DefaultImage {
    image_id:     number;
    license:      number;
    license_name: string;
    license_url:  string;
    original_url: string;
    regular_url:  string;
    medium_url:   string;
    small_url:    string;
    thumbnail:    string;
}


