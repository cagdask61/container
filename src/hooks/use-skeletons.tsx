import { Skeleton } from "../components/objects/Skeleton"
import { SectionModel } from "../models/section-model";

export function useSkeletons() {
    return [
        {
            name: 'Skeleton',
            key: 'skeleton',
            value: <Skeleton position={[0, 0, 0]} />
        }
    ] as Array<SectionModel>;

}