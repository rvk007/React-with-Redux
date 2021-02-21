import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
  {
    label: 'The colour red',
    value: 'red',
  },
  {
    label: 'The colour green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
