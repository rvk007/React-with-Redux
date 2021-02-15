import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library amonf engineers',
  },
  {
    title: 'How to use React?',
    content: 'React can be used by creating components',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
