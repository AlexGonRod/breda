export interface Taula {
    nom: string
    id?: number
}

export interface Taules extends Taula {
    telefon: string,
    adults: number,
    nens: number,
    veggi: boolean,
    veggiNum: number
}

