(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[25],{1079:function(e,t,r){"use strict";var n=r(58),a=r.n(n),o=r(628),l=r.n(o),i=r(595),s=r.n(i),c=r(0),u=r.n(c),m=r(18),d=r.n(m),p=r(88),f=r.n(p),h=r(87),v=r.n(h),g=r(644),y=r.n(g),E=r(36),b=r(54);var N=r(33),x=r(629),C=["_reduxForm","value"];function w(e){var t=e.deepEqual,r=e.getIn,n=e.size,o=e.equals,i=e.orderChanged,m=function(n){function m(){for(var e,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))||this).ref=u.a.createRef(),e.getValue=function(t){return e.props.value&&r(e.props.value,String(t))},e}s()(m,n);var d=m.prototype;return d.shouldComponentUpdate=function(e){var r=this,n=this.props.value,a=e.value;if(n&&a){var l=o(a,n),s=i(n,a);if((n.length||n.size)!==(a.length||a.size)||l&&s||e.rerenderOnEveryChange&&n.some((function(e,r){return!t(e,a[r])})))return!0}var c=Object.keys(e),u=Object.keys(this.props);return!!(this.props.children||e.children||c.length!==u.length||c.some((function(n){return!~C.indexOf(n)&&!t(r.props[n],e[n])})))},d.getRenderedComponent=function(){return this.ref.current},d.render=function(){var t=this.props,r=t.component,n=t.forwardRef,o=t.name,l=t._reduxForm,i=(t.validate,t.warn,t.rerenderOnEveryChange,v()(t,["component","forwardRef","name","_reduxForm","validate","warn","rerenderOnEveryChange"])),s=function(e,t,r,n,o,l){var i=e.getIn,s=l.arrayInsert,c=l.arrayMove,u=l.arrayPop,m=l.arrayPush,d=l.arrayRemove,p=l.arrayRemoveAll,f=l.arrayShift,h=l.arraySplice,g=l.arraySwap,y=l.arrayUnshift,E=l.asyncError,b=l.dirty,N=l.length,x=l.pristine,C=l.submitError,w=(l.state,l.submitFailed),O=l.submitting,R=l.syncError,k=l.syncWarning,F=l.value,_=l.props,I=v()(l,["arrayInsert","arrayMove","arrayPop","arrayPush","arrayRemove","arrayRemoveAll","arrayShift","arraySplice","arraySwap","arrayUnshift","asyncError","dirty","length","pristine","submitError","state","submitFailed","submitting","syncError","syncWarning","value","props"]),T=R||E||C,S=k,j=n?t.replace(n+".",""):t,A=a()({fields:{_isFieldArray:!0,forEach:function(e){return(F||[]).forEach((function(t,r){return e(j+"["+r+"]",r,A.fields)}))},get:o,getAll:function(){return F},insert:s,length:N,map:function(e){return(F||[]).map((function(t,r){return e(j+"["+r+"]",r,A.fields)}))},move:c,name:t,pop:function(){return u(),i(F,String(N-1))},push:m,reduce:function(e,t){return(F||[]).reduce((function(t,r,n){return e(t,j+"["+n+"]",n,A.fields)}),t)},remove:d,removeAll:p,shift:function(){return f(),i(F,"0")},splice:h,swap:g,unshift:y},meta:{dirty:b,error:T,form:r,warning:S,invalid:!!T,pristine:x,submitting:O,submitFailed:w,valid:!T}},_,{},I);return A}(e,o,l.form,l.sectionPrefix,this.getValue,i);return n&&(s.ref=this.ref),Object(c.createElement)(r,s)},l()(m,[{key:"dirty",get:function(){return this.props.dirty}},{key:"pristine",get:function(){return this.props.pristine}},{key:"value",get:function(){return this.props.value}}]),m}(c.Component);return m.propTypes={component:x.a,props:d.a.object,rerenderOnEveryChange:d.a.bool},m.defaultProps={rerenderOnEveryChange:!1},Object(E.b)((function(e,a){var o=a.name,l=a._reduxForm,i=l.initialValues,s=(0,l.getFormState)(e),c=r(s,"initial."+o)||i&&r(i,o),u=r(s,"values."+o),m=r(s,"submitting"),d=function(e,t){return N.a.getIn(e,t+"._error")}(r(s,"syncErrors"),o),p=function(e,t){return r(e,t+"._warning")}(r(s,"syncWarnings"),o),f=t(u,c);return{asyncError:r(s,"asyncErrors."+o+"._error"),dirty:!f,pristine:f,state:r(s,"fields."+o),submitError:r(s,"submitErrors."+o+"._error"),submitFailed:r(s,"submitFailed"),submitting:m,syncError:d,syncWarning:p,value:u,length:n(u)}}),(function(e,t){var r=t.name,n=t._reduxForm,a=n.arrayInsert,o=n.arrayMove,l=n.arrayPop,i=n.arrayPush,s=n.arrayRemove,c=n.arrayRemoveAll,u=n.arrayShift,m=n.arraySplice,d=n.arraySwap,p=n.arrayUnshift;return y()({arrayInsert:a,arrayMove:o,arrayPop:l,arrayPush:i,arrayRemove:s,arrayRemoveAll:c,arrayShift:u,arraySplice:m,arraySwap:d,arrayUnshift:p},(function(t){return Object(b.b)(t.bind(null,r),e)}))}),void 0,{forwardRef:!0})(m)}var O=r(786),R=r(705),k=function(e){return Array.isArray(e)?e:[e]},F=function(e,t){return e&&function(){for(var r=k(e),n=0;n<r.length;n++){var a,o=r[n].apply(r,arguments);if(o)return(a={})[t]=o,a}}};t.a=function(e){var t=w(e),r=function(e){function r(t){var r;if((r=e.call(this,t)||this).ref=u.a.createRef(),!t._reduxForm)throw new Error("FieldArray must be inside a component decorated with reduxForm()");return r}s()(r,e);var n=r.prototype;return n.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"FieldArray",(function(){return F(e.props.validate,"_error")}),(function(){return F(e.props.warn,"_warning")}))},n.UNSAFE_componentWillReceiveProps=function(e){var t=Object(O.a)(this.props,this.props.name),r=Object(O.a)(e,e.name);t!==r&&(this.props._reduxForm.unregister(t),this.props._reduxForm.register(r,"FieldArray"))},n.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},n.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to FieldArray"),this.ref&&this.ref.current.getRenderedComponent()},n.render=function(){return Object(c.createElement)(t,a()({},this.props,{name:this.name,ref:this.ref}))},l()(r,[{key:"name",get:function(){return Object(O.a)(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.ref||this.ref.current.dirty}},{key:"pristine",get:function(){return!(!this.ref||!this.ref.current.pristine)}},{key:"value",get:function(){return this.ref?this.ref.current.value:void 0}}]),r}(c.Component);return r.propTypes={name:d.a.string.isRequired,component:x.a,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,_reduxForm:d.a.object},Object(R.b)(r)}(N.a)},1549:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r.n(n),o=r(11),l=r(0),i=r.n(l),s=r(12),c=r(114),u=r(1562),m=r(1079),d=r(789),p=r(1559),f=r(36),h=r(575),v=r.n(h),g=r(2),y=r.n(g),E=r(553),b=r(562),N=r(7),x=r(849),C=Object(d.a)("NewLetterTemplate");t.default=Object(f.b)((function(e){return{content:C(e,"content"),httpError:e.error.error}}),{resetError:N.c,setError:N.d})(Object(p.a)({form:"NewLetterTemplate",validate:x.a})((function(e){var t=Object(s.g)();return i.a.createElement("div",null,i.a.createElement(E.a,{error:e.httpError,onConfirm:e.resetError}),i.a.createElement(c.a,{routeSegments:[{name:"Letter Templates",path:"/letter"},{name:"New Letter Template"}]}),i.a.createElement("div",{className:"2-columns-form-layout"},i.a.createElement("div",{className:""},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header bg-transparent"},i.a.createElement("h3",{className:"card-title"}," New Letter Template")),i.a.createElement("form",{onSubmit:e.handleSubmit((function(r){v.a.fire({title:"Saving letter template...",onBeforeOpen:function(){v.a.showLoading()},onOpen:function(){var n=Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y()({method:"POST",url:"".concat("https://peia-iam.herokuapp.com/api","/letters"),data:r}).then((function(e){v.a.hideLoading(),v.a.fire({title:"Successfully Create New Letter Template",icon:"success",allowOutsideClick:!1}).then((function(e){t.push("/letter/list")}))}));case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),v.a.hideLoading(),e.setError(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),allowOutsideClick:!1})}))},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement(u.a,{className:"col-md-6",name:"title",type:"text",placeholder:"Letter Template Title",helpText:"Please enter the letter template's title",component:b.d})),i.a.createElement("div",{className:"custom-separator"}),i.a.createElement("div",{className:"row"},i.a.createElement(u.a,{name:"content",placeholder:"Your letter template content...",title:"Letter Template Content",subtitle:"Please ensure that the tag is added into the content, or else the compiled letter might lack of information",component:b.e})),i.a.createElement("div",{className:"custom-separator"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement(m.a,{name:"tags",letterContent:e.content,changeFunction:e.change,component:b.h})))),i.a.createElement("div",{className:"card-footer"},i.a.createElement("div",{className:"mc-footer"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("button",{type:"submit",className:"btn btn-primary m-1"},"Create Letter Template"))))))))))))})))},553:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(569),l=r.n(o);t.a=function(e){return a.a.createElement(l.a,{show:!!e.error,title:"An Error Occured",type:"error",text:e.error?e.error.response?e.error.response.data.message:e.error.message:"",onConfirm:function(){return e.onConfirm()}})}},558:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=[{id:"01",title:"Assignment Task Title",value:"title"},{id:"02",title:"Exam Type",value:"examType"},{id:"04",title:"Assigned Exam Center Name",value:"assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.schoolName"},{id:"05",title:"Assigned School Code",value:"assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.schoolCode"},{id:"06",title:"Assigned Exam Center Code",value:"assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.examCenterCode"},{id:"07",title:"Role",value:"assignmentResults[assignmentResultIndex].role"},{id:"08",title:"Invigilator Name",value:"assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].teacherName"},{id:"09",title:"Invigilator IC",value:"assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].icNumber"}]},562:function(e,t,r){"use strict";r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return f})),r.d(t,"c",(function(){return h})),r.d(t,"g",(function(){return v})),r.d(t,"a",(function(){return y})),r.d(t,"e",(function(){return E})),r.d(t,"h",(function(){return N})),r.d(t,"b",(function(){return x}));var n=r(6),a=r(0),o=r.n(a),l=r(584),i=r.n(l),s=r(114),c=r(1562),u=r(558),m=r(1560),d=function(e){if(e.touched&&e.error)return o.a.createElement("div",{className:"text-danger mt-1 ml-2"},e.error)},p=function(e){return o.a.createElement("div",{className:"form-group ".concat(e.className||"")},o.a.createElement("input",Object.assign({readOnly:e.readOnly,type:e.type},e.input,{placeholder:e.placeholder,className:"form-control"})),o.a.createElement("small",{className:"ul-form__text form-text "},e.helpText),d(e.meta))},f=function(e){return o.a.createElement("div",{className:"form-group ".concat(e.className||"")},o.a.createElement("select",Object.assign({className:"form-control"},e.input,{onChange:e.input.onChange}),o.a.createElement("option",{value:""},e.defaultOption),e.items.map((function(e){return o.a.createElement("option",{key:e.id,value:e.value},e.title)}))),o.a.createElement("small",{className:"ul-form__text form-text "},e.helpText),d(e.meta))},h=function(e){return o.a.createElement("div",{className:"form-group ".concat(e.className||"")},o.a.createElement(i.a,{name:e.name,closeOnSelect:!0,onChange:e.input.onChange,isValidDate:e.isValidDate,timeFormat:"HH:mm",dateFormat:"DD/MM/YYYY",placeholder:e.placeholder,value:e.input.value}),o.a.createElement("small",{className:"ul-form__text form-text "},e.helpText),d(e.meta))},v=function(e){return o.a.createElement("div",{className:"form-group ".concat(e.className||"")},o.a.createElement("label",{className:"ul-form__label"},"Exam Centers: "),o.a.createElement("div",{className:"row"},e.items.map((function(t,r){return o.a.createElement("div",{className:"form-group col-md-6",key:r},o.a.createElement("label",{className:"checkbox checkbox-primary"},o.a.createElement("input",{type:"checkbox",name:"".concat(e.input.name,"[").concat(r,"]"),value:t.id,checked:-1!==e.input.value.indexOf(t.id),onChange:function(r){var a=Object(n.a)(e.input.value);return r.target.checked?a.push(t.id):a.splice(a.indexOf(t.id),1),e.input.onChange(a)}}),o.a.createElement("span",null,"".concat(t.school.schoolCode," - ").concat(t.examCenterCode," - ").concat(t.school.schoolName)),o.a.createElement("span",{className:"checkmark"})))}))),d(e.meta))},g=function(e){return o.a.createElement("div",{className:"form-group ".concat(e.className||"")},o.a.createElement("select",Object.assign({},e.input,{className:"form-control",onChange:e.input.onChange}),e.options.map((function(t){return t.user.school.id!==e.assigningSchoolId&&o.a.createElement("option",{key:t.id,value:t.id},"".concat(t.teacherName," - ").concat(t.user.school.schoolCode))}))),d(e.meta))},y=function(e){return o.a.createElement("div",{className:"col-md-4"},o.a.createElement("label",{className:"ul-form__label"},e.label),o.a.createElement("div",{className:"row"},e.fields.map((function(t,r){return o.a.createElement(c.a,{key:t,className:"col-lg-12",name:t,options:e.options,assigningSchoolId:e.schoolId,component:g})}))))},E=function(e){return o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.e,{title:e.title,subtitle:e.subtitle},o.a.createElement(s.d,Object.assign({},e.input,{content:e.input.value,handleContentChange:e.input.onChange,placeholder:e.placeholder}))),d(e.meta))},b=function(e){return o.a.createElement("div",{className:"form-group ".concat(e.className||"")},o.a.createElement("div",{className:"row"},o.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-1 col-form-label "},e.label),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("select",Object.assign({className:"form-control"},e.input,{onChange:e.input.onChange}),o.a.createElement("option",{value:""},e.defaultOption),e.items.map((function(e){return o.a.createElement("option",{key:e.id,value:e.value},e.title)})))),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement("button",{type:"button",className:"btn btn-danger m-1",onClick:function(){var t="&lt;"+(e.index+1)+"&gt;",r=e.letterContent.replace(t,"");if(e.index<e.fieldLength)for(var n=e.index+1;n<e.fieldLength;n++){var a="&lt;"+(n+1)+"&gt;",o="&lt;"+n+"&gt;";r=r.replace(a,o)}e.changeFunction("content",r),e.onRemoveTag(e.index)}},"Remove Tag"))),d(e.meta))},N=function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary m-1",onClick:function(){var t;e.fields.push({}),t=e.letterContent?e.letterContent+"&lt;"+(e.fields.length+1)+"&gt;":"&lt;"+(e.fields.length+1)+"&gt;",e.changeFunction("content",t)}},"Add New Tag")),o.a.createElement("div",{className:"custom-separator"}),e.fields.map((function(t,r){return o.a.createElement(c.a,{key:r,className:"col-md-12",label:"<".concat(r+1,">"),name:"".concat(t,".value"),component:b,defaultOption:"Please select a field",onRemoveTag:e.fields.remove,changeFunction:e.changeFunction,letterContent:e.letterContent,index:r,fieldLength:e.fields.length,items:u.a})})))},x=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a.Check,Object.assign({type:"radio",label:e.label},e.input,{value:e.radioValue})),d(e.meta))}},789:function(e,t,r){"use strict";var n=r(88),a=r.n(n),o=r(33);t.a=function(e){var t=e.getIn;return function(e,r){a()(e,"Form value must be specified");var n=r||function(e){return t(e,"form")};return function(r){for(var l=arguments.length,i=new Array(l>1?l-1:0),s=1;s<l;s++)i[s-1]=arguments[s];return a()(i.length,"No fields specified"),1===i.length?t(n(r),e+".values."+i[0]):i.reduce((function(a,l){var i=t(n(r),e+".values."+l);return void 0===i?a:o.a.setIn(a,l,i)}),{})}}}(o.a)},849:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t={};if(e.title||(t.title="Please enter the letter template's title"),e.content||(t.content="The content cannot be totally empty"),e.tags){var r=[];e.tags.forEach((function(e,t){var n={};e.value&&""!==e.value||(n.value="Please select the tag represented field",r[t]=n)})),r.length&&(t.tags=r)}return t}}}]);
//# sourceMappingURL=25.ae869f52.chunk.js.map