import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                'aria-disabled': createDisabledProp,
                rel: createRelProp,
                target: createTargetProp,
            }),
            R.identity,
        ]),
        removeProps,
        pickByNotNil,
    )(props);
}

const createDisabledProp = ({isDisabled = false}) => (
    isDisabled || null
);

const createRelProp = ({isExternal = false}) => (
    isExternal ? 'nofollow noopener' : null
);

const createTargetProp = ({isExternal}) => (
    isExternal ? '_blank' : null
);

const removeProps = R.omit([
    'isDisabled',
    'isExternal',
]);
