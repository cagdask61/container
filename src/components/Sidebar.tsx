import { useState } from "react";
import SidebarTabs from "./SidebarTabs";


export function Sidebar() {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            {!visible && (
                <button onClick={() => setVisible(true)} className="absolute top-0 left-0 mt-1 ml-1 rounded-full z-50 p-2 flex items-center justify-center bg-white ease-in-out duration-300 hover:scale-105">
                    <svg className="fill-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                </button>
            )}

            <div className={"absolute z-50 top-0 w-72 h-full bg-black/90 border-r border-white/30 backdrop-blur ease-in-out duration-300" + (visible ? ' left-0' : ' -left-[33rem]')}>
                <button onClick={() => setVisible(false)} className="right-0 top-0 mt-1 mr-1 absolute bg-white/10 rounded-full p-2 flex items-center justify-center hover:bg-white/20 ease-in-out duration-300 hover:scale-105">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
                <div className="w-full h-auto flex flex-col gap-y-5 items-center">
                    <h2 className="text-2xl text-white mt-1">Yapılandır</h2>
                    <SidebarTabs />
                </div>
            </div>
        </>
    )
}