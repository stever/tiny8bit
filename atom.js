
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in e)e.hasOwnProperty(k)&&(h[k]=e[k]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var w="",ea,x,fa,ha;
if(ca)w=u?require("path").dirname(w)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(e[k]=h[k]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&y("no native wasm support detected");var A,la=new WebAssembly.Table({initial:21,maximum:21,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c,d){var f={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var T=(p.length<<2)+1;q=B(T);C(p,D,q,T)}return q},array:function(p){var q=B(p.length);pa.set(p,q);return q}},l=na(a),g=[];a=0;if(d)for(var m=0;m<d.length;m++){var n=f[c[m]];n?(0===a&&(a=qa()),g[m]=n(d[m])):g[m]=d[m]}c=l.apply(null,g);c=function(p){return"string"===b?E(p):"boolean"===b?!!p:p}(c);0!==a&&ra(a);return c}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var l=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|l);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|l<<6|g:(f&7)<<18|l<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var l=0;l<a.length;++l){var g=a.charCodeAt(l);if(55296<=g&&57343>=g){var m=a.charCodeAt(++l);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,wa,G,xa,ya,H;
function za(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=ya=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:Aa/65536,maximum:32768});A&&(F=A.buffer);Aa=F.byteLength;za(F);G[1371768]=10730112;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Zb;"number"===typeof c?void 0===b.Qb?e.dynCall_v(c):e.dynCall_vi(c,b.Qb):c(void 0===b.Qb?null:b.Qb)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var I=0,Ia=null,J=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(a){var b=K;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var K="atom.wasm";if(!Ka()){var La=K;K=e.locateFile?e.locateFile(La,w):w+La}function Ma(){try{if(z)return new Uint8Array(z);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Na(){return z||!ba&&!u||"function"!==typeof fetch||Ja("file://")?new Promise(function(a){a(Ma())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Da.push({Zb:function(){Oa()}});var Pa=0,Qa=0,L=0,Ra=0,Sa=0,Ta=null,Ua=null,Va=!1;function Wa(){for(var a=M.length-1;0<=a;--a)Xa(a);M=[];Ya=[]}var Ya=[];
function Za(){if($a&&ab.Ob)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.lc.apply(null,b.dc)}}var $a=0,ab=null,M=[];function Xa(a){var b=M[a];b.target.removeEventListener(b.Hb,b.Xb,b.Ib);M.splice(a,1)}function N(a){function b(d){++$a;ab=a;Za();a.Kb(d);Za();--$a}if(a.Jb)a.Xb=b,a.target.addEventListener(a.Hb,b,a.Ib),M.push(a),Va||(Fa.push(Wa),Va=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Hb==a.Hb&&Xa(c--)}
var bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return bb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function db(a,b,c,d,f,l){Pa||(Pa=P(164));a={target:O(a),Ob:!0,Hb:l,Jb:d,Kb:function(g){g=g||event;var m=Pa;C(g.key?g.key:"",D,m+0,32);C(g.code?g.code:"",D,m+32,32);G[m+64>>2]=g.location;G[m+68>>2]=g.ctrlKey;G[m+72>>2]=g.shiftKey;G[m+76>>2]=g.altKey;G[m+80>>2]=g.metaKey;G[m+84>>2]=g.repeat;C(g.locale?g.locale:"",D,m+88,32);C(g.char?g.char:"",D,m+120,32);G[m+152>>2]=g.charCode;G[m+156>>2]=g.keyCode;G[m+160>>2]=g.which;Q(d,f,m,b)&&g.preventDefault()},Ib:c};N(a)}
function eb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ua;G[a+36>>2]=b.movementX||b.screenX-Ta;G[a+40>>2]=d;c=cb(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ta=b.screenX,Ua=b.screenY)}
function R(a,b,c,d,f,l){Qa||(Qa=P(64));a=O(a);N({target:a,Ob:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,Hb:l,Jb:d,Kb:function(g){g=g||event;eb(Qa,g,a);Q(d,f,Qa,b)&&g.preventDefault()},Ib:c})}
function fb(a,b,c,d){Ra||(Ra=P(36));a=O(a);N({target:a,Hb:"resize",Jb:d,Kb:function(f){f=f||event;if(f.target==a){var l=Ra,g=document.body;G[l>>2]=f.detail;G[l+4>>2]=g.clientWidth;G[l+8>>2]=g.clientHeight;G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=pageXOffset;G[l+32>>2]=pageYOffset;Q(d,10,l,b)&&f.preventDefault()}},Ib:c})}
function gb(a,b,c,d,f,l){Sa||(Sa=P(1684));a=O(a);N({target:a,Ob:"touchstart"==l||"touchend"==l,Hb:l,Jb:d,Kb:function(g){g=g||event;for(var m={},n=0;n<g.touches.length;++n){var p=g.touches[n];p.Sb=!1;m[p.identifier]=p}for(n=0;n<g.changedTouches.length;++n)p=g.changedTouches[n],m[p.identifier]=p,p.Sb=!0;for(n=0;n<g.targetTouches.length;++n)p=g.targetTouches[n],m[p.identifier].bc=!0;var q=p=Sa;G[q+4>>2]=g.ctrlKey;G[q+8>>2]=g.shiftKey;G[q+12>>2]=g.altKey;G[q+16>>2]=g.metaKey;q+=20;var T=cb(a),kb=0;for(n in m){var v=
m[n];G[q>>2]=v.identifier;G[q+4>>2]=v.screenX;G[q+8>>2]=v.screenY;G[q+12>>2]=v.clientX;G[q+16>>2]=v.clientY;G[q+20>>2]=v.pageX;G[q+24>>2]=v.pageY;G[q+28>>2]=v.Sb;G[q+32>>2]=v.bc;G[q+36>>2]=v.clientX-T.left;G[q+40>>2]=v.clientY-T.top;q+=52;if(32<=++kb)break}G[p>>2]=kb;Q(d,f,p,b)&&g.preventDefault()},Ib:c})}function hb(a,b,c,d,f,l){a={target:O(a),Hb:l,Jb:d,Kb:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Ib:c};N(a)}
function ib(a,b,c,d,f){function l(m){m=m||event;eb(L,m,a);H[L+64>>3]=m.wheelDeltaX||0;H[L+72>>3]=-(m.wheelDeltaY||m.wheelDelta);H[L+80>>3]=0;G[L+88>>2]=0;Q(d,9,L,b)&&m.preventDefault()}function g(m){m=m||event;var n=L;eb(n,m,a);H[n+64>>3]=m.deltaX;H[n+72>>3]=m.deltaY;H[n+80>>3]=m.deltaZ;G[n+88>>2]=m.deltaMode;Q(d,9,n,b)&&m.preventDefault()}L||(L=P(96));N({target:a,Ob:!0,Hb:f,Jb:d,Kb:"wheel"==f?g:l,Ib:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,l){b.drawArraysInstancedANGLE(c,d,f,l)},a.drawElementsInstanced=function(c,d,f,l,g){b.drawElementsInstancedANGLE(c,d,f,l,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}var nb=1,ob=0,pb=[],S=[],qb=[],U=[],V=[],rb=[],W=[],sb=[],tb=null,ub={},vb={};
function X(a){ob||(ob=a)}function Y(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}
function wb(a){a||(a=tb);if(!a.$b){a.$b=!0;var b=a.Pb;jb(b);lb(b);mb(b);b.fc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var xb,yb,zb=["default","low-power","high-performance"];function Ab(a,b,c,d){for(var f=0;f<a;f++){var l=Z[c](),g=l&&Y(d);l?(l.name=g,d[g]=l):X(1282);G[b+4*f>>2]=g}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){X(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:X(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else X(1281)}function Cb(a){var b=ta(a)+1,c=P(b);C(a,D,c,b);return c}
function Db(a,b,c,d,f){a-=5120;a=1==a?D:4==a?G:6==a?ya:5==a||28922==a?xa:wa;var l=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>l,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<l)+4-1&-4)>>l)}for(var Z,Eb=0;256>Eb;Eb++);for(Eb=0;256>Eb;Eb++);
var Jb={$a:function(){console.log("fs.h: registering Module['ccall']");e.ccall=oa},ab:function(a){var b=E(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var d=new Uint8Array(c.response);oa("emsc_load_data","int",["string","array","number"],[b,d,d.length])};c.send()},L:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},V:function(a,b,c){a=O(a);if(!a)return-4;a=cb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Va:function(a,b,c){D.copyWithin(a,
b,b+c)},xa:function(a,b){function c(d){Fb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);za(A.buffer);var f=1;break a}catch(l){}f=void 0}if(f)return!0}return!1},G:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},da:function(a,
b,c,d){db(a,b,c,d,2,"keydown");return 0},ba:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ca:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ga:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},fa:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},ha:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ia:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Ka:function(a,b,c,d){fb(a,b,c,d);return 0},Z:function(a,b,c,d){gb(a,b,
c,d,25,"touchcancel");return 0},_:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},$:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},aa:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},Y:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},X:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},ea:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ib(a,b,c,d,"mousewheel"),0):-1},ma:function(a,
b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=zb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.ac=G[b+8];c.ic=G[b+9];c.Tb=G[b+10];c.Yb=G[b+11];c.jc=G[b+12];c.kc=G[b+13];if(a=O(a))if(c.Yb)c=-1;else if(a=a.getContext("webgl",c)){b=Y(sb);var d={hc:b,attributes:c,version:c.ac,Pb:a};a.canvas&&(a.canvas.cc=d);sb[b]=d;("undefined"===typeof c.Tb||c.Tb)&&wb(d);c=b}else c=0;else c=
-4;return c},Ta:function(a,b){a=sb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(Z);"OES_vertex_array_object"==b&&lb(Z);"WEBGL_draw_buffers"==b&&mb(Z);return!!a.Pb.getExtension(b)},ua:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},Ua:function(a){tb=sb[a];e.ec=Z=tb&&tb.Pb;return!a||Z?0:-5},g:function(a){Z.activeTexture(a)},I:function(a,b){Z.attachShader(S[a],W[b])},e:function(a,b){Z.bindBuffer(a,pb[b])},f:function(a,b){Z.bindFramebuffer(a,
qb[b])},Ia:function(a,b){Z.bindRenderbuffer(a,U[b])},a:function(a,b){Z.bindTexture(a,V[b])},S:function(a,b,c,d){Z.blendColor(a,b,c,d)},T:function(a,b){Z.blendEquationSeparate(a,b)},U:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},N:function(a,b,c,d){Z.bufferData(a,c?D.subarray(c,c+b):b,d)},M:function(a,b,c,d){Z.bufferSubData(a,b,D.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},qa:function(a){Z.clear(a)},ta:function(a,b,c,d){Z.clearColor(a,b,c,d)},sa:function(a){Z.clearDepth(a)},
ra:function(a){Z.clearStencil(a)},v:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){Z.compileShader(W[a])},K:function(a,b,c,d,f,l,g,m){Z.compressedTexImage2D(a,b,c,d,f,l,m?D.subarray(m,m+g):null)},Fa:function(){var a=Y(S),b=Z.createProgram();b.name=a;S[a]=b;return a},Ca:function(a){var b=Y(W);W[b]=Z.createShader(a);return b},P:function(a){Z.cullFace(a)},wa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=pb[d];f&&(Z.deleteBuffer(f),f.name=0,pb[d]=null,d==xb&&(xb=0),d==yb&&(yb=
0))}},b:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=qb[d];f&&(Z.deleteFramebuffer(f),f.name=0,qb[d]=null)}},F:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,ub[a]=null):X(1281)}},o:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=U[d];f&&(Z.deleteRenderbuffer(f),f.name=0,U[d]=null)}},u:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},D:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=V[d];f&&(Z.deleteTexture(f),f.name=0,V[d]=null)}},
y:function(a){Z.depthFunc(a)},x:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},W:function(a){Z.disableVertexAttribArray(a)},ka:function(a,b,c){Z.drawArrays(a,b,c)},la:function(a,b,c,d){Z.drawElements(a,b,c,d)},h:function(a){Z.enable(a)},na:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,U[d])},c:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,V[d],f)},Q:function(a){Z.frontFace(a)},O:function(a,b){Ab(a,b,"createBuffer",pb)},n:function(a,b){Ab(a,
b,"createFramebuffer",qb)},Ja:function(a,b){Ab(a,b,"createRenderbuffer",U)},Ga:function(a,b){Ab(a,b,"createTexture",V)},ya:function(a,b){return Z.getAttribLocation(S[a],E(b))},j:function(a,b){Bb(a,b)},Da:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},H:function(a,b,c){if(c)if(a>=nb)X(1281);else{var d=ub[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Rb;
else if(35722==b){if(-1==d.Mb){a=S[a];var f=Z.getProgramParameter(a,35721);for(b=d.Mb=0;b<f;++b)d.Mb=Math.max(d.Mb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Mb}else if(35381==b){if(-1==d.Nb)for(a=S[a],f=Z.getProgramParameter(a,35382),b=d.Nb=0;b<f;++b)d.Nb=Math.max(d.Nb,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Nb}else G[c>>2]=Z.getProgramParameter(S[a],b);else X(1282)}else X(1281)},za:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):
0;c&&(G[c>>2]=b)},E:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},Na:function(a){if(vb[a])return vb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Cb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Cb(b);break;
case 7938:b=Cb("OpenGL ES 2.0 ("+Z.getParameter(7938)+")");break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Cb(b);break;default:return X(1280),0}return vb[a]=b},p:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=ub[a]&&ub[a].Wb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ea:function(a){Z.linkProgram(S[a]);
var b=S[a];a=ub[a]={Wb:{},Rb:0,Mb:-1,Nb:-1};for(var c=a.Wb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var l=Z.getActiveUniform(b,f),g=l.name;a.Rb=Math.max(a.Rb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Z.getUniformLocation(b,g);if(m){var n=Y(rb);c[g]=[l.size,n];rb[n]=m;for(var p=1;p<l.size;++p)m=Z.getUniformLocation(b,g+"["+p+"]"),n=Y(rb),rb[n]=m}}},R:function(a,b){Z.polygonOffset(a,b)},Ha:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},va:function(a,b,c,d){Z.scissor(a,
b,c,d)},Ba:function(a,b,c,d){for(var f="",l=0;l<b;++l){var g=d?G[d+4*l>>2]:-1;f+=E(G[c+4*l>>2],0>g?void 0:g)}Z.shaderSource(W[a],f)},Ma:function(a,b,c){Z.stencilFunc(a,b,c)},C:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},w:function(a){Z.stencilMask(a)},La:function(a,b,c){Z.stencilOp(a,b,c)},B:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},J:function(a,b,c,d,f,l,g,m,n){Z.texImage2D(a,b,c,d,f,l,g,m,n?Db(m,g,d,f,n):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},l:function(a,b,c,d,f,l,g,m,n){var p=
null;n&&(p=Db(m,g,f,l,n));Z.texSubImage2D(a,b,c,d,f,l,g,m,p)},A:function(a,b){Z.uniform1i(rb[a],b)},pa:function(a){Z.useProgram(S[a])},Xa:function(a,b){Z.vertexAttribDivisor(a,b)},oa:function(a,b,c,d,f,l){Z.vertexAttribPointer(a,b,c,!!d,f,l)},t:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:A,Sa:function(){e.Ub=function(a){0!=Gb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Ub)},Ra:function(){e.Vb=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",
"void",["string"],[a])};window.addEventListener("paste",e.Vb)},s:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Hb()});document.body.append(a)},r:function(){document.getElementById("_sokol_app_input_element").focus()},q:function(){document.getElementById("_sokol_app_input_element").blur()},Pa:function(){window.removeEventListener("beforeunload",e.Ub)},Oa:function(){window.removeEventListener("paste",
e.Vb)},Qa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},Ya:function(){return e.Lb?e.Lb.bufferSize:0},_a:function(a,b,c){e.Gb=null;e.Lb=null;"undefined"!==typeof AudioContext?(e.Gb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.Gb=new webkitAudioContext({sampleRate:a,
latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.Gb=null,console.log("sokol_audio.h: no WebAudio support"));return e.Gb?(console.log("sokol_audio.h: sample rate ",e.Gb.sampleRate),e.Lb=e.Gb.createScriptProcessor(c,0,b),e.Lb.onaudioprocess=function(d){var f=d.outputBuffer.length,l=Ib(f);if(l)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=ya[(l>>2)+(g*p+m)]},e.Lb.connect(e.Gb.destination),a=function(){e.Gb&&
"suspended"===e.Gb.state&&e.Gb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},Za:function(){return e.Gb?e.Gb.sampleRate:0},z:function(){return performance.now()},table:la},Kb=function(){function a(f){e.asm=f.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),J&&(f=J,J=null,f()))}function b(f){a(f.instance)}function c(f){return Na().then(function(l){return WebAssembly.instantiate(l,
d)}).then(f,function(l){y("failed to asynchronously prepare wasm: "+l);ja(l)})}var d={a:Jb};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,
d).then(b,function(l){y("wasm streaming compile failed: "+l);y("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Kb;var Oa=e.___wasm_call_ctors=function(){return(Oa=e.___wasm_call_ctors=e.asm.bb).apply(null,arguments)};e._emsc_load_data=function(){return(e._emsc_load_data=e.asm.cb).apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return(e.___em_js__emsc_fs_init=e.asm.db).apply(null,arguments)};
e.___em_js__emsc_load_file=function(){return(e.___em_js__emsc_load_file=e.asm.eb).apply(null,arguments)};var Hb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Hb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.fb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.gb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.hb).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.ib).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.jb).apply(null,arguments)};var Gb=e.__sapp_html5_get_ask_leave_site=function(){return(Gb=e.__sapp_html5_get_ask_leave_site=e.asm.kb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.lb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.mb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.nb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.ob).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.pb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.qb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.rb).apply(null,arguments)};var Ib=e.__saudio_emsc_pull=function(){return(Ib=e.__saudio_emsc_pull=e.asm.sb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.tb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.ub).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.vb).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.wb).apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return(e.___em_js__sargs_js_parse_url=e.asm.xb).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.yb).apply(null,arguments)},qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.zb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.Ab).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Bb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Cb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Db).apply(null,arguments)};
var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.Eb).apply(null,arguments)},Fb=e.dynCall_idi=function(){return(Fb=e.dynCall_idi=e.asm.Fb).apply(null,arguments)};e.asm=Kb;var Lb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Mb(){Lb||Nb();Lb||(J=Mb)};
function Nb(a){function b(){if(!Lb&&(Lb=!0,e.calledRun=!0,!ma)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ob){var c=a,d=e._main;c=c||[];var f=c.length+1,l=B(4*(f+1));G[l>>2]=ua(aa);for(var g=1;g<f;g++)G[(l>>2)+g]=ua(c[g-1]);G[(l>>2)+f]=0;try{var m=d(f,l);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ga.unshift(c);Ba(Ga)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Nb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Ob=!0;e.noInitialRun&&(Ob=!1);noExitRuntime=!0;Nb();
