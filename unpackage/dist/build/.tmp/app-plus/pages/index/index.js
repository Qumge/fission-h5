(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0eb7":function(t,e,n){"use strict";(function(t){n("17f2"),n("921b");i(n("66fd"));var e=i(n("4540"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"29f6":function(t,e,n){},"2df0":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=(t._self._c,[0,5,6].indexOf(t.tabIndex)),i=t.px(t.dropScreenH+18);t.$mp.data=Object.assign({},{$root:{g0:n,m0:i}})},a=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},4540:function(t,e,n){"use strict";n.r(e);var i=n("2df0"),r=n("8e5b");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("9c13");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=c.exports},"6d5c":function(t,e,n){"use strict";n.r(e);var i=n("ce68"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},"82de":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("2047"));function a(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/icon/icon").then(n.bind(null,"38b7"))},s=function(){return n.e("components/drawer/drawer").then(n.bind(null,"4046"))},c=function(){return n.e("components/loadmore/loadmore").then(n.bind(null,"0266"))},u=function(){return n.e("components/nomore/nomore").then(n.bind(null,"1eab"))},d=function(){return n.e("components/top-dropdown/top-dropdown").then(n.bind(null,"051f"))},h={components:{tuiIcon:o,tuiDrawer:s,tuiLoadmore:c,tuiNomore:u,tuiTopDropdown:d},data:function(){return{from:"h5",searchKey:"",width:200,height:64,inputTop:0,arrowTop:0,dropScreenH:0,attrData:[],attrIndex:-1,dropScreenShow:!1,scrollTop:0,tabIndex:0,isList:!1,drawer:!1,drawerH:0,selectedName:"综合",selectH:0,dropdownList:[{name:"综合",tabIndex:0},{name:"价格升序",tabIndex:5},{name:"价格降序",tabIndex:6}],categories1:[],categories2:[],category1:"",category2:"",sorts:{0:"",1:"sale desc",2:"created_at desc",3:"",4:"",5:"price asc",6:"price desc"},search:"",products:[],pageIndex:1,loadding:!1,pullUpOn:!0,page:1}},onLoad:function(e){var n=this;e.from&&(this.from=e.from),this.getData(e);var i={};t.getSystemInfo({success:function(r){n.width=i.left||r.windowWidth,n.height=i.top?i.top+i.height+8:r.statusBarHeight+44,n.inputTop=i.top?i.top+(i.height-30)/2:r.statusBarHeight+7,n.arrowTop=i.top?i.top+(i.height-32)/2:r.statusBarHeight+6,n.searchKey=e.searchKey||"",n.dropScreenH=750*n.height/r.windowWidth,n.drawerH=r.windowHeight-t.upx2px(100)-n.height}})},methods:{confirmSearch:function(t){this.search=t.detail.value,this.getData(t)},getData:function(t){var e=this;this.page=1,this.pullUpOn=!0,r.default.categories().then(function(t){e.categories1=t}).catch(function(){});var n=this.category1;this.category2&&(n=this.category2),r.default.products(n,this.search,this.sorts[this.tabIndex],this.page,"").then(function(t){e.products=t}).catch(function(){})},select1:function(t){var e=this;this.category2=null,this.category1=t.currentTarget.dataset.id;var n=this.categories1.find(function(t){return t.id==e.category1});n&&(this.categories2=n.children)},select2:function(t){this.category2=t.currentTarget.dataset.id},px:function(e){return t.upx2px(e)+"px"},btnDropChange:function(t){var e=this,n=t.currentTarget.dataset.index,i=JSON.parse(JSON.stringify(this.attrArr[n].list));0===i.length?this.$set(this.attrArr[n],"isActive",!this.attrArr[n].isActive):(this.attrData=i,this.attrIndex=n,this.dropScreenShow=!0,this.$set(this.attrArr[n],"isActive",!1),this.scrollTop=1,this.$nextTick(function(){e.scrollTop=0}))},btnSelected:function(t){var e=t.currentTarget.dataset.index;this.$set(this.attrData[e],"selected",!this.attrData[e].selected)},reset:function(){this.category1="",this.category2="",this.categories2=[]},btnCloseDrop:function(){var t=this;this.scrollTop=1,this.$nextTick(function(){t.scrollTop=0}),this.dropScreenShow=!1,this.attrIndex=-1},btnSure:function(){var t=this.attrIndex,e=this.attrData,n=!1,i="",r=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=s.value;u.selected&&(n=!0,i+=i?";"+u.name:u.name)}}catch(h){a=!0,o=h}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}var d=this.attrArr[t];this.btnCloseDrop(),this.$set(d,"isActive",n),this.$set(d,"selectedName",i)},showDropdownList:function(){this.selectH=246,this.tabIndex=0},hideDropdownList:function(){this.selectH=0},dropdownItem:function(t){var e=t.currentTarget.dataset.index;console.log(i(e," at pages/index/index.vue:342"));var n=this.dropdownList.find(function(t){return t.tabIndex==e});this.selectedName=n.name,this.tabIndex=n.tabIndex,this.selectH=0,this.getData(t)},screen:function(t){var e=t.currentTarget.dataset.index;0==e?this.showDropdownList():1==e?(this.tabIndex=1,this.getData(t)):2==e?(this.tabIndex=2,this.getData(t)):3==e?this.drawer=!0:4==e&&(this.isList=!this.isList)},closeDrawer:function(t){this.drawer=!1,this.getData(t)},back:function(){this.drawer?this.closeDrawer():window.parent.postMessage({event:"backEvent",params:{}},"*")},detail:function(e){console.log(i(e," at pages/index/index.vue:388")),t.navigateTo({url:"../product/show?id="+e.currentTarget.dataset.id})}},onPullDownRefresh:function(){},onReachBottom:function(){if(this.pullUpOn){this.loadding=!0,this.pullUpOn=!0;var t=this;this.page=this.page+1;var e=this.category1;this.category2&&(e=this.category2),r.default.products(e,this.search,this.sorts[this.tabIndex],this.page,"").then(function(e){e==[]?t.pullUpOn=!0:(t.products=t.products.concat(e),t.loadding=!1,t.pullUpOn=!1)}).catch(function(){})}}};e.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},"8e5b":function(t,e,n){"use strict";n.r(e);var i=n("82de"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},"9c13":function(t,e,n){"use strict";var i=n("29f6"),r=n.n(i);r.a},cb45:function(t,e,n){},ce68:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log(t("App Launch"," at App.vue:5")),this.tui.wxAuthorize()},onShow:function(){console.log(t("App show"," at App.vue:13"))},onHide:function(){console.log(t("App Hide"," at App.vue:16"))}};e.default=n}).call(this,n("0de9")["default"])},e016:function(t,e,n){"use strict";n.r(e);var i=n("6d5c");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("e49a");var a,o,s,c,u=n("f0c5"),d=Object(u["a"])(i["default"],a,o,!1,null,null,null,!1,s,c);e["default"]=d.exports},e49a:function(t,e,n){"use strict";var i=n("cb45"),r=n.n(i);r.a}},[["0eb7","common/runtime","common/vendor"]]]);