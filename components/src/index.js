import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Sam"
          time="6:30PM"
          text="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Jane"
          time="8:30AM"
          text="Great work!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author="Alex"
          time="10:11AM"
          text="You are amazing!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
