(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-task-questionnaire"],{"2a5d":function(t,i,a){"use strict";var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("f499")),o=e(a("afea")),s=e(a("90d9")),r={components:{tuiIcon:s.default},data:function(){return{optionsId:"",from:"h5",showShare:!1,height:0,top:0,scrollH:0,opcity:0,iconOpcity:.5,current:0,Forms:[],taskQuestionnaire:{},TopTile:"问卷"}},onLoad:function(t){var i=this;i.optionsId=t.id,console.log(t.id),t.from&&(this.from=t.from),this.showShare=this.tui.wechatBowser(),o.default.task_questionnaiire(t.id).then(function(a){i.Forms=a.questionnaire.questions,i.TopTile=a.questionnaire,i.taskQuestionnaire=a,console.log(a),i.tui.wechatBowser()&&i.taskQuestionnaire.id&&(console.log(i.taskQuestionnaire.id),o.default.view(i.taskQuestionnaire.id,t.token).then(function(t){console.log(t)}).catch(function(){}),o.default.fission(i.taskQuestionnaire.id,t.token).then(function(t){console.log(t),i.tui.jssdk().then(function(a){var e="";t.task.image&&(e=t.task.image.image_path),a.updateAppMessageShareData({title:i.taskQuestionnaire.name,desc:"分享链接赚金币,提现赢大奖",link:i.taskQuestionnaire.h5_link+"&token="+t.token,imgUrl:e,success:function(){console.log("updateAppMessageShareData")}})}).catch(function(t){console.log(t)})}).catch(function(){}))}).catch(function(t){console.log(t)})},methods:{formSubmit:function(t){var i=(0,n.default)(t.detail.value);console.log("携带数据为："+(0,n.default)(t.detail.value)),o.default.task_FormQuestionnaires(i,this.optionsId).then(function(t){console.log(t),t.error?uni.showToast({icon:"none",title:t.message}):uni.showToast({icon:"success",title:"感谢您的参与！"})}).catch(function(t){console.log(t)})},radioChange:function(t){console.log("radioChange",t)},back:function(){this.tui.goBack(this.from)}}};i.default=r},5020:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".FormTitle[data-v-04a40c48]{font-size:%?32?%;color:#1a1a1a;font-weight:400;margin-bottom:%?30?%}.List[data-v-04a40c48]{padding:%?60?% 0 %?30?%;margin-top:%?20?%;margin-bottom:%?30?%;border-top:%?1?% dashed #e6e6e6}.question .List[data-v-04a40c48]:first-child{border-top:none}.Lists[data-v-04a40c48]{border-bottom:none}.Name[data-v-04a40c48]{padding:%?3?% 0;margin:%?5?% 0}.radio_Name[data-v-04a40c48]{font-size:%?28?%;color:#6f6e6e;padding:%?2?% 0;margin:%?3?% 0 %?3?% %?5?%}.radio_radio[data-v-04a40c48]{width:22px!important;height:22px!important}.Btn[data-v-04a40c48]{margin:%?90?% auto %?150?%;background:#16ab60;color:#fff;letter-spacing:2px;font-size:%?26?%;width:%?410?%}.FormNames[data-v-04a40c48]{border:1px solid #dcdcdc;height:%?200?%;border-radius:%?5?%}.sinput[data-v-04a40c48]{padding:%?10?% %?10?%}.title[data-v-04a40c48]{font-weight:%?32?%;font-weight:700;width:%?690?%;text-align:left;margin:%?30?% auto}.question[data-v-04a40c48]{padding:%?0?% %?30?%}\n/* header*/.tui-header-box[data-v-04a40c48]{width:100%;position:fixed;left:0;top:0;z-index:9998;background-color:#fc4034}.tui-header[data-v-04a40c48]{width:100%;font-size:18px;line-height:18px;font-weight:500;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-header-icon[data-v-04a40c48]{position:fixed;top:0;left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99999}.tui-header-icon .tui-badge[data-v-04a40c48]{background:#e41f19!important;position:absolute;right:-4px}.tui-icon-ml[data-v-04a40c48]{margin-left:%?20?%}.tui-icon[data-v-04a40c48]{border-radius:16px}.tui-icon-back[data-v-04a40c48]{height:44px!important;width:44px!important;display:block!important}.tui-header-icon .tui-icon-more-fill[data-v-04a40c48]{height:20px!important;width:20px!important;padding:6px!important;display:block!important}\n/* header*/",""])},7453:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"tui-header-box",staticStyle:{color:"#fff"},style:{height:t.height+"px;"}},[a("v-uni-view",{staticClass:"tui-header",style:{paddingTop:t.top+"px"}},[t._v("调查问卷")]),a("v-uni-view",{staticClass:"tui-header-icon",style:{marginTop:t.top+"px"}},[a("v-uni-view",{staticClass:"tui-icon tui-icon-arrowleft tui-icon-back",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[a("tui-icon",{staticStyle:{"line-height":"44px"},attrs:{name:"arrowleft",color:"#fff"}})],1)],1)],1),a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.TopTile.name))])],1),a("v-uni-view",{staticClass:"question"},[a("v-uni-form",{on:{submit:function(i){arguments[0]=i=t.$handleEvent(i),t.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"List",staticStyle:{"font-size":"18rpx",color:"#c11d1d","letter-spacing":"2rpx"}},[t._v(t._s(t.Forms.desc))]),t._l(t.Forms,function(i,e){return["Question::Single"==i.type?a("v-uni-view",{staticClass:"List"},[a("v-uni-view",{staticClass:"FormTitle"},[t._v(t._s(e+1)+"、"+t._s(i.name))]),a("v-uni-view",{staticClass:"FormName"},[a("v-uni-radio-group",{attrs:{name:String(i.id)}},t._l(i.options,function(i){return a("v-uni-label",[a("v-uni-view",{staticClass:"Name"},[a("v-uni-radio",{staticClass:"radio_radio",attrs:{value:String(i.id)}}),a("v-uni-text",{staticClass:"radio_Name"},[t._v(t._s(i.name))])],1)],1)}),1)],1)],1):t._e(),"Question::Multiple"==i.type?a("v-uni-view",{staticClass:"List"},[a("v-uni-view",{staticClass:"FormTitle"},[t._v(t._s(e+1)+"、"+t._s(i.name))]),a("v-uni-view",{staticClass:"FormName"},[a("v-uni-checkbox-group",{attrs:{name:String(i.id)}},t._l(i.options,function(i){return a("v-uni-label",[a("v-uni-view",{staticClass:"Name"},[a("v-uni-checkbox",{attrs:{value:String(i.id)}}),a("v-uni-text",{staticClass:"radio_Name"},[t._v(t._s(i.name))])],1)],1)}),1)],1)],1):t._e(),"Question::Completion"==i.type?a("v-uni-view",{staticClass:"List"},[a("v-uni-view",{staticClass:"FormTitle"},[t._v(t._s(e+1)+"、"+t._s(i.name))]),a("v-uni-view",{staticClass:"FormName FormNames"},[a("v-uni-textarea",{staticClass:"radio_Name sinput",attrs:{name:String(i.id),placeholder:"请输入..."}})],1)],1):t._e()]}),a("v-uni-button",{staticClass:"Btn",attrs:{"form-type":"submit"}},[t._v("提交")])],2)],1)],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"7d68":function(t,i,a){"use strict";a.r(i);var e=a("7453"),n=a("8231");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("8720");var s=a("2877"),r=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,"04a40c48",null);i["default"]=r.exports},8231:function(t,i,a){"use strict";a.r(i);var e=a("2a5d"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},8720:function(t,i,a){"use strict";var e=a("e041"),n=a.n(e);n.a},e041:function(t,i,a){var e=a("5020");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("c97a8ba0",e,!0,{sourceMap:!1,shadowMode:!1})}}]);