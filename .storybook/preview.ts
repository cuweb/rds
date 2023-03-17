import './index.css'
export const parameters = {
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Get Started',
        ['Introduction', 'Changelog', ['Basic Markup', 'Grey Section', 'Alternating Sections', 'Grids And Columns']],
        'Examples',
        [
          'Templates',
          ['Basic Markup', 'Grey Section', 'Alternating Sections', 'Grid Columns'],
          'Projects',
          ['cutheme', ['Single Page', 'Grey Container'], 'Event Calendar', ['Homepage', 'Single Event']],
        ],
        'Components',
        'Cards & Lists',
        'Headers',
        'Footers',
        'Layouts',
        ['Body', 'Main', 'Container', 'Article', 'Column', 'Aside', 'Panel', 'Stacked List'],
        'Forms',
        'Loading Screens',
        'Project Templates',
      ],
    },
  },
}
