(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[14],{1557:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(11),c=a(0),s=a.n(c),o=a(12),i=a(114),u=a(1562),m=a(1559),d=a(36),f=a(627),g=a(575),p=a.n(g),h=a(2),v=a.n(h),E=a(853),N=a(553),b=a(562),x=a(7),C=a(854),w=a(947);t.default=Object(d.b)((function(e){return{httpError:e.error.error}}),{resetError:x.c,setError:x.d})(Object(m.a)({form:"NewOfficerAccount",validate:w.b})((function(e){var t=Object(o.g)();return s.a.createElement("div",null,s.a.createElement(N.a,{error:e.httpError,onConfirm:e.resetError}),s.a.createElement(i.a,{routeSegments:[{name:"User Management",path:"/user"},{name:"New Officer Account"}]}),s.a.createElement("div",{className:"2-columns-form-layout"},s.a.createElement("div",{className:""},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header bg-transparent"},s.a.createElement("h3",{className:"card-title"}," New Officer Account")),s.a.createElement("form",{onSubmit:e.handleSubmit((function(a){p.a.fire({title:"Registering new officer account...",onBeforeOpen:function(){p.a.showLoading()},onOpen:function(){var n=Object(l.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v()({method:"POST",url:"".concat("https://peia-iam.herokuapp.com/api","/users"),data:a}).then((function(e){p.a.hideLoading(),p.a.fire({title:"Successfully register new officer account",icon:"success",allowOutsideClick:!1}).then((function(e){t.push("/user/list")}))}));case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),p.a.hideLoading(),e.setError(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),allowOutsideClick:!1})}))},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement(u.a,{className:"col-md-6",name:"login",type:"text",placeholder:"User Login",helpText:"Please enter the user login",component:b.d}),s.a.createElement(u.a,{className:"col-md-4",name:"password",type:"text",placeholder:"User Password",helpText:"Please enter the user password",component:b.d}),s.a.createElement("div",{className:"col-md-2"},s.a.createElement(f.a,{className:"text-capitalize btn btn-dark ms-2",onClick:function(){e.change("password",Object(C.a)())}},"Generate Random Password"))),s.a.createElement("div",{className:"custom-separator"}),s.a.createElement("div",{className:"row"},s.a.createElement(u.a,{className:"col-md-6",name:"district",items:E.a,helpText:"Please select the district",defaultOption:"Please select a district...",component:b.f}))),s.a.createElement("div",{className:"card-footer"},s.a.createElement("div",{className:"mc-footer"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("button",{type:"submit",className:"btn btn-primary m-1"},"Sign up new officer account"))))))))))))})))},553:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(569),c=a.n(l);t.a=function(e){return r.a.createElement(c.a,{show:!!e.error,title:"An Error Occured",type:"error",text:e.error?e.error.response?e.error.response.data.message:e.error.message:"",onConfirm:function(){return e.onConfirm()}})}},558:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{id:"01",title:"Assignment Task Title",value:"title"},{id:"02",title:"Exam Type",value:"examType"},{id:"04",title:"Assigned Exam Center Name",value:"assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.schoolName"},{id:"05",title:"Assigned School Code",value:"assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.school.schoolCode"},{id:"06",title:"Assigned Exam Center Code",value:"assignmentResults[assignmentResultIndex].results[resultIndex].examCenter.examCenterCode"},{id:"07",title:"Role",value:"assignmentResults[assignmentResultIndex].role"},{id:"08",title:"Invigilator Name",value:"assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].teacherName"},{id:"09",title:"Invigilator IC",value:"assignmentResults[assignmentResultIndex].results[resultIndex].invigilators[invigilatorIndex].icNumber"}]},562:function(e,t,a){"use strict";a.d(t,"d",(function(){return f})),a.d(t,"f",(function(){return g})),a.d(t,"c",(function(){return p})),a.d(t,"g",(function(){return h})),a.d(t,"a",(function(){return E})),a.d(t,"e",(function(){return N})),a.d(t,"h",(function(){return x})),a.d(t,"b",(function(){return C}));var n=a(6),r=a(0),l=a.n(r),c=a(584),s=a.n(c),o=a(114),i=a(1562),u=a(558),m=a(1560),d=function(e){if(e.touched&&e.error)return l.a.createElement("div",{className:"text-danger mt-1 ml-2"},e.error)},f=function(e){return l.a.createElement("div",{className:"form-group ".concat(e.className||"")},l.a.createElement("input",Object.assign({readOnly:e.readOnly,type:e.type},e.input,{placeholder:e.placeholder,className:"form-control"})),l.a.createElement("small",{className:"ul-form__text form-text "},e.helpText),d(e.meta))},g=function(e){return l.a.createElement("div",{className:"form-group ".concat(e.className||"")},l.a.createElement("select",Object.assign({className:"form-control"},e.input,{onChange:e.input.onChange}),l.a.createElement("option",{value:""},e.defaultOption),e.items.map((function(e){return l.a.createElement("option",{key:e.id,value:e.value},e.title)}))),l.a.createElement("small",{className:"ul-form__text form-text "},e.helpText),d(e.meta))},p=function(e){return l.a.createElement("div",{className:"form-group ".concat(e.className||"")},l.a.createElement(s.a,{name:e.name,closeOnSelect:!0,onChange:e.input.onChange,isValidDate:e.isValidDate,timeFormat:"HH:mm",dateFormat:"DD/MM/YYYY",placeholder:e.placeholder,value:e.input.value}),l.a.createElement("small",{className:"ul-form__text form-text "},e.helpText),d(e.meta))},h=function(e){return l.a.createElement("div",{className:"form-group ".concat(e.className||"")},l.a.createElement("label",{className:"ul-form__label"},"Exam Centers: "),l.a.createElement("div",{className:"row"},e.items.map((function(t,a){return l.a.createElement("div",{className:"form-group col-md-6",key:a},l.a.createElement("label",{className:"checkbox checkbox-primary"},l.a.createElement("input",{type:"checkbox",name:"".concat(e.input.name,"[").concat(a,"]"),value:t.id,checked:-1!==e.input.value.indexOf(t.id),onChange:function(a){var r=Object(n.a)(e.input.value);return a.target.checked?r.push(t.id):r.splice(r.indexOf(t.id),1),e.input.onChange(r)}}),l.a.createElement("span",null,"".concat(t.school.schoolCode," - ").concat(t.examCenterCode," - ").concat(t.school.schoolName)),l.a.createElement("span",{className:"checkmark"})))}))),d(e.meta))},v=function(e){return l.a.createElement("div",{className:"form-group ".concat(e.className||"")},l.a.createElement("select",Object.assign({},e.input,{className:"form-control",onChange:e.input.onChange}),e.options.map((function(t){return t.user.school.id!==e.assigningSchoolId&&l.a.createElement("option",{key:t.id,value:t.id},"".concat(t.teacherName," - ").concat(t.user.school.schoolCode))}))),d(e.meta))},E=function(e){return l.a.createElement("div",{className:"col-md-4"},l.a.createElement("label",{className:"ul-form__label"},e.label),l.a.createElement("div",{className:"row"},e.fields.map((function(t,a){return l.a.createElement(i.a,{key:t,className:"col-lg-12",name:t,options:e.options,assigningSchoolId:e.schoolId,component:v})}))))},N=function(e){return l.a.createElement("div",{className:"col-md-12"},l.a.createElement(o.e,{title:e.title,subtitle:e.subtitle},l.a.createElement(o.d,Object.assign({},e.input,{content:e.input.value,handleContentChange:e.input.onChange,placeholder:e.placeholder}))),d(e.meta))},b=function(e){return l.a.createElement("div",{className:"form-group ".concat(e.className||"")},l.a.createElement("div",{className:"row"},l.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-1 col-form-label "},e.label),l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("select",Object.assign({className:"form-control"},e.input,{onChange:e.input.onChange}),l.a.createElement("option",{value:""},e.defaultOption),e.items.map((function(e){return l.a.createElement("option",{key:e.id,value:e.value},e.title)})))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("button",{type:"button",className:"btn btn-danger m-1",onClick:function(){var t="&lt;"+(e.index+1)+"&gt;",a=e.letterContent.replace(t,"");if(e.index<e.fieldLength)for(var n=e.index+1;n<e.fieldLength;n++){var r="&lt;"+(n+1)+"&gt;",l="&lt;"+n+"&gt;";a=a.replace(r,l)}e.changeFunction("content",a),e.onRemoveTag(e.index)}},"Remove Tag"))),d(e.meta))},x=function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary m-1",onClick:function(){var t;e.fields.push({}),t=e.letterContent?e.letterContent+"&lt;"+(e.fields.length+1)+"&gt;":"&lt;"+(e.fields.length+1)+"&gt;",e.changeFunction("content",t)}},"Add New Tag")),l.a.createElement("div",{className:"custom-separator"}),e.fields.map((function(t,a){return l.a.createElement(i.a,{key:a,className:"col-md-12",label:"<".concat(a+1,">"),name:"".concat(t,".value"),component:b,defaultOption:"Please select a field",onRemoveTag:e.fields.remove,changeFunction:e.changeFunction,letterContent:e.letterContent,index:a,fieldLength:e.fields.length,items:u.a})})))},C=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a.Check,Object.assign({type:"radio",label:e.label},e.input,{value:e.radioValue})),d(e.meta))}},853:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{id:"01",title:"Batu Pahat",value:"Batu Pahat"},{id:"02",title:"Johor Bahru",value:"Johor Bahru"},{id:"03",title:"Kluang",value:"Kluang"},{id:"04",title:"Kota Tinggi",value:"Kota Tinggi"},{id:"05",title:"Kulai",value:"Kulai"},{id:"06",title:"Mersing",value:"Mersing"},{id:"07",title:"Muar",value:"Muar"},{id:"08",title:"Pontian",value:"Pontian"},{id:"09",title:"Segamat",value:"Segamat"},{id:"10",title:"Tangkak",value:"Tangkak"}]},854:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(855),r=a.n(n),l=function(){return r.a.generate({length:10,numbers:!0})}},858:function(e,t){},860:function(e,t){},871:function(e,t){},873:function(e,t){},900:function(e,t){},902:function(e,t){},903:function(e,t){},908:function(e,t){},910:function(e,t){},929:function(e,t){},941:function(e,t){},944:function(e,t){},947:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){var t={};return e.login||(t.login="Please enter the user login"),e.password||(t.password="Please enter the user password"),e.district||(t.district="Please select a district"),t},r=function(e){var t={};return e.login||(t.login="Please enter the user login"),e.district||(t.district="Please select a district"),e.status||(t.status="Please select a status"),t}}}]);
//# sourceMappingURL=14.35f4fae2.chunk.js.map