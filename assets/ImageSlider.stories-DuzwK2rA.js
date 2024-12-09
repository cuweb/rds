import{j as t}from"./jsx-runtime-B9B14buI.js";import{I as i}from"./ImageSlider-DS1riv1S.js";import"./index-DxDX2vOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-DiIY1iW4.js";import"./useLinkContext-Bwn02r_3.js";import"./ChevronRightIcon-CCsIXVIj.js";const I=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#test",alt:"Image requirement",title:"Image Title",focalPointX:0,focalPointY:10},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement",aspectRatio:"landscape"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"},{id:7,image:"https://picsum.photos/id/111/600/400",link:"#",alt:"Image requirement"},{id:8,image:"https://picsum.photos/id/888/600/400",link:"#",alt:"Image requirement"}],w={title:"Components/Image Slider",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{slidesPerViewDesktop:3,slidesPerViewTablet:2,slidesPerViewMobile:1},render:n=>t.jsx(i,{...n,children:I.map((m,a)=>{const{image:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u}=m;return t.jsx(i.Slide,{children:t.jsx(i.Image,{imageUrl:l,title:p,link:d,focalPointX:c,focalPointY:g,aspectRatio:u},a)},a)})})};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        return <ImageSlider.Slide key={index}>
              <ImageSlider.Image key={index} imageUrl={imageUrl} title={title} link={link} focalPointX={focalPointX} focalPointY={focalPointY} aspectRatio={aspectRatio} />
            </ImageSlider.Slide>;
      })}
      </ImageSlider>;
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const R=["Primary"];export{e as Primary,R as __namedExportsOrder,w as default};
