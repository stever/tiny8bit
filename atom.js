var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);var r=[],aa="./this.program";function t(a,b){throw b;}var u=!1,w=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;w="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!w;da=!u&&!ba&&!w;var x="",ea,y,fa,ha;
if(ba)x=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",ja),t=function(a){process.exit(a)},
e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||w)w?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},w&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var B;e.noExitRuntime&&(B=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,la=new WebAssembly.Table({initial:20,maximum:20,element:"anyfunc"}),ma=!1;function assert(a,b){a||ja("Assertion failed: "+b)}
function na(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c,d){var f={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=pa(c);D(a,E,b,c)}return b},array:function(a){var b=pa(a.length);qa.set(a,b);return b}},l=na(a),k=[];a=0;if(d)for(var m=0;m<d.length;m++){var p=f[c[m]];p?(0===a&&(a=ra()),k[m]=p(d[m])):k[m]=d[m]}c=l.apply(null,k);c=function(a){return"string"===b?F(a):"boolean"===b?!!a:a}(c);0!==a&&sa(a);return c}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ta)a=ta.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var l=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|l);else{var k=c[a++]&63;f=224==(f&240)?(f&15)<<12|l<<6|k:(f&7)<<18|l<<12|k<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var l=0;l<a.length;++l){var k=a.charCodeAt(l);if(55296<=k&&57343>=k){var m=a.charCodeAt(++l);k=65536+((k&1023)<<10)|m&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-f}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=pa(b);D(a,qa,c,b);return c}function wa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,E,xa,za,G,Aa,Ba,H;
function Ca(a){buffer=a;e.HEAP8=qa=new Int8Array(a);e.HEAP16=xa=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=za=new Uint16Array(a);e.HEAPU32=Aa=new Uint32Array(a);e.HEAPF32=Ba=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var Da=e.TOTAL_MEMORY||33554432;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:Da/65536});C&&(buffer=C.buffer);Da=buffer.byteLength;Ca(buffer);G[1371388]=10728592;
function Ea(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ub;"number"===typeof c?void 0===b.Nb?e.dynCall_v(c):e.dynCall_vi(c,b.Nb):c(void 0===b.Nb?null:b.Nb)}}}var Fa=[],Ga=[],Ha=[],Ia=[],Ja=[];function Ka(){var a=e.preRun.shift();Fa.unshift(a)}var I=0,La=null,J=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ma(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="atom.wasm";if(!Ma()){var Na=K;K=e.locateFile?e.locateFile(Na,x):x+Na}function Oa(){try{if(A)return new Uint8Array(A);if(y)return y(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Pa(){return A||!u&&!w||"function"!==typeof fetch?new Promise(function(a){a(Oa())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Oa()})}Ga.push({Ub:function(){Qa()}});var Ra=0,Sa=0,L=0,Ta=0,Ua=0,Va=null,Wa=null,Xa=!1;function Ya(){for(var a=M.length-1;0<=a;--a)Za(a);M=[];$a=[]}var $a=[];
function ab(){if(bb&&cb.Fb)for(var a=0;a<$a.length;++a){var b=$a[a];$a.splice(a,1);--a;b.ec.apply(this,b.Zb)}}var bb=0,cb=null,M=[];function db(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Za(a){var b=M[a];b.target.removeEventListener(b.Eb,b.Sb,b.Gb);M.splice(a,1)}
function N(a){function b(b){++bb;cb=a;ab();a.Ib(b);ab();--bb}if(a.Hb)a.Sb=b,a.target.addEventListener(a.Eb,b,a.Gb),M.push(a),Xa||(Ia.push(Ya),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Eb==a.Eb&&Za(c--)}var eb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){try{if(!a)return window;"number"===typeof a&&(a=eb[a]||F(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function fb(a){"number"===typeof a&&(a=F(a));return a&&"#canvas"!==a?"undefined"!==typeof gb&&hb[a]?hb[a]:O(a):"undefined"!==typeof gb&&hb.canvas?hb.canvas:e.canvas}
function kb(a,b,c,d,f,l){Ra||(Ra=P(164));a={target:O(a),Fb:db()?!1:!0,Eb:l,Hb:d,Ib:function(a){a=a||event;var c=Ra;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;Q(d,f,c,b)&&a.preventDefault()},Gb:c};N(a)}
function lb(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;xa[a+40>>1]=b.button;xa[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Va;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Wa;if(e.canvas){var d=e.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Va=b.screenX,Wa=b.screenY)}
function R(a,b,c,d,f,l){Sa||(Sa=P(72));a=O(a);c={target:a,Fb:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,Eb:l,Hb:d,Ib:function(c){c=c||event;lb(Sa,c,a);Q(d,f,Sa,b)&&c.preventDefault()},Gb:c};db()&&"mousedown"==l&&(c.Fb=!1);N(c)}
function mb(a,b,c,d){Ta||(Ta=P(36));a=O(a);N({target:a,Fb:!1,Eb:"resize",Hb:d,Ib:function(c){c=c||event;if(c.target==a){var f=Ta,k=document.body;G[f>>2]=c.detail;G[f+4>>2]=k.clientWidth;G[f+8>>2]=k.clientHeight;G[f+12>>2]=innerWidth;G[f+16>>2]=innerHeight;G[f+20>>2]=outerWidth;G[f+24>>2]=outerHeight;G[f+28>>2]=pageXOffset;G[f+32>>2]=pageYOffset;Q(d,10,f,b)&&c.preventDefault()}},Gb:c})}
function nb(a,b,c,d,f,l){Ua||(Ua=P(1684));a=O(a);N({target:a,Fb:"touchstart"==l||"touchend"==l,Eb:l,Hb:d,Ib:function(c){c=c||event;for(var l={},k=0;k<c.touches.length;++k){var n=c.touches[k];n.Pb=!1;l[n.identifier]=n}for(k=0;k<c.changedTouches.length;++k)n=c.changedTouches[k],l[n.identifier]=n,n.Pb=!0;for(k=0;k<c.targetTouches.length;++k)n=c.targetTouches[k],l[n.identifier].Xb=!0;var q=n=Ua;G[q+4>>2]=c.ctrlKey;G[q+8>>2]=c.shiftKey;G[q+12>>2]=c.altKey;G[q+16>>2]=c.metaKey;q+=20;var ya=e.canvas?e.canvas.getBoundingClientRect():
void 0,ib=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},jb=0;for(k in l){var v=l[k];G[q>>2]=v.identifier;G[q+4>>2]=v.screenX;G[q+8>>2]=v.screenY;G[q+12>>2]=v.clientX;G[q+16>>2]=v.clientY;G[q+20>>2]=v.pageX;G[q+24>>2]=v.pageY;G[q+28>>2]=v.Pb;G[q+32>>2]=v.Xb;ya?(G[q+44>>2]=v.clientX-ya.left,G[q+48>>2]=v.clientY-ya.top):(G[q+44>>2]=0,G[q+48>>2]=0);G[q+36>>2]=v.clientX-ib.left;G[q+40>>2]=v.clientY-ib.top;q+=52;if(32<=++jb)break}G[n>>2]=jb;Q(d,f,n,b)&&c.preventDefault()},Gb:c})}
function ob(a,b,c,d,f,l){a||(a=e.canvas);a={target:O(a),Fb:!1,Eb:l,Hb:d,Ib:function(a){a=a||event;Q(d,f,0,b)&&a.preventDefault()},Gb:c};N(a)}
function pb(a,b,c,d,f){function l(c){c=c||event;lb(L,c,a);H[L+72>>3]=c.wheelDeltaX||0;H[L+80>>3]=-(c.wheelDeltaY||c.wheelDelta);H[L+88>>3]=0;G[L+96>>2]=0;Q(d,9,L,b)&&c.preventDefault()}function k(c){c=c||event;var f=L;lb(f,c,a);H[f+72>>3]=c.deltaX;H[f+80>>3]=c.deltaY;H[f+88>>3]=c.deltaZ;G[f+96>>2]=c.deltaMode;Q(d,9,f,b)&&c.preventDefault()}L||(L=P(104));N({target:a,Fb:!0,Eb:f,Hb:d,Ib:"wheel"==f?k:l,Gb:c})}
var qb=["default","low-power","high-performance"],rb=1,sb=0,tb=[],S=[],ub=[],T=[],U=[],V=[],W=[],vb={},wb=null,hb={},X={},xb={};function Y(a){sb||(sb=a)}function yb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,f,l){b.drawArraysInstancedANGLE(a,d,f,l)},a.drawElementsInstanced=function(a,d,f,l,k){b.drawElementsInstancedANGLE(a,d,f,l,k)})}
function Ab(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Bb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Cb(a){a||(a=wb);if(!a.Vb){a.Vb=!0;var b=a.Mb;2>a.version&&(zb(b),Ab(b),Bb(b));b.ac=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var gb={},Db,Eb;function Fb(a,b,c,d){for(var f=0;f<a;f++){var l=Z[c](),k=l&&yb(d);l?(l.name=k,d[k]=l):Y(1282);G[b+4*f>>2]=k}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else Y(1281)}function Hb(a){var b=ua(a)+1,c=P(b);D(a,E,c,b);return c}
function Ib(a,b,c,d,f){a-=5120;a=1==a?E:4==a?G:6==a?Ba:5==a||28922==a?Aa:za;var l=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>l,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<l)+4-1&-4)>>l)}for(var Z,Jb=0;256>Jb;Jb++);
var Ob={Za:function(){console.log("fs.h: registering Module['ccall']");e.ccall=oa},_a:function(a){var b=F(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);oa("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},N:function(){return devicePixelRatio||1},W:function(a,b,c){a=a?O(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):
(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},Sa:function(a,b,c){E.set(E.subarray(b,b+c),a)},Ba:function(a,b){function c(d){Kb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ta:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=wa(2*b):b=Math.min(wa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);Ca(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},L:function(a,b,c){a=fb(a);if(!a)return-4;
a.width=b;a.height=c;return 0},La:function(a,b,c,d){kb(a,b,c,d,2,"keydown");return 0},Ja:function(a,b,c,d){kb(a,b,c,d,1,"keypress");return 0},Ka:function(a,b,c,d){kb(a,b,c,d,3,"keyup");return 0},Ra:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},Oa:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},Na:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},Pa:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},Qa:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},va:function(a,b,c,d){mb(a,
b,c,d);return 0},Ea:function(a,b,c,d){nb(a,b,c,d,25,"touchcancel");return 0},Fa:function(a,b,c,d){nb(a,b,c,d,23,"touchend");return 0},Ga:function(a,b,c,d){nb(a,b,c,d,24,"touchmove");return 0},Ha:function(a,b,c,d){nb(a,b,c,d,22,"touchstart");return 0},Da:function(a,b,c,d){ob(a,b,c,d,31,"webglcontextlost");return 0},Ca:function(a,b,c,d){ob(a,b,c,d,32,"webglcontextrestored");return 0},Ma:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(pb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?
(pb(a,b,c,d,"mousewheel"),0):-1},C:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=qb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Wb=G[b+8];c.bc=G[b+9];c.Qb=G[b+10];c.Tb=G[b+11];c.cc=G[b+12];c.dc=G[b+13];a=fb(a);if(!a||c.Tb)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=P(8);var d={handle:b,attributes:c,version:c.Wb,Mb:a};a.canvas&&
(a.canvas.Yb=d);vb[b]=d;("undefined"===typeof c.Qb||c.Qb)&&Cb(d);c=b}else c=0;return c},Ya:function(a,b){a=vb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?zb(Z):"OES_vertex_array_object"==b?Ab(Z):"WEBGL_draw_buffers"==b&&Bb(Z);return!!a.Mb.getExtension(b)},ka:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ba:function(a){wb=vb[a];e.$b=Z=wb&&wb.Mb;return!a||Z?0:-5},g:function(a){Z.activeTexture(a)},O:function(a,b){Z.attachShader(S[a],
W[b])},d:function(a,b){Z.bindBuffer(a,tb[b])},f:function(a,b){Z.bindFramebuffer(a,ub[b])},wa:function(a,b){Z.bindRenderbuffer(a,T[b])},a:function(a,b){Z.bindTexture(a,U[b])},F:function(a,b,c,d){Z.blendColor(a,b,c,d)},G:function(a,b){Z.blendEquationSeparate(a,b)},H:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},S:function(a,b,c,d){Z.bufferData(a,c?E.subarray(c,c+b):b,d)},R:function(a,b,c,d){Z.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},ja:function(a){Z.clear(a)},
na:function(a,b,c,d){Z.clearColor(a,b,c,d)},ma:function(a){Z.clearDepth(a)},la:function(a){Z.clearStencil(a)},x:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Wa:function(a){Z.compileShader(W[a])},Q:function(a,b,c,d,f,l,k,m){Z.compressedTexImage2D(a,b,c,d,f,l,m?E.subarray(m,m+k):null)},sa:function(){var a=yb(S),b=Z.createProgram();b.name=a;S[a]=b;return a},Y:function(a){var b=yb(W);W[b]=Z.createShader(a);return b},E:function(a){Z.cullFace(a)},ya:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>
2],f=tb[d];f&&(Z.deleteBuffer(f),f.name=0,tb[d]=null,d==Db&&(Db=0),d==Eb&&(Eb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=ub[d];f&&(Z.deleteFramebuffer(f),f.name=0,ub[d]=null)}},U:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,X[a]=null):Y(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=T[d];f&&(Z.deleteRenderbuffer(f),f.name=0,T[d]=null)}},y:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):Y(1281)}},V:function(a,b){for(var c=
0;c<a;c++){var d=G[b+4*c>>2],f=U[d];f&&(Z.deleteTexture(f),f.name=0,U[d]=null)}},v:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},z:function(a){Z.disableVertexAttribArray(a)},ea:function(a,b,c){Z.drawArrays(a,b,c)},fa:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ga:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,T[d])},b:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,U[d],f)},D:function(a){Z.frontFace(a)},
T:function(a,b){Fb(a,b,"createBuffer",tb)},n:function(a,b){Fb(a,b,"createFramebuffer",ub)},xa:function(a,b){Fb(a,b,"createRenderbuffer",T)},ta:function(a,b){Fb(a,b,"createTexture",U)},pa:function(a,b){return Z.getAttribLocation(S[a],F(b))},i:function(a,b){Gb(a,b)},qa:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},M:function(a,b,c){if(c)if(a>=rb)Y(1281);else{var d=X[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),
G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Ob;else if(35722==b){if(-1==d.Kb){a=S[a];var f=Z.getProgramParameter(a,35721);for(b=d.Kb=0;b<f;++b)d.Kb=Math.max(d.Kb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Kb}else if(35381==b){if(-1==d.Lb)for(a=S[a],f=Z.getProgramParameter(a,35382),b=d.Lb=0;b<f;++b)d.Lb=Math.max(d.Lb,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Lb}else G[c>>2]=Z.getProgramParameter(S[a],b);else Y(1282)}else Y(1281)},Va:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===
a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},X:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):Y(1281)},za:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Z.getParameter(a))||Y(1280);b=Hb(b);break;case 7938:b=Hb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:return Y(1280),0}return xb[a]=b},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=
X[a]&&X[a].Rb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ra:function(a){Z.linkProgram(S[a]);var b=S[a];a=X[a]={Rb:{},Ob:0,Kb:-1,Lb:-1};for(var c=a.Rb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var l=Z.getActiveUniform(b,f),k=l.name;a.Ob=Math.max(a.Ob,k.length+1);"]"==k.slice(-1)&&(k=k.slice(0,k.lastIndexOf("[")));var m=Z.getUniformLocation(b,k);if(m){var p=yb(V);c[k]=[l.size,p];V[p]=m;for(var n=1;n<l.size;++n)m=Z.getUniformLocation(b,k+"["+n+"]"),p=yb(V),V[p]=m}}},B:function(a,b){Z.polygonOffset(a,b)},ua:function(a,
b,c,d){Z.renderbufferStorage(a,b,c,d)},oa:function(a,b,c,d){Z.scissor(a,b,c,d)},Xa:function(a,b,c,d){for(var f="",l=0;l<b;++l){var k=d?G[d+4*l>>2]:-1;f+=F(G[c+4*l>>2],0>k?void 0:k)}Z.shaderSource(W[a],f)},da:function(a,b,c){Z.stencilFunc(a,b,c)},J:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},u:function(a){Z.stencilMask(a)},ca:function(a,b,c){Z.stencilOp(a,b,c)},I:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},P:function(a,b,c,d,f,l,k,m,p){Z.texImage2D(a,b,c,d,f,l,k,m,p?Ib(m,k,d,f,p):null)},
h:function(a,b,c){Z.texParameteri(a,b,c)},r:function(a,b,c,d,f,l,k,m,p){var n=null;p&&(n=Ib(m,k,f,l,p));Z.texSubImage2D(a,b,c,d,f,l,k,m,n)},A:function(a,b){Z.uniform1i(V[a],b)},ia:function(a){Z.useProgram(S[a])},Ua:function(a,b){Z.vertexAttribDivisor(a,b)},ha:function(a,b,c,d,f,l){Z.vertexAttribPointer(a,b,c,!!d,f,l)},K:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:C,q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){Lb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Aa:function(){window.addEventListener("beforeunload",function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")})},Ia:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste","void",["string"],[a])})},o:function(){document.getElementById("_sokol_app_input_element").blur()},Z:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),
b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},_:function(){return e.Jb?e.Jb.bufferSize:0},aa:function(a,b,c){e.Db=null;e.Jb=null;"undefined"!==typeof AudioContext?(e.Db=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.Db=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):
(e.Db=null,console.log("sokol_audio.h: no WebAudio support"));return e.Db?(console.log("sokol_audio.h: sample rate ",e.Db.sampleRate),e.Jb=e.Db.createScriptProcessor(c,0,b),e.Jb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Nb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var p=a.outputBuffer.getChannelData(m),n=0;n<b;n++)p[n]=Ba[(c>>2)+(d*n+m)]},e.Jb.connect(e.Db.destination),a=function(){e.Db&&"suspended"===e.Db.state&&e.Db.resume()},document.addEventListener("click",
a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},$:function(){return e.Db?e.Db.sampleRate:0},t:function(){return performance.now()},table:la},Pb=function(){function a(a){e.asm=a.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==La&&(clearInterval(La),La=null),J&&(a=J,J=null,a()))}function b(b){a(b.instance)}function c(a){return Pa().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+
a);ja(a)})}var d={env:Ob,wasi_unstable:Ob};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ma()||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){z("wasm streaming compile failed: "+
a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Pb;var Qa=e.___wasm_call_ctors=function(){return e.asm.$a.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.ab.apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return e.asm.bb.apply(null,arguments)};e.___em_js__emsc_load_file=function(){return e.asm.cb.apply(null,arguments)};var Lb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.db.apply(null,arguments)};
e.___em_js__sapp_js_create_textfield=function(){return e.asm.eb.apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return e.asm.fb.apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return e.asm.gb.apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return e.asm.hb.apply(null,arguments)};var Mb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.ib.apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return e.asm.jb.apply(null,arguments)};
e.___em_js__sapp_js_init_clipboard=function(){return e.asm.kb.apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return e.asm.lb.apply(null,arguments)};e._main=function(){return e.asm.mb.apply(null,arguments)};var P=e._malloc=function(){return e.asm.nb.apply(null,arguments)};e._free=function(){return e.asm.ob.apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return e.asm.pb.apply(null,arguments)};var Nb=e.__saudio_emsc_pull=function(){return e.asm.qb.apply(null,arguments)};
e.___em_js__saudio_js_init=function(){return e.asm.rb.apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return e.asm.sb.apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return e.asm.tb.apply(null,arguments)};e.__sargs_add_kvp=function(){return e.asm.ub.apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return e.asm.vb.apply(null,arguments)};
var ra=e.stackSave=function(){return e.asm.wb.apply(null,arguments)},pa=e.stackAlloc=function(){return e.asm.xb.apply(null,arguments)},sa=e.stackRestore=function(){return e.asm.yb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.zb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.Ab.apply(null,arguments)};var Q=e.dynCall_iiii=function(){return e.asm.Bb.apply(null,arguments)},Kb=e.dynCall_idi=function(){return e.asm.Cb.apply(null,arguments)};e.asm=Pb;var Qb;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Rb(){Qb||Sb();Qb||(J=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,!ma)){Ea(Ga);Ea(Ha);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Tb){var b=a,d=e._main;b=b||[];var f=b.length+1,l=pa(4*(f+1));G[l>>2]=va(aa);for(var k=1;k<f;k++)G[(l>>2)+k]=va(b[k-1]);G[(l>>2)+f]=0;try{var m=d(f,l);if(!B||0!==m){if(!B&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(p){p instanceof ia||("SimulateInfiniteLoop"==p?B=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),z("exception thrown: "+b),t(1,p)))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)b=e.postRun.shift(),Ja.unshift(b);Ea(Ja)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ka();Ea(Fa);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Sb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Tb=!0;e.noInitialRun&&(Tb=!1);B=!0;Sb();
