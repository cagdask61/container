import { Vector3 } from "three";

export interface PositionBoxModel {
    name: string;
    directionPosition: {
        x: number;
        z: number;
    };
    position: Vector3;
    color: string;
}