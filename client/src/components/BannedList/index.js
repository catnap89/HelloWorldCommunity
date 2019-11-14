import React from 'react';

// const BannedList = (props, {children}) => {
//   if (props.showBannedList) {
//     return(
//       <ul className="memList list-unstyled" key={props.bannedUser.bannedUserId}>
//         {children}
//       </ul>
//     )
//   } else {
//     return (null);
//   }
// }

const BannedList = ({children}) => (

  <ul className="memList list-unstyled">
    {children}
  </ul>

)




export default BannedList;