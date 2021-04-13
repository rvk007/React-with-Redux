import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  //static contextType = LanguageContext; //used when we want only one value from App.js
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

{
  /* LanguageContext.Consumer.Consumer: used when we want only one value from App.js */
}
