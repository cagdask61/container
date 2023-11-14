export interface ContainerModel {
    key: string;
    skeleton: ContainerSectionOptionsModel;
    position?: [x: number, y: number, z: number];
    longSection?: ContainerSectionModel;
    shortSection?: ContainerSectionModel;
}

export interface ContainerSectionModel {
    position?: [x: number, y: number, z: number];
    first?: ContainerSectionOptionsModel;
    second?: ContainerSectionOptionsModel;
}

export interface ContainerSectionOptionsModel {
    name?: string;
    key?: string;
}