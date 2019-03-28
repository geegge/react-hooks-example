import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Form from './components/shared/Form';
import Todo from './components/shared/Todo';

describe('<App />', () => {
  const wrap = mount(<App />);

  it('renders', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });

  it('contains Form component', () => {
    expect(wrap.find(Form).exists()).toBe(true);
  });

  it('contains Todo component', () => {
    const input = wrap.find('input');
    const form = wrap.find(Form);

    input.simulate('change', { target: { value: 'test-todo-item' } });
    form.simulate('submit');

    expect(wrap.find(Todo).exists()).toBe(true);
    expect(wrap.find(Todo).text()).toBe('test-todo-item');
  });
});
