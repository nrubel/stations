export interface FProps {
    name: String
}

export interface HProps {
    onPower: Function
}

export interface Station{
    name: String,
    frequency: number,
}

export interface BProps {
    list: Station[],
    onSelect: Function,
    selected: String,
}
