import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search className="ui container" /> */}
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
