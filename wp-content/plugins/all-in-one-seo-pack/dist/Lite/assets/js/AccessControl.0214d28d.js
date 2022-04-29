var g=Object.defineProperty,f=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(t,e,s)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,o=(t,e)=>{for(var s in e||(e={}))m.call(e,s)&&a(t,s,e[s]);if(n)for(var s of n(e))h.call(e,s)&&a(t,s,e[s]);return t},i=(t,e)=>f(t,_(e));import{e as p}from"./index.0f8634bc.js";import{C as v}from"./Blur.8490ecd2.js";import{C as $}from"./Card.5e3c0ad5.js";import{C as y}from"./ProBadge.7c0de2f7.js";import{C}from"./SettingsRow.eb71f07b.js";import{C as S}from"./Index.92c3733f.js";import{n as d}from"./vueComponentNormalizer.87056a83.js";import"./Tooltip.674a9fb4.js";import"./client.93f15631.js";import"./index.02c35f2a.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";import"./Index.6d59ffe7.js";const E={data(){return{roles:[{label:"Administrator",name:"administrator",description:this.$t.sprintf("By default Admins have access to %1$sall SEO site settings%2$s","<strong>","</strong>")},{label:"Editor",name:"editor",description:this.$t.sprintf("By default Editors have access to %1$sSEO settings for General Settings, Search Appearance and Social Networks, as well as all settings for individual pages and posts.%2$s","<strong>","</strong>")},{label:"Author",name:"author",description:this.$t.sprintf("By default Authors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s","<strong>","</strong>")},{label:"Contributor",name:"contributor",description:this.$t.sprintf("By default Contributors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s","<strong>","</strong>")},{label:"SEO Manager",name:"seoManager",description:this.$t.sprintf("By default SEO Managers have access to %1$sSEO settings for General Settings, Redirections, and individual pages and posts.%2$s","<strong>","</strong>")},{label:"SEO Editor",name:"seoEditor",description:this.$t.sprintf("By default SEO Editors have access to %1$sSEO settings for individual pages and posts.%2$s","<strong>","</strong>")}],strings:{tooltip:this.$t.sprintf("By default, only users with an Administrator role have permission to manage %1$s within your WordPress admin area. With Access Controls, though, you can easily extend specific access permissions to other user roles.","All in One SEO"),accessControl:"Access Control Settings",useDefaultSettings:"Use Default Settings"}}},computed:i(o({},p(["settings"])),{getRoles(){return this.roles.concat(Object.keys(this.$aioseo.user.customRoles).map(t=>({label:this.$aioseo.user.roles[t],name:t,description:this.$t.sprintf("By default the %1$s role %2$shas no access%3$s to %4$s settings.",this.$aioseo.user.roles[t],"<strong>","</strong>","All in One SEO"),dynamic:!0})))}})};var A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-access-control-lite"},[s("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.accessControl)+" "),s("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[s("core-blur",[t._l(t.getRoles,function(r){return[s("core-settings-row",{key:r.name,attrs:{name:r.label},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"toggle"},[s("base-toggle",{attrs:{disabled:!0,value:!0}},[t._v(" "+t._s(t.strings.useDefaultSettings)+" ")])],1)]},proxy:!0}],null,!0)})]})],2),s("cta",{attrs:{"feature-list":[t.strings.granularControl,t.strings.wpRoles,t.strings.seoManagerRole,t.strings.seoEditorRole],"cta-link":t.$links.getPricingUrl("access-control","access-control-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("access-control",null,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])})],1)],1)},x=[];const O={components:{CoreBlur:v,CoreCard:$,CoreProBadge:y,CoreSettingsRow:C,Cta:S},mixins:[E],data(){return{strings:{wpRoles:"WP Roles (Editor, Author)",seoManagerRole:"SEO Manager Role",seoEditorRole:"SEO Editor Role",defaultSettings:"Default settings that just work",granularControl:"Granular controls per role",ctaButtonText:"Upgrade to Pro and Unlock Access Control",ctaHeader:this.$t.sprintf("Access Control is only available for licensed %1$s %2$s users.","AIOSEO","Pro")}}}},l={};var b=d(O,A,x,!1,R,null,null,null);function R(t){for(let e in l)this[e]=l[e]}var c=function(){return b.exports}(),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-access-control"},[t.isUnlicensed?t._e():s("access-control"),t.isUnlicensed?s("access-control-lite"):t._e()],1)},B=[];const U={components:{AccessControl:c,AccessControlLite:c},computed:o({},p(["isUnlicensed"]))},u={};var w=d(U,k,B,!1,M,null,null,null);function M(t){for(let e in u)this[e]=u[e]}var Q=function(){return w.exports}();export{Q as default};
