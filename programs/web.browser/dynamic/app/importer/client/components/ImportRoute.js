function module(e,t,l){let n,r,a,o,u,i,m;function c(e){let{page:t}=e;const l=r("run-import");return l?"history"===t?n.createElement(o,null):"new"===t?n.createElement(u,null):"prepare"===t?n.createElement(i,null):"progress"===t?n.createElement(m,null):null:n.createElement(a,null)}l.link("react",{default(e){n=e}},0),l.link("../../../../client/contexts/AuthorizationContext",{usePermission(e){r=e}},1),l.link("../../../ui-admin/client/components/NotAuthorizedPage",{default(e){a=e}},2),l.link("./ImportHistoryPage",{default(e){o=e}},3),l.link("./NewImportPage",{default(e){u=e}},4),l.link("./PrepareImportPage",{default(e){i=e}},5),l.link("./ImportProgressPage",{default(e){m=e}},6),l.exportDefault(c)}

