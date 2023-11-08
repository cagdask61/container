import { create } from "zustand";
import { ContainerModel } from "../models/container-model";
import { Skeleton } from "../components/Skeleton";

export interface ContainerStateModel {
    containers: Array<ContainerModel>;
    add: (model: ContainerModel) => void;
}

// Refactoring: JSON.parse(localStorage.getItem('containers')!) as []
// localStorage.setItem('containers', JSON.stringify(result))

export const useContainerStore = create<ContainerStateModel>((set) => ({
    containers: [],
    add: (model: ContainerModel) => set((state) => {
        const result = [...state.containers, model];
        return {
            containers: result
        }
    })
}))