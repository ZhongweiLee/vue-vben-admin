let s=document.createElement("style");s.innerHTML=".flow-analysis{width:100%;background:#fff}.flow-analysis__left{padding:10px 20px!important;border-right:1px solid rgba(0,0,0,.06);border-radius:0}.flow-analysis__score{margin-top:20px;font-size:30px;line-height:38px;color:rgba(0,0,0,.85)}.flow-analysis__score span{font-size:20px;line-height:28px;color:rgba(0,0,0,.85)}.flow-analysis__rank{margin:16px 0;font-size:12px;line-height:20px;color:#7c8087}.flow-analysis__rank span{display:inline-block;margin-left:10px;color:#1c1d21}.flow-analysis__rs li{display:flex;line-height:28px;justify-content:space-between}.flow-analysis__rs li span:nth-child(1){font-size:14px;color:#1c1d21}.flow-analysis__rs li span:nth-child(2){font-size:16px;color:#1c1d21}",document.head.appendChild(s);import{a as e,N as i,b1 as a,Y as l,b2 as n}from"./index.29609d4f.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.17ee02bd.js";import"./CheckOutlined.1a4e9b39.js";import"./RightOutlined.f0cf9056.js";import"./types.18a8271d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b8f23ccf.js";import{T as t}from"./index.45ee35b7.js";import"./UpOutlined.edb786d7.js";import"./LeftOutlined.36364c62.js";import{D as o}from"./index.c42cd4b3.js";import{P as r}from"./index.1a84a7b6.js";import{s as p}from"./index.3f1351f0.js";import"./useTimeout.972bc5d4.js";import"./useECharts.bfec9e33.js";import"./useDebounce.58e00ed6.js";import"./useEventListener.baa06eae.js";import"./useBreakpoint.a60d1be1.js";import"./props.c31746e0.js";import"./resizeEvent.f7059d8c.js";import"./domUtils.f6eff73e.js";import"./tsxHelper.9170d194.js";import"./useExpose.4dbece1c.js";import"./animation.32a3eb92.js";import"./useScrollTo.f3126214.js";import"./index.1afd22ef.js";import"./index.9d72a4f6.js";import"./propTypes.8c664f5d.js";import d from"./TrendLine.0bada9d9.js";const c="flow-analysis";var f=e({name:"AnalysisFLow",setup(){const s=()=>i(a,null,(()=>i(l,null,i(n,{md:24,lg:8},(()=>i(p,{title:"整体流量评分",canExpan:!1,class:`${c}__left`},(()=>i("div",null,i("div",{class:`${c}__score`},"86.2",i("span",null,"分")),i("div",{class:`${c}__rank`},"排名",i("span",null,"前20%")),i(r,{percent:70,showInfo:!1,status:"active"}),i(o,null),i("ul",{class:`${c}__rs`},i("li",null,i("span",null,"平均分"),i("span",null,"77.5")),i("li",null,i("span",null,"最高分"),i("span",null,"99.5")),i("li",null,i("span",null,"最低分"),i("span",null,"56.5")))))))),i(n,{md:24,lg:16},(()=>i(p,{title:"整体流量趋势",canExpan:!1},(()=>i(d,null))))))));return()=>i(t,{class:c,"default-active-key":"1"},(()=>[i(t.TabPane,{key:"1",tab:"产品一"},(()=>s())),i(t.TabPane,{key:"2",tab:"产品二"},(()=>s())),i(t.TabPane,{key:"3",tab:"产品三"},(()=>s()))]))}});export default f;