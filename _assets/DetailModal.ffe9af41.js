import{a as t,u as s,i as e,o as i,j as o,w as r,k as a,J as m}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./omit.e9eb03aa.js";import"./_baseSlice.1123a25b.js";import"./colors.6094b0bd.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./index.12a76428.js";import"./index.8f4f3761.js";import"./CloseOutlined.dbc427c7.js";import"./FullscreenOutlined.86f2223f.js";import"./RightOutlined.c786bfb1.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import{u as n}from"./useDescription.de92f502.js";import{D as p}from"./index.af5ca885.js";import"./useAttrs.b55758f8.js";import{s as c}from"./index.88eceeb5.js";import"./useWindowSizeFn.c981ffbf.js";import{getDescSchema as d}from"./data.65fc6304.js";var f=t({name:"ErrorLogDetailModal",components:{BasicModal:c,Description:p},props:{info:{type:Object,default:null}},setup(){const{t:t}=s(),[e]=n({column:2,schema:d()});return{register:e,useI18n:s,t:t}}});f.render=function(t,s,n,p,c,d){const f=e("Description"),l=e("BasicModal");return i(),o(l,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(f,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;