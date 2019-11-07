(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),c=t.n(r),m=(t(75),t(26)),s=t(28),o=(t(34),t(32)),i=t(17),u=t(18),h=t(20),p=t(19),E=t(21),d=t(6),g=t(22),b=t(13),f=t(5),N=(t(76),t(15)),v=t.n(N),y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={password:"",username:"",errorMessage:""},t.handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(o.a)({},n,l))},t.handleFormSubmit=function(e){e.preventDefault();var a={username:t.state.username,password:t.state.password};v.a.post("/auth/login",a).then((function(e){t.props.history.push("/")})).catch((function(e){"Unauthorized"===e.response.data&&t.setState({errorMessage:"Invalid Username or Password"}),console.log(e.response)}))},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{className:"col-12 chat border-0 mt-5 mb-4 mx-auto"},l.a.createElement(f.a,{className:"col-4 bg-light shadow"},l.a.createElement(f.a.Title,{className:"pt-4 pl-2 mb-0"},"Sign In"),l.a.createElement("hr",null),l.a.createElement("br",null),this.state.errorMessage?l.a.createElement("div",{className:"alert alert-danger"},this.state.errorMessage):"",l.a.createElement(d.a,null,l.a.createElement(d.a.Group,{controlId:"formBasicEmail"},l.a.createElement(d.a.Label,null,l.a.createElement("i",{className:"fas fa-user pl-2 pr-2"}),"Username"),l.a.createElement(d.a.Control,{className:"form",placeholder:"Enter username",value:this.state.username,onChange:this.handleInputChange,name:"username"}),l.a.createElement(d.a.Text,{className:"text-muted"})),l.a.createElement("br",null),l.a.createElement(d.a.Group,{controlId:"formBasicPassword"},l.a.createElement(d.a.Label,null,l.a.createElement("i",{className:"fas fa-key pl-2 pr-2"}),"Password"),l.a.createElement(d.a.Control,{className:"form",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,name:"password"})),l.a.createElement("br",null),l.a.createElement(g.a,{className:"button mr-4 ml-3",variant:"dark",type:"submit",onClick:this.handleFormSubmit},"Submit"),l.a.createElement("a",{href:"/register"},l.a.createElement("i",{className:"far fa-hand-point-right pr-2"}),"Sign up / Register"))),l.a.createElement(f.a,{className:"col-8 cha text-center pt-5 shadow"},l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Img,{src:"../Chat.png",alt:"Logo",className:"image mb-5",style:{height:"200px",width:"200px"}}),l.a.createElement("h3",null,"Welcome back!! Please Sign In to enter ",l.a.createElement("strong",null,"Ch@"),"."),l.a.createElement("h5",{className:"p-4"},"The Dev Team:"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"Daniel Cho"),l.a.createElement("li",null,"Khavin Lindo"),l.a.createElement("li",null,"Ryan Weingart"),l.a.createElement("li",null,"Trey Helmer")))))}}]),a}(n.Component),C=t(25),w=(t(97),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",email:"",password:""},t.handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(o.a)({},n,l))},t.handleFormSubmit=function(e){e.preventDefault(),console.log("Username: "+t.state.username+" Eamil: "+t.state.email+" Password: "+t.state.password);var a={email:t.state.email,username:t.state.username,password:t.state.password};v.a.post("/auth/register",a).then((function(e){console.log(e),t.props.history.push("/login")})).catch((function(e){console.log(e.response)}))},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{className:"col-12 p-3 chat border-0 mt-5 mb-4 mx-auto"},l.a.createElement(f.a,{className:"col-4 bg-light shadow"},l.a.createElement(f.a.Title,{className:"pt-4 pl-2 mb-0"},"Sign Up / Register"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(d.a,null,l.a.createElement(d.a.Group,{as:C.a,controlId:"formGridEmail"},l.a.createElement(d.a.Label,null,l.a.createElement("i",{className:"fas fa-envelope pl-2 pr-2"}),"Email"),l.a.createElement(d.a.Control,{className:"form",type:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,name:"email"})),l.a.createElement("br",null),l.a.createElement(d.a.Group,{as:C.a,controlId:"formGridUsername"},l.a.createElement(d.a.Label,null,l.a.createElement("i",{className:"fas fa-user pl-2 pr-2"}),"Username"),l.a.createElement(d.a.Control,{className:"form",type:"username",placeholder:"Enter username",value:this.state.username,onChange:this.handleInputChange,name:"username"})),l.a.createElement("br",null),l.a.createElement(d.a.Group,{as:C.a,controlId:"formGridPassword"},l.a.createElement(d.a.Label,null,l.a.createElement("i",{className:"fas fa-key pl-2 pr-2"}),"Password"),l.a.createElement(d.a.Control,{className:"form",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,name:"password"})),l.a.createElement("br",null),l.a.createElement(g.a,{className:"button mr-4 ml-3",variant:"dark",type:"submit",onClick:this.handleFormSubmit},"Submit"),l.a.createElement("a",{href:"/login"},l.a.createElement("i",{className:"far fa-hand-point-right pr-2"}),"Sign In"))),l.a.createElement(f.a,{className:"col-8 cha text-center pt-5 shadow"},l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Img,{src:"../Chat.png",alt:"Logo",className:"image mb-5",style:{height:"200px",width:"200px"}}),l.a.createElement("h3",null,"Please Register and Create your profile to enjoy ",l.a.createElement("strong",null,"Ch@"),".",l.a.createElement("br",null),l.a.createElement("br",null),"We hope you have a Wonderful time."),l.a.createElement("h5",{className:"p-4"},"The Dev Team:"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"Daniel Cho"),l.a.createElement("li",null,"Khavin Lindo"),l.a.createElement("li",null,"Ryan Weingart"),l.a.createElement("li",null,"Trey Helmer")))))}}]),a}(n.Component)),I=t(115),x=t(116),k=t(65),j=(t(98),function(){v.a.get("/auth/logout").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}),S=function(e){return l.a.createElement(I.a,{className:"topbar p-0 border-bottom",fixed:"top",variant:"light"},l.a.createElement(I.a.Brand,{href:"#home"},l.a.createElement("img",{className:"imager",style:{height:"85px",paddingLeft:"20px"},alt:"Logo",src:"../Chat.png"})),l.a.createElement("p",{id:"demo",className:"mb-0 pb-0 pt-4"},l.a.createElement("em",null,l.a.createElement("strong",null,"Lets talk about it..."))),l.a.createElement(x.a,{className:"mr-auto"}),l.a.createElement(d.a,{inline:!0},l.a.createElement(m.b,{to:"/login",className:" link-button btn btn-primary mr-5",variant:"dark",onClick:j},"Sign Out"),l.a.createElement("span",{className:"line"}," | "),l.a.createElement(k.a,{type:"text",placeholder:"\uf002 Search",className:" p-3 mr-3 ml-5 mr-5 form fontAwesome"}),l.a.createElement("span",{className:"line"}," | "),l.a.createElement(g.a,{className:"ml-5 mr-3 button",variant:"dark"},"Search")))},O=t(7),T=(t(108),function(e){return l.a.createElement(f.a,{className:"col-2 pr-0 ml-0 pl-0 border-0 text-center",bg:"light"},l.a.createElement(f.a.Title,null,l.a.createElement(O.a,{className:"flush",variant:"flush border-right shadow"},l.a.createElement(O.a.Item,{className:"pt-3 p-4 channel bg-light",action:!0,as:m.b,to:"/createchat"},l.a.createElement(g.a,{variant:"outline-primary",size:"lg"},"START NEW CHAT")),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0",as:m.b,to:"/register"},"Register"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0",as:m.b,to:"/login"},"Log In"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"light border-0",as:m.b,to:"/community/:id"},"Chat / Main"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"light border-0"},"Danger"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"light border-0"},"Warning"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"light border-0"},"Info"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"light border-0"},"Light"))))}),L=t(114),D=(t(109),function(e){return l.a.createElement(f.a,{className:"col-9 p-1 border-0 chat mt-3 mb-0 mx-auto"},l.a.createElement(f.a.Header,{as:"h5",className:"bg-white"},"Chat Title"),l.a.createElement(f.a.Body,{className:"scroll"},l.a.createElement("div",{id:"person1",className:" ml-auto mr-3"},l.a.createElement("p",{className:"response1 speech-bubble p-1"},l.a.createElement("strong",null,"John - "),"Contrary to popular belief, Lorem Ipsum is not simply random sdsdfsdsf text."),l.a.createElement("p",{className:"response1 speech-bubble p-1"},l.a.createElement("strong",null,"John - "),"Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  Contrary to popular belief, Lorem Ipsum is not simply random text."),l.a.createElement("p",{className:"response1 speech-bubble p-1"},l.a.createElement("strong",null,"John - "),"Contrary to popular belief, Lorem Ipsum is not simply random text."))),l.a.createElement(f.a.Footer,{fixed:"bottom",className:"text-muted bg-white border-0 mt-0 pt-0"},l.a.createElement(L.a,{size:"lg",className:"mb-0 shadow-sm fontAwesome"},l.a.createElement(k.a,{className:"bg-light",autoFocus:"autofocus",placeholder:"say something...\uf075"}),l.a.createElement(L.a.Append,null,l.a.createElement(g.a,{variant:"dark border pl-3 pr-3"},l.a.createElement("i",{className:"fas fa-share pr-2"}),"Send")))))}),A=(t(110),function(e){return l.a.createElement(f.a,{className:"col-1 border-0 text-center pl-0 mr-0 pr-0",bg:"light"},l.a.createElement(f.a.Title,null,l.a.createElement(O.a,{className:"flush",variant:"flush border-left shadow"},l.a.createElement(O.a.Item,{className:"pt-3 p-4 list bg-light"},"MEMBER"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0"},"Primary"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0"},"Secondary"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0"},"Success"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0"},"Danger"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0"},"Warning"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0"},"Info"),l.a.createElement(O.a.Item,{className:"bg-light",action:!0,variant:"bg-light border-0"},"Light"))))}),F=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={users:[],title:"",communityCreator:""},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(S,null),l.a.createElement(b.a,{className:"pt-5 mt-5 size mx-auto"},l.a.createElement(T,null),l.a.createElement(D,null),l.a.createElement(A,null)))}}]),a}(n.Component);function B(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function G(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function M(e){var a=e.size,t=e.children;return l.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}var P=function(e){var a=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},a)};var J=function(){return l.a.createElement(B,{fluid:!0},l.a.createElement(G,null,l.a.createElement(M,{size:"md-12"},l.a.createElement(P,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},U=(t(111),function(e){return l.a.createElement(b.a,{className:"col-9 p-3 chat border-0 mt-5 mb-4 mx-auto"},l.a.createElement(f.a,{className:"cardchat",style:{width:"18rem"}},l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,"Car Talk"),l.a.createElement("hr",null),l.a.createElement(f.a.Text,null,"Come here to talk about cars.")),l.a.createElement(g.a,{className:"ml-auto mr-2",variant:"link"},"Join Chat"),l.a.createElement(f.a.Footer,null,l.a.createElement("small",{className:"text-muted mr-auto"},"Moderator : John Smith"))),l.a.createElement(f.a,{className:"cardchat",style:{width:"18rem"}},l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,"Car Talk"),l.a.createElement("hr",null),l.a.createElement(f.a.Text,null,"Come here to talk about cars.Come here to talk about cars.")),l.a.createElement(g.a,{className:"ml-auto mr-2",variant:"link"},"Join Chat"),l.a.createElement(f.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Moderator : John Smith"))),l.a.createElement(f.a,{className:"cardchat",style:{width:"18rem"}},l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,"Car Talk"),l.a.createElement("hr",null),l.a.createElement(f.a.Text,null,"Come here to talk about cars.")),l.a.createElement(g.a,{className:"ml-auto mr-2",variant:"link"},"Join Chat"),l.a.createElement(f.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Moderator : John Smith"))))}),W=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={userInfo:{},communities:[]},t.checkUser=function(){v.a.get("/auth/isauth").then((function(e){if(console.log("res: "+e.data.user.username),e.data.user)return t.setState({userInfo:e.data.user||{}});t.props.history.push("/login")})).catch((function(e){console.log(e),t.props.history.push("/login")}))},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.checkUser()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(S,null),l.a.createElement(b.a,{className:"pt-5 mt-5 size mx-auto"},l.a.createElement(T,null),l.a.createElement(U,null)))}}]),a}(n.Component),R=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={userAdmin:"",communityName:"",communityDesc:""},t.checkUser=function(){v.a.get("/auth/isauth").then((function(e){if(console.log("res.data.user.username: "+e.data.user.username),console.log("res.data.user._id: "+e.data.user._id),e.data.user)return t.setState({userAdmin:e.data.user._id||{}});t.props.history.push("/login")})).catch((function(e){console.log(e),t.props.history.push("/login")}))},t.handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(o.a)({},n,l))},t.handleFormSubmit=function(e){e.preventDefault();var a={userAdmin:t.state.userAdmin,communityName:t.state.communityName,communityDesc:t.state.communityDesc};console.log(a),v.a.post("/api/community",a).then((function(e){console.log(e.data),t.props.history.push("/")})).catch((function(e){console.log(e)}))},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.checkUser()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(S,null),l.a.createElement(b.a,{className:"pt-5 mt-5 size mx-auto"},l.a.createElement(T,null),l.a.createElement(f.a,{className:"col-5 bg-light shadow"},l.a.createElement(f.a.Title,{className:"pt-4 pl-2 mb-0"},"Create New Chatroom"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(d.a,null,l.a.createElement(d.a.Group,{as:C.a,controlId:"formGridChatName"},l.a.createElement(d.a.Label,null,l.a.createElement("i",{className:"fas fa-plus-circle pl-2 pr-2"}),"Chatroom Title"),l.a.createElement(d.a.Control,{className:"form",type:"name",placeholder:"Title",value:this.state.communityName,onChange:this.handleInputChange,name:"communityName"})),l.a.createElement("br",null),l.a.createElement(d.a.Group,{as:C.a,controlId:"formGridChatDescription"},l.a.createElement(d.a.Label,null,l.a.createElement("i",{className:"fas fa-info-circle pl-2 pr-2"}),"Chatroom Description"),l.a.createElement(d.a.Control,{as:"textarea",rows:"3",className:"form",type:"name",placeholder:"Description",value:this.state.communityDesc,onChange:this.handleInputChange,name:"communityDesc"})),l.a.createElement("br",null),l.a.createElement(g.a,{className:"button mr-4 ml-3",variant:"dark",type:"submit",onClick:this.handleFormSubmit},"Submit")))))}}]),a}(n.Component);var z=function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:W}),l.a.createElement(s.a,{exact:!0,path:"/register",component:w}),l.a.createElement(s.a,{exact:!0,path:"/login",component:y}),l.a.createElement(s.a,{exact:!0,path:"/createchat",component:R}),l.a.createElement(s.a,{exact:!0,path:"/community/:id",component:F}),l.a.createElement(s.a,{component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,a,t){e.exports=t(112)},75:function(e,a,t){},76:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.349c1076.chunk.js.map