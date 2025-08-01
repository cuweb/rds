export const NavDataSingle = [
  {
    href: '#',
    title: 'Academics',
    submenu: [
      {
        href: '#',
        title: 'Undergraduate Programs',
      },
      {
        href: '#',
        title: 'Graduate Programs',
      },
      {
        href: '#',
        title: 'Executive Education',
      },
    ],
  },
  {
    href: '#',
    title: 'Admissions',
  },
  {
    href: '#',
    title: 'Students',
    submenu: [
      {
        href: '#',
        title: 'Future Students',
        submenu: [
          {
            href: '#',
            title: 'The Carleton Advantage',
          },
          {
            href: '#',
            title: 'Virtual Tour',
          },
        ],
      },
      {
        href: '#',
        title: 'Current Students',
      },
      {
        href: '#',
        title: 'Graduate Students',
      },
    ],
  },
  {
    href: '#',
    title: 'Research',
  },
  {
    href: '#',
    title: 'About',
    submenu: [
      {
        href: '#',
        title: 'Our Campus',
      },
      {
        href: '#',
        title: 'Our History',
      },
      {
        href: '#',
        title: 'Facts & Figures',
      },
      {
        href: '#',
        title: 'Accountability',
      },
      {
        href: '#',
        title: 'Our Executives',
      },
    ],
  },
  {
    href: '#',
    title: 'Staff & Faculty',
    submenu: [
      {
        href: '#',
        title: 'Intranet',
      },
      {
        href: '#',
        title: 'Brightspace',
      },
      {
        href: '#',
        title: 'Carleton Central',
      },
      {
        href: '#',
        title: 'Human Resources',
      },
      {
        href: '#',
        title: 'Jobs at Carleton',
      },
    ],
  },
  {
    href: '#',
    title: 'Alumni',
  },
]

export const NavButtonsData = [
  {
    href: 'https://admissions.carleton.ca/apply/',
    title: 'Apply',
    buttonColor: 'red',
    submenu: [
      {
        href: 'https://carleton.ca/fass/programs/undergraduate-programs/',
        title: 'Undergraduate Programs',
      },
      {
        href: 'https://graduate.carleton.ca/programs/',
        title: 'Graduate Programs',
      },
      {
        href: 'https://admissions.carleton.ca/programs-of-study/how-to-choose-a-major/professional-degrees/',
        title: 'Professional Programs',
      },
    ],
  },
  {
    href: 'https://futurefunder.carleton.ca/',
    title: 'Donate',
    buttonColor: 'black',
  },
]

export const NavAsideEventCal = [
  {
    href: '#',
    title: 'Login',
  },
]

export const NavAsideLoggedInOptionsHref = [
  {
    href: '/profile',
    title: 'Profile',
  },
  {
    href: '/',
    title: 'Log out',
  },
]

export const NavAsideLoggedInOptionsOnClick = [
  {
    href: '/profile',
    title: 'Profile',
  },
  {
    onClickHandler: () => alert('Log out clicked'),
    title: 'Log out',
  },
]
