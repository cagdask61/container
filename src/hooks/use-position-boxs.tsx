import { Vector3 } from "three";
import { PositionBoxModel } from "../models/position-box-model";

export function usePositionBoxs() {

    const boxs: ReadonlyArray<PositionBoxModel> = [
        {
            name: "z",
            directionPosition: {
                x: 0,
                z: 24
            },
            position: new Vector3(10, 12, 5),
            color: "#2080ff",
        },
        {
            name: "z",
            directionPosition: {
                x: 0,
                z: -24
            },
            position: new Vector3(10, 12, -29),
            color: "#2080ff",
        },
        {
            name: "x",
            directionPosition: {
                x: 20,
                z: 0
            },
            position: new Vector3(25, 12, -12),
            color: "#ff2060",
        },
        {
            name: "x",
            directionPosition: {
                x: -20,
                z: 0
            },
            position: new Vector3(-5, 12, -12),
            color: "#ff2060"
        },
    ];

    return boxs;
}