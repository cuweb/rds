import{j as a}from"./jsx-runtime-B9B14buI.js";import{I as i}from"./ImageSlider-D0pkGczT.js";import"./index-DxDX2vOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-DiIY1iW4.js";import"./useLinkContext-Bwn02r_3.js";import"./ChevronRightIcon-CCsIXVIj.js";const P=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#test",alt:"Image requirement",title:"Image Title",focalPointX:0,focalPointY:10},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement",aspectRatio:"landscape"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"},{id:7,image:"https://picsum.photos/id/111/600/400",link:"#",alt:"Image requirement"},{id:8,image:"https://picsum.photos/id/888/600/400",link:"#",alt:"Image requirement"}],R={title:"Components/Image Slider",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{customClass:"slider",slidesPerViewMobile:1,slidesPerViewTablet:3,slidesPerViewDesktop:4,loop:!0,speed:1e3},render:n=>a.jsx(i,{...n,children:P.map((m,t)=>{const{image:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u}=m;return a.jsx(i.Item,{imageUrl:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u,className:t==0?"swiper-slide-active":""},t)})})};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    customClass: 'slider',
    slidesPerViewMobile: 1,
    slidesPerViewTablet: 3,
    slidesPerViewDesktop: 4,
    loop: true,
    speed: 1000
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
        return <ImageSlider.Item key={index} imageUrl={imageUrl} title={title} link={link} focalPointX={focalPointX} focalPointY={focalPointY} aspectRatio={aspectRatio} className={index == 0 ? \`swiper-slide-active\` : \`\`} />;
      })}
      </ImageSlider>;
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const S=["Primary"];export{e as Primary,S as __namedExportsOrder,R as default};
