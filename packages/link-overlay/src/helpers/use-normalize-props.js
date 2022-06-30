import * as R from 'ramda';
import {pickByNotNil} from '@burrito-ui/shared';


export function useNormalizeProps(props) {
    return R.pipe(
        R.converge(R.mergeLeft, [
            R.applySpec({
                forwardedAs: createAsProp,
                rel: createRelProp,
                target: createTargetProp,
            }),
            R.identity,
        ]),
        removeProps,
        pickByNotNil,
    )(props);
}

const createAsProp = ({as}) => (
    as
);

const createRelProp = ({isExternal = false}) => (
    isExternal ? 'nofollow noopener' : null
);

const createTargetProp = ({isExternal = false}) => (
    isExternal ? '_blank' : null
);

const removeProps = R.omit([
    'as',
    'isExternal',
]);
