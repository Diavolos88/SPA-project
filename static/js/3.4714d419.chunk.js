(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{294:function(t,e,r){t.exports={profile:"Profile_profile__3ggVm",fullName:"Profile_fullName__2N4jL",first__column:"Profile_first__column__2jaYw",second__column:"Profile_second__column__2r7gP",aboutMe:"Profile_aboutMe__19WSn",contacts:"Profile_contacts__311Dv",contacts__item:"Profile_contacts__item__26fJ5"}},295:function(t,e,r){t.exports={inputField:"Status_inputField__GuL18"}},297:function(t,e,r){"use strict";r.r(e);var a=r(5),s=r(53),n=r(97),o=r(55),c=r(54),i=r(1),u=r(0),l=r.n(u),p=r(294),f=r.n(p);var j=r(99);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],a=!0,s=!1,n=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(i){s=!0,n=i}finally{try{a||null==c.return||c.return()}finally{if(s)throw n}}return r}}(t,e)||Object(j.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=r(295),h=r.n(d),_=function(t){var e=b(Object(u.useState)(!1),2),r=e[0],a=e[1],s=b(Object(u.useState)(t.status),2),n=s[0],o=s[1];Object(u.useEffect)((function(){o(t.status)}),[t.status]);return r?Object(i.jsx)("div",{children:Object(i.jsx)("input",{onChange:function(t){o(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateUserStatus(n)},className:h.a.inputField,value:n||"***Update status***"})}):Object(i.jsx)("div",{children:Object(i.jsx)("span",{onDoubleClick:function(){a(!0)},children:t.status?t.status:"***Update status***"})})},O=r(98),m=function(t){if(t.profile){var e=[];for(var r in t.profile.contacts)t.profile.contacts[r]&&e.push(Object(i.jsx)("div",{className:f.a.contacts__item,children:t.profile.contacts[r]}));return Object(i.jsxs)("div",{className:f.a.profile,children:[Object(i.jsxs)("div",{className:f.a.first__column,children:[Object(i.jsx)("div",{className:f.a.fullName,children:t.profile.fullName}),Object(i.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:O.a}),Object(i.jsx)("button",{children:"Send message"})]}),Object(i.jsxs)("div",{className:f.a.second__column,children:[Object(i.jsx)("span",{children:"Status: "}),Object(i.jsx)(_,{status:t.status,updateUserStatus:t.updateUserStatus}),Object(i.jsx)("span",{children:"About me: "}),Object(i.jsx)("div",{className:f.a.aboutMe,children:t.profile.aboutMe?t.profile.aboutMe:"without about me"}),Object(i.jsx)("span",{children:"Contacts: "}),Object(i.jsx)("div",{className:f.a.contacts,children:0!==e.length?e:"without contact"})]})]})}return Object(i.jsx)("div",{})},v=r(12),x=r(56),y=r(10),S=r(72),g=function(t){return{isAuth:t.auth.isAuth}},N=r(9),P=function(t){Object(o.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).render=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(m,Object(a.a)(Object(a.a)({},t.props),{},{profile:t.props.profile,status:t.props.status,updateUserStatus:t.props.updateUserStatus}))})},t}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;this.props.getUserProfile(t),this.props.setUserStatus(t)}}]),r}(l.a.Component);e.default=Object(N.d)((function(t){var e=function(e){Object(o.a)(u,e);var r=Object(c.a)(u);function u(){return Object(s.a)(this,u),r.apply(this,arguments)}return Object(n.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(i.jsx)(t,Object(a.a)({},this.props)):Object(i.jsx)(y.a,{to:"/login"})}}]),u}(l.a.Component);return Object(v.b)(g)(e)}),y.f,Object(v.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status}}),{follow:S.c,unfollow:S.f,getUserProfile:x.b,updateUserStatus:x.d,setUserStatus:x.c}))(P)}}]);
//# sourceMappingURL=3.4714d419.chunk.js.map