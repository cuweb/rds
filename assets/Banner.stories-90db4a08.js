import{j as e,F as w,a as r}from"./jsx-runtime-9d2cd5de.js";import{r as me,a as he}from"./tailwindClasses-756db2c3.js";import{r as Be}from"./index-580b8df0.js";import{B as t}from"./Button-426c9322.js";import{M as ae}from"./Main-87487803.js";import{C as re}from"./Column-29098245.js";import{a as o}from"./index-ec3aab99.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-fe3a5e81.js";import"./Link-a8ece75e.js";const f={core:"not-prose relative py-16 md:py-32 md:flex md:items-center md:px-8 md:min-h-[240px]",buttonWrapper:"flex gap-6 flex-wrap md:flex-1",overlap:"md:pb-32 md:pt-20"},ge={"light-grey":"bg-cu-black-50 text-cu-black-800","light-fade":"bg-gradient-to-b from-white to-cu-black-50 text-cu-black-800","dark-wave":"bg-cu-black-800 text-white","red-wave":"bg-gradient-to-b from-cu-red to-cu-red-900 text-white",animated:"bg-white text-cu-black-800",image:"bg-cu-black-800 text-white md:py-48"},b={title:"font-semibold text-3xl",paragraph:"text-base lg:text-xl max-w-5xl"},ye=()=>{const n=Be.useRef(null);return e("canvas",{ref:n,style:{width:"100%",height:"100%",position:"absolute",top:"auto",left:"0",bottom:"0",overflow:"hidden",opacity:.5,...{"--gradient-color-1":"#c3e4ff","--gradient-color-2":"#6ec3f4","--gradient-color-3":"#eae2ff","--gradient-color-4":"#b9beff"}},"data-transition-in":!0})},ne=({children:n,title:s,paragraph:v,maxWidth:oe="5xl",isType:i="light-grey",fontSize:le="5xl",align:k="center",hasOverlap:S,image:se,imageAlt:de="Decorative background image"})=>{const ce=i==="image"?"md:py-48":"md:py-32",ue=k==="center"?"flex-col last:[&>*]:justify-center":"flex-col md:flex-row last:[&>*]:justify-center last:md:[&>*]:justify-end",pe=k==="center"?"text-center":"text-center md:text-left"+(v&&n?" md:max-w-3xl md:w-8/12":"");let T=S?f.overlap:"";return S&&i==="image"&&(T="md:pb-48 md:pt-40"),e(w,{children:r("header",{className:`${f.core} ${ge[i]} ${ce} ${T}`,id:"banner",children:[r("div",{className:`z-10 flex flex-1 ${ue} m-auto items-center justify-center gap-8 ${me[oe]} [&>*]:z-10`,children:[r("div",{className:`flex flex-auto flex-col gap-6 ${pe}`,children:[e("h1",{className:`${b.title} ${he[le]}`,children:s}),v&&e("p",{className:b.paragraph,children:v})]}),n]}),i==="image"&&e(ve,{image:se,imageAlt:de}),i==="dark-wave"&&e(x,{}),i==="red-wave"&&e(x,{}),i==="animated"&&e(ye,{})]})})},ve=({image:n,imageAlt:s})=>r("div",{className:"absolute inset-0",children:[e("img",{className:"h-full w-full object-cover",src:n,alt:s}),e("div",{className:"absolute inset-0 bg-cu-black-800 mix-blend-multiply","aria-hidden":"true"})]}),x=()=>e("div",{className:"absolute inset-0 bg-cu-waves-white-10 bg-contain bg-bottom bg-no-repeat md:bg-cover"}),ie=({children:n})=>e("div",{className:`buttons ${f.buttonWrapper}`,children:n}),a=Object.assign(ne,{ButtonGroup:ie});ne.displayName="Banner";ie.displayName="Banner.ButtonGroup";try{a.displayName="Banner",a.__docgenInfo={description:"",displayName:"Banner",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"5xl"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"5xl"'},{value:'"6xl"'}]}},maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},isType:{defaultValue:{value:"light-grey"},description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"light-grey"'},{value:'"light-fade"'},{value:'"dark-wave"'},{value:'"red-wave"'},{value:'"image"'},{value:'"animated"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'}]}},hasOverlap:{defaultValue:null,description:"",name:"hasOverlap",required:!1,type:{name:"boolean"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},imageAlt:{defaultValue:{value:"Decorative background image"},description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const Pe={title:"Headers/Banner",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},l={};l.args={children:"Header Banner",title:"Basic Banner"};const d={render:()=>e(a,{title:"Header Banner",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:o,isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},c={render:()=>e(a,{title:"Image Banner",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:o,isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},u={render:()=>e(a,{title:"CU Light Fade Banner",isType:"light-fade",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:o,isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},p={render:()=>e(a,{title:"CU Wave Banner",isType:"dark-wave",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:o,isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},m={render:()=>e(a,{title:"CU Wave Banner",isType:"red-wave",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:o,isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},h={render:()=>e(a,{title:"CU Animated Banner",isType:"animated",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:o,isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},B={render:()=>e(a,{title:"Banner with Paragraph",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices magna at sollicitudin. Duis venenatis arcu quis nibh blandit vestibulum. Praesent tempus est at venenatis elementum. In vestibulum purus in sapien varius, ac iaculis ligula eleifend. Nulla tempus interdum ipsum quis iaculis.",children:r(a.ButtonGroup,{children:[e(t,{isType:"default",onClick:()=>{},title:"Primary Button",hasShadow:!0}),e(t,{isType:"white",onClick:()=>{},title:"Secondary Button",hasShadow:!0}),e(t,{hasShadow:!0,icon:o,isType:"dark-grey",onClick:()=>{alert("Add to favs clicked")},title:"Add to Favs"})]})})},g={render:()=>r(w,{children:[e(a,{title:"Banner with Content Overlap",isType:"dark-wave",hasOverlap:!0}),e(ae,{hasOverlap:!0,children:e(re,{maxWidth:"5xl",children:e("div",{className:"rounded-lg bg-white px-8 pt-6 pb-24",children:"This is an example of the main wrapped overlapping the banner"})})})]})},y={render:()=>r(w,{children:[e(a,{title:"Banner Image with Content Overlap",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg",hasOverlap:!0}),e(ae,{hasOverlap:!0,children:e(re,{maxWidth:"5xl",children:e("div",{className:"rounded-lg bg-white px-8 pt-6 pb-24",children:"This is an example of the main wrapped overlapping the banner"})})})]})};var C,A,W;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(W=(A=l.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var G,P,F;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Banner title="Header Banner">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon={StarIcon} isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var I,N,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Banner title="Image Banner" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon={StarIcon} isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var q,j,_;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Banner title="CU Light Fade Banner" isType="light-fade">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon={StarIcon} isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(_=(j=u.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var $,V,D;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Banner title="CU Wave Banner" isType="dark-wave">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon={StarIcon} isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var U,M,z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Banner title="CU Wave Banner" isType="red-wave">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon={StarIcon} isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(z=(M=m.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var H,L,R;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Banner title="CU Animated Banner" isType="animated">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon={StarIcon} isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(R=(L=h.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var E,J,K;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Banner title="Banner with Paragraph" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices magna at sollicitudin. Duis venenatis arcu quis nibh blandit vestibulum. Praesent tempus est at venenatis elementum. In vestibulum purus in sapien varius, ac iaculis ligula eleifend. Nulla tempus interdum ipsum quis iaculis.">
      <Banner.ButtonGroup>
        <Button isType="default" onClick={() => {}} title="Primary Button" hasShadow />
        <Button isType="white" onClick={() => {}} title="Secondary Button" hasShadow />
        <Button hasShadow icon={StarIcon} isType="dark-grey" onClick={() => {
        alert('Add to favs clicked');
      }} title="Add to Favs" />
      </Banner.ButtonGroup>
    </Banner>
}`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <>
      <Banner title="Banner with Content Overlap" isType="dark-wave" hasOverlap />
      <Main hasOverlap>
        <Column maxWidth="5xl">
          <div className="rounded-lg bg-white px-8 pt-6 pb-24">
            This is an example of the main wrapped overlapping the banner
          </div>
        </Column>
      </Main>
    </>
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <>
      <Banner title="Banner Image with Content Overlap" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg" hasOverlap />
      <Main hasOverlap>
        <Column maxWidth="5xl">
          <div className="rounded-lg bg-white px-8 pt-6 pb-24">
            This is an example of the main wrapped overlapping the banner
          </div>
        </Column>
      </Main>
    </>
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Fe=["DefaultTemplate","WithButtonsTemplate","WithImageTemplate","WithGreyGradientTemplate","WithDarkWaveTemplate","WithRedWaveTemplate","WithAnimationTemplate","WithParagraphTemplate","WithOverlapTemplate","WithOverlapImageTemplate"];export{l as DefaultTemplate,h as WithAnimationTemplate,d as WithButtonsTemplate,p as WithDarkWaveTemplate,u as WithGreyGradientTemplate,c as WithImageTemplate,y as WithOverlapImageTemplate,g as WithOverlapTemplate,B as WithParagraphTemplate,m as WithRedWaveTemplate,Fe as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Banner.stories-90db4a08.js.map
