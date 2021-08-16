import { WordCount } from '../components';

export default {
  title: 'Components/WordCount',
  component: WordCount,
};

export const wordCount = () => ({
    components: { WordCount },
    props: {
    },
    template: `<word-count/>`,
});
