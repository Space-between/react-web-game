(this["webpackJsonpreact-web-game"]=this["webpackJsonpreact-web-game"]||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),u=a(9),o=a(2),i=a(20),s=a(21),m=a(24),b=a(23),E=a(3),f=a(1),O=Object(n.memo)((function(e){var t=e.tryInfo;return r.a.createElement("li",null,r.a.createElement("div",null,t.try),r.a.createElement("div",null,t.result))})),d=function(){for(var e=[1,2,3,4,5,6,7,8,9],t=[],a=0;a<4;a+=1){var n=e.splice(Math.floor(Math.random()*(9-a)),1)[0];t.push(n)}return t},h=function(){var e=Object(n.useState)(d()),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(f.a)(l,2),o=u[0],i=u[1],s=Object(n.useState)(""),m=Object(f.a)(s,2),b=m[0],h=m[1],j=Object(n.useState)([]),p=Object(f.a)(j,2),v=p[0],g=p[1],I=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,b),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),o===a.join(""))g((function(e){return[].concat(Object(E.a)(e),[{try:o,result:"\ud648\ub7f0!"}])})),h("\ud648\ub7f0!"),alert("\uac8c\uc784\uc744 \ub2e4\uc2dc \uc2e4\ud589\ud569\ub2c8\ub2e4."),i(""),c(d()),g([]),I.current.focus();else{var t=o.split("").map((function(e){return parseInt(e)})),n=0,r=0;if(v.length>=9)h("10\ubc88 \ub118\uac8c \ud2c0\ub824\uc11c \uc2e4\ud328! \ub2f5\uc740 ".concat(a.join(","),"\uc600\uc2b5\ub2c8\ub2e4!")),alert("\uac8c\uc784\uc744 \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4."),i(""),c(d()),g([]),I.current.focus();else{console.log("\ub2f5\uc740",a.join(""));for(var l=0;l<4;l+=1)t[l]===a[l]?(console.log("strike",t[l],a[l]),n+=1):a.includes(t[l])&&(console.log("ball",t[l],a.indexOf(t[l])),r+=1);g((function(e){return[].concat(Object(E.a)(e),[{try:o,result:"".concat(n," \uc2a4\ud2b8\ub77c\uc774\ud06c, ").concat(r," \ubcfc\uc785\ub2c8\ub2e4.")}])})),i(""),I.current.focus()}}}},r.a.createElement("input",{ref:I,maxLength:4,value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",null,"\uc785\ub825!")),r.a.createElement("div",null,"\uc2dc\ub3c4: ",v.length),r.a.createElement("ul",null,v.map((function(e,t){return r.a.createElement(O,{key:"".concat(t+1,"\ucc28 \uc2dc\ub3c4 : ").concat(e.try),tryInfo:e})}))))},j={"\ubc14\uc704":"0","\uac00\uc704":"-142px","\ubcf4":"-284px"},p={"\uac00\uc704":1,"\ubc14\uc704":0,"\ubcf4":-1},v=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(j.\ubc14\uc704),u=Object(f.a)(l,2),o=u[0],i=u[1],s=Object(n.useState)(0),m=Object(f.a)(s,2),b=m[0],E=m[1],O=Object(n.useRef)();Object(n.useEffect)((function(){return console.log("\ub2e4\uc2dc \uc2e4\ud589"),O.current=setInterval(d,100),function(){console.log("\uc885\ub8cc"),clearInterval(O.current)}}),[o]);var d=function(){o===j.\ubc14\uc704?i(j.\uac00\uc704):o===j.\uac00\uc704?i(j.\ubcf4):o===j.\ubcf4&&i(j.\ubc14\uc704)},h=function(e){return function(){clearInterval(O.current);var t=p[e]-p[function(e){return Object.entries(j).find((function(t){return t[1]===e}))[0]}(o)];0===t?c("\ube44\uacbc\uc2b5\ub2c8\ub2e4!"):[-1,2].includes(t)?(c("\uc774\uacbc\uc2b5\ub2c8\ub2e4!"),E((function(e){return e+1}))):(c("\uc84c\uc2b5\ub2c8\ub2e4!"),E((function(e){return e-1}))),setTimeout((function(){O.current=setInterval(d,100)}),1e3)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"computer",style:{background:"url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ".concat(o," 0")}}),r.a.createElement("div",null,r.a.createElement("button",{id:"rock",className:"btn",onClick:h("\ubc14\uc704")},"\ubc14\uc704"),r.a.createElement("button",{id:"scissor",className:"btn",onClick:h("\uac00\uc704")},"\uac00\uc704"),r.a.createElement("button",{id:"paper",className:"btn",onClick:h("\ubcf4")},"\ubcf4")),r.a.createElement("div",null,a),r.a.createElement("div",null,"\ud604\uc7ac ",b,"\uc810"))},g=Object(n.memo)((function(e){var t,a=e.number;return t=a<=10?"red":a<=20?"orange":a<=30?"yellow":a<=40?"blue":"green",r.a.createElement("div",{className:"ball",style:{background:t}},a)}));function I(){console.log("getWinNumbers");for(var e=Array(45).fill().map((function(e,t){return t+1})),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);var a=t[t.length-1],n=t.slice(0,6).sort((function(e,t){return e-t}));return[].concat(Object(E.a)(n),[a])}var N=function(){var e=Object(n.useMemo)((function(){return I()}),[]),t=Object(n.useState)(e),a=Object(f.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)([]),o=Object(f.a)(u,2),i=o[0],s=o[1],m=Object(n.useState)(null),b=Object(f.a)(m,2),O=b[0],d=b[1],h=Object(n.useState)(!1),j=Object(f.a)(h,2),p=j[0],v=j[1],N=Object(n.useRef)([]);Object(n.useEffect)((function(){console.log("useEffect");for(var e=function(e){N.current[e]=setTimeout((function(){s((function(t){return[].concat(Object(E.a)(t),[c[e]])}))}),1e3*(e+1))},t=0;t<c.length-1;t++)e(t);return N.current[6]=setTimeout((function(){d(c[6]),v(!0)}),7e3),function(){N.current.forEach((function(e){clearTimeout(e)}))}}),[N.current]),Object(n.useEffect)((function(){console.log("\ub85c\ub610 \uc22b\uc790\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")}),[c]);var M=Object(n.useCallback)((function(){console.log("onClickRedo"),console.log(c),l(I()),s([]),d(null),v(!1),N.current=[]}),[c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\ub2f9\ucca8 \uc22b\uc790"),r.a.createElement("div",{id:"\uacb0\uacfc\ucc3d"},i.map((function(e){return r.a.createElement(g,{key:e,number:e})}))),r.a.createElement("div",null,"\ubcf4\ub108\uc2a4!"),O&&r.a.createElement(g,{number:O,onClick:M}),p&&r.a.createElement("button",{onClick:M},"\ud55c \ubc88 \ub354!"))},M=function(){var e=Object(n.useState)(Math.ceil(9*Math.random())),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(Math.ceil(9*Math.random())),u=Object(f.a)(l,2),o=u[0],i=u[1],s=Object(n.useState)(""),m=Object(f.a)(s,2),b=m[0],E=m[1],O=Object(n.useState)(""),d=Object(f.a)(O,2),h=d[0],j=d[1],p=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a," \uacf1\ud558\uae30 ",o,"\ub294?"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),parseInt(b)===a*o?(j("\uc815\ub2f5"),c(Math.ceil(9*Math.random())),i(Math.ceil(9*Math.random())),E(""),p.current.focus()):(j("\ub561"),E(""),p.current.focus())}},r.a.createElement("input",{ref:p,type:"number",value:b,onChange:function(e){return E(e.target.value)}}),r.a.createElement("button",null,"\uc785\ub825!")),r.a.createElement("div",{id:"result"},h))},w=a(5),C=function(e){switch(e){case A.NORMAL:case A.MINE:return{background:"#444"};case A.CLICKED_MINE:case A.OPENED:return{background:"white"};case A.QUESTION_MINE:case A.QUESTION:return{background:"yellow"};case A.FLAG_MINE:case A.FLAG:return{background:"red"};default:return{background:"white"}}},S=Object(n.memo)((function(e){var t=e.rowIndex,a=e.cellIndex,c=Object(n.useContext)(_),l=c.tableData,u=c.dispatch,o=c.halted,i=Object(n.useCallback)((function(){if(!o)switch(l[t][a]){case A.OPENED:case A.FLAG_MINE:case A.FLAG:case A.QUESTION_MINE:case A.QUESTION:return;case A.NORMAL:return void u({type:G,row:t,cell:a});case A.MINE:return void u({type:U,row:t,cell:a});default:return}}),[l[t][a],o]),s=Object(n.useCallback)((function(e){if(e.preventDefault(),!o)switch(l[t][a]){case A.NORMAL:case A.MINE:return void u({type:Q,row:t,cell:a});case A.FLAG_MINE:case A.FLAG:return void u({type:P,row:t,cell:a});case A.QUESTION_MINE:case A.QUESTION:return void u({type:K,row:t,cell:a});default:return}}),[l[t][a],o]);return console.log("td rendered"),r.a.createElement(L,{onClickTd:i,onRightClickTd:s,data:l[t][a]})})),L=Object(n.memo)((function(e){var t=e.onClickTd,a=e.onRightClickTd,n=e.data;return console.log("real td rendered"),r.a.createElement("td",{style:C(n),onClick:t,onContextMenu:a},function(e){switch(console.log("getTdtext"),e){case A.NORMAL:return"";case A.MINE:return"X";case A.CLICKED_MINE:return"\ud391";case A.FLAG_MINE:case A.FLAG:return"!";case A.QUESTION_MINE:case A.QUESTION:return"?";default:return e||""}}(n))})),k=S,D=Object(n.memo)((function(e){var t=e.rowIndex,a=Object(n.useContext)(_).tableData;return r.a.createElement("tr",null,a[0]&&Array(a[0].length).fill().map((function(e,a){return r.a.createElement(k,{rowIndex:t,cellIndex:a})})))})),y=Object(n.memo)((function(){var e=Object(n.useContext)(_).tableData;return r.a.createElement("table",null,Array(e.length).fill().map((function(e,t){return r.a.createElement(D,{rowIndex:t})})))})),T=Object(n.memo)((function(){var e=Object(n.useState)(10),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(10),u=Object(f.a)(l,2),o=u[0],i=u[1],s=Object(n.useState)(20),m=Object(f.a)(s,2),b=m[0],E=m[1],O=Object(n.useContext)(_).dispatch,d=Object(n.useCallback)((function(e){c(e.target.value)}),[]),h=Object(n.useCallback)((function(e){i(e.target.value)}),[]),j=Object(n.useCallback)((function(e){E(e.target.value)}),[]),p=Object(n.useCallback)((function(){O({type:x,row:a,cell:o,mine:b})}),[a,o,b]);return r.a.createElement("div",null,r.a.createElement("input",{type:"number",placeholder:"\uc138\ub85c",value:a,onChange:d}),r.a.createElement("input",{type:"number",placeholder:"\uac00\ub85c",value:o,onChange:h}),r.a.createElement("input",{type:"number",placeholder:"\uc9c0\ub8b0",value:b,onChange:j}),r.a.createElement("button",{onClick:p},"\uc2dc\uc791"))})),A={MINE:-7,NORMAL:-1,QUESTION:-2,FLAG:-3,QUESTION_MINE:-4,FLAG_MINE:-5,CLICKED_MINE:-6,OPENED:0},_=Object(n.createContext)({tableData:[],halted:!0,dispatch:function(){}}),R={tableData:[],data:{row:0,cell:0,mine:0},timer:0,result:"",halted:!0,openedCount:0},F=function(e,t,a){console.log(e,t,a);for(var n=Array(e*t).fill().map((function(e,t){return t})),r=[];n.length>e*t-a;){var c=n.splice(Math.floor(Math.random()*n.length),1)[0];r.push(c)}for(var l=[],u=0;u<e;u++){var o=[];l.push(o);for(var i=0;i<t;i++)o.push(A.NORMAL)}for(var s=0;s<r.length;s++){var m=Math.floor(r[s]/t),b=r[s]%t;l[m][b]=A.MINE}return console.log(l),l},x="START_GAME",G="OPEN_CELL",U="CLICK_MINE",Q="FLAG_CELL",P="QUESTION_CELL",K="NORMALIZE_CELL",W=function(e,t){switch(t.type){case x:return Object(w.a)(Object(w.a)({},e),{},{data:{row:t.row,cell:t.cell,mine:t.mine},openedCount:0,tableData:F(t.row,t.cell,t.mine),halted:!1,timer:0});case G:var a=Object(E.a)(e.tableData);a.forEach((function(e,t){a[t]=Object(E.a)(e)}));var n=[],r=0;console.log(a.length,a[0].length);!function e(t,c){if(console.log(t,c),!(t<0||t>=a.length||c<0||c>=a[0].length)&&![A.OPENED,A.FLAG,A.FLAG_MINE,A.QUESTION_MINE,A.QUESTION].includes(a[t][c])&&!n.includes(t+"/"+c)){n.push(t+"/"+c);var l=[a[t][c-1],a[t][c+1]];a[t-1]&&(l=l.concat([a[t-1][c-1],a[t-1][c],a[t-1][c+1]])),a[t+1]&&(l=l.concat([a[t+1][c-1],a[t+1][c],a[t+1][c+1]]));var u=l.filter((function(e){return[A.MINE,A.FLAG_MINE,A.QUESTION_MINE].includes(e)})).length;if(0===u&&t>-1){var o=[];t-1>-1&&(o.push([t-1,c-1]),o.push([t-1,c]),o.push([t-1,c+1])),o.push([t,c-1]),o.push([t,c+1]),t+1<a.length&&(o.push([t+1,c-1]),o.push([t+1,c]),o.push([t+1,c+1])),o.forEach((function(t){a[t[0]][t[1]]!==A.OPENED&&e(t[0],t[1])}))}a[t][c]===A.NORMAL&&(r+=1),a[t][c]=u}}(t.row,t.cell);var c=!1,l="";return console.log(e.data.row*e.data.cell-e.data.mine,e.openedCount,r),e.data.row*e.data.cell-e.data.mine===e.openedCount+r&&(c=!0,l="".concat(e.timer,"\ucd08\ub9cc\uc5d0 \uc2b9\ub9ac\ud558\uc168\uc2b5\ub2c8\ub2e4")),Object(w.a)(Object(w.a)({},e),{},{tableData:a,openedCount:e.openedCount+r,halted:c,result:l});case U:var u=Object(E.a)(e.tableData);return u[t.row]=Object(E.a)(e.tableData[t.row]),u[t.row][t.cell]=A.CLICKED_MINE,Object(w.a)(Object(w.a)({},e),{},{tableData:u,halted:!0});case Q:var o=Object(E.a)(e.tableData);return o[t.row]=Object(E.a)(e.tableData[t.row]),o[t.row][t.cell]===A.MINE?o[t.row][t.cell]=A.FLAG_MINE:o[t.row][t.cell]=A.FLAG,Object(w.a)(Object(w.a)({},e),{},{tableData:o});case P:var i=Object(E.a)(e.tableData);return i[t.row]=Object(E.a)(e.tableData[t.row]),i[t.row][t.cell]===A.FLAG_MINE?i[t.row][t.cell]=A.QUESTION_MINE:i[t.row][t.cell]=A.QUESTION,Object(w.a)(Object(w.a)({},e),{},{tableData:i});case K:var s=Object(E.a)(e.tableData);return s[t.row]=Object(E.a)(e.tableData[t.row]),s[t.row][t.cell]===A.QUESTION_MINE?s[t.row][t.cell]=A.MINE:s[t.row][t.cell]=A.NORMAL,Object(w.a)(Object(w.a)({},e),{},{tableData:s});case"INCREMENT_TIMER":return Object(w.a)(Object(w.a)({},e),{},{timer:e.timer+1});default:return e}},B=function(){var e=Object(n.useReducer)(W,R),t=Object(f.a)(e,2),a=t[0],c=t[1],l=a.tableData,u=a.halted,o=a.timer,i=a.result,s=Object(n.useMemo)((function(){return{tableData:l,halted:u,dispatch:c}}),[l,u]);return Object(n.useEffect)((function(){var e;return!1===u&&(e=setInterval((function(){c({type:"INCREMENT_TIMER"})}),1e3)),function(){clearInterval(e)}}),[u]),r.a.createElement(_.Provider,{value:s},r.a.createElement(T,null),r.a.createElement("div",null,o),r.a.createElement(y,null),r.a.createElement("div",null,i))},J=a(0),X=a(0).useState,Z=function(){var e=X("\uac1c\ubc1c"),t=Object(f.a)(e,2),a=t[0],n=t[1],r=X(""),c=Object(f.a)(r,2),l=c[0],u=c[1],o=X(""),i=Object(f.a)(o,2),s=i[0],m=i[1],b=J.useRef(null);return J.createElement(J.Fragment,null,J.createElement("div",null,a),J.createElement("form",{onSubmit:function(e){e.preventDefault(),a[a.length-1]===l[0]?(m("\ub529\ub3d9\ub315"),n(l),u(""),b.current.focus()):(m("\ub561"),u(""),b.current.focus())}},J.createElement("input",{ref:b,value:l,onChange:function(e){return u(e.currentTarget.value)}}),J.createElement("button",null,"\uc785\ub825!")),J.createElement("div",null,s))},$=(a(30),function(){var e=Object(n.useState)("waiting"),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("\ud074\ub9ad\ud574\uc11c \uc2dc\uc791\ud558\uc138\uc694."),u=Object(f.a)(l,2),o=u[0],i=u[1],s=Object(n.useState)([]),m=Object(f.a)(s,2),b=m[0],O=m[1],d=Object(n.useRef)(null),h=Object(n.useRef)(0),j=Object(n.useRef)(0),p=function(){O([])};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"screen",className:a,onClick:function(){"waiting"===a?(d.current=setTimeout((function(){c("now"),i("\uc9c0\uae08 \ud074\ub9ad"),h.current=new Date}),Math.floor(1e3*Math.random())+2e3),c("ready"),i("\ucd08\ub85d\uc0c9\uc774 \ub418\uba74 \ud074\ub9ad\ud558\uc138\uc694.")):"ready"===a?(clearTimeout(d.current),c("waiting"),i("\ub108\ubb34 \uc131\uae09\ud558\uc2dc\uad70\uc694! \ucd08\ub85d\uc0c9\uc774 \ub41c \ud6c4\uc5d0 \ud074\ub9ad\ud558\uc138\uc694")):"now"===a&&(j.current=new Date,c("waiting"),i("\ud074\ub9ad\ud574\uc11c \uc2dc\uc791\ud558\uc138\uc694."),O((function(e){return[].concat(Object(E.a)(e),[j.current-h.current])})))}},o),0===b.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\ud3c9\uade0 \uc2dc\uac04: ",b.reduce((function(e,t){return e+t}))/b.length,"ms"),r.a.createElement("button",{onClick:p},"\ub9ac\uc14b")))}),q=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=new URLSearchParams(this.props.location.search.slice(1));return console.log(e.get("hello")),"number-baseball"===this.props.match.params.name?r.a.createElement(h,null):"rock-scissors-paper"===this.props.match.params.name?r.a.createElement(v,null):"lotto-generator"===this.props.match.params.name?r.a.createElement(N,null):"gugudan"===this.props.match.params.name?r.a.createElement(M,null):"Ending"===this.props.match.params.name?r.a.createElement(Z,null):"Minesweeper"===this.props.match.params.name?r.a.createElement(B,null):"Response"===this.props.match.params.name?r.a.createElement($,null):r.a.createElement("div",null,"\uc77c\uce58\ud558\ub294 \uac8c\uc784\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")}}]),a}(n.Component),z=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/game/number-baseball"},"\uc22b\uc790\uc57c\uad6c"),"\xa0",r.a.createElement(u.b,{to:"/game/rock-scissors-paper"},"\uac00\uc704\ubc14\uc704\ubcf4"),"\xa0",r.a.createElement(u.b,{to:"/game/lotto-generator"},"\ub85c\ub610\uc0dd\uc131\uae30"),"\xa0",r.a.createElement(u.b,{to:"/game/gugudan"},"\uad6c\uad6c\ub2e8"),"\xa0",r.a.createElement(u.b,{to:"/game/Ending"},"\ub05d\ub9d0\uc787\uae30"),"\xa0",r.a.createElement(u.b,{to:"/game/Minesweeper"},"\uc9c0\ub8b0\ucc3e\uae30"),"\xa0",r.a.createElement(u.b,{to:"/game/Response"},"\ubc18\uc751\uc18d\ub3c4"),"\xa0",r.a.createElement(u.b,{to:"/game/index"},"\uac8c\uc784 \ub9e4\uccd0")),r.a.createElement("div",null,r.a.createElement(o.a,{path:"/game/:name",component:q})," "))};var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.04c4b1ad.chunk.js.map