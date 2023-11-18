import { create } from "zustand";
import { ContainerModel } from "../models/container-model";

export interface ContainerStateModel {
    containers: Array<ContainerModel>;
    add: (model: ContainerModel) => void;
    delete: (index: number) => void;
    deleteWithKey: (key: string) => void;
    update: (model: ContainerModel) => void;
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
    }),
    delete: (index: number) => set((state) => {
        state.containers.splice(index, 1);
        return {
            containers: state.containers
        }
    }),
    deleteWithKey: (key: string) => set((state) => {
        const containerIndex = state.containers.findIndex((c) => c.key === key);
        state.containers.splice(containerIndex, 1);

        return {
            containers: state.containers
        }
    }),
    update: (model: ContainerModel) => set((state) => {
        const containerIndex = state.containers.findIndex((c) => c.key === model.key);
        state.containers.splice(containerIndex, 1, model);

        return {
            containers: state.containers
        }
    })
}))