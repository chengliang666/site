!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueResource=e():t.VueResource=e()}(this,function(){return r=[function(t,e,n){function r(e){var t=n(1);t.config=e.config,t.warning=e.util.warn,t.nextTick=e.util.nextTick,e.url=n(2),e.http=n(8),e.resource=n(23),e.Promise=n(10),Object.defineProperties(e.prototype,{$url:{get:function(){return t.options(e.url,this,this.$options.url)}},$http:{get:function(){return t.options(e.http,this,this.$options.http)}},$resource:{get:function(){return e.resource.bind(this)}},$promise:{get:function(){return function(t){return new e.Promise(t,this)}.bind(this)}}})}window.Vue&&Vue.use(r),t.exports=r},function(t,e){var o=e,n=[],r=window.console;function i(t,e,n){for(var r in e)n&&(o.isPlainObject(e[r])||o.isArray(e[r]))?(o.isPlainObject(e[r])&&!o.isPlainObject(t[r])&&(t[r]={}),o.isArray(e[r])&&!o.isArray(t[r])&&(t[r]=[]),i(t[r],e[r],n)):void 0!==e[r]&&(t[r]=e[r])}o.warn=function(t){r&&o.warning&&(!o.config.silent||o.config.debug)&&r.warn("[VueResource warn]: "+t)},o.error=function(t){r&&r.error(t)},o.trim=function(t){return t.replace(/^\s*|\s*$/g,"")},o.toLower=function(t){return t?t.toLowerCase():""},o.isArray=Array.isArray,o.isString=function(t){return"string"==typeof t},o.isFunction=function(t){return"function"==typeof t},o.isObject=function(t){return null!==t&&"object"==typeof t},o.isPlainObject=function(t){return o.isObject(t)&&Object.getPrototypeOf(t)==Object.prototype},o.options=function(t,e,n){return o.isFunction(n=n||{})&&(n=n.call(e)),o.merge(t.bind({$vm:e,$options:n}),t,{$options:n})},o.each=function(t,e){var n,r;if("number"==typeof t.length)for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(o.isObject(t))for(r in t)t.hasOwnProperty(r)&&e.call(t[r],t[r],r);return t},o.defaults=function(t,e){for(var n in e)void 0===t[n]&&(t[n]=e[n]);return t},o.extend=function(e){return n.slice.call(arguments,1).forEach(function(t){i(e,t)}),e},o.merge=function(e){return n.slice.call(arguments,1).forEach(function(t){i(e,t,!0)}),e}},function(t,e,n){var a=n(1),r=document.documentMode,o=document.createElement("a");function i(t,e){var o,n=t;return a.isString(t)&&(n={url:t,params:e}),n=a.merge({},i.options,this.$options,n),i.transforms.forEach(function(t){var e,n,r;e=t,n=o,r=this.$vm,o=function(t){return e.call(r,t,n)}},this),o(n)}i.options={url:"",root:null,params:{}},i.transforms=[n(3),n(5),n(6),n(7)],i.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){null===(e=a.isFunction(e)?e():e)&&(e=""),this.push(n(t)+"="+n(e))},function n(r,t,o){var i,s=a.isArray(t),u=a.isPlainObject(t);a.each(t,function(t,e){i=a.isObject(t)||a.isArray(t),o&&(e=o+"["+(u||i?e:"")+"]"),!o&&s?r.add(t.name,t.value):i?n(r,t,e):r.add(e,t)})}(e,t),e.join("&").replace(/%20/g,"+")},i.parse=function(t){return r&&(o.href=t,t=o.href),o.href=t,{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",port:o.port,host:o.host,hostname:o.hostname,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):""}},t.exports=a.url=i},function(t,e,n){var r=n(4);t.exports=function(e){var t=[],n=r.expand(e.url,e.params,t);return t.forEach(function(t){delete e.params[t]}),n}},function(t,a){a.expand=function(t,e,n){t=this.parse(t),e=t.expand(e);return n&&n.push.apply(n,t.vars),e},a.parse=function(t){var s=["+","#",".","/",";","?","&"],u=[];return{vars:u,expand:function(i){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,e,n){if(e){var r=null,o=[];if(-1!==s.indexOf(e.charAt(0))&&(r=e.charAt(0),e=e.substr(1)),e.split(/,/g).forEach(function(t){t=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);o.push.apply(o,a.getValues(i,r,t[1],t[2]||t[3])),u.push(t[1])}),r&&"+"!==r){e=",";return"?"===r?e="&":"#"!==r&&(e=r),(0!==o.length?r:"")+o.join(e)}return o.join(",")}return a.encodeReserved(n)})}}},a.getValues=function(t,e,n,r){var o,i=t[n],s=[];return this.isDefined(i)&&""!==i?"string"==typeof i||"number"==typeof i||"boolean"==typeof i?(i=i.toString(),r&&"*"!==r&&(i=i.substring(0,parseInt(r,10))),s.push(this.encodeValue(e,i,this.isKeyOperator(e)?n:null))):"*"===r?Array.isArray(i)?i.filter(this.isDefined).forEach(function(t){s.push(this.encodeValue(e,t,this.isKeyOperator(e)?n:null))},this):Object.keys(i).forEach(function(t){this.isDefined(i[t])&&s.push(this.encodeValue(e,i[t],t))},this):(o=[],Array.isArray(i)?i.filter(this.isDefined).forEach(function(t){o.push(this.encodeValue(e,t))},this):Object.keys(i).forEach(function(t){this.isDefined(i[t])&&(o.push(encodeURIComponent(t)),o.push(this.encodeValue(e,i[t].toString())))},this),this.isKeyOperator(e)?s.push(encodeURIComponent(n)+"="+o.join(",")):0!==o.length&&s.push(o.join(","))):";"===e?s.push(encodeURIComponent(n)):""!==i||"&"!==e&&"?"!==e?""===i&&s.push(""):s.push(encodeURIComponent(n)+"="),s},a.isDefined=function(t){return null!=t},a.isKeyOperator=function(t){return";"===t||"&"===t||"?"===t},a.encodeValue=function(t,e,n){return e="+"===t||"#"===t?this.encodeReserved(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e},a.encodeReserved=function(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return t=!/%[0-9A-Fa-f]/.test(t)?encodeURI(t):t}).join("")}},function(t,e,n){var i=n(1);t.exports=function(r,t){var o=[],t=(t=t(r)).replace(/(\/?):([a-z]\w*)/gi,function(t,e,n){return i.warn("The `:"+n+"` parameter syntax has been deprecated. Use the `{"+n+"}` syntax instead."),r.params[n]?(o.push(n),e+function(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}(r.params[n],!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")):""});return o.forEach(function(t){delete r.params[t]}),t}},function(t,e,n){var o=n(1);t.exports=function(t,e){var n=Object.keys(o.url.options.params),r={},e=e(t);return o.each(t.params,function(t,e){-1===n.indexOf(e)&&(r[e]=t)}),(r=o.url.params(r))&&(e+=(-1==e.indexOf("?")?"?":"&")+r),e}},function(t,e,n){var r=n(1);t.exports=function(t,e){e=e(t);return e=r.isString(t.root)&&!e.match(/^(https?:)?\//)?t.root+"/"+e:e}},function(t,e,n){var i=n(1),r=n(9),o=n(10),s=n(13),u={"Content-Type":"application/json"};function a(t,e){var n=r;return a.interceptors.forEach(function(t){n=s(t,this.$vm)(n)},this),e=i.isObject(t)?t:i.extend({url:t},e),t=i.merge({},a.options,this.$options,e),e=n(t).bind(this.$vm).then(function(t){return t.ok?t:o.reject(t)},function(t){return t instanceof Error&&i.error(t),o.reject(t)}),t.success&&e.success(t.success),t.error&&e.error(t.error),e}a.options={method:"get",data:"",params:{},headers:{},xhr:null,upload:null,jsonp:"callback",beforeSend:null,crossOrigin:null,emulateHTTP:!1,emulateJSON:!1,timeout:0},a.interceptors=[n(14),n(15),n(16),n(18),n(19),n(20),n(21)],a.headers={put:u,post:u,patch:u,delete:u,common:{Accept:"application/json, text/plain, */*"},custom:{"X-Requested-With":"XMLHttpRequest"}},["get","put","post","patch","delete","jsonp"].forEach(function(o){a[o]=function(t,e,n,r){return i.isFunction(e)&&(r=n,n=e,e=void 0),i.isObject(n)&&(r=n,n=void 0),this(t,i.extend({method:o,data:e,success:n},r))}}),t.exports=i.http=a},function(t,e,n){var o=n(1),r=n(10),i=n(12);t.exports=function(t){t=(t.client||i)(t);return r.resolve(t).then(function(t){var e;return t.headers&&(e=function(t){var e,n,r={};o.isString(t)&&o.each(t.split("\n"),function(t){n=t.indexOf(":"),e=o.trim(o.toLower(t.slice(0,n))),n=o.trim(t.slice(n+1)),r[e]?o.isArray(r[e])?r[e].push(n):r[e]=[r[e],n]:r[e]=n});return r}(t.headers),t.headers=function(t){return t?e[o.toLower(t)]:e}),t.ok=200<=t.status&&t.status<300,t})}},function(t,e,n){var r=n(1),o=window.Promise||n(11);function i(t,e){this.promise=t instanceof o?t:new o(t.bind(e)),this.context=e}i.all=function(t,e){return new i(o.all(t),e)},i.resolve=function(t,e){return new i(o.resolve(t),e)},i.reject=function(t,e){return new i(o.reject(t),e)},i.race=function(t,e){return new i(o.race(t),e)};n=i.prototype;n.bind=function(t){return this.context=t,this},n.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),this.promise=this.promise.then(t,e),this},n.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),this.promise=this.promise.catch(t),this},n.finally=function(e){return this.then(function(t){return e.call(this),t},function(t){return e.call(this),o.reject(t)})},n.success=function(e){return r.warn("The `success` method has been deprecated. Use the `then` method instead."),this.then(function(t){return e.call(this,t.data,t.status,t)||t})},n.error=function(e){return r.warn("The `error` method has been deprecated. Use the `catch` method instead."),this.catch(function(t){return e.call(this,t.data,t.status,t)||t})},n.always=function(e){r.warn("The `always` method has been deprecated. Use the `finally` method instead.");function t(t){return e.call(this,t.data,t.status,t)||t}return this.then(t,t)},t.exports=i},function(t,e,n){var r=n(1);function s(t){this.state=2,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}s.reject=function(n){return new s(function(t,e){e(n)})},s.resolve=function(n){return new s(function(t,e){t(n)})},s.all=function(i){return new s(function(n,t){var r=0,o=[];0===i.length&&n(o);for(var e=0;e<i.length;e+=1)s.resolve(i[e]).then(function(e){return function(t){o[e]=t,(r+=1)===i.length&&n(o)}}(e),t)})},s.race=function(r){return new s(function(t,e){for(var n=0;n<r.length;n+=1)s.resolve(r[n]).then(t,e)})};n=s.prototype;n.resolve=function(t){var e=this;if(2===e.state){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var r=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof r)return void r.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},n.reject=function(t){var e=this;if(2===e.state){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},n.notify=function(){var o=this;r.nextTick(function(){if(2!==o.state)for(;o.deferred.length;){var e=o.deferred.shift(),t=e[0],n=e[1],r=e[2],e=e[3];try{0===o.state?r("function"==typeof t?t.call(void 0,o.value):o.value):1===o.state&&("function"==typeof n?r(n.call(void 0,o.value)):e(o.value))}catch(t){e(t)}}})},n.then=function(n,r){var o=this;return new s(function(t,e){o.deferred.push([n,r,t,e]),o.notify()})},n.catch=function(t){return this.then(void 0,t)},t.exports=s},function(t,e,n){var i=n(1),r=n(10);t.exports=function(o){return new r(function(e){var t,n=new XMLHttpRequest,r={request:o};o.cancel=function(){n.abort()},n.open(o.method,i.url(o),!0),t=function(t){r.data=n.responseText,r.status=n.status,r.statusText=n.statusText,r.headers=n.getAllResponseHeaders(),e(r)},n.timeout=0,n.onload=t,n.onabort=t,n.onerror=t,n.ontimeout=function(){},n.onprogress=function(){},i.isPlainObject(o.xhr)&&i.extend(n,o.xhr),i.isPlainObject(o.upload)&&i.extend(n.upload,o.upload),i.each(o.headers||{},function(t,e){n.setRequestHeader(e,t)}),n.send(o.data)})}},function(t,e,n){var o=n(1),i=n(10);function s(t,e,n){var r=i.resolve(t);return arguments.length<2?r:r.then(e,n)}t.exports=function(n,r){return function(e){return o.isFunction(n)&&(n=n.call(r,i)),function(t){return s(t=o.isFunction(n.request)?n.request.call(r,t):t,function(t){return s(e(t),function(t){return t=o.isFunction(n.response)?n.response.call(r,t):t})})}}}},function(t,e,n){var r=n(1);t.exports={request:function(t){return r.isFunction(t.beforeSend)&&t.beforeSend.call(this,t),t}}},function(t,e){t.exports=function(){var e;return{request:function(t){return t.timeout&&(e=setTimeout(function(){t.cancel()},t.timeout)),t},response:function(t){return clearTimeout(e),t}}}},function(t,e,n){var r=n(17);t.exports={request:function(t){return"JSONP"==t.method&&(t.client=r),t}}},function(t,e,n){var s=n(1),r=n(10);t.exports=function(i){return new r(function(e){var t,n,r="_jsonp"+Math.random().toString(36).substr(2),o={request:i,data:null};i.params[i.jsonp]=r,i.cancel=function(){t({type:"cancel"})},(n=document.createElement("script")).src=s.url(i),n.type="text/javascript",n.async=!0,window[r]=function(t){o.data=t},t=function(t){"load"===t.type&&null!==o.data?o.status=200:"error"===t.type?o.status=404:o.status=0,e(o),delete window[r],document.body.removeChild(n)},n.onload=t,n.onerror=t,document.body.appendChild(n)})}},function(t,e){t.exports={request:function(t){return t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers["X-HTTP-Method-Override"]=t.method,t.method="POST"),t}}},function(t,e,n){var r=n(1);t.exports={request:function(t){return t.emulateJSON&&r.isPlainObject(t.data)&&(t.headers["Content-Type"]="application/x-www-form-urlencoded",t.data=r.url.params(t.data)),r.isObject(t.data)&&/FormData/i.test(t.data.toString())&&delete t.headers["Content-Type"],r.isPlainObject(t.data)&&(t.data=JSON.stringify(t.data)),t},response:function(t){try{t.data=JSON.parse(t.data)}catch(t){}return t}}},function(t,e,n){var r=n(1);t.exports={request:function(t){return t.method=t.method.toUpperCase(),t.headers=r.extend({},r.http.headers.common,t.crossOrigin?{}:r.http.headers.custom,r.http.headers[t.method.toLowerCase()],t.headers),r.isPlainObject(t.data)&&/^(GET|JSONP)$/i.test(t.method)&&(r.extend(t.params,t.data),delete t.data),t}}},function(t,e,n){var r=n(1),o=n(22),i="withCredentials"in new XMLHttpRequest,s=r.url.parse(location.href);t.exports={request:function(t){return null===t.crossOrigin&&(t.crossOrigin=function(t){t=r.url.parse(r.url(t));return t.protocol!==s.protocol||t.host!==s.host}(t)),t.crossOrigin&&(i||(t.client=o),t.emulateHTTP=!1),t}}},function(t,e,n){var i=n(1),r=n(10);t.exports=function(o){return new r(function(e){var t,n=new XDomainRequest,r={request:o};o.cancel=function(){n.abort()},n.open(o.method,i.url(o),!0),t=function(t){r.data=n.responseText,r.status=n.status,r.statusText=n.statusText,e(r)},n.timeout=0,n.onload=t,n.onabort=t,n.onerror=t,n.ontimeout=function(){},n.onprogress=function(){},n.send(o.data)})}},function(t,e,n){var u=n(1);function a(n,r,t,o){var i=this,s={};return t=u.extend({},a.actions,t),u.each(t,function(t,e){t=u.merge({url:n,params:r||{}},o,t),s[e]=function(){return(i.$http||u.http)(function(t,e){var n,r,o,i=u.extend({},t),s={};switch(e.length){case 4:o=e[3],r=e[2];case 3:case 2:if(!u.isFunction(e[1])){s=e[0],n=e[1],r=e[2];break}if(u.isFunction(e[0])){r=e[0],o=e[1];break}r=e[1],o=e[2];case 1:u.isFunction(e[0])?r=e[0]:/^(POST|PUT|PATCH)$/i.test(i.method)?n=e[0]:s=e[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, data, success, error], got "+e.length+" arguments"}i.data=n,i.params=u.extend({},i.params,s),r&&(i.success=r);o&&(i.error=o);return i}(t,arguments))}}),s}a.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},t.exports=u.resource=a}],o={},n.m=r,n.c=o,n.p="",n(0);function n(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return r[t].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r,o});