export interface Plant {
    id:                         number;
    common_name:                string;
    scientific_name:            string[];
    other_name:                 string[];
    family:                     string;
    origin:                     null;
    type:                       string;
    dimension:                  string;
    cycle:                      string;
    watering:                   string;
    attracts:                   string[];
    propagation:                string[];
    hardiness:                  Hardiness;
    hardiness_location_image:   string;
    flowers:                    boolean;
    flowering_season:           string;
    color:                      string;
    sunlight:                   string[];
    soil:                       any[];
    problem:                    string;
    pest_susceptibility:        null;
    cones:                      boolean;
    fruits:                     boolean;
    edible_fruit:               boolean;
    edible_fruit_taste_profile: string;
    fruit_nutritional_value:    string;
    fruit_color:                null;
    fruiting_season:            null;
    harvest_season:             null;
    harvest_method:             string;
    leaf:                       boolean;
    leaf_color:                 string[];
    edible_leaf:                boolean;
    edible_leaf_taste_profile:  string;
    leaf_nutritional_value:     string;
    growth_rate:                string;
    maintenance:                string;
    medicinal:                  boolean;
    medicinal_use:              string;
    medicinal_method:           string;
    poisonous_to_humans:        boolean;
    poison_effects_to_humans:   string;
    poison_to_humans_cure:      string;
    poisonous_to_pets:          boolean;
    poison_effects_to_pets:     string;
    poison_to_pets_cure:        string;
    drought_tolerant:           boolean;
    salt_tolerant:              boolean;
    thorny:                     boolean;
    invasive:                   boolean;
    rare:                       boolean;
    rare_level:                 string;
    tropical:                   boolean;
    cuisine:                    boolean;
    cuisine_list:               string;
    indoor:                     boolean;
    care_level:                 string;
    description:                string;
    default_image:              DefaultImage;
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

export interface Hardiness {
    min: string;
    max: string;
}