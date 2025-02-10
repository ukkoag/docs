"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={slug:"proposed",title:"Analytics API",authors:[{name:"Riyad Parvez",title:"Senior Software Engineer",url:"https://github.com/riyadparvez",image_url:"https://github.com/JoelMarcey.png"}],tags:["api"]},o=void 0,s={unversionedId:"proposed",id:"proposed",title:"Analytics API",description:"IMPORTANT",source:"@site/docs/proposed.md",sourceDirName:".",slug:"/proposed",permalink:"/docs/docs/proposed",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/proposed.md",tags:[{label:"api",permalink:"/docs/docs/tags/api"}],version:"current",frontMatter:{slug:"proposed",title:"Analytics API",authors:[{name:"Riyad Parvez",title:"Senior Software Engineer",url:"https://github.com/riyadparvez",image_url:"https://github.com/JoelMarcey.png"}],tags:["api"]},sidebar:"tutorialSidebar",previous:{title:"Weather Station API",permalink:"/docs/docs/intro"}},l={},u=[{value:"IMPORTANT",id:"important",level:2},{value:"Overview",id:"overview",level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:3},{value:"Error Reporting and Debugging",id:"error-reporting-and-debugging",level:3},{value:"Data Format",id:"data-format",level:3},{value:"Endpoints",id:"endpoints",level:2},{value:"Get Authnetication Token",id:"get-authnetication-token",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Get Management Units",id:"get-management-units",level:3},{value:"Response",id:"response-1",level:4},{value:"Create a Management Unit",id:"create-a-management-unit",level:3},{value:"Request",id:"request-1",level:4},{value:"Get Disease Risk Values",id:"get-disease-risk-values",level:3},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"important"},"IMPORTANT"),(0,r.kt)("p",null,"This is a proposed API spec. The actual API spec might differ from this, although not heavily."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,r.kt)("p",null,"The API client needs to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," in the query string for authentication in ",(0,r.kt)("a",{parentName:"p",href:"#get-user-token"},"user token endpoint"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," will be provided to the client."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#get-user-token"},"User token endpoint")," will provide JWT token and the client make request on behalf of a user by including the bearer token in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," HTTP header.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer AbCdEf123456")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," is also encoded in JWT token and Ukko verifies the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," for authorization purpose in every request when a token is provided."),(0,r.kt)("h3",{id:"error-reporting-and-debugging"},"Error Reporting and Debugging"),(0,r.kt)("p",null,"We strongly recommend setting ",(0,r.kt)("inlineCode",{parentName:"p"},"X-REQUEST-ID")," header to UUID in each request. This will help us debug requests that failed. ",(0,r.kt)("inlineCode",{parentName:"p"},"X-REQUEST-ID")," header will also be set in response."),(0,r.kt)("h3",{id:"data-format"},"Data Format"),(0,r.kt)("p",null,"Timestamp should be in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," format and in UTC timezone."),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("h3",{id:"get-authnetication-token"},"Get Authnetication Token"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://external.ukkoag.com/v0.1/token?client_id=sdfdsfsdf")),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Bearer token if authentication is successful. The client shall store the token and use it to make future requests.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "token": "bearer token for future requests",\n}\n')),(0,r.kt)("h3",{id:"get-management-units"},"Get Management Units"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://external.ukkoag.com/v0.1/management_unit")),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Returns all the accessible Management Units.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[   \n    {\n        "uuid": "string",\n        "name": "string",\n        "latitude": "",\n        "longitude": "",\n        "crop": "string",\n        "created_timestamp": "ISO format. UTC timezone",\n        "planting_date": "ISO format. UTC timezone",\n        "models": [\n            "Lateblight",\n            "Earlyblight"\n        ]\n    },\n    {\n        "uuid": "string",\n        "name": "string",\n        "latitude": "",\n        "longitude": "",\n        "crop": "string",\n        "created_timestamp": "ISO format. UTC timezone",\n        "planting_date": "ISO format. UTC timezone",\n        "models": [\n            "Lateblight",\n            "Earlyblight"\n        ]\n    }\n]\n')),(0,r.kt)("h3",{id:"create-a-management-unit"},"Create a Management Unit"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://external.ukkoag.com/v0.1/management_unit")),(0,r.kt)("h4",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "string",\n    "latitude": "",\n    "longitude": "",\n    "crop": "string",\n    "planting_date": "ISO format. UTC timezone",\n}\n')),(0,r.kt)("h3",{id:"get-disease-risk-values"},"Get Disease Risk Values"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://external.ukkoag.com/v0.1/disease/<management_unit_uuid>/<model_name>?start_timestamp=iso_format&end_timestamp=iso_format")),(0,r.kt)("h4",{id:"request-2"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"management_unit_uuid: \nMust include the JWT token obtained in the bearer authentication header of the request.\n\nReturns disease risk data between `start_timestamp` and `end_timestamp`. Both ends are INCLUSIVE.\n`end_timestamp` can be nullable. In that case the API will return all the data upto the current hour.\nIf both `start_timestamp` and `end_timestamp` are absent, then the readings for the most recent\n24 hours will be returned.\n")),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"`manamgent_unit_uuid`: ID of the management unit.\n\nHourly/daily (depending on the disease model) disease risk. If it's hourly the time will be in UTC timezone.\n\nNOTE: Disease risk values are NOT guaranteed to be immutable or non-nullable. As the risk depends on the weather forecast.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manamgent_unit_uuid": "string",\n    "readings": [\n        {\n            "timestamp": "ISO format. UTC timezone. Hourly",\n            "temperature": "Celsius",\n            "relative_humidity": "Percentage",\n            "water_event": "mm",\n            "wind_speed": "meter/second",\n            "wind_direction": "degree"\n        },\n        {\n            "timestamp": "ISO format. UTC timezone. Hourly",\n            "temperature": "Celsius",\n            "relative_humidity": "Percentage",\n            "water_event": "mm",\n            "wind_speed": "meter/second",\n            "wind_direction": "degree"\n        }\n\n    ]\n}\n')))}m.isMDXComponent=!0}}]);