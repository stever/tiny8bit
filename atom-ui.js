
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,u,v,fs,w,ha;
if(ea)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=(a,b,c)=>{ha();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof
ia))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ia||x("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ja=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1;
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=z(r);A(n,B,p,r)}return p},array:function(n){var p=z(n.length);oa.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function C(a,b){return a?sa(B,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var ua,oa,B,va,wa,D,E,F,G;function xa(){var a=la.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=D=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=E=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}
var ya,za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=f.preRun.shift();za.unshift(a)}var H=0,Fa=null,I=null;function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ga(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="atom-ui.wasm";if(!Ga()){var Ha=J;J=f.locateFile?f.locateFile(Ha,q):q+Ha}
function Ia(){var a=J;try{if(a==J&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Ja(){if(!y&&(da||l)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ia()});if(u)return new Promise(function(a,b){u(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ia()})}function Ka(a){for(;0<a.length;)a.shift()(f)}var La=[];
function K(a){var b=La[a];b||(a>=La.length&&(La.length=a+1),La[a]=b=ya.get(a));return b}var Ma=0;function Na(){for(var a=L.length-1;0<=a;--a)Oa(a);L=[];Pa=[]}var Pa=[];function Qa(){if(Ma&&Ra.oc)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Xc.apply(null,b.Oc)}}var L=[];function Oa(a){var b=L[a];b.target.removeEventListener(b.fc,b.Jc,b.hc);L.splice(a,1)}
function M(a){function b(d){++Ma;Ra=a;Qa();a.jc(d);Qa();--Ma}if(a.ic)a.Jc=b,a.target.addEventListener(a.fc,b,a.hc),L.push(a),Sa||(Ca.push(Na),Sa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].fc==a.fc&&Oa(c--)}function Ta(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Sa,Ra,Ua,Va,Wa,Xa,Ya,Za,$a,ab=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function N(a){a=2<a?C(a):a;return ab[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var cb;cb=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();function db(a,b,c,d,e,h){Ua||(Ua=O(256));a={target:N(a),fc:h,ic:d,jc:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ua;A(Ta(g.target),B,n+0,128);A(m,B,n+128,128);K(d)(e,n,b)&&g.preventDefault()},hc:c};M(a)}
function eb(a,b,c,d,e,h){Va||(Va=O(176));a={target:N(a),oc:!0,fc:h,ic:d,jc:function(g){var m=Va;G[m>>3]=g.timeStamp;var n=m>>2;D[n+2]=g.location;D[n+3]=g.ctrlKey;D[n+4]=g.shiftKey;D[n+5]=g.altKey;D[n+6]=g.metaKey;D[n+7]=g.repeat;D[n+8]=g.charCode;D[n+9]=g.keyCode;D[n+10]=g.which;A(g.key||"",B,m+44,32);A(g.code||"",B,m+76,32);A(g.char||"",B,m+108,32);A(g.locale||"",B,m+140,32);K(d)(e,m,b)&&g.preventDefault()},hc:c};M(a)}
function fb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=bb(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Wa||(Wa=O(72));a=N(a);M({target:a,oc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,fc:h,ic:d,jc:function(g){g=g||event;fb(Wa,g,a);K(d)(e,Wa,b)&&g.preventDefault()},hc:c})}function gb(a,b,c,d,e){Xa||(Xa=O(260));M({target:a,fc:e,ic:d,jc:function(h){h=h||event;var g=Xa,m=document.pointerLockElement||document.mc||document.xc||document.wc;D[g>>2]=!!m;var n=m&&m.id?m.id:"";A(Ta(m),B,g+4,128);A(n,B,g+132,128);K(d)(20,g,b)&&h.preventDefault()},hc:c})}
function hb(a,b,c,d,e){M({target:a,fc:e,ic:d,jc:function(h){h=h||event;K(d)(38,0,b)&&h.preventDefault()},hc:c})}
function ib(a,b,c,d){Ya||(Ya=O(36));a=N(a);M({target:a,fc:"resize",ic:d,jc:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Ya;D[g>>2]=e.detail;D[g+4>>2]=h.clientWidth;D[g+8>>2]=h.clientHeight;D[g+12>>2]=innerWidth;D[g+16>>2]=innerHeight;D[g+20>>2]=outerWidth;D[g+24>>2]=outerHeight;D[g+28>>2]=pageXOffset;D[g+32>>2]=pageYOffset;K(d)(10,g,b)&&e.preventDefault()}}},hc:c})}
function jb(a,b,c,d,e,h){Za||(Za=O(1696));a=N(a);M({target:a,oc:"touchstart"==h||"touchend"==h,fc:h,ic:d,jc:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.yc=m.zc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.yc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].zc=1;p=Za;G[p>>3]=g.timeStamp;var t=p>>2;D[t+3]=g.ctrlKey;D[t+4]=g.shiftKey;D[t+5]=g.altKey;D[t+6]=g.metaKey;t+=7;var ob=bb(a),pb=0;for(r in n)if(m=
n[r],D[t]=m.identifier,D[t+1]=m.screenX,D[t+2]=m.screenY,D[t+3]=m.clientX,D[t+4]=m.clientY,D[t+5]=m.pageX,D[t+6]=m.pageY,D[t+7]=m.yc,D[t+8]=m.zc,D[t+9]=m.clientX-ob.left,D[t+10]=m.clientY-ob.top,t+=13,31<++pb)break;D[p+8>>2]=pb;K(d)(e,p,b)&&g.preventDefault()},hc:c})}function kb(a,b,c,d,e,h){a={target:N(a),fc:h,ic:d,jc:function(g){g=g||event;K(d)(e,0,b)&&g.preventDefault()},hc:c};M(a)}
function lb(a,b,c,d){$a||($a=O(104));M({target:a,oc:!0,fc:"wheel",ic:d,jc:function(e){e=e||event;var h=$a;fb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;D[h+96>>2]=e.deltaMode;K(d)(9,h,b)&&e.preventDefault()},hc:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function rb(a){a.Tc=a.getExtension("WEBGL_multi_draw")}
var sb=1,tb=[],Q=[],ub=[],R=[],S=[],T=[],vb=[],wb={};function U(a){xb||(xb=a)}function yb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}function zb(a,b){a.mc||(a.mc=a.getContext,a.getContext=function(d,e){e=a.mc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(vb),d={Rc:c,attributes:b,version:b.Mc,sc:a};a.canvas&&(a.canvas.Nc=d);vb[c]=d;("undefined"==typeof b.vc||b.vc)&&Bb(d);return c}
function Bb(a){a||(a=Cb);if(!a.Lc){a.Lc=!0;var b=a.sc;mb(b);nb(b);qb(b);b.Qc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var xb,Cb,Db=["default","low-power","high-performance"],Eb=[null,[],[]];function Fb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&yb(d);h?(h.name=g,d[g]=h):U(1282);D[b+4*e>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else U(1281)}function Hb(a){var b=ta(a)+1,c=O(b);A(a,B,c,b);return c}
function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Jb(a,b,c,d,e){a-=5120;a=1==a?B:4==a?D:6==a?F:5==a||28922==a?E:wa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function W(a){var b=V.Ic;if(b){var c=b.nc[a];"number"==typeof c&&(b.nc[a]=c=V.getUniformLocation(b,b.Gc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var X=[],Y=[],V,Kb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Kb.subarray(0,Z+1);var Lb=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Lb.subarray(0,Z+1);
var Wb={ka:function(){return 0},ib:function(){return 0},jb:function(){},cb:function(){ka("")},G:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},N:function(a,b,c){a=N(a);if(!a)return-4;a=bb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},D:cb,eb:function(a,b,c){B.copyWithin(a,b,b+c)},Fb:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},db:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{la.grow(e-ua.byteLength+65535>>>16);xa();var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},U:function(a,b,c,d){db(a,b,c,d,12,"blur");return 0},sa:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){db(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},
ba:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.mc||document.body.xc||document.body.wc))return-1;a=N(a);if(!a)return-4;
gb(a,b,c,d,"pointerlockchange");gb(a,b,c,d,"mozpointerlockchange");gb(a,b,c,d,"webkitpointerlockchange");gb(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.mc||document.body.xc||document.body.wc))return-1;a=N(a);if(!a)return-4;hb(a,b,c,d,"pointerlockerror");hb(a,b,c,d,"mozpointerlockerror");hb(a,b,c,d,"webkitpointerlockerror");hb(a,b,c,d,"mspointerlockerror");return 0},Fa:function(a,b,c,d){ib(a,b,c,d);return 0},Y:function(a,
b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){jb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){jb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},T:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},S:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=N(a);return"undefined"!=typeof a.onwheel?(lb(a,b,c,d),0):-1},oa:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+
2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:Db[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],Mc:D[b+8],Sc:D[b+9],vc:D[b+10],Kc:D[b+11],Uc:D[b+12],Vc:D[b+13]};a=N(a);return!a||b.Kc?0:zb(a,b)},ab:function(a,b){a=vb[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(V);"OES_vertex_array_object"==b&&nb(V);"WEBGL_draw_buffers"==b&&qb(V);"WEBGL_multi_draw"==b&&rb(V);return!!a.sc.getExtension(b)},wb:function(a){a>>=2;for(var b=
0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},fb:function(a){Cb=vb[a];f.Pc=V=Cb&&Cb.sc;return!a||V?0:-5},ja:function(){return 52},hb:function(){return 52},bb:function(){return 70},gb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=E[b>>2],m=E[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=B[g+n],r=Eb[a];0===p||10===p?((1===a?ja:x)(sa(r,0)),r.length=0):r.push(p)}e+=m}E[d>>2]=e;return 0},b:function(a){V.activeTexture(a)},I:function(a,b){V.attachShader(Q[a],T[b])},c:function(a,b){V.bindBuffer(a,
tb[b])},h:function(a,b){V.bindFramebuffer(a,ub[b])},Ga:function(a,b){V.bindRenderbuffer(a,R[b])},a:function(a,b){V.bindTexture(a,S[b])},M:function(a,b,c,d){V.blendColor(a,b,c,d)},O:function(a,b){V.blendEquationSeparate(a,b)},P:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},Ia:function(a,b,c,d){V.bufferData(a,c?B.subarray(c,c+b):b,d)},o:function(a,b,c,d){V.bufferSubData(a,b,B.subarray(d,d+c))},s:function(a){return V.checkFramebufferStatus(a)},Gb:function(a){V.clear(a)},Ib:function(a,b,c,d){V.clearColor(a,
b,c,d)},ra:function(a){V.clearDepth(a)},Hb:function(a){V.clearStencil(a)},p:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},va:function(a){V.compileShader(T[a])},Ca:function(a,b,c,d,e,h,g,m){V.compressedTexImage2D(a,b,c,d,e,h,m?B.subarray(m,m+g):null)},Aa:function(){var a=yb(Q),b=V.createProgram();b.name=a;b.rc=b.pc=b.qc=0;b.uc=1;Q[a]=b;return a},xa:function(a){var b=yb(T);T[b]=V.createShader(a);return b},J:function(a){V.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=tb[d];
e&&(V.deleteBuffer(e),e.name=0,tb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=ub[d];e&&(V.deleteFramebuffer(e),e.name=0,ub[d]=null)}},q:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):U(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=R[d];e&&(V.deleteRenderbuffer(e),e.name=0,R[d]=null)}},x:function(a){if(a){var b=T[a];b?(V.deleteShader(b),T[a]=null):U(1281)}},Na:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=S[d];e&&(V.deleteTexture(e),
e.name=0,S[d]=null)}},A:function(a){V.depthFunc(a)},z:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},Q:function(a){V.disableVertexAttribArray(a)},ob:function(a,b,c){V.drawArrays(a,b,c)},pb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},qb:function(a,b,c,d){V.drawElements(a,b,c,d)},rb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},i:function(a){V.enable(a)},Cb:function(a){V.enableVertexAttribArray(a)},m:function(a,b,c,d){V.framebufferRenderbuffer(a,b,c,R[d])},g:function(a,b,
c,d,e){V.framebufferTexture2D(a,b,c,S[d],e)},K:function(a){V.frontFace(a)},Ja:function(a,b){Fb(a,b,"createBuffer",tb)},n:function(a,b){Fb(a,b,"createFramebuffer",ub)},Ha:function(a,b){Fb(a,b,"createRenderbuffer",R)},Da:function(a,b){Fb(a,b,"createTexture",S)},ta:function(a,b){return V.getAttribLocation(Q[a],C(b))},f:function(a,b){Gb(a,b)},ya:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},H:function(a,b,c){if(c)if(a>=sb)U(1281);else if(a=
Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.rc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.rc=Math.max(a.rc,V.getActiveUniform(a,b).name.length+1);D[c>>2]=a.rc}else if(35722==b){if(!a.pc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.pc=Math.max(a.pc,V.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.pc}else if(35381==b){if(!a.qc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.qc=Math.max(a.qc,V.getActiveUniformBlockName(a,b).length+
1);D[c>>2]=a.qc}else D[c>>2]=V.getProgramParameter(a,b);else U(1281)},ua:function(a,b,c,d){a=V.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},E:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(T[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=V.getShaderParameter(T[a],b):U(1281)},Pa:function(a){var b=wb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+
d}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||U(1280);b=b&&Hb(b);break;case 7938:b=Hb("OpenGL ES 2.0 ("+V.getParameter(7938)+")");break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:U(1280)}wb[a]=b}return b},t:function(a,b){b=C(b);if(a=Q[a]){var c=a,d=c.nc,e=c.Hc,h;if(!d)for(c.nc=d={},c.Gc={},h=0;h<V.getProgramParameter(c,
35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var p=c.uc;c.uc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Gc[p++]=n}c=a.nc;d=0;e=b;h=Ib(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Hc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else U(1281);return-1},za:function(a){a=Q[a];V.linkProgram(a);a.nc=0;a.Hc={}},L:function(a,b){V.polygonOffset(a,b)},Ea:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},r:function(a,b,c,
d){V.scissor(a,b,c,d)},wa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?D[d+4*h>>2]:-1;e+=C(D[c+4*h>>2],0>g?void 0:g)}V.shaderSource(T[a],e)},La:function(a,b,c){V.stencilFunc(a,b,c)},qa:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},y:function(a){V.stencilMask(a)},Ka:function(a,b,c){V.stencilOp(a,b,c)},pa:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,h,g,m,n){V.texImage2D(a,b,c,d,e,h,g,m,n?Jb(m,g,d,e,n):null)},j:function(a,b,c){V.texParameteri(a,b,c)},nb:function(a,
b,c,d,e,h,g,m,n){var p=null;n&&(p=Jb(m,g,e,h,n));V.texSubImage2D(a,b,c,d,e,h,g,m,p)},Bb:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)},F:function(a,b){V.uniform1i(W(a),b)},xb:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)},Ab:function(a,b,c){if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>
2,c+8*b>>2);V.uniform2fv(W(a),d)},vb:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)},zb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)},ub:function(a,b,c){if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=
D.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)},yb:function(a,b,c){if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)},tb:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)},sb:function(a,b,c,d){if(18>=b){var e=X[16*b-1],h=F;
d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)},k:function(a){a=Q[a];V.useProgram(a);V.Ic=a},Db:function(a,b){V.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},l:function(a,
b,c,d){V.viewport(a,b,c,d)},_a:function(){f.Ac=function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Ac)},Za:function(){f.Fc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.Fc)},Ya:function(a){f.Wc=[];a=C(a);a=document.getElementById(a);f.Bc=function(b){b.stopPropagation();b.preventDefault()};f.Cc=function(b){b.stopPropagation();b.preventDefault()};f.Dc=function(b){b.stopPropagation();
b.preventDefault()};f.Ec=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.tc=c;Nb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ob(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Bc,!1);a.addEventListener("dragleave",f.Cc,!1);a.addEventListener("dragover",f.Dc,!1);a.addEventListener("drop",f.Ec,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},w:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},Kb:function(a){return 0>a||a>=f.tc.length?0:f.tc[a].size},Jb:function(a,b,c,d,e){var h=new FileReader;h.onload=function(g){g=g.target.result;g.byteLength>d?Qb(a,0,1,b,0,c,d,e):(B.set(new Uint8Array(g),c),Qb(a,1,0,b,g.byteLength,c,d,e))};h.onerror=function(){Qb(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.tc[a])},v:function(){document.getElementById("_sokol_app_input_element").focus()},
Ma:function(a){a=C(a);f.lc=document.getElementById(a);f.lc||console.log("sokol_app.h: invalid target:"+a);f.lc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Wa:function(){window.removeEventListener("beforeunload",f.Ac)},Va:function(){window.removeEventListener("paste",f.Fc)},Ua:function(a){a=C(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Bc);a.removeEventListener("dragleave",f.Cc);a.removeEventListener("dragover",f.Dc);a.removeEventListener("drop",
f.Ec)},C:function(){f.lc&&f.lc.requestPointerLock&&f.lc.requestPointerLock()},Ta:function(a,b){if(f.lc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}f.lc.style.cursor=a}},Qa:function(a,b,c){var d=document.createElement("canvas");
d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(B.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},u:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(a){a=C(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");
b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Xa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())na("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},kb:function(){return f.kc?f.kc.bufferSize:0},mb:function(a,b,c){f.ec=null;f.kc=null;"undefined"!==typeof AudioContext?
f.ec=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?f.ec=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.ec=null,console.log("sokol_audio.h: no WebAudio support"));return f.ec?(console.log("sokol_audio.h: sample rate ",f.ec.sampleRate),f.kc=f.ec.createScriptProcessor(c,0,b),f.kc.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Rb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),
p=0;p<e;p++)n[p]=F[(h>>2)+(g*p+m)]},f.kc.connect(f.ec.destination),a=function(){f.ec&&"suspended"===f.ec.state&&f.ec.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},lb:function(){return f.ec?f.ec.sampleRate:0},na:function(){null!==f.ec&&(f.kc&&f.kc.disconnect(),f.ec.close(),f.ec=null,f.kc=null)},$a:function(){if(f.ec)return"suspended"===f.ec.state?1:0},B:function(a,b,c,d,e,h){b=C(b);
var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(B.set(n,e),Sb(a,d,p)):Tb(a)}else Ub(a,this.status)};g.send()},ma:function(a,b){b=C(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=
this.getResponseHeader("Content-Length");Vb(a,d)}else Ub(a,this.status)};c.send()},la:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Lb;xa();ya=f.asm.ac;Aa.unshift(f.asm.Mb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Fa&&(clearInterval(Fa),Fa=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Ja().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);ka(h)})}var d={a:Wb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Ga()||J.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Mb).apply(null,arguments)};var Pb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Nb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Ob).apply(null,arguments)};
var Mb=f.__sapp_html5_get_ask_leave_site=function(){return(Mb=f.__sapp_html5_get_ask_leave_site=f.asm.Pb).apply(null,arguments)},Nb=f.__sapp_emsc_begin_drop=function(){return(Nb=f.__sapp_emsc_begin_drop=f.asm.Qb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Rb).apply(null,arguments)};
var Ob=f.__sapp_emsc_end_drop=function(){return(Ob=f.__sapp_emsc_end_drop=f.asm.Sb).apply(null,arguments)},Qb=f.__sapp_emsc_invoke_fetch_cb=function(){return(Qb=f.__sapp_emsc_invoke_fetch_cb=f.asm.Tb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Ub).apply(null,arguments)};var Rb=f.__saudio_emsc_pull=function(){return(Rb=f.__saudio_emsc_pull=f.asm.Vb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Wb).apply(null,arguments)};
var Vb=f.__sfetch_emsc_head_response=function(){return(Vb=f.__sfetch_emsc_head_response=f.asm.Xb).apply(null,arguments)},Sb=f.__sfetch_emsc_get_response=function(){return(Sb=f.__sfetch_emsc_get_response=f.asm.Yb).apply(null,arguments)},Ub=f.__sfetch_emsc_failed_http_status=function(){return(Ub=f.__sfetch_emsc_failed_http_status=f.asm.Zb).apply(null,arguments)},Tb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Tb=f.__sfetch_emsc_failed_buffer_too_small=f.asm._b).apply(null,arguments)},O=
f._malloc=function(){return(O=f._malloc=f.asm.$b).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.bc).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.cc).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.dc).apply(null,arguments)},Xb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Yb(){Xb||Zb();Xb||(I=Yb)};
function $b(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=z(4*(c+1)),e=d>>2;a.forEach(g=>{var m=D,n=e++,p=ta(g)+1,r=z(p);A(g,oa,r,p);m[n]=r});D[e]=0;try{var h=b(c,d);ac(h)}catch(g){g instanceof ia||"unwind"==g||k(1,g)}finally{}}
function Zb(a){function b(){if(!Xb&&(Xb=!0,f.calledRun=!0,!ma)){Ka(Aa);Ka(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();bc&&$b(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();Da.unshift(c)}Ka(Da)}}a=a||ba;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();Ka(za);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}f.run=Zb;function ac(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ma=!0}k(a,new ia(a))}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var bc=!0;f.noInitialRun&&(bc=!1);Zb();
