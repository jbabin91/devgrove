import { type MainNavItem, type SidebarNavItem } from '@/types/nav';

type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '/docs',
      title: 'Documentation',
    },
    {
      href: '/docs/components/breadcrumbs',
      title: 'Components',
    },
    {
      external: true,
      href: 'https://github.com/jbabin91/devgrove',
      title: 'GitHub',
    },
    {
      external: true,
      href: 'https://x.com/jbabin91',
      title: 'X',
    },
  ],
  sidebarNav: [
    {
      items: [
        {
          href: '/docs',
          items: [],
          title: 'Introduction',
        },
        {
          href: '/docs/changelog',
          items: [],
          title: 'Changelog',
        },
      ],
      title: 'About',
    },
    {
      items: [
        {
          href: '/docs/installation',
          items: [],
          title: 'Installation',
        },
        {
          href: '/docs/installation/cli',
          items: [],
          title: 'CLI',
        },
      ],
      title: 'Installation',
    },
    {
      items: [
        {
          href: '/docs/components/combobox',
          items: [],
          title: 'ComboBox',
        },
        {
          href: '/docs/components/button',
          items: [],
          title: 'Button',
        },
        {
          href: '/docs/components/checkbox',
          items: [],
          title: 'Checkbox',
        },
        {
          href: '/docs/components/select',
          items: [],
          title: 'Select',
        },
        {
          href: '/docs/components/slider',
          items: [],
          title: 'Slider',
        },
        {
          href: '/docs/components/switch',
          items: [],
          title: 'Switch',
        },
        {
          href: '/docs/components/textfield',
          items: [],
          title: 'TextField',
        },
        {
          href: '/docs/components/toggle',
          items: [],
          title: 'Toggle Button',
        },
        {
          href: '/docs/components/file-trigger',
          items: [],
          title: 'File Trigger',
        },
      ],
      title: 'Inputs',
    },
    {
      items: [
        {
          href: '/docs/components/badge',
          items: [],
          title: 'Badge',
        },
      ],
      title: 'Data Display',
    },
    {
      items: [
        {
          href: '/docs/components/grid-list',
          items: [],
          title: 'GridList',
        },
        {
          href: '/docs/components/list-box',
          items: [],
          title: 'ListBox',
        },
        {
          href: '/docs/components/menu',
          items: [],
          title: 'Menu',
        },
        {
          disabled: true,
          href: '/docs/components/',
          items: [],
          label: 'Coming Soon',
          title: 'Table',
        },
        {
          href: '/docs/components/tag-group',
          items: [],
          title: 'TagGroup',
        },
      ],
      title: 'Collections',
    },
    {
      items: [
        {
          href: '/docs/components/color',
          items: [],
          label: 'Beta',
          title: 'Color Pickers',
        },
        {
          href: '/docs/components/color-primitives',
          items: [],
          label: 'Beta',
          title: 'Primitives',
        },
      ],
      title: 'Color',
    },
    {
      items: [
        {
          href: '/docs/components/calendar',
          items: [],
          title: 'Calendar',
        },
        {
          href: '/docs/components/datefield',
          items: [],
          title: 'DateField',
        },
        {
          href: '/docs/components/date-picker',
          items: [],
          title: 'Date Picker',
        },
        {
          href: '/docs/components/date-range-picker',
          items: [],
          title: 'Date Range Picker',
        },
        {
          href: '/docs/components/range-calendar',
          items: [],
          title: 'Range Calendar',
        },
        {
          href: '/docs/components/timefield',
          items: [],
          title: 'TimeField',
        },
      ],
      title: 'Date and Time',
    },
    {
      items: [
        {
          href: '/docs/components/dropzone',
          items: [],
          title: 'Dropzone',
        },
      ],
      title: 'Drag and Drop',
    },
    {
      items: [
        {
          href: '/docs/components/checkbox-group',
          items: [],
          title: 'Checkbox Group',
        },
        {
          href: '/docs/components/form',
          items: [],
          title: 'Form',
        },
        {
          href: '/docs/components/numberfield',
          items: [],
          title: 'NumberField',
        },
        {
          href: '/docs/components/radio-group',
          items: [],
          title: 'Radio Group',
        },
        {
          href: '/docs/components/searchfield',
          items: [],
          title: 'Searchfield',
        },
      ],
      title: 'Forms',
    },
    {
      items: [
        {
          href: '/docs/components/breadcrumbs',
          items: [],
          title: 'Breadcrumbs',
        },
        {
          href: '/docs/components/link',
          items: [],
          title: 'Link',
        },
        {
          href: '/docs/components/tabs',
          items: [],
          title: 'Tabs',
        },
      ],
      title: 'Navigation',
    },
    {
      items: [
        {
          href: '/docs/components/dialog',
          items: [],
          title: 'Dialog',
        },
        {
          href: '/docs/components/modal',
          items: [],
          title: 'Modal',
        },
        {
          href: '/docs/components/popover',
          items: [],
          title: 'Popover',
        },
        {
          href: '/docs/components/tooltip',
          items: [],
          title: 'Tooltip',
        },
      ],
      title: 'Overlays',
    },
    {
      items: [
        {
          href: '/docs/components/meter',
          items: [],
          title: 'Meter',
        },
        {
          href: '/docs/components/progress',
          items: [],
          title: 'Progress Bar',
        },
      ],
      title: 'Status',
    },
    {
      items: [
        {
          href: '/docs/components/sonner',
          items: [],
          title: 'Sonner',
        },
      ],
      title: 'Feedback',
    },
    {
      items: [
        {
          href: '/docs/components/group',
          items: [],
          title: 'Group',
        },
        {
          href: '/docs/components/toolbar',
          items: [],
          title: 'Toolbar',
        },
      ],
      title: 'Content',
    },
  ],
};
