import{a as e,r as t,f as n,i as a,o,j as r,w as s,k as i,p as m}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./index.81a614c0.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./usePageContext.5c284b04.js";import"./types.231a34f8.js";import"./index.e2ac5270.js";import"./transButton.1b860824.js";import{s as p}from"./index.812d3d59.js";import{M as l}from"./index.f40246cd.js";var d=e({components:{MarkDown:l,PageWrapper:p},setup(){const e=t(null),a=t("\n# title\n\n# content\n");return{value:a,toggleTheme:function(){const t=n(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){a.value=e}}}});const u=m("黑暗主题");d.render=function(e,t,n,m,p,l){const d=a("a-button"),c=a("MarkDown"),f=a("PageWrapper");return o(),r(f,{title:"MarkDown组件示例"},{default:s((()=>[i(d,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:s((()=>[u])),_:1},8,["onClick"]),i(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default d;