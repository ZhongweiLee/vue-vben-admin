let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{ck as t,a as s,B as o,M as i,h as a,V as r,W as d,i as n,o as m,j as p,X as c,k as l,n as f}from"./index.29609d4f.js";import"./xlsx.a48e520c.js";import"./index.82fc86f3.js";import"./Trigger.37c59d90.js";import"./omit.2ffcf325.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.17ee02bd.js";import"./CheckOutlined.1a4e9b39.js";import{s as u,U as j}from"./index.2de68cf3.js";import"./index.c737d9ca.js";import"./colors.71b925e9.js";import"./index.b4f57292.js";import"./RightOutlined.f0cf9056.js";import"./index.69ce03f6.js";import"./types.18a8271d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b8f23ccf.js";import"./index.1cc941bc.js";import"./index.7e984e4b.js";import"./UpOutlined.edb786d7.js";import"./DownOutlined.cb72a579.js";import"./index.b09bf7d1.js";import"./index.1a84a7b6.js";import"./index.4fff7c35.js";import{s as b}from"./index.3f1351f0.js";import"./CloseOutlined.96b80b97.js";import"./index.b2fafe90.js";import"./LeftOutlined.995dd1b7.js";import"./functional.d7bff21c.js";import"./RightOutlined.f1b92bb1.js";import"./useContext.104c8f73.js";import"./useTimeout.972bc5d4.js";import"./useDebounce.58e00ed6.js";import"./useEventListener.baa06eae.js";import"./useBreakpoint.a60d1be1.js";import"./resizeEvent.f7059d8c.js";import"./domUtils.f6eff73e.js";import"./tsxHelper.9170d194.js";import"./useExpose.4dbece1c.js";import"./animation.32a3eb92.js";import"./useScrollTo.f3126214.js";import"./index.1afd22ef.js";import"./index.9d72a4f6.js";import"./propTypes.8c664f5d.js";import{h as x}from"./header.817c2c65.js";import{I as h}from"./index.c2092c4e.js";import"./index.875b9907.js";import"./useWindowSizeFn.9e056069.js";import"./uuid.40269c00.js";import"./download.0813916e.js";import{u as g}from"./useForm.5e9eb805.js";import{b as C}from"./data.8adaf682.js";var _;(_||(_={})).ACCOUNT_INFO="/account/getAccountInfo";var v=s({components:{BasicForm:u,CollapseContainer:b,Button:o,Upload:j,Icon:h},setup(){const{createMessage:e}=a(),[s,{setFieldsValue:o}]=g({labelWidth:120,schemas:C,showActionButtonGroup:!1});return i((async()=>{const e=await t.request({url:_.ACCOUNT_INFO,method:"GET"});o(e)})),{headerImg:x,register:s,handleSubmit:()=>{e.success("更新成功！")}}}});const O=c("data-v-c0c2b920");r("data-v-c0c2b920");const w={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=f("更换头像 "),T=f("更新基本信息");d();const F=O(((e,t,s,o,i,a)=>{const r=n("BasicForm"),d=n("a-col"),c=n("Icon"),f=n("Button"),u=n("Upload"),j=n("a-row"),b=n("CollapseContainer");return m(),p(b,{title:"基本设置",canExpan:!1},{default:O((()=>[l(j,{gutter:24},{default:O((()=>[l(d,{span:14},{default:O((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:O((()=>[l("div",w,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(u,{showUploadList:!1},{default:O((()=>[l(f,{type:"ghost",class:"ml-5"},{default:O((()=>[l(c,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(f,{type:"primary",onClick:e.handleSubmit},{default:O((()=>[T])),_:1},8,["onClick"])])),_:1})}));v.render=F,v.__scopeId="data-v-c0c2b920";export default v;