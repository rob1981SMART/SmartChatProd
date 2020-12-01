function module(t,n,e){var i,u,o,l,a,c,r,s,g,p,f,S,d,k,I,m,h,E,C,b,v,x,y,w,R,M,T,P,A,B,V,F,J,L;e.link("@babel/runtime/helpers/slicedToArray",{default:function(t){i=t}},0),e.link("@babel/runtime/helpers/extends",{default:function(t){u=t}},1),e.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(t){o=t}},2),e.export({MemoizedSetting:function(){return N},Setting:function(){return O},SettingSkeleton:function(){return U}}),e.link("@rocket.chat/fuselage",{Callout:function(t){l=t},Field:function(t){a=t},Flex:function(t){c=t},InputBox:function(t){r=t},Margins:function(t){s=t},Skeleton:function(t){g=t}},0),e.link("react",{default:function(t){p=t},memo:function(t){f=t},useEffect:function(t){S=t},useMemo:function(t){d=t},useState:function(t){k=t},useCallback:function(t){I=t}},1),e.link("../../../../../client/components/basic/MarkdownText",{MarkdownText:function(t){m=t}},2),e.link("../../../../../client/components/basic/RawText",{RawText:function(t){h=t}},3),e.link("../../../../../client/contexts/TranslationContext",{useTranslation:function(t){E=t}},4),e.link("./inputs/GenericSettingInput",{GenericSettingInput:function(t){C=t}},5),e.link("./inputs/BooleanSettingInput",{BooleanSettingInput:function(t){b=t}},6),e.link("./inputs/StringSettingInput",{StringSettingInput:function(t){v=t}},7),e.link("./inputs/RelativeUrlSettingInput",{RelativeUrlSettingInput:function(t){x=t}},8),e.link("./inputs/PasswordSettingInput",{PasswordSettingInput:function(t){y=t}},9),e.link("./inputs/IntSettingInput",{IntSettingInput:function(t){w=t}},10),e.link("./inputs/SelectSettingInput",{SelectSettingInput:function(t){R=t}},11),e.link("./inputs/MultiSelectSettingInput",{MultiSelectSettingInput:function(t){M=t}},12),e.link("./inputs/LanguageSettingInput",{LanguageSettingInput:function(t){T=t}},13),e.link("./inputs/ColorSettingInput",{ColorSettingInput:function(t){P=t}},14),e.link("./inputs/FontSettingInput",{FontSettingInput:function(t){A=t}},15),e.link("./inputs/CodeSettingInput",{CodeSettingInput:function(t){B=t}},16),e.link("./inputs/ActionSettingInput",{ActionSettingInput:function(t){V=t}},17),e.link("./inputs/AssetSettingInput",{AssetSettingInput:function(t){F=t}},18),e.link("./inputs/RoomPickSettingInput",{RoomPickSettingInput:function(t){J=t}},19),e.link("./SettingsState",{useSetting:function(t){L=t}},20);var N=f(function(){function t(t){var n=t.type,e=t.hint,i=t.callout,c=t.value,r=t.editor,g=t.onChangeValue,f=void 0===g?function(){}:g,S=t.onChangeEditor,d=void 0===S?function(){}:S,k=o(t,["type","hint","callout","value","editor","onChangeValue","onChangeEditor"]),I={boolean:b,string:v,relativeUrl:x,password:y,int:w,select:R,multiSelect:M,language:T,color:P,font:A,code:B,action:V,asset:F,roomPick:J}[n]||C;return p.createElement(a,null,p.createElement(I,u({value:c,editor:r,onChangeValue:f,onChangeEditor:d},k)),e&&p.createElement(a.Hint,null,e),i&&p.createElement(s,{block:"x16"},p.createElement(l,{type:"warning"},i)))}return t}());function O(t){var n=t.settingId,e=t.sectionChanged,l=L(n),a=l.value,c=l.editor,r=l.packageEditor,s=l.update,g=l.reset,f=o(l,["value","editor","packageEditor","update","reset"]),C=E(),b=k(a),v=i(b,2),x=v[0],y=v[1],w=k(c),R=i(w,2),M=R[0],T=R[1];S((function(){y(a)}),[a]),S((function(){T(c)}),[c]);var P=I((function(t){y(t),s({value:t})}),[s]),A=I((function(t){T(t),s({editor:t})}),[s]),B=I((function(){y(a),T(c),g()}),[a,c,g]),V=f._id,F=f.disabled,J=f.disableReset,O=f.readonly,U=f.type,z=f.packageValue,G=f.i18nLabel,j=f.i18nDescription,D=f.alert,H=G&&C(G)||V||C(V),W=d((function(){return C.has(j)&&p.createElement(m,null,C(j))}),[j]),_=d((function(){return D&&p.createElement(h,null,C(D))}),[D]),q=!(J||O||"asset"===U||JSON.stringify(r)===JSON.stringify(M)&&JSON.stringify(x)===JSON.stringify(z)||F);return p.createElement(N,u({type:U,label:H,hint:W,callout:_,sectionChanged:e},f,{value:x,editor:M,hasResetButton:q,onChangeValue:P,onChangeEditor:A,onResetButtonClick:B}))}function U(){return p.createElement(a,null,p.createElement(c.Item,{align:"stretch"},p.createElement(a.Label,null,p.createElement(g,{width:"25%"}))),p.createElement(a.Row,null,p.createElement(r.Skeleton,null)))}O.Memoized=N,O.Skeleton=U}

