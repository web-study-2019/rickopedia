(this.webpackJsonprickopedia=this.webpackJsonprickopedia||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(31),n(15)),l=n(16),s=n(19),u=n(18),m=(n(32),n(66)),h=n(60),p=n(65),d=n(62),f=n(61),v=n(63),g=(n(33),{Alive:"\ud83d\udc4d",Dead:"\ud83d\udc4e",unknown:"\ud83d\udc4e"}),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(h.a,{container:!0,spacing:4},this.props.items.map((function(e){return o.a.createElement(h.a,{item:!0,xs:12,sm:6,md:4,lg:2},o.a.createElement(m.a,{key:e.id},o.a.createElement(p.a,null,o.a.createElement(f.a,{style:{height:"250px"},image:e.image,title:"Contemplative Reptile"}),o.a.createElement(d.a,null,o.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"personName"},e.name),o.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},g[e.status]," ",e.status)))))})))}}]),n}(o.a.Component),k=n(64),y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={loading:!0,list:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,list:t.results})}))}),1e3)}},{key:"getLoader",value:function(){return o.a.createElement(k.a,null)}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.loading?this.getLoader():o.a.createElement(E,{items:this.state.list}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e7cd8907.chunk.js.map