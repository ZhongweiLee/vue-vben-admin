import{a as t,u as o,aS as r,I as e,ax as s,dq as a,i as n,o as i,j as u,w as l,k as d}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./Trigger.bd21b875.js";import{B as m}from"./index.b665b1fb.js";import"./colors.6094b0bd.js";import{T as c}from"./index.1c6791cb.js";import{B as p}from"./BugOutlined.c8878127.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:c,Badge:m},setup(){const{t:t}=o(),{push:n}=r();return{t:t,getCount:e((()=>a.getErrorListCountState)),handleToErrorList:function(){n(s.ERROR_LOG_PAGE).then((()=>{a.commitErrorListCountState(0)}))}}}});f.render=function(t,o,r,e,s,a){const m=n("BugOutlined"),c=n("Badge"),p=n("Tooltip");return i(),u(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[d(c,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[d(m)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;