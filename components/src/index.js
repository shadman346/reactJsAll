import React from 'react';
import ReactDOM from 'react-dom';
import CommentComp from './commentComp';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
   return (
      <div className="ui container comments">
         <ApprovalCard>
            <CommentComp author="shady" avatar={faker.image.avatar()} />
         </ApprovalCard>
         <ApprovalCard>
            <CommentComp author="faizy" avatar={faker.image.avatar()} />
         </ApprovalCard>
         <ApprovalCard>
            <CommentComp author="lazy" avatar={faker.image.avatar()} />
         </ApprovalCard>
      </div>
   );
};
ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
);
