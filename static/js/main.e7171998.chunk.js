(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t){},123:function(e,t,a){"use strict";a.r(t);a(53);var n=a(0),c=a.n(n),r=a(47),l=a(6),o=a(8),s=a(14),i=a(15),u=a(18),m=a(16),h=a(7),p=a(19),d=a(17),E=a.n(d),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={search:"",results:[]},a.onSearchChange=a.onSearchChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onSearchChange",value:function(e){var t=e.target.value;this.setState({search:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getBooksData(this.state.search)}},{key:"getBooksData",value:function(e){var t=this;E()("".concat("https://prudential-helper.herokuapp.com","/search?q=").concat(e)).then(function(e){return t.setState({results:e.data})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"row"},c.a.createElement("input",{type:"text",placeholder:"Search Books",value:this.state.search,onChange:this.onSearchChange,className:"col-sm-3"}),c.a.createElement("button",{className:"btn btn-primary col-sm-1"},"Search")),c.a.createElement("ul",{className:"list-unstyled"},this.state.results.map(function(e){return c.a.createElement("li",{key:e.key},c.a.createElement(l.b,{to:{pathname:"/books/".concat(e.id),state:e}},e.title))})))}}]),t}(n.Component),v=function(){return c.a.createElement("div",null,c.a.createElement(b,null))},f=a(26),g=a(50),k=a.n(g),w=a(51),S=a.n(w),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state=Object(f.a)({},a.props.location.state,{description:null,showdesc:null}),a.showMore=a.showMore.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getBookDescription()}},{key:"getBookDescription",value:function(){var e=this,t=this.props.match.params.id;E.a.get("".concat("https://prudential-helper.herokuapp.com","/bookdetails/").concat(t)).then(function(t){return e.setState(Object(f.a)({},t.data,{showdesc:t.data.description.length>300?"".concat(t.data.description.slice(0,300)):t.data.description}))}).catch(function(e){return console.error(e)})}},{key:"showMore",value:function(e){e.preventDefault(),this.setState({showdesc:this.state.description})}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.title,n=e.author,r=e.imageSrc,l=e.averageRating,o=e.reviewsCount,s=e.ratingsCount,i=e.description,u=e.showdesc;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-1"},c.a.createElement("img",{src:r,alt:"cover"})),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("h3",null,a),c.a.createElement("h4",null,"By ",n),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-5"},c.a.createElement(S.a,{rating:parseFloat(l)||0,starDimension:"20px",starSpacing:"0px",starRatedColor:"orange"})),c.a.createElement("p",{className:"col-sm-3"},s," ratings"),c.a.createElement("p",{className:"col-sm-3"},o," reviews")),null!==i?c.a.createElement("div",null,c.a.createElement("div",null,k()(u),i.length>300&&i!==u?c.a.createElement("a",{href:"",onClick:this.showMore},"(more)"):null)):c.a.createElement("p",null,"Loading..."))):c.a.createElement("p",null,"Loading ..."))}}]),t}(n.Component),O=function(){return c.a.createElement("header",{className:"row"},c.a.createElement("h1",{className:"col-sm-6 text-center"},"Book Store"),c.a.createElement(l.c,{to:"/"},"Search"))},y=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"404! ",c.a.createElement(l.b,{to:"/"},"Go here")))},N=function(){return c.a.createElement(l.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",component:v,exact:!0}),c.a.createElement(o.a,{path:"/books/:id",component:j}),c.a.createElement(o.a,{component:y}))))};Object(r.render)(c.a.createElement(N,null),document.getElementById("app"))},52:function(e,t,a){e.exports=a(123)}},[[52,1,2]]]);
//# sourceMappingURL=main.e7171998.chunk.js.map