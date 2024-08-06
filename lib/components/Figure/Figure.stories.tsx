import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'
import { Figure } from './Figure'

const meta: Meta<typeof Figure> = {
  title: 'Components/Figure',
  component: Figure,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Figure>

export const Primary: Story = {
  args: {
    caption: '',
    size: 'full',
    align: 'none',
    noMobile: false,
  },
  render: (args) => {
    return (
      <Section>
        <Figure {...args}>
          <img
            src="https://picsum.photos/id/15/1600/900"
            alt="Sample for figure stories file"
            width="400"
            height="266"
          />
        </Figure>
        {args.align !== 'none' && (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
              egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit. Aliquam blandit tellus odio, nec commodo est
              efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit
              dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero.
            </p>
            <p>
              Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
              lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
              tempus. Phasellus in egestas sapien ac libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et
              semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
          </div>
        )}
      </Section>
    )
  },
}

export const WithCaption: Story = {
  args: {
    ...Primary.args,
    size: 'md',
    align: 'right',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at aliquet lorem, id lobortis eros. Maecenas erat nibh, imperdiet vel fermentum ut, posuere faucibus dolor.',
  },
  render: (args) => {
    return (
      <Main>
        <Section>
          <Figure {...args}>
            <img
              src="https://picsum.photos/id/15/1600/900"
              alt="Sample for figure stories file"
              width="400"
              height="266"
            />
          </Figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus,
            et tristique dolor. Suspendisse vestibulum hendrerit. Aliquam blandit tellus odio, nec commodo est efficitur
            sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam.
            Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero.
          </p>
          <p>
            Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
            lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
            tempus. Phasellus in egestas sapien ac libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et
            semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
          </p>
        </Section>
      </Main>
    )
  },
}

export const Video: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    return (
      <Figure {...args}>
        <Figure.Video source="https://www.youtube.com/watch?v=gtEJtKwUGiU" />
      </Figure>
    )
  },
}

export const VideoAlignCaption: Story = {
  args: {
    ...Primary.args,
    size: 'md',
    align: 'right',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at aliquet lorem, id lobortis eros.',
  },
  render: (args) => {
    return (
      <>
        <Figure {...args}>
          <Figure.Video source="https://www.youtube.com/watch?v=gtEJtKwUGiU" />
        </Figure>

        <div className="cu-prose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
            egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus,
            et tristique dolor. Suspendisse vestibulum hendrerit. Aliquam blandit tellus odio, nec commodo est efficitur
            sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam.
            Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero.
          </p>
          <p>
            Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
            lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
            tempus. Phasellus in egestas sapien ac libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et
            semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
          </p>
        </div>
      </>
    )
  },
}

// export const Video: Story = {
//   args: {
//     children: <Figure.Video source={content.video} />,
//   },
// }

// export const VideoWithCaption: Story = {
//   args: {
//     size: 'md',
//     caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
//     children: <Figure.Video source={content.video} />,
//   },
// }
