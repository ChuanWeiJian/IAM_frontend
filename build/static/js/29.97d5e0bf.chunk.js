(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[29],{1571:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(19),s=a(20),r=a(21),i=a(0),c=a.n(i),o=a(129),m=a(758),u=a(1566),d=a(949),p=a(34),g=a(950),h=a(42),E=a(18),f=a.n(E),b=a(36),v=a(40),N=a(35),y=a(12),w=a(25),S=a(951),x=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={shorcutMenuList:[{icon:"i-Shop-4",link:"#",text:"Home"},{icon:"i-Library",link:"#",text:"Ui Kits"},{icon:"i-Drop",link:"#",text:"Apps"},{icon:"i-File-Clipboard-File--Text",link:"#",text:"Form"},{icon:"i-Checked-User",link:"#",text:"Sessions"},{icon:"i-Ambulance",link:"#",text:"Support"}],notificationList:[{icon:"i-Speach-Bubble-6",title:"New message",description:"James: Hey! are you busy?",time:"2019-10-30T02:10:18.931Z",color:"primary",status:"New"},{icon:"i-Receipt-3",title:"New order received",description:"1 Headphone, 3 iPhone",time:"2019-03-10T02:10:18.931Z",color:"success",status:"New"},{icon:"i-Empty-Box",title:"Product out of stock",description:"1 Headphone, 3 iPhone",time:"2019-05-10T02:10:18.931Z",color:"danger",status:"3"},{icon:"i-Data-Power",title:"Server up!",description:"Server rebooted successfully",time:"2019-03-10T02:10:18.931Z",color:"success",status:"3"}],showSearchBox:!1},e.handleMenuClick=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(w.merge)({},n,{layout2Settings:{leftSidebar:{open:!n.layout2Settings.leftSidebar.open,secondaryNavOpen:!n.layout2Settings.leftSidebar.open}}}))},e.toggleFullScreen=function(){document.fullscreenEnabled&&(document.fullscreen?document.exitFullscreen():document.documentElement.requestFullscreen())},e.handleSearchBoxOpen=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(w.merge)({},n,{layout2Settings:{searchBox:{open:!0}}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.shorcutMenuList,a=void 0===t?[]:t,n=e.notificationList,l=void 0===n?[]:n;return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),c.a.createElement("div",{className:"menu-toggle",onClick:this.handleMenuClick},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("div",{className:"d-none d-lg-flex align-items-center"},c.a.createElement(u.a,{className:"mr-3"},c.a.createElement(u.a.Toggle,{variant:"link",id:"dropdown-basic"},"Mega Menu"),c.a.createElement("div",{className:"mega-menu"},c.a.createElement(u.a.Menu,null,c.a.createElement(S.a,null)))),c.a.createElement("div",{className:"search-bar"},c.a.createElement("input",{type:"text",placeholder:"Search",onFocus:this.handleSearchBoxOpen}),c.a.createElement("i",{className:"search-icon text-muted i-Magnifi-Glass1"}))),c.a.createElement("div",{style:{margin:"auto"}}),c.a.createElement("div",{className:"header-part-right"},c.a.createElement("i",{className:"i-Full-Screen header-icon d-none d-sm-inline-block","data-fullscreen":!0,onClick:this.toggleFullScreen}),c.a.createElement(u.a,null,c.a.createElement(u.a.Toggle,{variant:"link",className:"toggle-hidden"},c.a.createElement("i",{className:"i-Safe-Box text-muted header-icon",role:"button"})),c.a.createElement(u.a.Menu,null,c.a.createElement("div",{className:"menu-icon-grid"},a.map((function(e){return c.a.createElement(h.a,{key:e.text,to:e.link},c.a.createElement("i",{className:e.icon})," ",e.text)}))))),c.a.createElement(u.a,null,c.a.createElement(u.a.Toggle,{variant:"link",className:"toggle-hidden"},c.a.createElement("div",{className:"badge-top-container",role:"button",id:"dropdownNotification","data-toggle":"dropdown"},c.a.createElement("span",{className:"badge badge-primary"},"3"),c.a.createElement("i",{className:"i-Bell text-muted header-icon"}))),c.a.createElement(d.a,{className:"notification-dropdown rtl-ps-none"},l.map((function(e,t){return c.a.createElement("div",{key:t,className:"dropdown-item d-flex"},c.a.createElement("div",{className:"notification-icon"},c.a.createElement("i",{className:"".concat(e.icon," text-").concat(e.color," mr-1")})),c.a.createElement("div",{className:"notification-details flex-grow-1"},c.a.createElement("p",{className:"m-0 d-flex align-items-center"},c.a.createElement("span",null,e.title),c.a.createElement("span",{className:"badge badge-pill badge-".concat(e.color," ml-1 mr-1")},e.status),c.a.createElement("span",{className:"flex-grow-1"}),c.a.createElement("span",{className:"text-small text-muted ml-auto"},Object(p.b)(new Date(e.time))," ago")),c.a.createElement("p",{className:"text-small text-muted m-0"},e.description)))})))),c.a.createElement("div",{className:"user col align-self-end"},c.a.createElement(u.a,null,c.a.createElement(g.a,{variant:"link",className:"toggle-hidden"},c.a.createElement("img",{src:"/assets/images/faces/1.jpg",id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"})),c.a.createElement(d.a,null,c.a.createElement("div",{className:"dropdown-header"},c.a.createElement("i",{className:"i-Lock-User mr-1"})," Timothy Carlson"),c.a.createElement("span",{className:"dropdown-item cursor-pointer"},"Account settings"),c.a.createElement("span",{className:"dropdown-item cursor-pointer"},"Billing history"),c.a.createElement("span",{className:"dropdown-item cursor-pointer",onClick:this.props.logoutUser},"Sign out"))))))}}]),a}(i.Component),k=Object(y.i)(Object(b.b)((function(e){return{setDefaultSettings:f.a.func.isRequired,setLayoutSettings:f.a.func.isRequired,logoutUser:f.a.func.isRequired,user:e.user,settings:e.layout.settings}}),{setLayoutSettings:v.d,setDefaultSettings:v.c,logoutUser:N.c})(x)),L=a(1),O=a(757),j=a(122),C=a.n(j),M=a(114),T=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).windowListener=null,e.state={selectedItem:{},navOpen:!0,secondaryNavOpen:!1},e.onMainItemMouseEnter=function(t){e.setSelected(t)},e.findSelecteditem=function(){O.a.forEach((function(t){t.sub?t.sub.forEach((function(a){a.sub?a.sub.forEach((function(a){a.path===e.props.history.location.pathname&&e.setSelected(t)})):a.path===e.props.history.location.pathname&&e.setSelected(t)})):t.path===e.props.history.location.pathname&&e.setSelected(t)}))},e.onMainItemMouseLeave=function(){},e.setSelected=function(t){e.setState({selectedItem:t})},e.removeSelected=function(){e.setState({selectedItem:null})},e.closeSecNav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings,l={};Object(p.c)()&&(l.open=!1),a(Object(w.merge)({},n,{layout2Settings:{leftSidebar:Object(L.a)(Object(L.a)({},l),{},{secondaryNavOpen:!1})}}))},e.openSecNav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(w.merge)({},n,{layout2Settings:{leftSidebar:{open:!0,secondaryNavOpen:!0}}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.findSelecteditem()})),window&&(window.innerWidth<1200?this.closeSecNav():this.openSecNav()),this.windowListener=window.addEventListener("resize",(function(){window.innerWidth<1200?e.closeSecNav():e.openSecNav()}))}},{key:"componentWillUnmount",value:function(){this.windowListener&&window.removeEventListener("resize",this.windowListener)}},{key:"render",value:function(){var e=this,t=this.props.settings,a=this.state.selectedItem;return c.a.createElement("div",{className:"side-content-wrap"},c.a.createElement(C.a,{className:Object(p.a)({"sidebar-left o-hidden rtl-ps-none":!0,open:t.layout2Settings.leftSidebar.open})},c.a.createElement("ul",{className:"navigation-left"},O.a.map((function(t,n){return c.a.createElement("li",{className:Object(p.a)({"nav-item":!0,active:t.name===a.name}),onMouseEnter:function(){e.onMainItemMouseEnter(t)},onMouseLeave:e.onMainItemMouseLeave,key:n},t.path&&"extLink"!==t.type&&c.a.createElement(h.b,{className:"nav-item-hold",to:t.path},c.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),c.a.createElement("span",{className:"nav-text"},t.name)),t.path&&"extLink"===t.type&&c.a.createElement("a",{className:"nav-item-hold",href:t.path},c.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),c.a.createElement("span",{className:"nav-text"},t.name)),!t.path&&c.a.createElement("div",{className:"nav-item-hold"},c.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),c.a.createElement("span",{className:"nav-text"},t.name)),c.a.createElement("div",{className:"triangle"}))})))),c.a.createElement(C.a,{className:Object(p.a)({"sidebar-left-secondary o-hidden rtl-ps-none":!0,open:t.layout2Settings.leftSidebar.secondaryNavOpen})},c.a.createElement("i",{className:"sidebar-close i-Close",onClick:this.closeSecNav}),c.a.createElement("div",{className:"logo ml-4 mb-4"},c.a.createElement("img",{src:"/assets/images/logo-text.png",alt:"logo"})),c.a.createElement("div",{className:"header mb-3 ml-4"},c.a.createElement("h5",{className:"font-weight-bold mb-1"},a.name),c.a.createElement("p",null,a.description)),a&&a.sub&&c.a.createElement(M.b,{menu:a.sub,closeSecSidenav:this.closeSecNav})),c.a.createElement("div",{className:Object(p.a)({"sidebar-overlay":!0,open:t.layout2Settings.leftSidebar.secondaryNavOpen})}))}}]),a}(i.Component),A=Object(y.i)(Object(b.b)((function(e){return{setLayoutSettings:f.a.func.isRequired,settings:e.layout.settings}}),{setLayoutSettings:v.d})(T)),F=a(759),B=a(73),D=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e.handleSearchBoxClose=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(w.merge)({},n,{layout2Settings:{searchBox:{open:!1}}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.settings,a=e.routes;return c.a.createElement("div",null,c.a.createElement("div",{className:"".concat(Object(p.a)({"app-admin-wrap layout-sidebar-compact clearfix":!0,"sidenav-open":t.layout2Settings.leftSidebar.open})," ").concat(t.layout2Settings.leftSidebar.theme)},c.a.createElement(A,null),c.a.createElement("div",{className:Object(p.a)({"main-content-wrap d-flex flex-column":!0,"sidenav-open":t.layout2Settings.leftSidebar.open})},t.layout2Settings.header.show&&c.a.createElement(k,null),c.a.createElement(i.Suspense,{fallback:c.a.createElement(B.a,null)},c.a.createElement("div",{className:"main-content"},Object(o.a)(a))),c.a.createElement(m.a,null))),c.a.createElement(F.a,{open:t.layout2Settings.searchBox.open,handleClose:this.handleSearchBoxClose}))}}]),a}(i.Component);t.default=Object(b.b)((function(e){return{settings:e.layout.settings}}),{setLayoutSettings:v.d})(D)},757:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{name:"Dashboard",description:"Dashboard",type:"dropDown",icon:"i-Bar-Chart",sub:[{icon:"i-Clock-3",name:"Dashboard",path:"/",type:"link"}]},{name:"User Management",description:"Management of officer accounts",type:"dropDown",icon:"i-Business-Mens",userGroup:"Admin",sub:[{icon:"i-Add-User",name:"New Officer Account",path:"/user/new",type:"link"},{icon:"i-Administrator",name:"Officer Accounts List",path:"/user/list",type:"link"}]},{name:"Assignment Tasks",description:"Management of assignment tasks",type:"dropDown",icon:"i-File",userGroup:"Officer",sub:[{icon:"i-Add-File",name:"New Assignment Task",path:"/assignment/new",type:"link"},{icon:"i-File-Horizontal-Text",name:"Assignment Tasks List",path:"/assignment/list",type:"link"}]},{name:"Assignment Results",description:"View result of assignment",type:"link",icon:"i-File",path:"/assignment/result/invigilator",userGroup:"Teacher"},{name:"School & Exam Center",description:"Management of schools & exam centers",type:"dropDown",icon:"i-University1",userGroup:"Officer",sub:[{icon:"i-University",name:"New School",path:"/school/new",type:"link"},{icon:"i-University1",name:"Registered Schools List",path:"/school/list",type:"link"}]},{name:"Formal Letter",description:"Management of formal letters",type:"dropDown",icon:"i-Mail",userGroup:"Officer",sub:[{icon:"i-Mail-Add-",name:"New Formal Letter",path:"/letter/new",type:"link"},{icon:"i-Email",name:"Formal Letter List",path:"/letter/list",type:"link"}]}]},758:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"flex-grow-1"}),l.a.createElement("div",{className:"app-footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("p",null,l.a.createElement("strong",null,"Gull - Laravel + Bootstrap 4 admin template")),l.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi sequi dolor quibusdam sunt."))),l.a.createElement("div",{className:"footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"},l.a.createElement("a",{id:"buy-gull",className:"btn btn-primary text-white btn-rounded",href:"https://1.envato.market/LV1va",target:"_blank",rel:"noopener noreferrer"},"Buy Gull React"),l.a.createElement("span",{className:"flex-grow-1"}),l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{className:"logo",src:"/assets/images/logo.png",alt:""}),l.a.createElement("div",null,l.a.createElement("p",{className:"m-0"},"\xa9 2019 Gull HTML"),l.a.createElement("p",{className:"m-0"},"All rights reserved"))))))}},759:function(e,t,a){"use strict";var n=a(13),l=a(19),s=a(20),r=a(21),i=a(0),c=a.n(i),o=a(34),m=a(646),u=a.n(m),d=a(42),p=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).debounceTimer=null,e.dummyProductList=[{name:"Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"Sale",imgUrl:"/assets/images/products/headphone-1.jpg"},{name:"Bitz Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-2.jpg"},{name:"Sony Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-3.jpg"},{name:"Earphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-4.jpg"}],e.state={query:"",searchList:e.dummyProductList},e.handleSearch=function(t){t.persist(),e.setState({query:t.target.value},(function(){e.debounceTimer&&clearTimeout(e.debounceTimer),e.debounceTimer=setTimeout((function(){e.setState({searchList:e.dummyProductList.filter((function(t){return t.name.toLocaleLowerCase().match(e.state.query.toLowerCase())}))})}),250)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose,n=this.state.searchList;return c.a.createElement("div",{className:Object(o.a)({"search-ui":!0,open:t})},c.a.createElement("div",{className:"d-flex justify-content-between align-items-center search-header o-hidden"},c.a.createElement("img",{src:"/assets/images/logo.png",alt:"",className:"logo float-left"}),c.a.createElement("button",{className:"search-close btn btn-icon bg-transparent mt-2",onClick:a},c.a.createElement("i",{className:"i-Close-Window text-22 text-muted"}))),c.a.createElement("input",{type:"text",placeholder:"Type here",className:"search-input",autoFocus:!0,onChange:this.handleSearch}),c.a.createElement("div",{className:"search-title"},c.a.createElement("span",{className:"text-muted"},"Search results")),c.a.createElement("div",{className:"search-results list-horizontal"},n.map((function(e,t){return c.a.createElement("div",{key:t,className:"list-item col-md-12 p-0"},c.a.createElement("div",{className:"card o-hidden flex-row mb-4 d-flex"},c.a.createElement("div",{className:"list-thumb d-flex"},c.a.createElement("img",{src:e.imgUrl,alt:""})),c.a.createElement("div",{className:"flex-grow-1 pl-2 d-flex"},c.a.createElement("div",{className:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row"},c.a.createElement(d.a,{to:"/",className:"w-40 w-sm-100"},c.a.createElement("div",{className:"item-title"},e.name)),c.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100"},"Gadget"),c.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100"},"$",e.currentPrice,c.a.createElement("del",{className:"text-secondary"},"$",e.prevPrice)),c.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"},c.a.createElement("span",{className:Object(o.a)({badge:!0,"bg-danger":"Sale"===e.status,"bg-primary":"New"===e.status})},e.status))))))}))),c.a.createElement("div",{className:"px-3 mt-5 d-flex flex-row justify-content-center"},c.a.createElement(u.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:5,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))}}]),a}(i.Component);t.a=p},951:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(42);t.a=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"row m-0"},l.a.createElement("div",{className:"col-md-4 p-4 bg-img"},l.a.createElement("h2",{className:"title"},"Mega Menu ",l.a.createElement("br",null)," Sidebar"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur."),l.a.createElement("p",{className:"mb-4"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat."),l.a.createElement("button",{className:"btn btn-lg btn-rounded btn-outline-warning"},"Learn More")),l.a.createElement("div",{className:"col-md-4 p-4"},l.a.createElement("p",{className:"text-primary text--cap border-bottom-primary d-inline-block"},"Features"),l.a.createElement("div",{className:"menu-icon-grid w-auto p-0"},l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Shop-4"})," Home"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Library"})," UI Kits"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Drop"})," Apps"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-File-Clipboard-File--Text"})," Forms"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Checked-User"})," Sessions"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Ambulance"})," Support"))),l.a.createElement("div",{className:"col-md-4 p-4"},l.a.createElement("p",{className:"text-primary text--cap border-bottom-primary d-inline-block"},"Components"),l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"accordion.html"},"Accordion")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"alerts.html"},"Alerts")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"buttons.html"},"Buttons")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"badges.html"},"Badges")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"carousel.html"},"Carousels")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"lists.html"},"Lists")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"popover.html"},"Popover")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"tables.html"},"Tables")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"datatables.html"},"Datatables")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"modals.html"},"Modals")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"nouislider.html"},"Sliders")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"tabs.html"},"Tabs"))))))}}}]);
//# sourceMappingURL=29.97d5e0bf.chunk.js.map