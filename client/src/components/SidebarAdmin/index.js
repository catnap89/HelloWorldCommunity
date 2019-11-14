import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './sidebaradmin.css';

// const SidebarAdmin = (props, {children}) => {

//   if (props.isAdmin) {

//     return(

//       <Card className="col-2 border-0 text-center pl-0 mr-0 pr-0" bg="light">
//         <Card.Title>
//           <ListGroup className="flush" variant="flush border-left shadow">
//             <ListGroup.Item
//               className="pt-4 p-4 bg-light border-0 mb-0 mt-2"
//               // action
//               variant="light"
//             >
//               Admin Panel
//             </ListGroup.Item>
//             {children}
//           </ListGroup>
//         </Card.Title>
//       </Card>

//     )
//   } else {
//     return (null);
//   }

// }

const SidebarAdmin = ({children}) => (

  <Card className="col-2 border-0 text-center pl-0 mr-0 pr-0" bg="light">
    <Card.Title>
      <ListGroup className="flush" variant="flush border-left shadow">
        <ListGroup.Item
          className="pt-4 p-4 bg-light border-0 mb-0 mt-2"
          // action
          variant="light"
        >
          Admin Panel
        </ListGroup.Item>
        {children}
      </ListGroup>
    </Card.Title>
  </Card>
);



export default SidebarAdmin;