// To parse this data:
//
//   import { Convert, Place } from "./file";
//
//   const place = Convert.toPlace(json);

export interface Place {
    page:          number;
    per_page:      number;
    photos:        Photo[];
    total_results: number;
    next_page:     string;
}

export interface Photo {
    id:               number;
    width:            number;
    height:           number;
    url:              string;
    photographer:     string;
    photographer_url: string;
    photographer_id:  number;
    avg_color:        string;
    src:              Src;
    liked:            boolean;
    alt:              string;
}

export interface Src {
    original:  string;
    large2x:   string;
    large:     string;
    medium:    string;
    small:     string;
    portrait:  string;
    landscape: string;
    tiny:      string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPlace(json: string): Place {
        return JSON.parse(json);
    }

    public static placeToJson(value: Place): string {
        return JSON.stringify(value);
    }
}
