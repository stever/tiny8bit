
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);
"object"!==typeof WebAssembly&&x("no native wasm support detected");var la,ma=!1;function assert(a,b){a||x("Assertion failed: "+b)}function na(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=B(q);C(n,D,p,q)}return p},array:function(n){var p=B(n.length);pa.set(n,p);return p}};a=na(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=qa()),f[g]=m(c[g])):f[g]=c[g]}a.apply(null,f);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function E(a,b){return a?ta(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=B(b);C(a,pa,c,b);return c}var wa,pa,D,xa,ya,F,za,G,H;
function Aa(){var a=la.buffer;wa=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=xa=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=ya=new Uint16Array(a);e.HEAPU32=za=new Uint32Array(a);e.HEAPF32=G=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var I,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];Ca.push({Ic:function(){Ga()}});function Ha(){var a=e.preRun.shift();Ba.unshift(a)}var J=0,Ia=null,K=null;e.preloadedImages={};e.preloadedAudios={};
function x(a){if(e.onAbort)e.onAbort(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var L="bombjack-ui.wasm";if(!Ka()){var La=L;L=e.locateFile?e.locateFile(La,v):v+La}
function Ma(){var a=L;try{if(a==L&&A)return new Uint8Array(A);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Na(){if(!A&&(ba||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Ic;"number"===typeof c?void 0===b.tc?I.get(c)():I.get(c)(b.tc):c(void 0===b.tc?null:b.tc)}}}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=M.length-1;0<=a;--a)Ta(a);M=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.rc)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.$c.apply(null,b.Oc)}}var M=[];function Ta(a){var b=M[a];b.target.removeEventListener(b.jc,b.Gc,b.kc);M.splice(a,1)}
function N(a){function b(d){++Ra;Wa=a;Va();a.nc(d);Va();--Ra}if(a.mc)a.Gc=b,a.target.addEventListener(a.jc,b,a.kc),M.push(a),Xa||(Ea.push(Sa),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].jc==a.jc&&Ta(c--)}var Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,f,h){Ya||(Ya=P(164));a={target:O(a),rc:!0,jc:h,mc:d,nc:function(g){var m=Ya,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(f,m,b)&&g.preventDefault()},kc:c};N(a)}
function gb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=eb(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function Q(a,b,c,d,f,h){Za||(Za=P(64));a=O(a);N({target:a,rc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,jc:h,mc:d,nc:function(g){g=g||event;gb(Za,g,a);I.get(d)(f,Za,b)&&g.preventDefault()},kc:c})}
function hb(a,b,c,d,f){$a||($a=P(260));N({target:a,jc:f,mc:d,nc:function(h){h=h||event;var g=$a,m=document.pointerLockElement||document.wc||document.yc||document.xc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&h.preventDefault()},kc:c})}function ib(a,b,c,d,f){N({target:a,jc:f,mc:d,nc:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},kc:c})}
function jb(a,b,c,d){ab||(ab=P(36));a=O(a);N({target:a,jc:"resize",mc:d,nc:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=ab;F[g>>2]=f.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&f.preventDefault()}}},kc:c})}
function kb(a,b,c,d,f,h){bb||(bb=P(1684));a=O(a);N({target:a,rc:"touchstart"==h||"touchend"==h,jc:h,mc:d,nc:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Kc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Mc=1;n=bb;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var nb=eb(a),ob=0;for(p in m){var z=m[p];F[q]=z.identifier;F[q+1]=z.screenX;F[q+2]=
z.screenY;F[q+3]=z.clientX;F[q+4]=z.clientY;F[q+5]=z.pageX;F[q+6]=z.pageY;F[q+7]=z.Kc;F[q+8]=z.Mc;F[q+9]=z.clientX-nb.left;F[q+10]=z.clientY-nb.top;q+=13;if(31<++ob)break}F[n>>2]=ob;I.get(d)(f,n,b)&&g.preventDefault()},kc:c})}function lb(a,b,c,d,f,h){a={target:O(a),jc:h,mc:d,nc:function(g){g=g||event;I.get(d)(f,0,b)&&g.preventDefault()},kc:c};N(a)}
function mb(a,b,c,d){cb||(cb=P(96));N({target:a,rc:!0,jc:"wheel",mc:d,nc:function(f){f=f||event;var h=cb;gb(h,f,a);H[h+64>>3]=f.deltaX;H[h+72>>3]=f.deltaY;H[h+80>>3]=f.deltaZ;F[h+88>>2]=f.deltaMode;I.get(d)(9,h,b)&&f.preventDefault()},kc:c})}
function pb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function qb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function sb(a){a.Vc=a.getExtension("WEBGL_multi_draw")}
var tb=1,ub=[],R=[],vb=[],S=[],T=[],U=[],V=[],wb=[],xb={},yb={};function W(a){zb||(zb=a)}function X(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}function Ab(a){a||(a=Bb);if(!a.Jc){a.Jc=!0;var b=a.sc;pb(b);qb(b);rb(b);b.Qc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var zb,Bb,Cb=["default","low-power","high-performance"];
function Db(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&X(d);h?(h.name=g,d[g]=h):W(1282);F[b+4*f>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else W(1281)}function Fb(a){var b=ua(a)+1,c=P(b);C(a,D,c,b);return c}
function Gb(a,b,c,d,f){a-=5120;a=1==a?D:4==a?F:6==a?G:5==a||28922==a?za:ya;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Hb=new Float32Array(288),Ib=0;288>Ib;++Ib)Z[Ib]=Hb.subarray(0,Ib+1);
var Ob={na:function(){return 0},fb:function(){return 0},gb:function(){},db:function(){x()},Y:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},fa:function(a,b,c){a=O(a);if(!a)return-4;a=eb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},bb:function(a,b,c){D.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},W:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ia:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ga:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ha:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ta:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},
la:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},ka:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},ma:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},aa:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.wc||document.body.yc||document.body.xc))return-1;a=O(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");
hb(a,b,c,d,"mspointerlockchange");return 0},$:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.wc||document.body.yc||document.body.xc))return-1;a=O(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},Ya:function(a,b,c,d){jb(a,b,c,d);return 0},ba:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},ca:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},
da:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ea:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ja:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},I:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Cb[F[b+
6]],failIfMajorPerformanceCaveat:!!F[b+7],Lc:F[b+8],Uc:F[b+9],vc:F[b+10],Hc:F[b+11],Wc:F[b+12],Xc:F[b+13]};a=O(a);if(!a||b.Hc)b=0;else if(a=a.getContext("webgl",b)){var c=X(wb),d={Tc:c,attributes:b,version:b.Lc,sc:a};a.canvas&&(a.canvas.Nc=d);wb[c]=d;("undefined"===typeof b.vc||b.vc)&&Ab(d);b=c}else b=0;return b},sb:function(a,b){a=wb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&pb(Y);"OES_vertex_array_object"==b&&qb(Y);"WEBGL_draw_buffers"==b&&rb(Y);"WEBGL_multi_draw"==
b&&sb(Y);return!!a.sc.getExtension(b)},La:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Aa:function(a){Bb=wb[a];e.Pc=Y=Bb&&Bb.sc;return!a||Y?0:-5},qa:function(){return 0},eb:function(a,b,c,d){a=Qa.Sc(a);b=Qa.Rc(a,b,c);F[d>>2]=b;return 0},ab:function(){},oa:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=F[b+8*h>>2],m=F[b+(8*h+4)>>2],n=0;n<m;n++){var p=D[g+n],q=Pa[a];0===p||10===p?((1===a?ka:y)(ta(q,0)),q.length=0):q.push(p)}f+=m}F[d>>2]=f;return 0},
b:function(a){Y.activeTexture(a)},K:function(a,b){Y.attachShader(R[a],V[b])},c:function(a,b){Y.bindBuffer(a,ub[b])},g:function(a,b){Y.bindFramebuffer(a,vb[b])},Ma:function(a,b){Y.bindRenderbuffer(a,S[b])},a:function(a,b){Y.bindTexture(a,T[b])},S:function(a,b,c,d){Y.blendColor(a,b,c,d)},T:function(a,b){Y.blendEquationSeparate(a,b)},U:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},N:function(a,b,c,d){Y.bufferData(a,c?D.subarray(c,c+b):b,d)},t:function(a,b,c,d){Y.bufferSubData(a,b,D.subarray(d,d+c))},
o:function(a){return Y.checkFramebufferStatus(a)},wa:function(a){Y.clear(a)},za:function(a,b,c,d){Y.clearColor(a,b,c,d)},ya:function(a){Y.clearDepth(a)},xa:function(a){Y.clearStencil(a)},y:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Da:function(a){Y.compileShader(V[a])},M:function(a,b,c,d,f,h,g,m){Y.compressedTexImage2D(a,b,c,d,f,h,m?D.subarray(m,m+g):null)},Ia:function(){var a=X(R),b=Y.createProgram();b.name=a;R[a]=b;return a},Fa:function(a){var b=X(V);V[b]=Y.createShader(a);return b},P:function(a){Y.cullFace(a)},
Sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=ub[d];f&&(Y.deleteBuffer(f),f.name=0,ub[d]=null)}},e:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],f=vb[d];f&&(Y.deleteFramebuffer(f),f.name=0,vb[d]=null)}},C:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,xb[a]=null):W(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=S[d];f&&(Y.deleteRenderbuffer(f),f.name=0,S[d]=null)}},x:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},
Ra:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=T[d];f&&(Y.deleteTexture(f),f.name=0,T[d]=null)}},B:function(a){Y.depthFunc(a)},A:function(a){Y.depthMask(!!a)},f:function(a){Y.disable(a)},V:function(a){Y.disableVertexAttribArray(a)},E:function(a,b,c){Y.drawArrays(a,b,c)},F:function(a,b,c,d){Y.drawElements(a,b,c,d)},i:function(a){Y.enable(a)},qb:function(a){Y.enableVertexAttribArray(a)},l:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,S[d])},d:function(a,b,c,d,f){Y.framebufferTexture2D(a,
b,c,T[d],f)},Q:function(a){Y.frontFace(a)},O:function(a,b){Db(a,b,"createBuffer",ub)},p:function(a,b){Db(a,b,"createFramebuffer",vb)},Na:function(a,b){Db(a,b,"createRenderbuffer",S)},Ja:function(a,b){Db(a,b,"createTexture",T)},Ba:function(a,b){return Y.getAttribLocation(R[a],E(b))},h:function(a,b){Eb(a,b)},Ga:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},J:function(a,b,c){if(c)if(a>=tb)W(1281);else{var d=xb[a];if(d)if(35716==b)a=
Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.uc;else if(35722==b){if(-1==d.oc){a=R[a];var f=Y.getProgramParameter(a,35721);for(b=d.oc=0;b<f;++b)d.oc=Math.max(d.oc,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.oc}else if(35381==b){if(-1==d.pc)for(a=R[a],f=Y.getProgramParameter(a,35382),b=d.pc=0;b<f;++b)d.pc=Math.max(d.pc,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.pc}else F[c>>2]=Y.getProgramParameter(R[a],b);else W(1282)}else W(1281)},
Ca:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},G:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(V[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},Ta:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;
case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+Y.getParameter(7938)+")");break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:return W(1280),0}return yb[a]=b},s:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;
b=b.slice(0,d)}return(a=xb[a]&&xb[a].Fc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ha:function(a){Y.linkProgram(R[a]);var b=R[a];a=xb[a]={Fc:{},uc:0,oc:-1,pc:-1};for(var c=a.Fc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.uc=Math.max(a.uc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=X(U);c[g]=[h.size,n];U[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=X(U),U[n]=m}}},R:function(a,b){Y.polygonOffset(a,
b)},Ka:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},r:function(a,b,c,d){Y.scissor(a,b,c,d)},Ea:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;f+=E(F[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(V[a],f)},Qa:function(a,b,c){Y.stencilFunc(a,b,c)},va:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},z:function(a){Y.stencilMask(a)},Pa:function(a,b,c){Y.stencilOp(a,b,c)},ua:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},L:function(a,b,c,d,f,h,g,m,n){Y.texImage2D(a,b,c,d,f,h,g,m,n?Gb(m,
g,d,f,n):null)},j:function(a,b,c){Y.texParameteri(a,b,c)},m:function(a,b,c,d,f,h,g,m,n){var p=null;n&&(p=Gb(m,g,f,h,n));Y.texSubImage2D(a,b,c,d,f,h,g,m,p)},pb:function(a,b,c){if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=G[c+4*f>>2];else d=G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(U[a],d)},H:function(a,b){Y.uniform1i(U[a],b)},ob:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Y.uniform2fv(U[a],d)},nb:function(a,b,c){if(96>=
b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Y.uniform3fv(U[a],d)},mb:function(a,b,c){if(72>=b){var d=Z[4*b-1],f=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(U[a],d)},lb:function(a,b,c,d){if(18>=b){var f=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+
4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(U[a],!!c,f)},q:function(a){Y.useProgram(R[a])},hb:function(a,b){Y.vertexAttribDivisor(a,b)},rb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},k:function(a,b,c,d){Y.viewport(a,b,c,d)},$a:function(){e.zc=function(a){0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};
window.addEventListener("beforeunload",e.zc)},_a:function(){e.Ec=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Ec)},Za:function(a){e.Yc=[];a=E(a);a=document.getElementById(a);e.Ac=function(b){b.stopPropagation();b.preventDefault()};e.Bc=function(b){b.stopPropagation();b.preventDefault()};e.Cc=function(b){b.stopPropagation();b.preventDefault()};e.Dc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;
e.Zc=c;Kb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Lb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Ac,!1);a.addEventListener("dragleave",e.Bc,!1);a.addEventListener("dragover",e.Cc,!1);a.addEventListener("drop",e.Dc,!1)},w:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},v:function(){document.getElementById("_sokol_app_input_element").focus()},
tb:function(a){a=E(a);e.qc=document.getElementById(a);e.qc||console.log("sokol_app.h: invalid target:"+a);e.qc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Xa:function(){window.removeEventListener("beforeunload",e.zc)},Wa:function(){window.removeEventListener("paste",e.Ec)},Va:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Ac);a.removeEventListener("dragleave",e.Bc);a.removeEventListener("dragover",e.Cc);a.removeEventListener("drop",
e.Dc)},D:function(){e.qc&&e.qc.requestPointerLock&&e.qc.requestPointerLock()},u:function(){document.getElementById("_sokol_app_input_element").blur()},Ua:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},ib:function(){return e.lc?e.lc.bufferSize:0},kb:function(a,b,c){e.ic=null;e.lc=null;"undefined"!==typeof AudioContext?e.ic=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.ic=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.ic=null,console.log("sokol_audio.h: no WebAudio support"));return e.ic?(console.log("sokol_audio.h: sample rate ",e.ic.sampleRate),e.lc=e.ic.createScriptProcessor(c,0,b),e.lc.onaudioprocess=
function(d){var f=d.outputBuffer.length,h=Nb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=G[(h>>2)+(g*p+m)]},e.lc.connect(e.ic.destination),a=function(){e.ic&&"suspended"===e.ic.state&&e.ic.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},jb:function(){return e.ic?e.ic.sampleRate:0},sa:function(){null!==e.ic&&
(e.lc&&e.lc.disconnect(),e.ic.close(),e.ic=null,e.lc=null)},ra:function(){return navigator.userAgent.includes("Macintosh")?1:0},n:function(){return performance.now()}};
(function(){function a(f){e.asm=f.exports;la=e.asm.ub;Aa();I=e.asm.vb;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ia&&(clearInterval(Ia),Ia=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Ob};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return A||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();var Ga=e.___wasm_call_ctors=function(){return(Ga=e.___wasm_call_ctors=e.asm.wb).apply(null,arguments)};
e._emsc_load_data=function(){return(e._emsc_load_data=e.asm.xb).apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return(e.___em_js__emsc_fs_init=e.asm.yb).apply(null,arguments)};e.___em_js__emsc_load_file=function(){return(e.___em_js__emsc_load_file=e.asm.zb).apply(null,arguments)};var Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Ab).apply(null,arguments)};
e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Bb).apply(null,arguments)};var Jb=e.__sapp_html5_get_ask_leave_site=function(){return(Jb=e.__sapp_html5_get_ask_leave_site=e.asm.Cb).apply(null,arguments)},Kb=e.__sapp_emsc_begin_drop=function(){return(Kb=e.__sapp_emsc_begin_drop=e.asm.Db).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Eb).apply(null,arguments)};
var Lb=e.__sapp_emsc_end_drop=function(){return(Lb=e.__sapp_emsc_end_drop=e.asm.Fb).apply(null,arguments)};e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Gb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Hb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Ib).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.Jb).apply(null,arguments)};e.___em_js__sapp_js_add_beforeunload_listener=function(){return(e.___em_js__sapp_js_add_beforeunload_listener=e.asm.Kb).apply(null,arguments)};e.___em_js__sapp_js_remove_beforeunload_listener=function(){return(e.___em_js__sapp_js_remove_beforeunload_listener=e.asm.Lb).apply(null,arguments)};
e.___em_js__sapp_js_add_clipboard_listener=function(){return(e.___em_js__sapp_js_add_clipboard_listener=e.asm.Mb).apply(null,arguments)};e.___em_js__sapp_js_remove_clipboard_listener=function(){return(e.___em_js__sapp_js_remove_clipboard_listener=e.asm.Nb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Ob).apply(null,arguments)};
e.___em_js__sapp_js_add_dragndrop_listeners=function(){return(e.___em_js__sapp_js_add_dragndrop_listeners=e.asm.Pb).apply(null,arguments)};e.___em_js__sapp_js_dropped_file_size=function(){return(e.___em_js__sapp_js_dropped_file_size=e.asm.Qb).apply(null,arguments)};e.___em_js__sapp_js_fetch_dropped_file=function(){return(e.___em_js__sapp_js_fetch_dropped_file=e.asm.Rb).apply(null,arguments)};
e.___em_js__sapp_js_remove_dragndrop_listeners=function(){return(e.___em_js__sapp_js_remove_dragndrop_listeners=e.asm.Sb).apply(null,arguments)};e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.Tb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.Ub).apply(null,arguments)};
e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm.Vb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Wb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Xb).apply(null,arguments)};var Nb=e.__saudio_emsc_pull=function(){return(Nb=e.__saudio_emsc_pull=e.asm.Yb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Zb).apply(null,arguments)};
e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm._b).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.$b).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.ac).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.bc).apply(null,arguments)};
e.___em_js__sargs_js_parse_url=function(){return(e.___em_js__sargs_js_parse_url=e.asm.cc).apply(null,arguments)};var P=e._malloc=function(){return(P=e._malloc=e.asm.dc).apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.ec).apply(null,arguments)};
var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.fc).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.gc).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.hc).apply(null,arguments)},Pb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Qb(){Pb||Rb();Pb||(K=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,e.calledRun=!0,!ma)){Oa(Ca);Oa(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Sb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=B(4*(f+1));F[h>>2]=va(aa);for(var g=1;g<f;g++)F[(h>>2)+g]=va(c[g-1]);F[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Fa.unshift(c);Oa(Fa)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Oa(Ba);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Rb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Sb=!0;e.noInitialRun&&(Sb=!1);noExitRuntime=!0;Rb();
