import{j as e}from"./jsx-runtime-7ce7b810.js";import{a as G}from"./globalClasses-2c5f0f6e.js";import{d as J}from"./optionClasses-6d59d7f7.js";import{B as a}from"./Button-6bb20ebc.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-798e3e5e.js";import"./ChevronDownIcon-2780c6ad.js";const r={base:"flex flex-wrap gap-5 mx-auto mb-6 cu-textimage md:flex-nowrap md:gap-10 not-contained md:mb-12",border:"border-b border-cu-black-50 pb-6 shadow-hero-text-image md:pb-8",headerOne:"font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] text-cu-black-700 not-prose",headerTwo:"font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-cu-black-700 not-prose",underline:"relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px pb-4",contentWrapper:"flex-[0_0_100%] md:max-w-4xl md:flex-1 cu-textimage-content"},o={mediaWrapper:"relative overflow-hidden flex-[0_0_100%] md:flex-none md:w-[40%]",mediaBgImage:"relative rounded bg-cover bg-no-repeat min-h-[220px]",svgLeft:"hidden lg:block absolute -left-px top-0 z-10 h-full",svgRight:"hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]"},R=({children:l,title:n,headerType:s="h2",isCenter:g,imageUrl:i,contentWidth:h=50,imageZoom:Z=0,angle:H,focalPointX:z="50",focalPointY:E="50",hasMobileImage:F})=>{const X=i?"md:py-4":"",Y=g?"justify-center":"";let b,y,q,I;i&&(b=o.mediaBgImage,y=F?"":"hidden md:block",b&&(q={flex:`0 0 ${h}%`},I={backgroundImage:`url(${i})`,backgroundPosition:`${z}% ${E}%`,transform:`scale(1.${Z})`}));let f=null,P=null;switch(H){case"left":f=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:o.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break;case"dual":f=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:o.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})}),P=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:o.svgRight,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${r.contentWrapper} ${X} ${Y} ${G.text} ${s==="h1"?"text-[26px] sm:leading-10 font-light text-cu-black-700":""}`,style:q,children:[n&&s==="h1"&&e.jsx("h1",{className:`${r.headerOne} ${r.underline}`,children:n}),n&&s==="h2"&&e.jsx("h2",{className:`${r.headerTwo} ${r.underline}`,children:n}),l]}),i&&e.jsx("div",{className:`relative flex-1 overflow-hidden rounded ${y}`,children:e.jsxs("div",{className:"flex-1 w-full h-full bg-no-repeat bg-cover rounded",style:I,children:[f,P]})})]})};R.displayName="TextImage.Content";try{TextImage.Content.displayName="TextImage.Content",TextImage.Content.__docgenInfo={description:"",displayName:"TextImage.Content",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},contentWidth:{defaultValue:{value:"50"},description:"",name:"contentWidth",required:!1,type:{name:"number"}},imageZoom:{defaultValue:{value:"0"},description:"",name:"imageZoom",required:!1,type:{name:"number"}},angle:{defaultValue:null,description:"",name:"angle",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"dual"'}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}},hasMobileImage:{defaultValue:null,description:"",name:"hasMobileImage",required:!1,type:{name:"boolean"}}}}}catch{}const v=({children:l,maxWidth:n="5xl",hasBorder:s,reverse:g})=>{const i=g?"flex-row-reverse":"",h=s?r.border:"";return e.jsx("div",{className:`${r.base} ${J[n]} ${i} ${h}`,children:l})},t=Object.assign(v,{Content:R});try{v.displayName="TextImageWrapper",v.__docgenInfo={description:"",displayName:"TextImageWrapper",props:{maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"5xl"'},{value:'"7xl"'},{value:'"max"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="TextImage",t.__docgenInfo={description:"",displayName:"TextImage",props:{maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"5xl"'},{value:'"7xl"'},{value:'"max"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Components/Text Image",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},m={render:()=>e.jsx(t,{hasBorder:!0,children:e.jsxs(t.Content,{title:"Website and Application Development",imageUrl:"https://picsum.photos/400/266",children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})]})})},u={render:()=>e.jsx(t,{maxWidth:"7xl",hasBorder:!0,reverse:!0,children:e.jsxs(t.Content,{title:"Website and Application Development",headerType:"h1",imageUrl:"https://picsum.photos/400/266",children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})]})})},d={render:()=>e.jsx(t,{maxWidth:"7xl",hasBorder:!0,children:e.jsxs(t.Content,{title:"Website and Application Development",imageUrl:"https://picsum.photos/400/266",angle:"left",children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})]})})},c={render:()=>e.jsx(t,{maxWidth:"7xl",hasBorder:!0,reverse:!0,children:e.jsxs(t.Content,{title:"Website and Application Development",imageUrl:"https://picsum.photos/400/266",angle:"left",children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})]})})},p={render:()=>e.jsx(t,{maxWidth:"7xl",hasBorder:!0,children:e.jsxs(t.Content,{title:"Website and Application Development",imageUrl:"https://picsum.photos/400/266",angle:"dual",children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})]})})},x={render:()=>e.jsx(t,{hasBorder:!0,children:e.jsxs(t.Content,{title:"Website and Application Development",children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10",children:[e.jsx(a,{title:"Primary"}),e.jsx(a,{title:"Secondary",color:"grey"})]})]})})};var j,T,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <TextImage hasBorder>
      <TextImage.Content title="Website and Application Development" imageUrl="https://picsum.photos/400/266">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var w,B,C;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <TextImage maxWidth="7xl" hasBorder reverse>
      <TextImage.Content title="Website and Application Development" headerType="h1" imageUrl="https://picsum.photos/400/266">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var W,_,S;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <TextImage maxWidth="7xl" hasBorder>
      <TextImage.Content title="Website and Application Development" imageUrl="https://picsum.photos/400/266" angle="left">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
}`,...(S=(_=d.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var $,M,A;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <TextImage maxWidth="7xl" hasBorder reverse>
      <TextImage.Content title="Website and Application Development" imageUrl="https://picsum.photos/400/266" angle="left">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
}`,...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var D,V,k;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <TextImage maxWidth="7xl" hasBorder>
      <TextImage.Content title="Website and Application Development" imageUrl="https://picsum.photos/400/266" angle="dual">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
}`,...(k=(V=p.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var U,L,O;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <TextImage hasBorder>
      <TextImage.Content title="Website and Application Development">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
}`,...(O=(L=x.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const se=["DefaultTemplate","ImageLeft","ImageAngle","ImageAngleReverse","ImageDualAngle","NoImage"];export{m as DefaultTemplate,d as ImageAngle,c as ImageAngleReverse,p as ImageDualAngle,u as ImageLeft,x as NoImage,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=TextImage.stories-725965f5.js.map
