import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return pickByNotNil(props);
}
