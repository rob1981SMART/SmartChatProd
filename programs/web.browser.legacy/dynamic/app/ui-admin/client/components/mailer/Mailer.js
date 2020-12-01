function module(e,n,t){var l,r,a,u,i,c,o,m,d,f,s,E,v,b,g,y,h;function p(e){var n=e.sendMail,t=void 0===n?function(){}:n,p=a(e,["sendMail"]),T=b(),k=i({value:"",error:!1}),x=r(k,2),_=x[0],C=x[1],S=i(!1),w=r(S,2),R=w[0],j=w[1],L=i({value:"",error:!1}),M=r(L,2),B=M[0],H=M[1],I=i(""),F=r(I,2),D=F[0],P=F[1],q=i(""),A=r(q,2),G=A[0],J=A[1];return u.createElement(g,l({_id:"mailer"},p),u.createElement(g.Header,{title:T("Mailer")}),u.createElement(g.ContentShadowScroll,{alignSelf:"center",w:"100%",display:"flex",flexDirection:"column",alignItems:"center"},u.createElement(d,{maxWidth:"x600",is:"form",method:"post"},u.createElement(m,null,u.createElement(m.Label,null,T("From")),u.createElement(m.Row,null,u.createElement(c,{id:"fromEmail",placeholder:T("Type_your_email"),value:_.value,error:_.error,onChange:function(e){C({value:e.currentTarget.value,error:!y(e.currentTarget.value)})}}))),u.createElement(m,null,u.createElement(m.Row,null,u.createElement(f,{id:"dryRun",checked:R,onChange:function(){return j(!R)}}),u.createElement(m.Label,{htmlFor:"dry-run"},T("Dry_run"))),u.createElement(m.Hint,null,T("Dry_run_description"))),u.createElement(m,null,u.createElement(m.Label,null,T("Query")),u.createElement(m.Row,null,u.createElement(c,{id:"query",value:B.value,error:B.error,onChange:function(e){H({value:e.currentTarget.value,error:e.currentTarget.value&&!h(e.currentTarget.value)})}})),u.createElement(m.Hint,null,T("Query_description"))),u.createElement(m,null,u.createElement(m.Label,null,T("Subject")),u.createElement(m.Row,null,u.createElement(c,{id:"subject",value:D.value,error:D.error,onChange:function(e){P(e.currentTarget.value)}}))),u.createElement(m,null,u.createElement(m.Label,null,T("Email_body")),u.createElement(m.Row,null,u.createElement(o,{id:"emailBody",rows:10,value:G,onChange:function(e){return J(e.currentTarget.value)}})),u.createElement(m.Hint,{dangerouslySetInnerHTML:{__html:T("Mailer_body_tags")}})),u.createElement(v,{align:"end"},u.createElement(s,{primary:!0,onClick:function(){t({fromEmail:_,dryRun:R,query:B,subject:D,emailBody:G})}},u.createElement(E,{name:"send",size:"x20",mie:"x8"}),T("Send_email"))))))}t.link("@babel/runtime/helpers/extends",{default:function(e){l=e}},0),t.link("@babel/runtime/helpers/slicedToArray",{default:function(e){r=e}},1),t.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(e){a=e}},2),t.export({Mailer:function(){return p}}),t.link("react",{default:function(e){u=e},useState:function(e){i=e}},0),t.link("@rocket.chat/fuselage",{TextInput:function(e){c=e},TextAreaInput:function(e){o=e},Field:function(e){m=e},FieldGroup:function(e){d=e},CheckBox:function(e){f=e},Button:function(e){s=e},Icon:function(e){E=e},ButtonGroup:function(e){v=e}},1),t.link("../../../../../client/contexts/TranslationContext",{useTranslation:function(e){b=e}},2),t.link("../../../../../client/components/basic/Page",{Page:function(e){g=e}},3),t.link("../../../../utils/lib/isEmail.js",{isEmail:function(e){y=e}},4),t.link("../../../../utils/lib/isJSON.js",{isJSON:function(e){h=e}},5)}

