(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(7),i=n.n(a),o=(n(12),n(3)),u=n(2);n(13);var l=n(1),x=null,y=function(){var t=Object(c.useState)(!0),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),i=Object(u.a)(a,2),y=i[0],f=i[1],s=Object(c.useState)([]),b=Object(u.a)(s,2),j=b[0],h=b[1],d=Object(c.useState)([]),O=Object(u.a)(d,2),v=O[0],p=O[1],g=Object(c.useState)(!1),k=Object(u.a)(g,2),S=k[0],M=k[1],P=Object(c.useState)(!1),E=Object(u.a)(P,2),C=E[0],m=E[1],w=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t,e=w.current;e&&(x=e.getContext("2d"),C||null===(t=x)||void 0===t||t.clearRect(0,0,e.width,e.height));0!==y.length&&void 0!==y[0]&&(y.forEach((function(t){var e=t.x1,n=t.y1,c=t.x2,r=t.y2;x&&(x.beginPath(),x.lineWidth=3,x.moveTo(e,n),x.lineTo(c,r),x.stroke())})),j.forEach((function(t){x&&(x.strokeStyle="black",x.beginPath(),x.fillStyle="red",x.arc(t.x,t.y,5,0,2*Math.PI,!0),x.fill("evenodd"))})),v.forEach((function(t){x&&(x.strokeStyle="black",x.beginPath(),x.fillStyle="red",x.arc(t.x,t.y,5,0,2*Math.PI,!0),x.fill("evenodd"))})))}),[y,C]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("canvas",{style:{border:"1px solid red"},width:"800px",height:"500px",onClick:function(t){if(r((function(t){return!t})),n){var e=t.clientX,c=t.clientY;f((function(t){return[].concat(Object(o.a)(t),[{x1:e,y1:c,x2:e,y2:c}])})),M(!0)}else p((function(t){return[].concat(Object(o.a)(t),Object(o.a)(j))})),M(!1)},onContextMenu:function(t){t.preventDefault(),n||(y.pop(),f((function(t){return Object(o.a)(t)})),h([]),void 0===y[0]&&f([]),M(!1),r((function(t){return!t})))},onMouseMove:function(t){if(S){var e=t.clientX,n=t.clientY,c=y.length-1,r=y[c],a=r.x1,i=r.y1;if(0!==y.length&&void 0!==y[0]){var u=[];y.forEach((function(t){var c=t.x1,r=t.y1,o=t.x2,l=t.y2;if(a!==c){var y=function(t,e,n,c){var r=e.x-t.x,a=e.y-t.y,i=r*(c.y-n.y)-(c.x-n.x)*a;if(0===i)return null;var o=((c.y-n.y)*(c.x-t.x)+(n.x-c.x)*(c.y-t.y))/i,u=((t.y-e.y)*(c.x-t.x)+r*(c.y-t.y))/i;return o>=0&&o<=1&&u>=0&&u<=1?{x:t.x+o*r,y:t.y+o*a}:null}({x:a,y:i},{x:e,y:n},{x:c,y:r},{x:o,y:l});y&&(x&&(x.beginPath(),x.arc(y.x,y.y,5,0,2*Math.PI,!0),x.fill()),u.push({x:y.x,y:y.y}))}})),h(u)}var l=Object(o.a)(y);l[c]={x1:a,y1:i,x2:e,y2:n},f(l)}},ref:w}),Object(l.jsx)("button",{onClick:function(){return m(!0)},children:"Collapse lines"})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bc920a4d.chunk.js.map