import { SHORT_DOOR } from "../constants/short-door";
import { SHORT_WINDOW } from "../constants/short-window";
import { ShortDoor } from "../components/objects/ShortDoor";
import { ShortWindow } from "../components/objects/ShortWindow";
import { SectionModel } from "../models/section-model";

export function useShortSections() {

    const firstSections = [
        {
            name: "Empty",
            key: ""
        },
        {
            name: "Door",
            key: "shortDoor",
            value: <ShortDoor position={SHORT_DOOR.first.position} />
        },
        {
            name: 'Window',
            key: "shortWindow",
            value: <ShortWindow position={SHORT_WINDOW.first.position} />
        }
    ] as Array<SectionModel>;

    const secondSections = [
        {
            name: "Empty",
            key: ""
        },
        {
            name: "Door",
            key: "shortDoor",
            value: <ShortDoor position={SHORT_DOOR.second.position} rotation={SHORT_DOOR.second.rotation} />
        },
        {
            name: 'Window',
            key: "shortWindow",
            value: <ShortWindow position={SHORT_WINDOW.second.position} rotation={SHORT_WINDOW.second.rotation} />
        }
    ] as Array<SectionModel>

    return { firstSections, secondSections }
}