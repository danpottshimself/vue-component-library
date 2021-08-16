import { Timer } from '../components';
import { object, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Timer',
  component: Timer,
};

export const timer = () => ({
    components: { Timer },
    props: {
      startTime: {
        default: text('start time', 'Aug 16, 2021 06:37:25')
      },
      endTime: {
        default: text('end time', 'Sep 8, 2021 16:37:25')
      },
      translations: {
        default: object('translations', {
          day: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds',
          expired: 'Event has been expired.',
          running: 'Till the end of event.',
          upcoming: 'Till start of event.',
          status: {
             expired: 'Expired',
             running: 'Running',
             upcoming: 'Future',
            }}),
      },
    },
    template: `<timer :start-time="startTime" :end-time="endTime" :translations="translations"/>`,
});
