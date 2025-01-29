import{j as i}from"./jsx-runtime-z8MfsBtr.js";import{I as t}from"./ImageSlider-Cdy9dtJt.js";import{M as h}from"./Main-DnchB6dp.js";import"./index-C9rmetsa.js";import"./index-yDOeu_rT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-BYrQ2lXe.js";import"./ImageCaptionOverlay-CGeHGNZX.js";import"./useLinkContext-Fm1c2FUv.js";import"./ChevronRightIcon-CPx26B8C.js";const P=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#test",alt:"Image requirement",title:"Image Title",focalPointX:0,focalPointY:10},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement",aspectRatio:"landscape"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"},{id:7,image:"https://picsum.photos/id/111/600/400",link:"#",alt:"Image requirement"},{id:8,image:"https://picsum.photos/id/888/600/400",link:"#",alt:"Image requirement"}],j={title:"Components/Image Slider",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{slidesPerViewDesktop:3,slidesPerViewTablet:2,slidesPerViewMobile:1},render:s=>i.jsx(h,{children:i.jsx(t,{...s,children:P.map((n,m)=>{const{image:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u}=n;return i.jsx(t.Item,{imageUrl:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u},m)})})})};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    slidesPerViewDesktop: 3,
    slidesPerViewTablet: 2,
    slidesPerViewMobile: 1
  },
  render: args => {
    return <Main>
        <ImageSlider {...args}>
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
        </ImageSlider>
      </Main>;
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const X=["Primary"];export{e as Primary,X as __namedExportsOrder,j as default};
