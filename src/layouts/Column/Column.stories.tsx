import type { Meta, StoryObj } from '@storybook/react'
import { StackedList } from '../StackedList/StackedList'
import { Column } from './Column'

const meta: Meta<typeof Column> = {
  title: 'Layouts/Column',
  component: Column,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Column>

export const TwoCol: Story = {
  name: 'Two Columns',
  render: () => (
    <Column maxWidth="5xl" cols="2" gridGap="10">
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
        <p>
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Column.Content>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
        <p>
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Column.Content>
    </Column>
  ),
}

export const ThreeCol: Story = {
  name: 'Three Columns',
  render: () => (
    <Column maxWidth="5xl" cols="3" gridGap="10">
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
        <p>
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Column.Content>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
        <p>
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Column.Content>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
        <p>
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Column.Content>
    </Column>
  ),
}

export const FourCol: Story = {
  name: 'Four Columns',
  render: () => (
    <Column maxWidth="7xl" cols="4" gridGap="10">
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
      </Column.Content>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
      </Column.Content>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
      </Column.Content>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
      </Column.Content>
    </Column>
  ),
}

export const OneThird: Story = {
  name: '1/3 Columns',
  render: () => (
    <Column maxWidth="7xl" cols="1/3" gridGap="10">
      <StackedList hasBorder>
        <li className="px-6 py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla.
        </li>
        <li className="px-6 py-5">Quisque auctor ultrices mauris, et semper urna aliquam quis.</li>
        <li className="px-6 py-5">Suspendisse vestibulum hendrerit.</li>
      </StackedList>
      <Column.Content>
        <p className="pb-6 last:pb-0">
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
        <p className="pb-6 last:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
        <p className="pb-6 last:pb-0">
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Column.Content>
    </Column>
  ),
}

export const TwoThirds: Story = {
  name: '2/3 Columns',
  render: () => (
    <Column maxWidth="7xl" cols="2/3" gridGap="10">
      <Column.Content>
        <p className="pb-6 last:pb-0">
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
        <p className="pb-6 last:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
        <p className="pb-6 last:pb-0">
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Column.Content>
      <StackedList hasShadow>
        <li className="px-6 py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla.
        </li>
        <li className="px-6 py-5">Quisque auctor ultrices mauris, et semper urna aliquam quis.</li>
        <li className="px-6 py-5">Suspendisse vestibulum hendrerit.</li>
      </StackedList>
    </Column>
  ),
}

export const ConsCols: Story = {
  name: 'Consecutive Columns',
  render: () => (
    <>
      <Column maxWidth="7xl" cols="2" gridGap="10">
        <Column.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus,
            et tristique dolor. Suspendisse vestibulum hendrerit.
          </p>
        </Column.Content>
        <Column.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus,
            et tristique dolor. Suspendisse vestibulum hendrerit.
          </p>
        </Column.Content>
      </Column>
      <Column maxWidth="7xl" cols="3" gridGap="10">
        <Column.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus,
            et tristique dolor. Suspendisse vestibulum hendrerit.
          </p>
        </Column.Content>
        <Column.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus,
            et tristique dolor. Suspendisse vestibulum hendrerit.
          </p>
        </Column.Content>
        <Column.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus,
            et tristique dolor. Suspendisse vestibulum hendrerit.
          </p>
        </Column.Content>
      </Column>
    </>
  ),
}
