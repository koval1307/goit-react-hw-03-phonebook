(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{18:function(t,e,a){t.exports={contact__list:"contacts-list_contact__list__2NxiZ",btn:"contacts-list_btn__3V9_a",contactList__item:"contacts-list_contactList__item__1Aewv",name:"contacts-list_name__3y1UU",contacts:"contacts-list_contacts__218gF"}},39:function(t,e,a){t.exports={wrapper:"global_wrapper__12bIp"}},48:function(t,e,a){t.exports=a(57)},57:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=(a(53),a(40)),i=a(25),s=a(26),m=a(32),u=a(31),d=a(34),f=a(27),h=a(90),p=a(88),b=a(89),g=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(f.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.getContact(Object(d.a)(Object(d.a)({},t.state),{},{id:Object(h.a)()})),t.setState({name:"",number:""})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",null,"Name"),c.a.createElement("label",null,"Name:",c.a.createElement(p.a,{id:"outlined-basic",type:"text",name:"name",value:e,onChange:this.handleChange})),c.a.createElement("label",null,"Phone number:",c.a.createElement(p.a,{type:"tel",name:"number",value:a,onChange:this.handleChange})),c.a.createElement(b.a,{variant:"contained",color:"primary",type:"submit"},"Add Contact"))}}]),a}(n.Component),_=a(18),v=a.n(_);var C=function(t){var e=t.contactList,a=t.deleteContact;return c.a.createElement("ul",{className:v.a.contact__list},e.map((function(t){return c.a.createElement("li",{key:t.id,className:v.a.contactList__item},c.a.createElement("div",{className:v.a.contacts},c.a.createElement("span",{className:v.a.name},t.name),c.a.createElement("span",{className:v.a.tel},": ",t.number)),c.a.createElement(b.a,{className:v.a.btn,variant:"contained",color:"secondary",type:"button",onClick:function(){return a(t.id)}},"delete Contact"))})))},E=function(t){var e=t.filter,a=t.getFilterName;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{type:"text",value:e,name:"filter",onChange:a}))},y=a(39),N=a.n(y),S=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.getContact=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts ")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.handleChange=function(e){t.setState({name:e.target.value})},t.getFilteredName=function(e){t.setState({filter:e.target.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilteredContacts=function(){return t.state.filter?t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())})):t.state.contacts},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!=t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return c.a.createElement("div",{className:N.a.wrapper},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(g,{getContact:this.getContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(E,{filter:this.state.filter,getFilterName:this.getFilteredName}),c.a.createElement(C,{contactList:this.getFilteredContacts(),deleteContact:this.deleteContact}))}}]),a}(n.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7a4a0a13.chunk.js.map