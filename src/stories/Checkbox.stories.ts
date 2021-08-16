import { Checkbox } from '../components';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
};

export const checkbox = () => ({
    components: { Checkbox },
    props: {
        checkboxText: {
            default: text('checkbox text', 'please leave a tick ')
        },
        selected: {
            default: boolean('selected', false)
        },
        disabled: {
            default: boolean('disabled', false)
        }
    },
    template: `<checkbox :checkbox-text="checkboxText" :selected="selected" :disabled="disabled" />`,
});
