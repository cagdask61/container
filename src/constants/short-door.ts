import { Euler, Vector3 } from "three";

export const SHORT_DOOR = {
    first: {
        position: new Vector3(0, -0.5, 0.1)
    },
    second: {
        position: new Vector3(20, -0.5, -24),
        rotation: new Euler(0, 3.13, 0),
    }
}