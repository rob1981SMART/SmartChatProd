function module(t,e,a){var n;function g(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;if(t){var g=new Date(a.getFullYear(),a.getMonth(),a.getDate()-1),o=new Date(a.getFullYear(),a.getMonth(),a.getDate()),r=t.getFullYear()>=o.getFullYear()&&t.getMonth()>=o.getMonth()&&t.getDate()>=o.getDate(),l=t.getFullYear()>=g.getFullYear()&&t.getMonth()>=g.getMonth()&&t.getDate()>=g.getDate(),u=r&&n(t).format("LT"),D=l&&e("yesterday"),Y=n(t).format("MMM D, YYYY");return u||D||Y}}a.export({timeAgo:function(){return g}}),a.link("moment",{default:function(t){n=t}},0)}

