export interface ContainerModel {
    skeleton: JSX.Element;
    position?: [x: number, y: number, z: number];
    longSection?: ContainerLongSectionModel;
    shortSection?: ContainerShortSectionModel;
}

export interface ContainerLongSectionModel {
    position?: [x: number, y: number, z: number];
    first?: JSX.Element;
    second?: JSX.Element;
}

export interface ContainerShortSectionModel {
    position?: [x: number, y: number, z: number];
    first?: JSX.Element;
    second?: JSX.Element;
}