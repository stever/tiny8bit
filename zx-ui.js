
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,u,v,fs,w,ha;
if(ea)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=(a,b,c)=>{ha();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ia)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",
a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ja=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1;
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=A(r);B(n,C,p,r)}return p},array:function(n){var p=A(n.length);oa.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?sa(C,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=A(b);B(a,oa,c,b);return c}var va,oa,C,wa,xa,E,ya,F,G;
function za(){var a=la.buffer;va=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=wa=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=xa=new Uint16Array(a);f.HEAPU32=ya=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var Aa,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ia=0;function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var H=0,Ha=null,I=null;f.preloadedImages={};f.preloadedAudios={};
function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ia(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="zx-ui.wasm";if(!Ia()){var Ja=J;J=f.locateFile?f.locateFile(Ja,q):q+Ja}function Ka(){var a=J;try{if(a==J&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function La(){if(!z&&(da||l)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(u)return new Promise(function(a,b){u(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Sc;"number"==typeof c?void 0===b.sc?K(c)():K(c)(b.sc):c(void 0===b.sc?null:b.sc)}}}var Na=[];function K(a){var b=Na[a];b||(a>=Na.length&&(Na.length=a+1),Na[a]=b=Aa.get(a));return b}var Oa=[null,[],[]],Pa={},Qa=0;function Ra(){for(var a=L.length-1;0<=a;--a)Sa(a);L=[];Ta=[]}var Ta=[];function Ua(){if(Qa&&Va.nc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.$c.apply(null,b.Oc)}}var L=[];
function Sa(a){var b=L[a];b.target.removeEventListener(b.ec,b.Jc,b.fc);L.splice(a,1)}function M(a){function b(d){++Qa;Va=a;Ua();a.ic(d);Ua();--Qa}if(a.hc)a.Jc=b,a.target.addEventListener(a.ec,b,a.fc),L.push(a),Wa||(Ea.push(Ra),Wa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].ec==a.ec&&Sa(c--)}function Xa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Wa,Va,Ya,Za,$a,ab,bb,cb,db,eb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function N(a){a=2<a?D(a):a;return eb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function fb(a){return 0>eb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var gb;gb=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();
function hb(a,b,c,d,e,h){Ya||(Ya=O(256));a={target:N(a),ec:h,hc:d,ic:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ya;B(Xa(g.target),C,n+0,128);B(m,C,n+128,128);K(d)(e,n,b)&&g.preventDefault()},fc:c};M(a)}
function ib(a,b,c,d,e,h){Za||(Za=O(176));a={target:N(a),nc:!0,ec:h,hc:d,ic:function(g){var m=Za;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);K(d)(e,m,b)&&g.preventDefault()},fc:c};M(a)}
function jb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=fb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){$a||($a=O(72));a=N(a);M({target:a,nc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,ec:h,hc:d,ic:function(g){g=g||event;jb($a,g,a);K(d)(e,$a,b)&&g.preventDefault()},fc:c})}function kb(a,b,c,d,e){ab||(ab=O(260));M({target:a,ec:e,hc:d,ic:function(h){h=h||event;var g=ab,m=document.pointerLockElement||document.kc||document.xc||document.vc;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Xa(m),C,g+4,128);B(n,C,g+132,128);K(d)(20,g,b)&&h.preventDefault()},fc:c})}
function lb(a,b,c,d,e){M({target:a,ec:e,hc:d,ic:function(h){h=h||event;K(d)(38,0,b)&&h.preventDefault()},fc:c})}
function mb(a,b,c,d){bb||(bb=O(36));a=N(a);M({target:a,ec:"resize",hc:d,ic:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=bb;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;K(d)(10,g,b)&&e.preventDefault()}}},fc:c})}
function nb(a,b,c,d,e,h){cb||(cb=O(1696));a=N(a);M({target:a,nc:"touchstart"==h||"touchend"==h,ec:h,hc:d,ic:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.yc=m.zc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.yc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].zc=1;p=cb;G[p>>3]=g.timeStamp;var t=p>>2;E[t+3]=g.ctrlKey;E[t+4]=g.shiftKey;E[t+5]=g.altKey;E[t+6]=g.metaKey;t+=7;var rb=fb(a),sb=0;for(r in n)if(m=
n[r],E[t]=m.identifier,E[t+1]=m.screenX,E[t+2]=m.screenY,E[t+3]=m.clientX,E[t+4]=m.clientY,E[t+5]=m.pageX,E[t+6]=m.pageY,E[t+7]=m.yc,E[t+8]=m.zc,E[t+9]=m.clientX-rb.left,E[t+10]=m.clientY-rb.top,t+=13,31<++sb)break;E[p+8>>2]=sb;K(d)(e,p,b)&&g.preventDefault()},fc:c})}function ob(a,b,c,d,e,h){a={target:N(a),ec:h,hc:d,ic:function(g){g=g||event;K(d)(e,0,b)&&g.preventDefault()},fc:c};M(a)}
function pb(a,b,c,d){db||(db=O(104));M({target:a,nc:!0,ec:"wheel",hc:d,ic:function(e){e=e||event;var h=db;jb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;K(d)(9,h,b)&&e.preventDefault()},fc:c})}
function qb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function tb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ub(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function vb(a){a.Wc=a.getExtension("WEBGL_multi_draw")}
var wb=1,xb=[],Q=[],yb=[],R=[],S=[],T=[],zb=[],Ab={};function U(a){Bb||(Bb=a)}function Cb(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}function Db(a,b){a.kc||(a.kc=a.getContext,a.getContext=function(d,e){e=a.kc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(zb),d={Uc:c,attributes:b,version:b.Mc,rc:a};a.canvas&&(a.canvas.Nc=d);zb[c]=d;("undefined"==typeof b.wc||b.wc)&&Fb(d);return c}
function Fb(a){a||(a=Gb);if(!a.Lc){a.Lc=!0;var b=a.rc;qb(b);tb(b);ub(b);b.Qc=b.getExtension("EXT_disjoint_timer_query");vb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,Gb,Hb=["default","low-power","high-performance"];function Ib(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&Cb(d);h?(h.name=g,d[g]=h):U(1282);E[b+4*e>>2]=g}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else U(1281)}function Kb(a){var b=ta(a)+1,c=O(b);B(a,C,c,b);return c}
function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Mb(a,b,c,d,e){a-=5120;a=1==a?C:4==a?E:6==a?F:5==a||28922==a?ya:xa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function W(a){var b=V.Ic;if(b){var c=b.mc[a];"number"==typeof c&&(b.mc[a]=c=V.getUniformLocation(b,b.Gc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var X=[],Y=[],V,Nb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Nb.subarray(0,Z+1);
var Ob=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Ob.subarray(0,Z+1);
var Zb={ka:function(){return 0},hb:function(){return 0},ib:function(){},bb:function(){ka("")},G:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},M:function(a,b,c){a=N(a);if(!a)return-4;a=fb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},D:gb,db:function(a,b,c){C.copyWithin(a,b,b+c)},Eb:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);za();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},U:function(a,b,c,d){hb(a,b,c,d,12,"blur");return 0},sa:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){hb(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){ib(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){ib(a,b,c,d,1,"keypress");return 0},ba:function(a,
b,c,d){ib(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.kc||document.body.xc||document.body.vc))return-1;a=N(a);if(!a)return-4;kb(a,b,c,
d,"pointerlockchange");kb(a,b,c,d,"mozpointerlockchange");kb(a,b,c,d,"webkitpointerlockchange");kb(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.kc||document.body.xc||document.body.vc))return-1;a=N(a);if(!a)return-4;lb(a,b,c,d,"pointerlockerror");lb(a,b,c,d,"mozpointerlockerror");lb(a,b,c,d,"webkitpointerlockerror");lb(a,b,c,d,"mspointerlockerror");return 0},Ea:function(a,b,c,d){mb(a,b,c,d);return 0},Y:function(a,b,c,d){nb(a,
b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){nb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){nb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){nb(a,b,c,d,22,"touchstart");return 0},T:function(a,b,c,d){ob(a,b,c,d,31,"webglcontextlost");return 0},S:function(a,b,c,d){ob(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=N(a);return"undefined"!=typeof a.onwheel?(pb(a,b,c,d),0):-1},oa:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+
3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Hb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+7],Mc:E[b+8],Vc:E[b+9],wc:E[b+10],Kc:E[b+11],Xc:E[b+12],Yc:E[b+13]};a=N(a);return!a||b.Kc?0:Db(a,b)},$a:function(a,b){a=zb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&qb(V);"OES_vertex_array_object"==b&&tb(V);"WEBGL_draw_buffers"==b&&ub(V);"WEBGL_multi_draw"==b&&vb(V);return!!a.rc.getExtension(b)},ub:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},eb:function(a){Gb=zb[a];f.Pc=V=Gb&&Gb.rc;return!a||V?0:-5},ja:function(){return 0},gb:function(a,b,c,d){a=Pa.Tc(a);b=Pa.Rc(a,b,c);E[d>>2]=b;return 0},ab:function(){},fb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=E[b>>2],m=E[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=C[g+n],r=Oa[a];0===p||10===p?((1===a?ja:y)(sa(r,0)),r.length=0):r.push(p)}e+=m}E[d>>2]=e;return 0},b:function(a){V.activeTexture(a)},I:function(a,b){V.attachShader(Q[a],T[b])},c:function(a,
b){V.bindBuffer(a,xb[b])},g:function(a,b){V.bindFramebuffer(a,yb[b])},Ga:function(a,b){V.bindRenderbuffer(a,R[b])},a:function(a,b){V.bindTexture(a,S[b])},N:function(a,b,c,d){V.blendColor(a,b,c,d)},O:function(a,b){V.blendEquationSeparate(a,b)},P:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},Ia:function(a,b,c,d){V.bufferData(a,c?C.subarray(c,c+b):b,d)},k:function(a,b,c,d){V.bufferSubData(a,b,C.subarray(d,d+c))},s:function(a){return V.checkFramebufferStatus(a)},Fb:function(a){V.clear(a)},Hb:function(a,
b,c,d){V.clearColor(a,b,c,d)},ra:function(a){V.clearDepth(a)},Gb:function(a){V.clearStencil(a)},p:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},va:function(a){V.compileShader(T[a])},Ca:function(a,b,c,d,e,h,g,m){V.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+g):null)},Aa:function(){var a=Cb(Q),b=V.createProgram();b.name=a;b.qc=b.oc=b.pc=0;b.uc=1;Q[a]=b;return a},xa:function(a){var b=Cb(T);T[b]=V.createShader(a);return b},J:function(a){V.cullFace(a)},Oa:function(a,b){for(var c=0;c<a;c++){var d=
E[b+4*c>>2],e=xb[d];e&&(V.deleteBuffer(e),e.name=0,xb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=yb[d];e&&(V.deleteFramebuffer(e),e.name=0,yb[d]=null)}},q:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):U(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=R[d];e&&(V.deleteRenderbuffer(e),e.name=0,R[d]=null)}},x:function(a){if(a){var b=T[a];b?(V.deleteShader(b),T[a]=null):U(1281)}},Na:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],
e=S[d];e&&(V.deleteTexture(e),e.name=0,S[d]=null)}},A:function(a){V.depthFunc(a)},z:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},Q:function(a){V.disableVertexAttribArray(a)},nb:function(a,b,c){V.drawArrays(a,b,c)},ob:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},pb:function(a,b,c,d){V.drawElements(a,b,c,d)},qb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},i:function(a){V.enable(a)},Bb:function(a){V.enableVertexAttribArray(a)},n:function(a,b,c,d){V.framebufferRenderbuffer(a,
b,c,R[d])},h:function(a,b,c,d,e){V.framebufferTexture2D(a,b,c,S[d],e)},K:function(a){V.frontFace(a)},Ja:function(a,b){Ib(a,b,"createBuffer",xb)},o:function(a,b){Ib(a,b,"createFramebuffer",yb)},Ha:function(a,b){Ib(a,b,"createRenderbuffer",R)},Da:function(a,b){Ib(a,b,"createTexture",S)},ta:function(a,b){return V.getAttribLocation(Q[a],D(b))},f:function(a,b){Jb(a,b)},ya:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},H:function(a,b,
c){if(c)if(a>=wb)U(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.qc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.qc=Math.max(a.qc,V.getActiveUniform(a,b).name.length+1);E[c>>2]=a.qc}else if(35722==b){if(!a.oc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.oc=Math.max(a.oc,V.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.oc}else if(35381==b){if(!a.pc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.pc=Math.max(a.pc,
V.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.pc}else E[c>>2]=V.getProgramParameter(a,b);else U(1281)},ua:function(a,b,c,d){a=V.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},E:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(T[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=V.getShaderParameter(T[a],b):U(1281)},Pa:function(a){var b=Ab[a];if(!b){switch(a){case 7939:b=
V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Kb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||U(1280);b=b&&Kb(b);break;case 7938:b=Kb("OpenGL ES 2.0 ("+V.getParameter(7938)+")");break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Kb(b);break;default:U(1280)}Ab[a]=b}return b},t:function(a,b){b=D(b);
if(a=Q[a]){var c=a,d=c.mc,e=c.Hc,h;if(!d)for(c.mc=d={},c.Gc={},h=0;h<V.getProgramParameter(c,35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Lb(m);n=0<n?m.slice(0,n):m;var p=c.uc;c.uc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Gc[p++]=n}c=a.mc;d=0;e=b;h=Lb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Hc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else U(1281);return-1},za:function(a){a=Q[a];V.linkProgram(a);a.mc=0;a.Hc={}},L:function(a,b){V.polygonOffset(a,
b)},Fa:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},r:function(a,b,c,d){V.scissor(a,b,c,d)},wa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>g?void 0:g)}V.shaderSource(T[a],e)},La:function(a,b,c){V.stencilFunc(a,b,c)},qa:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},y:function(a){V.stencilMask(a)},Ka:function(a,b,c){V.stencilOp(a,b,c)},pa:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,h,g,m,n){V.texImage2D(a,b,c,d,e,h,g,m,n?Mb(m,
g,d,e,n):null)},j:function(a,b,c){V.texParameteri(a,b,c)},mb:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Mb(m,g,e,h,n));V.texSubImage2D(a,b,c,d,e,h,g,m,p)},Ab:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)},F:function(a,b){V.uniform1i(W(a),b)},wb:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)},zb:function(a,b,c){if(144>=b)for(var d=X[2*b-1],
e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)},vb:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)},yb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)},tb:function(a,b,c){if(96>=b)for(var d=Y[3*b-1],e=0;e<
3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)},xb:function(a,b,c){if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)},sb:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*e+12)>>2];else d=E.subarray(c>>2,c+16*
b>>2);V.uniform4iv(W(a),d)},rb:function(a,b,c,d){if(18>=b){var e=X[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)},l:function(a){a=Q[a];V.useProgram(a);V.Ic=a},Cb:function(a,b){V.vertexAttribDivisor(a,
b)},Db:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},m:function(a,b,c,d){V.viewport(a,b,c,d)},Za:function(){f.Ac=function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Ac)},Ya:function(){f.Fc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.Fc)},Xa:function(a){f.Zc=[];a=D(a);a=document.getElementById(a);f.Bc=function(b){b.stopPropagation();b.preventDefault()};f.Cc=function(b){b.stopPropagation();
b.preventDefault()};f.Dc=function(b){b.stopPropagation();b.preventDefault()};f.Ec=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.tc=c;Qb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Rb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Bc,!1);a.addEventListener("dragleave",f.Cc,!1);a.addEventListener("dragover",f.Dc,!1);a.addEventListener("drop",f.Ec,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},w:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},Jb:function(a){return 0>a||a>=f.tc.length?0:f.tc[a].size},Ib:function(a,b,c,d,e){var h=new FileReader;h.onload=function(g){g=g.target.result;g.byteLength>d?Tb(a,0,1,b,0,c,d,e):(C.set(new Uint8Array(g),c),Tb(a,1,0,b,g.byteLength,c,d,e))};h.onerror=function(){Tb(a,0,2,b,0,c,d,
e)};h.readAsArrayBuffer(f.tc[a])},v:function(){document.getElementById("_sokol_app_input_element").focus()},Ma:function(a){a=D(a);f.lc=document.getElementById(a);f.lc||console.log("sokol_app.h: invalid target:"+a);f.lc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Va:function(){window.removeEventListener("beforeunload",f.Ac)},Ua:function(){window.removeEventListener("paste",f.Fc)},Ta:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",
f.Bc);a.removeEventListener("dragleave",f.Cc);a.removeEventListener("dragover",f.Dc);a.removeEventListener("drop",f.Ec)},C:function(){f.lc&&f.lc.requestPointerLock&&f.lc.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
u:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(a){a=D(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Wa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),
b=a.next();!b.done;b=a.next())na("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},jb:function(){return f.jc?f.jc.bufferSize:0},lb:function(a,b,c){f.dc=null;f.jc=null;"undefined"!==typeof AudioContext?f.dc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?f.dc=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.dc=null,console.log("sokol_audio.h: no WebAudio support"));return f.dc?(console.log("sokol_audio.h: sample rate ",
f.dc.sampleRate),f.jc=f.dc.createScriptProcessor(c,0,b),f.jc.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Ub(e);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<e;p++)n[p]=F[(h>>2)+(g*p+m)]},f.jc.connect(f.dc.destination),a=function(){f.dc&&"suspended"===f.dc.state&&f.dc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),
1):0},kb:function(){return f.dc?f.dc.sampleRate:0},na:function(){null!==f.dc&&(f.jc&&f.jc.disconnect(),f.dc.close(),f.dc=null,f.jc=null)},_a:function(){if(f.dc)return"suspended"===f.dc.state?1:0},B:function(a,b,c,d,e,h){b=D(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=
n.length;p<=h?(C.set(n,e),Vb(a,d,p)):Wb(a)}else Xb(a,this.status)};g.send()},ma:function(a,b){b=D(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Yb(a,d)}else Xb(a,this.status)};c.send()},la:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Kb;za();Aa=f.asm.$b;Ca.unshift(f.asm.Lb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ha&&(clearInterval(Ha),Ha=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);ka(h)})}var d={a:Zb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!=typeof WebAssembly.instantiateStreaming||Ia()||J.startsWith("file://")||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Lb).apply(null,arguments)};var Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Mb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Nb).apply(null,arguments)};
var Pb=f.__sapp_html5_get_ask_leave_site=function(){return(Pb=f.__sapp_html5_get_ask_leave_site=f.asm.Ob).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Pb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Qb).apply(null,arguments)};
var Rb=f.__sapp_emsc_end_drop=function(){return(Rb=f.__sapp_emsc_end_drop=f.asm.Rb).apply(null,arguments)},Tb=f.__sapp_emsc_invoke_fetch_cb=function(){return(Tb=f.__sapp_emsc_invoke_fetch_cb=f.asm.Sb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Tb).apply(null,arguments)};var Ub=f.__saudio_emsc_pull=function(){return(Ub=f.__saudio_emsc_pull=f.asm.Ub).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Vb).apply(null,arguments)};
var Yb=f.__sfetch_emsc_head_response=function(){return(Yb=f.__sfetch_emsc_head_response=f.asm.Wb).apply(null,arguments)},Vb=f.__sfetch_emsc_get_response=function(){return(Vb=f.__sfetch_emsc_get_response=f.asm.Xb).apply(null,arguments)},Xb=f.__sfetch_emsc_failed_http_status=function(){return(Xb=f.__sfetch_emsc_failed_http_status=f.asm.Yb).apply(null,arguments)},Wb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Wb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Zb).apply(null,arguments)},O=
f._malloc=function(){return(O=f._malloc=f.asm._b).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.ac).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.bc).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.cc).apply(null,arguments)},$b;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function ac(){$b||bc();$b||(I=ac)};
function bc(a){function b(){if(!$b&&($b=!0,f.calledRun=!0,!ma)){Ma(Ca);Ma(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(cc){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));E[h>>2]=ua(ca);for(var g=1;g<e;g++)E[(h>>2)+g]=ua(c[g-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ia)){if(f.onExit)f.onExit(m);ma=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Fa.unshift(c);Ma(Fa)}}a=a||ba;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Ma(Ba);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=bc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var cc=!0;f.noInitialRun&&(cc=!1);bc();
