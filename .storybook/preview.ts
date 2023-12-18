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
        ['Introduction', 'Changelog'],
        'Examples',
        [
          'Layouts',
          'Projects',
          ['cutheme', ['Page Layouts', 'Blocks'], 'Event Calendar', ['Homepage', 'Single Event']],
        ],
        'Components',
        'Layouts',
        ['Body', 'Main', 'Container', 'Article', 'Column', 'Aside', 'Panel', 'Stacked List'],
        'Forms',
        'Loading Screens',
        'Deprecated',
      ],
    },
  },
}
const script = document.createElement('script')
script.type = 'text/javascript'
script.src = `https://maps.googleapis.com/maps/api/js?key=${
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY
}&libraries=places&callback=Function.prototype`
document.body.appendChild(script)
