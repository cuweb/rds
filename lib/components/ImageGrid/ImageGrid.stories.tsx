import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageGrid, ImageGridProps } from './ImageGrid'
import { imageData } from '../../data/ImageData'
import { Section } from '../../layouts/Section/Section'

const meta: Meta<typeof ImageGrid> = {
  title: 'Components/Image Grid',
  component: ImageGrid,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof ImageGrid>

export const Primary: Story = {
  args: {
    maxWidth: '5xl',
    gridGap: '2',
    cols: '3',
  },
  render: (args) => {
    const { cols } = args
    const setCols = cols !== '1/3' && cols !== '2/3' ? Number(cols) : 1

    return (
      <Section>
        <ImageGrid {...args}>
          {imageData.slice(0, setCols).map(({ id, image }) => (
            <ImageGrid.Image key={id} imageUrl={image} />
          ))}
        </ImageGrid>
      </Section>
    )
  },
}

export const ColSpan2: Story = {
  args: {
    ...Primary.args,
    cols: '4',
  },
  render: (args) => (
    <Section>
      <ImageGrid {...args}>
        {imageData.slice(0, 1).map(({ id, image }) => (
          <ImageGrid.Image key={id} imageUrl={image} />
        ))}
        <ImageGrid.Image
          imageUrl={imageData[0].image}
          colSpan="2"
          rowSpan="2"
          title="Overlay Image Title"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
          link="https://github.com/cuweb/rds"
        />
        {imageData.slice(0, 7).map(({ id, image }) => (
          <ImageGrid.Image key={id} imageUrl={image} />
        ))}
      </ImageGrid>
    </Section>
  ),
}

export const ColSpan3: Story = {
  args: {
    cols: '4',
  } as ImageGridProps,
  render: (args) => (
    <Section>
      <ImageGrid {...args}>
        {imageData.slice(0, 1).map(({ id, image }) => (
          <ImageGrid.Image key={id} imageUrl={image} />
        ))}
        <ImageGrid.Image
          imageUrl={imageData[0].image}
          colSpan="3"
          rowSpan="2"
          title="Overlay Image Title"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
        />
        {imageData.slice(1, 6).map(({ id, image }) => (
          <ImageGrid.Image key={id} imageUrl={image} />
        ))}
      </ImageGrid>
    </Section>
  ),
}

export const StackedTwoFour: Story = {
  args: {
    cols: '4',
  } as ImageGridProps,
  render: (args) => (
    <Section>
      <ImageGrid {...args}>
        <ImageGrid.Image
          imageUrl={imageData[0].image}
          colSpan="2"
          rowSpan="2"
          title="Overlay Image Title"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
          link="https://github.com/cuweb/rds"
        />
        <ImageGrid.Image
          imageUrl={imageData[0].image}
          colSpan="2"
          rowSpan="2"
          title="Ottawa Tulip Festival"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
          link="https://github.com/cuweb/rds"
        />
        {imageData.slice(2, 6).map(({ id, image }) => (
          <ImageGrid.Image key={id} imageUrl={image} />
        ))}
      </ImageGrid>
    </Section>
  ),
}
