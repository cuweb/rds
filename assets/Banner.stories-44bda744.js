import{j as e,F as f,a as r}from"./jsx-runtime-9d2cd5de.js";import{r as pe,a as me}from"./tailwindClasses-38d24fdc.js";import{r as he}from"./index-580b8df0.js";import{B as t}from"./Button-228af08e.js";import{M as te}from"./Main-87487803.js";import{C as ae}from"./Column-1a3467b4.js";import"./_commonjsHelpers-042e6b4d.js";import"./Link-a8ece75e.js";const Be=()=>{const n=he.useRef(null);return e("canvas",{ref:n,style:{width:"100%",height:"100%",position:"absolute",top:"auto",left:"0",bottom:"0",overflow:"hidden",opacity:.5,...{"--gradient-color-1":"#c3e4ff","--gradient-color-2":"#6ec3f4","--gradient-color-3":"#eae2ff","--gradient-color-4":"#b9beff"}},"data-transition-in":!0})},v={core:"not-prose relative py-16 md:py-32 md:flex md:items-center md:px-8 md:min-h-[240px]",buttonWrapper:"flex gap-6 flex-wrap md:flex-1",overlap:"md:pb-32 md:pt-20"},ge={"light-grey":"bg-cu-black-50 text-cu-black-800","light-fade":"bg-gradient-to-b from-white to-cu-black-50 text-cu-black-800","dark-wave":"bg-cu-black-800 text-white","red-wave":"bg-gradient-to-b from-cu-red to-cu-red-900 text-white",animated:"bg-white text-cu-black-800",image:"bg-cu-black-800 text-white md:py-48"},T={title:"font-semibold text-3xl",paragraph:"text-base lg:text-xl max-w-5xl"},re=({children:n,title:l,paragraph:y,maxWidth:ie="5xl",isType:i="light-grey",fontSize:oe="5xl",align:w="center",hasOverlap:k,image:le,imageAlt:se="Decorative background image"})=>{const de=i==="image"?"md:py-48":"md:py-32",ce=w==="center"?"flex-col last:[&>*]:justify-center":"flex-col md:flex-row last:[&>*]:justify-center last:md:[&>*]:justify-end",ue=w==="center"?"text-center":"text-center md:text-left"+(y&&n?" md:max-w-3xl md:w-8/12":"");let S=k?v.overlap:"";return k&&i==="image"&&(S="md:pb-48 md:pt-40"),e(f,{children:r("header",{className:`${v.core} ${ge[i]} ${de} ${S}`,id:"banner",children:[r("div",{className:`z-10 flex flex-1 ${ce} m-auto items-center justify-center gap-8 ${pe[ie]} [&>*]:z-10`,children:[r("div",{className:`flex flex-auto flex-col gap-6 ${ue}`,children:[e("h1",{className:`${T.title} ${me[oe]}`,children:l}),y&&e("p",{className:T.paragraph,children:y})]}),n]}),i==="image"&&e(ye,{image:le,imageAlt:se}),i==="dark-wave"&&e(b,{}),i==="red-wave"&&e(b,{}),i==="animated"&&e(Be,{})]})})},ye=({image:n,imageAlt:l})=>r("div",{className:"absolute inset-0",children:[e("img",{className:"h-full w-full object-cover",src:n,alt:l}),e("div",{className:"absolute inset-0 bg-cu-black-800 mix-blend-multiply","aria-hidden":"true"})]}),b=()=>e("div",{className:"absolute inset-0 bg-cu-waves-white-10 bg-contain bg-bottom bg-no-repeat md:bg-cover"}),ne=({children:n})=>e("div",{className:`buttons ${v.buttonWrapper}`,children:n}),a=Object.assign(re,{ButtonGroup:ne});re.displayName="Banner";ne.displayName="Banner.ButtonGroup";try{a.displayName="Banner",a.__docgenInfo={description:"",displayName:"Banner",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"5xl"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"5xl"'},{value:'"6xl"'}]}},maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},isType:{defaultValue:{value:"light-grey"},description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"light-grey"'},{value:'"light-fade"'},{value:'"dark-wave"'},{value:'"red-wave"'},{value:'"image"'},{value:'"animated"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'}]}},hasOverlap:{defaultValue:null,description:"",name:"hasOverlap",required:!1,type:{name:"boolean"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:"Decorative background image"},description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const Ae={title:"Headers/Banner",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={};o.args={children:"Header Banner",title:"Basic Banner"};const s={render:()=>e(a,{title:"Header Banner",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:"StarIcon",isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},d={render:()=>e(a,{title:"Image Banner",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:"StarIcon",isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},c={render:()=>e(a,{title:"CU Light Fade Banner",isType:"light-fade",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:"StarIcon",isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},u={render:()=>e(a,{title:"CU Wave Banner",isType:"dark-wave",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:"StarIcon",isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},p={render:()=>e(a,{title:"CU Wave Banner",isType:"red-wave",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:"StarIcon",isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},m={render:()=>e(a,{title:"CU Animated Banner",isType:"animated",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:"StarIcon",isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},h={render:()=>e(a,{title:"Banner with Paragraph",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices magna at sollicitudin. Duis venenatis arcu quis nibh blandit vestibulum. Praesent tempus est at venenatis elementum. In vestibulum purus in sapien varius, ac iaculis ligula eleifend. Nulla tempus interdum ipsum quis iaculis.",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:"StarIcon",isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},B={render:()=>r(f,{children:[e(a,{title:"Banner with Content Overlap",isType:"dark-wave",hasOverlap:!0}),e(te,{hasOverlap:!0,children:e(ae,{maxWidth:"5xl",children:e("div",{className:"px-8 pt-6 pb-24 bg-white rounded-lg",children:"This is an example of the main wrapped overlapping the banner"})})})]})},g={render:()=>r(f,{children:[e(a,{title:"Banner Image with Content Overlap",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg",hasOverlap:!0}),e(te,{hasOverlap:!0,children:e(ae,{maxWidth:"5xl",children:e("div",{className:"px-8 pt-6 pb-24 bg-white rounded-lg",children:"This is an example of the main wrapped overlapping the banner"})})})]})};var x,C,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var W,G,I;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Banner title="Header Banner">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon="StarIcon" isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(I=(G=s.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var P,F,N;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Banner title="Image Banner" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon="StarIcon" isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var O,q,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Banner title="CU Light Fade Banner" isType="light-fade">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon="StarIcon" isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(j=(q=c.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var _,$,V;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Banner title="CU Wave Banner" isType="dark-wave">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon="StarIcon" isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(V=($=u.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var D,U,M;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Banner title="CU Wave Banner" isType="red-wave">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon="StarIcon" isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(M=(U=p.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var z,H,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Banner title="CU Animated Banner" isType="animated">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon="StarIcon" isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var R,E,J;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Banner title="Banner with Paragraph" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices magna at sollicitudin. Duis venenatis arcu quis nibh blandit vestibulum. Praesent tempus est at venenatis elementum. In vestibulum purus in sapien varius, ac iaculis ligula eleifend. Nulla tempus interdum ipsum quis iaculis.">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon="StarIcon" isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(J=(E=h.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var K,Q,X;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <>
      <Banner title="Banner with Content Overlap" isType="dark-wave" hasOverlap />
      <Main hasOverlap>
        <Column maxWidth="5xl">
          <div className="px-8 pt-6 pb-24 bg-white rounded-lg">
            This is an example of the main wrapped overlapping the banner
          </div>
        </Column>
      </Main>
    </>
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <>
      <Banner title="Banner Image with Content Overlap" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg" hasOverlap />
      <Main hasOverlap>
        <Column maxWidth="5xl">
          <div className="px-8 pt-6 pb-24 bg-white rounded-lg">
            This is an example of the main wrapped overlapping the banner
          </div>
        </Column>
      </Main>
    </>
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const We=["DefaultTemplate","WithButtonsTemplate","WithImageTemplate","WithGreyGradientTemplate","WithDarkWaveTemplate","WithRedWaveTemplate","WithAnimationTemplate","WithParagraphTemplate","WithOverlapTemplate","WithOverlapImageTemplate"];export{o as DefaultTemplate,m as WithAnimationTemplate,s as WithButtonsTemplate,u as WithDarkWaveTemplate,c as WithGreyGradientTemplate,d as WithImageTemplate,g as WithOverlapImageTemplate,B as WithOverlapTemplate,h as WithParagraphTemplate,p as WithRedWaveTemplate,We as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Banner.stories-44bda744.js.map
