import { INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    },
    defaultViewport: 'galaxys9'
  },
  options: {
    storySort: {
      method: '',
      order: ['READ-ME', 'Components'], 
      locales: '', 
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}