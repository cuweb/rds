import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SearchForm } from './SearchForm'

const meta: Meta<typeof SearchForm> = {
  title: 'Components/Search Form',
  component: SearchForm,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof SearchForm>

export const Default: Story = () => {
  const [, setMessage] = useState('')

  const callback = useCallback(
    (message: string) => {
      setMessage(message)
    },
    [setMessage],
  )
  return <SearchForm callback={callback} />
}

Default.storyName = 'Default Search Form'
