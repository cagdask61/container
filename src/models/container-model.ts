export interface ContainerModel {
    key: string;
    skeleton: ContainerOptionsModel;
    position: { x: number, y: number, z: number };
    longSection?: ContainerSectionModel;
    shortSection?: ContainerSectionModel;
}

export interface ContainerSectionModel {
    position: { x: number, y: number, z: number };
    first?: ContainerOptionsModel;
    second?: ContainerOptionsModel;
}

export interface ContainerOptionsModel {
    name?: string;
    key?: string;
}