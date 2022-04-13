import {assert} from 'superstruct';


export function useValidateProps(props, types) {
    if (typeof __DEV__ !== 'undefined' && __DEV__ || typeof __SSR__ !== 'undefined' && __SSR__) {
        assert(props, types);
    }
}
