webpackJsonp([37],{1058:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),i=r(a),d=s(1630),n=r(d),l=s(2240),o=r(l),_=s(2241),c=r(_),p=s(1145),m=r(p),u=s(1144),f=r(u),E=s(56),v=r(E),D=function(e){var t=e.match;return i.default.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},i.default.createElement(f.default,{title:i.default.createElement(v.default,{id:"sidebar.components.dividers"}),match:t}),i.default.createElement("div",{className:"row"},i.default.createElement(m.default,{styleName:"col-lg-4 col-sm-6",cardStyle:"p-0 overflow-hidden border-0",heading:i.default.createElement(v.default,{id:"component.dividers.list"}),headerOutside:!0},i.default.createElement(n.default,null)),i.default.createElement(m.default,{styleName:"col-lg-4 col-sm-6",cardStyle:"p-0 overflow-hidden border-0",heading:i.default.createElement(v.default,{id:"component.dividers.inset"}),headerOutside:!0},i.default.createElement(o.default,null)),i.default.createElement(m.default,{styleName:"col-lg-4 col-12",cardStyle:"p-0 overflow-hidden border-0",heading:i.default.createElement(v.default,{id:"component.dividers.inset"}),headerOutside:!0},i.default.createElement(c.default,null))))},A=D;t.default=A;var O=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(D,"Dividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(A,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(n,"_ListDividers2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(o,"_InsetDividers2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(c,"_InsetAvatarDividers2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(m,"_CardBox2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(f,"_ContainerHeader2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(v,"_IntlMessages2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(D,"Dividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(A,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"),__REACT_HOT_LOADER__.register(O,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/index.js"))}()},1144:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),i=r(a),d=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},n=function(e,t,s){return 0===s?"#/":"#/"+e.split(t)[0]+t},l=function(e){var t=e.title,s=e.match,r=s.path.substr(1);r.split("/");return i.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},i.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},o=l;t.default=o;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"getDisplayString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(n,"getUrlString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"ContainerHeader","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_react2","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(d,"getDisplayString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(n,"getUrlString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"ContainerHeader","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(_,"_temp","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"))}()},1145:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),i=r(a),d=function(e){var t=e.heading,s=e.children,r=e.styleName,a=e.cardStyle,d=e.childrenStyle,n=e.headerOutside;return i.default.createElement("div",{className:""+r},n&&i.default.createElement("div",{className:"jr-entry-header"},i.default.createElement("h3",{className:"entry-heading heading"},t),s.length>1&&i.default.createElement("div",{className:"entry-description"},s[0])),i.default.createElement("div",{className:"jr-card "+a},!n&&t&&i.default.createElement("div",{className:"jr-card-header"},i.default.createElement("h3",{className:"card-heading"},t),s.length>1&&i.default.createElement("div",{className:"sub-heading"},s[0])),i.default.createElement("div",{className:"jr-card-body "+d},s.length>1?s[1]:s)))},n=d;t.default=n,d.defaultProps={cardStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"};var l=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"CardBox","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(n,"default","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_react2","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(d,"CardBox","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(n,"_default","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(l,"_temp","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"))}()},1630:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){return d.default.createElement(n.ListGroup,{className:"pb-0 overflow-hidden"},l.map(function(e,t){return d.default.createElement(n.ListGroupItem,{className:"list-group-item-action list-group-item ripple-effect-click",key:t},d.default.createElement("a",{className:"text-decoration",href:"javascript:void(0)"},d.default.createElement("i",{className:"zmdi zmdi-hc-fw zmdi-hc-lg zmdi-"+e.icon+" text-"+e.color+" mr-3"}),d.default.createElement("span",{className:"text-dark"},e.name)))}))}Object.defineProperty(t,"__esModule",{value:!0});var i=s(3),d=r(i),n=s(93),l=[{id:1,icon:"email",name:"Inbox",color:"dark"},{id:2,icon:"mail-send",name:"Sent",color:"dark"},{id:3,icon:"email-open",name:"Drafts",color:"dark"},{id:4,icon:"star",name:"Starred",color:"dark"},{id:5,icon:"delete",name:"Trash",color:"dark"}],o=a;t.default=o;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"ListDividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"),__REACT_HOT_LOADER__.register(l,"lists","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"),__REACT_HOT_LOADER__.register(l,"lists","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"),__REACT_HOT_LOADER__.register(a,"ListDividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"),__REACT_HOT_LOADER__.register(_,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/list/ListDividers.js"))}()},2240:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){return d.default.createElement(n.ListGroup,null,d.default.createElement(n.ListGroupItem,{className:"ripple-effect-click",href:"javascript:void(0)",action:!0},d.default.createElement("div",{className:"media"},d.default.createElement("div",{className:"mr-3 mb-2"},d.default.createElement("span",{className:"user-avatar  bg-grey size-40"},d.default.createElement("i",{className:"zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"}))),d.default.createElement("div",{className:"media-body"},d.default.createElement("p",{className:"mb-0"},"Photos"),d.default.createElement("span",{className:"text-muted"},d.default.createElement("small",null,"March 9, 2018"))))),d.default.createElement(n.ListGroupItem,{className:"list-group-item-action list-group-item",href:"javascript:void(0)"},d.default.createElement("div",{className:"media"},d.default.createElement("div",{className:"mr-3 mb-2"},d.default.createElement("span",{className:"user-avatar  bg-grey size-40"},d.default.createElement("i",{className:"zmdi zmdi-file zmdi-hc-fw zmdi-hc-lg text-white"}))),d.default.createElement("div",{className:"media-body"},d.default.createElement("p",{className:"mb-0"},"Work"),d.default.createElement("span",{className:"text-muted"},d.default.createElement("small",null,"Jan 7, 2018"))))),d.default.createElement(n.ListGroupItem,{className:"list-group-item-action list-group-item",href:"javascript:void(0)"},d.default.createElement("div",{className:"media"},d.default.createElement("div",{className:"mr-3 mb-2"},d.default.createElement("span",{className:"user-avatar  bg-grey size-40"},d.default.createElement("i",{className:"zmdi zmdi-account zmdi-hc-fw zmdi-hc-lg text-white"}))),d.default.createElement("div",{className:"media-body"},d.default.createElement("p",{className:"mb-0"},"Meetings"),d.default.createElement("span",{className:"text-muted"},d.default.createElement("small",null,"April 20, 2018"))))))}Object.defineProperty(t,"__esModule",{value:!0});var i=s(3),d=r(i),n=s(93),l=a;t.default=l;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"InsetDividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/inset/InsetDividers.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/inset/InsetDividers.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/inset/InsetDividers.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/inset/InsetDividers.js"),__REACT_HOT_LOADER__.register(a,"InsetDividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/inset/InsetDividers.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/inset/InsetDividers.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/inset/InsetDividers.js"))}()},2241:function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){return d.default.createElement(n.ListGroup,{className:"w-100"},d.default.createElement(n.ListGroupItem,{className:"d-flex align-items-center",href:"javascript:void(0)",action:!0},d.default.createElement("div",{className:"media"},d.default.createElement("div",{className:"mr-3 mb-2"},d.default.createElement("img",{className:"user-avatar size-50",alt:"Remy Sharp",src:"http://via.placeholder.com/150x150"})),d.default.createElement("div",{className:"media-body"},d.default.createElement("p",{className:"mb-0"},"Photos"),d.default.createElement("span",{className:"text-muted"},d.default.createElement("small",null,"March 9, 2018")))),d.default.createElement(n.Badge,{className:"ml-auto",color:"primary",pill:!0},"ADMIN")),d.default.createElement(n.ListGroupItem,{className:"d-flex align-items-center",href:"javascript:void(0)",action:!0},d.default.createElement("div",{className:"media"},d.default.createElement("div",{className:"mr-3 mb-2"},d.default.createElement("img",{className:"user-avatar size-50",alt:"Remy Sharp",src:"http://via.placeholder.com/150x150"})),d.default.createElement("div",{className:"media-body"},d.default.createElement("p",{className:"mb-0"},"Work"),d.default.createElement("span",{className:"text-muted"},d.default.createElement("small",null,"Jan 7, 2018")))),d.default.createElement(n.Badge,{className:"ml-auto",color:"warning",pill:!0},"GUEST")),d.default.createElement(n.ListGroupItem,{className:"d-flex align-items-center",href:"javascript:void(0)",action:!0},d.default.createElement("div",{className:"media"},d.default.createElement("div",{className:"mr-3 mb-2"},d.default.createElement("img",{className:"user-avatar size-50",alt:"Remy Sharp",src:"http://via.placeholder.com/150x150"})),d.default.createElement("div",{className:"media-body"},d.default.createElement("p",{className:"mb-0"},"Meetings"),d.default.createElement("span",{className:"text-muted"},d.default.createElement("small",null,"April 20, 2018")))),d.default.createElement(n.Badge,{className:"ml-auto",color:"danger",pill:!0},"AGENT")))}Object.defineProperty(t,"__esModule",{value:!0});var i=s(3),d=r(i),n=s(93),l=a;t.default=l;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"InsetAvatarDividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/insetAvatar/InsetAvatarDividers.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/insetAvatar/InsetAvatarDividers.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/insetAvatar/InsetAvatarDividers.js"),__REACT_HOT_LOADER__.register(r,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/insetAvatar/InsetAvatarDividers.js"),__REACT_HOT_LOADER__.register(a,"InsetAvatarDividers","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/insetAvatar/InsetAvatarDividers.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/insetAvatar/InsetAvatarDividers.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/dividers/insetAvatar/InsetAvatarDividers.js"))}()}});
//# sourceMappingURL=37.3bcfc7b7f0ebcfb40f1d.chunk.js.map