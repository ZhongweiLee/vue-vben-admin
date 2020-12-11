import{a as e,i as o,o as i,j as l,k as s,w as t,n}from"./index.29609d4f.js";import"./xlsx.a48e520c.js";import"./index.82fc86f3.js";import"./Trigger.37c59d90.js";import"./omit.2ffcf325.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.17ee02bd.js";import"./CheckOutlined.1a4e9b39.js";import{s as a}from"./index.2de68cf3.js";import"./index.c737d9ca.js";import"./colors.71b925e9.js";import"./index.b4f57292.js";import"./RightOutlined.f0cf9056.js";import"./index.69ce03f6.js";import"./types.18a8271d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b8f23ccf.js";import"./index.1cc941bc.js";import"./index.7e984e4b.js";import"./UpOutlined.edb786d7.js";import"./DownOutlined.cb72a579.js";import"./index.b09bf7d1.js";import"./index.1a84a7b6.js";import"./index.4fff7c35.js";import{s as p}from"./index.3f1351f0.js";import"./CloseOutlined.96b80b97.js";import"./index.b2fafe90.js";import"./LeftOutlined.995dd1b7.js";import"./functional.d7bff21c.js";import"./RightOutlined.f1b92bb1.js";import"./useContext.104c8f73.js";import"./useTimeout.972bc5d4.js";import"./useDebounce.58e00ed6.js";import"./useEventListener.baa06eae.js";import"./useBreakpoint.a60d1be1.js";import"./resizeEvent.f7059d8c.js";import"./domUtils.f6eff73e.js";import"./tsxHelper.9170d194.js";import"./useExpose.4dbece1c.js";import"./animation.32a3eb92.js";import"./useScrollTo.f3126214.js";import"./index.1afd22ef.js";import"./index.9d72a4f6.js";import"./propTypes.8c664f5d.js";import"./index.c2092c4e.js";import"./index.875b9907.js";import"./useWindowSizeFn.9e056069.js";import"./uuid.40269c00.js";import"./download.0813916e.js";import{u as d}from"./useForm.5e9eb805.js";const r=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],c=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:o=>{e.f2=o.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:o})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:o}=e;await o()}})}];var m=e({components:{BasicForm:a,CollapseContainer:p},setup(){const[e,{setProps:o,updateSchema:i,appendSchemaByField:l,removeSchemaByFiled:s}]=d({labelWidth:120,schemas:r,actionColOptions:{span:24}}),[t]=d({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:e,register1:t,schemas:r,setProps:o,changeLabel3:function(){i({field:"field3",label:"字段3 New"})},changeLabel34:function(){i([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){l({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){s("field11")}}}});const f={class:"m-4"},b={class:"mb-4"},u=n("更改字段3label"),j=n("同时更改字段3,4label"),h=n("往字段3后面插入字段10"),x=n("删除字段11");m.render=function(e,n,a,p,d,r){const c=o("a-button"),m=o("BasicForm"),P=o("CollapseContainer");return i(),l("div",f,[s("div",b,[s(c,{onClick:e.changeLabel3,class:"mr-2"},{default:t((()=>[u])),_:1},8,["onClick"]),s(c,{onClick:e.changeLabel34,class:"mr-2"},{default:t((()=>[j])),_:1},8,["onClick"]),s(c,{onClick:e.appendField,class:"mr-2"},{default:t((()=>[h])),_:1},8,["onClick"]),s(c,{onClick:e.deleteField,class:"mr-2"},{default:t((()=>[x])),_:1},8,["onClick"])]),s(P,{title:"动态表单示例,动态根据表单内其他值改变"},{default:t((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(P,{class:"mt-5",title:"componentProps动态改变"},{default:t((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default m;