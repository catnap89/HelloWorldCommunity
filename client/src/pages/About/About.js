import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './about.css';


function About () {


  

    return (
      
      <CardDeck className= 'col-12 chat border-0 mt-5 mb-4 mx-auto'>
        

        <Card className="col-5 cha text-center pt-5 shadow">
          <Card.Body>
          <Card.Img src="../Chat.png" alt="Logo" className="image mb-5" style= {{height: '200px', width:'200px'}}/>
            <h3>Welcome to <strong>Ch@</strong>.</h3>
           
          </Card.Body>
        </Card>
        <Card className="col-7 bg-light shadow">
        
          <Card.Title className="pt-4 pl-2 mb-0">About Us</Card.Title>
          <hr />
          < br />

          <Card.Body>
         <h6>Ch@ is an Community based Chat application, where users can come create and participate in chatrooms, either created themselves or by other users.</h6>
         < br />
         <h6>Users have the ability to search thru Chatrooms created by others and save those rooms to their favorites for direct access later.</h6>
         < br />

         <h6>Users have the ability to create their own chatroom and be the Admin for that room, which allows them to control the topics and control the participants.  You can create your own Topics and Moderate your room.  The 'Ban User' option is given to all Chatroom creators to ban users in real time.</h6>
         < br />
         <h6>The Ch@ App was developed to make chatting fun for people of all ages and there are no restrictions to participate.</h6>
         < br />

         <h6>If you have any questions or concerns you can contact our Admin at <a href="mailto:thedragon@ch@.com">@Dragon</a>. </h6>

         </Card.Body>
         <Card.Footer className="bg-transparent border-0 ml-auto">
          <Card.Link href="/"><i className="fas fa-long-arrow-alt-left pr-2"></i>Home</Card.Link>
</Card.Footer>

        </Card>

       

      </CardDeck>
    )
  
}


export default About;