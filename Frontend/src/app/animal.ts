export interface Animal {
    
    name:            string;
    taxonomy:        Taxonomy;
    locations:       string[];
    characteristics: Characteristics;
}

export interface Characteristics {
    prey:                     string;
    name_of_young:            string;
    group_behavior:           string;
    biggest_threat:           string;
    most_distinctive_feature: string;
    gestation_period:         string;
    litter_size:              string;
    habitat:                  string;
    diet:                     string;
    type:                     string;
    common_name:              string;
    origin:                   string;
    number_of_species:        string;
    location:                 string;
    color:                    string;
    skin_type:                string;
    top_speed:                string;
    lifespan:                 string;
    weight:                   string;
    height:                   string;
    length:                   string;
    age_of_sexual_maturity:   string;
    age_of_weaning:           string;
}

export interface Taxonomy {
    kingdom:         string;
    phylum:          string;
    class:           string;
    order:           string;
    family:          string;
    genus:           string;
    scientific_name: string;
}


