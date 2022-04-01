import {pickByNotNil} from '@@utils';


export function useNormalizeProps(props) {
    return pickByNotNil(props);
}
