(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-task-article"],{"0266":function(t,e,i){"use strict";i.r(e);var a=i("1e4d"),n=i("4277");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("0825");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"d67664da",null,!1,a["a"],r);e["default"]=s.exports},"0825":function(t,e,i){"use strict";var a=i("b428"),n=i.n(a);n.a},"0b4b":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a(i("bd86"));i("c5f6");var r=(n={name:"tuiCountdown",props:{width:{type:Number,default:24},height:{type:Number,default:24},bcolor:{type:String,default:"#333"},bgcolor:{type:String,default:"#fff"},size:{type:Number,default:24},color:{type:String,default:"#333"},scale:{type:Boolean,default:!1},colonSize:{type:Number,default:28},colonColor:{type:String,default:"#333"},time:{type:Number,default:0},days:{type:Boolean,default:!1},hours:{type:Boolean,default:!0},minutes:{type:Boolean,default:!0},seconds:{type:Boolean,default:!0},isColon:{type:Boolean,default:!0}},data:function(){return{countdown:null,h:"00",i:"00",s:"00"}},watch:{time:function(t){clearInterval(this.countdown),this.doLoop()}}},(0,o.default)(n,"data",function(){return{countdown:null,d:"0",h:"00",i:"00",s:"00"}}),(0,o.default)(n,"created",function(){this.doLoop()}),(0,o.default)(n,"beforeDestroy",function(){clearInterval(this.countdown),this.countdown=null}),(0,o.default)(n,"methods",{endOfTime:function(){clearInterval(this.countdown),this.countdown=null,this.$emit("end",{})},doLoop:function(){var t=this,e=this.time||0;this.countDown(e),this.countdown=setInterval(function(){e--,e<0?t.endOfTime():t.countDown(e)},1e3)},countDown:function(t){var e=0,i=0,a=0,n=0;t>0?(e=this.days?Math.floor(t/86400):0,i=Math.floor(t/3600)-24*e,a=Math.floor(t/60)-60*i-24*e*60,n=Math.floor(t)-24*e*60*60-60*i*60-60*a):this.endOfTime(),i=i<10?"0"+i:i,a=a<10?"0"+a:a,n=n<10?"0"+n:n,this.d=e,this.h=i,this.i=a,this.s=n}}),n);e.default=r},"12f2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-image[data-v-26f6c16c]{width:100%;height:100%}.Bg[data-v-26f6c16c]{position:fixed;left:0;top:0;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.4)}.Guidance[data-v-26f6c16c]{position:relative;z-index:100;width:%?690?%;height:%?500?%;top:%?-120?%;text-align:center;margin:0 auto}",""])},"1c86":function(t,e,i){var a=i("12f2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8bfae0e8",a,!0,{sourceMap:!1,shadowMode:!1})},"1e4d":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("v-uni-view",{staticClass:"tui-loadmore"},[i("v-uni-view",{class:["tui-loading-"+t.index,3==t.index&&t.type?"tui-loading-"+t.type:""]}),i("v-uni-view",{staticClass:"tui-loadmore-tips"},[t._v(t._s(t.text))])],1):t._e()},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},2702:function(t,e,i){var a=i("e4cb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4413ea5c",a,!0,{sourceMap:!1,shadowMode:!1})},"2b7d":function(t,e,i){"use strict";i.r(e);var a=i("c749"),n=i("fc8d");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("35ff");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"26f6c16c",null,!1,a["a"],r);e["default"]=s.exports},"35ff":function(t,e,i){"use strict";var a=i("1c86"),n=i.n(a);n.a},"385a":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.tui-list-cell[data-v-588a29f9]{position:relative;width:100%;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-radius[data-v-588a29f9]{border-radius:%?12?%;overflow:hidden}.tui-cell-hover[data-v-588a29f9]{background:#f7f7f9!important}.tui-list-cell[data-v-588a29f9]:after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:0}.tui-line-left[data-v-588a29f9]:after{left:%?30?%!important}.tui-line-right[data-v-588a29f9]:after{right:%?30?%!important}.tui-cell-last[data-v-588a29f9]:after{border-bottom:0!important}.tui-list-cell.tui-cell-arrow[data-v-588a29f9]:before{content:" ";height:11px;width:11px;border-width:2px 2px 0 0;border-color:#b2b2b2;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-7px;right:%?30?%}',""])},"3a53":function(t,e,i){var a=i("7e72");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("db2d010c",a,!0,{sourceMap:!1,shadowMode:!1})},4247:function(t,e,i){"use strict";var a=i("3a53"),n=i.n(a);n.a},4277:function(t,e,i){"use strict";i.r(e);var a=i("d60b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},5835:function(t,e,i){"use strict";i.r(e);var a=i("811c"),n=i("c10e");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("a94f");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"cdcfcaaa",null,!1,a["a"],r);e["default"]=s.exports},"675d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:{ShowGuidance:!1},methods:{colse:function(){this.ShowGuidance=!1}}};e.default=a},"798e":function(t,e,i){"use strict";i.r(e);var a=i("ec309"),n=i("8572");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("7ea3");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"588a29f9",null,!1,a["a"],r);e["default"]=s.exports},"7a6c":function(t,e,i){"use strict";i.r(e);var a=i("e0a9"),n=i("bd31");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("4247");var r,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"508238b0",null,!1,a["a"],r);e["default"]=s.exports},"7e72":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'uni-image[data-v-508238b0]{width:100%;height:100%}.Bg[data-v-508238b0]{position:fixed;left:0;top:0;overflow:hidden;z-index:99;width:100%;height:100%;background:rgba(0,0,0,.4)}.Guidance[data-v-508238b0]{position:absolute;z-index:100;width:%?690?%;height:%?500?%;top:%?-90?%;text-align:center;margin:0 auto}.w69[data-v-508238b0]{width:%?690?%;margin:%?50?% auto %?40?%}.x[data-v-508238b0]{border-bottom:%?1?% solid #eee;padding:%?30?% %?20?%;box-shadow:%?0?% %?0?% %?9?% %?1?% #ddd}.x[data-v-508238b0]:last-child{border-bottom:none}.Mode[data-v-508238b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ModeImg[data-v-508238b0]{width:%?150?%;height:%?150?%}.ModeName[data-v-508238b0]{margin-left:%?20?%;width:%?450?%}.name1[data-v-508238b0]{font-weight:700;font-size:%?30?%;color:#1a1a1a;margin-bottom:%?10?%}.name2[data-v-508238b0]{font-size:%?28?%;color:#545454}uni-page-body[data-v-508238b0]{background:#fff;color:#333}.container[data-v-508238b0]{padding:%?40?% %?30?% %?110?% %?30?%;box-sizing:border-box}.tui-news-title[data-v-508238b0]{font-size:%?48?%;font-weight:500;letter-spacing:2px;text-align:justify}.tui-sub-info[data-v-508238b0]{padding-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%;color:#999}.tui-author[data-v-508238b0]{color:#5677fc;padding-right:%?20?%}.tui-news-content[data-v-508238b0]{padding-top:%?40?%;width:100%}.tui-article[data-v-508238b0]{\n\t/* text-indent: 2em; */font-size:%?34?%;color:#585555;padding-bottom:%?40?%;line-height:%?60?%;text-align:justify;word-break:break-all;word-wrap:break-word}.tui-article-pic[data-v-508238b0]{width:100%;display:block;margin-bottom:%?40?%}.tui-news-source[data-v-508238b0]{font-size:%?24?%;color:#999}.tui-operate-box[data-v-508238b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?60?% %?40?%;box-sizing:border-box}.tui-tag-class[data-v-508238b0]{min-width:%?130?%;padding:%?20?% %?52?%!important;font-size:%?26?%!important;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-black[data-v-508238b0]{color:#333;padding-left:%?12?%}.tui-cmt-title[data-v-508238b0]{font-size:%?30?%;font-weight:700;position:relative}.tui-cmt-title[data-v-508238b0]:after{content:"";position:absolute;left:%?-18?%;top:18%;width:%?6?%;height:64%;background:#5677fc}.tui-cmtbox[data-v-508238b0]{padding-bottom:%?20?%}.tui-cmt-cell[data-v-508238b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?44?%}.tui-avatar[data-v-508238b0]{width:%?64?%;height:%?64?%;border-radius:%?32?%;display:block;-webkit-flex-shrink:0;flex-shrink:0}.tui-cmt-detail[data-v-508238b0]{width:100%;padding-left:%?16?%;box-sizing:border-box}.tui-header-box[data-v-508238b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%}.tui-cmt-nickname[data-v-508238b0]{color:#5677fc}.tui-fabulous[data-v-508238b0]{color:#9a9a9a}.tui-fabulous uni-text[data-v-508238b0]{padding-right:%?4?%;font-size:%?24?%}.tui-cmt-content[data-v-508238b0]{font-size:%?32?%;color:#333;text-align:justify;padding-top:%?8?%;word-break:break-all;word-wrap:break-word}.tui-reply-box[data-v-508238b0]{border-radius:%?8?%;overflow:hidden;margin-top:%?16?%}.tui-cell-class[data-v-508238b0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;justify-content:flex-start!important;padding:%?20?%!important;text-align:justify;word-break:break-all;word-wrap:break-word}.tui-cell-last[data-v-508238b0]{color:#5677fc}.tui-flex-1[data-v-508238b0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}.tui-reply-nickname[data-v-508238b0]{font-size:%?24?%;color:#7a7a7a;padding-bottom:%?8?%}.tui-footer[data-v-508238b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;margin-top:%?16?%;color:#9a9a9a}.tui-primary[data-v-508238b0]{color:#5677fc!important}.tui-ml[data-v-508238b0]{margin-left:%?16?%}.tui-cell-last .tui-icon-class[data-v-508238b0]{width:%?40?%!important;margin-left:%?-10?%}.tui-operation[data-v-508238b0]{width:100%;height:%?100?%;overflow:hidden;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:fixed;left:0;bottom:0;z-index:99999;padding-bottom:env(safe-area-inset-bottom)}.tui-safearea-bottom[data-v-508238b0]{width:100%;height:env(safe-area-inset-bottom)}.tui-operation[data-v-508238b0]:before{content:"";position:absolute;top:0;right:0;left:0;border-top:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-operation-left[data-v-508238b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-operation-item[data-v-508238b0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative}.tui-operation-right[data-v-508238b0]{height:%?100?%;box-sizing:border-box;padding-top:0}.tui-badge-class[data-v-508238b0]{color:#5677fc!important;position:absolute;top:%?-6?%;padding:2px 4px!important;\n\t-webkit-transform:translateX(50%) scale(.8);transform:translateX(50%) scale(.8)\n\t}.tui-right-flex[data-v-508238b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-btn-comment[data-v-508238b0]{height:%?64?%;width:84%;background:#ededed;color:#999;border-radius:%?8?%;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?20?%;box-sizing:border-box;padding-top:0;margin-left:%?30?%}.tui-col-7[data-v-508238b0]{width:58.33333333%}.tui-col-5[data-v-508238b0]{width:41.66666667%}.tui-share-btn[data-v-508238b0]{display:block;background:none;margin:0;padding:0}\n\n/* header*/.tui-header-box[data-v-508238b0]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-508238b0]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-header-icon[data-v-508238b0]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-508238b0]{background:#e41f19!important;position:absolute;right:-4px}.tui-icon-ml[data-v-508238b0]{margin-left:%?20?%}.tui-icon[data-v-508238b0]{border-radius:16px}.tui-icon-back[data-v-508238b0]{height:44px!important;width:44px!important;display:block!important}.tui-header-icon .tui-icon-more-fill[data-v-508238b0]{height:20px!important;width:20px!important;padding:6px!important;display:block!important}\n\n/* header*/body.?%PAGE?%[data-v-508238b0]{background:#fff}',""])},"7ea3":function(t,e,i){"use strict";var a=i("fd20"),n=i.n(a);n.a},"811c":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-countdown-box"},[t.days?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.d))])],1):t._e(),t.days?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"天"))]):t._e(),t.hours?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.h))])],1):t._e(),t.hours?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"时"))]):t._e(),t.minutes?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.i))])],1):t._e(),t.minutes?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"分"))]):t._e(),t.seconds&&t.minutes?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.s))])],1):t._e(),t.seconds&&!t.isColon&&t.minutes?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v("秒")]):t._e()],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},8572:function(t,e,i){"use strict";i.r(e);var a=i("e529"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},a94f:function(t,e,i){"use strict";var a=i("2702"),n=i.n(a);n.a},b428:function(t,e,i){var a=i("daa3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("85b9ccd4",a,!0,{sourceMap:!1,shadowMode:!1})},bd31:function(t,e,i){"use strict";i.r(e);var a=i("ff86"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},c10e:function(t,e,i){"use strict";i.r(e);var a=i("0b4b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},c749:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ShowGuidance,expression:"ShowGuidance"}]},[i("v-uni-view",{staticClass:"Bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"Guidance",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/index/zhidaole.png",mode:"widthFix"}})],1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},d60b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"tuiLoadmore",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}};e.default=a},daa3:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".tui-loadmore[data-v-d67664da]{width:48%;margin:1.5em auto;line-height:1.5em;font-size:%?24?%;text-align:center}.tui-loading-1[data-v-d67664da]{margin:0 5px;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a-data-v-d67664da 1s steps(12) infinite;animation:a-data-v-d67664da 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes a-data-v-d67664da{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a-data-v-d67664da{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.tui-loadmore-tips[data-v-d67664da]{display:inline-block;vertical-align:middle}.tui-loading-2[data-v-d67664da]{width:%?28?%;height:%?28?%;border:1px solid #8f8d8e;border-radius:50%;margin:0 6px;display:inline-block;vertical-align:middle;-webkit-clip-path:polygon(0 0,100% 0,100% 30%,0 30%);clip-path:polygon(0 0,100% 0,100% 30%,0 30%);-webkit-animation:rotate-data-v-d67664da 1s linear infinite;animation:rotate-data-v-d67664da 1s linear infinite}@-webkit-keyframes rotate-data-v-d67664da{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-d67664da{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.tui-loading-3[data-v-d67664da]{display:inline-block;margin:0 6px;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:tui-rotate-data-v-d67664da .7s linear infinite;animation:tui-rotate-data-v-d67664da .7s linear infinite}.tui-loading-3.tui-loading-primary[data-v-d67664da]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #5677fc}.tui-loading-3.tui-loading-green[data-v-d67664da]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #19be6b}.tui-loading-3.tui-loading-orange[data-v-d67664da]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #ff7900}.tui-loading-3.tui-loading-red[data-v-d67664da]{border-color:#ededed #ededed #ededed #ed3f14}@-webkit-keyframes tui-rotate-data-v-d67664da{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes tui-rotate-data-v-d67664da{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},e0a9:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:t.height+"px;"}},[i("v-uni-view",{staticClass:"tui-header",style:{paddingTop:t.top+"px"}},[t._v("推文")]),i("v-uni-view",{staticClass:"tui-header-icon",style:{marginTop:t.top+"px"}},[i("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"44px"}},[i("v-uni-view",{staticClass:"tui-news-title"},[t._v(t._s(t.articleTask.article.subject))]),i("v-uni-view",{staticClass:"tui-sub-info"},[i("v-uni-view",{staticClass:"tui-sub-left"},[i("v-uni-text",[t._v(t._s(t.articleTask.article.created_at))])],1),t.showCountdown?i("v-uni-view",{staticClass:"tui-countdown"},[i("tui-countdown",{attrs:{time:15,color:"#fff",bcolor:"#e41f19",bgcolor:"#e41f19",colonColor:"#e41f19",hours:!1,scale:!0},on:{end:function(e){arguments[0]=e=t.$handleEvent(e),t.endOfTime.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"tui-sub-right"},[t._v("阅读 "+t._s(t.articleTask.article.view_num))]),t.showShare?i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx","border-radius":"10rpx",display:"flex","align-items":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPop.apply(void 0,arguments)}}},[i("tui-icon",{attrs:{name:"partake",size:15,color:"#333"}}),i("v-uni-text",{staticClass:"tui-black"},[t._v("分享得金币")])],1):t._e()],1),i("v-uni-view",{staticClass:"tui-news-content"},[i("v-uni-view",{staticClass:"tui-article"},[i("v-uni-rich-text",{attrs:{nodes:t.articleTask.article.content}})],1)],1),i("v-uni-view",{staticClass:"w69"},[i("v-uni-view",{staticClass:"x"},[i("v-uni-view",{staticClass:"Mode",attrs:{"data-id":t.articleTask.article.product.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.product.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"ModeImg"},[i("v-uni-image",{attrs:{src:t.articleTask.article.product.default_image}})],1),i("v-uni-view",{staticClass:"ModeName"},[i("v-uni-view",{staticClass:"name1"},[t._v(t._s(t.articleTask.article.product.name))]),i("v-uni-view",{staticClass:"name2"},[t._v("￥ "+t._s(t.articleTask.article.product.price))])],1)],1)],1)],1)],1),i("tui-loadmore",{attrs:{visible:t.loadding,index:3,type:"primary"}}),i("v-uni-view",{staticClass:"tui-safearea-bottom"}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.ShowGuidance,expression:"ShowGuidance"}]},[i("v-uni-view",{staticClass:"Bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"Guidance",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.colse.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/index/zhidaole.png",mode:"widthFix"}})],1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},e4cb:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".tui-countdown-box[data-v-cdcfcaaa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-countdown-box[data-v-cdcfcaaa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-countdown-item[data-v-cdcfcaaa]{border:%?1?% solid;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?1?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.tui-countdown-time[data-v-cdcfcaaa]{margin:0;padding:0}.tui-countdown-colon[data-v-cdcfcaaa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%}.tui-colon-pad[data-v-cdcfcaaa]{padding:0!important}.tui-countdown-scale[data-v-cdcfcaaa]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}",""])},e529:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},last:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fff"},size:{type:Number,default:32},color:{type:String,default:"#333"},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a},ec309:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-cell-class tui-list-cell",class:{"tui-cell-arrow":t.arrow,"tui-cell-last":t.last,"tui-line-left":t.lineLeft,"tui-line-right":t.lineRight,"tui-radius":t.radius},style:{background:t.bgcolor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},fc8d:function(t,e,i){"use strict";i.r(e);var a=i("675d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},fd20:function(t,e,i){var a=i("385a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5944d600",a,!0,{sourceMap:!1,shadowMode:!1})},ff86:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499")),o=a(i("2b7d")),r=a(i("38b7")),l=a(i("ac51")),s=a(i("798e")),c=a(i("0266")),d=a(i("1eab")),u=a(i("7181")),f=a(i("2047")),b=a(i("5835")),p={components:{GuidancePopup:o.default,tuiIcon:r.default,tuiTag:l.default,tuiListCell:s.default,tuiLoadmore:c.default,tuiNomore:d.default,tuiBadge:u.default,tuiCountdown:b.default},data:function(){return{date:"2019-12-30 11:05:27",articleTask:{article:{subject:"",product:{default_image:null}}},height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5,from:"h5",fabulous:123,ShowGuidance:!1,isFabulous:!1,isCollection:!1,pageIndex:1,loadding:!1,pullUpOn:!0,showShare:!1,showCountdown:!0}},onShow:function(){},computed:{iconColor:function(){return this.isFabulous?"#5677fc":"#333"},itemIconColor:function(){return function(t){return t?"#5677fc":"#9a9a9a"}},iconName:function(){return function(t){return t?"agree-fill":"agree"}}},onLoad:function(t){var e=this;t.from&&(this.from=t.from),this.showShare=this.tui.wechatBowser(),f.default.task_article(t.id).then(function(i){console.log(i),e.articleTask=i,e.tui.wechatBowser()&&e.articleTask.id&&(console.log(e.articleTask.id),f.default.view(e.articleTask.id,t.token).then(function(t){console.log(t)}).catch(function(){}),f.default.fission(e.articleTask.id,t.token).then(function(t){console.log(t),e.tui.jssdk().then(function(i){var a="";t.task.image&&(a=t.task.image.image_path),i.updateAppMessageShareData({title:e.articleTask.name,desc:"分享链接赚金币,提现赢大奖",link:e.articleTask.h5_link+"&token="+t.token,imgUrl:a,success:function(){console.log("updateAppMessageShareData")}})}).catch(function(t){console.log(t)})}).catch(function(){}))}).catch(function(){})},methods:{product:function(t){console.log(t.currentTarget.dataset.id),uni.navigateTo({url:"../product/show?id="+t.currentTarget.dataset.id})},showPop:function(){this.ShowGuidance=!0},colse:function(){this.ShowGuidance=!1},btnFabulous:function(){this.fabulous=this.isFabulous?123:124,this.isFabulous=!this.isFabulous},cmtFabulous:function(t){var e=t.currentTarget.id,i=this.cmtList[e],a=this.cmtList[e].isFabulous,n=this.cmtList[e].fabulous,o=a?n-1:n+1;this.$set(i,"fabulous",o),this.$set(i,"isFabulous",!a)},collection:function(){this.isCollection=!this.isCollection,this.isCollection&&this.tui.toast("收藏成功！")},endOfTime:function(){this.showCountdown=!1,f.default.commission(this.articleTask.id).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},btnCmt:function(){uni.navigateTo({url:"../news-cmt/news-cmt"})},cmtAll:function(){uni.navigateTo({url:"../news-cmt-list/news-cmt-list"})},cmtReply:function(){uni.navigateTo({url:"../news-cmt-reply/news-cmt-reply"})},back:function(){this.tui.goBack()}},onReachBottom:function(){if(this.pullUpOn)if(this.loadding=!0,3==this.pageIndex)this.loadding=!1,this.pullUpOn=!1;else{var t=JSON.parse((0,n.default)(this.cmtList));this.cmtList=this.cmtList.concat(t),this.pageIndex=this.pageIndex+1,this.loadding=!1}}};e.default=p}}]);