import NavMobile from './NavMobile';

export default {
  title: 'NavMobile',
  component: NavMobile,
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
  },
};

export const Close = {
  args: {
    isOpen: false,
  },
};