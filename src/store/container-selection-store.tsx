import { create } from "zustand";

export interface ContainerSelectionStateModel {
    key: string;
    select: (key: string) => void;
}

export const useContainerSelectionStore = create<ContainerSelectionStateModel>((set) => ({
    key: "",
    select: (key: string) => set(() => ({
        key: key
    }))
}))