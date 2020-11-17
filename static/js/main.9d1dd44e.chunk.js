(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{185:function(e,t,n){e.exports=n(387)},190:function(e,t,n){},192:function(e,t,n){},209:function(e,t,n){},387:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(57),c=n.n(o),i=(n(190),n(11)),s=n.n(i),u=n(24),l=n(8),m=n(13),f=n(10),h=n(9),d=(n(192),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component)),p=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(d),v=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(d),g=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(d),b=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));return 0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(p,{text:this.state.infoText}),r.a.createElement("div",{className:"CitySuggestions"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"City"}),r.a.createElement("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)})),r.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities")))))}}]),n}(a.Component),w=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.onDetailsButtonClicked=function(){e.setState((function(e){return{showDetails:!e.showDetails}}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.event;return r.a.createElement("div",{className:"event"},r.a.createElement("p",{className:"time"},e.start.dateTime," - ",e.end.dateTime),r.a.createElement("p",{className:"summary"},e.summary),this.state.showDetails&&r.a.createElement("div",{className:"extra"},r.a.createElement("p",{className:"location"},e.location),r.a.createElement("p",{className:"description"},e.description),r.a.createElement("a",{className:"htmlLink",href:e.htmlLink},"Event Link")),r.a.createElement("button",{className:"details-btn",onClick:this.onDetailsButtonClicked},"Details"))}}]),n}(a.Component),y=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(w,{event:e}))})))}}]),n}(a.Component),E=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.props.updateEvents(null,n),n<1||n>32?e.setState({infoText:"Select number from 1 to 32"}):e.setState({infoText:""})},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events:"),r.a.createElement("input",{type:"number",id:"numberOfEvents input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(v,{text:this.state.infoText}))}}]),n}(a.Component),k=n(162),O=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in Berlin? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/London"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/London"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/London"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],S=n(86),j=n.n(S),x=n(42),T=n.n(x),C=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(!e.sent.error){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return!1})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},A=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return T.a.done(),e.abrupt("return",{events:O,locations:Z(O)});case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),T.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:Z(JSON.parse(t).events)});case 8:return e.next=10,L();case 10:if(!(n=e.sent)){e.next=23;break}return C(),a="https://qxi4otm9a6.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,j.a.get(a);case 16:return r=e.sent,o=[],r.data&&(o=Z(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),T.a.done(),e.abrupt("return",{events:r.data.events||[],locations:o});case 23:return e.abrupt("return",{events:[],locations:[]});case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&n){e.next=18;break}if(localStorage.removeItem("access_token"),a=new URLSearchParams(window.location.search),r=a.get("code")){e.next=17;break}return e.next=14,j.a.get("https://qxi4otm9a6.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 14:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 17:return e.abrupt("return",r&&W(r));case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(),n=encodeURIComponent(t),e.next=4,fetch("https://qxi4otm9a6.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=(n(209),n(14)),I=n(163),q=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(I.a)(n,2),c=o[0],i=o[1];return Object(a.useEffect)((function(){i((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))}))}),[t]),r.a.createElement(D.d,{height:400},r.a.createElement(D.c,{width:400,height:400},r.a.createElement(D.b,{data:c,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})))},J=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?A().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);return e.setState({events:a,currentLocation:t,locations:n.locations})})):A().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,navigator.onLine||this.setState({warningText:"As you are offline, you are only viewing the cached events from your last session"}),A().then((function(e){t.mounted&&t.setState({events:e.events,locations:e.locations})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{text:this.state.warningText}),r.a.createElement("h1",null,"Meet App"),r.a.createElement("h4",null,"Choose your nearest city"),r.a.createElement(b,{updateEvents:this.updateEvents,locations:t}),r.a.createElement(E,{updateEvents:this.updateEvents,numberOfEvents:n}),r.a.createElement("h4",null,"Events in each city"),r.a.createElement("div",{className:"data-vis-wrapper"},r.a.createElement(q,{events:a}),r.a.createElement(D.d,{height:400},r.a.createElement(D.f,{margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(D.a,null),r.a.createElement(D.h,{type:"category",dataKey:"city",name:"city"}),r.a.createElement(D.i,{allowDecimals:!1,type:"number",dataKey:"number",name:"Number Of Events"}),r.a.createElement(D.g,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(D.e,{data:this.getData(),fill:"#8884d8"})))),r.a.createElement(y,{events:this.state.events}))}}]),n}(a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=n(161);c.a.render(r.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}(),U.config("24970c25d6b44509bd69e498fea79949").install()}},[[185,1,2]]]);
//# sourceMappingURL=main.9d1dd44e.chunk.js.map