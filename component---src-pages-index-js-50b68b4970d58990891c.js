(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(154),s=n.n(l),c=n(149),d=n(4),m=n.n(d),p=n(150),u=n(148),f=n(146);function h(){var e=s()(["\n  html,\n  body {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100%;\n    margin: 0;\n    width: 100%;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n  }\n\n  body {\n    align-items: center;\n    background-color: ",";\n    display: flex;\n    font-size: 1.4rem;\n    justify-content: center;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n"]);return h=function(){return e},e}var g=Object(u.a)(h(),f.a.colors.beige),b=function(e){var t=e.children;return o.a.createElement(p.a,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),o.a.createElement("main",null,t))},data:c})};b.propTypes={children:m.a.node.isRequired};var y=b,w=u.b.a.withConfig({displayName:"Message__StyledLink",componentId:"sc-1198a9f-0"})(["color:",";cursor:pointer;text-decoration:underline;"],f.a.colors.red),x=u.b.h1.withConfig({displayName:"Message__Title",componentId:"sc-1198a9f-1"})(["color:",';font-family:"More Gothic Bold";font-size:7rem;text-align:center;@media (min-width:',"){font-size:10rem;}@media (min-width:","){font-size:14rem;}@media (min-width:","){font-size:18rem;}@media (min-width:","){font-size:20rem;}@media (min-width:","){font-size:24rem;}"],f.a.colors.black,f.a.breakpoints.sm,f.a.breakpoints.md,f.a.breakpoints.lg,f.a.breakpoints.xl,f.a.breakpoints.xxl),k=function(e){var t=e.onLinkClick;return o.a.createElement(x,null,"THE END OF",o.a.createElement("br",null),"STUDENT DEBT",o.a.createElement("br",null),"IS ",o.a.createElement(w,{onClick:t},"HERE"),"!")};k.propTypes={onLinkClick:m.a.func};var v=k,E=n(172),z=n.n(E),C=n(178),F=n.n(C),_=(n(181),n(182)),M=n.n(_),S=n(183),I=n.n(S),N=u.b.form.withConfig({displayName:"Form__StyledForm",componentId:"sc-1szsmcv-0"})(["align-items:center;display:flex;flex-direction:column;width:100%;@media (max-width:550px){flex-direction:column;}"]),R=u.b.div.withConfig({displayName:"Form__FormGroup",componentId:"sc-1szsmcv-1"})(["align-items:flex-end;display:flex;width:100%;"]),q=u.b.label.withConfig({displayName:"Form__Label",componentId:"sc-1szsmcv-2"})(["color:",';font-family:"Libre Franklin",sans-serif;font-size:2.4rem;width:100%;'],f.a.colors.white),T=u.b.input.withConfig({displayName:"Form__Input",componentId:"sc-1szsmcv-3"})(["border-radius:4px;border:1px solid ",";color:",';font-family:"Libre Franklin",sans-serif;font-size:4rem;height:80px;padding:1rem 2rem;width:100%;margin-top:1rem;@media (max-width:',"){font-size:2.5rem;height:60px;}"],f.a.colors.darkGrey,f.a.colors.black,f.a.breakpoints.lg),L=u.b.button.withConfig({displayName:"Form__Button",componentId:"sc-1szsmcv-4"})(["background-color:",";border-radius:4px;border:0;color:",';cursor:pointer;font-family:"Libre Franklin",sans-serif;font-size:2.6rem;font-weight:bold;height:80px;margin-left:25px;padding:0 5rem;text-transform:uppercase;&:hover{background-color:',";}@media (max-width:","){font-size:1.6rem;height:60px;}@media (max-width:585px){margin-top:1rem;width:100%;margin-left:0;}"],f.a.colors.darkGrey,f.a.colors.white,f.a.colors.darkGrey,f.a.breakpoints.lg),j=u.b.div.withConfig({displayName:"Form__ResultMessage",componentId:"sc-1szsmcv-5"})(["color:",";margin-top:1rem;font-size:2rem;width:100%;a{color:",";}"],f.a.colors.white,f.a.colors.white),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={email:"",msg:""},t.handleSubmit=function(){var e=M()(F.a.mark(function e(n){var a,i,r;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=t.state.email){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,I()(a);case 6:i=e.sent,r=i.msg,t.setState({msg:r});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.handleChange=function(e){t.setState({email:e.target.value})},t}return i()(t,e),t.prototype.render=function(){return o.a.createElement(N,{onSubmit:this.handleSubmit,action:"",method:"post"},o.a.createElement(R,null,o.a.createElement(q,null,"Email address",o.a.createElement(T,{type:"email",placeholder:"address@email.com",value:this.state.email,onChange:this.handleChange})),o.a.createElement(L,{type:"submit"},"Join")),o.a.createElement(j,{dangerouslySetInnerHTML:{__html:this.state.msg}}))},t}(r.Component);z.a.setAppElement("#___gatsby");var D=Object(u.b)(function(e){return o.a.createElement(z.a,e)}).withConfig({displayName:"Modal__StyledReactModal",componentId:"t4defi-0"})(["align-items:center;background-color:",";display:flex;flex-direction:column;height:100%;justify-content:center;width:100%;"],f.a.colors.red);D.displayName="StyledReactModal";var B=u.b.div.withConfig({displayName:"Modal__ModalBody",componentId:"t4defi-1"})(["align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;max-width:1180px;padding:2rem;"]),G=u.b.h2.withConfig({displayName:"Modal__Title",componentId:"t4defi-2"})(["color:",';font-family:"More Gothic Bold";font-size:25rem;margin:0;text-align:center;@media (max-width:',"){font-size:16rem;}@media (max-width:","){font-size:12rem;}@media (max-width:585px){font-size:10rem;}@media (max-width:485px){font-size:7rem;}"],f.a.colors.white,f.a.breakpoints.xl,f.a.breakpoints.lg),A=u.b.button.withConfig({displayName:"Modal__Close",componentId:"t4defi-3"})(["background-color:transparent;border:0;color:white;cursor:pointer;font-size:12rem;margin:0;padding:0;position:absolute;right:1.8rem;top:0;@media (max-width:","){font-size:10rem;}@media (max-width:","){font-size:8rem;}@media (max-width:585px){font-size:6rem;}"],f.a.breakpoints.xl,f.a.breakpoints.lg),H=function(e){var t=e.isOpen,n=e.onRequestClose;return o.a.createElement(D,{isOpen:t,onRequestClose:n},o.a.createElement(A,{onClick:n},o.a.createElement("span",{"aria-hidden":"true"},"×")),o.a.createElement(B,null,o.a.createElement(G,null,"Stay Updated"),o.a.createElement(O,null)))};H.propTypes={isOpen:m.a.bool,onRequestClose:m.a.func};var J=H,P=n(152),U=n(157),Q=n.n(U);function K(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,r=P.data.site,l=t||r.siteMetadata.description;return o.a.createElement(Q.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(a)})}K.defaultProps={lang:"en",meta:[],description:""},K.propTypes={description:m.a.string,lang:m.a.string,meta:m.a.arrayOf(m.a.object),title:m.a.string.isRequired};var V=K,W=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={showModal:!1},t.showModal=function(){t.setState({showModal:!0})},t.hideModal=function(){t.setState({showModal:!1})},t}return i()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null,o.a.createElement(V,{title:"Home"}),o.a.createElement(v,{onLinkClick:this.showModal}),o.a.createElement(J,{isOpen:this.state.showModal,onRequestClose:this.hideModal})))},t}(r.Component);t.default=W},146:function(e,t,n){"use strict";n(155);var a={colors:{beige:"#FCFBF7",black:"#000000",darkGrey:"#4F4F4F",grey:"#828282",red:"#FF4630",white:"#FFFFFF",green:"#24BA9D"},breakpoints:{sm:"425px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"}};n.d(t,"a",function(){return a})},147:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Student Debt Strike"}}}}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=(n(33),n(147),i.a.createContext({})),s=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(57),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Student Debt Strike",description:"Student Debt Strike campaign page",author:"@debtcollective"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-50b68b4970d58990891c.js.map