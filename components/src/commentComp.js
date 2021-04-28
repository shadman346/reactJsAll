import React from 'react';

const commentComp = (prop) => {
   return (
      <div class="comment">
         <a href="/" class="avatar">
            <img alt="avtar" src={prop.avatar} />
         </a>
         <div class="content">
            <a href="/" class="author">
               {prop.author}
            </a>
            <div class="metadata">
               <span class="date">Today at 5:42PM</span>
            </div>
            <div class="text">How artistic!</div>
         </div>
      </div>
   );
};
export default commentComp;
