import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";

import { LongWall } from "./objects/LongWall";
import { LONG_WALL } from "../constants/long-wall";
import { ShortDoor } from "./objects/ShortDoor";
import { SHORT_DOOR } from "../constants/short-door";
import { SHORT_WINDOW } from "../constants/short-window";
import { ShortWindow } from "./objects/ShortWindow";
import { useContainerStore } from "../store/container-store";
import { Skeleton } from "./objects/Skeleton";

export interface ContainerSection {
    name?: string;
    key?: string;
    element?: JSX.Element;
}

export function GenerateContainer() {

    const containerState = useContainerStore();

    const longSections = {
        firstSections: [,
            {
                name: "Boş",
                key: ""
            },
            {
                name: "Duvar",
                key: "longWall",
                element: <LongWall position={LONG_WALL.first.position} />,
            },
        ] as Array<ContainerSection>,
        secondSections: [
            {
                name: "Boş",
                key: ""
            },
            {
                name: "Duvar",
                key: "longWall",
                element: <LongWall position={LONG_WALL.second.position} />,
            },
        ] as Array<ContainerSection>
    }

    const shortSections = {
        firstSections: [
            {
                name: "Boş",
                key: ""
            },
            {
                name: "Kapı",
                key: "shortDoor",
                element: <ShortDoor position={SHORT_DOOR.first.position} />
            },
            {
                name: 'Pencere',
                key: "shortWindow",
                element: <ShortWindow position={SHORT_WINDOW.first.position} />
            }
        ] as Array<ContainerSection>,
        secondSections: [
            {
                name: "Boş",
                key: ""
            },
            {
                name: "Kapı",
                key: "shortDoor",
                element: <ShortDoor position={SHORT_DOOR.second.position} rotation={SHORT_DOOR.second.rotation} />
            },
            {
                name: 'Pencere',
                key: "shortWindow",
                element: <ShortWindow position={SHORT_WINDOW.second.position} rotation={SHORT_WINDOW.second.rotation} />
            }
        ] as Array<ContainerSection>,
    }

    const { handleSubmit, values, resetForm, setFieldValue } = useFormik({
        initialValues: {
            longSection: {
                first: "",
                second: "",
            },
            shortSection: {
                first: "",
                second: "",
            }
        },
        onSubmit: (values) => {
            const firstLongSection = longSections.firstSections.find(fls => fls?.key === values.longSection.first);
            const secondLongSection = longSections.secondSections.find(sls => sls?.key === values.longSection.second);

            const firstShortSection = shortSections.firstSections.find(fss => fss?.key === values.shortSection.first);
            const secondShortSection = shortSections.secondSections.find(sss => sss?.key === values.shortSection.second);

            containerState.add({
                position: [0, 0, 24 * containerState.containers.length],
                skeleton: <Skeleton position={[0, 0, 0]} />,
                longSection: {
                    first: firstLongSection?.element,
                    second: secondLongSection?.element
                },
                shortSection: {
                    first: firstShortSection?.element,
                    second: secondShortSection?.element
                }
            });

            resetForm();
        }
    })



    return (
        <form method="post" onSubmit={handleSubmit} className="flex flex-col items-center gap-y-3">
            <div className="flex flex-col items-center justify-center gap-y-5 bg-white/5 p-3 rounded w-full">
                <span className="text-xl">Uzun Kısımlar</span>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="firstLongSection" className="col-span-3 w-full h-full flex items-center justify-center">
                        <span className="bg-[#ff2060] rounded-full px-2">x</span>
                    </label>
                    <Dropdown name="firstLongSection" inputId="firstLongSection" value={values.longSection.first} onChange={(e) => { setFieldValue('longSection.first', e.value) }} options={longSections.firstSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="secondLongSection" className="col-span-3 w-full h-full flex items-center justify-center">
                        <span className="bg-[#ff2060] rounded-full w-5 h-5"></span>
                    </label>
                    <Dropdown name="secondLongSection" inputId="secondLongSection" value={values.longSection.second} onChange={(e) => { setFieldValue('longSection.second', e.value) }} options={longSections.secondSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5 bg-white/5 p-3 rounded w-full">
                <span className="text-xl">Kısa Kısımlar</span>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="firstShortSection" className="col-span-3 w-full h-full flex items-center justify-center">
                        <span className="bg-[#2080ff] rounded-full px-2">z</span>
                    </label>
                    <Dropdown name="firstShortSection" inputId="firstShortSection" value={values.shortSection.first} onChange={(e) => { setFieldValue('shortSection.first', e.value) }} options={shortSections.firstSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="secondShortSection" className="col-span-3 w-full h-full flex items-center justify-center">
                    <span className="bg-[#2080ff] rounded-full w-5 h-5"></span>
                    </label>
                    <Dropdown name="secondShortSection" inputId="secondShortSection" value={values.shortSection.second} onChange={(e) => { setFieldValue('shortSection.second', e.value) }} options={shortSections.secondSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
            </div>
            <div className="w-full">
                <button type="submit" className="bg-green-400 active:bg-green-300 hover:scale-95 text-black w-full h-10 rounded font-medium ease-in-out duration-300">Oluştur</button>
            </div>
        </form>
    )
}