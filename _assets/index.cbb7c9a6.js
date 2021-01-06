import{a as e,i as r,o as i,j as o,w as s,k as t,p as a}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./index.a054df69.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./CheckOutlined.1fa89dc8.js";import"./index.4d75401e.js";import{A as n}from"./index.449c490a.js";import"./index.81a614c0.js";import"./colors.757dc4a4.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./usePageContext.5c284b04.js";import"./types.231a34f8.js";import"./index.b5588833.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./index.8d103225.js";import"./UpOutlined.cd1bd02a.js";import"./index.cf36961f.js";import"./index.f9a7bb78.js";import"./index.78c9b85a.js";import"./index.c8001e10.js";import"./index.cf4bc0ce.js";import"./index.fb30cf7f.js";import"./index.cf867a3c.js";import"./index.e410f5b7.js";import"./transButton.1b860824.js";import"./index.1ea2cd46.js";import"./index.fe9d95e6.js";import{u as p}from"./index.57afd88d.js";import"./CloseOutlined.96ea54bd.js";import"./FullscreenOutlined.42f0d2f2.js";import"./index.d364dd82.js";import"./RightOutlined.e5ee841f.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import{s as m}from"./index.812d3d59.js";import"./useAttrs.42205efa.js";import d from"./Drawer1.b8bc92e3.js";import c from"./Drawer2.f8d07ec3.js";import j from"./Drawer3.b8b0941a.js";import"./index.8cf17bff.js";import"./useWindowSizeFn.8b84c5f6.js";import"./index.267a6ea8.js";import"./uuid.40269c00.js";import"./download.3408c5a6.js";import"./useForm.045adca8.js";import l from"./Drawer4.eeac7719.js";import f from"./Drawer5.698a8f94.js";var w=e({components:{Alert:n,PageWrapper:m,Drawer1:d,Drawer2:c,Drawer3:j,Drawer4:l,Drawer5:f},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:s}]=p(),[t,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:s,register3:t,openDrawer3:a,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a("打开Drawer"),D=a("打开Drawer"),g=a("打开Drawer"),x=a("打开Drawer并传递数据"),b=a("打开详情Drawer");w.render=function(e,a,n,p,m,d){const c=r("Alert"),j=r("a-button"),l=r("Drawer1"),f=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),R=r("Drawer5"),C=r("PageWrapper");return i(),o(C,{title:"抽屉组件使用示例"},{default:s((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:s((()=>[u])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:s((()=>[D])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:s((()=>[g])),_:1}),t(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:e.send},{default:s((()=>[x])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:s((()=>[b])),_:1}),t(l,{onRegister:e.register1},null,8,["onRegister"]),t(f,{onRegister:e.register2},null,8,["onRegister"]),t(w,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;