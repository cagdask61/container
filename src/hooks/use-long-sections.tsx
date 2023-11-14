import { LONG_WALL } from "../constants/long-wall";
import { LongWall } from "../components/objects/LongWall";
import { SectionModel } from "../models/section-model";

export function useLongSections() {

    const firstSections = [
        {
            name: "Boş",
            key: ""
        },
        {
            name: "Duvar",
            key: "longWall",
            value: <LongWall position={LONG_WALL.first.position} />,
        },
    ] as Array<SectionModel>;

    const secondSections = [
        {
            name: "Boş",
            key: ""
        },
        {
            name: "Duvar",
            key: "longWall",
            value: <LongWall position={LONG_WALL.second.position} />,
        },
    ] as Array<SectionModel>;

    return { firstSections, secondSections };
}