function module(e,t,n){var r,i,s,a,o,u,f,c,l,d,g;n.link("@babel/runtime/helpers/objectSpread2",{default:function(e){r=e}},0),n.link("@babel/runtime/regenerator",{default:function(e){i=e}},1),n.link("meteor/reactive-var",{ReactiveVar:function(e){s=e}},0),n.link("meteor/tracker",{Tracker:function(e){a=e}},1),n.link("meteor/kadira:flow-router",{FlowRouter:function(e){o=e}},2),n.link("meteor/templating",{Template:function(e){u=e}},3),n.link("underscore",{default:function(e){f=e}},4),n.link("../../../ui-utils",{SideNav:function(e){c=e},TabBar:function(e){l=e},RocketChatTabBar:function(e){d=e}},5),n.link("../../../utils/client",{APIClient:function(e){g=e}},6);var p=50;u.adminUsers.helpers({searchText:function(){var e=u.instance();return e.filter&&e.filter.get()},isReady:function(){var e=u.instance();return e.ready&&e.ready.get()},users:function(){return u.instance().users.get()},isLoading:function(){var e=u.instance();if(!e.ready||!e.ready.get())return"btn-loading"},hasMore:function(){var e=u.instance(),t=e.users();if(e.offset&&e.offset.get()&&t&&t.length)return e.offset.get()===t.length},emailAddress:function(){return f.map(this.emails,(function(e){return e.address})).join(", ")},flexData:function(){return{tabBar:u.instance().tabBar,data:u.instance().tabBarData.get()}},onTableScroll:function(){var e=u.instance();return function(t){if(t.offsetHeight+t.scrollTop>=t.scrollHeight-100)return e.offset.set(e.offset.get()+p)}}}),u.adminUsers.onCreated((function(){var e=this,t=this;this.offset=new s(0),this.filter=new s(""),this.ready=new s(!0),this.tabBar=new d,this.tabBar.showGroup(o.current().route.name),this.tabBarData=new s,this.users=new s([]),l.addButton({groups:["admin-users"],id:"admin-user-info",i18nTitle:"User_Info",icon:"user",template:"adminUserInfo",order:3}),l.addButton({groups:["admin-users"],id:"invite-user",i18nTitle:"Invite_Users",icon:"send",template:"adminInviteUser",order:1}),l.addButton({groups:["admin-users"],id:"add-user",i18nTitle:"Add_User",icon:"plus",template:"adminUserEdit",order:2}),this.loadUsers=function(){function t(t,n){var r,s,a,o;return i.async(function(){function u(u){for(;;)switch(u.prev=u.next){case 0:return e.ready.set(!1),r={$or:[{"emails.address":{$regex:t,$options:"i"}},{username:{$regex:t,$options:"i"}},{name:{$regex:t,$options:"i"}}]},s="users.list?count="+p+"&offset="+n,t&&(s+="&query="+JSON.stringify(r)),u.next=6,i.awrap(g.v1.get(s));case 6:a=u.sent,o=a.users,0===n?e.users.set(o):e.users.set(e.users.get().concat(o)),e.ready.set(!0);case 10:case"end":return u.stop()}}return u}())}return t}(),this.autorun(function(){function n(){var n,r;return i.async(function(){function i(i){for(;;)switch(i.prev=i.next){case 0:n=t.filter.get(),r=t.offset.get(),e.loadUsers(n,r);case 3:case"end":return i.stop()}}return i}())}return n}())})),u.adminUsers.onRendered((function(){a.afterFlush((function(){c.setFlex("adminFlex"),c.openFlex()}))}));var m=300;u.adminUsers.events({"keydown #users-filter":function(e){13===e.which&&(e.stopPropagation(),e.preventDefault())},"keyup #users-filter":f.debounce((function(e,t){e.stopPropagation(),e.preventDefault(),t.filter.set(e.currentTarget.value),t.offset.set(0)}),300),"click .user-info":function(e,t){var n=this;e.preventDefault(),t.tabBarData.set(r({},t.users.get().find((function(e){return e._id===n._id})),{onChange:function(){var e=t.filter.get(),n=t.offset.get();t.loadUsers(e,n)}})),t.tabBar.open("admin-user-info")},"click .info-tabs button":function(e){e.preventDefault(),$(".info-tabs button").removeClass("active"),$(e.currentTarget).addClass("active"),$(".user-info-content").hide(),$($(e.currentTarget).attr("href")).show()},"click .load-more":function(e,t){e.preventDefault(),e.stopPropagation(),t.offset.set(t.offset.get()+p)}})}

