import {components} from './components';
import {foundations} from './foundations';
import {styles} from './styles';


const theme = {
    ...foundations,
    components,
    styles,
};

export default theme;

export * from './utils';
