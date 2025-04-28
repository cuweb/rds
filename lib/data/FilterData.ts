export const FilterData = {
  title: 'Filter',
  classname: '.filter',
  sortOptions: [
    { name: 'Daily', href: '#', current: false },
    { name: 'Weekly', href: '#', current: false },
    { name: 'Monthly', href: '#', current: false },
  ],
  filters: [
    {
      id: 'audience',
      name: 'Audience',
      options: [
        { value: 'staff', label: 'Staff', checked: false },
        {
          value: 'student',
          label: 'Student',
          checked: false,
        },
      ],
    },
    {
      id: 'tags',
      name: 'Tags',
      options: [
        { value: 'general', label: 'General', checked: false },
        {
          value: 'online/virtual',
          label: 'Online/Virtual',
          checked: false,
        },
        { value: 'finances', label: 'Finances', checked: false },
        {
          value: 'healthyworkplace',
          label: 'Healthy Workplace',
          checked: false,
        },
      ],
    },
  ],
}

export const FilterPanelData = {
  sortOptions: [
    { label: 'Newest to oldest', value: 'newest', selected: true },
    { label: 'Oldest to newest', value: 'oldest' },
    { label: 'Most popular', value: 'popular' },
  ],
  filters: [
    {
      id: 'audience',
      name: 'Audience',
      options: [
        { value: 'staff', label: 'Staff', checked: false },
        {
          value: 'student',
          label: 'Student',
          checked: false,
        },
      ],
    },
    {
      id: 'tags',
      name: 'Tags',
      options: [
        { value: 'general', label: 'General', checked: false },
        {
          value: 'online/virtual',
          label: 'Online/Virtual',
          checked: true,
        },
        { value: 'finances', label: 'Finances', checked: false },
        {
          value: 'healthyworkplace',
          label: 'Healthy Workplace',
          checked: false,
        },
      ],
    },
  ],
}
