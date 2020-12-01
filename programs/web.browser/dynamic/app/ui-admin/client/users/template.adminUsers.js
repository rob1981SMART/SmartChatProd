function module(){Template.__checkName("adminUsers"),Template.adminUsers=new Template("Template.adminUsers",(function(){var t=this;return HTML.DIV({class:"main-content-flex"},"\n\t\t",HTML.SECTION({class:"page-container page-list flex-tab-main-content"},"\n\t\t\t",Blaze._TemplateWith((function(){return{sectionName:Spacebars.call("Users")}}),(function(){return Spacebars.include(t.lookupTemplate("header"))})),"\n\t\t\t",HTML.DIV({class:"content"},"\n\t\t\t\t",Blaze.Unless((function(){return Spacebars.dataMustache(t.lookup("hasPermission"),"view-user-administration")}),(function(){return["\n\t\t\t\t\t",HTML.P(Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"You_are_not_authorized_to_view_this_page")}))),"\n\t\t\t\t"]}),(function(){return["\n\t\t\t\t\t",HTML.FORM({class:"search-form",role:"form"},"\n\t\t\t\t\t\t",HTML.DIV({class:"rc-input__wrapper"},"\n\t\t\t\t\t\t\t",HTML.DIV({class:"rc-input__icon"},"\n\t\t\t\t\t\t\t\t",Blaze.If((function(){return Spacebars.call(t.lookup("isReady"))}),(function(){return["\n\t\t\t\t\t\t\t\t\t",Blaze._TemplateWith((function(){return{block:Spacebars.call("rc-input__icon-svg"),icon:Spacebars.call("magnifier")}}),(function(){return Spacebars.include(t.lookupTemplate("icon"))})),"\n\t\t\t\t\t\t\t\t"]}),(function(){return["\n\t\t\t\t\t\t\t\t\t",Spacebars.include(t.lookupTemplate("loading")),"\n\t\t\t\t\t\t\t\t"]})),"\n\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t",HTML.INPUT({id:"users-filter",type:"text",class:"rc-input__element",placeholder:function(){return Spacebars.mustache(t.lookup("_"),"Search")},autofocus:"",dir:"auto"}),"\n\t\t\t\t\t \t"),"\n\t\t\t\t\t"),"\n\t\t\t\t\t",HTML.DIV({class:"results"},"\n\t\t\t\t\t\t",Blaze.View("lookup:_",(function(){return Spacebars.makeRaw(Spacebars.mustache(t.lookup("_"),"Showing_results",Spacebars.dot(t.lookup("users"),"length")))})),"\n\t\t\t\t\t"),"\n\t\t\t\t\t",Blaze._TemplateWith((function(){return{fixed:Spacebars.call("true"),onItemClick:Spacebars.call(t.lookup("onTableItemClick")),onScroll:Spacebars.call(t.lookup("onTableScroll")),onResize:Spacebars.call(t.lookup("onTableResize"))}}),(function(){return Spacebars.include(t.lookupTemplate("table"),(function(){return["\n\t\t\t\t\t\t",HTML.THEAD("\n\t\t\t\t\t\t\t",HTML.TR("\n\t\t\t\t\t\t\t\t",HTML.TH({width:"34%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"table-fake-th"},Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"Name")}))),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TH({width:"33%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"table-fake-th"},Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"Username")}))),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TH({width:"33%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"table-fake-th"},Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"Email")}))),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TH({width:"33%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"table-fake-th"},Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"Roles")}))),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TH({width:"33%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"table-fake-th"},Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"Status")}))),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t"),"\n\t\t\t\t\t\t",HTML.TBODY("\n\t\t\t\t\t\t\t",Blaze.Each((function(){return Spacebars.call(t.lookup("users"))}),(function(){return["\n\t\t\t\t\t\t\t",HTML.TR({class:"user-info"},"\n\t\t\t\t\t\t\t\t",HTML.TD({width:"30%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-wrapper"},"\n\t\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-avatar"},"\n\t\t\t\t\t\t\t\t\t\t\t",Blaze._TemplateWith((function(){return{username:Spacebars.call(t.lookup("username"))}}),(function(){return Spacebars.include(t.lookupTemplate("avatar"))})),"\n\t\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-info"},"\n\t\t\t\t\t\t\t\t\t\t\t",HTML.SPAN({class:"rc-table-title"},Blaze.View("lookup:name",(function(){return Spacebars.mustache(t.lookup("name"))}))),"\n\t\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TD({width:"20%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-wrapper"},"\n\t\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-info"},"\n\t\t\t\t\t\t\t\t\t\t\t",HTML.SPAN({class:"rc-table-title"},Blaze.View("lookup:username",(function(){return Spacebars.mustache(t.lookup("username"))}))),"\n\t\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TD({width:"20%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-wrapper"},"\n\t\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-info"},"\n\t\t\t\t\t\t\t\t\t\t\t",HTML.SPAN({class:"rc-table-title"},Blaze.View("lookup:emailAddress",(function(){return Spacebars.mustache(t.lookup("emailAddress"))}))),"\n\t\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TD({width:"10%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-wrapper"},"\n\t\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-info"},"\n\t\t\t\t\t\t\t\t\t\t\t",HTML.SPAN({class:"rc-table-title"},Blaze.View("lookup:roles",(function(){return Spacebars.mustache(t.lookup("roles"))}))),"\n\t\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t\t",HTML.TD({width:"20%"},"\n\t\t\t\t\t\t\t\t\t",HTML.DIV({class:"rc-table-wrapper"},Blaze.If((function(){return Spacebars.dataMustache(t.lookup("$not"),t.lookup("active"))}),(function(){return Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"deactivated")}))}),(function(){return Blaze.View("lookup:status",(function(){return Spacebars.mustache(t.lookup("status"))}))}))),"\n\t\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t"]}),(function(){return[" ",Spacebars.With((function(){return Spacebars.call(t.lookup("searchText"))}),(function(){return["\n\t\t\t\t\t\t\t",HTML.TR({class:"table-no-click"},"\n\t\t\t\t\t\t\t\t",HTML.TD(Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"No_results_found_for")}))," ",Blaze.View("lookup:.",(function(){return Spacebars.mustache(t.lookup("."))}))),"\n\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t"]}))," "]}))," ",Blaze.Unless((function(){return Spacebars.call(t.lookup("isReady"))}),(function(){return["\n\t\t\t\t\t\t\t",HTML.TR({class:"table-no-click"},"\n\t\t\t\t\t\t\t\t",HTML.TD({class:"table-loading-td",colspan:function(){return Blaze.If((function(){return Spacebars.call(t.lookup("showLastMessage"))}),(function(){return"5"}),(function(){return"4"}))}},Spacebars.include(t.lookupTemplate("loading"))),"\n\t\t\t\t\t\t\t"),"\n\t\t\t\t\t\t\t"]})),"\n\t\t\t\t\t\t"),"\n\t\t\t\t\t"]}))})),"\n\t\t\t\t"]})),"\n\t\t\t"),"\n\t\t"),"\n\t\t",Spacebars.With((function(){return Spacebars.call(t.lookup("flexData"))}),(function(){return["\n\t\t\t",Spacebars.include(t.lookupTemplate("flexTabBar")),"\n\t\t"]})),"\n\t")}))}

