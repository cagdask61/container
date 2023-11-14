import { create } from "zustand";
import { ContainerSectionOptionsModel } from "../models/container-model";

export interface ContainerUpdateStateModel {
    model: {
        longSection?: {
            first?: ContainerSectionOptionsModel;
            second?: ContainerSectionOptionsModel;
        },
        shortSection?: {
            first?: ContainerSectionOptionsModel;
            second?: ContainerSectionOptionsModel;
        }
    },
    changeModel: () => void;
}

export const useContainerUpdateStore = create<ContainerUpdateStateModel>((set) => ({
    model: {},
    changeModel() {
        
    },
}))