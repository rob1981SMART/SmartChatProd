function module(e,n,t){var a,u,o,i,r,c;function f(){r();var e=o("engagement-dashboard"),n=i("tab");return u((function(){n||e.replace({tab:"users"})}),[e,n]),a.createElement(c,{tab:n,onSelectTab:function(n){return e.push({tab:n})}})}t.export({EngagementDashboardRoute:function(){return f}}),t.link("react",{default:function(e){a=e},useEffect:function(e){u=e}},0),t.link("../../../../../client/contexts/RouterContext",{useRoute:function(e){o=e},useRouteParameter:function(e){i=e}},1),t.link("../../../../../app/ui-admin/client/hooks/useAdminSideNav",{useAdminSideNav:function(e){r=e}},2),t.link("./EngagementDashboardPage",{EngagementDashboardPage:function(e){c=e}},3),t.exportDefault(f)}

