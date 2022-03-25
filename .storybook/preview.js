import {ThemeProvider} from '../packages/one.ui/src/system';
import theme from '../packages/one.ui/src/theme';


export const decorators = [
    (Story, {globals, kind}) => {
        Story.displayName = `Story/${kind}`;

        return (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        );
    },
];

export const parameters = {
    layout: 'centered',
};
