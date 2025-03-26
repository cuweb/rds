import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Carleton360 } from './Carleton360'
// import { Button } from '../Button/Button'
// import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Main } from '../../layouts/Main/Main'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
// import { Section } from '../../layouts/Section/Section'

const meta: Meta<typeof Carleton360> = {
  title: 'Components/Carleton360',
  component: Carleton360,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof Carleton360>

export const Primary: Story = {
  args: {
    as: 'section',
    title: 'carleton360',
    image: 'https://picsum.photos/id/381/600/400',
    headerType: 'h1',
    maxWidth: '7xl',
  },
  render: (args) => {
    return (
      <Main>
        <Carleton360 {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </Carleton360>
      </Main>
    )
  },
}

// export const InsideSection: Story = {
//   args: {
//     ...Primary.args,
//     as: 'div',
//   },
//   render: () => {
//     return (
//       <Section>
//         <span>Test555</span>
//       </Section>
//     )
//   },
// }
