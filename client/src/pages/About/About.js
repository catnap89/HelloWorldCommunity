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
            <br />
            <br />
            <br />

            <h4><em><strong>"Be a Big Fish in a Small Pond"</strong></em></h4>
           
          </Card.Body>
        </Card>
        <Card className="col-7 bg-light shadow">
        
          <Card.Title className="pt-4 pl-2 mb-0">About Us</Card.Title>
          <hr />
          < br />

          <Card.Body>

         
         <h6>Ch@ is a 'Members Only' Community based Chat application, where users can come create their own Chatroom or participate in Chatrooms created by other Members.</h6>
         < br />

         <h6>Chatrooms are created by Topic and allow for a brief description.</h6>
         < br />

         <h6>Members can search thru Chatrooms created by other Members and save those rooms to their 'Favorites' for direct access later.</h6>
         < br />


         <h6>Members have the ability to create their own chatroom and be the Admin for that room. This allows Members to control the topics and control the participants in their Chat directly.  </h6>

         < br />

         <h6>Ch@ is a free service to use, but services like adding Members to your 'Friends List' and 'Direct Messaging' will be part of the Premium Package.</h6>
             
         < br />
         <h6>Thank you for visiting and we hope you stick around.</h6>
         < br />
         <h6>If you have any questions or concerns you can contact our Admin at <a href="mailto:thedragon@ch@.com">@Dragon</a>. </h6>

         <br />
         <h6>Thanks for your support!</h6>

         <br />
         <h6>Sincerely,</h6>
         <br />
         <h6><strong>The Ch@ Dev Team</strong></h6>

         </Card.Body>
         <Card.Footer className="bg-transparent border-0 ml-auto">
          <Card.Link href="/"><i className="fas fa-long-arrow-alt-left pr-2"></i>Home</Card.Link>
</Card.Footer>

        </Card>

       

      </CardDeck>
    )
  
}


export default About;