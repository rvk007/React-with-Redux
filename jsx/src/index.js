// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

// function component
// 'function()' can also be wriiten as '() =>'
function getHeadingText() {
  return 'Heading Text!';
}

const App = function () {
  const buttonText = 'Click here!'; // can accept  123, ['a','b], [1,2] but doesn't allow javascript object like  { text : 'click here!'}
  const javascriptObjectText = { text: 'javascript Object Text' }; // it is allowed with .text property
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:{' '}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
      <h1>{getHeadingText()}</h1>
      <h2>{javascriptObjectText.text}</h2>
    </div>
  );
};

//class component

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
