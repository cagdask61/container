import { memo, useEffect, useState } from "react";

import { Tree } from "primereact/tree";
import { TreeNode } from "primereact/treenode";

import { useContainerStore } from "../store/container-store";
import { useContainerSelectionStore } from "../store/container-selection-store";

function ObjectTree() {

    const containerState = useContainerStore();
    const containerSelectionState = useContainerSelectionStore();

    const [nodes, setNodes] = useState<Array<TreeNode>>([]);

    useEffect(() => {
        setNodes(containerState.containers.map<TreeNode>((c, i) => {
            const firstLongSection = c.longSection?.first;
            const secondLongSection = c.longSection?.second;

            const firstShortSection = c.shortSection?.first;
            const secondShortSection = c.shortSection?.second;

            return {
                key: `${i}`,
                label: `Konteyner ${i + 1}`,
                className: `${containerSelectionState.selectedContainer.key === c.key ? 'bg-white/5 rounded' : ''}`,
                selectable: true,
                children: [
                    {
                        key: `${i}-0`,
                        label: 'Uzun Alanlar',
                        className: 'text-[#ff2060]',
                        children: [
                            {
                                key: `${i}-0-0`,
                                label: `${firstLongSection?.key ? firstLongSection?.name : firstLongSection?.name}`,
                            },
                            {
                                key: `${i}-0-1`,
                                label: `${secondLongSection?.key ? secondLongSection?.name : secondLongSection?.name}`
                            }
                        ]
                    },
                    {
                        key: `${i}-1`,
                        label: 'Kısa Alanlar',
                        className: 'text-[#2080ff]',
                        children: [
                            {
                                key: `${i}-1-0`,
                                label: `${firstShortSection?.key ? firstShortSection?.name : firstShortSection?.name}`
                            },
                            {
                                key: `${i}-1-1`,
                                label: `${secondShortSection?.key ? secondShortSection?.name : secondShortSection?.name}`
                            }
                        ]
                    },
                ]
            }
        }))
    }, [containerState.containers, containerSelectionState.selectedContainer]);

    function deleteContainer() {
        containerState.deleteWithKey(containerSelectionState.selectedContainer.key);
        containerSelectionState.select({
            key: ""
        });
    }

    function updateContainer() {

    }

    return (
        <>
            {nodes.length > 0 && (
                <>
                    <div className="flex flex-row items-center justify-center gap-x-3">
                        <button onClick={deleteContainer} className="bg-red-400/10 outline outline-1 outline-red-400 px-6 py-2 rounded hover:bg-red-400/20">
                            Sil
                        </button>
                        <button onClick={updateContainer} className="bg-yellow-400/10 outline outline-1 outline-yellow-400 px-6 py-2 rounded hover:bg-yellow-400/20">
                            Güncelle
                        </button>
                    </div>
                    <Tree dragdropScope="bug" value={nodes} className="w-full overflow-auto" />
                </>
            )}
        </>
    )
}

export default memo(ObjectTree);