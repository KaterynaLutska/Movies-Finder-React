(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[3],{39:function(e,t,n){"use strict";var r=n(40),a=n.n(r),c=n(41),i=n(42),s=n.n(i),o="https://api.themoviedb.org/3/",u="68bc44794965f90c41d1f35ad9bb144b",l={getPopularMovie:function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(o,"/trending/all/day?api_key=").concat(u)).then((function(e){return e.data.results})).catch((function(e){return console.error(e.message)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovieByName:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(o,"search/movie?query=").concat(t,"&api_key=").concat(u)).then((function(e){return e.data.results})).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getMovieDetailPage:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(o,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US")).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCast:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(u)).then((function(e){return e.data.cast})).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getReviews:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(u)).then((function(e){return e.data.results})).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=l},90:function(e,t,n){e.exports={MovieDetailsPageWrap:"MovieDetailsPage_MovieDetailsPageWrap__RQ6gV",MovieDetailsPage:"MovieDetailsPage_MovieDetailsPage__2X-Tp",MovieDetailsPageInfo:"MovieDetailsPage_MovieDetailsPageInfo__2c4St",Genre:"MovieDetailsPage_Genre__RzmRM",NavLink:"MovieDetailsPage_NavLink__qyic3"}},91:function(e,t,n){e.exports={Btn:"BtnBack_Btn__3zbky"}},94:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,"default",(function(){return C}));var i=n(40),s=n.n(i),o=n(41),u=n(15),l=n(16),p=n(18),h=n(17),v=n(0),j=n(2),f=n(39),b=n(90),d=n.n(b),O=n(1),m=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.genres,r=e.overview,a=e.poster_path,c=e.release_date,i=e.vote_average;return Object(O.jsx)("div",{className:d.a.MovieDetailsPageWrap,children:Object(O.jsxs)("div",{className:d.a.MovieDetailsPage,children:[Object(O.jsx)("img",{src:null!==a?"https://image.tmdb.org/t/p/w500/".concat(a):this.props.imgSrc,width:"350px"}),Object(O.jsxs)("div",{className:d.a.MovieDetailsPageInfo,children:[Object(O.jsxs)("h1",{children:[t," "]}),Object(O.jsx)("h2",{children:"Overview"}),Object(O.jsx)("p",{children:r}),Object(O.jsx)("h2",{children:"Release data"}),Object(O.jsx)("p",{children:c}),Object(O.jsx)("h2",{children:"Vote"}),Object(O.jsx)("p",{children:i}),Object(O.jsx)("h2",{children:"Genres"}),n&&Object(O.jsx)("ul",{className:d.a.Genre,children:n.map((function(e){return Object(O.jsx)("li",{children:e.name},e.id)}))})]})]})})}}]),n}(v.Component),g=m;m.defaultProps={imgSrc:"https://static.ukrinform.com/photos/2018_12/thumb_files/630_360_1546000648-830.jpg"};var x=n(7),w=n.n(x),y=n(9),k=function(e){var t=e.url,n=e.location;return Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(y.c,{to:{pathname:"".concat(t,"/cast"),state:c({},n.state)},className:w.a.NavLink,activeClassName:w.a.NavLinkActive,children:"Cast"})}),Object(O.jsx)("li",{children:Object(O.jsx)(y.c,{exact:!0,to:{pathname:"".concat(t,"/reviews"),state:c({},n.state)},className:w.a.NavLink,activeClassName:w.a.NavLinkActive,children:"Reviews"})})]})},_=n(91),P=n.n(_),D=function(e){var t=e.onClick;return Object(O.jsx)("button",{className:P.a.Btn,type:"button",onClick:t,children:Object(O.jsx)("span",{className:"material-icons",children:"fast_rewind"})})},M=Object(v.lazy)((function(){return n.e(1).then(n.bind(null,96))})),N=Object(v.lazy)((function(){return n.e(5).then(n.bind(null,98))})),C=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={movie:[],cast:[],reviews:[]},e.handleGoBack=function(){var t=e.props,n=t.location,r=t.history;if(n.state&&n.state.from)return r.push(n.state.from);r.push("/")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.movieId,f.a.getMovieDetailPage(t).then((function(e){return n.setState({movie:e.data}),e.data})),f.a.getCast(t).then((function(e){return n.setState({cast:e}),e})),f.a.getReviews(t).then((function(e){return n.setState({reviews:e}),e}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.cast,r=e.reviews,a=this.props.match,i=a.url,s=a.path;return Object(O.jsxs)("div",{children:[Object(O.jsx)(D,{onClick:this.handleGoBack}),Object(O.jsx)(g,{movie:t}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:" More info..."}),Object(O.jsx)(k,{url:i,location:this.props.location}),Object(O.jsxs)(v.Suspense,{fallback:Object(O.jsx)("h1",{children:"Loading..."}),children:[Object(O.jsx)(j.a,{path:"".concat(s,"/cast"),render:function(e){return Object(O.jsx)(M,c(c({},e),{},{cast:n}))}}),Object(O.jsx)(j.a,{path:"".concat(s,"/reviews"),render:function(e){return Object(O.jsx)(N,c(c({},e),{},{reviews:r}))}})]})]})]})}}]),n}(v.Component)}}]);
//# sourceMappingURL=MoviesDetailPage.8ed21887.chunk.js.map