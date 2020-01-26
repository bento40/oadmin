webpackJsonp([43],{1142:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":r(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(3),p=n(d),u=a(93),_=a(210),m=a(209),f=n(m),C=a(40),E=a(483),h=n(E),O=a(1692),b=n(O),g=a(1316),A=n(g),D=a(1436),T=n(D),R=a(56),v=n(R),y=a(106),x=n(y),L=723812738,k=[{id:1,name:"All contacts",icon:"zmdi-menu"},{id:2,name:"Frequently contacted",icon:"zmdi-time-restore"},{id:3,name:"Starred contacts",icon:"zmdi-star"}],S=function(e){function t(){o(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.ContactSideBar=function(t){return p.default.createElement("div",{className:"module-side"},p.default.createElement("div",{className:"module-side-header"},p.default.createElement("div",{className:"module-logo"},p.default.createElement("i",{className:"zmdi zmdi-account-box mr-4"}),p.default.createElement("span",null,p.default.createElement(v.default,{id:"chat.contacts"})))),p.default.createElement("div",{className:"module-side-content"},p.default.createElement(x.default,{className:"module-side-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},p.default.createElement("div",{className:"module-add-task"},p.default.createElement(u.Button,{className:"btn-block jr-btn",color:"primary",onClick:e.onAddContact},p.default.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw"}),p.default.createElement("span",null,"Add New Contact"))),p.default.createElement("div",{className:"module-side-nav"},p.default.createElement("ul",{className:"module-nav"},k.map(function(t){return p.default.createElement("li",{key:t.id,className:"nav-item"},p.default.createElement("a",{href:"javascript:void(0)",className:t.id===e.state.selectedSectionId?"active":"",onClick:e.onFilterOptionSelect.bind(e,t)},p.default.createElement("i",{className:"zmdi "+t.icon}),p.default.createElement("span",null,t.name)))}))))))},e.addFavourite=function(t){e.setState({alertMessage:t.starred?"Contact removed as star":"Contact marked as star",showMessage:!0,contactList:e.state.contactList.map(function(e){return e.id===t.id?i({},e,{starred:!t.starred}):e}),allContact:e.state.allContact.map(function(e){return e.id===t.id?i({},e,{starred:!t.starred}):e})})},e.onContactSelect=function(t){t.selected=!t.selected;var a=0,n=e.state.contactList.map(function(e){return e.selected&&a++,e.id===t.id?(e.selected&&a++,t):e});e.setState({selectedContacts:a,contactList:n})},e.onAddContact=function(){e.setState({addContactState:!0})},e.onContactClose=function(){e.setState({addContactState:!1})},e.onFilterOptionSelect=function(t){switch(t.name){case"All contacts":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact});break;case"Frequently contacted":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact.filter(function(e){return e.frequently})});break;case"Starred contacts":e.setState({selectedSectionId:t.id,filterOption:t.name,contactList:e.state.allContact.filter(function(e){return e.starred})})}},e.onSaveContact=function(t){var a=!0,n=e.state.allContact.map(function(e){return e.id===t.id?(a=!1,t):e});a&&n.push(t),e.setState({alertMessage:a?"Contact Added Successfully":"Contact Updated Successfully",showMessage:!0,contactList:n,allContact:n})},e.onDeleteContact=function(t){e.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:e.state.allContact.filter(function(e){return e.id!==t.id}),contactList:e.state.allContact.filter(function(e){return e.id!==t.id})})},e.onDeleteSelectedContact=function(){var t=e.state.allContact.filter(function(e){return!e.selected});e.setState({alertMessage:"Contact Deleted Successfully",showMessage:!0,allContact:t,contactList:t,selectedContacts:0})},e.filterContact=function(t){var a=e.state.filterOption;if(""===t)e.setState({contactList:e.state.allContact});else{var n=e.state.allContact.filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1});"All contacts"===a?e.setState({contactList:n}):"Frequently contacted"===a?e.setState({contactList:n.filter(function(e){return e.frequently})}):"Starred contacts"===a&&e.setState({contactList:n.filter(function(e){return e.starred})})}},e.handleRequestClose=function(){e.setState({showMessage:!1})},e.getAllContact=function(){var t=e.state.allContact.map(function(e){return e?i({},e,{selected:!0}):e});e.setState({selectedContacts:t.length,allContact:t,contactList:t})},e.getUnselectedAllContact=function(){var t=e.state.allContact.map(function(e){return e?i({},e,{selected:!1}):e});e.setState({selectedContacts:0,allContact:t,contactList:t})},e.state={noContentFoundMessage:"No contact found in selected folder",alertMessage:"",showMessage:!1,selectedSectionId:1,drawerState:!1,user:{name:"Robert Johnson",email:"robert.johnson@example.com",avatar:"http://via.placeholder.com/150x150"},searchUser:"",filterOption:"All contacts",allContact:h.default,contactList:h.default,selectedContact:null,selectedContacts:0,addContactState:!1},e}return c(t,e),l(t,[{key:"onAllContactSelect",value:function(){this.state.selectedContacts<this.state.contactList.length?this.getAllContact():this.getUnselectedAllContact()}},{key:"updateContactUser",value:function(e){this.setState({searchUser:e.target.value}),this.filterContact(e.target.value)}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.drawerState,n=e.contactList,o=e.addContactState,s=e.selectedContacts,c=e.alertMessage,r=e.showMessage,i=e.noContentFoundMessage;return p.default.createElement("div",{className:"app-wrapper"},p.default.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},p.default.createElement("div",{className:"d-block d-xl-none"},p.default.createElement(f.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:a,onOpenChange:this.onToggleDrawer.bind(this),sidebar:this.ContactSideBar(t)})),p.default.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},this.ContactSideBar(t)),p.default.createElement("div",{className:"module-box"},p.default.createElement("div",{className:"module-box-header"},p.default.createElement("span",{className:"icon-btn drawer-btn d-flex d-xl-none",onClick:this.onToggleDrawer.bind(this)},p.default.createElement("i",{className:"zmdi zmdi-menu"})),p.default.createElement(A.default,{placeholder:"Search contact",notification:!1,apps:!1,user:this.state.user,onChange:this.updateContactUser.bind(this),value:this.state.searchUser})),p.default.createElement("div",{className:"module-box-content"},p.default.createElement("div",{className:"module-box-topbar"},p.default.createElement("div",{className:"form-control-checkbox d-flex"},p.default.createElement("div",{className:"form-checkbox"},p.default.createElement("input",{type:"checkbox",checked:s>0,onChange:this.onAllContactSelect.bind(this)}),p.default.createElement("span",{className:"check"},p.default.createElement("i",{className:"zmdi zmdi-check zmdi-hc-lg"})))),s>0&&p.default.createElement("span",{className:"icon-btn",onClick:this.onDeleteSelectedContact.bind(this)},p.default.createElement("i",{className:"zmdi zmdi-delete"}))),p.default.createElement(x.default,{className:"module-list-scroll scrollbar",style:{height:this.props.width>=1200?"calc(100vh - 265px)":"calc(100vh - 245px)"}},0===n.length?p.default.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},i):p.default.createElement(b.default,{contactList:n,addFavourite:this.addFavourite.bind(this),onContactSelect:this.onContactSelect.bind(this),onDeleteContact:this.onDeleteContact.bind(this),onSaveContact:this.onSaveContact.bind(this)}))))),p.default.createElement(T.default,{open:o,contact:{id:L++,name:"",thumb:"",email:"",phone:"",designation:"",selected:!1,starred:!1,frequently:!1},onSaveContact:this.onSaveContact,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact}),r&&_.NotificationManager.success(c,this.handleRequestClose()),p.default.createElement(_.NotificationContainer,null))}}]),t}(d.Component),j=function(e){return{width:e.settings.width}},N=(0,C.connect)(j)(S);t.default=N;var H=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(L,"contactId","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(k,"filterOptions","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(S,"Contact","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(j,"mapStateToProps","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(N,"default","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_extends","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(l,"_createClass","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(p,"_react2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(f,"_rcDrawer2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(h,"_contactList2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(b,"_ContactList2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(A,"_index2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(T,"_AddContact2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(v,"_IntlMessages2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(x,"_CustomScrollbars2","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(s,"_possibleConstructorReturn","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(L,"contactId","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(k,"filterOptions","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(S,"Contact","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(j,"mapStateToProps","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(N,"_default","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"),__REACT_HOT_LOADER__.register(H,"_temp","/Users/apple/Desktop/modifi/src/app/routes/contact/basic/index.js"))}()},1316:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":r(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(3),d=n(l),p=a(93),u=a(475),_=n(u),m=function(e){function t(){o(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onSearchBoxSelect=function(){e.setState({searchBox:!e.state.searchBox})},e.state={searchBox:!1,popoverOpen:!1},e.toggle=e.toggle.bind(e),e}return c(t,e),i(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){var e=this.props,t=(e.styleName,e.placeholder),a=e.onChange,n=e.value,o=e.user,s=e.notification,c=e.apps;return d.default.createElement("div",{className:"module-box-header-inner"},d.default.createElement("div",{className:"search-bar right-side-icon bg-transparent d-none d-sm-block"},d.default.createElement("div",{className:"form-group"},d.default.createElement("input",{className:"form-control border-0",type:"search",placeholder:t,onChange:a,value:n}),d.default.createElement("button",{className:"search-icon"},d.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-lg"})))),d.default.createElement(p.Popover,{className:"p-3",placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},d.default.createElement("h3",null,o.name),d.default.createElement("h4",null,o.email)),d.default.createElement("div",{className:"d-inline-block d-sm-none"},d.default.createElement(p.Dropdown,{className:"quick-menu nav-searchbox",isOpen:this.state.searchBox,toggle:this.onSearchBoxSelect.bind(this)},d.default.createElement(p.DropdownToggle,{className:"d-inline-block",tag:"span","data-toggle":"dropdown"},d.default.createElement("span",{className:"icon-btn"},d.default.createElement("i",{className:"zmdi zmdi-search zmdi-hc-fw text-grey"}))),d.default.createElement(p.DropdownMenu,{className:"p-0"},d.default.createElement(_.default,{styleName:"search-dropdown",placeholder:"",onChange:a,value:n})))),d.default.createElement("div",{className:"module-box-header-right"},c&&d.default.createElement("span",{className:"icon-btn "},d.default.createElement("i",{className:"zmdi zmdi-apps zmdi-hc-lg "})),s&&d.default.createElement("span",{className:"icon-btn "},d.default.createElement("i",{className:"zmdi zmdi-notifications-none zmdi-hc-lg "})),d.default.createElement("img",{className:"ml-2 rounded-circle size-40 pointer",id:"Popover1",alt:o.name,onMouseEnter:this.toggle,onMouseLeave:this.toggle,onClick:this.toggle,src:o.avatar})))}}]),t}(d.default.Component),f=m;t.default=f,m.defaultProps={styleName:"",value:"",notification:!0,apps:!0};var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"AppModuleHeader","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(_,"_SearchBox2","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(s,"_possibleConstructorReturn","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(m,"AppModuleHeader","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(f,"_default","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/apple/Desktop/modifi/src/components/AppModuleHeader/index.js"))}()},1436:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":r(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(3),d=n(l),p=a(93),u=a(56),_=n(u),m=function(e){function t(e){o(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.contact,c=n.id,r=n.thumb,i=n.name,l=n.email,d=n.phone,p=n.designation,u=n.selected,_=n.starred,m=n.frequently;return a.state={id:c,thumb:r,name:i,email:l,phone:d,designation:p,selected:u,starred:_,frequently:m},a}return c(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSaveContact,n=(t.onDeleteContact,t.onContactClose),o=t.open,s=t.contact,c=this.state,r=c.id,i=c.name,l=c.email,u=c.phone,m=c.designation,f=c.selected,C=c.starred,E=c.frequently,h=this.state.thumb;return h||(h="http://via.placeholder.com/225x225"),d.default.createElement(p.Modal,{className:"modal-box",toggle:n,isOpen:o},d.default.createElement(p.ModalHeader,{className:"modal-box-header bg-primary"},""===s.name?d.default.createElement(_.default,{id:"contact.addContact"}):d.default.createElement(_.default,{id:"contact.saveContact"}),d.default.createElement("span",{className:"text-white pointer"},d.default.createElement("i",{className:"zmdi zmdi-close zmdi-hc-lg",onClick:n}))),d.default.createElement("div",{className:"modal-box-content"},d.default.createElement("div",{className:"row no-gutters"},d.default.createElement("div",{className:"col-lg-3 text-center text-lg-right order-lg-2"},d.default.createElement("img",{className:"ml-lg-3 mb-4 mb-lg-0 avatar size-120",src:h})),d.default.createElement("div",{className:"col-lg-9 d-flex flex-column order-lg-1"},d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Name",onChange:function(t){return e.setState({name:t.target.value})},defaultValue:i}),d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})},value:l}),d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Phone",onChange:function(t){return e.setState({phone:t.target.value})},value:u}),d.default.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Designation",onChange:function(t){return e.setState({designation:t.target.value})},value:m})))),d.default.createElement("div",{className:"modal-box-footer d-flex flex-row"},d.default.createElement(p.Button,{className:"text-uppercase",disabled:""===i,color:"primary",onClick:function(){n(),a({id:r,name:i,thumb:h,email:l,phone:u,designation:m,selected:f,starred:C,frequently:E}),e.setState({id:r+1,name:"",thumb:"",email:"",phone:"",designation:""})}},d.default.createElement(_.default,{id:"contact.saveContact"}))))}}]),t}(d.default.Component),f=m;t.default=f;var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"AddContact","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(_,"_IntlMessages2","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(s,"_possibleConstructorReturn","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(m,"AddContact","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(f,"_default","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/apple/Desktop/modifi/src/components/contact/AddContact/index.js"))}()},1692:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(3),s=n(o),c=a(1693),r=n(c),i=function(e){var t=e.contactList,a=e.addFavourite,n=e.onContactSelect,o=e.onSaveContact,c=e.onDeleteContact;return s.default.createElement("div",{className:"contact-main-content"},t.map(function(e,t){return s.default.createElement(r.default,{key:t,contact:e,onDeleteContact:c,onSaveContact:o,addFavourite:a,onContactSelect:n})}))},l=i;t.default=l;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"ContactList","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"default","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"_react2","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(r,"_index2","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"ContactList","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"_default","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/apple/Desktop/modifi/src/components/contact/ContactList/index.js"))}()},1693:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":r(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(3),d=n(l),p=a(93),u=a(1436),_=n(u),m=function(e){function t(){o(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onContactOptionToggle=function(t){e.setState({menuState:!e.state.menuState})},e.onContactClose=function(){e.setState({addContactState:!1})},e.onDeleteContact=function(t){e.setState({addContactState:!1}),e.props.onDeleteContact(t)},e.onEditContact=function(){e.setState({menuState:!1,addContactState:!0})},e.state={menuState:!1,addContactState:!1},e}return c(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.contact,n=t.addFavourite,o=t.onContactSelect,s=t.onSaveContact,c=this.state,r=c.menuState,i=c.addContactState,l=a.name,u=a.thumb,m=a.email,f=a.phone,C=a.designation,E=a.starred,h=["Edit","Delete"];return d.default.createElement("div",{className:"contact-item"},d.default.createElement("div",{className:"form-control-checkbox d-flex"},d.default.createElement("div",{className:"form-checkbox"},d.default.createElement("input",{type:"checkbox",checked:a.selected,value:"checked",onClick:function(){o(a)}}),d.default.createElement("span",{className:"check"},d.default.createElement("i",{className:"zmdi zmdi-check zmdi-hc-lg"})))),d.default.createElement("div",{className:"col-auto px-1 actions d-none d-xs-flex"},d.default.createElement("span",{className:"icon-btn",onClick:function(){n(a)}},E?d.default.createElement("i",{className:"zmdi zmdi-star"}):d.default.createElement("i",{className:"zmdi zmdi-star-outline"}))),null===u||""===u?d.default.createElement("div",{className:"rounded-circle size-40 bg-blue text-center text-white mx-1 mx-md-3",style:{fontSize:20}},l.charAt(0).toUpperCase()):d.default.createElement("img",{className:"rounded-circle size-40 mx-1 mx-md-3",alt:l,src:u}),d.default.createElement("div",{className:"col con-inf-mw-100"},d.default.createElement("p",{className:"mb-0"},d.default.createElement("span",{className:"text-truncate contact-name"},l),d.default.createElement("span",{className:"d-inline-block toolbar-separator"}," "),d.default.createElement("span",{className:"text-truncate job-title"},C)),d.default.createElement("div",{className:"text-muted"},d.default.createElement("span",{className:"email d-inline-block mr-2"},m),d.default.createElement("span",{className:"phone d-inline-block"},f))),d.default.createElement("div",{className:"col-auto px-1 actions d-none d-sm-flex"},d.default.createElement(p.Dropdown,{isOpen:r,toggle:this.onContactOptionToggle.bind(this)},d.default.createElement(p.DropdownToggle,{tag:"span"},d.default.createElement("span",{className:"icon-btn text-grey pointer"},d.default.createElement("i",{className:"zmdi zmdi-more-vert zmdi-hc-lg"}))),d.default.createElement(p.DropdownMenu,null,h.map(function(t){return d.default.createElement(p.DropdownItem,{key:t,onClick:function(){"Edit"===t?e.onEditContact():e.onDeleteContact(a)}},t)}))),i&&d.default.createElement(_.default,{open:i,contact:a,onSaveContact:s,onContactClose:this.onContactClose,onDeleteContact:this.onDeleteContact})))}}]),t}(d.default.Component),f=m;t.default=f;var C=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"ContactCell","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(_,"_index2","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(n,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(o,"_classCallCheck","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(s,"_possibleConstructorReturn","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(m,"ContactCell","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(f,"_default","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"),__REACT_HOT_LOADER__.register(C,"_temp","/Users/apple/Desktop/modifi/src/components/contact/ContactList/ContactCell/index.js"))}()}});
//# sourceMappingURL=43.3bcfc7b7f0ebcfb40f1d.chunk.js.map