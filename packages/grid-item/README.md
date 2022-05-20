# @burrito-ui/grid-item
... .

## Basic Usage
```jsx
    import {GridItem} from '@burrito-ui/grid-item';
    import {SimpleGrid} from '@burrito-ui/simple-grid';

    <SimpleGrid columns={12}>
        <GridItem
            colSpan={8},
            colStart={3},
        >
            I'm a content in GridItem
        </GridItem>
    </SimpleGrid>
```
