(this["webpackJsonpfood-recipe-app"]=this["webpackJsonpfood-recipe-app"]||[]).push([[0],{19:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r,c=t(0),a=t.n(c),i=t(10),o=t.n(i),s=(t(19),t(6)),d=t.n(s),b=t(11),u=t(4),p=t(2),l=t(3),j=t(1),h=l.a.div(r||(r=Object(p.a)(["\nwidth: 40%;\nmargin: 0 auto -20px auto;\nmax-width:400px;\nbackground:#f57362;\npadding: 0 2px 0 2px;\ncolor: white;\nfont-size: 1rem;\ntext-align: center;\nborder-radius: 4px;\n"])));var f,m,x,O,g,w,v,k,y=function(e){var n=e.alert;return Object(j.jsx)(h,{children:Object(j.jsx)("p",{children:n})})},S=l.a.section(f||(f=Object(p.a)(["\ntext-align: center;\nfont-size: 1.7em;\nwidth:100%;\n"]))),z=l.a.form(m||(m=Object(p.a)(["\nmargin: 2em auto;\nwidth: 100%;\nmax-width: 400px;\ndisplay: flex;\n"]))),E=l.a.input(x||(x=Object(p.a)(["\nheight: 25px;\nwidth: 100%;\nborder-radius: 4px;\nmargin-right: 0.2rem;\nborder: 3px solid #d1cfcf;\n\n&:focus{\n  border:3px solid #bdbbbb ;\n}\n\n&::-webkit-input-placeholder{\nfont-style: italic;\nfont-size: 0.888rem;\n}\n"]))),M=l.a.button(O||(O=Object(p.a)(["\nwidth:40%;\ncursor: pointer;\nfont-size: 1rem;\nbackground: #f57362;\ncolor: white;\nborder-radius: 4px;\nborder: none;\n\n&:hover{\n  background: #f03e26;\n}\n"]))),C=l.a.div(g||(g=Object(p.a)(["\nwidth: 80%;\nmargin: 2rem auto;\ndisplay: grid;\ngap: 2rem;\ngrid-template-columns: repeat(autofil,minmax(400px,1fr)) ;\n\n\n@media(min-width:760px){\ngrid-template-columns: repeat(2,1fr);\n}\n\n@media(min-width:1200px){\ngrid-template-columns: repeat(3,1fr);\n}\n\n"]))),F=l.a.article(w||(w=Object(p.a)(["\nborder: 3px solid #bdbbbb;\nborder-radius: 4px;\n"]))),J=l.a.img.attrs((function(e){return{src:e.src}}))(v||(v=Object(p.a)(["\nwidth:100%;\nheight:250px;\ndisplay: inline-block;\nobject-fit: cover;\n"]))),A=l.a.div(k||(k=Object(p.a)(["\nwidth:100%;\nletter-spacing: 0.1rem;\nbackground: #f57362 ;\ntext-align: center;\ncolor:white;\nmargin:0 auto;\nfont-size:1.5rem\n"])));var B=function(){var e=Object(c.useState)(void 0),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),o=i[0],s=i[1],p=Object(c.useState)(""),l=Object(u.a)(p,2),h=l[0],f=l[1],m=Object(c.useState)("chicken"),x=Object(u.a)(m,2),O=x[0],g=x[1],w="https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(O),v=function(){var e=Object(b.a)(d.a.mark((function e(n){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.meals),console.log(c.meals);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v(w)}),[O,w]),Object(c.useEffect)((function(){f(t?"":"No Search result")}),[t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(S,{children:[Object(j.jsx)("h1",{children:"Food Recipe App"}),""!==h&&Object(j.jsx)(y,{alert:h}),Object(j.jsxs)(z,{onSubmit:function(e){e.preventDefault(),g(o),s("")},children:[Object(j.jsx)(E,{type:"text",value:o,placeholder:"Eg. beef",autoComplete:"off",onChange:function(e){return s(e.target.value)}}),Object(j.jsx)(M,{type:"submit",children:"Search"})]}),Object(j.jsx)(C,{children:null===t||void 0===t?void 0:t.map((function(e){var n=e.idMeal,t=e.strMeal,r=e.strMealThumb;return Object(j.jsxs)(F,{children:[Object(j.jsx)(J,{src:r}),Object(j.jsx)(A,{children:Object(j.jsx)("p",{children:t})})]},n)}))})]})})};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.46b39efe.chunk.js.map