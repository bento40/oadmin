webpackJsonp([24],{1051:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=a(1145),o=l(s),c=a(1144),u=l(c),i=a(2142),d=l(i),m=a(2143),f=l(m),_=a(2144),p=l(_),b=a(2145),E=l(b),j=a(2146),g=l(j),N=a(2147),z=l(N),h=a(2148),O=l(h),R=a(56),T=l(R),A=function(e){var t=e.match;return r.default.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.default.createElement(u.default,{title:r.default.createElement(T.default,{id:"sidebar.components.buttons"}),match:t}),r.default.createElement("div",{className:"row mb-md-4"},r.default.createElement(o.default,{styleName:"col-lg-12",heading:r.default.createElement(T.default,{id:"component.buttons.colorScheme"})},r.default.createElement("div",null,r.default.createElement(T.default,{id:"component.buttons.colorSchemeTxt"})),r.default.createElement(g.default,null))),r.default.createElement("div",{className:"row mb-md-4"},r.default.createElement(o.default,{styleName:"col-lg-12",heading:r.default.createElement(T.default,{id:"component.buttons.icon"})},r.default.createElement("div",null,r.default.createElement(T.default,{id:"component.buttons.iconTxt"})),r.default.createElement(E.default,null))),r.default.createElement("div",{className:"row mb-md-4"},r.default.createElement(o.default,{styleName:"col-lg-6 col-12",heading:r.default.createElement(T.default,{id:"component.buttons.differentSizes"})},r.default.createElement("div",null,r.default.createElement(T.default,{id:"component.buttons.differentSizesTxt"})),r.default.createElement(z.default,null)),r.default.createElement(o.default,{styleName:"col-lg-6 col-12",heading:r.default.createElement(T.default,{id:"component.buttons.flatFullWidth"})},r.default.createElement("div",null,r.default.createElement(T.default,{id:"component.buttons.flatFullWidthTxt"})),r.default.createElement(d.default,null))),r.default.createElement("div",{className:"row mb-md-4"},r.default.createElement(o.default,{styleName:"col-lg-6 col-12",heading:r.default.createElement(T.default,{id:"component.buttons.raised"})},r.default.createElement("div",null,r.default.createElement(T.default,{id:"component.buttons.raisedTxt"})),r.default.createElement(p.default,null)),r.default.createElement(o.default,{styleName:"col-lg-6 col-12",heading:r.default.createElement(T.default,{id:"component.buttons.fab"})},r.default.createElement("div",null,r.default.createElement(T.default,{id:"component.buttons.fabTxt"})),r.default.createElement(f.default,null))),r.default.createElement("div",{className:"row mb-md-4"},r.default.createElement(o.default,{styleName:"col-lg-12",heading:r.default.createElement(T.default,{id:"component.buttons.socialMedia"})},r.default.createElement("div",null,r.default.createElement(T.default,{id:"component.buttons.socialMediaTxt"})),r.default.createElement(O.default,null))))},D=A;t.default=D;var B=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(A,"Buttons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(D,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(o,"_CardBox2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(u,"_ContainerHeader2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(d,"_FlatButtons2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(f,"_FloatingActionButtons2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(p,"_RaisedButton2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(E,"_IconButtons2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(g,"_ColorScheme2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(z,"_DifferentSizesButtons2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(O,"_SocialMediaButtons2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(T,"_IntlMessages2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(A,"Buttons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(D,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"),__REACT_HOT_LOADER__.register(B,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/index.js"))}()},1144:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)},o=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t},c=function(e){var t=e.title,a=e.match,l=a.path.substr(1);l.split("/");return r.default.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.default.createElement("h2",{className:"title mb-3 mb-sm-0"},t))},u=c;t.default=u;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"getDisplayString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"getUrlString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(s,"getDisplayString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(o,"getUrlString","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(c,"ContainerHeader","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(u,"_default","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","/Users/apple/Desktop/modifi/src/components/ContainerHeader/index.js"))}()},1145:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=function(e){var t=e.heading,a=e.children,l=e.styleName,n=e.cardStyle,s=e.childrenStyle,o=e.headerOutside;return r.default.createElement("div",{className:""+l},o&&r.default.createElement("div",{className:"jr-entry-header"},r.default.createElement("h3",{className:"entry-heading heading"},t),a.length>1&&r.default.createElement("div",{className:"entry-description"},a[0])),r.default.createElement("div",{className:"jr-card "+n},!o&&t&&r.default.createElement("div",{className:"jr-card-header"},r.default.createElement("h3",{className:"card-heading"},t),a.length>1&&r.default.createElement("div",{className:"sub-heading"},a[0])),r.default.createElement("div",{className:"jr-card-body "+s},a.length>1?a[1]:a)))},o=s;t.default=o,s.defaultProps={cardStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"};var c=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"CardBox","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(o,"default","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(s,"CardBox","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(o,"_default","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"),__REACT_HOT_LOADER__.register(c,"_temp","/Users/apple/Desktop/modifi/src/components/CardBox/index.js"))}()},2142:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=a(93),o=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"jr-btn-group"},r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-flat-btn"},"Default"),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-primary"},"Primary"),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-secondary"},"Secondary"),r.default.createElement(s.Button,{color:"default",className:"jr-btn disabled",disabled:!0},"Disabled")),r.default.createElement("div",{className:"jr-btn-group"},r.default.createElement(s.Button,{className:"jr-btn jr-flat-btn",color:"default"},r.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-lg"}),r.default.createElement("span",null,"ICON BUTTON")),r.default.createElement(s.Button,{className:"jr-btn jr-flat-btn jr-btn-primary",color:"default"},r.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-lg"}),r.default.createElement("span",null,"ICON BUTTON")),r.default.createElement(s.Button,{className:"jr-btn jr-flat-btn jr-btn-secondary",color:"default"},r.default.createElement("span",null,"ICON RIGHT BUTTON"),r.default.createElement("i",{className:"zmdi zmdi-github"})),r.default.createElement(s.Button,{className:"jr-btn jr-flat-btn jr-btn-primary",color:"default"},r.default.createElement("i",{className:"zmdi zmdi-github"}))),r.default.createElement("div",null,r.default.createElement(s.Button,{color:"primary",className:"jr-btn jr-btn-primary text-uppercase btn-block"},"Full Width Primary"),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-secondary text-uppercase btn-block"},"Full Width large button"),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-default text-uppercase btn-block"},"Full Width default button"),r.default.createElement(s.Button,{className:"jr-btn jr-flat-btn text-uppercase btn-block",color:"default"},"Full Width default button")))},c=o;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"FlatButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/flat/FlatButtons.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/flat/FlatButtons.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/flat/FlatButtons.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/flat/FlatButtons.js"),__REACT_HOT_LOADER__.register(o,"FlatButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/flat/FlatButtons.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/flat/FlatButtons.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/flat/FlatButtons.js"))}()},2143:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=a(93),o=function(){return r.default.createElement("div",{className:"manage-margin d-flex flex-wrap"},r.default.createElement(s.Button,{color:"primary",className:"jr-fab-btn"},r.default.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"})),r.default.createElement(s.Button,{className:"jr-fab-btn text-white bg-secondary"},r.default.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn",disabled:!0},r.default.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"})))},c=o;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"FloatingActionButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/fab/FloatingActionButtons.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/fab/FloatingActionButtons.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/fab/FloatingActionButtons.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/fab/FloatingActionButtons.js"),__REACT_HOT_LOADER__.register(o,"FloatingActionButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/fab/FloatingActionButtons.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/fab/FloatingActionButtons.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/fab/FloatingActionButtons.js"))}()},2144:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=a(93),o=function(){return r.default.createElement("div",{className:"jr-btn-group"},r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-default"},"Default"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-primary"},"Primary"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-secondary"},"Secondary"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-primary disabled",disabled:!0},"Disabled"))},c=o;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"RaisedButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/raised/RaisedButton.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/raised/RaisedButton.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/raised/RaisedButton.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/raised/RaisedButton.js"),__REACT_HOT_LOADER__.register(o,"RaisedButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/raised/RaisedButton.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/raised/RaisedButton.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/raised/RaisedButton.js"))}()},2145:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return s.default.createElement("div",null,s.default.createElement("div",{className:"jr-btn-group"},s.default.createElement(o.Button,{color:"primary",className:"jr-btn jr-btn-label left"},s.default.createElement("i",{className:"zmdi zmdi-headset zmdi-hc-fw "}),s.default.createElement("span",null,"Labeled")),s.default.createElement(o.Button,{color:"primary",className:"jr-btn jr-btn-label right"},s.default.createElement("i",{className:"zmdi zmdi-camera zmdi-hc-fw "}),s.default.createElement("span",null,"Camera")),s.default.createElement(o.Button,{color:"primary",className:"jr-btn"},s.default.createElement("i",{className:"zmdi zmdi-mic zmdi-hc-fw"}),s.default.createElement("span",null,"Icon Button")),s.default.createElement(o.Button,{color:"default",className:"jr-flat-btn jr-btn"},s.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-fw"}),s.default.createElement("span",null,"FLAT ICON BUTTON")),s.default.createElement(o.Button,{color:"primary",className:"jr-btn"},s.default.createElement("i",{className:"zmdi zmdi-mic zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-dropbox zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-mic zmdi-hc-fw"}),s.default.createElement("span",null,"Icon Button"))),s.default.createElement("div",{className:"jr-btn-group"},s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-light-green"},s.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw"}),s.default.createElement("span",null,"Search")),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-deep-orange"},s.default.createElement("i",{className:"zmdi zmdi-shield-check zmdi-hc-fw"}),s.default.createElement("span",null,"privacy")),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-amber"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket zmdi-hc-fw"}),s.default.createElement("span",null,"Shopping Cart")),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-secondary"},s.default.createElement("i",{className:"zmdi zmdi-spinner zmdi-hc-fw"}),s.default.createElement("span",null,"Spinner")),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-purple"},s.default.createElement("i",{className:"zmdi zmdi-thumb-up zmdi-hc-fw"}),s.default.createElement("span",null,"Like")),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-teal"},s.default.createElement("i",{className:"zmdi zmdi-notifications-active zmdi-hc-fw"}),s.default.createElement("span",null,"Notifications"))),s.default.createElement("div",{className:"jr-btn-group"},s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-light-green"},s.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-amber"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-secondary"},s.default.createElement("i",{className:"zmdi zmdi-spinner zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-purple"},s.default.createElement("i",{className:"zmdi zmdi-thumb-up zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn btn-teal"},s.default.createElement("i",{className:"zmdi zmdi-notifications-active"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket zmdi-hc-fw "})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-spinner zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-thumb-up zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-notifications-active zmdi-hc-fw"}))),s.default.createElement("div",{className:"jr-btn-group"},s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn btn-light-green"},s.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn btn-amber"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn btn-secondary"},s.default.createElement("i",{className:"zmdi zmdi-spinner zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn btn-purple"},s.default.createElement("i",{className:"zmdi zmdi-thumb-up zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn btn-teal"},s.default.createElement("i",{className:"zmdi zmdi-notifications-active zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket zmdi-hc-fw "})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-spinner zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-thumb-up zmdi-hc-fw"})),s.default.createElement(o.Button,{color:"default",className:"jr-fab-btn jr-btn-default"},s.default.createElement("i",{className:"zmdi zmdi-notifications-active zmdi-hc-fw"}))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),s=l(r),o=a(93),c=n;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"IconButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/icon/IconButtons.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/icon/IconButtons.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/icon/IconButtons.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/icon/IconButtons.js"),__REACT_HOT_LOADER__.register(n,"IconButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/icon/IconButtons.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/icon/IconButtons.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/icon/IconButtons.js"))}()},2146:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=a(93),o=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"jr-btn-group mb-3 mb-md-5"},r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-white"},"Default"),r.default.createElement(s.Button,{color:"primary",className:"jr-btn"},"Primary"),r.default.createElement(s.Button,{color:"secondary",className:"jr-btn"},"Secondary"),r.default.createElement(s.Button,{color:"warning",className:"jr-btn bg-warning"},"Warning"),r.default.createElement(s.Button,{color:"info",className:"jr-btn bg-info"},"Info"),r.default.createElement(s.Button,{color:"success",className:"jr-btn bg-success"},"Success"),r.default.createElement(s.Button,{color:"danger",className:"jr-btn bg-danger"},"Danger")),r.default.createElement("h4",{className:"sub-heading"}," Optional Material Design Colors"),r.default.createElement("div",{className:"jr-btn-group"},r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-cyan"},"Cyan"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-teal"},"Teal"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-amber"},"Amber"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-orange"},"Orange"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-deep-orange"},"Deep Orange"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-red"},"Red"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-pink"},"Pink"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-light-blue"},"Light Blue"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-blue"},"Blue"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-indigo"},"Indigo"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-lime"},"Lime"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-light-green"},"Light Green"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-purple"},"Purple"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-deep-purple"},"Deep Purple"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-green"},"Green"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-grey"},"Grey"),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-blue-grey"},"Blue Grey")))},c=o;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"ColorScheme","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/colorScheme/ColorScheme.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/colorScheme/ColorScheme.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/colorScheme/ColorScheme.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/colorScheme/ColorScheme.js"),__REACT_HOT_LOADER__.register(o,"ColorScheme","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/colorScheme/ColorScheme.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/colorScheme/ColorScheme.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/colorScheme/ColorScheme.js"))}()},2147:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return s.default.createElement("div",null,s.default.createElement("div",{className:"jr-btn-group d-flex align-items-center flex-wrap"},s.default.createElement(o.Button,{color:"primary",className:"jr-btn jr-btn-lg"},"primary"),s.default.createElement(o.Button,{color:"primary",className:"jr-btn"},"primary"),s.default.createElement(o.Button,{color:"primary",className:"jr-btn jr-btn-sm"},"primary"),s.default.createElement(o.Button,{color:"primary",className:"jr-btn jr-btn-xs"},"primary")),s.default.createElement("div",{className:"jr-btn-group d-flex align-items-center flex-wrap"},s.default.createElement(o.Button,{className:"jr-fab-btn jr-btn-fab-lg"},s.default.createElement("i",{className:"zmdi zmdi-notifications zmdi-hc-lg"})),s.default.createElement(o.Button,{className:"jr-fab-btn bg-secondary"},s.default.createElement("i",{className:"zmdi zmdi-notifications zmdi-hc-lg"})),s.default.createElement(o.Button,{className:"jr-fab-btn bg-secondary jr-btn-fab-sm"},s.default.createElement("i",{className:"zmdi zmdi-refresh-sync"})),s.default.createElement(o.Button,{className:"jr-fab-btn bg-secondary text-white jr-btn-fab-xs mb-3"},s.default.createElement("i",{className:"zmdi zmdi-cloud-done"}))),s.default.createElement("div",{className:"jr-btn-group d-flex align-items-center flex-wrap"},s.default.createElement(o.Button,{color:"warning",className:"jr-btn jr-btn-lg text-white"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket"})),s.default.createElement(o.Button,{color:"warning",className:"jr-btn jr-btn-amber text-white"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket"})),s.default.createElement(o.Button,{color:"warning",className:"jr-btn jr-btn-sm text-white"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket"})),s.default.createElement(o.Button,{color:"warning",className:"jr-btn jr-btn-xs text-white"},s.default.createElement("i",{className:"zmdi zmdi-shopping-basket"}))),s.default.createElement("div",{className:"jr-btn-group d-flex align-items-center flex-wrap"},s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-btn-lg jr-flat-btn jr-btn-primary"},s.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-lg"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-primary"},s.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-lg"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-primary jr-btn-sm"},s.default.createElement("i",{className:"zmdi zmdi-github"})),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-primary jr-btn-xs"},s.default.createElement("i",{className:"zmdi zmdi-github"}))),s.default.createElement("div",{className:"jr-btn-group d-flex align-items-center flex-wrap"},s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-lg"},"large"),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-flat-btn"},"default"),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-sm"},"small"),s.default.createElement(o.Button,{color:"default",className:"jr-btn jr-flat-btn jr-btn-xs"},"extra small")))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),s=l(r),o=a(93),c=n;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"DifferentSizesButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/differentSizes/DifferentSizesButtons.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/differentSizes/DifferentSizesButtons.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/differentSizes/DifferentSizesButtons.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/differentSizes/DifferentSizesButtons.js"),__REACT_HOT_LOADER__.register(n,"DifferentSizesButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/differentSizes/DifferentSizesButtons.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/differentSizes/DifferentSizesButtons.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/differentSizes/DifferentSizesButtons.js"))}()},2148:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=l(n),s=a(93),o=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"jr-btn-group"},r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-light-blue accent-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-twitter zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-indigo lighten-1 text-white"},r.default.createElement("i",{className:"zmdi zmdi-facebook zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-red lighten-1 text-white"},r.default.createElement("i",{className:"zmdi zmdi-google zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-red darken-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-pinterest zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-brown lighten-1 text-white"},r.default.createElement("i",{className:"zmdi zmdi-instagram zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn btn-amber"},r.default.createElement("i",{className:"zmdi zmdi-rss zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn btn-blue-grey"},r.default.createElement("i",{className:"zmdi zmdi-tumblr zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-light-blue darken-3 text-white"},r.default.createElement("i",{className:"zmdi zmdi-linkedin zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-pink lighten-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-dribbble zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn bg-red accent-4 text-white"},r.default.createElement("i",{className:"zmdi zmdi-youtube zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-grey darken-3 text-white"},r.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-fab-btn jr-btn-hover bg-light-blue lighten-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-skype zmdi-hc-lg"}))),r.default.createElement("div",{className:"jr-btn-group"},r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-light-blue accent-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-twitter zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-indigo lighten-1 text-white"},r.default.createElement("i",{className:"zmdi zmdi-facebook zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-red lighten-1 text-white"},r.default.createElement("i",{className:"zmdi zmdi-google zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-red darken-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-pinterest zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-brown lighten-1 text-white"},r.default.createElement("i",{className:"zmdi zmdi-instagram zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-amber"},r.default.createElement("i",{className:"zmdi zmdi-rss zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn btn-blue-grey"},r.default.createElement("i",{className:"zmdi zmdi-tumblr zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-light-blue darken-3 text-white"},r.default.createElement("i",{className:"zmdi zmdi-linkedin zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-pink lighten-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-dribbble zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-red accent-4 text-white"},r.default.createElement("i",{className:"zmdi zmdi-youtube zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-grey darken-3 text-white"},r.default.createElement("i",{className:"zmdi zmdi-github zmdi-hc-lg"})),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover bg-light-blue lighten-2 text-white"},r.default.createElement("i",{className:"zmdi zmdi-skype zmdi-hc-lg"}))),r.default.createElement("div",{className:"jr-btn-group"},r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-lg btn-primary"},r.default.createElement("i",{className:"zmdi zmdi-facebook zmdi-hc-fw"}),r.default.createElement("span",null,"Signin with Facebook")),r.default.createElement(s.Button,{color:"default",className:"jr-btn jr-btn-hover jr-btn-lg bg-red lighten-1 text-white"},r.default.createElement("i",{className:"zmdi zmdi-google zmdi-hc-fw "}),r.default.createElement("span",null,"Signin With Google+"))))},c=o;t.default=c;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"SocialMediaButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/socialMediaButtons/SocialMediaButtons.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/socialMediaButtons/SocialMediaButtons.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/socialMediaButtons/SocialMediaButtons.js"),__REACT_HOT_LOADER__.register(l,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/socialMediaButtons/SocialMediaButtons.js"),__REACT_HOT_LOADER__.register(o,"SocialMediaButtons","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/socialMediaButtons/SocialMediaButtons.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/socialMediaButtons/SocialMediaButtons.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/app/routes/components/routes/button/socialMediaButtons/SocialMediaButtons.js"))}()}});
//# sourceMappingURL=24.3bcfc7b7f0ebcfb40f1d.chunk.js.map