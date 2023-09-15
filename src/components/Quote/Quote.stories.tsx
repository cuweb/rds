import { Meta, StoryObj } from '@storybook/react'
import { Quote } from './Quote'

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Quote>

export const Default: Story = {
  args: {
    cite: 'John Doe',
    children: (
      <p>
        Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
    ),
  },
}

export const QuoteMark: Story = {
  args: {
    cite: 'John Doe',
    symbol: 'quote',
    children: (
      <p>
        Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
    ),
  },
}

// export const OldDefault: Story = {
//   render: () => (
//     <Quote cite="John Doe">
//       <p>
//         Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
//         reprehenderit ducimus.
//       </p>
//     </Quote>
//   ),
// }

// export const SecondOption: Story = {
//   render: () => (
//     <Quote cite="John Doe" symbol="quote">
//       <p>
//         Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
//         reprehenderit ducimus.
//       </p>
//     </Quote>
//   ),
// }

// export const ThirdOption: Story = {
//   render: () => (
//     <Quote cite="John Doe" symbol="quote" align="middle">
//       <p>
//         Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
//         reprehenderit ducimus.
//       </p>
//     </Quote>
//   ),
// }

// Default.storyName = 'Default item'
// SecondOption.storyName = 'With Quotation Mark'
// ThirdOption.storyName = 'With Quotation Mark Centered'
