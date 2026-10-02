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
      <>
        <CampaignBanner {...args}>
          <CampaignBanner.Content
            title="The Music Award for Indigenous, Black and Racialized Students"
            tags={[
              { name: 'Music', link: 'https://example.com/music' },
              { name: 'Arts', link: 'https://example.com/arts' },
            ]}
            categories={[
              { name: 'Arts', link: 'https://example.com/arts' },
              { name: 'Arts & Social Sciences', link: 'https://example.com/arts-social-sciences' },
              { name: 'Student Experience', link: 'https://example.com/student-experience' },
              { name: 'Scholarships', link: 'https://example.com/scholarships' },
              { name: 'Giving Day', link: 'https://example.com/giving-day' },
              { name: 'Healthcare', link: 'https://example.com/healthcare' },
            ]}
          >
            <p>
              The Music Award for Indigenous, Black and Racialized Students is awarded annually to a student who is
              entering or continuing in the undergraduate Music program.
            </p>
          </CampaignBanner.Content>
          <CampaignBanner.Image>
            <img src="https://picsum.photos/id/15/1600/900" alt="placeholder" />
          </CampaignBanner.Image>
          <CampaignBanner.Stats raised={1349} goal={5000} endDate="2026-08-27" />
        </CampaignBanner>
      </>
    )
  },
}
