webpackJsonp([32],{1141:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),i=a(3),d=s(i),_=a(93),u=a(40),p=a(209),m=s(p),f=a(211),h=s(f),E=a(1685),C=s(E),v=a(1687),T=s(v),R=a(1690),O=s(R),A=a(475),D=s(A),g=a(56),U=s(g),x=a(220),L=a(106),b=s(L),N=function(e){function t(){r(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.filterContacts=function(t){e.props.filterContacts(t)},e.filterUsers=function(t){e.props.filterUsers(t)},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.onSelectUser=function(t){e.props.onSelectUser(t),setTimeout(function(){e.props.hideLoader()},1500)},e.submitComment=function(){""!==e.props.message&&e.props.submitComment()},e.updateMessageValue=function(t){e.props.updateMessageValue(t.target.value)},e.Communication=function(){var t=e.props,a=t.message,s=t.selectedUser,r=t.conversation,n=r.conversationData;return d.default.createElement("div",{className:"chat-main"},d.default.createElement("div",{className:"chat-main-header"},d.default.createElement("span",{className:"icon-btn d-block d-xl-none chat-btn",onClick:e.onChatToggleDrawer.bind(e)},d.default.createElement("i",{className:"zmdi zmdi-comment-text"})),d.default.createElement("div",{className:"chat-main-header-info"},d.default.createElement("div",{className:"chat-avatar mr-2"},d.default.createElement("div",{className:"chat-avatar-mode"},d.default.createElement("img",{src:s.thumb,className:"rounded-circle size-60",alt:""}),d.default.createElement("span",{className:"chat-mode "+s.status}))),d.default.createElement("div",{className:"chat-contact-name"},s.name))),d.default.createElement(b.default,{className:"chat-list-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 300px)":"calc(100vh - 255px)"}},d.default.createElement(T.default,{conversationData:n,selectedUser:s})),d.default.createElement("div",{className:"chat-main-footer"},d.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},d.default.createElement("div",{className:"col"},d.default.createElement("div",{className:"form-group"},d.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:a,placeholder:"Type and hit enter to send message"}))),d.default.createElement("div",{className:"chat-sent"},d.default.createElement("span",{className:"icon-btn",onClick:e.submitComment.bind(e)},d.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return d.default.createElement("div",{className:"chat-sidenav-main"},d.default.createElement("div",{className:" bg-primary chat-sidenav-header"},d.default.createElement("div",{className:"chat-user-hd"},d.default.createElement("span",{className:"icon-btn back-to-chats-button",onClick:function(){e.props.userInfoState(1)}},d.default.createElement("i",{className:"zmdi zmdi-arrow-back text-white"}))),d.default.createElement("div",{className:"chat-user chat-user-center"},d.default.createElement("div",{className:"chat-avatar"},d.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar rounded-circle size-60 huge",alt:"John Doe"})),d.default.createElement("div",{className:"user-name h4 my-2 text-white"},"Robert Johnson"))),d.default.createElement("div",{className:"chat-sidenav-content"},d.default.createElement(b.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 162px)"}},d.default.createElement("form",{className:"p-4"},d.default.createElement("div",{className:"form-group mt-4"},d.default.createElement("label",null,"Mood"),d.default.createElement(_.Input,{fullWidth:!0,id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status",margin:"none"}))))))},e.ChatUsers=function(){return d.default.createElement("div",{className:"chat-sidenav-main"},d.default.createElement("div",{className:"chat-sidenav-header"},d.default.createElement("div",{className:"chat-user-hd"},d.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.props.userInfoState(2)}},d.default.createElement("div",{className:"chat-avatar-mode"},d.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),d.default.createElement("span",{className:"chat-mode online"}))),d.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},d.default.createElement("div",{className:"module-title"},d.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),d.default.createElement("div",{className:"module-user-detail"},d.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),d.default.createElement("div",{className:"search-wrapper"},d.default.createElement(D.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.props.searchChatUser}))),d.default.createElement("div",{className:"chat-sidenav-content"},d.default.createElement(_.Nav,{tabs:!0,className:"nav-fill"},d.default.createElement(_.NavItem,{className:"nav-item"},d.default.createElement(_.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"1"===e.state.activeTab?"active":"",onClick:function(){e.toggle("1")}},"CHATS")),d.default.createElement(_.NavItem,null,d.default.createElement(_.NavLink,{"aria-selected":"true","data-toggle":"tab",role:"tab",className:"2"===e.state.activeTab?"active":"",onClick:function(){e.toggle("2")}},"CONTACTS"))),d.default.createElement(_.TabContent,{activeTab:e.state.activeTab},d.default.createElement(_.TabPane,{tabId:"1"},d.default.createElement(b.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.props.chatUsers.length?d.default.createElement("div",{className:"p-5"},e.props.userNotFound):d.default.createElement(C.default,{chatUsers:e.props.chatUsers,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))),d.default.createElement(_.TabPane,{tabId:"2"},d.default.createElement(b.default,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.props.contactList.length?d.default.createElement("div",{className:"p-5"},e.props.userNotFound):d.default.createElement(O.default,{contactList:e.props.contactList,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)}))))))},e.handleChange=function(t,a){e.setState({value:a})},e.handleChangeIndex=function(t){e.setState({value:t})},e.showCommunication=function(){return d.default.createElement("div",{className:"chat-box"},d.default.createElement("div",{className:"chat-box-main"},null===e.props.selectedUser?d.default.createElement("div",{className:"loader-view"},d.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),d.default.createElement("h1",{className:"text-muted"}," ",d.default.createElement(U.default,{id:"chat.selectUserChat"})),d.default.createElement(_.Button,{className:"d-block d-xl-none",color:"primary",onClick:e.onChatToggleDrawer.bind(e)},d.default.createElement(U.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={activeTab:"1"},e}return l(t,e),o(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}}]),o(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.hideLoader()},1500)}},{key:"updateSearchChatUser",value:function(e){this.props.updateSearchChatUser(e.target.value),this.props.filterContacts(e.target.value),this.props.filterUsers(e.target.value)}},{key:"onChatToggleDrawer",value:function(){this.props.onChatToggleDrawer()}},{key:"render",value:function(){var e=this.props,t=e.loader,a=e.userState,s=e.drawerState;e.selectedUser;return d.default.createElement("div",{className:"app-wrapper app-wrapper-module"},d.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},d.default.createElement("div",{className:"chat-module-box"},d.default.createElement("div",{className:"d-block d-xl-none"},d.default.createElement(m.default,{touch:!0,transitions:!0,enableDragHandle:!0,open:s,onOpenChange:this.onChatToggleDrawer.bind(this),sidebar:1===a?this.ChatUsers():this.AppUsersInfo()()})),d.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},1===a?this.ChatUsers():this.AppUsersInfo()),t?d.default.createElement("div",{className:"loader-view w-100",style:{height:"calc(100vh - 122px)"}},d.default.createElement(h.default,null)):this.showCommunication())))}}]),t}(i.Component),k=function(e){var t=e.chatData;return{width:e.settings.width,loader:t.loader,userNotFound:t.userNotFound,drawerState:t.drawerState,selectedSectionId:t.selectedSectionId,userState:t.userState,searchChatUser:t.searchChatUser,contactList:t.contactList,selectedUser:t.selectedUser,message:t.message,chatUsers:t.chatUsers,conversationList:t.conversationList,conversation:t.conversation}},P=(0,u.connect)(k,{fetchChatUser:x.fetchChatUser,fetchChatUserConversation:x.fetchChatUserConversation,filterContacts:x.filterContacts,filterUsers:x.filterUsers,onSelectUser:x.onSelectUser,hideLoader:x.hideLoader,userInfoState:x.userInfoState,submitComment:x.submitComment,updateMessageValue:x.updateMessageValue,updateSearchChatUser:x.updateSearchChatUser,onChatToggleDrawer:x.onChatToggleDrawer})(N);t.default=P;var H=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(N,"ChatPanelWithRedux","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(k,"mapStateToProps","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(P,"default","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"_createClass","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(d,"_react2","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(m,"_rcDrawer2","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(h,"_CircularProgress2","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(C,"_index2","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(T,"_index4","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(O,"_index6","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(D,"_SearchBox2","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(U,"_IntlMessages2","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(b,"_CustomScrollbars2","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(r,"_classCallCheck","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(n,"_possibleConstructorReturn","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(l,"_inherits","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(N,"ChatPanelWithRedux","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(k,"mapStateToProps","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(P,"_default","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(H,"_temp","/Users/apple/Desktop/modifi/src/app/routes/chatPanel/redux/index.js"))}()},1685:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=s(r),l=a(1686),c=s(l),o=function(e){var t=e.chatUsers,a=e.selectedSectionId,s=e.onSelectUser;return n.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return n.default.createElement(c.default,{key:t,chat:e,selectedSectionId:a,onSelectUser:s})}))},i=o;t.default=i;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"ChatUserList","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(c,"_index2","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"ChatUserList","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/index.js"))}()},1686:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=s(r),l=function(e){var t=e.chat,a=e.selectedSectionId,s=e.onSelectUser;return n.default.createElement("div",{className:"chat-user-item "+(a===t.id?"active":""),onClick:function(){s(t)}},n.default.createElement("div",{className:"chat-user-row row"},n.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},n.default.createElement("div",{className:"chat-avatar-mode"},n.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),n.default.createElement("span",{className:"chat-mode small "+t.status}))),n.default.createElement("div",{className:"chat-info col-xl-8 col-6"},n.default.createElement("span",{className:"name h4"},t.name),n.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),n.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),n.default.createElement("div",{className:"chat-date col-xl-2 col-3"},n.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},c=l;t.default=c;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"UserCell","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"UserCell","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/apple/Desktop/modifi/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},1687:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=s(r),l=a(1688),c=s(l),o=a(1689),i=s(o),d=function(e){var t=e.conversationData,a=e.selectedUser;return n.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?n.default.createElement(i.default,{key:t,conversation:e}):n.default.createElement(c.default,{key:t,conversation:e,user:a})}))},_=d;t.default=_;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"Conversation","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(c,"_index2","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(i,"_index4","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"Conversation","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"_default","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/index.js"))}()},1688:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=s(r),l=function(e){var t=e.conversation,a=e.user;return n.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},n.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:a.thumb,alt:""}),n.default.createElement("div",{className:"bubble"},n.default.createElement("div",{className:"message"},t.message),n.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},c=l;t.default=c;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"ReceivedMessageCell","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"ReceivedMessageCell","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},1689:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=s(r),l=function(e){var t=e.conversation;return n.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},n.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),n.default.createElement("div",{className:"bubble jambo-card"},n.default.createElement("div",{className:"message"},t.message),n.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},c=l;t.default=c;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"SentMessageCell","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"SentMessageCell","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/apple/Desktop/modifi/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},1690:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=s(r),l=a(1691),c=s(l),o=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.contactList;return n.default.createElement("div",{className:"chat-user"},s.map(function(e,s){return n.default.createElement(c.default,{key:s,user:e,selectedSectionId:a,onSelectUser:t})}))},i=o;t.default=i;var d=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"ContactList","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(c,"_index2","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"ContactList","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"_default","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(d,"_temp","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/index.js"))}()},1691:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=s(r),l=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.user;return n.default.createElement("div",{className:"chat-user-item "+(a===s.id?"active":""),onClick:function(){t(s)}},n.default.createElement("div",{className:"chat-user-row row"},n.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},n.default.createElement("div",{className:"chat-avatar-mode"},n.default.createElement("img",{src:s.thumb,className:"rounded-circle size-40",alt:"Abbott"}),n.default.createElement("span",{className:"chat-mode smallcal "+s.status}))),n.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},n.default.createElement("div",{className:"h4 name"},s.name),n.default.createElement("div",{className:"chat-info-des"},s.mood.substring(0,30)+"..."))))},c=l;t.default=c;var o=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"UserCell","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"_react2","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"UserCell","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"_default","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(o,"_temp","/Users/apple/Desktop/modifi/src/components/chatPanel/ContactList/UserCell/index.js"))}()}});
//# sourceMappingURL=32.3bcfc7b7f0ebcfb40f1d.chunk.js.map