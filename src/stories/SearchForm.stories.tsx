import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SearchForm } from '../components/SearchForm/SearchForm'

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
  const callbackcal = useCallback(
    (message: string) => {
      setMessage(message)
    },
    [setMessage],
  )
  return <SearchForm callback={callbackcal} />
}

Default.storyName = 'Default Search Form'
