let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i,o,j as s,k as a,w as n}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import{A as r}from"./index.0fb921c0.js";import"./RightOutlined.5a1d395b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./index.eff90745.js";import"./UpOutlined.10a785f5.js";import"./LeftOutlined.3c8aea2a.js";import"./index.cfc7be47.js";import{b as d,S as m}from"./index.a5990709.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import p from"./TargetContent.560894aa.js";var l=t({components:{LazyContainer:d,TargetContent:p,Skeleton:m,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},j={class:"lazy-base-demo-wrap"},f=a("h1",null,"向下滚动",-1),u={class:"lazy-base-demo-box"};l.render=function(e,t,r,d,m,p){const l=i("Alert"),x=i("TargetContent"),b=i("Skeleton"),g=i("LazyContainer");return o(),s("div",c,[a(l,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),a("div",j,[f,a("div",u,[a(g,null,{skeleton:n((()=>[a(b,{rows:10})])),default:n((()=>[a(x)])),_:1})])])])};export default l;