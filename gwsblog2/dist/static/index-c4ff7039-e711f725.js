import{s as _,aG as j,a as g,P as w,cK as B,j as a,aq as L,cJ as O,am as T,aU as S,ar as A,u as D,ad as G,aa as W}from"./desk-0312ba5d-f787c626.js";import{P as z}from"./PaneItem-1352c9b8-b6ca498f.js";import{useDeskTool as C}from"./index-74d44846-8c9b904e.js";import"./index-f4191376.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const K=_.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function J(n){const{childItemId:t,index:l,isActive:d,isSelected:u,pane:p,paneKey:f}=n,{features:h}=C(),{collapsed:m}=j(),{defaultLayout:y,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=p,P=c==null?void 0:c.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return g(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:u,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(D,{overflow:m?void 0:"auto",children:a(G,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(W,{paddingY:1,children:a(K,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(z,{icon:k(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{J as default};