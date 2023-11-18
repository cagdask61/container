import { useEffect } from "react";

import { useFormik } from "formik";
import { Dropdown } from "primereact/dropdown";

import { useLongSections } from "../hooks/use-long-sections"
import { useShortSections } from "../hooks/use-short-sections";
import { useContainerSelectionStore } from "../store/container-selection-store";
import { useContainerStore } from "../store/container-store";
import { useSkeletons } from "../hooks/use-skeletons";

export function UpdateContainer() {

    const skeletons = useSkeletons();
    const longSections = useLongSections();
    const shortSections = useShortSections();
    const containerState = useContainerStore();
    const containerSelectionState = useContainerSelectionStore();

    const { values, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            longSection: {
                firstKey: "",
                secondKey: "",
            },
            shortSection: {
                firstKey: "",
                secondKey: "",
            }
        },
        onSubmit(values) {
            const firstLongSection = longSections.firstSections.find(fls => fls?.key === values.longSection.firstKey);
            const secondLongSection = longSections.secondSections.find(sls => sls?.key === values.longSection.secondKey);

            const firstShortSection = shortSections.firstSections.find(fss => fss?.key === values.shortSection.firstKey);
            const secondShortSection = shortSections.secondSections.find(sss => sss?.key === values.shortSection.secondKey);

            containerState.update({
                key: containerSelectionState.selectedContainer.key,
                skeleton: {
                    key: skeletons[0]?.key,
                    name: skeletons[0]?.name,
                },
                longSection: {
                    first: {
                        key: firstLongSection?.key,
                        name: firstLongSection?.name
                    },
                    second: {
                        key: secondLongSection?.key,
                        name: secondLongSection?.name
                    }
                },
                shortSection: {
                    first: {
                        key: firstShortSection?.key,
                        name: firstShortSection?.name
                    },
                    second: {
                        key: secondShortSection?.key,
                        name: secondShortSection?.name
                    }
                }
            })

            containerSelectionState.select({
                key: containerSelectionState.selectedContainer.key
            });

        }
    });

    useEffect(() => {
        setFieldValue('longSection.firstKey', containerSelectionState.selectedContainer.longSection?.first?.key);
        setFieldValue('longSection.secondKey', containerSelectionState.selectedContainer.longSection?.second?.key);
        setFieldValue('shortSection.firstKey', containerSelectionState.selectedContainer.shortSection?.first?.key);
        setFieldValue('shortSection.secondKey', containerSelectionState.selectedContainer.shortSection?.second?.key);

    }, [containerSelectionState.selectedContainer.key]);

    return (
        <form method="post" onSubmit={handleSubmit} className="flex flex-col items-center gap-y-3">
            <div className="flex flex-col items-center justify-center gap-y-5 bg-white/5 p-3 rounded w-full">
                <span className="text-xl">Uzun Kısımlar</span>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="firstLongSection" className="col-span-3 w-full h-full flex items-center justify-center">
                        <span className="bg-[#ff2060] rounded-full px-2">x</span>
                    </label>
                    <Dropdown name="firstLongSection" inputId="firstLongSection" value={values.longSection.firstKey} onChange={(e) => { setFieldValue('longSection.firstKey', e.value) }} options={longSections.firstSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="secondLongSection" className="col-span-3 w-full h-full flex items-center justify-center">
                        <span className="bg-[#ff2060] rounded-full w-5 h-5"></span>
                    </label>
                    <Dropdown name="secondLongSection" inputId="secondLongSection" value={values.longSection.secondKey} onChange={(e) => { setFieldValue('longSection.secondKey', e.value) }} options={longSections.secondSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5 bg-white/5 p-3 rounded w-full">
                <span className="text-xl">Kısa Kısımlar</span>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="firstShortSection" className="col-span-3 w-full h-full flex items-center justify-center">
                        <span className="bg-[#2080ff] rounded-full px-2">z</span>
                    </label>
                    <Dropdown name="firstShortSection" inputId="firstShortSection" value={values.shortSection.firstKey} onChange={(e) => { setFieldValue('shortSection.firstKey', e.value) }} options={shortSections.firstSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
                <div className="grid grid-cols-12 items-center justify-center gap-x-5">
                    <label htmlFor="secondShortSection" className="col-span-3 w-full h-full flex items-center justify-center">
                        <span className="bg-[#2080ff] rounded-full w-5 h-5"></span>
                    </label>
                    <Dropdown name="secondShortSection" inputId="secondShortSection" value={values.shortSection.secondKey} onChange={(e) => { setFieldValue('shortSection.secondKey', e.value) }} options={shortSections.secondSections} optionLabel="name" optionValue="key"
                        placeholder="Obje Seçiniz" className="col-span-9 w-full" />
                </div>
            </div>
            <div className="w-full">
                <button type="submit" className="bg-yellow-400 active:bg-yellow-300 hover:scale-95 text-black w-full h-10 rounded font-medium ease-in-out duration-300">Güncelle</button>
            </div>
        </form>
    )
}