import { useEffect, useState } from "react";

import { Tree } from "primereact/tree";
import { TreeNode } from "primereact/treenode";
import { Dialog } from "primereact/dialog";

import { useContainerStore } from "../store/container-store";
import { Skeleton } from "./Skeleton";
import { LongWall } from "./LongWall";
import { ShortDoor } from "./ShortDoor";
import { ShortWindow } from "./ShortWindow";
import { LONG_WALL } from "../constants/long-wall";
import { SHORT_DOOR } from "../constants/short-door";
import { SHORT_WINDOW } from "../constants/short-window";
import { GenerateContainer } from "./GenerateContainer";

export function Sidebar() {

    const containerState = useContainerStore();

    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [nodes, setNodes] = useState<Array<TreeNode>>([]);

    function generateContainerModel() {
        containerState.add({
            position: [0, 0, 24 * containerState.containers.length],
            skeleton: <Skeleton position={[0, 0, 0]} />,
            longSection: {
                first: <LongWall position={LONG_WALL.first.position} />,
                second: <LongWall position={LONG_WALL.second.position} />
            },
            shortSection: {
                first: <ShortDoor position={SHORT_DOOR.first.position} />,
                second: <ShortWindow position={SHORT_WINDOW.second.position} rotation={SHORT_WINDOW.second.rotation} />
            }
        })
    }

    useEffect(() => {
        setNodes(containerState.containers.map<TreeNode>((_, i) => ({
            key: `${i}`,
            label: `İskelet ${i + 1}`,
            children: [
                {
                    key: `${i}-0`,
                    label: 'Uzun Alanlar',
                    children: [
                        {
                            key: `${i}-0-0`,
                            label: 'Sol Uzun Kısım'
                        },
                        {
                            key: `${i}-0-1`,
                            label: 'Sağ Uzun Kısım'
                        }
                    ]
                },
                {
                    key: `${i}-1`,
                    label: 'Kısa Alanlar',
                    children: [
                        {
                            key: `${i}-1-0`,
                            label: 'Sol Kısa Kısım'
                        },
                        {
                            key: `${i}-1-1`,
                            label: 'Sağ Kısa Kısım'
                        }
                    ]
                }
            ]
        })))
    }, [containerState.containers]);

    return (
        <>
            <Dialog header="Konteyner Oluştur" visible={dialogVisible} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => setDialogVisible(false)}>
                <GenerateContainer onSubmitHandler={() => (setDialogVisible(false))} />
            </Dialog>

            {!visible && (
                <button onClick={() => setVisible(true)} className="absolute top-0 left-0 mt-1 ml-1 rounded-full z-50 p-2 flex items-center justify-center bg-black ease-in-out duration-300 hover:scale-105">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                </button>
            )}

            <div className={"absolute z-50 top-0 w-72 h-full bg-black/80 backdrop-blur ease-in-out duration-300" + (visible ? ' left-0' : ' -left-[33rem]')}>
                <button onClick={() => setVisible(false)} className="right-0 top-0 mt-1 mr-1 absolute bg-white/5 rounded-full p-2 flex items-center justify-center hover:bg-white/20 ease-in-out duration-300 hover:scale-105">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
                <div className="w-full h-auto flex flex-col gap-y-5 items-center">
                    <h2 className="text-3xl text-white mt-1">Ayarlar</h2>
                    <div className="p-2 flex items-center justify-center gap-x-2 rounded w-52">
                        <button className="outline outline-1 outline-white/50 hover:bg-white/10 px-4 py-2 font-normal rounded" onClick={() => setDialogVisible(true)}>
                            Oluştur
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-y-5 p-2 w-full h-96 overflow-auto rounded">
                        <span className="">Nesneler</span>
                        {nodes.length > 0 && (
                            <Tree value={nodes} className="w-full overflow-auto" />
                        )}
                    </div>
                </div>
            </div>



        </>
    )
}


/*
<div className="flex flex-row gap-x-2 items-center">
          <InputNumber value={position.x} onValueChange={(e) => setPosition({ x: e.value!, y: position.y, z: position.z })} mode="decimal" showButtons />
          <InputNumber value={position.y} onValueChange={(e) => setPosition({ x: position.x, y: e.value!, z: position.z })} mode="decimal" showButtons />
          <InputNumber value={position.z} onValueChange={(e) => setPosition({ x: position.x, y: position.y, z: e.value! })} mode="decimal" showButtons />
        </div>
*/