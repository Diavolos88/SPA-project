(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{294:function(t,e,s){t.exports={profile:"Profile_profile__3ggVm",fullName:"Profile_fullName__2N4jL",first__column:"Profile_first__column__2jaYw",second__column:"Profile_second__column__2r7gP",aboutMe:"Profile_aboutMe__19WSn",contacts:"Profile_contacts__311Dv",contacts__item:"Profile_contacts__item__26fJ5",statusField:"Profile_statusField__cWKZg",lookingForAJobDesc:"Profile_lookingForAJobDesc__3YE16"}},295:function(t,e,s){t.exports={statusField:"Status_statusField__3gz8Q",inputField:"Status_inputField__GuL18"}},297:function(t,e,s){"use strict";s.r(e);var r=s(5),o=s(53),n=s(97),a=s(55),i=s(54),c=s(1),u=s(0),l=s.n(u),f=s(294),p=s.n(f);var j=s(99);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],r=!0,o=!1,n=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(s.push(a.value),!e||s.length!==e);r=!0);}catch(c){o=!0,n=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}return s}}(t,e)||Object(j.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=s(295),h=s.n(d),_=function(t){var e=b(Object(u.useState)(!1),2),s=e[0],r=e[1],o=b(Object(u.useState)(t.status),2),n=o[0],a=o[1];Object(u.useEffect)((function(){a(t.status)}),[t.status]);return s?Object(c.jsx)("div",{children:Object(c.jsx)("input",{onChange:function(t){a(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateUserStatus(n)},className:h.a.inputField,value:n||""})}):Object(c.jsx)("div",{children:Object(c.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status?t.status:"***Use double-click for change status***"})})},O=s(98),m=function(t){if(t.profile){var e=[];for(var s in t.profile.contacts)t.profile.contacts[s]&&e.push(Object(c.jsxs)("div",{className:p.a.contacts__item,children:[s+": ",t.profile.contacts[s]]}));return Object(c.jsxs)("div",{className:p.a.profile,children:[Object(c.jsxs)("div",{className:p.a.first__column,children:[Object(c.jsx)("div",{className:p.a.fullName,children:t.profile.fullName}),Object(c.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:O.a}),t.isOwner?Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Send message"})}):Object(c.jsx)("input",{onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])},type:"file"})]}),Object(c.jsxs)("div",{className:p.a.second__column,children:[Object(c.jsx)("span",{children:"Status:"}),Object(c.jsx)("div",{className:p.a.statusField,children:Object(c.jsx)(_,{status:t.status,updateUserStatus:t.updateUserStatus})}),Object(c.jsxs)("span",{children:["Looking for a job : ",t.profile.lookingForAJob?"Yes":"No"]}),Object(c.jsxs)("span",{children:["About my future work: ",Object(c.jsx)("div",{className:p.a.lookingForAJobDesc,children:t.profile.lookingForAJob?t.profile.lookingForAJobDescription:"No"})]}),Object(c.jsx)("span",{children:"About me: "}),Object(c.jsx)("div",{className:p.a.aboutMe,children:t.profile.aboutMe?t.profile.aboutMe:"***without about me***"}),Object(c.jsx)("span",{children:"Contacts: "}),Object(c.jsx)("div",{className:p.a.contacts,children:0!==e.length?e:"***without contact***"})]})]})}return Object(c.jsx)("div",{})},v=s(12),g=s(56),x=s(10),y=s(72),P=function(t){return{isAuth:t.auth.isAuth}},S=s(9),N=function(t){Object(a.a)(s,t);var e=Object(i.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).render=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(m,Object(r.a)(Object(r.a)({},t.props),{},{isOwner:!!t.props.match.params.userId,profile:t.props.profile,status:t.props.status,updateUserStatus:t.props.updateUserStatus}))})},t}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;this.props.getUserProfile(t),this.props.setUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.refreshProfile()}}]),s}(l.a.Component);e.default=Object(S.d)((function(t){var e=function(e){Object(a.a)(u,e);var s=Object(i.a)(u);function u(){return Object(o.a)(this,u),s.apply(this,arguments)}return Object(n.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(t,Object(r.a)({},this.props)):Object(c.jsx)(x.a,{to:"/login"})}}]),u}(l.a.Component);return Object(v.b)(P)(e)}),x.f,Object(v.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status}}),{follow:y.c,unfollow:y.f,getUserProfile:g.b,updateUserStatus:g.e,setUserStatus:g.d,savePhoto:g.c}))(N)}}]);
//# sourceMappingURL=3.cea08c2b.chunk.js.map