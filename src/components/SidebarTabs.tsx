import { memo } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';

import { useContainerSelectionStore } from '../store/container-selection-store';

import UpdateContainer from './UpdateContainer';
import GenerateContainer from "./GenerateContainer";
import Objects from "./Objects";

export default memo(function SidebarTabs() {

    const containerSelectionState = useContainerSelectionStore();

    return (
        <TabView className="w-full" >
            <TabPanel header="Containers" contentClassName="tab-height">
                <Objects />
            </TabPanel>
            <TabPanel header="Create" contentClassName="tab-height">
                <GenerateContainer />
            </TabPanel>
            <TabPanel header="Update" contentClassName="tab-height">
                {containerSelectionState.key ? (
                    <UpdateContainer />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-red-500 font-medium">
                            No selected containers!
                        </p>
                    </div>
                )}
            </TabPanel>
        </TabView>
    )
})