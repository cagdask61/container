import { memo } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';

import { useContainerSelectionStore } from '../store/container-selection-store';
import { UpdateContainer } from './UpdateContainer';
import GenerateContainer from "./GenerateContainer";
import ObjectTree from "./ObjectTree";

function SidebarTabs() {

    const containerSelectionState = useContainerSelectionStore();

    return (
        <TabView className="w-full" >
            <TabPanel header="Nesneler" contentClassName="tab-height">
                <ObjectTree />
            </TabPanel>
            <TabPanel header="Oluştur" contentClassName="tab-height">
                <GenerateContainer />
            </TabPanel>
            <TabPanel header="Güncelle" contentClassName="tab-height">
                {containerSelectionState.selectedContainer.key ? (
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
}
export default memo(SidebarTabs);