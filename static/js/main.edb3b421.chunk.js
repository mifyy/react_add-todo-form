(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),s=a(2),c=(a(12),a(1)),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],l=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=a(0),u=function(e){var t=e.todo;return Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title})},m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todos,a=e.users;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsxs)("article",{"data-id":e.id,className:e.completed?"TodoInfo TodoInfo--completed":"TodoInfo",children:[Object(d.jsx)(u,{todo:e}),a.filter((function(t){return e.userId===t.id})).map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(m,{user:e})},e.id)}))]},e.id)}))})},b=function(){var e=Object(c.useState)(l),t=Object(s.a)(e,2),a=t[0],n=t[1],i=o,u=Object(c.useState)(!1),m=Object(s.a)(u,2),b=m[0],h=m[1],f=Object(c.useState)(!1),O=Object(s.a)(f,2),p=O[0],x=O[1],v=Object(c.useState)(""),y=Object(s.a)(v,2),S=y[0],I=y[1],N=Object(c.useState)(0),g=Object(s.a)(N,2),C=g[0],_=g[1];var T=function(){return C?(x(!1),!1):(x(!0),!0)},k=function(){return S?(h(!1),!1):(h(!0),!0)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),k(),T(),function(){if(!k()&&!T()){var e={id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:S,userId:C,completed:!1};n([].concat(Object(r.a)(a),[e]))}}(),k()&&I(""),T()&&_(0),k()||T()||(_(0),I(""))},children:[Object(d.jsxs)("div",{className:"field",children:["Title:",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:S,onChange:function(e){I(e.target.value),h(!1)}}),b&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:["User:",Object(d.jsxs)("select",{"data-cy":"userSelect",value:C,onChange:function(e){_(+e.target.value),x(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),i.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),p&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:a,users:i})]})};i.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.edb3b421.chunk.js.map