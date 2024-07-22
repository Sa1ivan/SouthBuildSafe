export interface DataResponse {
    data: CatalogType[]
}

export interface CatalogType {
    school: Images[];
    firework: Images[];
    parking: Images[];
    europe: Images[];
}

export interface Images {
    src: string;
    title?: string;
    display?: string;
}
