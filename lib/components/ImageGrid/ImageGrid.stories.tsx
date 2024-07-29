import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageGrid, ImageGridProps } from './ImageGrid'
import { imageData } from '../../data/ImageData'

const meta: Meta<typeof ImageGrid> = {
  title: 'Components/ImageGrid',
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

export const Default: Story = {
  render: (args) => (
    <ImageGrid {...args}>
      {imageData.slice(0, 3).map(({ id, link, title, content, image, alt }) => (
        <ImageGrid.Item key={id} title={title} content={content} link={link}>
          <img src={image} alt={alt} />
        </ImageGrid.Item>
      ))}
    </ImageGrid>
  ),
}

export const FourColumns: Story = {
  args: {
    cols: '4',
  } as ImageGridProps,
  render: (args) => (
    <ImageGrid {...args}>
      {imageData.slice(0, 4).map(({ id, link, title, content, image, alt }) => (
        <ImageGrid.Item key={id} title={title} content={content} link={link}>
          <img src={image} alt={alt} />
        </ImageGrid.Item>
      ))}
    </ImageGrid>
  ),
}

export const TwoColumns: Story = {
  args: {
    cols: '2',
  } as ImageGridProps,
  render: (args) => (
    <ImageGrid {...args}>
      {imageData.slice(0, 2).map(({ id, link, title, content, image, alt }) => (
        <ImageGrid.Item key={id} title={title} content={content} link={link}>
          <img src={image} alt={alt} />
        </ImageGrid.Item>
      ))}
    </ImageGrid>
  ),
}

export const ColSpan2: Story = {
  args: {
    cols: '4',
  } as ImageGridProps,
  render: (args) => (
    <ImageGrid {...args}>
      <ImageGrid.Item
        colSpan="2"
        rowSpan="2"
        title="Ottawa Bluefest 30"
        content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
      >
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
    </ImageGrid>
  ),
}

export const ColSpan3: Story = {
  args: {
    cols: '4',
  } as ImageGridProps,
  render: (args) => (
    <ImageGrid {...args}>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item
        colSpan="3"
        rowSpan="2"
        title="Ottawa Bluefest 30"
        content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
      >
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
    </ImageGrid>
  ),
}

export const StackedTwoFour: Story = {
  args: {
    cols: '4',
  } as ImageGridProps,
  render: (args) => (
    <ImageGrid {...args}>
      <ImageGrid.Item
        colSpan="2"
        rowSpan="2"
        title="Ottawa Bluefest 30"
        content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
      >
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item
        colSpan="2"
        rowSpan="2"
        title="Ottawa Tulip Festival"
        content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
      >
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
    </ImageGrid>
  ),
}
