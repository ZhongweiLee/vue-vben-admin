import{a as e,i as t,o as i,j as o,k as n,w as a,p as s}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.ef677c95.js";import"./index.6e1ed0cf.js";import"./Trigger.0d1e9c99.js";import"./omit.cd50f989.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c949c33a.js";import"./CheckOutlined.0f618137.js";import"./index.beeefc20.js";import"./colors.6c5ee752.js";import"./index.aa32687c.js";import"./RightOutlined.fba547ae.js";import"./index.54399c4c.js";import"./types.7e830ab9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import"./_baseFor.f4e5f03f.js";import"./index.9ca02ef3.js";import"./index.a172b251.js";import"./index.9250ace7.js";import"./index.055efe2d.js";import"./UpOutlined.c1494348.js";import"./LeftOutlined.2055e192.js";import"./index.81ef6f4a.js";import"./index.f2456bee.js";import"./index.a36fbb7c.js";import"./index.9f889c90.js";import"./index.270163cf.js";import"./zh_CN.0242bd16.js";import{T as r}from"./TableAction.34a184ca.js";import"./index.cbd12732.js";import"./CaretDownFilled.bbefe251.js";import"./CheckOutlined.a5fdbd04.js";import"./CloseOutlined.64314fd9.js";import{s as d,b as c,c as l}from"./EditTableHeaderIcon.76c5f731.js";import"./DownOutlined.163b95e7.js";import"./FullscreenOutlined.3b09f301.js";import"./LeftOutlined.5f75eb1f.js";import"./functional.5a9182aa.js";import"./RedoOutlined.0a5e4c4b.js";import"./RightOutlined.94af8b13.js";import"./SettingOutlined.1bc0aa51.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./domUtils.31b70c37.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import"./index.873cd9b9.js";import"./index.bc4d46ae.js";import"./useForm.08101b0a.js";import"./index.009e9369.js";import"./useWindowSizeFn.5af43173.js";import"./useFullScreen.891b55e2.js";import"./uuid.40269c00.js";import"./useExpose.d312b03e.js";import"./index.a0a60a24.js";import{u as m}from"./useTable.c716adce.js";const p=[{title:"成员姓名",dataIndex:"name",customRender:l({dataIndex:"name",placeholder:"请输入成员姓名"})},{title:"工号",dataIndex:"no",customRender:l({dataIndex:"no",placeholder:"请输入工号"})},{title:"所属部门",dataIndex:"dept",customRender:l({dataIndex:"dept",placeholder:"请输入所属部门"})}],j=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var u=e({components:{BasicTable:d,EditTableHeaderIcon:c,TableAction:r},setup(){const[e,{getDataSource:t}]=m({columns:p,showIndexColumn:!1,dataSource:j,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){e.editable=!0}function o(e){if(e.editable=!1,e.onCancel&&e.onCancel(),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){e.editable=!1,e.onSubmit&&e.onSubmit()}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const b=s("新增成员");u.render=function(e,s,r,d,c,l){const m=t("TableAction"),p=t("BasicTable"),j=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:a((({record:t,column:i})=>[n(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:a((()=>[b])),_:1},8,["onClick"])])};export default u;