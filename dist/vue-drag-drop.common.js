module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,injectStyles,scopeId,moduleIdentifier){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId);var hook;if(moduleIdentifier?(hook=function(context){context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,context||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=injectStyles),hook){var functional=options.functional,existing=functional?options.render:options.beforeCreate;functional?options.render=function(h,context){return hook.call(context),existing(h,context)}:options.beforeCreate=existing?[].concat(existing,hook):[hook]}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.transferDataStore={}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var keyMirror=function(keys){return keys.reduce(function(acc,k){return(acc[k]=k)&&acc},{})},mimeType=exports.mimeType="text/x-vue-drag-drop-key",mimeDelimiter=exports.mimeDelimiter=":";exports.smuggleKeyMimeType=""+mimeType+mimeDelimiter,exports.events=keyMirror(["drag","dragend","dragenter","dragleave","dragstart","dragover","drop"]),exports.dropEffects=keyMirror(["copy","move","link","none"]),exports.effectsAllowed=keyMirror(["none","copy","copyLink","copyMove","link","linkMove","move","all","uninitialized"])},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function install(Vue){Vue.component("drag",_Drag2.default),Vue.component("drop",_Drop2.default)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Drop=exports.Drag=void 0,exports.install=install;var _Drag=__webpack_require__(4),_Drag2=_interopRequireDefault(_Drag),_Drop=__webpack_require__(9),_Drop2=_interopRequireDefault(_Drop);exports.Drag=_Drag2.default,exports.Drop=_Drop2.default;var plugin={version:"0.1.2",install:install};exports.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue__),__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d486dca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Drag_vue__=__webpack_require__(8),normalizeComponent=__webpack_require__(0),Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drag_vue___default.a,__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d486dca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Drag_vue__.a,null,null,"98274e0e");__webpack_exports__.default=Component.exports},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _uniqid=__webpack_require__(6),_uniqid2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_uniqid),_stores=__webpack_require__(1),_constants=__webpack_require__(2);exports.default={props:{transferData:{},dropEffect:{validator:function(value){return value in _constants.dropEffects}},effectAllowed:{validator:function(value){return value in _constants.effectsAllowed}},image:String,imageXOffset:{type:Number,default:0},imageYOffset:{type:Number,default:0},hideImageHtml:{type:Boolean,default:!0}},data:function(){return{id:(0,_uniqid2.default)(),dragging:!1}},computed:{events:function(){return _constants.events},scopedData:function(){return this.dragging&&this.transferData},hideImageStyle:function(){return{position:"fixed",top:"-1000px"}}},methods:{emitEvent:function(name,nativeEvent){var transfer=nativeEvent.dataTransfer;if([_constants.events.dragenter,_constants.events.dragover].includes(name)&&this.dropEffect&&(transfer.dropEffect=this.dropEffect),name===_constants.events.dragstart){if(this.effectsAllowed&&(transfer.effectsAllowed=this.effectsAllowed),this.image||this.$slots.image){var image=void 0;this.image?(image=new Image,image.src=this.image):this.$slots.image&&(image=this.$slots.image[0].elm),transfer.setDragImage(image,this.imageXOffset,this.imageYOffset)}void 0!==this.transferData&&(this.$set(_stores.transferDataStore,this.id,this.transferData),transfer.setData(_constants.mimeType,this.id),transfer.setData(""+_constants.smuggleKeyMimeType+this.id,this.id)),this.dragging=!0}this.$emit(name,this.transferData,nativeEvent),name===_constants.events.dragend&&(this.$delete(_stores.transferDataStore,this.id),this.dragging=!1)}}}},function(module,exports,__webpack_require__){(function(module){function now(){var time=Date.now(),last=now.last||time;return now.last=time>last?time:last+1}var pid=process&&process.pid?process.pid.toString(36):"",mac=null,address=mac?parseInt(mac.replace(/\:|\D+/gi,"")).toString(36):"";module.exports=function(prefix){return(prefix||"")+address+pid+now().toString(36)},module.exports.process=function(prefix){return(prefix||"")+pid+now().toString(36)},module.exports.time=function(prefix){return(prefix||"")+now().toString(36)}}).call(exports,__webpack_require__(7)(module))},function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),module.webpackPolyfill=1),module}},function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{attrs:{draggable:!0},on:{drag:function($event){_vm.emitEvent(_vm.events.drag,$event)},dragstart:function($event){_vm.emitEvent(_vm.events.dragstart,$event)},dragenter:function($event){_vm.emitEvent(_vm.events.dragenter,$event)},dragleave:function($event){_vm.emitEvent(_vm.events.dragleave,$event)},dragend:function($event){_vm.emitEvent(_vm.events.dragend,$event)}}},[_vm._t("default",null,{transferData:_vm.scopedData}),_vm._v(" "),_vm.hideImageHtml?_c("div",{style:_vm.hideImageStyle},[_vm._t("image",null,{transferData:_vm.scopedData})],2):_vm._t("image",null,{transferData:_vm.scopedData})],2)},staticRenderFns=[],esExports={render:render,staticRenderFns:staticRenderFns};__webpack_exports__.a=esExports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drop_vue__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drop_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drop_vue__),__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c831554_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Drop_vue__=__webpack_require__(11),normalizeComponent=__webpack_require__(0),Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Drop_vue___default.a,__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c831554_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Drop_vue__.a,null,null,"6761f598");__webpack_exports__.default=Component.exports},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _stores=__webpack_require__(1),_constants=__webpack_require__(2),insideElements=new Set;exports.default={data:function(){return{dataKey:null}},computed:{events:function(){return _constants.events},transferDataStore:function(){return _stores.transferDataStore},transferData:function(){return this.transferDataStore[this.dataKey]}},methods:{emitEvent:function(name,nativeEvent){if(name===_constants.events.drop)this.dataKey=nativeEvent.dataTransfer.getData(_constants.mimeType);else if(!this.dataKey){var type=nativeEvent.dataTransfer.types.find(function(t){return t.startsWith(_constants.smuggleKeyMimeType)});type&&(this.dataKey=type.split(_constants.mimeDelimiter)[1])}this.$emit(name,this.transferData,nativeEvent),name===_constants.events.dragenter&&(insideElements.size||nativeEvent.target===this.$el)&&insideElements.add(nativeEvent.target),name===_constants.events.dragleave&&(insideElements.delete(nativeEvent.target),insideElements.size||(this.dataKey=null)),name===_constants.events.drop&&(this.dataKey=null,insideElements.clear())}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("div",{on:{dragenter:function($event){_vm.emitEvent(_vm.events.dragenter,$event)},dragleave:function($event){_vm.emitEvent(_vm.events.dragleave,$event)},dragover:function($event){$event.preventDefault(),_vm.emitEvent(_vm.events.dragover,$event)},drop:function($event){_vm.emitEvent(_vm.events.drop,$event)}}},[_vm._t("default",null,{transferData:_vm.transferData})],2)},staticRenderFns=[],esExports={render:render,staticRenderFns:staticRenderFns};__webpack_exports__.a=esExports}]);