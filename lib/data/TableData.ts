export interface TableDataProps {
  [k: string]: string | number | JSX.Element
}

export const TableData: TableDataProps[] = [
  {
    id: 1,
    title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.',
  },
  {
    id: 2,
    title:
      'Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps',
    description: 'Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.',
  },
  {
    id: 3,
    title: 'Captivating Captions: Why We Use Captions on Videos',
    description:
      'Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo.',
  },
  {
    id: 4,
    title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
    description:
      'Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci.',
  },
  {
    id: 5,
    title: 'How to Write for the Web',
    description: 'Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.',
  },
]
