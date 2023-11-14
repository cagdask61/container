import { create } from "zustand";

export interface ContainerSelectionStateModel {
    selectedKey: string;
    select: (key: string) => void;
}

export const useContainerSelectionStore = create<ContainerSelectionStateModel>((set) => ({
    selectedKey: "",
    select: (key: string) => set(() => ({
        selectedKey: key
    }))
}))