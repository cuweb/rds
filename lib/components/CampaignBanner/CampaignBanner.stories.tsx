import type { Meta, StoryObj } from '@storybook/react-vite'
import { CampaignBanner } from './CampaignBanner'

const meta: Meta<typeof CampaignBanner> = {
  title: 'Components/Campaign Banner',
  component: CampaignBanner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof CampaignBanner>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return (
      <CampaignBanner {...args}>
        <CampaignBanner.Content
          title="The Music Award for Indigenous, Black and Racialized Students"
          tags={[
            { name: 'Music', link: 'https://example.com/music' },
            { name: 'Arts', link: 'https://example.com/arts' },
          ]}
          categories={[
            { name: 'Arts', link: 'https://example.com/environment' },
            { name: 'Arts & Social Sciences', link: 'https://example.com/science' },
            { name: 'Student Experience', link: 'https://example.com/student-experience' },
            { name: 'Scholarships', link: 'https://example.com/student-experience' },
            { name: 'Giving Day', link: 'https://example.com/student-experience' },
            { name: 'Healthcare', link: 'https://example.com/student-experience' },
          ]}
        >
          <p>
            The Music Award for Indigenous, Black and Racialized Students is awarded annually to a student who is
            entering or continuing in the undergraduate Music program.
          </p>
        </CampaignBanner.Content>
        <CampaignBanner.Image>
          <img src="https://placehold.co/600x400" alt="" className="object-cover w-full h-full" />
        </CampaignBanner.Image>
        <CampaignBanner.Stats raised={1349} goal={5000} endDate="2026-08-27" />
      </CampaignBanner>
    )
  },
}
