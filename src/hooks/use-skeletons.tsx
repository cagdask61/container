import { Skeleton } from "../components/objects/Skeleton"
import { SectionModel } from "../models/section-model";

export function useSkeletons() {
    return [
        {
            key: 'skeleton',
            name: 'İskelet',
            value: <Skeleton position={[0, 0, 0]} />
        }
    ] as Array<SectionModel>;

}