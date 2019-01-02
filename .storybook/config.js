import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

import '../src/components/themes/reboot.scss';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
