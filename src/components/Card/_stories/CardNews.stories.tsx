import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../../layouts/Column/Column'
import { Card } from '../Card'
import { NewsData as data } from '../../../data/NewsData'

const meta: Meta<typeof Card> = {
  title: 'Cards & Lists/Card/News',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: () => (
    <Column cols="2">
      {data.slice(0, 1).map((item) => (
        <Card key={item?.id}>
          <Card.Figure>
            <img src={item?.image} alt={item?.alt} width="400" height="266" />
          </Card.Figure>
          <Card.Content>
            <Card.PostMeta date={item?.date} />
            <Card.Header text={item?.title} />
            <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>
      ))}
    </Column>
  ),
}

// export const TwoColumn: Story = {
//   render: () => (
//     <Column cols="2">
//       {data.slice(0, 2).map((item) => (
//         <Card key={item?.id}>
//           <Card.Figure>
//             <img src={item?.image} alt={item?.alt} width="400" height="266" />
//           </Card.Figure>
//           <Card.Content>
//             <Card.PostMeta date={item?.date} />
//             <Card.Header text={item?.title} />
//             <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
//           </Card.Content>
//           <Card.Badges tags={item?.tags} />
//         </Card>
//       ))}
//     </Column>
//   ),
// }

// export const ThreeColumn: Story = {
//   render: () => (
//     <Column cols="3">
//       {data.slice(0, 3).map((item) => (
//         <Card key={item?.id}>
//           <Card.Figure>
//             <img src={item?.image} alt={item?.alt} width="400" height="266" />
//           </Card.Figure>
//           <Card.Content>
//             <Card.PostMeta date={item?.date} />
//             <Card.Header text={item?.title} />
//             <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
//           </Card.Content>
//           <Card.Badges tags={item?.tags} />
//         </Card>
//       ))}
//     </Column>
//   ),
// }

// export const SixCardGrid: Story = {
//   render: () => (
//     <Column cols="3">
//       {data.slice(0, 6).map((item) => (
//         <Card key={item?.id}>
//           <Card.Figure>
//             <img src={item?.image} alt={item?.alt} width="400" height="266" />
//           </Card.Figure>
//           <Card.Content>
//             <Card.PostMeta date={item?.date} />
//             <Card.Header text={item?.title} />
//             <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
//           </Card.Content>
//           <Card.Badges tags={item?.tags} />
//         </Card>
//       ))}
//     </Column>
//   ),
// }
