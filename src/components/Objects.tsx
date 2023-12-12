import { memo, useCallback } from "react";

import { Accordion, AccordionTab } from 'primereact/accordion';

import { useContainerStore } from "../store/container-store";
import { useContainerSelectionStore } from "../store/container-selection-store";

export default memo(function Objects() {

    const containerState = useContainerStore();
    const containerSelectionState = useContainerSelectionStore();

    const deleteContainer = useCallback(() => {
        containerState.deleteWithKey(containerSelectionState.key);
        containerSelectionState.select("");
    }, []);

    const deleteAll = () => {
        containerState.deleteAll();
        containerSelectionState.select("");
    }

    return (
        <>
            {containerState.containers.length > 0 && (
                <>
                    <div className="flex flex-col items-center justify-center gap-y-3 w-full">
                        <button onClick={() => deleteAll()} className="bg-red-400/10 outline outline-1 outline-red-400 w-full py-2 rounded hover:bg-red-400/20">
                            Delete All
                        </button>
                        <button onClick={() => deleteContainer()} className="bg-red-400/10 outline outline-1 outline-red-400 w-full py-2 rounded hover:bg-red-400/20">
                            Delete Selected Container
                        </button>
                        <button onClick={() => containerSelectionState.select("")} className="bg-yellow-400/10 outline outline-1 outline-yellow-400 w-full py-2 rounded hover:bg-yellow-400/20">
                            Un Select
                        </button>
                    </div>
                    <Accordion multiple className="w-full rounded-xl">

                        {containerState.containers.map((container) => (
                            <AccordionTab key={container.key} className={'bg-white/10'} headerTemplate={
                                <span className={(containerSelectionState.key === container.key ? 'text-yellow-500' : '')}>
                                    Container
                                </span>
                            }>
                                <div className="flex flex-col gap-y-3">
                                    <div className="flex flex-col items-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>Long Sections</span>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#ff2060] px-2 rounded-full">x</div>
                                            <span>{container.longSection?.first?.name}</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#ff2060] w-6 h-6 rounded-full"></div>
                                            <span>{container.longSection?.second?.name}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>Short Sections</span>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#2080ff] px-2 rounded-full">z</div>
                                            <span>{container.shortSection?.first?.name}</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#2080ff] w-6 h-6 rounded-full"></div>
                                            <span>{container.shortSection?.second?.name}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>Position</span>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#ff2060] px-2 rounded-full">x</div>
                                            <span>{container.position.x}</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#20df80] px-2 rounded-full">y</div>
                                            <span>{container.position.y}</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#2080ff] px-2 rounded-full">z</div>
                                            <span>{container.position.z}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>Actions</span>
                                        {containerSelectionState.key === container.key ? (
                                            <button onClick={() => containerSelectionState.select("")} className="bg-blue-500 max-w-[7rem] w-full rounded hover:bg-blue-500/80">
                                                Un Select
                                            </button>
                                        ) : (
                                            <button onClick={() => containerSelectionState.select(container.key)} className="bg-blue-500 max-w-[7rem] w-full rounded hover:bg-blue-500/80">
                                                Select
                                            </button>
                                        )}
                                        <button onClick={() => {
                                            containerState.deleteWithKey(container.key)
                                            containerSelectionState.select("")
                                        }}
                                            className="bg-red-500 max-w-[7rem] w-full rounded hover:bg-red-500/80">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </AccordionTab>
                        ))}
                    </Accordion>
                </>
            )
            }
        </>
    )
})