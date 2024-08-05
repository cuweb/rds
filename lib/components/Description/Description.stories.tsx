import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'
import { PageHeaders } from '../PageHeaders/PageHeaders'
import { Description } from './Description'
import { DescriptionData as descMeta } from '../../data/DescriptionData'

const meta: Meta<typeof Description> = {
  title: 'Components/Description',
  component: Description,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Description>

export const Default: Story = {
  render: (args) => (
    <Description {...args}>
      <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
    </Description>
  ),
}

export const Columns: Story = {
  render: (args) => (
    <Main>
      <Section>
        <Description {...args}>
          <Description.Meta term={descMeta[0].term} useColumns>
            {descMeta[0].details}
          </Description.Meta>
        </Description>
      </Section>
    </Main>
  ),
}

export const Accordion: Story = {
  render: (args) => (
    <Main>
      <Section>
        <Description {...args}>
          <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
        </Description>
      </Section>
    </Main>
  ),
}

export const MultipleStacked: Story = {
  render: (args) => (
    <Main>
      <Section>
        <PageHeaders as="h2" header="Description header" size="md" />
        <Description {...args}>
          {descMeta.map((item) => (
            <Description.Meta key={item?.id} term={item?.term}>
              {item?.details}
            </Description.Meta>
          ))}
        </Description>
      </Section>
    </Main>
  ),
}

export const MultipleColumns: Story = {
  render: (args) => (
    <Main>
      <Section>
        <PageHeaders as="h2" header="Description header" size="md" />
        <Description {...args}>
          {descMeta.map((item) => (
            <Description.Meta key={item?.id} term={item?.term} useColumns>
              {item?.details}
            </Description.Meta>
          ))}
        </Description>
      </Section>
    </Main>
  ),
}

export const MultipleAccordions: Story = {
  render: (args) => (
    <Main>
      <Section>
        <PageHeaders as="h2" header="Description header" size="md" />
        <Description {...args}>
          {descMeta.map((item) => (
            <Description.Accordion key={item?.id} term={item?.term}>
              {item?.details}
            </Description.Accordion>
          ))}
        </Description>
      </Section>
    </Main>
  ),
}
