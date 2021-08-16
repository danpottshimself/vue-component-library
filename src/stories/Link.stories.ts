import { Link } from '../components';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Link',
  component: Link,
};

export const link = () => ({
    components: { Link },
    methods: {
        goToSite: (url: string) => (window as any).open(url)
    },
    props: {
        linkText: {
            default: text('link text', 'link to website')
        },
        linkUrl: {
            default: text('site url', 'https://www.google.com/')
        },
    },
    template: `<Link :link-action="goToSite" :link-text="linkText" :link-url="linkUrl" />`,
});

export const secondaryLink = () => ({
    components: { Link },
    methods: {
        goToSite: (url: string) => (window as any).open(url)
    },
    props: {
        linkText: {
            default: text('link text', 'link to website')
        },
        linkUrl: {
            default: text('site url', 'https://www.google.com/')
        },
        secondary: {
            default: boolean('secondary link', true),
        },
    },
    template: `<Link :link-action="goToSite" :link-text="linkText" :link-url="linkUrl" :secondary="secondary"/>`,
});