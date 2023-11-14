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
            {containerSelectionState.selectedKey && (
                <TabPanel header="Detaylar">
                    <UpdateContainer />
                </TabPanel>
            )}
        </TabView>
    )
}
export default memo(SidebarTabs);