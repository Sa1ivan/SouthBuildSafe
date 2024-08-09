export interface DataResponseProcess {
    data: ProcessType[]
}

export interface ProcessType {
    process: ImagesProcess[];
}

export interface ImagesProcess {
    src: string;
    title?: string;
}
