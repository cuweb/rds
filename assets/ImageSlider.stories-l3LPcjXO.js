import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./ImageSlider-CCsJzw7g.js";var s;function c(){return(c=e((()=>{s=[{id:1,image:`https://picsum.photos/id/531/600/400`,link:`#test`,alt:`Image requirement`,title:`Image Title`,focalPointX:0,focalPointY:10},{id:2,image:`https://picsum.photos/id/626/600/400`,link:`#`,alt:`Image requirement`,aspectRatio:`landscape`},{id:3,image:`https://picsum.photos/id/381/600/400`,link:`#`,alt:`Image requirement`},{id:4,image:`https://picsum.photos/id/691/600/400`,link:`#`,alt:`Image requirement`},{id:5,image:`https://picsum.photos/id/163/600/400`,link:`#`,alt:`Image requirement`},{id:6,image:`https://picsum.photos/id/482/600/400`,link:`#`,alt:`Image requirement`},{id:7,image:`https://picsum.photos/id/111/600/400`,link:`#`,alt:`Image requirement`},{id:8,image:`https://picsum.photos/id/888/600/400`,link:`#`,alt:`Image requirement`}]})))()}var l,u,d,f;function p(){return(p=e((()=>{t(),a(),c(),r(),l=n(),u={title:`Components/Image Slider`,component:o,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},d={args:{slidesPerViewDesktop:3,slidesPerViewTablet:2,slidesPerViewMobile:1},render:e=>(0,l.jsx)(i,{children:(0,l.jsx)(o,{...e,children:s.map((e,t)=>{let{image:n,title:r,link:i,focalPointX:a,focalPointY:s,aspectRatio:c}=e;return(0,l.jsx)(o.Item,{imageUrl:n,title:r,link:i,focalPointX:a,focalPointY:s,aspectRatio:c},t)})})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Primary`]})))()}p();export{d as Primary,f as __namedExportsOrder,u as default};