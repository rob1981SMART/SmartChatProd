function module(e,l,t){var n,r,a,u,c,i,o,m,s,E,f,p,d;function C(e){var l=e.type,t=e._updatedAt,r=e.status,C=e.file,g=e.user,k=e.small,S=e.count,v=(S=void 0===S?{users:null,channels:null,messages:null,total:null}:S).users,h=void 0===v?0:v,x=S.channels,I=void 0===x?0:x,_=S.messages,b=void 0===_?0:_,R=S.total,T=void 0===R?0:R,F=e.valid,w=i(),y=m(),A=c((function(){if(!C)return"";var e=C,l="_"+g+"_",t=e.indexOf(l);return t>=0?e.slice(t+l.length):e}),[C,g]),P=c((function(){return F&&[d.USER_SELECTION].concat(n(s),n(E),n(f)).includes(r)}),[F,r]),D=c((function(){return F&&p.includes(r)}),[F,r]),O=o("admin-import-prepare"),L=o("admin-import-progress"),M,N,U=P||D?{tabIndex:0,role:"link",action:!0,onClick:function(){P?O.push():D&&L.push()}}:{};return u.createElement(a.Row,U,u.createElement(a.Cell,null,l),u.createElement(a.Cell,null,y(t)),!k&&u.createElement(u.Fragment,null,u.createElement(a.Cell,null,r&&w(r.replace("importer_","importer_status_"))),u.createElement(a.Cell,null,A),u.createElement(a.Cell,{align:"center"},h),u.createElement(a.Cell,{align:"center"},I),u.createElement(a.Cell,{align:"center"},b),u.createElement(a.Cell,{align:"center"},T)))}function g(e){var l=e.small;return u.createElement(a.Row,null,u.createElement(a.Cell,null,u.createElement(r,null)),u.createElement(a.Cell,null,u.createElement(r,null)),!l&&u.createElement(u.Fragment,null,u.createElement(a.Cell,null,u.createElement(r,null)),u.createElement(a.Cell,null,u.createElement(r,null)),u.createElement(a.Cell,null,u.createElement(r,null)),u.createElement(a.Cell,null,u.createElement(r,null)),u.createElement(a.Cell,null,u.createElement(r,null)),u.createElement(a.Cell,null,u.createElement(r,null))))}t.link("@babel/runtime/helpers/toConsumableArray",{default:function(e){n=e}},0),t.link("@rocket.chat/fuselage",{Skeleton:function(e){r=e},Table:function(e){a=e}},0),t.link("react",{default:function(e){u=e},useMemo:function(e){c=e}},1),t.link("../../../../client/contexts/TranslationContext",{useTranslation:function(e){i=e}},2),t.link("../../../../client/contexts/RouterContext",{useRoute:function(e){o=e}},3),t.link("../../../ui/client/views/app/components/hooks",{useFormatDateAndTime:function(e){m=e}},4),t.link("../../lib/ImporterProgressStep",{ImportWaitingStates:function(e){s=e},ImportFileReadyStates:function(e){E=e},ImportPreparingStartedStates:function(e){f=e},ImportingStartedStates:function(e){p=e},ProgressStep:function(e){d=e}},5),C.Skeleton=g,t.exportDefault(C)}

