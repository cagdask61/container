import { memo } from "react";

import { Accordion, AccordionTab } from 'primereact/accordion';

import { useContainerStore } from "../store/container-store";
import { useContainerSelectionStore } from "../store/container-selection-store";

export default memo(function Objects() {

    const containerState = useContainerStore();
    const containerSelectionState = useContainerSelectionStore();

    function deleteContainer() {
        containerState.deleteWithKey(containerSelectionState.key);
        containerSelectionState.select("");
    }

    return (
        <>
            {containerState.containers.length > 0 && (
                <>
                    <div className="flex flex-col items-center justify-center gap-y-3">
                        <button onClick={deleteContainer} className="bg-red-400/10 outline outline-1 outline-red-400 px-6 py-2 rounded hover:bg-red-400/20">
                            Seçilen Nesneyi Sil
                        </button>
                        <button onClick={() => containerSelectionState.select("")} className="bg-green-400/10 outline outline-1 outline-green-400 px-6 py-2 rounded hover:bg-green-400/20">
                            Seçimi Kaldır
                        </button>
                    </div>
                    <Accordion multiple className="w-full">

                        {containerState.containers.map((c, i) => (
                            <AccordionTab key={c.key} className={'bg-white/10'} headerTemplate={
                                <span className={(containerSelectionState.key === c.key ? 'text-[#20df80]' : '')}>
                                    Konteyner {i + 1}
                                </span>
                            }>
                                <div className="flex flex-col gap-y-3">
                                    <div className="flex flex-col items-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>Uzun Kenarlar</span>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#ff2060] px-2 rounded-full">x</div>
                                            <span>{c.longSection?.first?.name}</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#ff2060] w-6 h-6 rounded-full"></div>
                                            <span>{c.longSection?.second?.name}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>Kısa Kenarlar</span>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#2080ff] px-2 rounded-full">z</div>
                                            <span>{c.shortSection?.first?.name}</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#2080ff] w-6 h-6 rounded-full"></div>
                                            <span>{c.shortSection?.second?.name}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>Pozisyon</span>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#ff2060] px-2 rounded-full">x</div>
                                            <span>{c.position?.[0]}</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="bg-[#2080ff] px-2 rounded-full">z</div>
                                            <span>{c.position?.[2]}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-y-3 bg-white/5 rounded py-5">
                                        <span>İşlemler</span>
                                        {containerSelectionState.key === c.key ? (
                                            <button onClick={() => containerSelectionState.select("")} className="bg-blue-500 w-32 px-1 rounded hover:bg-blue-500/80">
                                                Seçimi Kaldır
                                            </button>
                                        ) : (
                                            <button onClick={() => containerSelectionState.select(c.key)} className="bg-blue-500 w-24 px-1 rounded hover:bg-blue-500/80">
                                                Seç
                                            </button>
                                        )}
                                        <button onClick={() => {
                                            containerState.deleteWithKey(c.key)
                                            containerSelectionState.select("")
                                        }}
                                            className="bg-red-500 w-24 px-1 rounded hover:bg-red-500/80">
                                            Sil
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