(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(5),s=a.n(n),r=(a(11),a(3)),i=a.n(r),j=a(6),o=a(4),u=a(0),l=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Mumbai"),r=Object(o.a)(s,2),l=r[0],p=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(l,"&units=metric&appid=31365f1254fca3aa98c40276c2716af1"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(c.main),console.log(c.main);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsxs)("div",{className:"inputData",children:[Object(u.jsx)("input",{type:"search",placeholder:"enter your city",className:"inputField",value:l,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("br",{})]}),a?Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("h2",{className:"location",children:[Object(u.jsx)("i",{className:"fas fa-street-view"}),"city:",l]}),Object(u.jsxs)("h1",{className:"temp",children:["Temp: ",a.temp]}),Object(u.jsxs)("h3",{className:"tempmin_max",children:["Max: ",a.temp_min,"  Min:",a.temp_max]})]}):Object(u.jsx)("p",{children:"no data found"})]})})};var p=function(){return Object(u.jsxs)("div",{className:"main_div",children:[Object(u.jsx)("h4",{className:"mohd",children:"By Mohd Akib "}),Object(u.jsx)(l,{})]})};a(14);s.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6ab184d0.chunk.js.map