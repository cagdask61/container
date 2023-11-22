import { memo } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';

import { useContainerSelectionStore } from '../store/container-selection-store';
import { UpdateContainer } from './UpdateContainer';
import GenerateContainer from "./GenerateContainer";
import Objects from "./Objects";

export default memo(function SidebarTabs() {

    const containerSelectionState = useContainerSelectionStore();

    return (
        <TabView className="w-full" >
            <TabPanel header="Nesneler" contentClassName="tab-height">
                <Objects />
            </TabPanel>
            <TabPanel header="Oluştur" contentClassName="tab-height">
                <GenerateContainer />
            </TabPanel>
            <TabPanel header="Güncelle" contentClassName="tab-height">
                {containerSelectionState.key ? (
                    <UpdateContainer />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-red-500 font-medium">
                            Seçilen Nesne Yok!
                        </p>
                    </div>
                )}
            </TabPanel>
        </TabView>
    )
})