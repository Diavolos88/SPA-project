(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(e,t,o){e.exports={profile:"Profile_profile__3ggVm",fullName:"Profile_fullName__2N4jL",first__column:"Profile_first__column__2jaYw",second__column:"Profile_second__column__2r7gP",aboutMe:"Profile_aboutMe__19WSn",contacts:"Profile_contacts__311Dv",contacts__item:"Profile_contacts__item__26fJ5",statusField:"Profile_statusField__cWKZg",lookingForAJobDesc:"Profile_lookingForAJobDesc__3YE16",lookingForAJobDescriptionarea:"Profile_lookingForAJobDescriptionarea__115U5",formSummaryError:"Profile_formSummaryError__1aZQa",editSaveBut:"Profile_editSaveBut__2ZLQO",label:"Profile_label__dkt45",fieldInput:"Profile_fieldInput__3nlT-",changePhotoFile:"Profile_changePhotoFile__3FQcz",changePhotoText:"Profile_changePhotoText__2wMh-"}},296:function(e,t,o){e.exports={statusField:"Status_statusField__3gz8Q",inputField:"Status_inputField__GuL18"}},299:function(e,t,o){"use strict";o.r(t);var a=o(5),n=o(54),c=o(97),s=o(56),r=o(55),i=o(0),l=o(1),u=o.n(l);var b=o(99);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var o=[],a=!0,n=!1,c=void 0;try{for(var s,r=e[Symbol.iterator]();!(a=(s=r.next()).done)&&(o.push(s.value),!t||o.length!==t);a=!0);}catch(i){n=!0,c=i}finally{try{a||null==r.return||r.return()}finally{if(n)throw c}}return o}}(e,t)||Object(b.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=o(295),f=o.n(p),d=o(296),m=o.n(d),h=function(e){var t=j(Object(l.useState)(!1),2),o=t[0],a=t[1],n=j(Object(l.useState)(e.status),2),c=n[0],s=n[1];Object(l.useEffect)((function(){s(e.status)}),[e.status]);return o?Object(i.jsx)("div",{children:Object(i.jsx)("input",{onChange:function(e){s(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateUserStatus(c)},className:m.a.inputField,value:c||""})}):Object(i.jsx)("div",{children:Object(i.jsx)("span",{onDoubleClick:function(){e.isOwner||a(!0)},children:e.status?e.status:"***Use double-click for change status***"})})},O=o(98),x=o(129),_=o(130),v=function(e){var t=e.input,o=e.label,n=e.type,c=e.meta,s=c.touched,r=c.error,l=c.warning;return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:f.a.label,children:o}),Object(i.jsxs)("div",{className:f.a.fieldInput,children:[Object(i.jsx)("input",Object(a.a)(Object(a.a)({},t),{},{placeholder:o,type:n})),s&&(r&&Object(i.jsx)("span",{children:r})||l&&Object(i.jsx)("span",{children:l}))]})]})},g=Object(_.a)({form:"editProfile"})((function(e){return Object(i.jsxs)("form",{className:f.a.second__column,onSubmit:e.handleSubmit,children:[Object(i.jsx)("div",{children:"Looking For A Job:"}),Object(i.jsx)(x.a,{name:"lookingForAJob",type:"checkbox",component:v,label:"Find a job:"}),Object(i.jsx)(x.a,{name:"lookingForAJobDescription",type:"text",component:v,label:"About my future work:"}),Object(i.jsx)(x.a,{name:"fullName",type:"text",component:v,label:"Full name"}),Object(i.jsx)(x.a,{name:"aboutMe",type:"text",component:v,label:"About me"}),Object(i.jsx)("div",{children:"Contacts:"}),Object(i.jsx)(x.a,{name:"contacts.github",type:"text",component:v,label:"github:"}),Object(i.jsx)(x.a,{name:"contacts.vk",type:"text",component:v,label:"vk:"}),Object(i.jsx)(x.a,{name:"contacts.facebook",type:"text",component:v,label:"facebook:"}),Object(i.jsx)(x.a,{name:"contacts.instagram",type:"text",component:v,label:"instagram:"}),Object(i.jsx)(x.a,{name:"contacts.twitter",type:"text",component:v,label:"twitter:"}),Object(i.jsx)(x.a,{name:"contacts.website",type:"text",component:v,label:"website:"}),Object(i.jsx)(x.a,{name:"contacts.youtube",type:"text",component:v,label:"youtube:"}),Object(i.jsx)(x.a,{name:"contacts.mainLink",type:"text",component:v,label:"mainLink:"}),Object(i.jsx)("div",{className:f.a.formSummaryError,children:e.error}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:f.a.editSaveBut,children:"Save"})})]})})),y=function(e){return Object(i.jsxs)("div",{className:f.a.second__column,children:[Object(i.jsx)("span",{children:"Status:"}),Object(i.jsx)("div",{className:f.a.statusField,children:Object(i.jsx)(h,{status:e.status,updateUserStatus:e.updateUserStatus,isOwner:e.isOwner})}),Object(i.jsxs)("span",{children:["Looking for a job : ",e.profile.lookingForAJob?"Yes":"No"]}),Object(i.jsxs)("span",{children:["About my future work: ",Object(i.jsx)("div",{className:f.a.lookingForAJobDesc,children:e.profile.lookingForAJob?e.profile.lookingForAJobDescription:"No"})]}),Object(i.jsx)("span",{children:"About me: "}),Object(i.jsx)("div",{className:f.a.aboutMe,children:e.profile.aboutMe?e.profile.aboutMe:"***without about me***"}),Object(i.jsx)("span",{children:"Contacts: "}),Object(i.jsx)("div",{className:f.a.contacts,children:0!==e.contact.length?e.contact:"***without contact***"}),e.isOwner?Object(i.jsx)("div",{}):Object(i.jsx)("button",{className:f.a.editSaveBut,onClick:e.goToEditMode,children:"edit"})]})},P=function(e){var t=j(Object(l.useState)(!1),2),o=t[0],n=t[1];if(e.profile){var c=[];for(var s in e.profile.contacts)e.profile.contacts[s]&&c.push(Object(i.jsxs)("div",{className:f.a.contacts__item,children:[s+": ",e.profile.contacts[s]]}));return Object(i.jsxs)("div",{className:f.a.profile,children:[Object(i.jsxs)("div",{className:f.a.first__column,children:[Object(i.jsx)("div",{className:f.a.fullName,children:e.profile.fullName}),Object(i.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:O.a}),e.isOwner?Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Send message"})}):Object(i.jsxs)("div",{className:f.a.changePhotoText,children:["Change photo (only png or jpeg formats)",Object(i.jsx)("input",{className:f.a.changePhotoFile,onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])},type:"file"})]})]}),o?Object(i.jsx)(g,Object(a.a)(Object(a.a)({initialValues:e.profile},e),{},{contact:c,onSubmit:function(t){e.saveProfile(t).then((function(){n(!1)}))}})):Object(i.jsx)(y,Object(a.a)(Object(a.a)({},e),{},{goToEditMode:function(){n(!0)},contact:c}))]})}return Object(i.jsx)("div",{})},k=o(12),S=o(57),F=o(9),N=o(72),w=function(e){return{isAuth:e.auth.isAuth}},A=o(10),J=function(e){Object(s.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(n.a)(this,o);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).render=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(P,Object(a.a)(Object(a.a)({},e.props),{},{isOwner:!!e.props.match.params.userId,profile:e.props.profile,status:e.props.status,updateUserStatus:e.props.updateUserStatus}))})},e}return Object(c.a)(o,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;this.props.getUserProfile(e),this.props.setUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.refreshProfile()}}]),o}(u.a.Component);t.default=Object(A.d)((function(e){var t=function(t){Object(s.a)(l,t);var o=Object(r.a)(l);function l(){return Object(n.a)(this,l),o.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return this.props.isAuth?Object(i.jsx)(e,Object(a.a)({},this.props)):Object(i.jsx)(F.a,{to:"/login"})}}]),l}(u.a.Component);return Object(k.b)(w)(t)}),F.g,Object(k.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{follow:N.c,unfollow:N.f,getUserProfile:S.b,updateUserStatus:S.f,setUserStatus:S.e,savePhoto:S.c,saveProfile:S.d}))(J)}}]);
//# sourceMappingURL=3.e8d5f1c5.chunk.js.map