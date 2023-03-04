import{j as e,a as l}from"./jsx-runtime-670450c2.js";import{d as A,e as S,f as y}from"./tailwindClasses-cc25bdc9.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const G={column:"cu-column mx-auto grid"},i=({children:r,maxWidth:x="5xl",gridGap:P="10",cols:C="1"})=>e("div",{className:`
        ${G.column}
        ${A[C]}
        ${S[x]} ${y[P]}
      `,children:r});try{i.displayName="Column",i.__docgenInfo={description:"",displayName:"Column",props:{maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},gridGap:{defaultValue:{value:"10"},description:"",name:"gridGap",required:!1,type:{name:"enum",value:[{value:'"0"'},{value:'"5"'},{value:'"10"'}]}},cols:{defaultValue:{value:"1"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"1/3"'},{value:'"2/3"'}]}}}}}catch{}const Q={title:"Layouts/Column",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s={};s.args={children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
  vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
  dolor. Suspendisse vestibulum hendrerit.`};const u={name:"Two Columns",render:()=>l(i,{maxWidth:"5xl",cols:"2",gridGap:"10",children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit."}),e("p",{children:"Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero."})]})},a={name:"Three Columns",render:()=>l(i,{maxWidth:"5xl",cols:"3",gridGap:"10",children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit."}),e("p",{children:"Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero."}),e("p",{children:"Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero."})]})},t={name:"Three Columns",render:()=>l(i,{maxWidth:"7xl",cols:"4",gridGap:"10",children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit."}),l("p",{children:["Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero.",e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit."})]}),e("p",{children:"Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero."})]})};var o,m,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var d,c,p;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Two Columns',
  render: () => <Column maxWidth="5xl" cols="2" gridGap="10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
        vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
        dolor. Suspendisse vestibulum hendrerit.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
    </Column>
}`,...(p=(c=u.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,v,q;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Three Columns',
  render: () => <Column maxWidth="5xl" cols="3" gridGap="10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
        vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
        dolor. Suspendisse vestibulum hendrerit.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
    </Column>
}`,...(q=(v=a.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var h,f,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Three Columns',
  render: () => <Column maxWidth="7xl" cols="4" gridGap="10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
        vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
        dolor. Suspendisse vestibulum hendrerit.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
    </Column>
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const W=["Primary","TwoCol","ThreeCol","FourCol"];export{t as FourCol,s as Primary,a as ThreeCol,u as TwoCol,W as __namedExportsOrder,Q as default};
//# sourceMappingURL=Column.stories-5e8afd9f.js.map
