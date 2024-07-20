export interface DataResponse {
    data: CatalogType[]
}

export interface CatalogType {
    school: Images[];
    firework: Images[];
    parking: Images[];
}

export interface Images {
    src: string;
    title?: string;
    display?: string;
}
