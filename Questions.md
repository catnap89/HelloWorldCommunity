1. How to have login page to show up first without giving login page "/" root route?

2. communitySchema need community description data

3. when to user super()

issues
1. favorite communities - how to access community owner
2. userlist doesn't seem to update other than the current user (fixed)
3. like / unlike button to save / remove favorite community is somehow not responsive (fixed)

4. activeUsers is not joined with user data



For chat with socket io
Dependencies: node.js, mongodb, gitbash, 

1. npm init to create package.json (done)
2. need mongodb driver and socket io
  - mongo db native driver ( we will be using mongoose - done)
  - npm install socket.io (done)

features to add
1. unban form & button -- username form -> changes unbanUser state and do axios call to remove bannedCommunityID (done)
2. delete community button for admin - upon deleting, remove user's owned community (done)
3. my community page - when creating chatroom, it should update the user's owned community (done)
4. banned user gets redirected when new message is posted
5. allow re-joining by clicking forward nav button to update userlist
6. Haven't really test if the userlist will have scroll when there are many users in the community
