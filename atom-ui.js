
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,ka=!1;function assert(a,b){a||x("Assertion failed: "+b)}
function la(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function C(a,b,c,d){var f={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var X=(p.length<<2)+1;q=D(X);E(p,F,q,X)}return q},array:function(p){var q=D(p.length);ma.set(p,q);return q}},h=la(a),g=[];a=0;if(d)for(var m=0;m<d.length;m++){var n=f[c[m]];n?(0===a&&(a=na()),g[m]=n(d[m])):g[m]=d[m]}c=h.apply(null,g);c=function(p){return"string"===b?G(p):"boolean"===b?!!p:p}(c);0!==a&&oa(a);return c}var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function G(a,b){return a?qa(F,a,b):""}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=D(b);E(a,ma,c,b);return c}var H,ma,F,ta,ua,I,va,J,K;
function wa(a){H=a;e.HEAP8=ma=new Int8Array(a);e.HEAP16=ta=new Int16Array(a);e.HEAP32=I=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=ua=new Uint16Array(a);e.HEAPU32=va=new Uint32Array(a);e.HEAPF32=J=new Float32Array(a);e.HEAPF64=K=new Float64Array(a)}var xa=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:xa/65536,maximum:32768});B&&(H=B.buffer);xa=H.byteLength;wa(H);var L,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=e.preRun.shift();ya.unshift(a)}var M=0,Ea=null,Fa=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);ka=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ha(){return Ga("data:application/octet-stream;base64,")}var N="atom-ui.wasm";if(!Ha()){var Ia=N;N=e.locateFile?e.locateFile(Ia,v):v+Ia}
function Ja(){try{if(z)return new Uint8Array(z);if(w)return w(N);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Ka(){return z||!ba&&!u||"function"!==typeof fetch||Ga("file://")?Promise.resolve().then(Ja):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Lc;"number"===typeof c?void 0===b.wc?L.get(c)():L.get(c)(b.wc):c(void 0===b.wc?null:b.wc)}}}var Ma=[null,[],[]],Na={},Oa=0;function Pa(){for(var a=O.length-1;0<=a;--a)Qa(a);O=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.uc)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.cd.apply(null,b.Rc)}}var O=[];function Qa(a){var b=O[a];b.target.removeEventListener(b.mc,b.Jc,b.nc);O.splice(a,1)}
function P(a){function b(d){++Oa;Ta=a;Sa();a.qc(d);Sa();--Oa}if(a.pc)a.Jc=b,a.target.addEventListener(a.mc,b,a.nc),O.push(a),Ua||(Ba.push(Pa),Ua=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].mc==a.mc&&Qa(c--)}var Ua,Ta,Va,Wa,Xa,Ya,Za,$a,ab=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?G(a):a;return ab[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function cb(a,b,c,d,f,h){Va||(Va=R(164));a={target:Q(a),uc:!0,mc:h,pc:d,qc:function(g){var m=Va,n=m>>2;I[n]=g.location;I[n+1]=g.ctrlKey;I[n+2]=g.shiftKey;I[n+3]=g.altKey;I[n+4]=g.metaKey;I[n+5]=g.repeat;I[n+6]=g.charCode;I[n+7]=g.keyCode;I[n+8]=g.which;E(g.key||"",F,m+36,32);E(g.code||"",F,m+68,32);E(g.char||"",F,m+100,32);E(g.locale||"",F,m+132,32);L.get(d)(f,m,b)&&g.preventDefault()},nc:c};P(a)}
function db(a,b,c){a>>=2;I[a]=b.screenX;I[a+1]=b.screenY;I[a+2]=b.clientX;I[a+3]=b.clientY;I[a+4]=b.ctrlKey;I[a+5]=b.shiftKey;I[a+6]=b.altKey;I[a+7]=b.metaKey;ta[2*a+16]=b.button;ta[2*a+17]=b.buttons;I[a+9]=b.movementX;I[a+10]=b.movementY;c=bb(c);I[a+11]=b.clientX-c.left;I[a+12]=b.clientY-c.top}function eb(a,b,c,d,f,h){Wa||(Wa=R(64));a=Q(a);P({target:a,uc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,mc:h,pc:d,qc:function(g){g=g||event;db(Wa,g,a);L.get(d)(f,Wa,b)&&g.preventDefault()},nc:c})}
function fb(a,b,c,d,f){Xa||(Xa=R(260));P({target:a,mc:f,pc:d,qc:function(h){h=h||event;var g=Xa,m=document.pointerLockElement||document.zc||document.Bc||document.Ac;I[g>>2]=!!m;var n=m&&m.id?m.id:"";E(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",F,g+4,128);E(n,F,g+132,128);L.get(d)(20,g,b)&&h.preventDefault()},nc:c})}function gb(a,b,c,d,f){P({target:a,mc:f,pc:d,qc:function(h){h=h||event;L.get(d)(38,0,b)&&h.preventDefault()},nc:c})}
function hb(a,b,c,d){Ya||(Ya=R(36));a=Q(a);P({target:a,mc:"resize",pc:d,qc:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Ya;I[g>>2]=f.detail;I[g+4>>2]=h.clientWidth;I[g+8>>2]=h.clientHeight;I[g+12>>2]=innerWidth;I[g+16>>2]=innerHeight;I[g+20>>2]=outerWidth;I[g+24>>2]=outerHeight;I[g+28>>2]=pageXOffset;I[g+32>>2]=pageYOffset;L.get(d)(10,g,b)&&f.preventDefault()}}},nc:c})}
function ib(a,b,c,d,f,h){Za||(Za=R(1684));a=Q(a);P({target:a,uc:"touchstart"==h||"touchend"==h,mc:h,pc:d,qc:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Nc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Pc=1;n=Za;q=n>>2;I[q+1]=g.ctrlKey;I[q+2]=g.shiftKey;I[q+3]=g.altKey;I[q+4]=g.metaKey;q+=5;var X=bb(a),nb=0;for(p in m){var A=m[p];I[q]=A.identifier;I[q+1]=A.screenX;I[q+2]=A.screenY;
I[q+3]=A.clientX;I[q+4]=A.clientY;I[q+5]=A.pageX;I[q+6]=A.pageY;I[q+7]=A.Nc;I[q+8]=A.Pc;I[q+9]=A.clientX-X.left;I[q+10]=A.clientY-X.top;q+=13;if(31<++nb)break}I[n>>2]=nb;L.get(d)(f,n,b)&&g.preventDefault()},nc:c})}function jb(a,b,c,d,f,h){a={target:Q(a),mc:h,pc:d,qc:function(g){g=g||event;L.get(d)(f,0,b)&&g.preventDefault()},nc:c};P(a)}
function kb(a,b,c,d){$a||($a=R(96));P({target:a,uc:!0,mc:"wheel",pc:d,qc:function(f){f=f||event;var h=$a;db(h,f,a);K[h+64>>3]=f.deltaX;K[h+72>>3]=f.deltaY;K[h+80>>3]=f.deltaZ;I[h+88>>2]=f.deltaMode;L.get(d)(9,h,b)&&f.preventDefault()},nc:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function pb(a){a.Yc=a.getExtension("WEBGL_multi_draw")}
var qb=1,rb=[],S=[],sb=[],tb=[],ub=[],T=[],U=[],vb=[],wb={},xb={};function V(a){yb||(yb=a)}function W(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a){a||(a=Ab);if(!a.Mc){a.Mc=!0;var b=a.vc;lb(b);mb(b);ob(b);b.Tc=b.getExtension("EXT_disjoint_timer_query");pb(b);var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var yb,Ab,Bb=["default","low-power","high-performance"];function Cb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);I[b+4*f>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else V(1281)}function Eb(a){var b=ra(a)+1,c=R(b);E(a,F,c,b);return c}
function Fb(a,b,c,d,f){a-=5120;a=1==a?F:4==a?I:6==a?J:5==a||28922==a?va:ua;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Gb=new Float32Array(288),Hb=0;288>Hb;++Hb)Z[Hb]=Gb.subarray(0,Hb+1);za.push({Lc:function(){Ib()}});
var Ob={pa:function(){return 0},eb:function(){return 0},fb:function(){},cb:function(){x()},wb:function(){console.log("fs.h: registering Module['ccall']");e.ccall=C},xb:function(a){var b=G(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var d=new Uint8Array(c.response);C("emsc_load_data","int",["string","array","number"],[b,d,d.length])};c.send()},N:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},Y:function(a,b,c){a=Q(a);if(!a)return-4;
a=bb(a);K[b>>3]=a.width;K[c>>3]=a.height;return 0},ab:function(a,b,c){F.copyWithin(a,b,b+c)},Aa:function(a,b){function c(d){L.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){a>>>=0;var b=F.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-H.byteLength+65535>>>16);wa(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},
J:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},ia:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},ga:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},ha:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},oa:function(a,b,c,d){eb(a,b,c,d,5,"mousedown");return 0},la:function(a,b,c,d){eb(a,b,c,d,33,"mouseenter");return 0},ka:function(a,b,c,d){eb(a,b,c,d,34,"mouseleave");return 0},ma:function(a,b,c,d){eb(a,b,c,d,8,"mousemove");return 0},na:function(a,b,c,d){eb(a,b,c,d,6,
"mouseup");return 0},ba:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.zc||document.body.Bc||document.body.Ac))return-1;a=Q(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},aa:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.zc||document.body.Bc||document.body.Ac))return-1;a=Q(a);if(!a)return-4;gb(a,
b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},La:function(a,b,c,d){hb(a,b,c,d);return 0},ca:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},da:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},ea:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},fa:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},$:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},_:function(a,b,c,d){jb(a,
b,c,d,32,"webglcontextrestored");return 0},ja:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},ua:function(a,b){b>>=2;b={alpha:!!I[b],depth:!!I[b+1],stencil:!!I[b+2],antialias:!!I[b+3],premultipliedAlpha:!!I[b+4],preserveDrawingBuffer:!!I[b+5],powerPreference:Bb[I[b+6]],failIfMajorPerformanceCaveat:!!I[b+7],Oc:I[b+8],Xc:I[b+9],yc:I[b+10],Kc:I[b+11],Zc:I[b+12],$c:I[b+13]};a=Q(a);if(!a||b.Kc)b=0;else if(a=a.getContext("webgl",b)){var c=W(vb),d={Wc:c,attributes:b,version:b.Oc,
vc:a};a.canvas&&(a.canvas.Qc=d);vb[c]=d;("undefined"===typeof b.yc||b.yc)&&zb(d);b=c}else b=0;return b},$a:function(a,b){a=vb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(Y);"OES_vertex_array_object"==b&&mb(Y);"WEBGL_draw_buffers"==b&&ob(Y);"WEBGL_multi_draw"==b&&pb(Y);return!!a.vc.getExtension(b)},vb:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},hb:function(a){Ab=vb[a];e.Sc=Y=Ab&&Ab.vc;return!a||Y?0:-5},ra:function(){return 0},
db:function(a,b,c,d){a=Na.Vc(a);b=Na.Uc(a,b,c);I[d>>2]=b;return 0},_a:function(){},qa:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=I[b+8*h>>2],m=I[b+(8*h+4)>>2],n=0;n<m;n++){var p=F[g+n],q=Ma[a];0===p||10===p?((1===a?ja:y)(qa(q,0)),q.length=0):q.push(p)}f+=m}I[d>>2]=f;return 0},c:function(a){Y.activeTexture(a)},K:function(a,b){Y.attachShader(S[a],U[b])},d:function(a,b){Y.bindBuffer(a,rb[b])},h:function(a,b){Y.bindFramebuffer(a,sb[b])},Ja:function(a,b){Y.bindRenderbuffer(a,tb[b])},b:function(a,
b){Y.bindTexture(a,ub[b])},T:function(a,b,c,d){Y.blendColor(a,b,c,d)},U:function(a,b){Y.blendEquationSeparate(a,b)},V:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},O:function(a,b,c,d){Y.bufferData(a,c?F.subarray(c,c+b):b,d)},t:function(a,b,c,d){Y.bufferSubData(a,b,F.subarray(d,d+c))},p:function(a){return Y.checkFramebufferStatus(a)},sb:function(a){Y.clear(a)},xa:function(a,b,c,d){Y.clearColor(a,b,c,d)},ub:function(a){Y.clearDepth(a)},tb:function(a){Y.clearStencil(a)},z:function(a,b,c,d){Y.colorMask(!!a,
!!b,!!c,!!d)},Ba:function(a){Y.compileShader(U[a])},M:function(a,b,c,d,f,h,g,m){Y.compressedTexImage2D(a,b,c,d,f,h,m?F.subarray(m,m+g):null)},Ga:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},Da:function(a){var b=W(U);U[b]=Y.createShader(a);return b},Q:function(a){Y.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=rb[d];f&&(Y.deleteBuffer(f),f.name=0,rb[d]=null)}},f:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],f=sb[d];f&&(Y.deleteFramebuffer(f),f.name=
0,sb[d]=null)}},X:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,wb[a]=null):V(1281)}},Z:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=tb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,tb[d]=null)}},y:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=ub[d];f&&(Y.deleteTexture(f),f.name=0,ub[d]=null)}},C:function(a){Y.depthFunc(a)},B:function(a){Y.depthMask(!!a)},g:function(a){Y.disable(a)},W:function(a){Y.disableVertexAttribArray(a)},
E:function(a,b,c){Y.drawArrays(a,b,c)},F:function(a,b,c,d){Y.drawElements(a,b,c,d)},j:function(a){Y.enable(a)},qb:function(a){Y.enableVertexAttribArray(a)},m:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,tb[d])},e:function(a,b,c,d,f){Y.framebufferTexture2D(a,b,c,ub[d],f)},R:function(a){Y.frontFace(a)},P:function(a,b){Cb(a,b,"createBuffer",rb)},q:function(a,b){Cb(a,b,"createFramebuffer",sb)},Ka:function(a,b){Cb(a,b,"createRenderbuffer",tb)},Ha:function(a,b){Cb(a,b,"createTexture",ub)},ya:function(a,
b){return Y.getAttribLocation(S[a],G(b))},i:function(a,b){Db(a,b)},Ea:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},I:function(a,b,c){if(c)if(a>=qb)V(1281);else{var d=wb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.xc;else if(35722==b){if(-1==d.rc){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.rc=0;b<f;++b)d.rc=Math.max(d.rc,Y.getActiveAttrib(a,
b).name.length+1)}I[c>>2]=d.rc}else if(35381==b){if(-1==d.sc)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.sc=0;b<f;++b)d.sc=Math.max(d.sc,Y.getActiveUniformBlockName(a,b).length+1);I[c>>2]=d.sc}else I[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},za:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},G:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),I[c>>2]=a?a.length+1:0):35720==
b?(a=Y.getShaderSource(U[a]),I[c>>2]=a?a.length+1:0):I[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Qa:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Eb(b);break;case 7938:b=Eb("OpenGL ES 2.0 ("+Y.getParameter(7938)+")");break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:return V(1280),0}return xb[a]=b},s:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=wb[a]&&wb[a].Ic[b])&&0<=c&&c<a[0]?a[1]+c:-1},Fa:function(a){Y.linkProgram(S[a]);var b=S[a];a=wb[a]={Ic:{},xc:0,rc:-1,sc:-1};for(var c=a.Ic,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.xc=
Math.max(a.xc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=m}}},S:function(a,b){Y.polygonOffset(a,b)},Ia:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},r:function(a,b,c,d){Y.scissor(a,b,c,d)},Ca:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?I[d+4*h>>2]:-1;f+=G(I[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},Na:function(a,b,
c){Y.stencilFunc(a,b,c)},wa:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},A:function(a){Y.stencilMask(a)},Ma:function(a,b,c){Y.stencilOp(a,b,c)},va:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},L:function(a,b,c,d,f,h,g,m,n){Y.texImage2D(a,b,c,d,f,h,g,m,n?Fb(m,g,d,f,n):null)},k:function(a,b,c){Y.texParameteri(a,b,c)},o:function(a,b,c,d,f,h,g,m,n){var p=null;n&&(p=Fb(m,g,f,h,n));Y.texSubImage2D(a,b,c,d,f,h,g,m,p)},pb:function(a,b,c){if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=J[c+4*f>>2];else d=
J.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)},H:function(a,b){Y.uniform1i(T[a],b)},ob:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=J[c+4*f>>2],d[f+1]=J[c+(4*f+4)>>2];else d=J.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)},nb:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=J[c+4*f>>2],d[f+1]=J[c+(4*f+4)>>2],d[f+2]=J[c+(4*f+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)},mb:function(a,b,c){if(72>=b){var d=Z[4*b-1],f=J;c>>=2;for(var h=0;h<4*b;h+=4){var g=
c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=J.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)},lb:function(a,b,c,d){if(18>=b){var f=Z[16*b-1],h=J;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=J.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,
f)},u:function(a){Y.useProgram(S[a])},gb:function(a,b){Y.vertexAttribDivisor(a,b)},rb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},l:function(a,b,c,d){Y.viewport(a,b,c,d)},a:B,Za:function(){e.Cc=function(a){0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Cc)},Xa:function(){e.Hc=function(a){a=a.clipboardData.getData("text");C("_sapp_emsc_onpaste","void",["string"],[a])};window.addEventListener("paste",e.Hc)},Wa:function(a){e.ad=[];a=G(a);a=document.getElementById(a);
e.Dc=function(b){b.stopPropagation();b.preventDefault()};e.Ec=function(b){b.stopPropagation();b.preventDefault()};e.Fc=function(b){b.stopPropagation();b.preventDefault()};e.Gc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.bd=c;Kb(c.length);var d;for(d=0;d<c.length;d++)C("_sapp_emsc_drop","void",["number","string"],[d,c[d].name]);Lb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Dc,!1);a.addEventListener("dragleave",e.Ec,!1);a.addEventListener("dragover",e.Fc,
!1);a.addEventListener("drop",e.Gc,!1)},x:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},w:function(){document.getElementById("_sokol_app_input_element").focus()},Ta:function(a){a=G(a);e.tc=document.getElementById(a);e.tc||console.log("sokol_app.h: invalid target:"+a);e.tc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Va:function(){window.removeEventListener("beforeunload",e.Cc)},Ua:function(){window.removeEventListener("paste",e.Hc)},Sa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Dc);a.removeEventListener("dragleave",e.Ec);a.removeEventListener("dragover",e.Fc);a.removeEventListener("drop",e.Gc)},D:function(){e.tc&&e.tc.requestPointerLock&&e.tc.requestPointerLock()},v:function(){document.getElementById("_sokol_app_input_element").blur()},Ra:function(a){a=G(a);var b=
document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Ya:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())C("_sargs_add_kvp","void",
["string","string"],[b.value[0],b.value[1]])},ib:function(){return e.oc?e.oc.bufferSize:0},kb:function(a,b,c){e.lc=null;e.oc=null;"undefined"!==typeof AudioContext?e.lc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.lc=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.lc=null,console.log("sokol_audio.h: no WebAudio support"));return e.lc?(console.log("sokol_audio.h: sample rate ",e.lc.sampleRate),e.oc=e.lc.createScriptProcessor(c,
0,b),e.oc.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Nb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=J[(h>>2)+(g*p+m)]},e.oc.connect(e.lc.destination),a=function(){e.lc&&"suspended"===e.lc.state&&e.lc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},jb:function(){return e.lc?e.lc.sampleRate:0},
ta:function(){null!==e.lc&&(e.oc&&e.oc.disconnect(),e.lc.close(),e.lc=null,e.oc=null)},sa:function(){return navigator.userAgent.includes("Macintosh")?1:0},n:function(){return performance.now()}};
(function(){function a(f){e.asm=f.exports;L=e.asm.yb;M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==Ea&&(clearInterval(Ea),Ea=null),Fa&&(f=Fa,Fa=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Ob};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||Ga("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();var Ib=e.___wasm_call_ctors=function(){return(Ib=e.___wasm_call_ctors=e.asm.zb).apply(null,arguments)};
e._emsc_load_data=function(){return(e._emsc_load_data=e.asm.Ab).apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return(e.___em_js__emsc_fs_init=e.asm.Bb).apply(null,arguments)};e.___em_js__emsc_load_file=function(){return(e.___em_js__emsc_load_file=e.asm.Cb).apply(null,arguments)};var Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Db).apply(null,arguments)};
e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Eb).apply(null,arguments)};var Jb=e.__sapp_html5_get_ask_leave_site=function(){return(Jb=e.__sapp_html5_get_ask_leave_site=e.asm.Fb).apply(null,arguments)},Kb=e.__sapp_emsc_begin_drop=function(){return(Kb=e.__sapp_emsc_begin_drop=e.asm.Gb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Hb).apply(null,arguments)};
var Lb=e.__sapp_emsc_end_drop=function(){return(Lb=e.__sapp_emsc_end_drop=e.asm.Ib).apply(null,arguments)};e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Jb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Kb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Lb).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.Mb).apply(null,arguments)};e.___em_js__sapp_js_add_beforeunload_listener=function(){return(e.___em_js__sapp_js_add_beforeunload_listener=e.asm.Nb).apply(null,arguments)};e.___em_js__sapp_js_remove_beforeunload_listener=function(){return(e.___em_js__sapp_js_remove_beforeunload_listener=e.asm.Ob).apply(null,arguments)};
e.___em_js__sapp_js_add_clipboard_listener=function(){return(e.___em_js__sapp_js_add_clipboard_listener=e.asm.Pb).apply(null,arguments)};e.___em_js__sapp_js_remove_clipboard_listener=function(){return(e.___em_js__sapp_js_remove_clipboard_listener=e.asm.Qb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Rb).apply(null,arguments)};
e.___em_js__sapp_js_add_dragndrop_listeners=function(){return(e.___em_js__sapp_js_add_dragndrop_listeners=e.asm.Sb).apply(null,arguments)};e.___em_js__sapp_js_dropped_file_size=function(){return(e.___em_js__sapp_js_dropped_file_size=e.asm.Tb).apply(null,arguments)};e.___em_js__sapp_js_fetch_dropped_file=function(){return(e.___em_js__sapp_js_fetch_dropped_file=e.asm.Ub).apply(null,arguments)};
e.___em_js__sapp_js_remove_dragndrop_listeners=function(){return(e.___em_js__sapp_js_remove_dragndrop_listeners=e.asm.Vb).apply(null,arguments)};e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.Wb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.Xb).apply(null,arguments)};
e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm.Yb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Zb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm._b).apply(null,arguments)};var Nb=e.__saudio_emsc_pull=function(){return(Nb=e.__saudio_emsc_pull=e.asm.$b).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.ac).apply(null,arguments)};
e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.bc).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.cc).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.dc).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.ec).apply(null,arguments)};
e.___em_js__sargs_js_parse_url=function(){return(e.___em_js__sargs_js_parse_url=e.asm.fc).apply(null,arguments)};var R=e._malloc=function(){return(R=e._malloc=e.asm.gc).apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.hc).apply(null,arguments)};
var na=e.stackSave=function(){return(na=e.stackSave=e.asm.ic).apply(null,arguments)},oa=e.stackRestore=function(){return(oa=e.stackRestore=e.asm.jc).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.kc).apply(null,arguments)},Pb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Fa=function Qb(){Pb||Rb();Pb||(Fa=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,e.calledRun=!0,!ka)){La(za);La(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Sb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=D(4*(f+1));I[h>>2]=sa(aa);for(var g=1;g<f;g++)I[(h>>2)+g]=sa(c[g-1]);I[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);ka=!0}t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ca.unshift(c);La(Ca)}}a=a||r;if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();La(ya);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Rb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Sb=!0;e.noInitialRun&&(Sb=!1);noExitRuntime=!0;Rb();
