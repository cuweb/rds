import{j as r}from"./jsx-runtime-CKrituN3.js";import{F as d}from"./Figure-Dm8pORUz.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B6KyG9X7.js";import"./iframe-CKWm8vfQ.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const re={title:"Components/Figure",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={image:"./sample-imgs/news-img.jpg",imageWide:"./sample-imgs/event-img.jpg",imageSquare:"./sample-imgs/people-img.jpg",alt:"Required alt text",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU"},e={render:P=>r.jsx(d,{...P,children:r.jsx("img",{src:a.image,alt:a.alt,width:"400",height:"266"})})},s={...e,args:{size:"lg"}},i={...e,args:{size:"md"}},t={...e,args:{size:"sm"}},o={args:{isRound:!0,size:"sm",children:r.jsx("img",{src:a.imageSquare,alt:a.alt,width:"400",height:"266"})}},c={...e,args:{size:"md",caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor."}},n={...e,args:{align:"left",size:"md",caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor."}},m={...e,args:{align:"right",size:"md",caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor."}},u={...e,args:{align:"center",size:"md",caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor."}},l={args:{children:r.jsx(d.Video,{source:a.video})}},g={args:{size:"md",caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:r.jsx(d.Video,{source:a.video})}};var p,h,f;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Figure {...args}>
      <img src={content.image} alt={content.alt} width="400" height="266" />
    </Figure>
}`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,b,z;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'lg'
  }
}`,...(z=(b=s.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var V,I,S;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'md'
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var F,M,j;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'sm'
  }
}`,...(j=(M=t.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var w,x,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isRound: true,
    size: 'sm',
    children: <img src={content.imageSquare} alt={content.alt} width="400" height="266" />
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,R,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Default,
  args: {
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.'
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var W,L,E;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Default,
  args: {
    align: 'left',
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.'
  }
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var A,U,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Default,
  args: {
    align: 'right',
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.'
  }
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var y,G,J;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    align: 'center',
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.'
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,O,k;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: <Figure.Video source={content.video} />
  }
}`,...(k=(O=l.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var B,H,N;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <Figure.Video source={content.video} />
  }
}`,...(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const se=["Default","ImageLarge","ImageMedium","ImageSmall","ImageCircular","ImageWithCaption","ImageFloatLeft","ImageFloatRight","ImageCenterAlign","Video","VideoWithCaption"];export{e as Default,u as ImageCenterAlign,o as ImageCircular,n as ImageFloatLeft,m as ImageFloatRight,s as ImageLarge,i as ImageMedium,t as ImageSmall,c as ImageWithCaption,l as Video,g as VideoWithCaption,se as __namedExportsOrder,re as default};
