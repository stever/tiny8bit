
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],k="./this.program",ca=(a,b)=>{throw b;},da="object"==typeof window,m="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,v="",fa,ha,ia,fs,ja,ka;
if(ea)v=m?require("path").dirname(v)+"/":__dirname+"/",ka=()=>{ja||(fs=require("fs"),ja=require("path"))},fa=function(a,b){ka();a=ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},ha=(a,b,c)=>{ka();a=ja.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(k=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof
la))throw a;}),process.on("unhandledRejection",function(a){throw a;}),ca=(a,b)=>{if(noExitRuntime||0<ma)throw process.exitCode=a,b;b instanceof la||x("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||m)m?v=self.location.href:"undefined"!=typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",
a,!1);b.send(null);return b.responseText},m&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var na=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(k=f.thisProgram);f.quit&&(ca=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&oa("no native wasm support detected");var pa,qa=!1;
function ra(a,b,c,d){var e={string:function(q){var r=0;if(null!==q&&void 0!==q&&0!==q){var u=(q.length<<2)+1;r=z(u);A(q,B,r,u)}return r},array:function(q){var r=z(q.length);C.set(q,r);return r}};a=f["_"+a];var g=[],h=0;if(d)for(var n=0;n<d.length;n++){var p=e[c[n]];p?(0===h&&(h=sa()),g[n]=p(d[n])):g[n]=d[n]}c=a.apply(null,g);return c=function(q){0!==h&&ta(h);return"string"===b?D(q):"boolean"===b?!!q:q}(c)}var ua="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function va(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ua)return ua.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var h=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|h:(e&7)<<18|g<<12|h<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?va(B,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var n=a.charCodeAt(++g);h=65536+((h&1023)<<10)|n&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-e}
function wa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function xa(a){var b=wa(a)+1,c=z(b);A(a,C,c,b);return c}var ya,C,B,za,Aa,E,Ba,F,G;
function Ca(){var a=pa.buffer;ya=a;f.HEAP8=C=new Int8Array(a);f.HEAP16=za=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=Aa=new Uint16Array(a);f.HEAPU32=Ba=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var Da,Ea=[],Fa=[],Ga=[],Ha=[],Ia=[],ma=0;function Ja(){var a=f.preRun.shift();Ea.unshift(a)}var H=0,Ka=null,I=null;f.preloadedImages={};f.preloadedAudios={};
function oa(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);qa=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function La(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="vz80r.wasm";if(!La()){var Ma=J;J=f.locateFile?f.locateFile(Ma,v):v+Ma}function Na(){var a=J;try{if(a==J&&y)return new Uint8Array(y);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){oa(b)}}
function Oa(){if(!y&&(da||m)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Na()});if(ha)return new Promise(function(a,b){ha(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Na()})}
function Pa(){var a=document.getElementById("picker"),b=a.files[0];a.value=null;console.log("--- load file:");console.log("  name: "+b.name);console.log("  type: "+b.type);console.log("  size: "+b.size);256E3>b.size?(a=new FileReader,a.onload=function(c){console.log("file loaded!");(c=c.target.result)?(console.log("content length: "+c.byteLength),c=new Uint8Array(c),0==ra("util_emsc_loadfile","int",["string","array","number"],[b.name,c,c.length])&&console.warn("util_emsc_loadfile() failed!")):console.warn("load result empty!")},
a.readAsArrayBuffer(b)):console.warn("ignoring file because it is too big")}function Qa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Vc;"number"==typeof c?void 0===b.sc?K(c)():K(c)(b.sc):c(void 0===b.sc?null:b.sc)}}}var Ra=[];function K(a){var b=Ra[a];b||(a>=Ra.length&&(Ra.length=a+1),Ra[a]=b=Da.get(a));return b}var Sa=[null,[],[]],Ta={},Ua;Ua=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var Va=0;
function Wa(){for(var a=L.length-1;0<=a;--a)Xa(a);L=[];Ya=[]}var Ya=[];function Za(){if(Va&&$a.kc)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.dd.apply(null,b.Rc)}}var L=[];function Xa(a){var b=L[a];b.target.removeEventListener(b.ac,b.Ic,b.bc);L.splice(a,1)}
function M(a){function b(d){++Va;$a=a;Za();a.dc(d);Za();--Va}if(a.cc)a.Ic=b,a.target.addEventListener(a.ac,b,a.bc),L.push(a),ab||(Ha.push(Wa),ab=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].ac==a.ac&&Xa(c--)}function bb(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var ab,$a,cb,db,eb,fb,gb,hb,ib,jb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function N(a){a=2<a?D(a):a;return jb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function kb(a){return 0>jb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function lb(a,b,c,d,e,g){cb||(cb=O(256));a={target:N(a),ac:g,cc:d,dc:function(h){h=h||event;var n=h.target.id?h.target.id:"",p=cb;A(bb(h.target),B,p+0,128);A(n,B,p+128,128);K(d)(e,p,b)&&h.preventDefault()},bc:c};M(a)}
function mb(a,b,c,d,e,g){db||(db=O(176));a={target:N(a),kc:!0,ac:g,cc:d,dc:function(h){var n=db;G[n>>3]=h.timeStamp;var p=n>>2;E[p+2]=h.location;E[p+3]=h.ctrlKey;E[p+4]=h.shiftKey;E[p+5]=h.altKey;E[p+6]=h.metaKey;E[p+7]=h.repeat;E[p+8]=h.charCode;E[p+9]=h.keyCode;E[p+10]=h.which;A(h.key||"",B,n+44,32);A(h.code||"",B,n+76,32);A(h.char||"",B,n+108,32);A(h.locale||"",B,n+140,32);K(d)(e,n,b)&&h.preventDefault()},bc:c};M(a)}
function nb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;za[2*a+20]=b.button;za[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=kb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function Q(a,b,c,d,e,g){eb||(eb=O(72));a=N(a);M({target:a,kc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,ac:g,cc:d,dc:function(h){h=h||event;nb(eb,h,a);K(d)(e,eb,b)&&h.preventDefault()},bc:c})}function ob(a,b,c,d,e){fb||(fb=O(260));M({target:a,ac:e,cc:d,dc:function(g){g=g||event;var h=fb,n=document.pointerLockElement||document.fc||document.vc||document.uc;E[h>>2]=!!n;var p=n&&n.id?n.id:"";A(bb(n),B,h+4,128);A(p,B,h+132,128);K(d)(20,h,b)&&g.preventDefault()},bc:c})}
function pb(a,b,c,d,e){M({target:a,ac:e,cc:d,dc:function(g){g=g||event;K(d)(38,0,b)&&g.preventDefault()},bc:c})}
function qb(a,b,c,d){gb||(gb=O(36));a=N(a);M({target:a,ac:"resize",cc:d,dc:function(e){e=e||event;if(e.target==a){var g=document.body;if(g){var h=gb;E[h>>2]=e.detail;E[h+4>>2]=g.clientWidth;E[h+8>>2]=g.clientHeight;E[h+12>>2]=innerWidth;E[h+16>>2]=innerHeight;E[h+20>>2]=outerWidth;E[h+24>>2]=outerHeight;E[h+28>>2]=pageXOffset;E[h+32>>2]=pageYOffset;K(d)(10,h,b)&&e.preventDefault()}}},bc:c})}
function rb(a,b,c,d,e,g){hb||(hb=O(1696));a=N(a);M({target:a,kc:"touchstart"==g||"touchend"==g,ac:g,cc:d,dc:function(h){for(var n,p={},q=h.touches,r=0;r<q.length;++r)n=q[r],n.xc=n.yc=0,p[n.identifier]=n;for(r=0;r<h.changedTouches.length;++r)n=h.changedTouches[r],n.xc=1,p[n.identifier]=n;for(r=0;r<h.targetTouches.length;++r)p[h.targetTouches[r].identifier].yc=1;q=hb;G[q>>3]=h.timeStamp;var u=q>>2;E[u+3]=h.ctrlKey;E[u+4]=h.shiftKey;E[u+5]=h.altKey;E[u+6]=h.metaKey;u+=7;var X=kb(a),l=0;for(r in p)if(n=
p[r],E[u]=n.identifier,E[u+1]=n.screenX,E[u+2]=n.screenY,E[u+3]=n.clientX,E[u+4]=n.clientY,E[u+5]=n.pageX,E[u+6]=n.pageY,E[u+7]=n.xc,E[u+8]=n.yc,E[u+9]=n.clientX-X.left,E[u+10]=n.clientY-X.top,u+=13,31<++l)break;E[q+8>>2]=l;K(d)(e,q,b)&&h.preventDefault()},bc:c})}function sb(a,b,c,d,e,g){a={target:N(a),ac:g,cc:d,dc:function(h){h=h||event;K(d)(e,0,b)&&h.preventDefault()},bc:c};M(a)}
function tb(a,b,c,d){ib||(ib=O(104));M({target:a,kc:!0,ac:"wheel",cc:d,dc:function(e){e=e||event;var g=ib;nb(g,e,a);G[g+72>>3]=e.deltaX;G[g+80>>3]=e.deltaY;G[g+88>>3]=e.deltaZ;E[g+96>>2]=e.deltaMode;K(d)(9,g,b)&&e.preventDefault()},bc:c})}
function ub(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,g){b.drawArraysInstancedANGLE(c,d,e,g)},a.drawElementsInstanced=function(c,d,e,g,h){b.drawElementsInstancedANGLE(c,d,e,g,h)})}
function vb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function wb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function xb(a){a.Zc=a.getExtension("WEBGL_multi_draw")}
var yb=1,zb=[],R=[],Ab=[],Bb=[],Cb=[],S=[],Db=[],Eb={};function T(a){Fb||(Fb=a)}function Gb(a){for(var b=yb++,c=a.length;c<b;c++)a[c]=null;return b}function Hb(a,b){a.fc||(a.fc=a.getContext,a.getContext=function(d,e){e=a.fc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Ib(c,b):0}function Ib(a,b){var c=Gb(Db),d={Xc:c,attributes:b,version:b.Lc,rc:a};a.canvas&&(a.canvas.Qc=d);Db[c]=d;("undefined"==typeof b.wc||b.wc)&&Jb(d);return c}
function Jb(a){a||(a=Kb);if(!a.Kc){a.Kc=!0;var b=a.rc;ub(b);vb(b);wb(b);b.Tc=b.getExtension("EXT_disjoint_timer_query");xb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Fb,Kb,Lb=["default","low-power","high-performance"],Nb={};
function Ob(){if(!Pb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:k||"./this.program"},b;for(b in Nb)void 0===Nb[b]?delete a[b]:a[b]=Nb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Pb=c}return Pb}var Pb;function Qb(a,b,c,d){for(var e=0;e<a;e++){var g=U[c](),h=g&&Gb(d);g?(g.name=h,d[h]=g):T(1282);E[b+4*e>>2]=h}}
function Rb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else T(1281)}function Sb(a){var b=wa(a)+1,c=O(b);A(a,B,c,b);return c}
function Tb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ub(a,b,c,d,e){a-=5120;a=1==a?B:4==a?E:6==a?F:5==a||28922==a?Ba:Aa;var g=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}function V(a){var b=U.Hc;if(b){var c=b.jc[a];"number"==typeof c&&(b.jc[a]=c=U.getUniformLocation(b,b.Fc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}var W=[],Y=[];function Vb(a){return 0===a%4&&(0!==a%100||0===a%400)}
function Wb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Xb=[31,29,31,30,31,30,31,31,30,31,30,31],Yb=[31,28,31,30,31,30,31,31,30,31,30,31];function Zb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Vb(a.getFullYear())?Xb:Yb)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function $b(a,b,c,d){function e(l,t,w){for(l="number"==typeof l?l.toString():l||"";l.length<t;)l=w[0]+l;return l}function g(l,t){return e(l,t,"0")}function h(l,t){function w(Mb){return 0>Mb?-1:0<Mb?1:0}var P;0===(P=w(l.getFullYear()-t.getFullYear()))&&0===(P=w(l.getMonth()-t.getMonth()))&&(P=w(l.getDate()-t.getDate()));return P}function n(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),
0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function p(l){l=Zb(new Date(l.$b+1900,0,1),l.qc);var t=new Date(l.getFullYear()+1,0,4),w=n(new Date(l.getFullYear(),0,4));t=n(t);return 0>=h(w,l)?0>=h(t,l)?l.getFullYear()+1:l.getFullYear():l.getFullYear()-1}var q=E[d+40>>2];d={Oc:E[d>>2],Nc:E[d+4>>2],oc:E[d+8>>2],ic:E[d+12>>2],ec:E[d+16>>2],$b:E[d+20>>2],pc:E[d+24>>2],qc:E[d+28>>2],ed:E[d+32>>2],Mc:E[d+
36>>2],Pc:q?D(q):""};c=D(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
X="January February March April May June July August September October November December".split(" ");q={"%a":function(l){return u[l.pc].substring(0,3)},"%A":function(l){return u[l.pc]},"%b":function(l){return X[l.ec].substring(0,3)},"%B":function(l){return X[l.ec]},"%C":function(l){return g((l.$b+1900)/100|0,2)},"%d":function(l){return g(l.ic,2)},"%e":function(l){return e(l.ic,2," ")},"%g":function(l){return p(l).toString().substring(2)},"%G":function(l){return p(l)},"%H":function(l){return g(l.oc,
2)},"%I":function(l){l=l.oc;0==l?l=12:12<l&&(l-=12);return g(l,2)},"%j":function(l){return g(l.ic+Wb(Vb(l.$b+1900)?Xb:Yb,l.ec-1),3)},"%m":function(l){return g(l.ec+1,2)},"%M":function(l){return g(l.Nc,2)},"%n":function(){return"\n"},"%p":function(l){return 0<=l.oc&&12>l.oc?"AM":"PM"},"%S":function(l){return g(l.Oc,2)},"%t":function(){return"\t"},"%u":function(l){return l.pc||7},"%U":function(l){var t=new Date(l.$b+1900,0,1),w=0===t.getDay()?t:Zb(t,7-t.getDay());l=new Date(l.$b+1900,l.ec,l.ic);return 0>
h(w,l)?g(Math.ceil((31-w.getDate()+(Wb(Vb(l.getFullYear())?Xb:Yb,l.getMonth()-1)-31)+l.getDate())/7),2):0===h(w,t)?"01":"00"},"%V":function(l){var t=new Date(l.$b+1901,0,4),w=n(new Date(l.$b+1900,0,4));t=n(t);var P=Zb(new Date(l.$b+1900,0,1),l.qc);return 0>h(P,w)?"53":0>=h(t,P)?"01":g(Math.ceil((w.getFullYear()<l.$b+1900?l.qc+32-w.getDate():l.qc+1-w.getDate())/7),2)},"%w":function(l){return l.pc},"%W":function(l){var t=new Date(l.$b,0,1),w=1===t.getDay()?t:Zb(t,0===t.getDay()?1:7-t.getDay()+1);l=
new Date(l.$b+1900,l.ec,l.ic);return 0>h(w,l)?g(Math.ceil((31-w.getDate()+(Wb(Vb(l.getFullYear())?Xb:Yb,l.getMonth()-1)-31)+l.getDate())/7),2):0===h(w,t)?"01":"00"},"%y":function(l){return(l.$b+1900).toString().substring(2)},"%Y":function(l){return l.$b+1900},"%z":function(l){l=l.Mc;var t=0<=l;l=Math.abs(l)/60;return(t?"+":"-")+String("0000"+(l/60*100+l%60)).slice(-4)},"%Z":function(l){return l.Pc},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,
"g"),q[r](d)));c=c.replace(/\0\0/g,"%");r=ac(c);if(r.length>b)return 0;C.set(r,a);return r.length-1}for(var U,bc=new Float32Array(288),Z=0;288>Z;++Z)W[Z]=bc.subarray(0,Z+1);var cc=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=cc.subarray(0,Z+1);function ac(a){var b=Array(wa(a)+1);A(a,b,0,b.length);return b}
var ic={ga:function(){return 0},eb:function(){return 0},gb:function(){},a:function(){oa("")},$a:function(a,b){if(0===a)a=Date.now();else if(1===a||4===a)a=Ua();else return E[dc()>>2]=28,-1;E[b>>2]=a/1E3|0;E[b+4>>2]=a%1E3*1E6|0;return 0},Ba:function(){document.getElementById("canvas").style.cursor="default"},Da:function(){document.getElementById("canvas").style.cursor="pointer"},Sa:function(a,b,c){a=D(a);for(var d="",e=0;e<c;e++)d+=String.fromCharCode(B[b+e]);console.log(btoa(d));b=document.createElement("a");
b.setAttribute("href","data:application/octet-stream;base64,"+btoa(d));b.setAttribute("download",a);b.style.display="none";document.body.appendChild(b);b.click();document.body.removeChild(b)},y:function(a,b){a=D(a);b=D(b);var c=document.createElement("a");c.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(b));c.setAttribute("download",a);c.style.display="none";document.body.appendChild(c);c.click();document.body.removeChild(c)},Hb:function(){f.emsc_js_onload=Pa},Gb:function(){return navigator.userAgent.includes("Macintosh")?
1:0},Pa:function(){document.getElementById("picker").click()},Ka:function(a){a=D(a);window.open(a)},ea:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=N(a);if(!a)return-4;a=kb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},bb:function(a,b,c){B.copyWithin(a,b,b+c)},Wa:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ab:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=
b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{pa.grow(e-ya.byteLength+65535>>>16);Ca();var g=1;break a}catch(h){}g=void 0}if(g)return!0}return!1},N:function(a,b,c,d){lb(a,b,c,d,12,"blur");return 0},da:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},O:function(a,b,c,d){lb(a,b,c,d,13,"focus");return 0},X:function(a,b,c,d){mb(a,b,c,d,2,"keydown");return 0},V:function(a,b,c,d){mb(a,b,c,d,1,"keypress");return 0},
W:function(a,b,c,d){mb(a,b,c,d,3,"keyup");return 0},ba:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},_:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},Z:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},$:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},aa:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Q:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.fc||document.body.vc||document.body.uc))return-1;a=N(a);if(!a)return-4;
ob(a,b,c,d,"pointerlockchange");ob(a,b,c,d,"mozpointerlockchange");ob(a,b,c,d,"webkitpointerlockchange");ob(a,b,c,d,"mspointerlockchange");return 0},P:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.fc||document.body.vc||document.body.uc))return-1;a=N(a);if(!a)return-4;pb(a,b,c,d,"pointerlockerror");pb(a,b,c,d,"mozpointerlockerror");pb(a,b,c,d,"webkitpointerlockerror");pb(a,b,c,d,"mspointerlockerror");return 0},fb:function(a,b,c,d){qb(a,b,c,d);return 0},R:function(a,
b,c,d){rb(a,b,c,d,25,"touchcancel");return 0},S:function(a,b,c,d){rb(a,b,c,d,23,"touchend");return 0},T:function(a,b,c,d){rb(a,b,c,d,24,"touchmove");return 0},U:function(a,b,c,d){rb(a,b,c,d,22,"touchstart");return 0},M:function(a,b,c,d){sb(a,b,c,d,31,"webglcontextlost");return 0},L:function(a,b,c,d){sb(a,b,c,d,32,"webglcontextrestored");return 0},Y:function(a,b,c,d){a=N(a);return"undefined"!=typeof a.onwheel?(tb(a,b,c,d),0):-1},ca:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],
antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Lb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+7],Lc:E[b+8],Yc:E[b+9],wc:E[b+10],Jc:E[b+11],$c:E[b+12],ad:E[b+13]};a=N(a);return!a||b.Jc?0:Hb(a,b)},Ta:function(a,b){a=Db[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ub(U);"OES_vertex_array_object"==b&&vb(U);"WEBGL_draw_buffers"==b&&wb(U);"WEBGL_multi_draw"==b&&xb(U);return!!a.rc.getExtension(b)},Va:function(a){a>>=2;for(var b=
0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Ua:function(a){Kb=Db[a];f.Sc=U=Kb&&Kb.rc;return!a||U?0:-5},Za:function(a,b){var c=0;Ob().forEach(function(d,e){var g=b+c;e=E[a+4*e>>2]=g;for(g=0;g<d.length;++g)C[e++>>0]=d.charCodeAt(g);C[e>>0]=0;c+=d.length+1});return 0},_a:function(a,b){var c=Ob();E[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});E[b>>2]=d;return 0},fa:function(){return 0},db:function(a,b,c,d){a=Ta.Wc(a);b=Ta.Uc(a,b,c);E[d>>2]=b;return 0},Xa:function(){},
cb:function(a,b,c,d){for(var e=0,g=0;g<c;g++){var h=E[b>>2],n=E[b+4>>2];b+=8;for(var p=0;p<n;p++){var q=B[h+p],r=Sa[a];0===q||10===q?((1===a?na:x)(va(r,0)),r.length=0):r.push(q)}e+=n}E[d>>2]=e;return 0},c:function(a){U.activeTexture(a)},B:function(a,b){U.attachShader(R[a],S[b])},d:function(a,b){U.bindBuffer(a,zb[b])},ka:function(a,b){U.bindFramebuffer(a,Ab[b])},wa:function(a,b){U.bindRenderbuffer(a,Bb[b])},b:function(a,b){U.bindTexture(a,Cb[b])},G:function(a,b,c,d){U.blendColor(a,b,c,d)},H:function(a,
b){U.blendEquationSeparate(a,b)},I:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},ya:function(a,b,c,d){U.bufferData(a,c?B.subarray(c,c+b):b,d)},l:function(a,b,c,d){U.bufferSubData(a,b,B.subarray(d,d+c))},zb:function(a){U.clear(a)},Cb:function(a,b,c,d){U.clearColor(a,b,c,d)},Bb:function(a){U.clearDepth(a)},Ab:function(a){U.clearStencil(a)},m:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ma:function(a){U.compileShader(S[a])},ta:function(a,b,c,d,e,g,h,n){U.compressedTexImage2D(a,b,c,d,e,g,n?B.subarray(n,
n+h):null)},ra:function(){var a=Gb(R),b=U.createProgram();b.name=a;b.nc=b.lc=b.mc=0;b.tc=1;R[a]=b;return a},oa:function(a){var b=Gb(S);S[b]=U.createShader(a);return b},D:function(a){U.cullFace(a)},Fa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=zb[d];e&&(U.deleteBuffer(e),e.name=0,zb[d]=null)}},i:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=Ab[d];e&&(U.deleteFramebuffer(e),e.name=0,Ab[d]=null)}},w:function(a){if(a){var b=R[a];b?(U.deleteProgram(b),b.name=0,R[a]=null):T(1281)}},
K:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=Bb[d];e&&(U.deleteRenderbuffer(e),e.name=0,Bb[d]=null)}},s:function(a){if(a){var b=S[a];b?(U.deleteShader(b),S[a]=null):T(1281)}},Ea:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=Cb[d];e&&(U.deleteTexture(e),e.name=0,Cb[d]=null)}},v:function(a){U.depthFunc(a)},u:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},J:function(a){U.disableVertexAttribArray(a)},ib:function(a,b,c){U.drawArrays(a,b,c)},jb:function(a,b,c,d){U.drawArraysInstanced(a,
b,c,d)},kb:function(a,b,c,d){U.drawElements(a,b,c,d)},lb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},vb:function(a){U.enableVertexAttribArray(a)},E:function(a){U.frontFace(a)},za:function(a,b){Qb(a,b,"createBuffer",zb)},xa:function(a,b){Qb(a,b,"createRenderbuffer",Bb)},ua:function(a,b){Qb(a,b,"createTexture",Cb)},Db:function(a,b){return U.getAttribLocation(R[a],D(b))},f:function(a,b){Rb(a,b)},pa:function(a,b,c,d){a=U.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");
b=0<b&&d?A(a,B,d,b):0;c&&(E[c>>2]=b)},A:function(a,b,c){if(c)if(a>=yb)T(1281);else if(a=R[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.nc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.nc=Math.max(a.nc,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.nc}else if(35722==b){if(!a.lc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.lc=Math.max(a.lc,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.lc}else if(35381==b){if(!a.mc)for(b=0;b<U.getProgramParameter(a,
35382);++b)a.mc=Math.max(a.mc,U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.mc}else E[c>>2]=U.getProgramParameter(a,b);else T(1281)},Eb:function(a,b,c,d){a=U.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(E[c>>2]=b)},la:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(S[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(S[a],b):T(1281)},Ga:function(a){var b=Eb[a];
if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Sb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||T(1280);b=b&&Sb(b);break;case 7938:b=Sb("OpenGL ES 2.0 ("+U.getParameter(7938)+")");break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Sb(b);break;default:T(1280)}Eb[a]=b}return b},
k:function(a,b){b=D(b);if(a=R[a]){var c=a,d=c.jc,e=c.Gc,g;if(!d)for(c.jc=d={},c.Fc={},g=0;g<U.getProgramParameter(c,35718);++g){var h=U.getActiveUniform(c,g);var n=h.name;h=h.size;var p=Tb(n);p=0<p?n.slice(0,p):n;var q=c.tc;c.tc+=h;e[p]=[h,q];for(n=0;n<h;++n)d[q]=n,c.Fc[q++]=p}c=a.jc;d=0;e=b;g=Tb(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.Gc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else T(1281);return-1},qa:function(a){a=R[a];U.linkProgram(a);a.jc=0;
a.Gc={}},F:function(a,b){U.polygonOffset(a,b)},va:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},q:function(a,b,c,d){U.scissor(a,b,c,d)},na:function(a,b,c,d){for(var e="",g=0;g<b;++g){var h=d?E[d+4*g>>2]:-1;e+=D(E[c+4*g>>2],0>h?void 0:h)}U.shaderSource(S[a],e)},Ca:function(a,b,c){U.stencilFunc(a,b,c)},ja:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},t:function(a){U.stencilMask(a)},Aa:function(a,b,c){U.stencilOp(a,b,c)},ia:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},sa:function(a,b,c,d,
e,g,h,n,p){U.texImage2D(a,b,c,d,e,g,h,n,p?Ub(n,h,d,e,p):null)},h:function(a,b,c){U.texParameteri(a,b,c)},hb:function(a,b,c,d,e,g,h,n,p){var q=null;p&&(q=Ub(n,h,e,g,p));U.texSubImage2D(a,b,c,d,e,g,h,n,q)},ub:function(a,b,c){if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);U.uniform1fv(V(a),d)},z:function(a,b){U.uniform1i(V(a),b)},qb:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1iv(V(a),d)},
tb:function(a,b,c){if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(V(a),d)},pb:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2iv(V(a),d)},sb:function(a,b,c){if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(V(a),d)},ob:function(a,
b,c){if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3iv(V(a),d)},rb:function(a,b,c){if(72>=b){var d=W[4*b-1],e=F;c>>=2;for(var g=0;g<4*b;g+=4){var h=c+g;d[g]=e[h];d[g+1]=e[h+1];d[g+2]=e[h+2];d[g+3]=e[h+3]}}else d=F.subarray(c>>2,c+16*b>>2);U.uniform4fv(V(a),d)},nb:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*
e+12)>>2];else d=E.subarray(c>>2,c+16*b>>2);U.uniform4iv(V(a),d)},mb:function(a,b,c,d){if(18>=b){var e=W[16*b-1],g=F;d>>=2;for(var h=0;h<16*b;h+=16){var n=d+h;e[h]=g[n];e[h+1]=g[n+1];e[h+2]=g[n+2];e[h+3]=g[n+3];e[h+4]=g[n+4];e[h+5]=g[n+5];e[h+6]=g[n+6];e[h+7]=g[n+7];e[h+8]=g[n+8];e[h+9]=g[n+9];e[h+10]=g[n+10];e[h+11]=g[n+11];e[h+12]=g[n+12];e[h+13]=g[n+13];e[h+14]=g[n+14];e[h+15]=g[n+15]}}else e=F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(V(a),!!c,e)},j:function(a){a=R[a];U.useProgram(a);U.Hc=a},
wb:function(a,b){U.vertexAttribDivisor(a,b)},xb:function(a,b,c,d,e,g){U.vertexAttribPointer(a,b,c,!!d,e,g)},r:function(a,b,c,d){U.viewport(a,b,c,d)},Ra:function(){f.zc=function(a){0!=ec()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.zc)},Qa:function(){f.Ec=function(a){a=a.clipboardData.getData("text");ra("_sapp_emsc_onpaste","void",["string"],[a])};window.addEventListener("paste",f.Ec)},Oa:function(a){f.bd=[];a=D(a);a=document.getElementById(a);f.Ac=function(b){b.stopPropagation();
b.preventDefault()};f.Bc=function(b){b.stopPropagation();b.preventDefault()};f.Cc=function(b){b.stopPropagation();b.preventDefault()};f.Dc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.cd=c;fc(c.length);var d;for(d=0;d<c.length;d++)ra("_sapp_emsc_drop","void",["number","string"],[d,c[d].name]);gc(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Ac,!1);a.addEventListener("dragleave",f.Bc,!1);a.addEventListener("dragover",f.Cc,!1);a.addEventListener("drop",f.Dc,
!1)},Ia:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){hc()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},yb:function(a){a=D(a);f.hc=document.getElementById(a);f.hc||console.log("sokol_app.h: invalid target:"+a);f.hc.requestPointerLock||
console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Na:function(){window.removeEventListener("beforeunload",f.zc)},Ma:function(){window.removeEventListener("paste",f.Ec)},La:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Ac);a.removeEventListener("dragleave",f.Bc);a.removeEventListener("dragover",f.Cc);a.removeEventListener("drop",f.Dc)},x:function(){f.hc&&f.hc.requestPointerLock&&f.hc.requestPointerLock()},Ha:function(a,b,c){var d=document.createElement("canvas");
d.width=a;d.height=b;var e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(B.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Ja:function(a){a=D(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");
b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Fb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())ra("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},C:function(){return navigator.userAgent.includes("Macintosh")?1:0},Ya:function(a,b,c,d){return $b(a,
b,c,d)}};
(function(){function a(e){f.asm=e.exports;pa=f.asm.Ib;Ca();Da=f.asm.Wb;Fa.unshift(f.asm.Jb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ka&&(clearInterval(Ka),Ka=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Oa().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(e,function(g){x("failed to asynchronously prepare wasm: "+g);oa(g)})}var d={a:ic};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||La()||J.startsWith("file://")||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){x("wasm streaming compile failed: "+g);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Jb).apply(null,arguments)};f._util_emsc_loadfile=function(){return(f._util_emsc_loadfile=f.asm.Kb).apply(null,arguments)};var O=f._malloc=function(){return(O=f._malloc=f.asm.Lb).apply(null,arguments)},hc=f.__sapp_emsc_notify_keyboard_hidden=function(){return(hc=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Mb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Nb).apply(null,arguments)};
var ec=f.__sapp_html5_get_ask_leave_site=function(){return(ec=f.__sapp_html5_get_ask_leave_site=f.asm.Ob).apply(null,arguments)},fc=f.__sapp_emsc_begin_drop=function(){return(fc=f.__sapp_emsc_begin_drop=f.asm.Pb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Qb).apply(null,arguments)};var gc=f.__sapp_emsc_end_drop=function(){return(gc=f.__sapp_emsc_end_drop=f.asm.Rb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Sb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Tb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Ub).apply(null,arguments)};
var dc=f.___errno_location=function(){return(dc=f.___errno_location=f.asm.Vb).apply(null,arguments)},sa=f.stackSave=function(){return(sa=f.stackSave=f.asm.Xb).apply(null,arguments)},ta=f.stackRestore=function(){return(ta=f.stackRestore=f.asm.Yb).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Zb).apply(null,arguments)},jc;function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function kc(){jc||lc();jc||(I=kc)};
function lc(a){function b(){if(!jc&&(jc=!0,f.calledRun=!0,!qa)){Qa(Fa);Qa(Ga);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(mc){var c=a,d=f._main;c=c||[];var e=c.length+1,g=z(4*(e+1));E[g>>2]=xa(k);for(var h=1;h<e;h++)E[(g>>2)+h]=xa(c[h-1]);E[(g>>2)+e]=0;try{var n=d(e,g);if(!(noExitRuntime||0<ma)){if(f.onExit)f.onExit(n);qa=!0}ca(n,new la(n))}catch(p){p instanceof la||"unwind"==p||ca(1,p)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=
f.postRun.shift(),Ia.unshift(c);Qa(Ia)}}a=a||ba;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ja();Qa(Ea);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=lc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var mc=!0;f.noInitialRun&&(mc=!1);lc();
