(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(2),r=n.n(o),a=n(12),i=n.n(a),s=(n(23),n(13)),l=n(14),u=n(17),h=n(16),d=(n(24),n(15)),p=n.n(d),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={response:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/v1/wellhello").then((function(t){var n=t.data;e.setState({response:n})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Hello from the frontend!"}),Object(c.jsx)("h1",{children:this.state.response.body})]})}}]),n}(o.Component),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),j()}},[[42,1,2]]]);
//# sourceMappingURL=main.ea6287ae.chunk.js.map