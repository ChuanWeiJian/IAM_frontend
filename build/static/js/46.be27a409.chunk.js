(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[46],{1538:function(e,a,t){"use strict";t.r(a);var n=t(59),r=t(13),l=t(19),s=t(20),o=t(21),i=t(0),m=t.n(i),c=t(952),d=t(830),u=t(29),g=t(18),p=t.n(g),h=t(36),v=d.object().shape({login:d.string().required("Login is required"),password:d.string().required("Password is required")}),b=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={login:"",password:""},e.handleChange=function(a){a.persist(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.login(a)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:"url(/assets/images/photo-wide-4.jpg)"}},m.a.createElement("div",{className:"auth-content"},m.a.createElement("div",{className:"card o-hidden"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("div",{className:"p-4"},m.a.createElement("div",{className:"auth-logo text-center mb-4"},m.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),m.a.createElement("h1",{className:"mb-3 text-18"},"Sign In"),m.a.createElement(c.a,{initialValues:this.state,validationSchema:v,onSubmit:this.handleSubmit},(function(a){var t=a.values,n=a.errors,r=(a.touched,a.handleChange),l=a.handleBlur,s=a.handleSubmit;a.isSubmitting;return m.a.createElement("form",{onSubmit:s},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"login"},"Login"),m.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"text",name:"login",onChange:r,onBlur:l,value:t.login}),n.login&&m.a.createElement("div",{className:"text-danger mt-1 ml-2"},n.login)),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"password"},"Password"),m.a.createElement("input",{className:"form-control form-control-rounded",type:"password",name:"password",onChange:r,onBlur:l,value:t.password}),n.password&&m.a.createElement("div",{className:"text-danger mt-1 ml-2"},n.password)),e.props.loading?m.a.createElement("div",{className:"text-center w-100 my-1 mt-2"},m.a.createElement("div",{className:"spinner spinner-primary me-3"})):m.a.createElement("button",{className:"btn btn-rounded btn-primary w-100 my-1 mt-2",type:"submit"},"Sign In"))})))),m.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/assets/images/login-form-photo.jpg)"}},m.a.createElement("div",{className:"pe-3 auth-right"},m.a.createElement("div",{className:"text-danger mt-1 ml-2"},this.props.loginError)))))))}}]),t}(i.Component);a.default=Object(h.b)((function(e){return{login:p.a.func.isRequired,loginError:e.login.error,loading:e.login.loading}}),{login:u.i})(b)}}]);
//# sourceMappingURL=46.be27a409.chunk.js.map