export interface Character {
    name: string,
    hp_max: number,
    strength: number,
    hp: number   
}

export let Link: Character = {
    name: "Link",
    hp_max: 60,
    strength: 15,
    hp: 60 
};

export let Enemy: Character = {
    name: "Bokoblin",
    hp_max: 30,
    strength: 5,
    hp: 30 
};

export let Boss: Character = {
    name: "Ganon",
    hp_max: 150,
    strength: 20,
    hp: 150
};