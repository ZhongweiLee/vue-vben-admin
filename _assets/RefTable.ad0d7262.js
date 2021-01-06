import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as l,w as c,p as r}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./useSortable.f9571e68.js";import"./index.a054df69.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./CheckOutlined.1fa89dc8.js";import"./index.4d75401e.js";import"./index.449c490a.js";import"./colors.757dc4a4.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./types.231a34f8.js";import"./index.b5588833.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./index.8d103225.js";import"./UpOutlined.cd1bd02a.js";import"./LeftOutlined.c7fc7fef.js";import"./index.cf36961f.js";import"./index.f9a7bb78.js";import"./index.78c9b85a.js";import"./index.c8001e10.js";import"./index.cf4bc0ce.js";import"./index.dba233bb.js";import"./zh_CN.0242bd16.js";import"./index.fb30cf7f.js";import"./index.cf867a3c.js";import"./index.e410f5b7.js";import"./CaretDownFilled.24d6d3f2.js";import"./transButton.1b860824.js";import"./index.fe9d95e6.js";import"./CheckOutlined.2f0f2ab8.js";import"./CloseOutlined.96ea54bd.js";import{s as d}from"./index.ff074fe6.js";import"./FullscreenOutlined.42f0d2f2.js";import"./index.d364dd82.js";import"./RightOutlined.e5ee841f.js";import"./SettingOutlined.8836b328.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import"./useAttrs.42205efa.js";import"./index.8cf17bff.js";import"./useWindowSizeFn.8b84c5f6.js";import"./index.267a6ea8.js";import"./uuid.40269c00.js";import"./download.3408c5a6.js";import"./useForm.045adca8.js";import"./useExpose.a2f447f4.js";import{getBasicColumns as m,getBasicShortColumns as f}from"./tableData.2b93dff8.js";import{d as p}from"./table.cd6d42d0.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),h=r("获取选中行Key"),T=r("设置选中行"),y=r("清空选中行"),L=r("获取分页信息");u.render=function(e,i,t,o,r,d){const m=s("a-button"),f=s("BasicTable");return n(),a("div",j,[l("div",b,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[w])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),l("div",R,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[h])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[y])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[L])),_:1},8,["onClick"])]),l(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;