(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(n,e,t){"use strict";t.r(e);var r=t(7),a=t.n(r),i=t(0),o=t.n(i),l=t(154),c=t(147),s=t.n(c),u=t(4),d=t.n(u),m=t(148),p=t(146);function f(){var n=s()(["\n  color: ",';\n  font-family: "More Gothic Bold";\n  font-size: 7rem;\n  text-align: center;\n\n  @media (min-width: ',") {\n    font-size: 10rem;\n  }\n\n  @media (min-width: ",") {\n    font-size: 14rem;\n  }\n\n  @media (min-width: ",") {\n    font-size: 18rem;\n  }\n\n  @media (min-width: ",") {\n    font-size: 20rem;\n  }\n\n  @media (min-width: ",") {\n    font-size: 24rem;\n  }\n"]);return f=function(){return n},n}function h(){var n=s()(["\n  color: ",";\n  cursor: pointer;\n  text-decoration: underline;\n"]);return h=function(){return n},n}var b=m.b.a(h(),p.a.colors.red),g=m.b.h1(f(),p.a.colors.black,p.a.breakpoints.sm,p.a.breakpoints.md,p.a.breakpoints.lg,p.a.breakpoints.xl,p.a.breakpoints.xxl),x=function(n){var e=n.onLinkClick;return o.a.createElement(g,null,"THE END OF",o.a.createElement("br",null),"STUDENT DEBT",o.a.createElement("br",null),"IS ",o.a.createElement(b,{onClick:e},"HERE"),"!")};x.propTypes={onLinkClick:d.a.func};var y=x,w=t(172),k=t.n(w);function v(){var n=s()(["\n  color: white;\n  font-size: 12rem;\n  background-color: transparent;\n  border-color: transparent;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  @media (max-width: ",") {\n    font-size: 10rem;\n  }\n\n  @media (max-width: ",") {\n    font-size: 8rem;\n  }\n\n  @media (max-width: 585px) {\n    font-size: 6rem;\n  }\n"]);return v=function(){return n},n}function E(){var n=s()(["\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n  color: ",";\n  font-size: 2.6rem;\n  font-weight: bold;\n  height: 80px;\n  margin-left: 25px;\n  padding: 0 5rem;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  @media (max-width: ",") {\n    font-size: 1.6rem;\n    height: 60px;\n  }\n\n  @media (max-width: 585px) {\n    margin-top: 1rem;\n    width: 100%;\n    margin-left: 0;\n  }\n"]);return E=function(){return n},n}function z(){var n=s()(["\n  color: ",";\n  width: 100%;\n  height: 80px;\n  border: 1px solid ",";\n  border-radius: 4px;\n  font-size: 4rem;\n  padding: 1rem 2rem;\n\n  @media (max-width: ",") {\n    font-size: 2.5rem;\n    height: 60px;\n  }\n"]);return z=function(){return n},n}function F(){var n=s()(["\n  color: ",';\n  font-family: "More Gothic Bold";\n  font-size: 25rem;\n  margin: 0;\n  text-align: center;\n\n  @media (max-width: ',") {\n    font-size: 16rem;\n  }\n\n  @media (max-width: ",") {\n    font-size: 12rem;\n  }\n\n  @media (max-width: 585px) {\n    font-size: 10rem;\n  }\n\n  @media (max-width: 485px) {\n    font-size: 7rem;\n  }\n"]);return F=function(){return n},n}function M(){var n=s()(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  @media (max-width: 550px) {\n    flex-direction: column;\n  }\n"]);return M=function(){return n},n}function q(){var n=s()(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  max-width: 1180px;\n  padding: 2rem;\n"]);return q=function(){return n},n}function C(){var n=s()(["\n  align-items: center;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n"]);return C=function(){return n},n}var R=Object(m.b)(function(n){return o.a.createElement(k.a,n)})(C(),p.a.colors.red);R.displayName="StyledReactModal";var S=m.b.div(q()),T=m.b.div(M()),j=m.b.h2(F(),p.a.colors.white,p.a.breakpoints.xl,p.a.breakpoints.lg),G=m.b.input(z(),p.a.colors.black,p.a.colors.darkGrey,p.a.breakpoints.lg),O=m.b.button(E(),p.a.colors.darkGrey,p.a.colors.white,p.a.colors.darkGrey,p.a.breakpoints.lg),D=m.b.button(v(),p.a.breakpoints.xl,p.a.breakpoints.lg),B=function(n){var e=n.isOpen,t=n.onRequestClose;return o.a.createElement(R,{isOpen:e,onRequestClose:t},o.a.createElement(D,{onClick:t},o.a.createElement("span",{"aria-hidden":"true"},"×")),o.a.createElement(S,null,o.a.createElement(j,null,"Stay Updated"),o.a.createElement(T,null,o.a.createElement(G,{type:"email",placeholder:"address@email.com"}),o.a.createElement(O,null,"Join"))))};B.propTypes={isOpen:d.a.bool,onRequestClose:d.a.func};var L=B,J=t(151),N=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))||this).state={showModal:!1},e.showModal=function(){e.setState({showModal:!0})},e.hideModal=function(){e.setState({showModal:!1})},e}return a()(e,n),e.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(J.a,{title:"Student Debt Strike"}),o.a.createElement(y,{onLinkClick:this.showModal}),o.a.createElement(L,{isOpen:this.state.showModal,onRequestClose:this.hideModal})))},e}(i.Component);e.default=N},145:function(n,e,t){var r;n.exports=(r=t(150))&&r.default||r},146:function(n,e,t){"use strict";t(155);var r={colors:{beige:"#FCFBF7",black:"#000000",darkGrey:"#4F4F4F",grey:"#828282",red:"#FF4630",white:"#FFFFFF"},breakpoints:{sm:"425px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"}};t.d(e,"a",function(){return r})},149:function(n){n.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},150:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),l=t(57),c=t(2),s=function(n){var e=n.location,t=c.default.getResourcesForPathnameSync(e.pathname);return t?a.a.createElement(l.a,Object.assign({location:e,pageResources:t},t.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},151:function(n,e,t){"use strict";var r=t(152),a=t(0),i=t.n(a),o=t(4),l=t.n(o),c=t(156),s=t.n(c);function u(n){var e=n.description,t=n.lang,a=n.meta,o=n.title,l=r.data.site,c=e||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(a)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=u},152:function(n){n.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},154:function(n,e,t){"use strict";var r=t(147),a=t.n(r),i=t(149),o=t(0),l=t.n(o),c=t(4),s=t.n(c),u=(t(33),t(145),l.a.createContext({})),d=function(n){return l.a.createElement(u.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var m=t(148),p=t(146);function f(){var n=a()(["\n  html,\n  body {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n  }\n\n  body {\n    align-items: center;\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n    font-size: 1.4rem;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n"]);return f=function(){return n},n}var h=Object(m.a)(f(),p.a.colors.beige),b=function(n){var e=n.children;return l.a.createElement(d,{query:"755544856",render:function(n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("main",null,e))},data:i})};b.propTypes={children:s.a.node.isRequired};e.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-070511671cf5a779f300.js.map