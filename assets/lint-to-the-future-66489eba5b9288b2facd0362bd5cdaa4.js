"use strict"
define("lint-to-the-future/app",["exports","@ember/application","ember-resolver","ember-load-initializers","lint-to-the-future/config/environment"],(function(e,t,r,n,i){function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends t.default{constructor(...e){super(...e),l(this,"modulePrefix",i.default.modulePrefix),l(this,"podModulePrefix",i.default.podModulePrefix),l(this,"Resolver",r.default)}}e.default=o,(0,n.default)(o,i.default.modulePrefix)})),define("lint-to-the-future/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/components/chart",["exports","@ember/component","@glimmer/component","@ember/object","@glimmer/tracking","@ember/object/internals","frappe-charts/dist/frappe-charts.min.esm","lint-to-the-future/utils/normalise-data","@ember/template-factory"],(function(e,t,r,n,i,l,o,a,u){var s,d
function f(e,t,r,n,i){var l={}
return Object.keys(n).forEach((function(e){l[e]=n[e]})),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),l),i&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(i):void 0,l.initializer=void 0),void 0===l.initializer?(Object.defineProperty(e,t,l),null):l}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const c=(0,u.createTemplateFactory)({id:"nTVKfEQj",block:'[[[10,0],[14,0,"lttf-chart"],[12],[1,"\\n  "],[10,0],[14,0,"flex"],[12],[1,"\\n    "],[10,"h2"],[12],[1,[30,0,["ruleName"]]],[13],[1,"\\n"],[41,[30,0,["shouldShowLink"]],[[[1,"      "],[8,[39,3],null,[["@route","@model"],["rule",[30,1]]],[["default"],[[[[1,"view files"]],[]]]]],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n  "],[11,0],[4,[38,4],[[30,0,["renderChart"]]],null],[12],[13],[1,"\\n  "],[10,0],[14,0,"stv-radio-buttons-wrapper"],[12],[1,"\\n  \\t"],[11,"input"],[24,0,"stv-radio-button"],[16,3,[29,[[30,0,["guid"]]]]],[24,2,"1"],[16,1,[29,[[30,0,["guid"]],"-daily"]]],[16,"checked",[28,[37,6],[[30,0,["timeSeries"]],"daily"],null]],[24,4,"radio"],[4,[38,7],["click",[28,[37,8],[[30,0,["selectTimeSeries"]],"daily"],null]],null],[12],[13],[1,"\\n  \\t"],[10,"label"],[15,"for",[29,[[30,0,["guid"]],"-daily"]]],[12],[1,"Daily"],[13],[1,"\\n  \\t"],[11,"input"],[24,0,"stv-radio-button"],[16,3,[29,[[30,0,["guid"]]]]],[24,2,"2"],[16,1,[29,[[30,0,["guid"]],"-weekly"]]],[16,"checked",[28,[37,6],[[30,0,["timeSeries"]],"weekly"],null]],[24,4,"radio"],[4,[38,7],["click",[28,[37,8],[[30,0,["selectTimeSeries"]],"weekly"],null]],null],[12],[13],[1,"\\n  \\t"],[10,"label"],[15,"for",[29,[[30,0,["guid"]],"-weekly"]]],[12],[1,"Weekly"],[13],[1,"\\n    "],[11,"input"],[24,0,"stv-radio-button"],[16,3,[29,[[30,0,["guid"]]]]],[24,2,"3"],[16,1,[29,[[30,0,["guid"]],"-monthly"]]],[16,"checked",[28,[37,6],[[30,0,["timeSeries"]],"monthly"],null]],[24,4,"radio"],[4,[38,7],["click",[28,[37,8],[[30,0,["selectTimeSeries"]],"monthly"],null]],null],[12],[13],[1,"\\n  \\t"],[10,"label"],[15,"for",[29,[[30,0,["guid"]],"-monthly"]]],[12],[1,"Monthly"],[13],[1,"\\n  "],[13],[1,"\\n"],[13]],["@rule"],false,["div","h2","if","link-to","did-insert","input","eq","on","fn","label"]]',moduleName:"lint-to-the-future/components/chart.hbs",isStrictMode:!1})
function p(e){let t={},r=Object.keys(e)
for(let n=0;n<r.length;n+=7)t[r[n]]=e[r[n]]
return t[r[r.length-1]]=e[r[r.length-1]],t}function m(e){let t={},r=Object.keys(e)
for(let n=0;n<r.length;n+=30)t[r[n]]=e[r[n]]
return t[r[r.length-1]]=e[r[r.length-1]],t}function h(e,t){return{labels:Object.keys(e),datasets:[{name:t,type:"line",values:Object.values(e)}],yMarkers:[{label:"",value:0,type:"solid"},{label:"",value:5,type:"solid"}]}}let b=e.default=(s=class extends r.default{constructor(...e){var t,r,n,i
super(...e),t=this,r="timeSeries",i=this,(n=d)&&Object.defineProperty(t,r,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}get plugin(){return this.args.rule.split(":")[0]}get ruleName(){return this.args.rule.split(":").slice(1).join(":")}get guid(){return(0,l.guidFor)(this)}get shouldShowLink(){return this.args.showLink??!0}selectTimeSeries(e){this.timeSeries=e
let t=(0,a.default)(this.args.data,this.args.highestDate)
"weekly"===e&&(t=p(t)),"monthly"===e&&(t=m(t)),this.chart.update(h(t,this.ruleName))}renderChart(e){let t=(0,a.default)(this.args.data,this.args.highestDate)
Object.keys(t).length>100?(t=m(t),this.timeSeries="monthly"):Object.keys(t).length>40&&(t=p(t),this.timeSeries="weekly")
const r=h(t,this.ruleName)
this.chart=new o.Chart(e,{data:r,type:"axis-mixed",height:250,colors:["#7cd6fd","#743ee2"],axisOptions:{xIsSeries:!0}})}},d=f(s.prototype,"timeSeries",[i.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"daily"}}),f(s.prototype,"selectTimeSeries",[n.action],Object.getOwnPropertyDescriptor(s.prototype,"selectTimeSeries"),s.prototype),f(s.prototype,"renderChart",[n.action],Object.getOwnPropertyDescriptor(s.prototype,"renderChart"),s.prototype),s);(0,t.setComponentTemplate)(c,b)})),define("lint-to-the-future/components/stats",["exports","@ember/component","@glimmer/component","@ember/template-factory"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const i=(0,n.createTemplateFactory)({id:"tQ9sBoEo",block:'[[[10,"details"],[12],[1,"\\n  "],[10,"summary"],[12],[1,"Stats"],[13],[1,"\\n  "],[10,0],[14,0,"stats-wrapper px-2"],[12],[1,"\\n"],[41,[30,0,["removedToday","size"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        🎉🌅 Rules removed today\\n\\n        "],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,6],[[28,[37,6],[[30,0,["removedToday"]]],null]],null],null,[[[1,"            "],[10,"li"],[12],[1,"\\n              "],[8,[39,8],null,[["@route","@model"],["rule",[30,1]]],[["default"],[[[[1,[30,1]]],[]]]]],[1,"\\n            "],[13],[1,"\\n"]],[1]],null],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["removedThisWeek","size"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        🎉🗓️ Rules removed this week\\n\\n        "],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,6],[[28,[37,6],[[30,0,["removedThisWeek"]]],null]],null],null,[[[1,"            "],[10,"li"],[12],[1,"\\n              "],[8,[39,8],null,[["@route","@model"],["rule",[30,2]]],[["default"],[[[[1,[30,2]]],[]]]]],[1,"\\n            "],[13],[1,"\\n"]],[2]],null],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["improvedToday"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        📉🌅 Biggest improvement since yesterday:\\n        "],[10,"ul"],[12],[1,"\\n          "],[10,"li"],[12],[1,"\\n            "],[8,[39,8],null,[["@route","@model"],["rule",[30,0,["improvedToday","rule"]]]],[["default"],[[[[1,[30,0,["improvedToday","rule"]]]],[]]]]],[1,"\\n            which has been removed from\\n            "],[1,[28,[35,9],[[30,0,["improvedToday","value"]]],null]],[1,"\\n            files\\n          "],[13],[1,"\\n        "],[13],[1,"\\n\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["improvedThisWeek"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        📉🗓️ Biggest improvement this week:\\n\\n        "],[10,"ul"],[12],[1,"\\n          "],[10,"li"],[12],[1,"\\n            "],[8,[39,8],null,[["@route","@model"],["rule",[30,0,["improvedThisWeek","rule"]]]],[["default"],[[[[1,"\\n              "],[1,[30,0,["improvedThisWeek","rule"]]]],[]]]]],[1,"\\n            which has been removed from\\n            "],[1,[28,[35,9],[[30,0,["improvedThisWeek","value"]]],null]],[1,"\\n            files\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"stats-wrapper px-2"],[12],[1,"\\n"],[41,[30,0,["newToday","size"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        🆕🌅 New rules added since yesterday:\\n\\n        "],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,6],[[28,[37,6],[[30,0,["newToday"]]],null]],null],null,[[[1,"            "],[10,"li"],[12],[8,[39,8],null,[["@route","@model"],["rule",[30,3]]],[["default"],[[[[1,[30,3]]],[]]]]],[13],[1,"\\n"]],[3]],null],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["newThisWeek","size"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        🆕🗓️ New rules added this week:\\n\\n        "],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,6],[[28,[37,6],[[30,0,["newThisWeek"]]],null]],null],null,[[[1,"            "],[10,"li"],[12],[8,[39,8],null,[["@route","@model"],["rule",[30,4]]],[["default"],[[[[1,[30,4]]],[]]]]],[13],[1,"\\n"]],[4]],null],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["mostAddedToday"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        📈🌅 Most new files since yesterday:\\n\\n        "],[10,"ul"],[12],[1,"\\n          "],[10,"li"],[12],[1,"\\n            "],[8,[39,8],null,[["@route","@model"],["rule",[30,0,["mostAddedToday","rule"]]]],[["default"],[[[[1,[30,0,["mostAddedToday","rule"]]]],[]]]]],[1,"\\n\\n            which has been added to\\n            "],[1,[30,0,["mostAddedToday","value"]]],[1,"\\n            files\\n          "],[13],[1,"\\n        "],[13],[1,"\\n\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["mostAddedThisWeek"]],[[[1,"      "],[10,0],[14,0,"stat-card"],[12],[1,"\\n        📈🗓️ Most new files this week:\\n        "],[10,"ul"],[12],[1,"\\n          "],[10,"li"],[12],[1,"\\n            "],[8,[39,8],null,[["@route","@model"],["rule",[30,0,["mostAddedThisWeek","rule"]]]],[["default"],[[[[1,[30,0,["mostAddedThisWeek","rule"]]]],[]]]]],[1,"\\n            which has been added to\\n            "],[1,[30,0,["mostAddedThisWeek","value"]]],[1,"\\n            files\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n"],[13]],["rule","rule","rule","rule"],false,["details","summary","div","if","ul","each","-track-array","li","link-to","absolute"]]',moduleName:"lint-to-the-future/components/stats.hbs",isStrictMode:!1})
class l extends r.default{get improvedToday(){let e
for(let[t,r]of Object.entries(this.args.data?.today?.changed))r>0||this.removedToday.has(t)||(!e||r<e.value)&&(e={rule:t,value:r})
return e}get improvedThisWeek(){let e
for(let[t,r]of Object.entries(this.args.data?.thisWeek?.changed))r>0||t===this.improvedToday?.rule||r>=this.improvedToday?.value||this.removedThisWeek.has(t)||(!e||r<e.value)&&(e={rule:t,value:r})
return e}get mostAddedToday(){let e
for(let[t,r]of Object.entries(this.args.data?.today?.changed))r<0||this.newToday.has(t)||(!e||r>e.value)&&(e={rule:t,value:r})
return e}get mostAddedThisWeek(){let e
for(let[t,r]of Object.entries(this.args.data?.thisWeek?.changed))r<0||t===this.mostAddedToday?.rule||r<=this.mostAddedToday?.value||this.newToday.has(t)||this.newThisWeek.has(t)||(!e||r>e.value)&&(e={rule:t,value:r})
return e}get newToday(){return new Set(this.args.data?.today?.added)}get newThisWeek(){return new Set(this.args.data.thisWeek.added).difference(this.newToday)}get removedToday(){return new Set(this.args.data?.today?.removed)}get removedThisWeek(){return new Set(this.args.data.thisWeek.removed).difference(this.removedToday)}}e.default=l,(0,t.setComponentTemplate)(i,l)})),define("lint-to-the-future/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/controllers/index",["exports","@ember/controller"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{get rules(){let e={},t={}
for(let r in this.model.data){let n=this.model.data[r]
n[this.model.highestDate]?e[r]=n:t[r]=n}return{rulesToComplete:e,completedRules:t}}}e.default=r})),define("lint-to-the-future/data-adapter",["exports","@ember/array","@ember/debug/data-adapter","@ember/object/observers","@ember/service","@embroider/macros","@ember-data/request-utils/string","@ember-data/store"],(function(e,t,r,n,i,l,o,a){function u(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=Object.defineProperty;((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})({},{c:()=>b,f:()=>f,g:()=>c,i:()=>h,m:()=>p,n:()=>m,p:()=>y})
var d=new WeakMap
function f(e,t,r,n){return c(e.prototype,t,r,n)}function c(e,t,r,n){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
n&&(i.initializer=n)
for(let l of r)i=l(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,r){let n=d.get(e)
n||(n=new Map,d.set(e,n)),n.set(t,r)}(e,t,i)}function p({prototype:e},t,r){return m(e,t,r)}function m(e,t,r){let n={...Object.getOwnPropertyDescriptor(e,t)}
for(let i of r)n=i(e,t,n)||n
void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(e):void 0,n.initializer=void 0),Object.defineProperty(e,t,n)}function h(e,t){let r=function(e,t){let r=e.prototype
for(;r;){let e=d.get(r)?.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}function b(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function y(e,t){for(let[r,n,i]of t)"field"===r?g(e,n,i):m(e,n,i)
return e}function g(e,t,r){let n={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let i of r)n=i(e,t,n)||n
n.initializer&&(n.value=n.initializer.call(e),delete n.initializer),Object.defineProperty(e,t,n)}const v=new WeakMap
function w(){const e={},t=[],r=(0,a.recordIdentifierFor)(this),n=this.store.schema.fields(r),i={name:"Attributes",properties:["id"],expand:!0},l=i.properties,o=[i]
for(const a of n.values())switch(a.kind){case"attribute":l.push(a.name)
break
case"belongsTo":case"hasMany":{let r=e[a.kind]
void 0===r&&(r=e[a.kind]=[],o.push({name:a.kind,properties:r,expand:!0})),r.push(a.name),t.push(a.name)
break}}return o.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:o,expensiveProperties:t}}}var T=new WeakMap
class j extends r.default{constructor(...e){super(...e),u(this,T,void h(this,"store"))}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:r}=this,n=function(e){let t=v.get(e)
return void 0===t&&(t=new Map,v.set(e,t)),t}(r),i=r.notifications.subscribe("resource",((i,o)=>{"added"===o&&this.watchTypeIfUnseen(r,n,i.type,e,t,l)})),l=[()=>{r.notifications.unsubscribe(i)}]
Object.keys(r.identifierCache._cache.resourcesByType).forEach((e=>{n.set(e,!1)})),n.forEach(((i,o)=>{this.watchTypeIfUnseen(r,n,o,e,t,l)}))
const o=()=>{l.forEach((e=>e())),n.forEach(((e,t)=>{n.set(t,!1)})),this.releaseMethods.removeObject(o)}
return this.releaseMethods.pushObject(o),o}watchTypeIfUnseen(e,t,r,n,i,l){if(!0!==t.get(r)){const o=e.modelFor(r)
o.prototype._debugInfo=w
const a=this.wrapModelType(o,r)
l.push(this.observeModelType(r,i)),n([a]),t.set(r,!0)}}columnNameToDesc(e){return(0,o.capitalize)((0,o.underscore)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let r=0
return e.attributes.forEach(((e,n)=>{if(r++>this.attributeLimit)return!1
const i=this.columnNameToDesc(n)
t.push({name:n,desc:i})})),t}getRecords(e,t){if(arguments.length<2){const r=e._debugContainerKey
if(r){const e=r.match(/model:(.*)/)
null!==e&&(t=e[1])}}return!(0,l.macroCondition)((0,l.getGlobalConfig)().WarpDrive.env.DEBUG)||(e=>{if(!e)throw new Error("Cannot find model name. Please upgrade to Ember.js >= 1.13 for Ember Inspector support")})(!!t),this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const r={id:e.id}
return e.eachAttribute((n=>{if(t++>this.attributeLimit)return!1
r[n]=e[n]})),r}getRecordKeywords(e){const r=[e.id]
return e.eachAttribute((t=>{r.push(e[t])})),(0,t.A)(r)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const r=[],i=["id","isNew","hasDirtyAttributes"]
e.eachAttribute((e=>i.push(e))),i.forEach((i=>{const l=()=>{t(this.wrapRecord(e))};(0,n.addObserver)(e,i,l),r.push((function(){(0,n.removeObserver)(e,i,l)}))}))
return function(){r.forEach((e=>e()))}}}c(j.prototype,"store",[(0,i.inject)("store")])
e.default=(0,l.macroCondition)((0,l.getGlobalConfig)().WarpDrive.includeDataAdapter)?j:null})),define("lint-to-the-future/helpers/absolute",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.helper)((function(e){return Math.abs(e)}))})),define("lint-to-the-future/helpers/app-version",["exports","@ember/component/helper","lint-to-the-future/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,n){function i(e,t={}){const i=r.default.APP.version
let l=t.versionOnly||t.hideSha,o=t.shaOnly||t.hideVersion,a=null
return l&&(t.showExtended&&(a=i.match(n.versionExtendedRegExp)),a||(a=i.match(n.versionRegExp))),o&&(a=i.match(n.shaRegExp)),a?a[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=void 0
e.default=(0,t.helper)(i)})),define("lint-to-the-future/helpers/eq",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.helper)((function(e){return e[0]===e[1]}))})),define("lint-to-the-future/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/helpers/pluralize",["exports","ember-inflector/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/helpers/singularize",["exports","ember-inflector/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","lint-to-the-future/config/environment"],(function(e,t,r){let n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,i=r.default.APP.version)
e.default={name:"App Version",initialize:(0,t.default)(n,i)}})),define("lint-to-the-future/initializers/ember-data",["exports","@ember-data/request-utils/deprecation-support"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize(e){e.registerOptionsForType("serializer",{singleton:!1}),e.registerOptionsForType("adapter",{singleton:!1})}}})),define("lint-to-the-future/instance-initializers/body-class",["exports","ember-body-class/instance-initializers/body-class"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("lint-to-the-future/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/router",["exports","@ember/routing/router","lint-to-the-future/config/environment"],(function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends t.default{constructor(...e){super(...e),n(this,"location",r.default.locationType),n(this,"rootURL",r.default.rootURL)}}e.default=i,i.map((function(){this.route("files",{path:"files/:id"}),this.route("rule",{path:"rule/*"})}))})),define("lint-to-the-future/routes/application",["exports","@ember/routing/route","fetch","temporal-polyfill","lint-to-the-future/config/environment","lint-to-the-future/utils/time-series"],(function(e,t,r,n,i,l){function o(e){return e?e.length??e:0}function a(e,t,r){const n=(0,l.default)(e)
let i={},a=[],u=[]
for(let l in n){let e=o(n[l][t])-o(n[l][r])
0!==e&&(i[l]=e),!n[l][t]&&n[l][r]&&a.push(l),n[l][t]&&!n[l][r]&&u.push(l)}return{changed:i,removed:a,added:u}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class u extends t.default{async model(){let e=await(await(0,r.default)(`${i.default.rootURL}data.json`)).json(),t=Object.keys(e).sort(((e,t)=>t.localeCompare(e))),o=(0,l.default)(e)
const u=t[0],s={},d=n.Temporal.PlainDate.from(u)
if(t[1]){const r=n.Temporal.PlainDate.from(t[1])
1===r.until(d).days&&(s.today=a({[u]:e[u],[t[1]]:e[t[1]]},u,t[1]))
let i=r
for(let e=2;e<t.length;e++){const r=n.Temporal.PlainDate.from(t[e])
if(r.until(d).days>7)break
r.until(i).days>0&&(i=n.Temporal.PlainDate.from(r))}i!==r&&(s.thisWeek=a({[u]:e[u],[i.toString()]:e[i.toString()]},u,i.toString()))}return{data:o,highestDate:u,stats:s}}}e.default=u})),define("lint-to-the-future/routes/files",["exports","@ember/routing/route","@ember/service"],(function(e,t,r){var n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(n=class extends t.default{constructor(...e){var t,r,n,l
super(...e),t=this,r="router",l=this,(n=i)&&Object.defineProperty(t,r,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(l):void 0})}redirect(e){return this.router.transitionTo("rule",e.id)}},l=n.prototype,o="router",a=[r.service],u={configurable:!0,enumerable:!0,writable:!0,initializer:null},d={},Object.keys(u).forEach((function(e){d[e]=u[e]})),d.enumerable=!!d.enumerable,d.configurable=!!d.configurable,("value"in d||d.initializer)&&(d.writable=!0),d=a.slice().reverse().reduce((function(e,t){return t(l,o,e)||e}),d),s&&void 0!==d.initializer&&(d.value=d.initializer?d.initializer.call(s):void 0,d.initializer=void 0),i=void 0===d.initializer?(Object.defineProperty(l,o,d),null):d,n)
var l,o,a,u,s,d})),define("lint-to-the-future/routes/index",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{async model(){return this.modelFor("application")}}e.default=r})),define("lint-to-the-future/routes/rule",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{model(e){let t=this.modelFor("application"),r=e[""]
r=r.replace(/\/$/,"")
let n=t.data[r],i=Object.keys(n),l=i.sort(((e,t)=>e>t))[i.length-1]
const o=r.split(":")[0],a=r.split(":").slice(1).join(":")
return{fileList:n[l],rule:r,pluginName:o,ruleName:a,ruleData:n,highestDate:t.highestDate}}}e.default=r})),define("lint-to-the-future/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("lint-to-the-future/services/store",["exports","@ember/debug","ember-data/store"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("lint-to-the-future/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"j/H8poY3",block:'[[[1,[28,[35,0],["Lint to the Future Dashboard"],null]],[1,"\\n\\n"],[8,[39,1],[[24,0,"plain-link"]],[["@route"],["index"]],[["default"],[[[[10,"h1"],[12],[1,"Lint to the Future Dashboard"],[13]],[]]]]],[1,"\\n\\n"],[46,[28,[37,4],null,null],null,null,null],[1,"\\n\\n"],[10,"footer"],[12],[1,"\\n  This page was generated with "],[10,3],[14,6,"https://github.com/mansona/lint-to-the-future"],[12],[1,"Lint to the Future"],[13],[1," which was built with ❤️ by "],[10,3],[14,6,"https://twitter.com/real_ate"],[12],[1,"Chris Manson"],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["page-title","link-to","h1","component","-outlet","footer","a"]]',moduleName:"lint-to-the-future/templates/application.hbs",isStrictMode:!1})})),define("lint-to-the-future/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"f49iXzao",block:'[[[8,[39,0],null,[["@data"],[[30,1,["stats"]]]],null],[1,"\\n\\n"],[10,0],[14,0,"graphs"],[12],[1,"\\n"],[42,[28,[37,3],[[30,0,["rules","rulesToComplete"]]],null],null,[[[1,"    "],[8,[39,4],null,[["@rule","@data","@highestDate"],[[30,3],[30,2],[30,1,["highestDate"]]]],null],[1,"\\n"]],[2,3]],null],[13],[1,"\\n\\n\\n"],[10,"details"],[12],[1,"\\n  "],[10,"summary"],[12],[1,"Completed Rules"],[13],[1,"\\n  "],[10,0],[14,0,"graphs px-2"],[12],[1,"\\n"],[42,[28,[37,3],[[30,0,["rules","completedRules"]]],null],null,[[[1,"      "],[8,[39,4],null,[["@rule","@data","@highestDate"],[[30,5],[30,4],[30,1,["highestDate"]]]],null],[1,"\\n"]],[4,5]],null],[1,"  "],[13],[1,"\\n"],[13]],["@model","value","key","value","key"],false,["stats","div","each","-each-in","chart","details","summary"]]',moduleName:"lint-to-the-future/templates/index.hbs",isStrictMode:!1})})),define("lint-to-the-future/templates/rule",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"tv1CvygL",block:'[[[1,[28,[35,0],["Rule"],null]],[1,"\\n\\n"],[8,[39,1],null,[["@rule","@data","@highestDate","@showLink"],[[30,1,["rule"]],[30,1,["ruleData"]],[30,1,["highestDate"]],false]],null],[1,"\\n\\n"],[10,"h2"],[12],[1,"Files with "],[1,[30,1,["ruleName"]]],[1," "],[13],[1,"\\n"],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,5],[[28,[37,5],[[30,1,["fileList"]]],null]],null],null,[[[1,"    "],[10,"li"],[12],[1,[30,2]],[13],[1,"\\n"]],[2]],null],[13],[1,"\\n"]],["@model","file"],false,["page-title","chart","h2","ul","each","-track-array","li"]]',moduleName:"lint-to-the-future/templates/rule.hbs",isStrictMode:!1})})),define("lint-to-the-future/transforms/boolean",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.BooleanTransform}})}))
define("lint-to-the-future/transforms/date",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.DateTransform}})})),define("lint-to-the-future/transforms/number",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.NumberTransform}})})),define("lint-to-the-future/transforms/string",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.StringTransform}})})),define("lint-to-the-future/utils/normalise-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){let r,n=Object.keys(e),i={},l=n.map((e=>new Date(e))),o=Math.min(...l),a=new Date(o),u=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),s=Math.max(...l),d=new Date(s),f=Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),c=new Date(t),p=Date.UTC(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),m=[],h=new Date(u)
for(;Date.UTC(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate())<=f;)m.push(new Date(h).toISOString().split("T")[0]),h.setDate(h.getDate()+1)
m.forEach((t=>{e[t]&&(r=Array.isArray(e[t])?e[t].length:e[t]),i[t]=r})),Date.UTC(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate())<=p&&(i[new Date(h).toISOString().split("T")[0]]=0)
return i}})),define("lint-to-the-future/utils/time-series",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){let t={}
return Object.keys(e).forEach((r=>{Object.keys(e[r]).forEach((n=>{Object.keys(e[r][n]).forEach((i=>{let l=`${n}:${i}`
t[l]?t[l][r]=e[r][n][i]:t[l]={[r]:e[r][n][i]}}))}))})),t}})),define("lint-to-the-future/config/environment",[],(function(){try{var e="lint-to-the-future/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("lint-to-the-future/app").default.create({name:"lint-to-the-future",version:"2.6.1+2b9befe8"})
