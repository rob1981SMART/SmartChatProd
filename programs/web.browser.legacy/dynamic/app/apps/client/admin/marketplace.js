function module(e,t,n){var r,a,s,i,o,c,u,p,d,l,f,g,h,v,A,k,m,P,L,x,b;n.link("@babel/runtime/helpers/toConsumableArray",{default:function(e){r=e}},0),n.link("@babel/runtime/regenerator",{default:function(e){a=e}},1),n.link("@babel/runtime/helpers/objectSpread2",{default:function(e){s=e}},2),n.link("meteor/kadira:flow-router",{FlowRouter:function(e){i=e}},0),n.link("meteor/reactive-dict",{ReactiveDict:function(e){o=e}},1),n.link("meteor/templating",{Template:function(e){c=e}},2),n.link("meteor/tracker",{Tracker:function(e){u=e}},3),n.link("../../../ui-utils/client",{SideNav:function(e){p=e},call:function(e){d=e}},4),n.link("../../../utils",{t:function(e){l=e}},5),n.link("../communication",{AppEvents:function(e){f=e}},6),n.link("../orchestrator",{Apps:function(e){g=e}},7),n.link("./helpers",{appButtonProps:function(e){h=e},appStatusSpanProps:function(e){v=e},checkCloudLogin:function(e){A=e},formatPrice:function(e){k=e},formatPricingPlan:function(e){m=e},handleAPIError:function(e){P=e},promptSubscription:function(e){L=e},triggerAppPopoverMenu:function(e){x=e},warnStatusChange:function(e){b=e}},8),n.link("./marketplace.html"),c.marketplace.onCreated((function(){var e=this;this.state=new o({isLoggedInCloud:!0,apps:[],isLoading:!0,searchText:"",sortedColumn:"name",isAscendingOrder:!0,page:0,itemsPerPage:0,wasEndReached:!1}),function(){function t(){var t,n,r;return a.async(function(){function i(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.t0=e.state,i.next=4,a.awrap(d("cloud:checkUserLoggedIn"));case 4:i.t1=i.sent,i.t0.set.call(i.t0,"isLoggedInCloud",i.t1),i.next=11;break;case 8:i.prev=8,i.t2=i.catch(0),P(i.t2);case 11:return i.prev=11,i.next=14,a.awrap(g.getAppsFromMarketplace());case 14:return t=i.sent,i.next=17,a.awrap(g.getApps());case 17:n=i.sent,r=t.map((function(e){var t=n.find((function(t){var n;return t.id===e.id}));return s({},e,t?{installed:!0,status:t.status,version:t.version,marketplaceVersion:e.version}:{status:void 0,marketplaceVersion:e.version})})),e.state.set("apps",r),i.next=25;break;case 22:i.prev=22,i.t3=i.catch(11),P(i.t3);case 25:return i.prev=25,e.state.set("isLoading",!1),i.finish(25);case 28:case"end":return i.stop()}}return i}(),null,null,[[0,8],[11,22,25,28]])}return t}()(),this.startAppWorking=function(t){var n=e.state.get("apps"),r;n.find((function(e){var n;return e.id===t})).working=!0,e.state.set("apps",n)},this.stopAppWorking=function(t){var n=e.state.get("apps"),r;delete n.find((function(e){var n;return e.id===t})).working,e.state.set("apps",n)},this.handleAppAddedOrUpdated=function(){function t(t){var n,i,o,c,u;return a.async(function(){function p(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,p.next=3,a.awrap(g.getApp(t));case 3:return n=p.sent,i=n.status,o=n.version,p.next=8,a.awrap(g.getAppFromMarketplace(t,o));case 8:c=p.sent,u=[].concat(r(e.state.get("apps").filter((function(e){var n;return e.id!==t}))),[s({},c,{installed:!0,status:i,version:o,marketplaceVersion:c.version})]),e.state.set("apps",u),p.next=16;break;case 13:p.prev=13,p.t0=p.catch(0),P(p.t0);case 16:case"end":return p.stop()}}return p}(),null,null,[[0,13]])}return t}(),this.handleAppRemoved=function(t){var n=e.state.get("apps").map((function(e){return e.id===t&&(delete e.installed,delete e.status,e.version=e.marketplaceVersion),e}));e.state.set("apps",n)},this.handleAppStatusChange=function(t){var n=t.appId,r=t.status,a=e.state.get("apps"),s=a.find((function(e){var t;return e.id===n}));s&&(s.status=r,e.state.set("apps",a))},g.getWsListener().registerListener(f.APP_ADDED,this.handleAppAddedOrUpdated),g.getWsListener().registerListener(f.APP_UPDATED,this.handleAppAddedOrUpdated),g.getWsListener().registerListener(f.APP_REMOVED,this.handleAppRemoved),g.getWsListener().registerListener(f.APP_STATUS_CHANGE,this.handleAppStatusChange)})),c.marketplace.onDestroyed((function(){g.getWsListener().unregisterListener(f.APP_ADDED,this.handleAppAddedOrUpdated),g.getWsListener().unregisterListener(f.APP_UPDATED,this.handleAppAddedOrUpdated),g.getWsListener().unregisterListener(f.APP_REMOVED,this.handleAppRemoved),g.getWsListener().unregisterListener(f.APP_STATUS_CHANGE,this.handleAppStatusChange)})),c.marketplace.onRendered((function(){u.afterFlush((function(){p.setFlex("adminFlex"),p.openFlex()}))})),c.marketplace.helpers({isLoggedInCloud:function(){return c.instance().state.get("isLoggedInCloud")},isLoading:function(){return c.instance().state.get("isLoading")},handleTableScroll:function(){var e,t=c.instance().state;if(!t.get("isLoading")&&!t.get("wasEndReached"))return function(e){var n,r,a,s;if(e.offsetHeight+e.scrollTop>=e.scrollHeight-100)return t.set("page",t.get("page")+1)}},handleTableResize:function(){var e,t=c.instance().state;return function(){var e=this.$(".table-scroll");t.set("itemsPerPage",Math.ceil(e.height()/40+5))}},handleTableSort:function(){var e,t=c.instance().state;return function(e){t.set({page:0,wasEndReached:!1}),t.get("sortedColumn")!==e?t.set({sortedColumn:e,isAscendingOrder:!0}):t.set("isAscendingOrder",!t.get("isAscendingOrder"))}},isSortingBy:function(e){return c.instance().state.get("sortedColumn")===e},sortIcon:function(e){var t,n=c.instance().state;return e===n.get("sortedColumn")&&n.get("isAscendingOrder")?"sort-down":"sort-up"},apps:function(){var e,t=c.instance().state,n=t.get("apps"),r=t.get("searchText").toLocaleLowerCase(),a=t.get("sortedColumn"),s,i=t.get("isAscendingOrder")?1:-1;return n.filter((function(e){var t;return e.name.toLocaleLowerCase().includes(r)})).sort((function(e,t){var n=e[a],r=t[a];return i*String(n).localeCompare(String(r))}))},purchaseTypeDisplay:function(e){var t=e.purchaseType,n=e.price;return l("subscription"===t?"Subscription":n>0?"Paid":"Free")},priceDisplay:function(e){var t=e.purchaseType,n=e.pricingPlans,r=e.price;return"subscription"===t?n&&Array.isArray(n)&&0!==n.length?m(n[0]):"-":r>0?k(r):"-"},appButtonProps:h,appStatusSpanProps:v}),c.marketplace.events({"click .js-cloud-login":function(){i.go("cloud")},"submit .js-search-form":function(e){return e.stopPropagation(),!1},"keyup .js-search":function(e,t){t.state.set("searchText",e.currentTarget.value)},"click .js-open":function(e,t){e.stopPropagation();var n=e.currentTarget,r=t.state.get("apps").find((function(e){var t;return e.id===n.dataset.id})),a=r.id,s=r.version,o=r.marketplaceVersion;i.go("marketplace-app",{appId:a},{version:s||o})},"click .js-install, click .js-update":function(){function e(e,t){var n,r,s,i,o;return a.async(function(){function c(c){for(;;)switch(c.prev=c.next){case 0:return e.preventDefault(),e.stopPropagation(),c.next=4,a.awrap(A());case 4:if(n=c.sent,t.state.set("isLoggedInCloud",n),n){c.next=8;break}return c.abrupt("return");case 8:return r=e.currentTarget,s=t.state.get("apps").find((function(e){var t;return e.id===r.dataset.id})),t.startAppWorking(s.id),c.prev=11,c.next=14,a.awrap(g.installApp(s.id,s.marketplaceVersion));case 14:i=c.sent,o=i.status,b(s.name,o),c.next=22;break;case 19:c.prev=19,c.t0=c.catch(11),P(c.t0);case 22:return c.prev=22,t.stopAppWorking(s.id),c.finish(22);case 25:case"end":return c.stop()}}return c}(),null,null,[[11,19,22,25]])}return e}(),"click .js-purchase":function(){function e(e,t){var n,r,s;return a.async(function(){function i(i){for(;;)switch(i.prev=i.next){case 0:return e.preventDefault(),e.stopPropagation(),i.next=4,a.awrap(A());case 4:if(n=i.sent,t.state.set("isLoggedInCloud",n),n){i.next=8;break}return i.abrupt("return");case 8:return r=e.currentTarget,s=t.state.get("apps").find((function(e){var t;return e.id===r.dataset.id})),t.startAppWorking(s.id),i.next=13,a.awrap(L(s,function(){function e(){var e,n;return a.async(function(){function r(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a.awrap(g.installApp(s.id,s.marketplaceVersion));case 3:e=r.sent,n=e.status,b(s.name,n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),P(r.t0);case 11:return r.prev=11,t.stopAppWorking(s.id),r.finish(11);case 14:case"end":return r.stop()}}return r}(),null,null,[[0,8,11,14]])}return e}(),t.stopAppWorking.bind(t,s.id)));case 13:case"end":return i.stop()}}return i}())}return e}(),"click .js-menu":function(e,t){e.stopPropagation();var n=e.currentTarget,r=t.state.get("apps").find((function(e){var t;return e.id===n.dataset.id}));x(r,n,t)}})}

