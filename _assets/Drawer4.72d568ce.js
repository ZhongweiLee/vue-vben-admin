import{a as e,i,o as s,j as t,w as r,k as o,v as a}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.6e1ed0cf.js";import"./Trigger.0d1e9c99.js";import"./omit.cd50f989.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c949c33a.js";import"./CheckOutlined.0f618137.js";import{s as n}from"./index.beeefc20.js";import"./colors.6c5ee752.js";import"./RightOutlined.fba547ae.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import"./index.9ca02ef3.js";import"./index.a172b251.js";import"./index.055efe2d.js";import"./UpOutlined.c1494348.js";import"./index.81ef6f4a.js";import"./index.f2456bee.js";import"./index.9f889c90.js";import"./index.cbd12732.js";import"./index.bc80fc9d.js";import"./LeftOutlined.5f75eb1f.js";import"./tsxHelper.23698464.js";import"./index.5af0c53a.js";import{B as p,a as d}from"./index.6c338271.js";import"./index.873cd9b9.js";import"./index.bc4d46ae.js";import{u as m}from"./useForm.08101b0a.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=e({components:{BasicDrawer:p,BasicForm:n},setup(){const[e,{setFieldsValue:i}]=m({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=d((e=>{i({field2:e.data,field1:e.info})}));return{register:s,schemas:c,registerForm:e}}});l.render=function(e,n,p,d,m,c){const l=i("BasicForm"),f=i("BasicDrawer");return s(),t(f,a(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:r((()=>[o("div",null,[o(l,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default l;