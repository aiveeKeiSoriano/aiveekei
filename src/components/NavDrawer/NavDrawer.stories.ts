import NavDrawer from './NavDrawer';

export default {
  title: 'NavDrawer',
  component: NavDrawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
};

export const Open = {
  args: {
    isOpen: true,
    items: ['Projects', 'About', 'Contact'],
  },
};

export const Close = {
  args: {
    isOpen: false,
    items: ['Projects', 'About', 'Contact'],
  },
};