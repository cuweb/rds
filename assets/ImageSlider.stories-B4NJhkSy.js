import{j as t}from"./jsx-runtime-DmnAw2-i.js";import{I as i}from"./ImageSlider-DyDn9ngU.js";import"./index-BTEhrml1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-eUIJeOi9.js";import"./useLinkContext-BVlaw0aI.js";import"./ChevronRightIcon-CCBHQ_DS.js";const P=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#test",alt:"Image requirement",title:"Image Title",focalPointX:0,focalPointY:10},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement",aspectRatio:"landscape"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"},{id:7,image:"https://picsum.photos/id/111/600/400",link:"#",alt:"Image requirement"},{id:8,image:"https://picsum.photos/id/888/600/400",link:"#",alt:"Image requirement"}],R={title:"Components/Image Slider",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{slidesPerViewDesktop:3,slidesPerViewTablet:2,slidesPerViewMobile:1},render:o=>t.jsx(i,{...o,children:P.map((n,m)=>{const{image:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u}=n;return t.jsx(i.Item,{imageUrl:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u},m)})})};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    slidesPerViewDesktop: 3,
    slidesPerViewTablet: 2,
    slidesPerViewMobile: 1
  },
  render: args => {
    return <ImageSlider {...args}>
        {sliderData.map((image, index) => {
        const {
          image: imageUrl,
          title,
          link,
          focalPointX,
          focalPointY,
          aspectRatio
        } = image;
        return <ImageSlider.Item key={index} imageUrl={imageUrl} title={title} link={link} focalPointX={focalPointX} focalPointY={focalPointY} aspectRatio={aspectRatio} />;
      })}
      </ImageSlider>;
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const S=["Primary"];export{e as Primary,S as __namedExportsOrder,R as default};
