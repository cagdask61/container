import { create } from "zustand";

import { ContainerModel } from "../models/container-model";
import { getObject, setObject } from "../helpers/local-storage";

const STORAGE_NAME = "containers";

export interface ContainerStateModel {
    containers: Array<ContainerModel>;
    add: (model: ContainerModel) => void;
    delete: (index: number) => void;
    deleteWithKey: (key: string) => void;
    update: (model: ContainerModel) => void;
    deleteAll: () => void;
}

export const useContainerStore = create<ContainerStateModel>((set) => ({
    containers: getObject(STORAGE_NAME)! ?? [],
    add: (model: ContainerModel) => set((state) => {
        const result = [...state.containers, model];
        setObject(STORAGE_NAME, result);

        return {
            containers: result
        }
    }),
    delete: (index: number) => set((state) => {
        state.containers.splice(index, 1);
        setObject(STORAGE_NAME, state.containers);

        return {
            containers: state.containers
        }
    }),
    deleteWithKey: (key: string) => set((state) => {
        if (!key || key === null || key === undefined) throw new Error("Key is null or undefined");

        const containerIndex = state.containers.findIndex((c) => c.key === key);
        state.containers.splice(containerIndex, 1);
        setObject(STORAGE_NAME, state.containers);

        return {
            containers: state.containers
        }
    }),
    update: (model: ContainerModel) => set((state) => {
        const containerIndex = state.containers.findIndex((c) => c.key === model.key);
        state.containers.splice(containerIndex, 1, model);
        setObject(STORAGE_NAME, state.containers);

        return {
            containers: state.containers
        }
    }),
    deleteAll: () => set((state) => {
        state.containers.splice(0, state.containers.length);
        setObject(STORAGE_NAME, state.containers);

        return {
            containers: state.containers
        }
    })
}))