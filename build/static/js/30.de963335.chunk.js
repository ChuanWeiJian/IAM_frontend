(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[30],{1576:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(19),r=a(20),s=a(21),c=a(0),i=a.n(c),o=a(129),m=a(758),u=a(36),d=a(25),p=a(34),g=a(1566),E=a(949),h=a(950),b=a(18),f=a.n(b),N=a(40),v=a(42),y=a(12),x=a(757),w=a(122),k=a.n(w),S=a(951),L=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={shorcutMenuList:[{icon:"i-Shop-4",link:"#",text:"Home"},{icon:"i-Library",link:"#",text:"Ui Kits"},{icon:"i-Drop",link:"#",text:"Apps"},{icon:"i-File-Clipboard-File--Text",link:"#",text:"Form"},{icon:"i-Checked-User",link:"#",text:"Sessions"},{icon:"i-Ambulance",link:"#",text:"Support"}],notificationList:[{icon:"i-Speach-Bubble-6",title:"New message",description:"James: Hey! are you busy?",time:"2019-10-30T02:10:18.931Z",color:"primary",status:"New"},{icon:"i-Receipt-3",title:"New order received",description:"1 Headphone, 3 iPhone",time:"2019-03-10T02:10:18.931Z",color:"success",status:"New"},{icon:"i-Empty-Box",title:"Product out of stock",description:"1 Headphone, 3 iPhone",time:"2019-05-10T02:10:18.931Z",color:"danger",status:"3"},{icon:"i-Data-Power",title:"Server up!",description:"Server rebooted successfully",time:"2019-03-10T02:10:18.931Z",color:"success",status:"3"}]},e.handleMenuClick=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(d.merge)({},n,{layout3Settings:{leftSidebar:{open:!n.layout3Settings.leftSidebar.open}}}))},e.toggleFullScreen=function(){document.fullscreenEnabled&&(document.fullscreen?document.exitFullscreen():document.documentElement.requestFullscreen())},e.handleSearchBoxOpen=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(d.merge)({},n,{layout3Settings:{searchBox:{open:!0}}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.shorcutMenuList,a=void 0===t?[]:t,n=e.notificationList,l=void 0===n?[]:n,r=this.props.settings;return i.a.createElement(c.Fragment,null,i.a.createElement("div",{className:"main-header"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),i.a.createElement("div",{className:"menu-toggle",onClick:this.handleMenuClick},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("div",{className:"d-none d-lg-flex align-items-center"},i.a.createElement(g.a,{className:"mr-3"},i.a.createElement(g.a.Toggle,{variant:"link",id:"dropdown-basic"},"Mega Menugdf"),i.a.createElement("div",{className:"mega-menu"},i.a.createElement(g.a.Menu,null,i.a.createElement(S.a,null)))),i.a.createElement("div",{className:"search-bar"},i.a.createElement("input",{type:"text",placeholder:"Search",onFocus:this.handleSearchBoxOpen}),i.a.createElement("i",{className:"search-icon text-muted i-Magnifi-Glass1"}))),i.a.createElement("div",{style:{margin:"auto"}}),i.a.createElement("div",{className:"header-part-right"},i.a.createElement("i",{className:"i-Full-Screen header-icon d-none d-sm-inline-block","data-fullscreen":!0,onClick:this.toggleFullScreen}),i.a.createElement(g.a,null,i.a.createElement(g.a.Toggle,{variant:"link",className:"toggle-hidden"},i.a.createElement("i",{className:"i-Safe-Box text-muted header-icon",role:"button"})),i.a.createElement(g.a.Menu,null,i.a.createElement("div",{className:"menu-icon-grid"},a.map((function(e){return i.a.createElement(v.a,{key:e.text,to:e.link},i.a.createElement("i",{className:e.icon})," ",e.text)}))))),i.a.createElement(g.a,null,i.a.createElement(g.a.Toggle,{variant:"link",className:"toggle-hidden"},i.a.createElement("div",{className:"badge-top-container",role:"button",id:"dropdownNotification","data-toggle":"dropdown"},i.a.createElement("span",{className:"badge badge-primary"},"3"),i.a.createElement("i",{className:"i-Bell text-muted header-icon"}))),i.a.createElement(E.a,{className:"notification-dropdown rtl-ps-none"},l.map((function(e,t){return i.a.createElement("div",{key:t,className:"dropdown-item d-flex"},i.a.createElement("div",{className:"notification-icon"},i.a.createElement("i",{className:"".concat(e.icon," text-").concat(e.color," mr-1")})),i.a.createElement("div",{className:"notification-details flex-grow-1"},i.a.createElement("p",{className:"m-0 d-flex align-items-center"},i.a.createElement("span",null,e.title),i.a.createElement("span",{className:"badge badge-pill badge-".concat(e.color," ml-1 mr-1")},e.status),i.a.createElement("span",{className:"flex-grow-1"}),i.a.createElement("span",{className:"text-small text-muted ml-auto"},Object(p.b)(new Date(e.time))," ago")),i.a.createElement("p",{className:"text-small text-muted m-0"},e.description)))})))),i.a.createElement("div",{className:"user col align-self-end"},i.a.createElement(g.a,null,i.a.createElement(h.a,{variant:"link",className:"toggle-hidden"},i.a.createElement("img",{src:"/assets/images/faces/1.jpg",id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"})),i.a.createElement(E.a,null,i.a.createElement("div",{className:"dropdown-header"},i.a.createElement("i",{className:"i-Lock-User mr-1"})," Timothy Carlson"),i.a.createElement("span",{className:"dropdown-item cursor-pointer"},"Account settings"),i.a.createElement("span",{className:"dropdown-item cursor-pointer"},"Billing history"),i.a.createElement("span",{className:"dropdown-item cursor-pointer",onClick:this.props.logoutUser},"Sign out")))))),i.a.createElement("div",{className:"horizontal-bar-wrap"},i.a.createElement("div",{className:Object(p.a)({"header-topnav":!0,open:r.layout3Settings.leftSidebar.open})},i.a.createElement("div",{className:"container-fluid"},i.a.createElement(k.a,{className:"topnav position-relative rtl-ps-none"},i.a.createElement("ul",{className:"menu float-left"},x.a.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("label",{className:"toggle",htmlFor:"drop-".concat(t)},e.name),i.a.createElement(v.a,{to:e.sub?"#":e.path},i.a.createElement("i",{className:"nav-icon mr-2 ".concat(e.icon)}),e.name),i.a.createElement("input",{type:"checkbox",id:"drop-".concat(t)}),i.a.createElement("ul",null,e.sub&&e.sub.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(v.a,{to:e.path||"#"},i.a.createElement("i",{className:"nav-icon mr-2 ".concat(e.icon)}),i.a.createElement("span",{className:"item-name"},e.name)))}))))))}))))))))}}]),a}(c.Component),C=Object(y.i)(Object(u.b)((function(e){return{setLayoutSettings:f.a.func.isRequired,settings:e.layout.settings}}),{setLayoutSettings:N.d})(L)),j=a(759),O=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleSearchBoxClose=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(d.merge)({},n,{layout3Settings:{searchBox:{open:!1}}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.settings,a=e.routes;return i.a.createElement("div",null,i.a.createElement("div",{className:"app-admin-wrap  layout-horizontal-bar"},i.a.createElement(C,null),i.a.createElement("div",{className:Object(p.a)({"main-content-wrap d-flex flex-column":!0})},i.a.createElement("div",{className:"main-content"},Object(o.a)(a)),i.a.createElement(m.a,null))),i.a.createElement(j.a,{open:t.layout3Settings.searchBox.open,handleClose:this.handleSearchBoxClose}))}}]),a}(c.Component);t.default=Object(u.b)((function(e){return{settings:e.layout.settings}}),{setLayoutSettings:N.d})(O)},757:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{name:"Dashboard",description:"Dashboard",type:"dropDown",icon:"i-Bar-Chart",sub:[{icon:"i-Clock-3",name:"Dashboard",path:"/",type:"link"}]},{name:"User Management",description:"Management of officer accounts",type:"dropDown",icon:"i-Business-Mens",userGroup:"Admin",sub:[{icon:"i-Add-User",name:"New Officer Account",path:"/user/new",type:"link"},{icon:"i-Administrator",name:"Officer Accounts List",path:"/user/list",type:"link"}]},{name:"Assignment Tasks",description:"Management of assignment tasks",type:"dropDown",icon:"i-File",userGroup:"Officer",sub:[{icon:"i-Add-File",name:"New Assignment Task",path:"/assignment/new",type:"link"},{icon:"i-File-Horizontal-Text",name:"Assignment Tasks List",path:"/assignment/list",type:"link"}]},{name:"Assignment Results",description:"View result of assignment",type:"link",icon:"i-File",path:"/assignment/result/invigilator",userGroup:"Teacher"},{name:"School & Exam Center",description:"Management of schools & exam centers",type:"dropDown",icon:"i-University1",userGroup:"Officer",sub:[{icon:"i-University",name:"New School",path:"/school/new",type:"link"},{icon:"i-University1",name:"Registered Schools List",path:"/school/list",type:"link"}]},{name:"Formal Letter",description:"Management of formal letters",type:"dropDown",icon:"i-Mail",userGroup:"Officer",sub:[{icon:"i-Mail-Add-",name:"New Formal Letter",path:"/letter/new",type:"link"},{icon:"i-Email",name:"Formal Letter List",path:"/letter/list",type:"link"}]}]},758:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"flex-grow-1"}),l.a.createElement("div",{className:"app-footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("p",null,l.a.createElement("strong",null,"Gull - Laravel + Bootstrap 4 admin template")),l.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi sequi dolor quibusdam sunt."))),l.a.createElement("div",{className:"footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"},l.a.createElement("a",{id:"buy-gull",className:"btn btn-primary text-white btn-rounded",href:"https://1.envato.market/LV1va",target:"_blank",rel:"noopener noreferrer"},"Buy Gull React"),l.a.createElement("span",{className:"flex-grow-1"}),l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{className:"logo",src:"/assets/images/logo.png",alt:""}),l.a.createElement("div",null,l.a.createElement("p",{className:"m-0"},"\xa9 2019 Gull HTML"),l.a.createElement("p",{className:"m-0"},"All rights reserved"))))))}},759:function(e,t,a){"use strict";var n=a(13),l=a(19),r=a(20),s=a(21),c=a(0),i=a.n(c),o=a(34),m=a(646),u=a.n(m),d=a(42),p=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).debounceTimer=null,e.dummyProductList=[{name:"Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"Sale",imgUrl:"/assets/images/products/headphone-1.jpg"},{name:"Bitz Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-2.jpg"},{name:"Sony Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-3.jpg"},{name:"Earphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-4.jpg"}],e.state={query:"",searchList:e.dummyProductList},e.handleSearch=function(t){t.persist(),e.setState({query:t.target.value},(function(){e.debounceTimer&&clearTimeout(e.debounceTimer),e.debounceTimer=setTimeout((function(){e.setState({searchList:e.dummyProductList.filter((function(t){return t.name.toLocaleLowerCase().match(e.state.query.toLowerCase())}))})}),250)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.handleClose,n=this.state.searchList;return i.a.createElement("div",{className:Object(o.a)({"search-ui":!0,open:t})},i.a.createElement("div",{className:"d-flex justify-content-between align-items-center search-header o-hidden"},i.a.createElement("img",{src:"/assets/images/logo.png",alt:"",className:"logo float-left"}),i.a.createElement("button",{className:"search-close btn btn-icon bg-transparent mt-2",onClick:a},i.a.createElement("i",{className:"i-Close-Window text-22 text-muted"}))),i.a.createElement("input",{type:"text",placeholder:"Type here",className:"search-input",autoFocus:!0,onChange:this.handleSearch}),i.a.createElement("div",{className:"search-title"},i.a.createElement("span",{className:"text-muted"},"Search results")),i.a.createElement("div",{className:"search-results list-horizontal"},n.map((function(e,t){return i.a.createElement("div",{key:t,className:"list-item col-md-12 p-0"},i.a.createElement("div",{className:"card o-hidden flex-row mb-4 d-flex"},i.a.createElement("div",{className:"list-thumb d-flex"},i.a.createElement("img",{src:e.imgUrl,alt:""})),i.a.createElement("div",{className:"flex-grow-1 pl-2 d-flex"},i.a.createElement("div",{className:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row"},i.a.createElement(d.a,{to:"/",className:"w-40 w-sm-100"},i.a.createElement("div",{className:"item-title"},e.name)),i.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100"},"Gadget"),i.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100"},"$",e.currentPrice,i.a.createElement("del",{className:"text-secondary"},"$",e.prevPrice)),i.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"},i.a.createElement("span",{className:Object(o.a)({badge:!0,"bg-danger":"Sale"===e.status,"bg-primary":"New"===e.status})},e.status))))))}))),i.a.createElement("div",{className:"px-3 mt-5 d-flex flex-row justify-content-center"},i.a.createElement(u.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:5,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))}}]),a}(c.Component);t.a=p},951:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(42);t.a=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"row m-0"},l.a.createElement("div",{className:"col-md-4 p-4 bg-img"},l.a.createElement("h2",{className:"title"},"Mega Menu ",l.a.createElement("br",null)," Sidebar"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur."),l.a.createElement("p",{className:"mb-4"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat."),l.a.createElement("button",{className:"btn btn-lg btn-rounded btn-outline-warning"},"Learn More")),l.a.createElement("div",{className:"col-md-4 p-4"},l.a.createElement("p",{className:"text-primary text--cap border-bottom-primary d-inline-block"},"Features"),l.a.createElement("div",{className:"menu-icon-grid w-auto p-0"},l.a.createElement(r.a,{to:"/"},l.a.createElement("i",{className:"i-Shop-4"})," Home"),l.a.createElement(r.a,{to:"/"},l.a.createElement("i",{className:"i-Library"})," UI Kits"),l.a.createElement(r.a,{to:"/"},l.a.createElement("i",{className:"i-Drop"})," Apps"),l.a.createElement(r.a,{to:"/"},l.a.createElement("i",{className:"i-File-Clipboard-File--Text"})," Forms"),l.a.createElement(r.a,{to:"/"},l.a.createElement("i",{className:"i-Checked-User"})," Sessions"),l.a.createElement(r.a,{to:"/"},l.a.createElement("i",{className:"i-Ambulance"})," Support"))),l.a.createElement("div",{className:"col-md-4 p-4"},l.a.createElement("p",{className:"text-primary text--cap border-bottom-primary d-inline-block"},"Components"),l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"accordion.html"},"Accordion")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"alerts.html"},"Alerts")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"buttons.html"},"Buttons")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"badges.html"},"Badges")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"carousel.html"},"Carousels")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"lists.html"},"Lists")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"popover.html"},"Popover")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"tables.html"},"Tables")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"datatables.html"},"Datatables")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"modals.html"},"Modals")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"nouislider.html"},"Sliders")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",href:"tabs.html"},"Tabs"))))))}}}]);
//# sourceMappingURL=30.de963335.chunk.js.map