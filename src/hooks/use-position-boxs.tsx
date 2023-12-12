import { PositionBoxModel } from "../models/position-box-model";

export function usePositionBoxs() {

    const boxs: ReadonlyArray<PositionBoxModel> = [
        {
            name: "z",
            directionPosition: {
                x: 0,
                y: 0,
                z: 24
            },
            position: {
                x: 10,
                y: 12,
                z: 5
            },
            color: "#2080ff",
        },
        {
            name: "z",
            directionPosition: {
                x: 0,
                y: 0,
                z: -24
            },
            position: {
                x: 10,
                y: 12,
                z: -29
            },
            color: "#2080ff",
        },
        {
            name: "x",
            directionPosition: {
                x: 20,
                y: 0,
                z: 0
            },
            position: {
                x: 25,
                y: 12,
                z: -12
            },
            color: "#ff2060",
        },
        {
            name: "x",
            directionPosition: {
                x: -20,
                y: 0,
                z: 0
            },
            position: {
                x: -5,
                y: 12,
                z: -12
            },
            color: "#ff2060"
        },
        {
            name: "y",
            directionPosition: {
                x: 0,
                y: 24,
                z: 0
            },
            position: {
                x: 10,
                y: 30,
                z: -12
            },
            color: "#20df80",
        },
        {
            name: "y",
            directionPosition: {
                x: 0,
                y: -24,
                z: 0
            },
            position: {
                x: 10,
                y: -5,
                z: -12
            },
            color: "#20df80",
        }
    ];

    return boxs;
}