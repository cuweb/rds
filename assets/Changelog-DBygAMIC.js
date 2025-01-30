import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as i}from"./index-CcqAE1bb.js";import"./DocsRenderer-CFRXHY34-DyrxkXGj.js";import{M as r}from"./index-C-HGoTL3.js";import"./index-C9rmetsa.js";import"./index-yDOeu_rT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DKFVBySW.js";import"./react-18-CmLiJ410.js";import"./index-D-OUEn-9.js";import"./index-32yCLrEH.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function l(d){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(e.p,{children:"All notable changes to this project will be documented in this file."}),`
`,n.jsxs(e.p,{children:["The format is based on ",n.jsx(e.a,{href:"https://keepachangelog.com/en/1.0.0/",rel:"nofollow",children:"Keep a Changelog"}),`,
and this project adheres to `,n.jsx(e.a,{href:"https://semver.org/spec/v2.0.0.html",rel:"nofollow",children:"Semantic Versioning"}),"."]}),`
`,n.jsx(e.p,{children:"Prefix the change with one of these keywords:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Added"}),": for new features."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Breaking"}),": for higher visibility of breaking changes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Changed"}),": for changes in existing functionality."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Deprecated"}),": for soon-to-be removed features."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Removed"}),": for now removed features."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Fixed"}),": for any bug fixes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Security"}),": in case of vulnerabilities."]}),`
`]}),`
`,n.jsx(e.h2,{id:"unreleased",children:"[Unreleased]"}),`
`,n.jsx(e.h3,{id:"added",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"X icon to the assets folder"}),`
`]}),`
`,n.jsx(e.h2,{id:"0191",children:"[0.19.1]"}),`
`,n.jsx(e.h3,{id:"changed",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Adding new props to ",n.jsx(e.code,{children:"Modal"})," component to hide close button, add custom function on close, and prevent outside click modal close"]}),`
`,n.jsxs(e.li,{children:["Light font size for ",n.jsx(e.code,{children:"PageHeader"})]}),`
`,n.jsxs(e.li,{children:["Styles for ",n.jsx(e.code,{children:"FullBanner"}),", ",n.jsx(e.code,{children:"PageHeader"})," and ",n.jsx(e.code,{children:"WideWave"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Browser edge padding difference between basic content and section wrappers"}),`
`]}),`
`,n.jsx(e.h2,{id:"0190",children:"[0.19.0]"}),`
`,n.jsx(e.h3,{id:"breaking",children:"Breaking"}),`
`,n.jsx(e.h4,{id:"layout-components",children:"Layout components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"Column"})," layout component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"add: class for component margin-y-sm"}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"maxWidth"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"gridGap"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"reverse"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"ImageCover"})," layout component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"add: class for breakout width"}),`
`,n.jsx(e.li,{children:"add: class for primary spacing"}),`
`,n.jsxs(e.li,{children:["change: imported ",n.jsx(e.code,{children:"styles.css"})]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"as"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"Main"})," layout component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["add: ",n.jsx(e.code,{children:"maxWidth"})," prop"]}),`
`,n.jsxs(e.li,{children:["add: ",n.jsx(e.code,{children:"noProse"})," prop"]}),`
`,n.jsx(e.li,{children:"add: class for primary spacing"}),`
`,n.jsx(e.li,{children:"add: section markup to return to manage children width"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"Section"})," layout component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"add: class for breakout width"}),`
`,n.jsx(e.li,{children:"add: class for primary spacing"}),`
`,n.jsx(e.li,{children:"add: classes for sub component spacing-y"}),`
`,n.jsxs(e.li,{children:["deprecated: ",n.jsx(e.code,{children:"proseType"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"WideWave"})," layout component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"add: class for breakout width"}),`
`,n.jsx(e.li,{children:"add: class for primary spacing"}),`
`,n.jsxs(e.li,{children:["change: imported ",n.jsx(e.code,{children:"styles.css"})]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"as"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"hasRaven"})," prop"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{id:"content-components",children:"Content components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"Embed"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"maxWidth"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"FullBanner"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"add: class for breakout width"}),`
`,n.jsxs(e.li,{children:["change: imported ",n.jsx(e.code,{children:"styles.css"})]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"as"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"Nav"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"navType"})," prop,"]}),`
`,n.jsxs(e.li,{children:["added: ",n.jsx(e.code,{children:"Nav.Top"})]}),`
`,n.jsxs(e.li,{children:["renamed: ",n.jsx(e.code,{children:"Nav.Aside"})," to ",n.jsx(e.code,{children:"Nav.Buttons"})]}),`
`,n.jsxs(e.li,{children:["renamed: ",n.jsx(e.code,{children:"Nav.Secondary"})," to ",n.jsx(e.code,{children:"Nav.Bottom"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"Placeholder"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"maxWidth"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"PageHeader"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"Events"})," sub component"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"People"})," sub component"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"TextMedia"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"add: class for component margin-y"}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"maxWidth"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"gridGap"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: imported ",n.jsx(e.code,{children:"styles.css"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"TextMedia.Content"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"add: first-last margin class"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"TextMedia.Aside"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["add: ",n.jsx(e.code,{children:"hasBorder"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"border"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"borderColor"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"TextMedia.BgImg"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["add: ",n.jsx(e.code,{children:"hasBorder"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"border"})," prop"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Refactor ",n.jsx(e.code,{children:"WideImage"})," component:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"as"})," prop"]}),`
`,n.jsxs(e.li,{children:["deprecate: ",n.jsx(e.code,{children:"maxWidth"})," prop"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"added-1",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Details"}),": new component to list details for people, events and more"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Embed"}),": ",n.jsx(e.code,{children:"isRound"})," prop that adds rounded-xl class"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ImageCaptionOverlay"}),": reusable caption for ",n.jsx(e.code,{children:"ImageGrid"})," and ",n.jsx(e.code,{children:"ImageSlider"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Pagination"}),": added margin-y-0 on li elements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"SocialIcons"}),": new component to display social icons"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Form.FieldControl"}),": isLoading and isError props to manage field states"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"FormLoader"}),": noMargin prop to remove spacing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Video Banner"}),": manual controls"]}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-1",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Alert"}),": reduced lg text prop size"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Figure"}),": alignment and width prop classes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Figure"}),": replaced primary div wrapper with ",n.jsx(e.code,{children:"Figure"})," component"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Login"}),": change top margin to fit logo inside container"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Modal"}),": removed section wrapper, updated close button styles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Table"}),": remove duplicate ",n.jsx(e.code,{children:"cu-table"})," class"]}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-1",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Form"}),": style of all inputs and ",n.jsx(e.code,{children:"InputAddon"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Nav"}),": navigation and priority plus work properly with any LinkProvider"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"StackedList"}),": Removed gap in dividing lines in listings"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Form.Autosuggest"}),": Option's type to accept any key value pair"]}),`
`]}),`
`,n.jsx(e.h3,{id:"added-2",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Manual control to video banner"}),`
`]}),`
`,n.jsx(e.h2,{id:"01815",children:"[0.18.15]"}),`
`,n.jsx(e.h3,{id:"added-3",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React reference to Form components"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-2",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Navigation and Priority Plus work properly with any LinkProvider"}),`
`]}),`
`,n.jsx(e.h2,{id:"01814",children:"[0.18.14]"}),`
`,n.jsx(e.h3,{id:"changed-2",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Image slider subcomponent structure, reworked padding to prevent cut off"}),`
`]}),`
`,n.jsx(e.h2,{id:"01813",children:"[0.18.13]"}),`
`,n.jsx(e.h3,{id:"fixed-3",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Form Autosuggest style"}),`
`,n.jsx(e.li,{children:"Form Datetime clear icon style"}),`
`,n.jsx(e.li,{children:"Form Input style with prefix and suffix"}),`
`,n.jsx(e.li,{children:"Table horizontal scroll"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-3",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Changed spacing on ",n.jsx(e.code,{children:"cu-no-browsers-edge"})," utility class"]}),`
`]}),`
`,n.jsx(e.h2,{id:"01812",children:"[0.18.12]"}),`
`,n.jsx(e.h3,{id:"changed-4",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Created full banner subcomponents and abstracted out image"}),`
`]}),`
`,n.jsx(e.h2,{id:"01811",children:"[0.18.11]"}),`
`,n.jsx(e.h3,{id:"added-4",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Custom Slider"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-4",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Figure component to display the image size for retina display"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-5",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored Full Banner to remove bg image, position and improve mobile experience"}),`
`]}),`
`,n.jsx(e.p,{children:"##[0.18.10]"}),`
`,n.jsx(e.h3,{id:"changed-6",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"autosuggest initial value and adding onchange when coming from rest"}),`
`]}),`
`,n.jsx(e.h2,{id:"0189",children:"[0.18.9]"}),`
`,n.jsx(e.h3,{id:"changed-7",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"updating the a tag color to cu-red-700 to help with the accessibility"}),`
`]}),`
`,n.jsx(e.h2,{id:"0188",children:"[0.18.8]"}),`
`,n.jsx(e.h3,{id:"changed-8",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"updated the date picker component to have clearable and other attributes for hr project"}),`
`]}),`
`,n.jsx(e.h2,{id:"0187",children:"[0.18.7]"}),`
`,n.jsx(e.h3,{id:"added-5",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Input Addon Component for before and after element in Input Form Field"}),`
`,n.jsx(e.li,{children:"Loader for Pagination , Events and calendar"}),`
`]}),`
`,n.jsx(e.h2,{id:"0186",children:"[0.18.6]"}),`
`,n.jsx(e.h3,{id:"changed-9",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Nav component icon style for desktop and mobile with and without title"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-10",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added clear button and autocomplete to date time picker component and fixed validation error for input fields."}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-5",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Footer style issue to text align center in"}),`
`,n.jsx(e.li,{children:"Z-index issue in ImageCover"}),`
`,n.jsx(e.li,{children:"Overflow issue in WideWave"}),`
`]}),`
`,n.jsx(e.h2,{id:"0185",children:"[0.18.5]"}),`
`,n.jsx(e.h3,{id:"changed-11",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Improved responsiveness of land acknowledgement"}),`
`]}),`
`,n.jsx(e.h2,{id:"0184",children:"[0.18.4]"}),`
`,n.jsx(e.h3,{id:"added-6",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Placeholder style for light prose"}),`
`,n.jsx(e.li,{children:"Loader for Event and People Page header"}),`
`,n.jsx(e.li,{children:"Land acknowledgement in footer"}),`
`]}),`
`,n.jsx(e.h3,{id:"fix",children:"Fix"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Position issue when badges used in news cards"}),`
`]}),`
`,n.jsx(e.h2,{id:"0183",children:"[0.18.3]"}),`
`,n.jsx(e.h3,{id:"changed-12",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Image order added to image grid based on col span prop"}),`
`]}),`
`,n.jsx(e.h2,{id:"0182",children:"[0.18.2]"}),`
`,n.jsx(e.h3,{id:"added-7",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Instagram logo and ORCID logo to social icons in PageHeader for people"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-13",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Twitter icon with X in PageHeader for people"}),`
`]}),`
`,n.jsx(e.h2,{id:"0181",children:"[0.18.1]"}),`
`,n.jsx(e.h3,{id:"changed-14",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"colSpanClasses and rowSpanClasses utilities classes"}),`
`]}),`
`,n.jsx(e.h2,{id:"0180",children:"[0.18.0]"}),`
`,n.jsx(e.h3,{id:"added-8",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Timeline Component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0178",children:"[0.17.8]"}),`
`,n.jsx(e.h3,{id:"fixed-6",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Style issue in WideImage component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0177",children:"[0.17.7]"}),`
`,n.jsx(e.h3,{id:"fixed-7",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Style issue in WideImage component"}),`
`,n.jsx(e.li,{children:"Spacing style to exclude WideImage block's max width"}),`
`]}),`
`,n.jsx(e.h2,{id:"0176",children:"[0.17.6]"}),`
`,n.jsx(e.h3,{id:"added-9",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Add cover, badges, and technology icons to README"}),`
`,n.jsx(e.li,{children:"Style to remove margin from empty elements"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-15",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Table header type to accept ReactNodes"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-8",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Auto suggest component's style"}),`
`,n.jsx(e.li,{children:"Adding classes to table component"}),`
`,n.jsx(e.li,{children:"Accordion Content style by removing extra padding in mobile screen"}),`
`,n.jsx(e.li,{children:"Margin classes for the PageHeader with and without children"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-9",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Form auto suggest menu, options style"}),`
`]}),`
`,n.jsx(e.h3,{id:"refactored",children:"Refactored"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"ImageGrid block to use aspect ratio and bg images"}),`
`]}),`
`,n.jsx(e.h2,{id:"0175",children:"[0.17.5]"}),`
`,n.jsx(e.h3,{id:"changed-16",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Wide Wave markup for ravens bg"}),`
`]}),`
`,n.jsx(e.h2,{id:"0174",children:"[0.17.4]"}),`
`,n.jsx(e.h3,{id:"added-10",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"ORCID prop to PageHeader.People"}),`
`,n.jsx(e.li,{children:"WideWave to export"}),`
`]}),`
`,n.jsx(e.h2,{id:"0173",children:"[0.17.3]"}),`
`,n.jsx(e.h3,{id:"changed-17",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spacing on wide image component"}),`
`]}),`
`,n.jsx(e.h3,{id:"0172",children:"[0.17.2]"}),`
`,n.jsx(e.h3,{id:"added-11",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added custom column option to table"}),`
`,n.jsx(e.li,{children:"Opacity option to Image Cover"}),`
`]}),`
`,n.jsx(e.h2,{id:"0171",children:"[0.17.1]"}),`
`,n.jsx(e.h3,{id:"fixed-10",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Issues with bg wave on image cover"}),`
`]}),`
`,n.jsx(e.h2,{id:"0170",children:"[0.17.0]"}),`
`,n.jsx(e.h3,{id:"added-12",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"bgImageNames added to compiled package"}),`
`]}),`
`,n.jsx(e.h2,{id:"0169",children:"[0.16.9]"}),`
`,n.jsx(e.h3,{id:"changed-18",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Repeating wave graphic for Image Cover"}),`
`]}),`
`,n.jsx(e.h2,{id:"0168",children:"[0.16.8]"}),`
`,n.jsx(e.h3,{id:"added-13",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Images for Image Cover component"}),`
`,n.jsx(e.li,{children:"Script to generate array of images"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-19",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Spacing on full banner and ",n.jsx(e.code,{children:"cu-no-browsers-edge"})," util class"]}),`
`,n.jsx(e.li,{children:"Made bg wave on Wide Wave repeat after 1200px wide"}),`
`,n.jsx(e.li,{children:"Conditional left and right spacing on Wide Wave"}),`
`,n.jsx(e.li,{children:"Spacing on subcomponents used in Wide Wave"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-11",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Issue in generate icons script"}),`
`]}),`
`,n.jsx(e.h2,{id:"0167",children:"[0.16.7]"}),`
`,n.jsx(e.h3,{id:"changed-20",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Width type on full banner"}),`
`]}),`
`,n.jsx(e.h2,{id:"0166",children:"[0.16.6]"}),`
`,n.jsx(e.h3,{id:"change",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Replaced full width with min width on full banner content overlay"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-12",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reset Autosuggest on form reset"}),`
`]}),`
`,n.jsx(e.h2,{id:"0166-1",children:"[0.16.6]"}),`
`,n.jsx(e.h3,{id:"changed-21",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added header type prop to Full Banner"}),`
`]}),`
`,n.jsx(e.h2,{id:"0165",children:"[0.16.5]"}),`
`,n.jsx(e.h3,{id:"changed-22",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Content styles on Full Banner"}),`
`]}),`
`,n.jsx(e.h2,{id:"0164",children:"[0.16.4]"}),`
`,n.jsx(e.h3,{id:"changed-23",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Testimonial no longer forces quote component to be used"}),`
`]}),`
`,n.jsx(e.h2,{id:"0163",children:"[0.16.3]"}),`
`,n.jsx(e.h3,{id:"removed",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed Lexical Editor"}),`
`,n.jsx(e.li,{children:"Removed AWS util function"}),`
`]}),`
`,n.jsx(e.h2,{id:"0162",children:"[0.16.2]"}),`
`,n.jsx(e.h3,{id:"fixed-13",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Autosuggest form field style"}),`
`]}),`
`,n.jsx(e.h3,{id:"added-14",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Row header option to table"}),`
`]}),`
`,n.jsx(e.h3,{id:"change-1",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Discovery Center footer link changed to Future Learning Lab"}),`
`]}),`
`,n.jsx(e.h2,{id:"0161",children:"[0.16.1]"}),`
`,n.jsx(e.h3,{id:"change-2",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Wide image padding-y for light and dark backgrounds"}),`
`,n.jsx(e.li,{children:"Reduced spacing between list items in basic content"}),`
`]}),`
`,n.jsx(e.h2,{id:"0160",children:"[0.16.0]"}),`
`,n.jsx(e.h3,{id:"added-15",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New Component: Call Out"}),`
`,n.jsx(e.li,{children:"New Component: Placeholder"}),`
`,n.jsx(e.li,{children:"New Component: Full Banner"}),`
`,n.jsx(e.li,{children:"New Component: Testimonial"}),`
`,n.jsx(e.li,{children:"New Component: Text & Media (to replace Text & Image)"}),`
`,n.jsx(e.li,{children:"New Layout Component: Image Cover"}),`
`,n.jsx(e.li,{children:"New Layout Component: Wide Wave"}),`
`,n.jsx(e.li,{children:"Data: to pass admissions content into card views"}),`
`,n.jsx(e.li,{children:"Example Layouts: Block testing"}),`
`,n.jsxs(e.li,{children:["Description: added ",n.jsx(e.code,{children:"cu-component"})," class"]}),`
`,n.jsx(e.li,{children:"Figure: added rounded prop"}),`
`,n.jsxs(e.li,{children:["Image Grid: added ",n.jsx(e.code,{children:"cu-component"})," class"]}),`
`,n.jsx(e.li,{children:"Login: added maxWidth prop"}),`
`,n.jsx(e.li,{children:"Modal: added Section wrapper for children"}),`
`,n.jsx(e.li,{children:"Page Header: added styles for ul, ol, li to over ride prose"}),`
`,n.jsxs(e.li,{children:["Section: added ",n.jsx(e.code,{children:"proseType"})," prop for dark or light"]}),`
`,n.jsx(e.li,{children:"Tailwind Theme: included RDS Tailwind Theme in config"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-24",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Alert: updated stories"}),`
`,n.jsx(e.li,{children:"Badge Group: updated stories"}),`
`,n.jsx(e.li,{children:"Button Group: updated stories"}),`
`,n.jsx(e.li,{children:"Calendar: updated stories"}),`
`,n.jsxs(e.li,{children:["Calendar: removed nested ",n.jsx(e.code,{children:"not-prose"})," class"]}),`
`,n.jsx(e.li,{children:"Card: updated stories"}),`
`,n.jsx(e.li,{children:"Description: updated stories"}),`
`,n.jsx(e.li,{children:"Embed: updated stories"}),`
`,n.jsx(e.li,{children:"Figure: updated stories"}),`
`,n.jsx(e.li,{children:"Filter: updated stories"}),`
`,n.jsx(e.li,{children:"Forbidden 403: updated stories"}),`
`,n.jsxs(e.li,{children:["Editor: changed ",n.jsx(e.code,{children:"prose-rds"})," to ",n.jsx(e.code,{children:"prose-dark"})]}),`
`,n.jsx(e.li,{children:"Image Grid: updated stories"}),`
`,n.jsx(e.li,{children:"Listing: updated stories"}),`
`,n.jsx(e.li,{children:"Login: updated stories"}),`
`,n.jsx(e.li,{children:"Modal: updated stories"}),`
`,n.jsx(e.li,{children:"Multiday Calendar: updated stories"}),`
`,n.jsxs(e.li,{children:["Multiday Calendar: removed nested ",n.jsx(e.code,{children:"not-prose"})," class"]}),`
`,n.jsx(e.li,{children:"Not Found 404: updated stories"}),`
`,n.jsx(e.li,{children:"Page Header: updated stories"}),`
`,n.jsx(e.li,{children:"Page Header: updated conditional content sizes"}),`
`,n.jsx(e.li,{children:"Page Header: removed text colors to fallback on prose-dark or prose-light"}),`
`,n.jsxs(e.li,{children:["Page Header Events: replaced a tags with ",n.jsx(e.code,{children:"useLinkContext"})]}),`
`,n.jsx(e.li,{children:"Page Header Events: updated prose class for light font"}),`
`,n.jsx(e.li,{children:"Page Header Events: removed prose class from ul wrappers"}),`
`,n.jsxs(e.li,{children:["Page Header People: replaced a tags with ",n.jsx(e.code,{children:"useLinkContext"})]}),`
`,n.jsx(e.li,{children:"Page Header People: updated prose class for light font"}),`
`,n.jsx(e.li,{children:"Page Header People: removed prose class from ul wrappers"}),`
`,n.jsx(e.li,{children:"Pagination: updated stories"}),`
`,n.jsx(e.li,{children:"Quote: updated stories"}),`
`,n.jsx(e.li,{children:"Search Input: updated stories"}),`
`,n.jsx(e.li,{children:"Table: updated stories"}),`
`,n.jsx(e.li,{children:"Wide Image: updated stories"}),`
`,n.jsx(e.li,{children:"Spacing: consecutive components, first child full banner"}),`
`,n.jsxs(e.li,{children:["Prose: removed ",n.jsx(e.code,{children:"prose-rds"})," and replaced with ",n.jsx(e.code,{children:"prose-dark"})," and ",n.jsx(e.code,{children:"prose-light"})]}),`
`,n.jsxs(e.li,{children:["Vite Config: added ",n.jsx(e.code,{children:"cjs"})," file to build, updated globals"]}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Text & Image component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-14",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Forbidden 403: isCenter toggle properly aligns left"}),`
`,n.jsx(e.li,{children:"Not Found 404: isCenter toggle properly aligns left"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-1",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Main: remove prose class"}),`
`,n.jsxs(e.li,{children:["Section: remove ",n.jsx(e.code,{children:"noProse"})," prop"]}),`
`]}),`
`,n.jsx(e.h2,{id:"0153",children:"[0.15.3]"}),`
`,n.jsx(e.h3,{id:"added-16",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"A new Custom Form Error Component has been added"}),`
`,n.jsx(e.li,{children:"AWS image upload to lexical editor"}),`
`,n.jsx(e.li,{children:"AWS utility functions"}),`
`]}),`
`,n.jsx(e.h2,{id:"0152",children:"[0.15.2]"}),`
`,n.jsx(e.h3,{id:"added-17",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge:"})," new colors - white, black/60, white/60"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge:"})," rounded prop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"BadgeGroup:"})," props for absolute position and top, bottom, left, right"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"propClasses:"})," several new prop classes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Styles:"})," new util class to remove spacing, allow component to go to browsers edge"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Styles:"})," updated global spacing between components"]}),`
`]}),`
`,n.jsx(e.h2,{id:"0151",children:"[0.15.1]"}),`
`,n.jsx(e.h3,{id:"added-18",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"DescriptionLoader with all types"}),`
`,n.jsx(e.li,{children:"Keys to the TableLoader row"}),`
`,n.jsx(e.li,{children:"adding the location and location picker components. Also using them to create a form component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0150",children:"[0.15.0]"}),`
`,n.jsx(e.h3,{id:"breaking-1",children:"Breaking"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alerts:"})," textSize prop renamed to size, options changed to use sm, md, lg"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badges:"})," no longer accepts children, new text prop is required, new link is optional"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ButtonGroup:"})," gap prop requires string, previously integer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card:"})," refactored icon card, now required assetPath prop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description:"})," removed isSmall and hasBorder props"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Listing:"})," refactored icon card, now required assetPath prop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PageHeadersLoader:"})," refactored name to be singular as PageHeaderLoader"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PageHeaders:"})," refactored name to be singular as PageHeader"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"WideImage"}),": remove isType wave in lieu of hasWave boolean"]}),`
`]}),`
`,n.jsx(e.h3,{id:"added-19",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"propClasses:"})," bgOpacityClasses and justifyContentClasses"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"propClasses:"})," add new gridGapClasses options"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"propClasses:"})," add figureSizeClasses and figureAlignClasses"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"propClasses:"})," added as part of package"]}),`
`,n.jsx(e.li,{children:"New Component for 404 and 403 named NotFound404 and Forbidden403"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-25",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alerts:"})," conditional text and icon sizes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alerts:"})," updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge:"})," changed styles to use cu-badge--color classes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge:"})," replaced text prop with children to allow for links"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge:"})," update stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"BadgeGroup:"})," updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"}),": merged prop groups"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Calendar"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"}),": updated max width and hover styles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description:"}),": updated styles to increase consistency"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dialogue"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Embed"}),": moved iframe styles to a class"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Figure:"})," removed isRound prop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Figure"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Filter"}),": updated deprecated headless ui components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Filter"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Footers"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ImageGrid"}),": refactored text overlay, improved prop checks, added new styles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ImageGrid"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Listing"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modal"}),": increased padding"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MultiDayCalendar"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Nav"}),": changed aside li's for donate and apply to buttons"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PageHeader"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pagination"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Quote"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SearchInput"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Table"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TextImage"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"WideImage"}),": updated styles based on conditions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"WideImage"}),": updated stories file for improved examples"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Prose Classes:"})," replaced utilities for cu-prose classes"]}),`
`]}),`
`,n.jsx(e.h2,{id:"0140",children:"[0.14.0]"}),`
`,n.jsx(e.h3,{id:"added-20",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Validation for Lexical Editor using Yup"}),`
`,n.jsx(e.li,{children:"Props for Form's media input to disable preview and set up form value properly"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-26",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"WideImage scrollTo and isType wave conditional styles"}),`
`,n.jsx(e.li,{children:"Renamed global class cu-component-spacing to be cu-component"}),`
`,n.jsx(e.li,{children:"First and last child spacing on Article component to match Section"}),`
`,n.jsx(e.li,{children:"Set prose to true on Main as default"}),`
`,n.jsx(e.li,{children:"noProse prop set to false by default on Main and Section, removed from other components"}),`
`,n.jsx(e.li,{children:"Updated story files for all layout components, updating story display and configuration options"}),`
`,n.jsx(e.li,{children:"Upgraded react-datepicker and lexical packages"}),`
`,n.jsx(e.li,{children:"Black color option for buttons"}),`
`,n.jsx(e.li,{children:"isWhite prop for PageHeaders text"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-15",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Undefined document error in Lexical"}),`
`,n.jsx(e.li,{children:"Issues with FieldArray component and props in Lexical Editor"}),`
`]}),`
`,n.jsx(e.h2,{id:"0130",children:"[0.13.0]"}),`
`,n.jsx(e.h3,{id:"added-21",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New props to wide image to accommodate scroll to and wave graphic"}),`
`,n.jsx(e.li,{children:"Image upload to lexical editor in form component"}),`
`,n.jsx(e.li,{children:"Image Grid component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0121",children:"[0.12.1]"}),`
`,n.jsx(e.h3,{id:"added-22",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added image preview option for image formik component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-16",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Add space between calendar and button"}),`
`,n.jsx(e.li,{children:"Update to dialog component to fix centering"}),`
`,n.jsx(e.li,{children:"Update Formik form's inline component ( radio, checkbox ) style"}),`
`,n.jsx(e.li,{children:"Fixed Formik wrapper and control with proper typescript"}),`
`]}),`
`,n.jsx(e.h2,{id:"0120",children:"[0.12.0]"}),`
`,n.jsx(e.h3,{id:"fixed-17",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Update a function to check Lexical editor empty states"}),`
`]}),`
`,n.jsx(e.h3,{id:"added-23",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added error messaging to Login component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0111",children:"[0.11.1]"}),`
`,n.jsx(e.h3,{id:"added-24",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added SoundCloud subcomponent to Embed component"}),`
`,n.jsx(e.li,{children:"Added prop to pagination to handle paginated endpoints"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-18",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fix for the table initial sorting"}),`
`]}),`
`,n.jsx(e.h2,{id:"0110",children:"[0.11.0]"}),`
`,n.jsx(e.h3,{id:"added-25",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updating the table to have default sort options"}),`
`,n.jsx(e.li,{children:"Added white space no break in event header contact info"}),`
`,n.jsx(e.li,{children:"Added hidden label prop to add form fields"}),`
`,n.jsx(e.li,{children:"Added FieldArray Container"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-27",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updating the dialog in the main.tsx to be used in components outside this project"}),`
`,n.jsx(e.li,{children:"Updated output of single and multi day events in page header"}),`
`,n.jsx(e.li,{children:"Form.group to add the alignment prop and spacing"}),`
`]}),`
`,n.jsx(e.h2,{id:"0107",children:"[0.10.7]"}),`
`,n.jsx(e.h3,{id:"added-26",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added helper text position option in form component"}),`
`,n.jsx(e.li,{children:"Added error class to inputs in form component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-19",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"helperpostop and disabled attributes in the form components"}),`
`,n.jsx(e.li,{children:"Passing all the prop of FormField from all form fields"}),`
`]}),`
`,n.jsx(e.h2,{id:"0106",children:"[0.10.6]"}),`
`,n.jsx(e.h3,{id:"added-27",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Icons: lightning bolt, stacked boxes, glasses"}),`
`]}),`
`,n.jsx(e.h2,{id:"0105",children:"[0.10.5]"}),`
`,n.jsx(e.h3,{id:"changed-28",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Changed prose stlye for page header event data and people title"}),`
`,n.jsx(e.li,{children:"TextImage top and bottom spacing"}),`
`,n.jsx(e.li,{children:"Updated TextImage style imports"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-2",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed hasBorder prop from TextImage"}),`
`]}),`
`,n.jsx(e.h2,{id:"0104",children:"[0.10.4]"}),`
`,n.jsx(e.h3,{id:"changed-29",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Search component new name is SearchInput"}),`
`,n.jsx(e.li,{children:"Search component no longer uses Headless UI components"}),`
`,n.jsx(e.li,{children:"Nav component uses new version of Search component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-20",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Max width on login component"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-3",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Search Form component has been removed in favour of the Search component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0103",children:"[0.10.3]"}),`
`,n.jsx(e.h3,{id:"added-28",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dialog component to be used to prompt users with title and description text"}),`
`,n.jsx(e.li,{children:"Created new helper function to sanitize HTML using DOMPurify package"}),`
`,n.jsx(e.li,{children:"Search Form now includes subcomponents to show a list of results either on page or in a modal"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-30",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated Modal component to only accept content as children or a prop."}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-1",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"isCenter prop on button, moving all alignment options to button group for greater control"}),`
`]}),`
`,n.jsx(e.h2,{id:"0102",children:"[0.10.2]"}),`
`,n.jsx(e.h3,{id:"changed-31",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Card and Listing image sizes to meet a 4/3 ratio"}),`
`]}),`
`,n.jsx(e.h2,{id:"0101",children:"[0.10.1]"}),`
`,n.jsx(e.h3,{id:"changed-32",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Page header event subcomponent start and end date logic"}),`
`,n.jsx(e.li,{children:"Removed button props in page header event subcomponent, allowed children instead"}),`
`]}),`
`,n.jsx(e.h2,{id:"0100",children:"[0.10.0]"}),`
`,n.jsx(e.h3,{id:"changed-33",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Section component, merging it with container"}),`
`,n.jsx(e.li,{children:"Refactored spacing on main, section, and various components"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-2",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Container component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0916",children:"[0.9.16]"}),`
`,n.jsx(e.h3,{id:"added-29",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reverse prop for columns set at 1/3 or 2/3"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-34",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"PageHeader underline styles and spacing"}),`
`]}),`
`,n.jsx(e.h2,{id:"0915",children:"[0.9.15]"}),`
`,n.jsx(e.h3,{id:"fixed-21",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed few component for the spacing"}),`
`]}),`
`,n.jsx(e.h2,{id:"0914",children:"[0.9.14]"}),`
`,n.jsx(e.h3,{id:"added-30",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Add new Login component"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-35",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Update Login link in the Navigation component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0913",children:"[0.9.13]"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Troy goofed and release without pulling from develop"}),`
`]}),`
`,n.jsx(e.h2,{id:"0912",children:"[0.9.12]"}),`
`,n.jsx(e.h3,{id:"added-31",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Block loader with height option in loading component"}),`
`,n.jsx(e.li,{children:"New icon assets"}),`
`,n.jsx(e.li,{children:"Global class for block spacing, applied to all components"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-22",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Page header to display loader for the content"}),`
`,n.jsx(e.li,{children:"Adjusted table loader cell height"}),`
`]}),`
`,n.jsx(e.h2,{id:"0911",children:"[0.9.11]"}),`
`,n.jsx(e.h3,{id:"changed-36",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"peer dependencies"}),`
`]}),`
`,n.jsx(e.h2,{id:"0910",children:"[0.9.10]"}),`
`,n.jsx(e.h3,{id:"changed-37",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"changed the location story to include the google api key as environment variable"}),`
`,n.jsx(e.li,{children:"adding cypress for component and E2E testing."}),`
`,n.jsx(e.li,{children:"SearchForm: add the ability for custom placeholder text"}),`
`,n.jsx(e.li,{children:"isSticky config on Aside component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-23",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed cu-button class to remove hover underline"}),`
`,n.jsx(e.li,{children:"Fixed footer cookie condition to hide it when cookie existing"}),`
`,n.jsx(e.li,{children:"Fixed form components with formik and lexical editor"}),`
`]}),`
`,n.jsx(e.h2,{id:"099",children:"[0.9.9]"}),`
`,n.jsx(e.h3,{id:"changed-38",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Upgrade footer and body classes to display footer at page bottom"}),`
`,n.jsx(e.li,{children:"Replaced children prop with text string in Badge component"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-3",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Moving the dropdown and social share component to deprecated"}),`
`]}),`
`,n.jsx(e.h2,{id:"098",children:"[0.9.8]"}),`
`,n.jsx(e.h3,{id:"added-32",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Line clamp 3 on Card.Header title prop"}),`
`]}),`
`,n.jsx(e.h3,{id:"change-3",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Replaced children with title prop on Card.Header"}),`
`]}),`
`,n.jsx(e.h2,{id:"097",children:"[0.9.7]"}),`
`,n.jsx(e.h3,{id:"added-33",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button: added class based styles"}),`
`,n.jsx(e.li,{children:"Button: added support for type prop"}),`
`,n.jsx(e.li,{children:"Card Loader: page card loader was missing shadow"}),`
`,n.jsx(e.li,{children:"Dropdown: add hasBorder prop"}),`
`,n.jsx(e.li,{children:"Page Header: added isCenter prop"}),`
`,n.jsx(e.li,{children:"Page Header: character limit on content prop"}),`
`,n.jsx(e.li,{children:"Stat Card: character limit on stat and desc props"}),`
`,n.jsx(e.li,{children:"Text and Image: character limit on content"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-39",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Avatar: removed hasShadow and hasBorder props"}),`
`,n.jsx(e.li,{children:"Avatar: replaced rounded prop with isCircle"}),`
`,n.jsx(e.li,{children:"Avatar: updated styles"}),`
`,n.jsx(e.li,{children:"Button: restricted to red and grey color"}),`
`,n.jsx(e.li,{children:"Button: removed outline style"}),`
`,n.jsx(e.li,{children:"Cards: removed button color options in footer sub component, restricted to red"}),`
`,n.jsx(e.li,{children:"Cards: removed shadow options, forced shadow on all cards"}),`
`,n.jsx(e.li,{children:"Cards: removed card bg color, forced white bg on all cards"}),`
`,n.jsx(e.li,{children:"Cards: updated card styles"}),`
`,n.jsx(e.li,{children:"Description List: updated styles"}),`
`,n.jsx(e.li,{children:"Dropdown: removed story view that uses Button component as child"}),`
`,n.jsx(e.li,{children:"Figure: updated props and styles"}),`
`,n.jsx(e.li,{children:"Footer: small link text below logo"}),`
`,n.jsx(e.li,{children:"Icon: restricted to only black, red, white and light grey"}),`
`,n.jsx(e.li,{children:"Icon Cards: restricted to red icons, removed shadow and bg colors"}),`
`,n.jsx(e.li,{children:"Icon Cards: fixed width and height for icons inside container"}),`
`,n.jsx(e.li,{children:"Listings: removed button color options in footer subcomponent, restricted to red"}),`
`,n.jsx(e.li,{children:"Listings: updated card styles"}),`
`,n.jsx(e.li,{children:"Multiday Calendar: updated clear button styles"}),`
`,n.jsx(e.li,{children:"Nav: space between logo and site title"}),`
`,n.jsx(e.li,{children:"Page Header: updated props and styles for event and people sub components"}),`
`,n.jsx(e.li,{children:"Pagination: active text changed to red"}),`
`,n.jsx(e.li,{children:"Search: changed icon color"}),`
`,n.jsx(e.li,{children:"SearchForm: changed icon color"}),`
`,n.jsx(e.li,{children:"Stacked List: removed border option"}),`
`,n.jsx(e.li,{children:"Stacked List: updated max width query sizes when offset used"}),`
`,n.jsx(e.li,{children:"Table: removed hasShadow, forced shadow style"}),`
`,n.jsx(e.li,{children:"Text and Image: header always has underline"}),`
`,n.jsx(e.li,{children:"Wide Image: opacity range set at 60-80"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-4",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Heading: is being replaced by PageHeader"}),`
`,n.jsx(e.li,{children:"Text and Image: removed image angle options"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-24",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Stacked List: bottom border on odd / even items"}),`
`,n.jsx(e.li,{children:'Pagination: accessibility error relating to role="presentation"'}),`
`]}),`
`,n.jsx(e.h2,{id:"096",children:"[0.9.6]"}),`
`,n.jsx(e.h3,{id:"fixed-25",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Footer Cookie to use useEffect to the hide/show cookie for next js."}),`
`]}),`
`,n.jsx(e.h2,{id:"095",children:"[0.9.5]"}),`
`,n.jsx(e.h3,{id:"fixed-26",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Footer Cookie to set the expiry date on button click."}),`
`]}),`
`,n.jsx(e.h2,{id:"094",children:"[0.9.4]"}),`
`,n.jsx(e.h3,{id:"fixed-27",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Adjusting thead icon to fix accessibility"}),`
`,n.jsx(e.li,{children:"Adding role to nav item to fix accessibility"}),`
`,n.jsx(e.li,{children:"Adjusting nav to convert span into div"}),`
`,n.jsx(e.li,{children:"Adjusting alt tag of nav logo"}),`
`,n.jsx(e.li,{children:"Adjusting alt tag of footer logo"}),`
`]}),`
`,n.jsx(e.h2,{id:"093",children:"[0.9.3]"}),`
`,n.jsx(e.h3,{id:"added-34",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Props for isSmall and hasBorder for description list"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-40",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Description list styles"}),`
`]}),`
`,n.jsx(e.h2,{id:"092",children:"[0.9.2]"}),`
`,n.jsx(e.h3,{id:"added-35",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"BadgeGroup component as a wrapper for multiple badges"}),`
`]}),`
`,n.jsx(e.h2,{id:"091",children:"[0.9.1]"}),`
`,n.jsx(e.h3,{id:"fixed-28",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Missing tr in thead of table component"}),`
`]}),`
`,n.jsx(e.h2,{id:"090",children:"[0.9.0]"}),`
`,n.jsx(e.h3,{id:"added-36",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Check in alert if content exists"}),`
`,n.jsx(e.li,{children:"Content prop for PageHeader"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-41",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"PageHeader padding and margin"}),`
`]}),`
`,n.jsx(e.h2,{id:"0810",children:"[0.8.10]"}),`
`,n.jsx(e.h3,{id:"added-37",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"noWordBreak prop to table header"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-42",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated badges to have more space, color prop and noWordBreak prop"}),`
`]}),`
`,n.jsx(e.h2,{id:"089",children:"[0.8.9]"}),`
`,n.jsx(e.h3,{id:"changed-43",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated dependencies"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-29",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored table styles and added markup to fix horizontal scrolling"}),`
`]}),`
`,n.jsx(e.h2,{id:"088",children:"[0.8.8]"}),`
`,n.jsx(e.h3,{id:"fixed-30",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Toast style to set z-index and position"}),`
`]}),`
`,n.jsx(e.h2,{id:"087",children:"[0.8.7]"}),`
`,n.jsx(e.h3,{id:"fixed-31",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Changed styling on icon listing loader component"}),`
`,n.jsx(e.li,{children:"Changed nav aside to not refresh page on click of avatar"}),`
`]}),`
`,n.jsx(e.h2,{id:"086",children:"[0.8.6]"}),`
`,n.jsx(e.h3,{id:"added-38",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Listing loader for pages"}),`
`,n.jsx(e.li,{children:"Card initials"}),`
`]}),`
`,n.jsx(e.h2,{id:"085",children:"[0.8.5]"}),`
`,n.jsx(e.h3,{id:"added-39",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New loaders for listing components"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-4",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Priority plus node package"}),`
`]}),`
`,n.jsx(e.h2,{id:"084",children:"[0.8.4]"}),`
`,n.jsx(e.h3,{id:"fixed-32",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Including card page loader in build"}),`
`]}),`
`,n.jsx(e.h2,{id:"083",children:"[0.8.3]"}),`
`,n.jsx(e.h3,{id:"added-40",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Page card loader"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-44",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Card.Excerpt check for text"}),`
`]}),`
`,n.jsx(e.h2,{id:"082",children:"[0.8.2]"}),`
`,n.jsx(e.h3,{id:"added-41",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Date prefix and position props to Listing.Header"}),`
`]}),`
`,n.jsx(e.h2,{id:"081",children:"[0.8.1]"}),`
`,n.jsx(e.h3,{id:"changed-45",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Git action for dev and main"}),`
`]}),`
`,n.jsx(e.h2,{id:"080",children:"[0.8.0]"}),`
`,n.jsx(e.h3,{id:"changed-46",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored vite + storybook + ts + tailwind config"}),`
`]}),`
`,n.jsx(e.h2,{id:"073",children:"[0.7.3]"}),`
`,n.jsx(e.h3,{id:"added-42",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added onClick option to Nav component"}),`
`,n.jsx(e.li,{children:"Props for date prefix and position in Card.Header subcomponent"}),`
`,n.jsx(e.li,{children:"Props for header level and font size in PageHeader"}),`
`,n.jsx(e.li,{children:"New loaders for various Card components"}),`
`]}),`
`,n.jsx(e.h2,{id:"072",children:"[0.7.2]"}),`
`,n.jsx(e.h3,{id:"added-43",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added Icon subcomponent to Listing component"}),`
`]}),`
`,n.jsx(e.h2,{id:"071",children:"[0.7.1]"}),`
`,n.jsx(e.h3,{id:"changed-47",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dependency versions"}),`
`]}),`
`,n.jsx(e.h2,{id:"070",children:"[0.7.0]"}),`
`,n.jsx(e.h3,{id:"added-44",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"LinkProvider to set the anchor type Ex: next/link"}),`
`,n.jsx(e.li,{children:"Added a series of new icons"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-48",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Nav, Dropdown, Filter, Footer, Search and Table components to accommodate LinkProvider"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-5",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Link component"}),`
`]}),`
`,n.jsx(e.h2,{id:"069",children:"[0.6.9]"}),`
`,n.jsx(e.h3,{id:"fixed-33",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Styling issue on card image thumb spacing"}),`
`]}),`
`,n.jsx(e.h2,{id:"068",children:"[0.6.8]"}),`
`,n.jsx(e.h3,{id:"added-45",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Favicon assets"}),`
`]}),`
`,n.jsx(e.h2,{id:"067",children:"[0.6.7]"}),`
`,n.jsx(e.h3,{id:"changed-49",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Nav component to limit the character in parent item"}),`
`]}),`
`,n.jsx(e.h2,{id:"066",children:"[0.6.6]"}),`
`,n.jsx(e.h3,{id:"added-46",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New component called PageHeaders to replace deprecated TextImage subcomponents"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-6",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Subcomponents for TextImage.Event and TextImage.People"}),`
`]}),`
`,n.jsx(e.h2,{id:"065",children:"[0.6.5]"}),`
`,n.jsx(e.h3,{id:"changed-50",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Changed markup and styles for wide image block"}),`
`]}),`
`,n.jsx(e.h2,{id:"064",children:"[0.6.4]"}),`
`,n.jsx(e.h3,{id:"added-47",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Series of svg icons"}),`
`,n.jsx(e.li,{children:"Auto generation script for icon list as exportable item"}),`
`]}),`
`,n.jsx(e.h2,{id:"063",children:"[0.6.3]"}),`
`,n.jsx(e.h3,{id:"changed-51",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Image aspect ratio for listing and card thumbs"}),`
`]}),`
`,n.jsx(e.h2,{id:"062",children:"[0.6.2]"}),`
`,n.jsx(e.h3,{id:"changed-52",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored listing block to use button instead of primary a wrapper"}),`
`]}),`
`,n.jsx(e.h2,{id:"061",children:"[0.6.1]"}),`
`,n.jsx(e.h3,{id:"changed-53",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spacing on wide image"}),`
`,n.jsx(e.li,{children:"Para styles on heading component"}),`
`,n.jsx(e.li,{children:"Wide image spacing"}),`
`,n.jsx(e.li,{children:"Heading styles and test"}),`
`,n.jsx(e.li,{children:"Desc list styles"}),`
`,n.jsx(e.li,{children:"noLink prop to noHover for cards and listing"}),`
`]}),`
`,n.jsx(e.h2,{id:"060",children:"[0.6.0]"}),`
`,n.jsx(e.h3,{id:"added-48",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Icon thumb subcomponent for cards"}),`
`,n.jsx(e.li,{children:"Image thumb subcomponent for cards"}),`
`,n.jsx(e.li,{children:"Integrated font awesome packages"}),`
`]}),`
`,n.jsx(e.h2,{id:"059",children:"[0.5.9]"}),`
`,n.jsx(e.h3,{id:"changed-54",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Quote styles"}),`
`]}),`
`,n.jsx(e.h2,{id:"058",children:"[0.5.8]"}),`
`,n.jsx(e.h3,{id:"changed-55",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"a11y issue to match changes made to cutheme"}),`
`,n.jsx(e.li,{children:"Replaced @lg with @xl on listing screen loader"}),`
`,n.jsx(e.li,{children:"Removed slice from table"}),`
`]}),`
`,n.jsx(e.h2,{id:"057",children:"[0.5.7]"}),`
`,n.jsx(e.h3,{id:"changed-56",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored cards and subcomponents"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-57",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Examples and projects"}),`
`]}),`
`,n.jsx(e.h2,{id:"056",children:"[0.5.6]"}),`
`,n.jsx(e.h3,{id:"fixed-34",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Issues with container queries on listing items"}),`
`]}),`
`,n.jsx(e.h2,{id:"055",children:"[0.5.5]"}),`
`,n.jsx(e.h3,{id:"changed-58",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Adjusting focus style of cu listing and cu cards"}),`
`,n.jsx(e.li,{children:"Refactored stacked list to merge with panel"}),`
`,n.jsx(e.li,{children:"Cookie notification styles"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-5",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Panel component"}),`
`]}),`
`,n.jsx(e.h2,{id:"054",children:"[0.5.4]"}),`
`,n.jsx(e.h3,{id:"changed-59",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated RDS Tailwind Theme"}),`
`]}),`
`,n.jsx(e.h2,{id:"053",children:"[0.5.3]"}),`
`,n.jsx(e.h3,{id:"changed-60",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"addShadow prop on cards now accepts onCard or onHover for style options"}),`
`]}),`
`,n.jsx(e.h2,{id:"052",children:"[0.5.2]"}),`
`,n.jsx(e.h3,{id:"fixed-35",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Error on card shadows"}),`
`]}),`
`,n.jsx(e.h2,{id:"051",children:"[0.5.1]"}),`
`,n.jsx(e.h3,{id:"changed-61",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default secondary button label for event Text Image component"}),`
`]}),`
`,n.jsx(e.h2,{id:"050",children:"[0.5.0]"}),`
`,n.jsx(e.h3,{id:"changed-62",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spacing on event and people text image sub components"}),`
`,n.jsx(e.li,{children:"Shadow and hover options and styles for cards"}),`
`]}),`
`,n.jsx(e.h2,{id:"049",children:"[0.4.9]"}),`
`,n.jsx(e.h3,{id:"fixed-36",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed previous release"}),`
`]}),`
`,n.jsx(e.h2,{id:"048",children:"[0.4.8]"}),`
`,n.jsx(e.h3,{id:"added-49",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added a series of new options for cards including borders, shadows, grey bg and more"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-63",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Description accordion's vanilla script to handle toggle"}),`
`]}),`
`,n.jsx(e.h2,{id:"047",children:"[0.4.7]"}),`
`,n.jsx(e.h3,{id:"added-50",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Styles for UL / OL and nested list items"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-64",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated styling for alert block text and links"}),`
`,n.jsx(e.li,{children:"Description accordion to remove hooks instead add vanilla script to handle toggle"}),`
`,n.jsx(e.li,{children:"Updated styling for alert block text and links"}),`
`]}),`
`,n.jsx(e.h2,{id:"046",children:"[0.4.6]"}),`
`,n.jsx(e.h3,{id:"fixed-37",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Image angle svg positioning on text image component"}),`
`]}),`
`,n.jsx(e.h2,{id:"045",children:"[0.4.5]"}),`
`,n.jsx(e.h3,{id:"changed-65",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Restricted width of container when grey bg is applied"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-38",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spacing issue with description list"}),`
`]}),`
`,n.jsx(e.h2,{id:"044",children:"[0.4.4]"}),`
`,n.jsx(e.h3,{id:"added-51",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Event and people stories for text image component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-39",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Not prose conflict on text image component"}),`
`]}),`
`,n.jsx(e.h2,{id:"043",children:"[0.4.3]"}),`
`,n.jsx(e.h3,{id:"added-52",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New subcomponents for Event and People banners"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-40",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed styling bug with Alert component"}),`
`]}),`
`,n.jsx(e.h2,{id:"042",children:"[0.4.2]"}),`
`,n.jsx(e.h3,{id:"changed-66",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed persistance functionality from Alert component"}),`
`,n.jsx(e.li,{children:"Updates to text image"}),`
`]}),`
`,n.jsx(e.h2,{id:"041",children:"[0.4.1]"}),`
`,n.jsx(e.h3,{id:"fixed-41",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Issues with text image reverse"}),`
`]}),`
`,n.jsx(e.h2,{id:"040",children:"[0.4.0]"}),`
`,n.jsx(e.h3,{id:"changed-67",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Partial refactor of text image"}),`
`]}),`
`,n.jsx(e.h2,{id:"039",children:"[0.3.9]"}),`
`,n.jsx(e.h3,{id:"changed-68",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored hero components to Text & Image and Wide Image"}),`
`]}),`
`,n.jsx(e.h2,{id:"038",children:"[0.3.8]"}),`
`,n.jsx(e.h3,{id:"fixed-42",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Error publishing 0.3.7"}),`
`]}),`
`,n.jsx(e.h2,{id:"037",children:"[0.3.7]"}),`
`,n.jsx(e.h3,{id:"changed-69",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated hero banner image styles"}),`
`]}),`
`,n.jsx(e.h2,{id:"036",children:"[0.3.6]"}),`
`,n.jsx(e.h3,{id:"changed-70",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added max width to hero image banner"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-43",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button solid and outline colors"}),`
`]}),`
`,n.jsx(e.h2,{id:"035",children:"[0.3.5]"}),`
`,n.jsx(e.h3,{id:"added-53",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Opacity classes"}),`
`,n.jsx(e.li,{children:"Opacity option on banner image"}),`
`]}),`
`,n.jsx(e.h2,{id:"034",children:"[0.3.4]"}),`
`,n.jsx(e.h3,{id:"added-54",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Hero image banner"}),`
`]}),`
`,n.jsx(e.h2,{id:"033",children:"[0.3.3]"}),`
`,n.jsx(e.h3,{id:"fixed-44",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Style issues on Alert"}),`
`,n.jsx(e.li,{children:"a11y errors on cards, listings and footers"}),`
`]}),`
`,n.jsx(e.h2,{id:"032",children:"[0.3.2]"}),`
`,n.jsx(e.h3,{id:"fixed-45",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Type exports in package.json"}),`
`]}),`
`,n.jsx(e.h2,{id:"031",children:"[0.3.1]"}),`
`,n.jsx(e.h3,{id:"fixed-46",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Storybook publish error, missing dependency"}),`
`]}),`
`,n.jsx(e.h2,{id:"030",children:"[0.3.0]"}),`
`,n.jsx(e.h3,{id:"changed-71",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dependencies and RollUp config"}),`
`,n.jsx(e.li,{children:"Bottom spacing on hero text image"}),`
`]}),`
`,n.jsx(e.h2,{id:"025",children:"[0.2.5]"}),`
`,n.jsx(e.h3,{id:"change-4",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed italic from hero text image content"}),`
`]}),`
`,n.jsx(e.h2,{id:"024",children:"[0.2.4]"}),`
`,n.jsx(e.h3,{id:"change-5",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated to cookie notification"}),`
`]}),`
`,n.jsx(e.h2,{id:"023",children:"[0.2.3]"}),`
`,n.jsx(e.h3,{id:"changed-72",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Cookie notification styles"}),`
`]}),`
`,n.jsx(e.h2,{id:"022",children:"[0.2.2]"}),`
`,n.jsx(e.h3,{id:"changed-73",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Cookie notification design"}),`
`]}),`
`,n.jsx(e.h2,{id:"021",children:"[0.2.1]"}),`
`,n.jsx(e.h3,{id:"changed-74",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored cookie as Footer component"}),`
`]}),`
`,n.jsx(e.h2,{id:"020",children:"[0.2.0]"}),`
`,n.jsx(e.h3,{id:"added-55",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Footer banner for departmental info"}),`
`]}),`
`,n.jsx(e.h2,{id:"019",children:"[0.1.9]"}),`
`,n.jsx(e.h3,{id:"fixed-47",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Embed iframe markup"}),`
`]}),`
`,n.jsx(e.h2,{id:"018",children:"[0.1.8]"}),`
`,n.jsx(e.h3,{id:"added-56",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added new Embed subcomponents to embed YouTube, Vimeo, and TED videos"}),`
`]}),`
`,n.jsx(e.h2,{id:"017",children:"[0.1.7]"}),`
`,n.jsx(e.h3,{id:"fixed-48",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Check on URL for kaltura embed"}),`
`]}),`
`,n.jsx(e.h2,{id:"016",children:"[0.1.6]"}),`
`,n.jsx(e.h3,{id:"changed-75",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed prose class from column content"}),`
`]}),`
`,n.jsx(e.h2,{id:"015",children:"[0.1.5]"}),`
`,n.jsx(e.h3,{id:"changed-76",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated styling of event host contact information"}),`
`,n.jsx(e.li,{children:"Fixed email link for event host"}),`
`,n.jsx(e.li,{children:"Prose typography styles"}),`
`]}),`
`,n.jsx(e.h2,{id:"014",children:"[0.1.4]"}),`
`,n.jsx(e.h3,{id:"added-57",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added new Topbar component with various subcomponents"}),`
`,n.jsx(e.li,{children:"Added new Quote component with multiple style options"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-77",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TopBar in all templates and examples"}),`
`,n.jsx(e.li,{children:"Switched to use Yarn to build, fixed conflict with Storybook HTML AddOn"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-7",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TopNav component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-49",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed type errors"}),`
`,n.jsx(e.li,{children:"Error on alert story relating to large text size"}),`
`]}),`
`,n.jsx(e.h2,{id:"013",children:"[0.1.3]"}),`
`,n.jsx(e.h3,{id:"changed-78",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed padding left from footer simple dept contact text"}),`
`,n.jsx(e.li,{children:"Color option changed to hasBorder boolean and limited to red only"}),`
`,n.jsx(e.li,{children:"Card examples with borders have been updated based on hasBorder change"}),`
`,n.jsx(e.li,{children:"Updated styles for paragraph and spacing in heading component"}),`
`,n.jsx(e.li,{children:"Removed borders from table hasStripes option"}),`
`,n.jsx(e.li,{children:"updated the card header to have no hover on title"}),`
`,n.jsx(e.li,{children:"updated the alert component to have textsize and persistence options"}),`
`,n.jsx(e.li,{children:"Added wrapping meta style for card and listing components"}),`
`,n.jsx(e.li,{children:"Applied meta wrapping style to email address of people card and listing"}),`
`]}),`
`,n.jsx(e.h2,{id:"012",children:"[0.1.2]"}),`
`,n.jsx(e.h3,{id:"added-58",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Hide images on hero text image by default, added option to show on mobile"}),`
`,n.jsx(e.li,{children:"added the overflow-hidden class to stats card"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-79",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated assets with new logos and broke out folder structure"}),`
`]}),`
`,n.jsx(e.h2,{id:"011",children:"[0.1.1]"}),`
`,n.jsx(e.h3,{id:"added-59",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Kaltura embed subcomponent"}),`
`]}),`
`,n.jsx(e.h2,{id:"010",children:"[0.1.0]"}),`
`,n.jsx(e.h3,{id:"fixed-50",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Publishing to fix errrors from 0.0.71-0.0.73"}),`
`]}),`
`,n.jsx(e.h2,{id:"0072",children:"[0.0.72]"}),`
`,n.jsx(e.h3,{id:"added-60",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New props for hero event subcomponent"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-51",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Incorrect check in hero event buttons"}),`
`]}),`
`,n.jsx(e.h2,{id:"0071",children:"[0.0.71]"}),`
`,n.jsx(e.h3,{id:"change-6",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated styles for responsive embed wrapper"}),`
`]}),`
`,n.jsx(e.h2,{id:"0070",children:"[0.0.70]"}),`
`,n.jsx(e.h3,{id:"added-61",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Embed wrapper component"}),`
`,n.jsx(e.li,{children:"PowerBi embed subcomponent"}),`
`]}),`
`,n.jsx(e.h2,{id:"0069",children:"[0.0.69]"}),`
`,n.jsx(e.h3,{id:"fixed-52",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Datebox multi day display missed in previous version"}),`
`]}),`
`,n.jsx(e.h2,{id:"0068",children:"[0.0.68]"}),`
`,n.jsx(e.h3,{id:"added-62",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added props and markup for buttons on hero text image event subcomponent"}),`
`,n.jsx(e.li,{children:"Added max width prop to panel layout component"}),`
`,n.jsx(e.li,{children:"Added isCenter props on the content subcomponent for hero text image"}),`
`,n.jsx(e.li,{children:"Added checks for multiday on event date box subcomponent"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-80",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated button and social markup in hero text image social subcomponent"}),`
`,n.jsx(e.li,{children:"Brought back relative class on main layout component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-53",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spacing issue relating to incorrect selector for hero text image"}),`
`]}),`
`,n.jsx(e.h2,{id:"0067",children:"[0.0.67]"}),`
`,n.jsx(e.h3,{id:"added-63",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button group component"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-81",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Conditions on event subcomponent for hero text image"}),`
`]}),`
`,n.jsx(e.h2,{id:"0066",children:"[0.0.66]"}),`
`,n.jsx(e.h3,{id:"changed-82",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reworked some hero text image markup, styles and options"}),`
`]}),`
`,n.jsx(e.h2,{id:"0065",children:"[0.0.65]"}),`
`,n.jsx(e.h3,{id:"added-64",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Subcomponents for hero text image for people profiles and event details"}),`
`]}),`
`,n.jsx(e.h3,{id:"change-7",children:"Change"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored hero: text and image to use flexbox"}),`
`]}),`
`,n.jsx(e.h2,{id:"0064",children:"[0.0.64]"}),`
`,n.jsx(e.h3,{id:"added-65",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Cookies notification component"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-83",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Name of HeroBanner to HeroTextImage"}),`
`,n.jsx(e.li,{children:"Change smallHeader prop, replaced with headerType that accepts h1 or h2"}),`
`]}),`
`,n.jsx(e.h2,{id:"0063",children:"[0.0.63]"}),`
`,n.jsx(e.h3,{id:"added-66",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Card.Initials and Listing.Initials subcomponents"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-84",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed width restrictions on stackedlist and panel"}),`
`]}),`
`,n.jsx(e.h2,{id:"0062",children:"[0.0.62]"}),`
`,n.jsx(e.h3,{id:"changed-85",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated styles for accordion version of desc list that was forgotten in last release"}),`
`]}),`
`,n.jsx(e.h2,{id:"0061",children:"[0.0.61]"}),`
`,n.jsx(e.h3,{id:"changed-86",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated styles on description list to accommodate spacing with multiple child elements"}),`
`]}),`
`,n.jsx(e.h2,{id:"0060",children:"[0.0.60]"}),`
`,n.jsx(e.h3,{id:"added-67",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Background position prop on hero banner"}),`
`]}),`
`,n.jsx(e.h2,{id:"0059",children:"[0.0.59]"}),`
`,n.jsx(e.h3,{id:"added-68",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Content subcomponent for hero banner"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-87",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored hero text image to hero banner"}),`
`,n.jsx(e.li,{children:"Styles and spacing for hero banner"}),`
`]}),`
`,n.jsx(e.h2,{id:"0058",children:"[0.0.58]"}),`
`,n.jsx(e.h3,{id:"added-69",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added image validation to upload component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0057",children:"[0.0.57]"}),`
`,n.jsx(e.h3,{id:"changed-88",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Styles for hero text image"}),`
`]}),`
`,n.jsx(e.h2,{id:"0056",children:"[0.0.56]"}),`
`,n.jsx(e.h3,{id:"unknown",children:"Unknown"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"I missed a version. I'm old. That's my excuse."}),`
`]}),`
`,n.jsx(e.h2,{id:"0055",children:"[0.0.55]"}),`
`,n.jsx(e.h3,{id:"added-70",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Hero Text Image component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0054",children:"[0.0.54]"}),`
`,n.jsx(e.h3,{id:"added-71",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Unique class on all components and layout elements"}),`
`,n.jsx(e.li,{children:"Content subcomponent for layout column"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-89",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored layout spacing"}),`
`,n.jsx(e.li,{children:"Refactored organization in storybook nav"}),`
`,n.jsx(e.li,{children:"Reworked template examples and project templates"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-8",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Banner"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-6",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Deprecated cards and listings"}),`
`]}),`
`,n.jsx(e.h2,{id:"0053",children:"[0.0.53]"}),`
`,n.jsx(e.h3,{id:"fixed-54",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed issue in previous release PR, adding missing changes for search"}),`
`]}),`
`,n.jsx(e.h2,{id:"0052",children:"[0.0.52]"}),`
`,n.jsx(e.h3,{id:"changed-90",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Global spacing"}),`
`,n.jsx(e.li,{children:"Header styles"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-7",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Callback from search"}),`
`]}),`
`,n.jsx(e.h2,{id:"0051",children:"[0.0.51]"}),`
`,n.jsx(e.h3,{id:"changed-91",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spacing on header"}),`
`,n.jsx(e.li,{children:"Global spacing for section, container"}),`
`]}),`
`,n.jsx(e.h2,{id:"0050",children:"[0.0.50]"}),`
`,n.jsx(e.h3,{id:"fixed-55",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Trying to successfully complete a publish to NPM action"}),`
`]}),`
`,n.jsx(e.h2,{id:"0047",children:"[0.0.47]"}),`
`,n.jsx(e.h3,{id:"added-72",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Included Description component in primary export (index.ts)"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-92",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated dependencies"}),`
`]}),`
`,n.jsx(e.h2,{id:"0046",children:"[0.0.46]"}),`
`,n.jsx(e.h3,{id:"added-73",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Description plugin with DL tag in stacked, column and accordion format"}),`
`,n.jsx(e.li,{children:"Option to reverse content order for Stats subcomponent for cards"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-93",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated required form input styles"}),`
`,n.jsx(e.li,{children:"Reduced font size on Stats subcomponent header"}),`
`]}),`
`,n.jsx(e.h2,{id:"0045",children:"[0.0.45]"}),`
`,n.jsx(e.h3,{id:"fixed-56",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"a11y issue in footer"}),`
`,n.jsx(e.li,{children:"Fixed issue with search not closing"}),`
`]}),`
`,n.jsx(e.h2,{id:"0044",children:"[0.0.44]"}),`
`,n.jsx(e.h3,{id:"added-74",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Stats sub-component for cards"}),`
`]}),`
`,n.jsx(e.h2,{id:"0043",children:"[0.0.43]"}),`
`,n.jsx(e.h3,{id:"added-75",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Line clamp to listing header"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-94",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated styles for tables"}),`
`]}),`
`,n.jsx(e.h2,{id:"0042",children:"[0.0.42]"}),`
`,n.jsx(e.h3,{id:"changed-95",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated release doc"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-57",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Type on heroicons"}),`
`]}),`
`,n.jsx(e.h2,{id:"0041",children:"[0.0.41]"}),`
`,n.jsx(e.h3,{id:"added-76",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Release doc"}),`
`]}),`
`,n.jsx(e.h2,{id:"0040",children:"[0.0.40]"}),`
`,n.jsx(e.h3,{id:"added-77",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Aerial banner image to assets"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-96",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default date in calendar and time picker components"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-58",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"category and audience filtering"}),`
`]}),`
`,n.jsx(e.h2,{id:"0039",children:"[0.0.39]"}),`
`,n.jsx(e.h3,{id:"added-78",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Figure component with video child component"}),`
`,n.jsx(e.li,{children:"PR checklist template"}),`
`]}),`
`,n.jsx(e.h2,{id:"0038",children:"[0.0.38]"}),`
`,n.jsx(e.h3,{id:"fixed-59",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Error with release where 37 follows 36"}),`
`]}),`
`,n.jsx(e.h2,{id:"0037",children:"[0.0.37]"}),`
`,n.jsx(e.h3,{id:"fixed-60",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Forgot to pull changes from dev before releasing 0.0.36"}),`
`]}),`
`,n.jsx(e.h2,{id:"0036",children:"[0.0.36]"}),`
`,n.jsx(e.h3,{id:"changed-97",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated form upload functionality including validation"}),`
`]}),`
`,n.jsx(e.h2,{id:"0035",children:"[0.0.35]"}),`
`,n.jsx(e.h3,{id:"changed-98",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Refactored button to use better isType and color props"}),`
`]}),`
`,n.jsx(e.h2,{id:"0034",children:"[0.0.34]"}),`
`,n.jsx(e.h3,{id:"added-79",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"isSmall option for Listing Content component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-61",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Invalid time error on add event"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-8",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Width of 100% from listing images, fixes next image issue"}),`
`]}),`
`,n.jsx(e.h2,{id:"0032",children:"[0.0.32]"}),`
`,n.jsx(e.h3,{id:"changed-99",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated spacing on listing to accommodate items with and without links"}),`
`,n.jsx(e.li,{children:"Changed top spacing for sticky aside component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0032-1",children:"[0.0.32]"}),`
`,n.jsx(e.h3,{id:"added-80",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New listing component with a series of sub-components"}),`
`]}),`
`,n.jsx(e.h2,{id:"0031",children:"[0.0.31]"}),`
`,n.jsx(e.h3,{id:"added-81",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default date and time on Calendar and Form Date Time Picker"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-62",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fixed default date and time values on Calendar and Form Date Time Picker"}),`
`,n.jsx(e.li,{children:"Fixed default coordinates of location map"}),`
`,n.jsx(e.li,{children:"Tailwind classes on Calendar component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0030",children:"[0.0.30]"}),`
`,n.jsx(e.h3,{id:"changed-100",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Included Panel inside StackedList to avoid code duplication"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-63",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated date & time on event list item"}),`
`]}),`
`,n.jsx(e.h2,{id:"0029",children:"[0.0.29]"}),`
`,n.jsx(e.h3,{id:"fixed-64",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated how event dates are rendered"}),`
`]}),`
`,n.jsx(e.h2,{id:"0028",children:"[0.0.28]"}),`
`,n.jsx(e.h3,{id:"added-82",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"New card component with a series of sub-components"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-9",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Card components for News, Events, People, Videos"}),`
`]}),`
`,n.jsx(e.h2,{id:"0027",children:"[0.0.27]"}),`
`,n.jsx(e.h3,{id:"changed-101",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated publish workflow to use npm install"}),`
`]}),`
`,n.jsx(e.h2,{id:"0026",children:"[0.0.26]"}),`
`,n.jsx(e.h3,{id:"added-83",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Form functionality, image upload option"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-102",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Link component changes"}),`
`,n.jsx(e.li,{children:"Date and Time picker styles"}),`
`]}),`
`,n.jsx(e.h2,{id:"0025",children:"[0.0.25]"}),`
`,n.jsx(e.h3,{id:"added-84",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Github workflow for S3 deployment"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-103",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated all github actions to use npm ci instead of npm install"}),`
`]}),`
`,n.jsx(e.h2,{id:"0024",children:"[0.0.24]"}),`
`,n.jsx(e.h3,{id:"fixed-65",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"PR from previous release didn't get properly included"}),`
`]}),`
`,n.jsx(e.h2,{id:"0023",children:"[0.0.23]"}),`
`,n.jsx(e.h3,{id:"added-85",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spinner for loading states"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-104",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated devDependencies"}),`
`,n.jsx(e.li,{children:"Changed clean command to use npm ci"}),`
`,n.jsx(e.li,{children:"Replaced places auto complete in Form with Location Picker"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-66",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Issues relating to avatar and top nav"}),`
`,n.jsx(e.li,{children:"Warnings for any type on Location Picker"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-9",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed GTM from Meta and Body components"}),`
`,n.jsx(e.li,{children:"Removed forwardRef from Meta component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0022",children:"[0.0.22]"}),`
`,n.jsx(e.h3,{id:"added-86",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Heading component"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-105",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reworked Location and Location Picker components to accept multiple markers"}),`
`,n.jsx(e.li,{children:"Updated zoom levels on Location component"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-67",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Github action for storybook deployment"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-10",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Image upload option from WYSIWYG component"}),`
`]}),`
`,n.jsx(e.h2,{id:"0021",children:"[0.0.21]"}),`
`,n.jsx(e.h3,{id:"added-87",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added prose to wysiwyg editor"}),`
`]}),`
`,n.jsx(e.h2,{id:"0020",children:"[0.0.20]"}),`
`,n.jsx(e.h3,{id:"added-88",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added new Section component"}),`
`,n.jsx(e.li,{children:"Project examples pages for cutheme news blocks"}),`
`,n.jsx(e.li,{children:"Global styles to Tailwind RDS utility classes"}),`
`,n.jsx(e.li,{children:"Added prose classes to global styles"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-106",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Removed as prop from Container"}),`
`,n.jsx(e.li,{children:"Removed individual prose styles from layout components, updated reference to global prose classes"}),`
`]}),`
`,n.jsx(e.h2,{id:"0019",children:"[0.0.19]"}),`
`,n.jsx(e.h3,{id:"added-89",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"HTML Addon for storybook"}),`
`,n.jsx(e.li,{children:"Select component for forms"}),`
`]}),`
`,n.jsx(e.h2,{id:"0018",children:"[0.0.18]"}),`
`,n.jsx(e.h3,{id:"changed-107",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated types across various the components"}),`
`]}),`
`,n.jsx(e.h3,{id:"fixed-68",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Styles relating to using overlap options on banner and main components"}),`
`]}),`
`,n.jsx(e.h2,{id:"0017",children:"[0.0.17]"}),`
`,n.jsx(e.h3,{id:"changed-108",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Changed layout component spacing"}),`
`]}),`
`,n.jsx(e.h2,{id:"0016",children:"[0.0.16]"}),`
`,n.jsx(e.h3,{id:"added-90",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Template examples"}),`
`,n.jsx(e.li,{children:"Project examples"}),`
`]}),`
`,n.jsx(e.h2,{id:"0015",children:"[0.0.15]"}),`
`,n.jsx(e.h3,{id:"fixed-69",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Something went wrong publishing 0.0.14, fixing"}),`
`]}),`
`,n.jsx(e.h2,{id:"0014",children:"[0.0.14]"}),`
`,n.jsx(e.h3,{id:"fixed-70",children:"Fixed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Issue relating to not pulling from dev before release 0.0.13"}),`
`]}),`
`,n.jsx(e.h2,{id:"0013",children:"[0.0.13]"}),`
`,n.jsx(e.h3,{id:"added-91",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Add stories for the following components",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Alert"}),`
`,n.jsx(e.li,{children:"Avatar"}),`
`,n.jsx(e.li,{children:"Badge"}),`
`,n.jsx(e.li,{children:"Calendar"}),`
`,n.jsx(e.li,{children:"Dropdown"}),`
`,n.jsx(e.li,{children:"Filter"}),`
`,n.jsx(e.li,{children:"Icon"}),`
`,n.jsx(e.li,{children:"Location"}),`
`,n.jsx(e.li,{children:"Modal"}),`
`,n.jsx(e.li,{children:"Pagination"}),`
`,n.jsx(e.li,{children:"Search Form"}),`
`,n.jsx(e.li,{children:"Social Share"}),`
`,n.jsx(e.li,{children:"Table"}),`
`,n.jsx(e.li,{children:"Toast"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-109",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated types across most of the components"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-110",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Moved component styles into external files",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Avatar"}),`
`,n.jsx(e.li,{children:"Badge"}),`
`,n.jsx(e.li,{children:"Banner"}),`
`,n.jsx(e.li,{children:"Calendar"}),`
`,n.jsx(e.li,{children:"Dropdown"}),`
`,n.jsx(e.li,{children:"Filter"}),`
`,n.jsx(e.li,{children:"Pagination"}),`
`,n.jsx(e.li,{children:"Table"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"0012",children:"[0.0.12]"}),`
`,n.jsx(e.h3,{id:"added-92",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Stories for all card and list item components"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-111",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated devDependencies"}),`
`,n.jsx(e.li,{children:"Updated styles relating to borders on stacked list and child components"}),`
`,n.jsx(e.li,{children:"Add h-full to all list item component link tags"}),`
`]}),`
`,n.jsx(e.h2,{id:"0011",children:"[0.0.11]"}),`
`,n.jsx(e.h3,{id:"added-93",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Badge compoennt added to index for exporting"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-112",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Classes on people card content container"}),`
`,n.jsx(e.li,{children:"Updated people list item markup for images and contact info"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-11",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Unnecessary wrapping div on vido in card component"}),`
`]}),`
`,n.jsx(e.h2,{id:"00101",children:"[0.0.10.1]"}),`
`,n.jsx(e.h3,{id:"changed-113",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Renamed build filename to rds, replacing rds-tailwindui"}),`
`]}),`
`,n.jsx(e.h2,{id:"0010",children:"[0.0.10]"}),`
`,n.jsx(e.h3,{id:"added-94",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Story for Banner component"}),`
`,n.jsx(e.li,{children:"Story for Top Nav component"}),`
`,n.jsx(e.li,{children:"Story for Footer Basic component"}),`
`,n.jsx(e.li,{children:"Story for Footer Standard component"}),`
`]}),`
`,n.jsx(e.h3,{id:"removed-12",children:"Removed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Callback on Video Card component"}),`
`]}),`
`,n.jsx(e.h2,{id:"009",children:"[0.0.9]"}),`
`,n.jsx(e.h3,{id:"added-95",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Event Card compoennt"}),`
`,n.jsx(e.li,{children:"Event Listing component"}),`
`,n.jsx(e.li,{children:"News Card compoennt"}),`
`,n.jsx(e.li,{children:"News Listing component"}),`
`,n.jsx(e.li,{children:"Number Card compoennt"}),`
`,n.jsx(e.li,{children:"People Card compoennt"}),`
`,n.jsx(e.li,{children:"People Listing compoennt"}),`
`,n.jsx(e.li,{children:"Video Card compoennt"}),`
`,n.jsx(e.li,{children:"Details Listing component"}),`
`,n.jsx(e.li,{children:"Feed Listing component"}),`
`,n.jsx(e.li,{children:"File Listing component"}),`
`,n.jsx(e.li,{children:"Job Listing component"}),`
`,n.jsx(e.li,{children:"Link Listing component"}),`
`,n.jsx(e.li,{children:"Marketplace Listing component"}),`
`,n.jsx(e.li,{children:"Card loader component"}),`
`,n.jsx(e.li,{children:"Event loader component"}),`
`,n.jsx(e.li,{children:"Meta component"}),`
`,n.jsx(e.li,{children:"Table component"}),`
`,n.jsx(e.li,{children:"Location component"}),`
`,n.jsx(e.li,{children:"Location Picker component"}),`
`,n.jsx(e.li,{children:"Modal component"}),`
`,n.jsx(e.li,{children:"Search component"}),`
`,n.jsx(e.li,{children:"Searchform component"}),`
`,n.jsx(e.li,{children:"Social Sharing component"}),`
`,n.jsx(e.li,{children:"Top Nav component"}),`
`,n.jsx(e.li,{children:"Story for Card Loading component"}),`
`,n.jsx(e.li,{children:"Story for Event Loading component"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-114",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated Article stories file"}),`
`,n.jsx(e.li,{children:"Updated Aside stories file"}),`
`,n.jsx(e.li,{children:"Updated Column stories file"}),`
`,n.jsx(e.li,{children:"Updated Panel stories file"}),`
`,n.jsx(e.li,{children:"Updated Stacked List stories file"}),`
`]}),`
`,n.jsx(e.h2,{id:"008",children:"[0.0.8]"}),`
`,n.jsx(e.h3,{id:"added-96",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Calendar component"}),`
`,n.jsx(e.li,{children:"Dropdown component"}),`
`,n.jsx(e.li,{children:"Added template for stories file"}),`
`,n.jsx(e.li,{children:"Story file for Button component"}),`
`,n.jsx(e.li,{children:"Story file for Body component"}),`
`,n.jsx(e.li,{children:"Story file for Main component"}),`
`,n.jsx(e.li,{children:"Story file for Container component"}),`
`,n.jsx(e.li,{children:"Story file for Article component"}),`
`,n.jsx(e.li,{children:"Story file for Column component"}),`
`,n.jsx(e.li,{children:"Story file for Aside component"}),`
`,n.jsx(e.li,{children:"Story file for Panel component"}),`
`,n.jsx(e.li,{children:"Story file for Stacked List component"}),`
`,n.jsx(e.li,{children:"Created separate styles file for layout components"}),`
`]}),`
`,n.jsx(e.h2,{id:"007",children:"[0.0.7]"}),`
`,n.jsx(e.h3,{id:"added-97",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Footer components"}),`
`,n.jsx(e.li,{children:"Badge component"}),`
`,n.jsx(e.li,{children:"Avatar component"}),`
`,n.jsx(e.li,{children:"Banner component"}),`
`,n.jsx(e.li,{children:"Installed @size-limit/preset-big-lib"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-115",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Moved @size-limit config to a dot file"}),`
`,n.jsx(e.li,{children:"Updating setup instructions in README"}),`
`,n.jsx(e.li,{children:"Giving proper credit for our initial commit"}),`
`]}),`
`,n.jsx(e.h3,{id:"deprecated-10",children:"Deprecated"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"feat type for comment linting"}),`
`]}),`
`,n.jsx(e.h2,{id:"006",children:"[0.0.6]"}),`
`,n.jsx(e.h3,{id:"changed-116",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Renamed README from mdx to md file"}),`
`]}),`
`,n.jsx(e.h2,{id:"005",children:"[0.0.5]"}),`
`,n.jsx(e.h3,{id:"added-98",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added custom types for comment linting"}),`
`,n.jsx(e.li,{children:"Article layout component"}),`
`,n.jsx(e.li,{children:"Aside layout component"}),`
`,n.jsx(e.li,{children:"Body layout component"}),`
`,n.jsx(e.li,{children:"Column layout component"}),`
`,n.jsx(e.li,{children:"Container layout component"}),`
`,n.jsx(e.li,{children:"Main layout component"}),`
`,n.jsx(e.li,{children:"Panel layout component"}),`
`,n.jsx(e.li,{children:"StackedList layout component"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-117",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated readm me to have info relevant to the project"}),`
`]}),`
`,n.jsx(e.h2,{id:"004",children:"[0.0.4]"}),`
`,n.jsx(e.h3,{id:"added-99",children:"Added"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Added publish.yml git workflow"}),`
`,n.jsx(e.li,{children:"Added a11y add-on to Storybook"}),`
`,n.jsx(e.li,{children:"Added CHANGELOG.mdx and imported into a Changelog story doc file"}),`
`,n.jsxs(e.li,{children:["Initial commit from a clone of a test repo from ",n.jsx(e.a,{href:"https://github.com/NiranjithCU/",rel:"nofollow",children:"NiranjithCU"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-118",children:n.jsx(e.em,{children:"Changed"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated secret keys for Google Maps API"}),`
`,n.jsx(e.li,{children:"Renamed README.md to README.mdx"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-119",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Updated onClick handlers for social login buttons to use single object handler"}),`
`]}),`
`,n.jsx(e.h3,{id:"changed-120",children:"Changed"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Made social login buttons optional on login page"}),`
`]})]})}function c(d={}){const{wrapper:e}={...i(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(l,{...d})}):l(d)}function s(d){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Get Started/Changelog"}),`
`,n.jsx(c,{})]})}function C(d={}){const{wrapper:e}={...i(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(s,{...d})}):s()}export{C as default};
