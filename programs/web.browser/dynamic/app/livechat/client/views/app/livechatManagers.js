function module(e,t,a){let n,s,r,i,l,o,c,g,u,m;a.link("meteor/meteor",{Meteor(e){n=e}},0),a.link("meteor/templating",{Template(e){s=e}},1),a.link("meteor/reactive-var",{ReactiveVar(e){r=e}},2),a.link("meteor/reactive-dict",{ReactiveDict(e){i=e}},3),a.link("underscore",{default(e){l=e}},4),a.link("../../../../ui-utils",{modal(e){o=e},call(e){c=e}},5),a.link("../../../../utils",{t(e){g=e},handleError(e){u=e}},6),a.link("../../../../utils/client",{APIClient(e){m=e}},7),a.link("./livechatManagers.html");const h=50,d=500,f=e=>e.username;s.livechatManagers.helpers({exceptionsManagers(){const{selectedManagers:e}=s.instance();return s.instance().managers.get().map(f).concat(e.get().map(f))},deleteLastManager(){const e=s.instance();return()=>{const t=e.selectedManagers.curValue;t.pop(),e.selectedManagers.set(t)}},isLoading:()=>s.instance().state.get("loading"),managers:()=>s.instance().managers.get(),emailAddress(){if(this.emails&&this.emails.length>0)return this.emails[0].address},managerModifier:()=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const a=e.get();return"@".concat(0===a.length?t:t.replace(new RegExp(e.get()),e=>"<strong>".concat(e,"</strong>")))}),onSelectManagers:()=>s.instance().onSelectManagers,selectedManagers:()=>s.instance().selectedManagers.get(),onClickTagManagers:()=>s.instance().onClickTagManagers,onTableScroll(){const e=s.instance();return function(t){if(t.offsetHeight+t.scrollTop<t.scrollHeight-100)return;const a=e.managers.get();e.total.get()>a.length&&e.offset.set(e.offset.get()+50)}}}),s.livechatManagers.events({"click .remove-manager"(e,t){e.preventDefault(),o.open({title:g("Are_you_sure"),type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:g("Yes"),cancelButtonText:g("Cancel"),closeOnConfirm:!1,html:!1},()=>{n.call("livechat:removeManager",this.username,(function(e){if(e)return u(e);t.loadManagers(t.filter.get(),0),o.open({title:g("Removed"),text:g("Manager_removed"),type:"success",timer:1e3,showConfirmButton:!1})}))})},async"submit #form-manager"(e,t){e.preventDefault();const{selectedManagers:a,state:n}=t,s=a.get();if(s.length){n.set("loading",!0);try{await Promise.all(s.map(e=>{let{username:t}=e;return c("livechat:addManager",t)})),a.set([])}finally{n.set("loading",!1),t.loadManagers(t.filter.get(),0)}}},"keydown #managers-filter"(e){13===e.which&&(e.stopPropagation(),e.preventDefault())},"keyup #managers-filter":l.debounce((e,t)=>{e.stopPropagation(),e.preventDefault(),t.filter.set(e.currentTarget.value),t.offset.set(0)},500)}),s.livechatManagers.onCreated((function(){const e=this;this.offset=new r(0),this.filter=new r(""),this.state=new i({loading:!1}),this.total=new r(0),this.managers=new r([]),this.selectedManagers=new r([]),this.onSelectManagers=e=>{let{item:t}=e;this.selectedManagers.set([...this.selectedManagers.curValue,t])},this.onClickTagManagers=e=>{let{username:t}=e;this.selectedManagers.set(this.selectedManagers.curValue.filter(e=>e.username!==t))},this.loadManagers=l.debounce(async(e,t)=>{this.state.set("loading",!0);let a="livechat/users/manager?count=".concat(50,"&offset=").concat(t);e&&(a+="&text=".concat(encodeURIComponent(e)));const{users:n,total:s}=await m.v1.get(a);this.total.set(s),0===t?this.managers.set(n):this.managers.set(this.managers.get().concat(n)),this.state.set("loading",!1)},500),this.autorun(async()=>{const t=e.filter.get(),a=e.offset.get();return this.loadManagers(t,a)})}))}

