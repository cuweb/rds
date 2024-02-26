import type { Meta, StoryObj } from '@storybook/react'
import { Description } from './Description'
import { DescriptionData as descMeta } from '../../data/DescriptionData'

const meta: Meta<typeof Description> = {
  title: 'Components/Description',
  component: Description,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Description>

export const Stacked: Story = {}
Stacked.args = {
  children: <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>,
}

export const Columns: Story = {}
Columns.args = {
  children: (
    <Description.Meta term={descMeta[0].term} useColumns>
      {descMeta[0].details}
    </Description.Meta>
  ),
}

export const Accordion: Story = {}
Accordion.args = {
  children: <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>,
}

export const MultipleStacked: Story = {
  render: () => (
    <>
      <Description>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term}>
            <p>
              Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
              voluptatem non.
            </p>
            <p>
              Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec
              elit ultricies, sed tempus diam dignissim.
            </p>
            <p>
              Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel
              orci vulputate, eget vulputate neque porttitor.
            </p>
          </Description.Meta>
        ))}
      </Description>
    </>
  ),
}

export const MultipleColumns: Story = {
  render: () => (
    <>
      <Description>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term} useColumns>
            <p>
              Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
              voluptatem non.
            </p>
            <p>
              Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec
              elit ultricies, sed tempus diam dignissim.
            </p>
            <p>
              Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel
              orci vulputate, eget vulputate neque porttitor.
            </p>
          </Description.Meta>
        ))}
      </Description>
    </>
  ),
}

export const MultipleAccordions: Story = {
  render: () => (
    <>
      <Description>
        {descMeta.map((item) => (
          <Description.Accordion key={item?.id} term={item?.term}>
            <p>
              Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
              voluptatem non.
            </p>
            <p>
              Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec
              elit ultricies, sed tempus diam dignissim.
            </p>
            <p>
              Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel
              orci vulputate, eget vulputate neque porttitor.
            </p>
          </Description.Accordion>
        ))}
      </Description>
    </>
  ),
}
