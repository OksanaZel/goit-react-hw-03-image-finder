(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{30:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(30),a(9)),s=a.n(c),l=a(15),p=a(11),d=a(5),u=a(6),h=a(8),g=a(7),b=a(13),m=a.n(b),x="21672649-f94e47de3526d257f0e860889";function j(){return(j=Object(p.a)(s.a.mark((function e(t,a){var n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(a,"&per_page=12&key=").concat(x),e.next=3,m.a.get(n);case 3:return r=e.sent,i=r.data,e.abrupt("return",i.hits);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.defaults.baseURL="https://pixabay.com/api";var f=function(e,t){return j.apply(this,arguments)},y=a(14),v=(a(51),a(52),a(53),function(){Object(y.info)({title:"Invalid request",text:"The search field is empty!",delay:2e3})}),O=a(2);var w=Object(O.a)("header",{target:"e1j0bejf4"})({name:"1iqqyg4",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;margin-bottom:25px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),k=Object(O.a)("form",{target:"e1j0bejf3"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),S=Object(O.a)("button",{target:"e1j0bejf2"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),C=Object(O.a)("span",{target:"e1j0bejf1"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),I=Object(O.a)("input",{target:"e1j0bejf0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),z=a(1),Q=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleSearchQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):v()},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(z.jsx)(w,{children:Object(z.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(z.jsx)(S,{type:"submit",children:Object(z.jsx)(C,{children:"Search"})}),Object(z.jsx)(I,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:this.state.searchQuery,onChange:this.handleSearchQueryChange})]})})}}]),a}(n.Component);var q=Object(O.a)("li",{target:"e1mekrqo1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),F=Object(O.a)("img",{target:"e1mekrqo0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});function D(e){var t=e.tags,a=e.previewImg,n=e.selectedImage;return Object(z.jsx)(q,{children:Object(z.jsx)(F,{src:a,alt:t,onClick:n})})}var L=Object(O.a)("ul",{target:"eh3lazj2"})({name:"1snesqn",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;padding:0;list-style:none;margin-left:auto;margin-right:auto"});Object(O.a)("li",{target:"eh3lazj1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),Object(O.a)("img",{target:"eh3lazj0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});function M(e){var t=e.images,a=e.selectedImage;return Object(z.jsx)(L,{children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,i=e.largeImageURL;return Object(z.jsx)(D,{previewImg:n,tags:r,selectedImage:function(){return a(i,r)}},t)}))})}var B=Object(O.a)("button",{target:"el373wm0"})({name:"uoy7o5",styles:"padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:block;margin-left:auto;margin-right:auto;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"});function E(e){var t=e.onClick;return Object(z.jsx)(B,{type:"button",onClick:t,children:"Load more"})}var T=a(25),U=a.n(T);var A=Object(O.a)("div",{target:"e1l228af0"})({name:"1o321lm",styles:"position:fixed;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh"});var K=function(){return Object(z.jsx)(A,{children:Object(z.jsx)(U.a,{type:"ThreeDots",color:"#3f51b5",height:280,width:280})})};var R=Object(O.a)("div",{target:"eu3a2j72"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),J=Object(O.a)("div",{target:"eu3a2j71"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),P=Object(O.a)("img",{target:"eu3a2j70"})({name:"4uwt2b",styles:"width:100%;height:100%;object-fit:cover"}),_=document.querySelector("#modal-root"),H=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.selectedImg,a=e.tags;return Object(i.createPortal)(Object(z.jsx)(R,{onClick:this.handleBackdropClick,children:Object(z.jsx)(J,{children:Object(z.jsx)(P,{src:t,alt:a})})}),_)}}]),a}(n.Component),W=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",page:1,images:[],selectedImg:null,alt:null,status:"idle"},e.handleFormSubmit=function(t){e.state.searchQuery!==t&&(e.resetState(),e.setState({searchQuery:t}))},e.loadMoreBtnClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleSelectedImage=function(t,a){e.setState({selectedImg:t,alt:a})},e.closeModal=function(){e.setState({selectedImg:null})},e.resetState=function(){e.setState({searchQuery:"",page:1,images:[],selectedImg:null,alt:null,status:"idle"})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(p.a)(s.a.mark((function e(t,a){var n,r,i,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.searchQuery,r=this.state.searchQuery,i=a.page,o=this.state.page,n===r&&i===o){e.next=20;break}return this.setState({status:"pending"}),e.prev=6,e.next=9,f(r,o);case 9:if((c=e.sent).length){e.next=12;break}throw new Error;case 12:this.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(c)),status:"resolved"}})),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(6),Object(y.error)({title:"Invalid request",text:"Please enter the right query!",delay:2e3}),this.setState({status:"rejected"});case 19:this.state.page>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 20:case"end":return e.stop()}}),e,this,[[6,15]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.selectedImg,n=e.alt,r=e.status;return"idle"===r?Object(z.jsx)(Q,{onSubmit:this.handleFormSubmit}):"pending"===r?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Q,{onSubmit:this.handleFormSubmit}),Object(z.jsx)(K,{}),Object(z.jsx)(M,{images:t,selectedImage:this.handleSelectedImage}),t.length>0&&Object(z.jsx)(E,{onClick:this.loadMoreBtnClick})]}):"resolved"===r?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Q,{onSubmit:this.handleFormSubmit}),Object(z.jsx)(M,{images:t,selectedImage:this.handleSelectedImage}),a&&Object(z.jsx)(H,{selectedImg:a,tags:n,onClose:this.closeModal}),t.length>0&&Object(z.jsx)(E,{onClick:this.loadMoreBtnClick})]}):"rejected"===r?Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(Q,{onSubmit:this.handleFormSubmit})}):void 0}}]),a}(n.Component);o.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(W,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.b7a15c10.chunk.js.map