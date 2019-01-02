import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';

import SendPlane from '../../../assets/img/send-plane.svg';

storiesOf('Atoms/Button/Default', module)
  .add('primary', () => (
    <Button palette="primary" onClick={action('clicked')}>
      Primary
    </Button>
  ))

  .add('info', () => (
    <Button palette="info" onClick={action('clicked')}>
      Info
    </Button>
  ))

  .add('success', () => (
    <Button palette="success" onClick={action('clicked')}>
      Success
    </Button>
  ))

  .add('warning', () => (
    <Button palette="warning" onClick={action('clicked')}>
      Warning
    </Button>
  ))

  .add('danger', () => (
    <Button palette="danger" onClick={action('clicked')}>
      Danger
    </Button>
  ))

  .add('secondary', () => (
    <Button palette="secondary" onClick={action('clicked')}>
      Secondary
    </Button>
  ))

  .add('black', () => (
    <Button palette="black" onClick={action('clicked')}>
      Black
    </Button>
  ));

storiesOf('Atoms/Button/Floating Point', module)
  .add('primary', () => (
    <Button palette="primary" style="floating" onClick={action('clicked')}>
      <img src={SendPlane} alt="Send" />
    </Button>
  ))

  .add('info', () => (
    <Button palette="info" style="floating" onClick={action('clicked')}>
      <img src={SendPlane} alt="Send" />
    </Button>
  ))

  .add('success', () => (
    <Button palette="success" style="floating" onClick={action('clicked')}>
      <img src={SendPlane} alt="Send" />
    </Button>
  ))

  .add('warning', () => (
    <Button palette="warning" style="floating" onClick={action('clicked')}>
      <img src={SendPlane} alt="Send" />
    </Button>
  ))

  .add('danger', () => (
    <Button palette="danger" style="floating" onClick={action('clicked')}>
      <img src={SendPlane} alt="Send" />
    </Button>
  ))

  .add('black', () => (
    <Button palette="black" style="floating" onClick={action('clicked')}>
      <img src={SendPlane} alt="Send" />
    </Button>
  ));
