import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../Column/Column'
import { Aside } from './Aside'
import { StackedList } from '../StackedList/StackedList'

const meta: Meta<typeof Aside> = {
  title: 'Layouts/Aside',
  component: Aside,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Aside>

export const Primary: Story = {}

Primary.args = {
  children: 'Aside HTML5 tag as component',
  isSticky: false,
}

export const AsSidebar: Story = {
  render: () => (
    <Column maxWidth="7xl" cols="2/3" gridGap="10">
      <div>
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
        <p className="pb-6 last:pb-0">
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </div>

      <Aside>
        <StackedList hasShadow>
          <li className="px-6 py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla.
          </li>
          <li className="px-6 py-5">Quisque auctor ultrices mauris, et semper urna aliquam quis.</li>
          <li className="px-6 py-5">Suspendisse vestibulum hendrerit.</li>
        </StackedList>
      </Aside>
    </Column>
  ),
}
