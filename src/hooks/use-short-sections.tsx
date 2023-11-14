import { SHORT_DOOR } from "../constants/short-door";
import { SHORT_WINDOW } from "../constants/short-window";
import { ShortDoor } from "../components/objects/ShortDoor";
import { ShortWindow } from "../components/objects/ShortWindow";
import { SectionModel } from "../models/section-model";

export function useShortSections() {

    const firstSections = [
        {
            name: "Boş",
            key: ""
        },
        {
            name: "Kapı",
            key: "shortDoor",
            value: <ShortDoor position={SHORT_DOOR.first.position} />
        },
        {
            name: 'Pencere',
            key: "shortWindow",
            value: <ShortWindow position={SHORT_DOOR.first.position} />
        }
    ] as Array<SectionModel>;

    const secondSections = [
        {
            name: "Boş",
            key: ""
        },
        {
            name: "Kapı",
            key: "shortDoor",
            value: <ShortDoor position={SHORT_DOOR.second.position} rotation={SHORT_DOOR.second.rotation} />
        },
        {
            name: 'Pencere',
            key: "shortWindow",
            value: <ShortWindow position={SHORT_WINDOW.second.position} rotation={SHORT_WINDOW.second.rotation} />
        }
    ] as Array<SectionModel>

    return { firstSections, secondSections }
}