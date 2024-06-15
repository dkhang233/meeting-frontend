import{H as d,E as r}from"./element-C5GNUYsG.js";import{m as p,ah as m,p as _,q as f,U as c,O as i,S as l,t as g}from"./vue-UETLlaZb.js";const h={lock:!0,text:"Loading..."},u=(s,e={})=>{let t;return async(...a)=>{try{return t=d.service({...h,...e}),await s(...a)}finally{t==null||t.close()}}},y={code:0,data:{list:[]},message:"获取成功"};function x(s){return new Promise(e=>{setTimeout(()=>{e({...y,data:{list:s}})},1e3)})}function E(){return new Promise((s,e)=>{setTimeout(()=>{e(new Error("发生错误"))},1e3)})}const k={class:"app-container"},w=g("h4",null," This example is a demonstration: by passing the function to be executed to the hook, the hook automatically turns on full-screen loading, and automatically closes loading after the function is executed. ",-1),C=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,v=p({__name:"use-fullscreen-loading",setup(s){const e={text:"An error is about to occur...",background:"#F56C6C20",svg:C,svgViewBox:"-10, -10, 50, 50"},t=async()=>{const o=await u(x)([2,3,3]);r.success(`${o.message}，Pass parameters as ${o.data.list.toString()}`)},a=async()=>{try{await u(E,e)()}catch(o){r.error(o.message)}};return(o,S)=>{const n=m("el-button");return _(),f("div",k,[w,c(n,{type:"primary",onClick:t},{default:i(()=>[l("search successful")]),_:1}),c(n,{type:"danger",onClick:a},{default:i(()=>[l("Query failed")]),_:1})])}}});export{v as default};
