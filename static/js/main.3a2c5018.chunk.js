(this["webpackJsonpreact-image-finder"]=this["webpackJsonpreact-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2Hwon",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__34Xbl"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__M09Gp",Modal:"Modal_Modal__2jrt6"}},14:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__1SSlS"}},16:function(e,t,a){e.exports={Button:"Button_Button__2yaC8"}},21:function(e,t,a){},22:function(e,t,a){},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1i5TQ",SearchForm:"Searchbar_SearchForm__2cgy3",SearchFormButton:"Searchbar_SearchFormButton__2VDun",SearchFormLabel:"Searchbar_SearchFormLabel__2B_qR",SearchFormInput:"Searchbar_SearchFormInput__3yvGN"}},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(21),a(13)),l=a(5),s=a(6),u=a(8),h=a(7),m=a(9);a(22);var g={fetchApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cats",t=arguments.length>1?arguments[1]:void 0;return fetch("https://pixabay.com/api/?key=22345544-d7e856a59bd0b8410f42b3802&q=".concat(e,"&image_type=photo&orientation=horizontal&page=").concat(t,"&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(e)))}))}},d=g,p=a(3),b=a.n(p),j=a(1),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputText:""},e.handleNameChange=function(t){e.setState({inputText:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.inputText.trim())return m.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435  \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0435!");e.props.onSubmit(e.state.inputText),e.setState({inputText:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:b.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{className:b.a.SearchFormLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputText,onChange:this.handleNameChange,name:"inputText"})]})})}}]),a}(n.Component),x=(a(24),a(11)),S=a.n(x);function v(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL,o=e.onClick;return Object(j.jsx)("li",{className:S.a.ImageGalleryItem,onClick:function(){return o(r)},children:Object(j.jsx)("img",{src:a,alt:n,className:S.a.ImageGalleryItem_image})},t)}var O=a(14),_=a.n(O);function y(e){var t=e.images,a=e.onClick;return Object(j.jsx)("ul",{className:_.a.imageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(j.jsx)(v,{webformatURL:n,largeImageURL:o,tags:r,onClick:a},t)}))})}var I=a(15),L=a.n(I);a(45);function C(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(L.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:1e4}),"Loading..."]})}var F=a(16),M=a.n(F);function T(e){var t=e.handleLoadMore;return Object(j.jsx)("button",{className:M.a.Button,onClick:t,children:"Load more"})}var k=a(12),w=a.n(k);function N(e){var t=e.largeImageURL,a=e.tags,n=e.onClick;return Object(j.jsx)("div",{className:w.a.Overlay,onClick:n,children:Object(j.jsx)("div",{className:w.a.Modal,children:Object(j.jsx)("img",{src:t,alt:a})})})}var G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputText:"",loading:!1,eror:null,page:1,images:[],showModal:!1,largeImageURL:""},e.handleSubmit=function(t){e.setState({inputText:t})},e.handleLoadMore=function(){e.setState({loading:!0,images:[],page:1}),setTimeout((function(){d.fetchApi(e.state.inputText,e.state.page+1).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t.hits)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState(t)})).finally((function(){return e.setState({loading:!1})}))}),500)},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.fetchApi(this.state.inputText,this.state.page).then((function(t){return e.setState({images:t.hits})})).catch((function(t){return e.setState(t)}))}},{key:"componentDidUpdate",value:function(e,t){this.state.inputText!==t.inputText&&this.handleLoadMore()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.error,r=e.showModal,o=e.largeImageURL;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{onSubmit:this.handleSubmit}),n&&Object(j.jsx)("h1",{children:n.massege}),a&&Object(j.jsx)(C,{}),0===t.length&&!a&&Object(j.jsx)("h1",{children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}),t&&Object(j.jsx)(y,{images:t,onClick:this.toggleModal}),t.length>0&&Object(j.jsx)(T,{handleLoadMore:this.handleLoadMore}),r&&Object(j.jsx)(N,{onClick:this.toggleModal,largeImageURL:o}),Object(j.jsx)(m.a,{autoClose:3e3,position:"top-center"})]})}}]),a}(n.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),R()}},[[46,1,2]]]);
//# sourceMappingURL=main.3a2c5018.chunk.js.map