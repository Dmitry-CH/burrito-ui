import {CreateGlobalStyle, ThemeProvider} from '@burrito-ui/system';
import theme from '@burrito-ui/theme';


export const decorators = [
    (Story, {globals, kind}) => {
        Story.displayName = `Story/${kind}`;

        return (
            <ThemeProvider theme={theme}>
                <CreateGlobalStyle />
                <Story />
            </ThemeProvider>
        );
    },
];

export const parameters = {
    layout: 'centered',
};
