import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/shared/Button';

storiesOf('Button', module).add('with name', () => <Button name="Button" />);
