# @burrito-ui/link-overlay
Link overlay provides a semantic way to wrap elements (cards, blog post, articles, etc.) in a link.

## Basic Usage
```jsx
    import {LinkBox, LinkOverlay} from '@burrito-ui/link-overlay';

    <LinkBox as="article">
        <Heading level="4">
            <LinkOverlay href="#">
                I'm a link
            </LinkOverlay>
        </Heading>
    </LinkBox>
```
