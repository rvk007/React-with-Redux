import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" time="6:30PM" text="Nice blog post!" />
      <CommentDetail author="Jane" time="8:30AM" text="Great work!" />
      <CommentDetail author="Alex" time="10:11AM" text="You are amazing!!" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
