const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-DiKvPGDw.js","./chunk-HLWAVYOI-0ckMgdQR.js","./iframe-IdaNeEqa.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./react-18-B3IRZ26U.js","./index-Cr93UcJR.js","./index-CddPBUGQ.js","./index-COebWTXQ.js","./index-B8K4vdXH.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-IdaNeEqa.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-DiKvPGDw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
