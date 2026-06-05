import type { Preview } from '@storybook/react'
import '../lib/style.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        includeNames: true,
        order: [
          'Get Started',
          ['Introduction', 'Changelog'],
          'Projects',
          [
            'cutheme',
            ['Homepage', 'Page Layout', 'Post Layout', 'Graduate Program'],
            'Event Calendar',
            ['Homepage', 'Single Event'],
            'FutureFunder',
            ['Homepage', 'Browse Projects', 'Single Project'],
          ],
          'Prototypes',
          ['Layouts'],
          'Components',
          'Resources',
          'Layouts',
          ['Body', 'Main', 'Container', 'Article', 'Column', 'Aside', 'Panel', 'Stacked List'],
          'Deprecated',
        ],
      },
    },
  },
}

export default preview
