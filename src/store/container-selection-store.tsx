import { create } from "zustand";
import { ContainerOptionsModel } from "../models/container-model";

export interface ContainerSelectionStateModel {
    selectedContainer: SelectedContainerModel;
    select: (container: SelectedContainerModel) => void;
}
export interface SelectedContainerModel {
    key: string;
    longSection?: {
        first?: ContainerOptionsModel;
        second?: ContainerOptionsModel;
    };
    shortSection?: {
        first?: ContainerOptionsModel;
        second?: ContainerOptionsModel;
    };
}

export const useContainerSelectionStore = create<ContainerSelectionStateModel>((set) => ({
    selectedContainer: {
        key: ""
    },
    select: (container: SelectedContainerModel) => set(() => {
        return {
            selectedContainer: container
        }
    })
}))