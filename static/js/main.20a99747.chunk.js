(this.webpackJsonpclasscover=this.webpackJsonpclasscover||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(22),a(12)),i=a(13),s=a(16),u=a(15),m=a(14),d=a.n(m);a(40);var h=function(e){return r.a.createElement("select",{style:{background:e.color},id:e.id,onChange:e.change,className:"box"},r.a.createElement("option",{value:"A"},"A"),r.a.createElement("option",{value:"A"},"B"),r.a.createElement("option",{value:"Hi"},"HI"),r.a.createElement("option",{value:"V"},"V"),r.a.createElement("option",{value:"UA"},"UA"))},v=function(e,t){for(var a=[],n=new Date(e);n<=t;)a.push(new Date(n)),n.setDate(n.getDate()+1);return a};a(41);var E=function(e){var t=v(e.dateFrom,e.toDate).map((function(t,a){return r.a.createElement(h,{key:a,id:e.detail.id,change:e.change,color:e.data.background})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",null,r.a.createElement("div",{className:"leftBlock"},r.a.createElement("p",null,e.detail.name),r.a.createElement("p",null,e.detail.phone)),r.a.createElement("div",{className:"rightBlock selectBoxWrap"},t)))};var f=function(e){var t=v(e.dateFrom,e.toDate).map((function(e,t){var a=e.toString().split(" ");return r.a.createElement("div",{className:"box",key:t},r.a.createElement("span",null,a[0]," "),r.a.createElement("span",null,a[1]),r.a.createElement("span",null,a[2]))}));return r.a.createElement(r.a.Fragment,null,t)};var p=function(e){return r.a.createElement("p",null)},g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={dateFrom:new Date,toDate:new Date(2020,4,30),filter:"",background:"",mentors:[]},e.selectBoxChange=function(t){"UA"===t.target.value&&e.setState({background:"#000"})},e.search=function(t){e.setState({filter:t.target.value})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e.setState({mentors:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.filter,n=t.mentors,l=a.toLowerCase(),c=n.filter((function(e){return e.name.toLowerCase().includes(l)})).map((function(t,a){return r.a.createElement(E,{key:a,detail:t,data:e.state,dateFrom:e.state.dateFrom,toDate:e.state.toDate,change:e.selectBoxChange})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("div",{className:"leftBlock"},r.a.createElement("label",null,"Search Name"),r.a.createElement("input",{onChange:this.search})),r.a.createElement("div",{className:"rightBlock"},r.a.createElement(p,null))),r.a.createElement("section",null,r.a.createElement("div",{className:"leftBlock"}),r.a.createElement("div",{className:"rightBlock dateWrap"},r.a.createElement(f,{dateFrom:this.state.dateFrom,toDate:this.state.toDate}))),r.a.createElement("section",null,r.a.createElement("h4",{class:"title"},"Show Details(Subject and Tags)"),r.a.createElement("div",{className:"mentorList"},c)))}}]),a}(n.Component);a(42);var k=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.20a99747.chunk.js.map