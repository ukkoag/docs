"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={slug:"intro",title:"Weather Station API",authors:[{name:"Riyad Parvez",title:"Senior Software Engineer",url:"https://github.com/JoelMarcey",image_url:"https://github.com/JoelMarcey.png"}],tags:["api"]},o=void 0,s={unversionedId:"intro",id:"intro",title:"Weather Station API",description:"Authentication and Authorization",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[{label:"api",permalink:"/docs/docs/tags/api"}],version:"current",frontMatter:{slug:"intro",title:"Weather Station API",authors:[{name:"Riyad Parvez",title:"Senior Software Engineer",url:"https://github.com/JoelMarcey",image_url:"https://github.com/JoelMarcey.png"}],tags:["api"]},sidebar:"tutorialSidebar"},l={},u=[{value:"Authentication and Authorization",id:"authentication-and-authorization",level:3},{value:"Error Reporting and Debugging",id:"error-reporting-and-debugging",level:3},{value:"Data Format",id:"data-format",level:3},{value:"Get User Token",id:"get-user-token",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Get Weather Stations",id:"get-weather-stations",level:3},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Get Hourly Weather Readings",id:"get-hourly-weather-readings",level:3},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,a.kt)("p",null,"The API client needs to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," in the query string for authentication in ",(0,a.kt)("a",{parentName:"p",href:"#get-user-token"},"user token endpoint"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," will be provided to the client."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#get-user-token"},"User token endpoint")," will provide JWT token and the client make request on behalf of a user by including the bearer token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," HTTP header.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer AbCdEf123456")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," is also encoded in JWT token and Ukko verifies the ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," for authorization purpose in every request when a token is provided."),(0,a.kt)("h3",{id:"error-reporting-and-debugging"},"Error Reporting and Debugging"),(0,a.kt)("p",null,"We strongly recommend setting ",(0,a.kt)("inlineCode",{parentName:"p"},"X-REQUEST-ID")," header to UUID in each request. This will help us debug requests that failed."),(0,a.kt)("h3",{id:"data-format"},"Data Format"),(0,a.kt)("p",null,"Timestamp should be in ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," format and in UTC timezone."),(0,a.kt)("p",null,"Phone number should be E.164 compliant i.e with ",(0,a.kt)("inlineCode",{parentName:"p"},"+{country_code}"),". Eg ",(0,a.kt)("inlineCode",{parentName:"p"},"+1234567890")),(0,a.kt)("h3",{id:"get-user-token"},"Get User Token"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET v0.1/token/?email=abcd@gmail.com&client_id=sdfdsfsdf")),(0,a.kt)("p",null,"OR"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET v0.1/token/?phone_number=+123&client_id=sdfdsfsdf")),(0,a.kt)("h4",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"User's email OR phone number need to be specified in the query string. The API will return error (`4xx`) if both the email address and phone number are specified in the query string.\n")),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"User uuid and bearer token for the user. The client shall store the token and use it to make future requests on behalf of the user.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "token": "bearer token representing a user for future requests",\n    "user_uuid": "string"\n}\n')),(0,a.kt)("h3",{id:"get-weather-stations"},"Get Weather Stations"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET v0.1/user/<user_uuid>/weather_stations/")),(0,a.kt)("h4",{id:"request-1"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"user_uuid: `user_uuid` provided in the response of Get User Token endpoint.\n")),(0,a.kt)("h4",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Returns all the accessible weather stations for the user.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[   \n    {\n        "uuid": "string",\n        "latitude": "",\n        "longitude": "",\n        "installed_timestamp": "ISO format. UTC timezone",\n        "last_sent_payload": "ISO format. UTC timezone",\n    },\n    {\n        "uuid": "string",\n        "latitude": "",\n        "longitude": "",\n        "installed_timestamp": "ISO format. UTC timezone",\n        "last_sent_payload": "ISO format. UTC timezone",\n    }\n]\n')),(0,a.kt)("h3",{id:"get-hourly-weather-readings"},"Get Hourly Weather Readings"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET v0.1/weather/<station_uuid>?start_timestamp=iso_format&end_timestamp=iso_format")),(0,a.kt)("h4",{id:"request-2"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"station_uuid: Readings for the weather station\nMust include the JWT token obtained for the user in the bearer authentication header of the request.\n\nReturns hourly weather data between `start_timestamp` and `end_timestamp`. Both ends are INCLUSIVE.\n`end_timestamp` can be nullable. In that case the API will return all the data upto the current hour.\nIf both `start_timestamp` and `end_timestamp` are absent, then the readings for the most recent\n24 hours will be returned.\n")),(0,a.kt)("h4",{id:"response-2"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`uuid`: ID of the weather station.\n\nHourly aggregated weather readings in UTC timezone.\n\nNOTE: Weather readings are NOT guaranteed to be immutable or non-nullable. Most recent 24 hours of readings are subject to change anytime.\nReadings past 24 hours from current how can also change. Although it should be a rare event.\n\nWe strongly recommend the client to retrieve the most recent 24 hours of weather readings.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uuid": "string",\n    "readings": [\n        {\n            "timestamp": "ISO format. UTC timezone. Hourly",\n            "temperature": "Celsius",\n            "relative_humidity": "Percentage",\n            "water_event": "mm",\n            "wind_speed": "meter/second",\n            "wind_direction": "degree"\n        },\n        {\n            "timestamp": "ISO format. UTC timezone. Hourly",\n            "temperature": "Celsius",\n            "relative_humidity": "Percentage",\n            "water_event": "mm",\n            "wind_speed": "meter/second",\n            "wind_direction": "degree"\n        }\n\n    ]\n}\n')))}c.isMDXComponent=!0}}]);