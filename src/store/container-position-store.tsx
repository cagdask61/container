import { create } from "zustand";

export interface ContainerPositionStateModel {
    position: {
        direction: ContainerPositionVectorModel;
        container: ContainerPositionVectorModel;
    };

    setPosition: (direction: ContainerPositionVectorModel, container: ContainerPositionVectorModel) => void;
}

export interface ContainerPositionVectorModel {
    x: number;
    z: number;
}

export const useContainerPositionStore = create<ContainerPositionStateModel>((set) => ({
    position: {
        direction: {
            x: 0,
            z: 0
        },
        container: {
            x: 0,
            z: 0
        }
    },
    setPosition: (direction: ContainerPositionVectorModel, container: ContainerPositionVectorModel) => set(() => ({
        position: {
            direction: direction,
            container: container,
        }
    }))
}))