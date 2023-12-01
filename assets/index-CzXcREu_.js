var ql=Object.defineProperty;var Yl=(s,e,t)=>e in s?ql(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var us=(s,e,t)=>(Yl(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Ei(){}function $c(s){return s()}function Wa(){return Object.create(null)}function sr(s){s.forEach($c)}function Jc(s){return typeof s=="function"}function Kl(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}function Zl(s){return Object.keys(s).length===0}function na(s,e,t){s.insertBefore(e,t||null)}function Xr(s){s.parentNode&&s.parentNode.removeChild(s)}function Qc(s){return document.createElement(s)}function $l(s){return document.createTextNode(s)}function Jl(){return $l(" ")}function Xa(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function jr(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function Ql(s){return Array.from(s.childNodes)}let Qi;function Yi(s){Qi=s}function eu(){if(!Qi)throw new Error("Function called outside component initialization");return Qi}function tu(s){eu().$$.on_mount.push(s)}const _i=[],ja=[];let vi=[];const qa=[],nu=Promise.resolve();let ia=!1;function iu(){ia||(ia=!0,nu.then(el))}function ra(s){vi.push(s)}const hs=new Set;let Zn=0;function el(){if(Zn!==0)return;const s=Qi;do{try{for(;Zn<_i.length;){const e=_i[Zn];Zn++,Yi(e),ru(e.$$)}}catch(e){throw _i.length=0,Zn=0,e}for(Yi(null),_i.length=0,Zn=0;ja.length;)ja.pop()();for(let e=0;e<vi.length;e+=1){const t=vi[e];hs.has(t)||(hs.add(t),t())}vi.length=0}while(_i.length);for(;qa.length;)qa.pop()();ia=!1,hs.clear(),Yi(s)}function ru(s){if(s.fragment!==null){s.update(),sr(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(ra)}}function su(s){const e=[],t=[];vi.forEach(n=>s.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),vi=e}const au=new Set;function ou(s,e){s&&s.i&&(au.delete(s),s.i(e))}function cu(s,e,t){const{fragment:n,after_update:i}=s.$$;n&&n.m(e,t),ra(()=>{const r=s.$$.on_mount.map($c).filter(Jc);s.$$.on_destroy?s.$$.on_destroy.push(...r):sr(r),s.$$.on_mount=[]}),i.forEach(ra)}function lu(s,e){const t=s.$$;t.fragment!==null&&(su(t.after_update),sr(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function uu(s,e){s.$$.dirty[0]===-1&&(_i.push(s),iu(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function hu(s,e,t,n,i,r,a=null,o=[-1]){const c=Qi;Yi(s);const l=s.$$={fragment:null,ctx:[],props:r,update:Ei,not_equal:i,bound:Wa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Wa(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let u=!1;if(l.ctx=t?t(s,e.props||{},(h,f,...d)=>{const _=d.length?d[0]:f;return l.ctx&&i(l.ctx[h],l.ctx[h]=_)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](_),u&&uu(s,h)),f}):[],l.update(),u=!0,sr(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const h=Ql(e.target);l.fragment&&l.fragment.l(h),h.forEach(Xr)}else l.fragment&&l.fragment.c();e.intro&&ou(s.$$.fragment),cu(s,e.target,e.anchor),el()}Yi(c)}class du{constructor(){us(this,"$$");us(this,"$$set")}$destroy(){lu(this,1),this.$destroy=Ei}$on(e,t){if(!Jc(t))return Ei;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Zl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fu);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="158",$n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,Ya=1,mu=2,tl=1,gu=2,ln=3,fn=0,Rt=1,jt=2,bn=0,yi=1,Ka=2,Za=3,$a=4,_u=5,Bn=100,xu=101,vu=102,Ja=103,Qa=104,yu=200,Mu=201,Su=202,Eu=203,sa=204,aa=205,bu=206,Tu=207,Au=208,wu=209,Ru=210,Cu=211,Lu=212,Pu=213,Iu=214,Du=0,Nu=1,Uu=2,qr=3,Ou=4,Fu=5,Bu=6,ku=7,nl=0,zu=1,Hu=2,Tn=0,Gu=1,Vu=2,Wu=3,Xu=4,ju=5,eo="attached",qu="detached",il=300,bi=301,Ti=302,oa=303,ca=304,es=306,Xn=1e3,Dt=1001,er=1002,dt=1003,Yr=1004,Ki=1005,wt=1006,ya=1007,wn=1008,An=1009,Yu=1010,Ku=1011,Ma=1012,rl=1013,En=1014,un=1015,tr=1016,sl=1017,al=1018,Gn=1020,Zu=1021,Nt=1023,$u=1024,Ju=1025,Vn=1026,Ai=1027,Qu=1028,ol=1029,eh=1030,cl=1031,ll=1033,ds=33776,fs=33777,ps=33778,ms=33779,to=35840,no=35841,io=35842,ro=35843,th=36196,so=37492,ao=37496,oo=37808,co=37809,lo=37810,uo=37811,ho=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,xo=37818,vo=37819,yo=37820,Mo=37821,gs=36492,So=36494,Eo=36495,nh=36283,bo=36284,To=36285,Ao=36286,wi=2300,jn=2301,_s=2302,wo=2400,Ro=2401,Co=2402,ih=2500,rh=0,ul=1,la=2,hl=3e3,Wn=3001,sh=3200,ah=3201,dl=0,oh=1,Ut="",rt="srgb",vt="srgb-linear",Sa="display-p3",ts="display-p3-linear",Kr="linear",it="srgb",Zr="rec709",$r="p3",Qn=7680,Lo=519,ch=512,lh=513,uh=514,hh=515,dh=516,fh=517,ph=518,mh=519,ua=35044,Po="300 es",ha=1035,hn=2e3,Jr=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const Zi=Math.PI/180,Ri=180/Math.PI;function qt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[s&255]+yt[s>>8&255]+yt[s>>16&255]+yt[s>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function Ea(s,e){return(s%e+e)%e}function gh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _h(s,e,t){return s!==e?(t-s)/(e-s):0}function $i(s,e,t){return(1-t)*s+t*e}function xh(s,e,t,n){return $i(s,e,1-Math.exp(-t*n))}function vh(s,e=1){return e-Math.abs(Ea(s,e*2)-e)}function yh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Mh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Sh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Eh(s,e){return s+Math.random()*(e-s)}function bh(s){return s*(.5-Math.random())}function Th(s){s!==void 0&&(Io=s);let e=Io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ah(s){return s*Zi}function wh(s){return s*Ri}function da(s){return(s&s-1)===0&&s!==0}function fl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*_,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*_,o*l);break;case"ZYZ":s.set(c*_,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nr={DEG2RAD:Zi,RAD2DEG:Ri,generateUUID:qt,clamp:xt,euclideanModulo:Ea,mapLinear:gh,inverseLerp:_h,lerp:$i,damp:xh,pingpong:vh,smoothstep:yh,smootherstep:Mh,randInt:Sh,randFloat:Eh,randFloatSpread:bh,seededRandom:Th,degToRad:Ah,radToDeg:wh,isPowerOfTwo:da,ceilPowerOfTwo:fl,floorPowerOfTwo:Qr,setQuaternionFromProperEuler:Rh,normalize:et,denormalize:Zt};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,r,a,o,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],v=i[4],S=i[7],b=i[2],C=i[5],A=i[8];return r[0]=a*g+o*M+c*b,r[3]=a*m+o*v+c*C,r[6]=a*p+o*S+c*A,r[1]=l*g+u*M+h*b,r[4]=l*m+u*v+h*C,r[7]=l*p+u*S+h*A,r[2]=f*g+d*M+_*b,r[5]=f*m+d*v+_*C,r[8]=f*p+d*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new je;function pl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ch(){const s=ir("canvas");return s.style.display="block",s}const Do={};function Ji(s){s in Do||(Do[s]=!0,console.warn(s))}const No=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uo=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hr={[vt]:{transfer:Kr,primaries:Zr,toReference:s=>s,fromReference:s=>s},[rt]:{transfer:it,primaries:Zr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ts]:{transfer:Kr,primaries:$r,toReference:s=>s.applyMatrix3(Uo),fromReference:s=>s.applyMatrix3(No)},[Sa]:{transfer:it,primaries:$r,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Uo),fromReference:s=>s.applyMatrix3(No).convertLinearToSRGB()}},Lh=new Set([vt,ts]),Je={enabled:!0,_workingColorSpace:vt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=hr[e].toReference,i=hr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return hr[s].primaries},getTransfer:function(s){return s===Ut?Kr:hr[s].transfer}};function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ei;class ml{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=ir("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ys(i[a].image)):r.push(ys(i[a]))}else r=ys(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ys(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ml.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class ft extends Kn{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,n=Dt,i=Dt,r=wt,a=wn,o=Nt,c=An,l=ft.DEFAULT_ANISOTROPY,u=Ut){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=qt(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wn?rt:Ut),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?Wn:hl}set encoding(e){Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wn?rt:Ut}}ft.DEFAULT_IMAGE=null;ft.DEFAULT_MAPPING=il;ft.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,S=(d+1)/2,b=(p+1)/2,C=(u+f)/4,A=(h+g)/4,B=(_+m)/4;return v>S&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=A/n):S>b?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=B/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=B/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?rt:Ut),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gl extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nh extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==f||l!==d||u!==_){let m=1-o;const p=c*f+l*d+u*_+h*g,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,p*M);m=Math.sin(m*C)/b,o=Math.sin(o*C)/b}const S=o*M;if(c=c*m+f*S,l=l*m+d*S,u=u*m+_*S,h=h*m+g*S,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-o*d,e[t+2]=l*_+u*d+o*f-c*h,e[t+3]=u*_-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),d=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ms=new W,Oo=new Ht;class pn{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(r,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),fr.subVectors(this.max,Bi),ti.subVectors(e.a,Bi),ni.subVectors(e.b,Bi),ii.subVectors(e.c,Bi),mn.subVectors(ni,ti),gn.subVectors(ii,ni),In.subVectors(ti,ii);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-In.z,In.y,mn.z,0,-mn.x,gn.z,0,-gn.x,In.z,0,-In.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-In.y,In.x,0];return!Ss(t,ti,ni,ii,fr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,ti,ni,ii,fr))?!1:(pr.crossVectors(mn,gn),t=[pr.x,pr.y,pr.z],Ss(t,ti,ni,ii,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new W,new W,new W,new W,new W,new W,new W,new W],Gt=new W,dr=new pn,ti=new W,ni=new W,ii=new W,mn=new W,gn=new W,In=new W,Bi=new W,fr=new W,pr=new W,Dn=new W;function Ss(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Dn.fromArray(s,r);const o=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),c=e.dot(Dn),l=t.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Uh=new pn,ki=new W,Es=new W;class Jt{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Es)),this.expandByPoint(ki.copy(e.center).sub(Es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new W,bs=new W,mr=new W,_n=new W,Ts=new W,gr=new W,As=new W;class ar{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bs.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(bs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(mr),o=_n.dot(this.direction),c=-_n.dot(mr),l=_n.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*c-o,f=a*o-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(bs).addScaledVector(mr,f),d}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,i,r){Ts.subVectors(t,e),gr.subVectors(n,e),As.crossVectors(Ts,gr);let a=this.direction.dot(As),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const c=o*this.direction.dot(gr.crossVectors(_n,gr));if(c<0)return null;const l=o*this.direction.dot(Ts.cross(_n));if(l<0||c+l>a)return null;const u=-o*_n.dot(As);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,r,a,o,c,l,u,h,f,d,_,g,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,f,d,_,g,m)}set(e,t,n,i,r,a,o,c,l,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,g=l*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,g=l*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oh,e,Fh)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),xn.crossVectors(n,Pt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),xn.crossVectors(n,Pt)),xn.normalize(),_r.crossVectors(Pt,xn),i[0]=xn.x,i[4]=_r.x,i[8]=Pt.x,i[1]=xn.y,i[5]=_r.y,i[9]=Pt.y,i[2]=xn.z,i[6]=_r.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],v=n[7],S=n[11],b=n[15],C=i[0],A=i[4],B=i[8],E=i[12],R=i[1],Y=i[5],L=i[9],H=i[13],x=i[2],O=i[6],$=i[10],G=i[14],oe=i[3],X=i[7],Q=i[11],I=i[15];return r[0]=a*C+o*R+c*x+l*oe,r[4]=a*A+o*Y+c*O+l*X,r[8]=a*B+o*L+c*$+l*Q,r[12]=a*E+o*H+c*G+l*I,r[1]=u*C+h*R+f*x+d*oe,r[5]=u*A+h*Y+f*O+d*X,r[9]=u*B+h*L+f*$+d*Q,r[13]=u*E+h*H+f*G+d*I,r[2]=_*C+g*R+m*x+p*oe,r[6]=_*A+g*Y+m*O+p*X,r[10]=_*B+g*L+m*$+p*Q,r[14]=_*E+g*H+m*G+p*I,r[3]=M*C+v*R+S*x+b*oe,r[7]=M*A+v*Y+S*O+b*X,r[11]=M*B+v*L+S*$+b*Q,r[15]=M*E+v*H+S*G+b*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*d-n*c*d)+g*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*l-g*f*l+g*c*d-o*m*d-h*c*p+o*f*p,v=_*f*l-u*m*l-_*c*d+a*m*d+u*c*p-a*f*p,S=u*g*l-_*h*l+_*o*d-a*g*d-u*o*p+a*h*p,b=_*h*c-u*g*c-_*o*f+a*g*f+u*o*m-a*h*m,C=t*M+n*v+i*S+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=M*A,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(o*m*r-g*c*r+g*i*l-n*m*l-o*i*p+n*c*p)*A,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*d-n*c*d)*A,e[4]=v*A,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(_*c*r-a*m*r-_*i*l+t*m*l+a*i*p-t*c*p)*A,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*d+t*c*d)*A,e[8]=S*A,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*p-t*h*p)*A,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*A,e[12]=b*A,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*A,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,_=r*h,g=a*u,m=a*h,p=o*h,M=c*l,v=c*u,S=c*h,b=n.x,C=n.y,A=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+S)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(d-S)*C,i[5]=(1-(f+p))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(_+v)*A,i[9]=(m-M)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);const l=1/r,u=1/a,h=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=hn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===hn)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Jr)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=hn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*l,d=(n+i)*u;let _,g;if(o===hn)_=(a+r)*h,g=-2*h;else if(o===Jr)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new W,Vt=new Ve,Oh=new W(0,0,0),Fh=new W(1,1,1),xn=new W,_r=new W,Pt=new W,Fo=new Ve,Bo=new Ht;class ns{constructor(e=0,t=0,n=0,i=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bh=0;const ko=new W,si=new Ht,sn=new Ve,xr=new W,zi=new W,kh=new W,zh=new Ht,zo=new W(1,0,0),Ho=new W(0,1,0),Go=new W(0,0,1),Hh={type:"added"},Gh={type:"removed"};class st extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new W,t=new ns,n=new Ht,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new je}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(zi,xr,this.up):sn.lookAt(xr,zi,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(sn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new W(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new W,an=new W,ws=new W,on=new W,ai=new W,oi=new W,Vo=new W,Rs=new W,Cs=new W,Ls=new W;let vr=!1;class Xt{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wt.subVectors(i,t),an.subVectors(n,t),ws.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(an),c=Wt.dot(ws),l=an.dot(an),u=an.dot(ws),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(l*c-o*u)*f,_=(a*u-o*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,i,r,a,o,c){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,on),c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),an.subVectors(e,t),Wt.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Wt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ai.subVectors(i,n),oi.subVectors(r,n),Rs.subVectors(e,n);const c=ai.dot(Rs),l=oi.dot(Rs);if(c<=0&&l<=0)return t.copy(n);Cs.subVectors(e,i);const u=ai.dot(Cs),h=oi.dot(Cs);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ai,a);Ls.subVectors(e,r);const d=ai.dot(Ls),_=oi.dot(Ls);if(_>=0&&d<=_)return t.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(oi,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Vo.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Vo,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ps(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Ea(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ps(a,r,e+1/3),this.g=Ps(a,r,e),this.b=Ps(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return Je.fromWorkingColorSpace(Mt.copy(this),e),Math.round(xt(Mt.r*255,0,255))*65536+Math.round(xt(Mt.g*255,0,255))*256+Math.round(xt(Mt.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,r=Mt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=rt){Je.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(yr);const n=$i(vn.h,yr.h,t),i=$i(vn.s,yr.s,t),r=$i(vn.l,yr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new ke;ke.NAMES=xl;let Vh=0;class $t extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=qt(),this.name="",this.type="Material",this.blending=yi,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=aa,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zn extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new W,Mr=new Fe;class ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this.updateRange={offset:0,count:-1},this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class vl extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yl extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wh=0;const kt=new Ve,Is=new st,ci=new W,It=new pn,Hi=new pn,_t=new W;class Qt extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pl(e)?yl:vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(It.min,Hi.min),It.expandByPoint(_t),_t.addVectors(It.max,Hi.max),It.expandByPoint(_t)):(It.expandByPoint(Hi.min),It.expandByPoint(Hi.max))}It.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(e,l),_t.add(ci)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<o;R++)l[R]=new W,u[R]=new W;const h=new W,f=new W,d=new W,_=new Fe,g=new Fe,m=new Fe,p=new W,M=new W;function v(R,Y,L){h.fromArray(i,R*3),f.fromArray(i,Y*3),d.fromArray(i,L*3),_.fromArray(a,R*2),g.fromArray(a,Y*2),m.fromArray(a,L*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const H=1/(g.x*m.y-m.x*g.y);isFinite(H)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(H),M.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(H),l[R].add(p),l[Y].add(p),l[L].add(p),u[R].add(M),u[Y].add(M),u[L].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,Y=S.length;R<Y;++R){const L=S[R],H=L.start,x=L.count;for(let O=H,$=H+x;O<$;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new W,C=new W,A=new W,B=new W;function E(R){A.fromArray(r,R*3),B.copy(A);const Y=l[R];b.copy(Y),b.sub(A.multiplyScalar(A.dot(Y))).normalize(),C.crossVectors(B,Y);const H=C.dot(u[R])<0?-1:1;c[R*4]=b.x,c[R*4+1]=b.y,c[R*4+2]=b.z,c[R*4+3]=H}for(let R=0,Y=S.length;R<Y;++R){const L=S[R],H=L.start,x=L.count;for(let O=H,$=H+x;O<$;O+=3)E(n[O+0]),E(n[O+1]),E(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new W,r=new W,a=new W,o=new W,c=new W,l=new W,u=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new ot(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new Ve,Nn=new ar,Sr=new Jt,Xo=new W,li=new W,ui=new W,hi=new W,Ds=new W,Er=new W,br=new Fe,Tr=new Fe,Ar=new Fe,jo=new W,qo=new W,Yo=new W,wr=new W,Rr=new W;class Ot extends st{constructor(e=new Qt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ds.fromBufferAttribute(h,e),a?Er.addScaledVector(Ds,u):Er.addScaledVector(Ds.sub(t),u))}t.add(Er)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),!(Sr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Sr,Xo)===null||Nn.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Wo.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=v;S<b;S+=3){const C=o.getX(S),A=o.getX(S+1),B=o.getX(S+2);i=Cr(this,p,e,n,l,u,h,C,A,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=Cr(this,a,e,n,l,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=v;S<b;S+=3){const C=S,A=S+1,B=S+2;i=Cr(this,p,e,n,l,u,h,C,A,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,v=m+1,S=m+2;i=Cr(this,a,e,n,l,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Xh(s,e,t,n,i,r,a,o){let c;if(e.side===Rt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===fn,o),c===null)return null;Rr.copy(o),Rr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Rr);return l<t.near||l>t.far?null:{distance:l,point:Rr.clone(),object:s}}function Cr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,li),s.getVertexPosition(c,ui),s.getVertexPosition(l,hi);const u=Xh(s,e,t,n,li,ui,hi,wr);if(u){i&&(br.fromBufferAttribute(i,o),Tr.fromBufferAttribute(i,c),Ar.fromBufferAttribute(i,l),u.uv=Xt.getInterpolation(wr,li,ui,hi,br,Tr,Ar,new Fe)),r&&(br.fromBufferAttribute(r,o),Tr.fromBufferAttribute(r,c),Ar.fromBufferAttribute(r,l),u.uv1=Xt.getInterpolation(wr,li,ui,hi,br,Tr,Ar,new Fe),u.uv2=u.uv1),a&&(jo.fromBufferAttribute(a,o),qo.fromBufferAttribute(a,c),Yo.fromBufferAttribute(a,l),u.normal=Xt.getInterpolation(wr,li,ui,hi,jo,qo,Yo,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new W,materialIndex:0};Xt.getNormal(li,ui,hi,h.normal),u.face=h}return u}class or extends Qt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(h,2));function _(g,m,p,M,v,S,b,C,A,B,E){const R=S/A,Y=b/B,L=S/2,H=b/2,x=C/2,O=A+1,$=B+1;let G=0,oe=0;const X=new W;for(let Q=0;Q<$;Q++){const I=Q*Y-H;for(let N=0;N<O;N++){const le=N*R-L;X[g]=le*M,X[m]=I*v,X[p]=x,l.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[p]=C>0?1:-1,u.push(X.x,X.y,X.z),h.push(N/A),h.push(1-Q/B),G+=1}}for(let Q=0;Q<B;Q++)for(let I=0;I<A;I++){const N=f+I+O*Q,le=f+I+O*(Q+1),re=f+(I+1)+O*(Q+1),ee=f+(I+1)+O*Q;c.push(N,le,ee),c.push(le,re,ee),oe+=6}o.addGroup(d,oe,E),d+=oe,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=Ci(s[t]);for(const i in n)e[i]=n[i]}return e}function jh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ml(s){return s.getRenderTarget()===null?s.outputColorSpace:Je.workingColorSpace}const qh={clone:Ci,merge:At};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sl extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class St extends Sl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,fi=1;class Zh extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new St(di,fi,e,t);i.layers=this.layers,this.add(i);const r=new St(di,fi,e,t);r.layers=this.layers,this.add(r);const a=new St(di,fi,e,t);a.layers=this.layers,this.add(a);const o=new St(di,fi,e,t);o.layers=this.layers,this.add(o);const c=new St(di,fi,e,t);c.layers=this.layers,this.add(c);const l=new St(di,fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class El extends ft{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wn?rt:Ut),this.texture=new El(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new or(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:bn});r.uniforms.tEquirect.value=t;const a=new Ot(i,r),o=t.minFilter;return t.minFilter===wn&&(t.minFilter=wt),new Zh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ns=new W,Jh=new W,Qh=new je;class Mn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ns.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ns),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qh.getNormalMatrix(e),i=this.coplanarPoint(Ns).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Jt,Lr=new W;class Ta{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,f-l,m-d,S-p).normalize(),n[1].setComponents(c+r,f+l,m+d,S+p).normalize(),n[2].setComponents(c+a,f+u,m+_,S+M).normalize(),n[3].setComponents(c-a,f-u,m-_,S-M).normalize(),n[4].setComponents(c-o,f-h,m-g,S-v).normalize(),t===hn)n[5].setComponents(c+o,f+h,m+g,S+v).normalize();else if(t===Jr)n[5].setComponents(o,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ed(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,l),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class is extends Qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let v=0;v<l;v++){const S=v*h-r;_.push(S,-M,0),g.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const v=M+l*p,S=M+l*(p+1),b=M+1+l*(p+1),C=M+1+l*p;d.push(v,S,C),d.push(S,b,C)}this.setIndex(d),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Jd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:td,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:rd,alphatest_fragment:sd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:cd,begin_vertex:ld,beginnormal_vertex:ud,bsdfs:hd,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:_d,color_fragment:xd,color_pars_fragment:vd,color_pars_vertex:yd,color_vertex:Md,common:Sd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:bd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:wd,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Ld,envmap_fragment:Pd,envmap_common_pars_fragment:Id,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:jd,envmap_vertex:Ud,fog_vertex:Od,fog_pars_vertex:Fd,fog_fragment:Bd,fog_pars_fragment:kd,gradientmap_pars_fragment:zd,lightmap_fragment:Hd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Zd,lights_physical_fragment:$d,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:cf,map_particle_fragment:lf,map_particle_pars_fragment:uf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:xf,normal_pars_fragment:vf,normal_pars_vertex:yf,normal_vertex:Mf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:Af,opaque_fragment:wf,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Lf,dithering_fragment:Pf,dithering_pars_fragment:If,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Of,shadowmap_vertex:Ff,shadowmask_pars_fragment:Bf,skinbase_vertex:kf,skinning_pars_vertex:zf,skinning_vertex:Hf,skinnormal_vertex:Gf,specularmap_fragment:Vf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:jf,transmission_fragment:qf,transmission_pars_fragment:Yf,uv_pars_fragment:Kf,uv_pars_vertex:Zf,uv_vertex:$f,worldpos_vertex:Jf,background_vert:Qf,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:rp,depth_vert:sp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:cp,equirect_vert:lp,equirect_frag:up,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:xp,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:Ep,meshphysical_frag:bp,meshtoon_vert:Tp,meshtoon_frag:Ap,points_vert:wp,points_frag:Rp,shadow_vert:Cp,shadow_frag:Lp,sprite_vert:Pp,sprite_frag:Ip},Me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Kt={basic:{uniforms:At([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:At([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:At([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:At([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:At([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:At([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:At([Me.points,Me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:At([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:At([Me.common,Me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:At([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:At([Me.sprite,Me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:At([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:At([Me.lights,Me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Kt.physical={uniforms:At([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Pr={r:0,b:0,g:0};function Dp(s,e,t,n,i,r,a){const o=new ke(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,c):v&&v.isColor&&(g(v,1),M=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===es)?(u===void 0&&(u=new Ot(new or(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ci(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Je.getTransfer(v.colorSpace)!==it,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ot(new is(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ci(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(Pr,Ml(s)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:_}}function Np(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(x,O,$,G,oe){let X=!1;if(a){const Q=g(G,$,O);l!==Q&&(l=Q,d(l.object)),X=p(x,G,$,oe),X&&M(x,G,$,oe)}else{const Q=O.wireframe===!0;(l.geometry!==G.id||l.program!==$.id||l.wireframe!==Q)&&(l.geometry=G.id,l.program=$.id,l.wireframe=Q,X=!0)}oe!==null&&t.update(oe,s.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,B(x,O,$,G),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(oe).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(x){return n.isWebGL2?s.bindVertexArray(x):r.bindVertexArrayOES(x)}function _(x){return n.isWebGL2?s.deleteVertexArray(x):r.deleteVertexArrayOES(x)}function g(x,O,$){const G=$.wireframe===!0;let oe=o[x.id];oe===void 0&&(oe={},o[x.id]=oe);let X=oe[O.id];X===void 0&&(X={},oe[O.id]=X);let Q=X[G];return Q===void 0&&(Q=m(f()),X[G]=Q),Q}function m(x){const O=[],$=[],G=[];for(let oe=0;oe<i;oe++)O[oe]=0,$[oe]=0,G[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:G,object:x,attributes:{},index:null}}function p(x,O,$,G){const oe=l.attributes,X=O.attributes;let Q=0;const I=$.getAttributes();for(const N in I)if(I[N].location>=0){const re=oe[N];let ee=X[N];if(ee===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),re===void 0||re.attribute!==ee||ee&&re.data!==ee.data)return!0;Q++}return l.attributesNum!==Q||l.index!==G}function M(x,O,$,G){const oe={},X=O.attributes;let Q=0;const I=$.getAttributes();for(const N in I)if(I[N].location>=0){let re=X[N];re===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(re=x.instanceColor));const ee={};ee.attribute=re,re&&re.data&&(ee.data=re.data),oe[N]=ee,Q++}l.attributes=oe,l.attributesNum=Q,l.index=G}function v(){const x=l.newAttributes;for(let O=0,$=x.length;O<$;O++)x[O]=0}function S(x){b(x,0)}function b(x,O){const $=l.newAttributes,G=l.enabledAttributes,oe=l.attributeDivisors;$[x]=1,G[x]===0&&(s.enableVertexAttribArray(x),G[x]=1),oe[x]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](x,O),oe[x]=O)}function C(){const x=l.newAttributes,O=l.enabledAttributes;for(let $=0,G=O.length;$<G;$++)O[$]!==x[$]&&(s.disableVertexAttribArray($),O[$]=0)}function A(x,O,$,G,oe,X,Q){Q===!0?s.vertexAttribIPointer(x,O,$,oe,X):s.vertexAttribPointer(x,O,$,G,oe,X)}function B(x,O,$,G){if(n.isWebGL2===!1&&(x.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const oe=G.attributes,X=$.getAttributes(),Q=O.defaultAttributeValues;for(const I in X){const N=X[I];if(N.location>=0){let le=oe[I];if(le===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){const re=le.normalized,ee=le.itemSize,be=t.get(le);if(be===void 0)continue;const Ie=be.buffer,ye=be.type,Se=be.bytesPerElement,Be=n.isWebGL2===!0&&(ye===s.INT||ye===s.UNSIGNED_INT||le.gpuType===rl);if(le.isInterleavedBufferAttribute){const Re=le.data,J=Re.stride,Qe=le.offset;if(Re.isInstancedInterleavedBuffer){for(let y=0;y<N.locationSize;y++)b(N.location+y,Re.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let y=0;y<N.locationSize;y++)S(N.location+y);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let y=0;y<N.locationSize;y++)A(N.location+y,ee/N.locationSize,ye,re,J*Se,(Qe+ee/N.locationSize*y)*Se,Be)}else{if(le.isInstancedBufferAttribute){for(let Re=0;Re<N.locationSize;Re++)b(N.location+Re,le.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Re=0;Re<N.locationSize;Re++)S(N.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Re=0;Re<N.locationSize;Re++)A(N.location+Re,ee/N.locationSize,ye,re,ee*Se,ee/N.locationSize*Re*Se,Be)}}else if(Q!==void 0){const re=Q[I];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(N.location,re);break;case 3:s.vertexAttrib3fv(N.location,re);break;case 4:s.vertexAttrib4fv(N.location,re);break;default:s.vertexAttrib1fv(N.location,re)}}}}C()}function E(){L();for(const x in o){const O=o[x];for(const $ in O){const G=O[$];for(const oe in G)_(G[oe].object),delete G[oe];delete O[$]}delete o[x]}}function R(x){if(o[x.id]===void 0)return;const O=o[x.id];for(const $ in O){const G=O[$];for(const oe in G)_(G[oe].object),delete G[oe];delete O[$]}delete o[x.id]}function Y(x){for(const O in o){const $=o[O];if($[x.id]===void 0)continue;const G=$[x.id];for(const oe in G)_(G[oe].object),delete G[oe];delete $[x.id]}}function L(){H(),u=!0,l!==c&&(l=c,d(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:L,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function Up(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function Op(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),b=v&&S,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:C}}function Fp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Mn,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,v=M*4;let S=p.clippingState||null;c.value=S,S=u(_,f,v,d);for(let b=0;b!==v;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==g;++v,S+=4)a.copy(h[v]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Bp(s){let e=new WeakMap;function t(a,o){return o===oa?a.mapping=bi:o===ca&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===oa||o===ca)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $h(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Aa extends Sl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,Ko=[.125,.215,.35,.446,.526,.582],kn=20,Us=new Aa,Zo=new ke;let Os=null,Fs=0,Bs=0;const Fn=(1+Math.sqrt(5))/2,pi=1/Fn,$o=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Fn,pi),new W(0,Fn,-pi),new W(pi,0,Fn),new W(-pi,0,Fn),new W(Fn,pi,0),new W(-Fn,pi,0)];class Jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Os=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,Fs,Bs),e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:tr,format:Nt,colorSpace:vt,depthBuffer:!1},i=Qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(r)),this._blurMaterial=zp(r,e,t)}return i}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,n,i){const o=new St(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zo),u.toneMapping=Tn,u.autoClear=!1;const d=new zn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new Ot(new or,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Zo),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Ir(i,M*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bi||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=$o[(i-1)%$o.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*kn-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const p=[];let M=0;for(let A=0;A<kn;++A){const B=A/g,E=Math.exp(-B*B/2);p.push(E),A===0?M+=E:A<m&&(M+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const S=this._sizeLods[i],b=3*S*(i>v-xi?i-v+xi:0),C=4*(this._cubeSize-S);Ir(t,b,C,3*S,2*S),c.setRenderTarget(t),c.render(h,Us)}}function kp(s){const e=[],t=[],n=[];let i=s;const r=s-xi+1+Ko.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-xi?c=Ko[a-s+xi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),v=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let C=0;C<d;C++){const A=C%3*2/3-1,B=C>2?0:-1,E=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];M.set(E,g*_*C),v.set(f,m*_*C);const R=[C,C,C,C,C,C];S.set(R,p*_*C)}const b=new Qt;b.setAttribute("position",new ot(M,g)),b.setAttribute("uv",new ot(v,m)),b.setAttribute("faceIndex",new ot(S,p)),e.push(b),i>xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qo(s,e,t){const n=new qn(s,e,t);return n.texture.mapping=es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function zp(s,e,t){const n=new Float32Array(kn),i=new W(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ec(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function tc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===oa||c===ca,u=c===bi||c===Ti;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Jo(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Jo(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vp(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let v=0,S=M.length;v<S;v+=3){const b=M[v+0],C=M[v+1],A=M[v+2];f.push(b,C,C,A,A,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const b=v+0,C=v+1,A=v+2;f.push(b,C,C,A,A,b)}}else return;const m=new(pl(f)?yl:vl)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Wp(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*c),t.update(d,r,1)}function h(f,d,_){if(_===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,o,f*c,_),t.update(d,r,_)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Xp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jp(s,e){return s[0]-e[0]}function qp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Yp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new tt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let O=function(){H.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var d=O;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),b===!0&&(E=3);let R=u.attributes.position.count*E,Y=1;R>e.maxTextureSize&&(Y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*Y*4*g),H=new gl(L,R,Y,g);H.type=un,H.needsUpdate=!0;const x=E*4;for(let $=0;$<g;$++){const G=C[$],oe=A[$],X=B[$],Q=R*Y*4*$;for(let I=0;I<G.count;I++){const N=I*x;v===!0&&(a.fromBufferAttribute(G,I),L[Q+N+0]=a.x,L[Q+N+1]=a.y,L[Q+N+2]=a.z,L[Q+N+3]=0),S===!0&&(a.fromBufferAttribute(oe,I),L[Q+N+4]=a.x,L[Q+N+5]=a.y,L[Q+N+6]=a.z,L[Q+N+7]=0),b===!0&&(a.fromBufferAttribute(X,I),L[Q+N+8]=a.x,L[Q+N+9]=a.y,L[Q+N+10]=a.z,L[Q+N+11]=X.itemSize===4?a.w:1)}}m={count:g,texture:H,size:new Fe(R,Y)},r.set(u,m),u.addEventListener("dispose",O)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let S=0;S<_;S++)g[S]=[S,0];n[u.id]=g}for(let S=0;S<_;S++){const b=g[S];b[0]=S,b[1]=f[S]}g.sort(qp);for(let S=0;S<8;S++)S<_&&g[S][1]?(o[S][0]=g[S][0],o[S][1]=g[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(jp);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const b=o[S],C=b[0],A=b[1];C!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+S)!==m[C]&&u.setAttribute("morphTarget"+S,m[C]),p&&u.getAttribute("morphNormal"+S)!==p[C]&&u.setAttribute("morphNormal"+S,p[C]),i[S]=A,M+=A):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Kp(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Tl=new ft,Al=new gl,wl=new Nh,Rl=new El,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function Di(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nc[i];if(r===void 0&&(r=new Float32Array(i),nc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function rs(s,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function Jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function em(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ac.set(n),s.uniformMatrix2fv(this.addr,!1,ac),mt(t,n)}}function tm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;sc.set(n),s.uniformMatrix3fv(this.addr,!1,sc),mt(t,n)}}function nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;rc.set(n),s.uniformMatrix4fv(this.addr,!1,rc),mt(t,n)}}function im(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),mt(t,e)}}function sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),mt(t,e)}}function am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),mt(t,e)}}function om(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),mt(t,e)}}function lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),mt(t,e)}}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),mt(t,e)}}function hm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Tl,i)}function dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wl,i)}function fm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rl,i)}function pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Al,i)}function mm(s){switch(s){case 5126:return Zp;case 35664:return $p;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return am;case 5125:return om;case 36294:return cm;case 36295:return lm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(s,e){s.uniform1fv(this.addr,e)}function _m(s,e){const t=Di(e,this.size,2);s.uniform2fv(this.addr,t)}function xm(s,e){const t=Di(e,this.size,3);s.uniform3fv(this.addr,t)}function vm(s,e){const t=Di(e,this.size,4);s.uniform4fv(this.addr,t)}function ym(s,e){const t=Di(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Mm(s,e){const t=Di(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sm(s,e){const t=Di(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Em(s,e){s.uniform1iv(this.addr,e)}function bm(s,e){s.uniform2iv(this.addr,e)}function Tm(s,e){s.uniform3iv(this.addr,e)}function Am(s,e){s.uniform4iv(this.addr,e)}function wm(s,e){s.uniform1uiv(this.addr,e)}function Rm(s,e){s.uniform2uiv(this.addr,e)}function Cm(s,e){s.uniform3uiv(this.addr,e)}function Lm(s,e){s.uniform4uiv(this.addr,e)}function Pm(s,e,t){const n=this.cache,i=e.length,r=rs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Tl,r[a])}function Im(s,e,t){const n=this.cache,i=e.length,r=rs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wl,r[a])}function Dm(s,e,t){const n=this.cache,i=e.length,r=rs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Rl,r[a])}function Nm(s,e,t){const n=this.cache,i=e.length,r=rs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Al,r[a])}function Um(s){switch(s){case 5126:return gm;case 35664:return _m;case 35665:return xm;case 35666:return vm;case 35674:return ym;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return Em;case 35667:case 35671:return bm;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return wm;case 36294:return Rm;case 36295:return Cm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=mm(t.type)}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Um(t.type)}}class Bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ks=/(\w+)(\])?(\[|\.)?/g;function oc(s,e){s.seq.push(e),s.map[e.id]=e}function km(s,e,t){const n=s.name,i=n.length;for(ks.lastIndex=0;;){const r=ks.exec(n),a=ks.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){oc(t,l===void 0?new Om(o,s,e):new Fm(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Bm(o),oc(t,h)),t=h}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);km(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function cc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const zm=37297;let Hm=0;function Gm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Vm(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===$r&&t===Zr?n="LinearDisplayP3ToLinearSRGB":e===Zr&&t===$r&&(n="LinearSRGBToLinearDisplayP3"),s){case vt:case ts:return[n,"LinearTransferOETF"];case rt:case Sa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function lc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Gm(s.getShaderSource(e),a)}else return i}function Wm(s,e){const t=Vm(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xm(s,e){let t;switch(e){case Gu:t="Linear";break;case Vu:t="Reinhard";break;case Wu:t="OptimizedCineon";break;case Xu:t="ACESFilmic";break;case ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function qm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ym(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ji(s){return s!==""}function uc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(s){return s.replace(Km,$m)}const Zm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $m(s,e){let t=Ge[e];if(t===void 0){const n=Zm.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fa(t)}const Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(s){return s.replace(Jm,Qm)}function Qm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function tg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case Ti:e="ENVMAP_TYPE_CUBE";break;case es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ng(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function ig(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case zu:e="ENVMAP_BLENDING_MIX";break;case Hu:e="ENVMAP_BLENDING_ADD";break}return e}function rg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sg(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=eg(t),l=tg(t),u=ng(t),h=ig(t),f=rg(t),d=t.isWebGL2?"":jm(t),_=qm(r),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ji).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ji).join(`
`),p.length>0&&(p+=`
`)):(m=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),p=[d,fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=fa(a),a=uc(a,t),a=hc(a,t),o=fa(o),o=uc(o,t),o=hc(o,t),a=dc(a),o=dc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+a,S=M+p+o,b=cc(i,i.VERTEX_SHADER,v),C=cc(i,i.FRAGMENT_SHADER,S);i.attachShader(g,b),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(Y){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(g).trim(),H=i.getShaderInfoLog(b).trim(),x=i.getShaderInfoLog(C).trim();let O=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,C);else{const G=lc(i,b,"vertex"),oe=lc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+G+`
`+oe)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(H===""||x==="")&&($=!1);$&&(Y.diagnostics={runnable:O,programLog:L,vertexShader:{log:H,prefix:m},fragmentShader:{log:x,prefix:p}})}i.deleteShader(b),i.deleteShader(C),B=new Wr(i,g),E=Ym(i,g)}let B;this.getUniforms=function(){return B===void 0&&A(this),B};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(g,zm)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cg(e),t.set(e,n)),n}}class cg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function lg(s,e,t,n,i,r,a){const o=new _l,c=new og,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,R,Y,L,H){const x=L.fog,O=H.geometry,$=E.isMeshStandardMaterial?L.environment:null,G=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),oe=G&&G.mapping===es?G.image.height:null,X=_[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,I=Q!==void 0?Q.length:0;let N=0;O.morphAttributes.position!==void 0&&(N=1),O.morphAttributes.normal!==void 0&&(N=2),O.morphAttributes.color!==void 0&&(N=3);let le,re,ee,be;if(X){const lt=Kt[X];le=lt.vertexShader,re=lt.fragmentShader}else le=E.vertexShader,re=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),be=c.getFragmentShaderID(E);const Ie=s.getRenderTarget(),ye=H.isInstancedMesh===!0,Se=!!E.map,Be=!!E.matcap,Re=!!G,J=!!E.aoMap,Qe=!!E.lightMap,y=!!E.bumpMap,K=!!E.normalMap,j=!!E.displacementMap,U=!!E.emissiveMap,P=!!E.metalnessMap,k=!!E.roughnessMap,ne=E.anisotropy>0,de=E.clearcoat>0,q=E.iridescence>0,w=E.sheen>0,T=E.transmission>0,F=ne&&!!E.anisotropyMap,te=de&&!!E.clearcoatMap,ue=de&&!!E.clearcoatNormalMap,he=de&&!!E.clearcoatRoughnessMap,Ee=q&&!!E.iridescenceMap,ge=q&&!!E.iridescenceThicknessMap,ve=w&&!!E.sheenColorMap,z=w&&!!E.sheenRoughnessMap,pe=!!E.specularMap,fe=!!E.specularColorMap,Ne=!!E.specularIntensityMap,we=T&&!!E.transmissionMap,Le=T&&!!E.thicknessMap,Ce=!!E.gradientMap,Te=!!E.alphaMap,Xe=E.alphaTest>0,V=!!E.alphaHash,_e=!!E.extensions,me=!!O.attributes.uv1,ce=!!O.attributes.uv2,xe=!!O.attributes.uv3;let De=Tn;return E.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(De=s.toneMapping),{isWebGL2:u,shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:re,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,instancing:ye,instancingColor:ye&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:vt,map:Se,matcap:Be,envMap:Re,envMapMode:Re&&G.mapping,envMapCubeUVHeight:oe,aoMap:J,lightMap:Qe,bumpMap:y,normalMap:K,displacementMap:f&&j,emissiveMap:U,normalMapObjectSpace:K&&E.normalMapType===oh,normalMapTangentSpace:K&&E.normalMapType===dl,metalnessMap:P,roughnessMap:k,anisotropy:ne,anisotropyMap:F,clearcoat:de,clearcoatMap:te,clearcoatNormalMap:ue,clearcoatRoughnessMap:he,iridescence:q,iridescenceMap:Ee,iridescenceThicknessMap:ge,sheen:w,sheenColorMap:ve,sheenRoughnessMap:z,specularMap:pe,specularColorMap:fe,specularIntensityMap:Ne,transmission:T,transmissionMap:we,thicknessMap:Le,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===yi,alphaMap:Te,alphaTest:Xe,alphaHash:V,combine:E.combine,mapUv:Se&&g(E.map.channel),aoMapUv:J&&g(E.aoMap.channel),lightMapUv:Qe&&g(E.lightMap.channel),bumpMapUv:y&&g(E.bumpMap.channel),normalMapUv:K&&g(E.normalMap.channel),displacementMapUv:j&&g(E.displacementMap.channel),emissiveMapUv:U&&g(E.emissiveMap.channel),metalnessMapUv:P&&g(E.metalnessMap.channel),roughnessMapUv:k&&g(E.roughnessMap.channel),anisotropyMapUv:F&&g(E.anisotropyMap.channel),clearcoatMapUv:te&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:z&&g(E.sheenRoughnessMap.channel),specularMapUv:pe&&g(E.specularMap.channel),specularColorMapUv:fe&&g(E.specularColorMap.channel),specularIntensityMapUv:Ne&&g(E.specularIntensityMap.channel),transmissionMapUv:we&&g(E.transmissionMap.channel),thicknessMapUv:Le&&g(E.thicknessMap.channel),alphaMapUv:Te&&g(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(K||ne),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:ce,vertexUv3s:xe,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(Se||Te),fog:!!x,useFog:E.fog===!0,fogExp2:x&&x.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:N,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jt,flipSided:E.side===Rt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:_e&&E.extensions.derivatives===!0,extensionFragDepth:_e&&E.extensions.fragDepth===!0,extensionDrawBuffers:_e&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)R.push(Y),R.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(M(R,E),v(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function M(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function v(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const R=_[E.type];let Y;if(R){const L=Kt[R];Y=qh.clone(L.uniforms)}else Y=E.uniforms;return Y}function b(E,R){let Y;for(let L=0,H=l.length;L<H;L++){const x=l[L];if(x.cacheKey===R){Y=x,++Y.usedTimes;break}}return Y===void 0&&(Y=new sg(s,R,E,r),l.push(Y)),Y}function C(E){if(--E.usedTimes===0){const R=l.indexOf(E);l[R]=l[l.length-1],l.pop(),E.destroy()}}function A(E){c.remove(E)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:l,dispose:B}}function ug(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||hg),n.length>1&&n.sort(f||pc),i.length>1&&i.sort(f||pc)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function dg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new mc,s.set(n,[a])):i>=r.length?(a=new mc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function fg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ke};break;case"SpotLight":t={position:new W,direction:new W,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function pg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let mg=0;function gg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _g(s,e){const t=new fg,n=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,a=new Ve,o=new Ve;function c(u,h){let f=0,d=0,_=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let g=0,m=0,p=0,M=0,v=0,S=0,b=0,C=0,A=0,B=0,E=0;u.sort(gg);const R=h===!0?Math.PI:1;for(let L=0,H=u.length;L<H;L++){const x=u[L],O=x.color,$=x.intensity,G=x.distance,oe=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)f+=O.r*$*R,d+=O.g*$*R,_+=O.b*$*R;else if(x.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(x.sh.coefficients[X],$);E++}else if(x.isDirectionalLight){const X=t.get(x);if(X.color.copy(x.color).multiplyScalar(x.intensity*R),x.castShadow){const Q=x.shadow,I=n.get(x);I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.directionalShadow[g]=I,i.directionalShadowMap[g]=oe,i.directionalShadowMatrix[g]=x.shadow.matrix,S++}i.directional[g]=X,g++}else if(x.isSpotLight){const X=t.get(x);X.position.setFromMatrixPosition(x.matrixWorld),X.color.copy(O).multiplyScalar($*R),X.distance=G,X.coneCos=Math.cos(x.angle),X.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),X.decay=x.decay,i.spot[p]=X;const Q=x.shadow;if(x.map&&(i.spotLightMap[A]=x.map,A++,Q.updateMatrices(x),x.castShadow&&B++),i.spotLightMatrix[p]=Q.matrix,x.castShadow){const I=n.get(x);I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.spotShadow[p]=I,i.spotShadowMap[p]=oe,C++}p++}else if(x.isRectAreaLight){const X=t.get(x);X.color.copy(O).multiplyScalar($),X.halfWidth.set(x.width*.5,0,0),X.halfHeight.set(0,x.height*.5,0),i.rectArea[M]=X,M++}else if(x.isPointLight){const X=t.get(x);if(X.color.copy(x.color).multiplyScalar(x.intensity*R),X.distance=x.distance,X.decay=x.decay,x.castShadow){const Q=x.shadow,I=n.get(x);I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,I.shadowCameraNear=Q.camera.near,I.shadowCameraFar=Q.camera.far,i.pointShadow[m]=I,i.pointShadowMap[m]=oe,i.pointShadowMatrix[m]=x.shadow.matrix,b++}i.point[m]=X,m++}else if(x.isHemisphereLight){const X=t.get(x);X.skyColor.copy(x.color).multiplyScalar($*R),X.groundColor.copy(x.groundColor).multiplyScalar($*R),i.hemi[v]=X,v++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const Y=i.hash;(Y.directionalLength!==g||Y.pointLength!==m||Y.spotLength!==p||Y.rectAreaLength!==M||Y.hemiLength!==v||Y.numDirectionalShadows!==S||Y.numPointShadows!==b||Y.numSpotShadows!==C||Y.numSpotMaps!==A||Y.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+A-B,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=E,Y.directionalLength=g,Y.pointLength=m,Y.spotLength=p,Y.rectAreaLength=M,Y.hemiLength=v,Y.numDirectionalShadows=S,Y.numPointShadows=b,Y.numSpotShadows=C,Y.numSpotMaps=A,Y.numLightProbes=E,i.version=mg++)}function l(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const S=u[M];if(S.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(S.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function gc(s,e){const t=new _g(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function xg(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new gc(s,e),t.set(r,[c])):a>=o.length?(c=new gc(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class vg extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yg extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eg(s,e,t){let n=new Ta;const i=new Fe,r=new Fe,a=new tt,o=new vg({depthPacking:ah}),c=new yg,l={},u=t.maxTextureSize,h={[fn]:Rt,[Rt]:fn,[jt]:jt},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ot(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let p=this.type;this.render=function(b,C,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const B=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(bn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const L=p!==ln&&this.type===ln,H=p===ln&&this.type!==ln;for(let x=0,O=b.length;x<O;x++){const $=b[x],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const oe=G.getFrameExtents();if(i.multiply(oe),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/oe.x),i.x=r.x*oe.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/oe.y),i.y=r.y*oe.y,G.mapSize.y=r.y)),G.map===null||L===!0||H===!0){const Q=this.type!==ln?{minFilter:dt,magFilter:dt}:{};G.map!==null&&G.map.dispose(),G.map=new qn(i.x,i.y,Q),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const X=G.getViewportCount();for(let Q=0;Q<X;Q++){const I=G.getViewport(Q);a.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),Y.viewport(a),G.updateMatrices($,Q),n=G.getFrustum(),S(C,A,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===ln&&M(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(B,E,R)};function M(b,C){const A=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,A,f,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,A,d,g,null)}function v(b,C,A,B){let E=null;const R=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)E=R;else if(E=A.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=E.uuid,L=C.uuid;let H=l[Y];H===void 0&&(H={},l[Y]=H);let x=H[L];x===void 0&&(x=E.clone(),H[L]=x),E=x}if(E.visible=C.visible,E.wireframe=C.wireframe,B===ln?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=s.properties.get(E);Y.light=A}return E}function S(b,C,A,B,E){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===ln)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const L=e.update(b),H=b.material;if(Array.isArray(H)){const x=L.groups;for(let O=0,$=x.length;O<$;O++){const G=x[O],oe=H[G.materialIndex];if(oe&&oe.visible){const X=v(b,oe,B,E);s.renderBufferDirect(A,null,L,X,b,G)}}}else if(H.visible){const x=v(b,H,B,E);s.renderBufferDirect(A,null,L,x,b,null)}}const Y=b.children;for(let L=0,H=Y.length;L<H;L++)S(Y[L],C,A,B,E)}}function bg(s,e,t){const n=t.isWebGL2;function i(){let V=!1;const _e=new tt;let me=null;const ce=new tt(0,0,0,0);return{setMask:function(xe){me!==xe&&!V&&(s.colorMask(xe,xe,xe,xe),me=xe)},setLocked:function(xe){V=xe},setClear:function(xe,De,qe,lt,Bt){Bt===!0&&(xe*=lt,De*=lt,qe*=lt),_e.set(xe,De,qe,lt),ce.equals(_e)===!1&&(s.clearColor(xe,De,qe,lt),ce.copy(_e))},reset:function(){V=!1,me=null,ce.set(-1,0,0,0)}}}function r(){let V=!1,_e=null,me=null,ce=null;return{setTest:function(xe){xe?Se(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(xe){_e!==xe&&!V&&(s.depthMask(xe),_e=xe)},setFunc:function(xe){if(me!==xe){switch(xe){case Du:s.depthFunc(s.NEVER);break;case Nu:s.depthFunc(s.ALWAYS);break;case Uu:s.depthFunc(s.LESS);break;case qr:s.depthFunc(s.LEQUAL);break;case Ou:s.depthFunc(s.EQUAL);break;case Fu:s.depthFunc(s.GEQUAL);break;case Bu:s.depthFunc(s.GREATER);break;case ku:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=xe}},setLocked:function(xe){V=xe},setClear:function(xe){ce!==xe&&(s.clearDepth(xe),ce=xe)},reset:function(){V=!1,_e=null,me=null,ce=null}}}function a(){let V=!1,_e=null,me=null,ce=null,xe=null,De=null,qe=null,lt=null,Bt=null;return{setTest:function(nt){V||(nt?Se(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(nt){_e!==nt&&!V&&(s.stencilMask(nt),_e=nt)},setFunc:function(nt,Et,Yt){(me!==nt||ce!==Et||xe!==Yt)&&(s.stencilFunc(nt,Et,Yt),me=nt,ce=Et,xe=Yt)},setOp:function(nt,Et,Yt){(De!==nt||qe!==Et||lt!==Yt)&&(s.stencilOp(nt,Et,Yt),De=nt,qe=Et,lt=Yt)},setLocked:function(nt){V=nt},setClear:function(nt){Bt!==nt&&(s.clearStencil(nt),Bt=nt)},reset:function(){V=!1,_e=null,me=null,ce=null,xe=null,De=null,qe=null,lt=null,Bt=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,S=null,b=null,C=null,A=null,B=null,E=new ke(0,0,0),R=0,Y=!1,L=null,H=null,x=null,O=null,$=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,X=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),oe=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),oe=X>=2);let I=null,N={};const le=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),ee=new tt().fromArray(le),be=new tt().fromArray(re);function Ie(V,_e,me,ce){const xe=new Uint8Array(4),De=s.createTexture();s.bindTexture(V,De),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<me;qe++)n&&(V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY)?s.texImage3D(_e,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(_e+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return De}const ye={};ye[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Se(s.DEPTH_TEST),c.setFunc(qr),P(!1),k(Ya),Se(s.CULL_FACE),j(bn);function Se(V){f[V]!==!0&&(s.enable(V),f[V]=!0)}function Be(V){f[V]!==!1&&(s.disable(V),f[V]=!1)}function Re(V,_e){return d[V]!==_e?(s.bindFramebuffer(V,_e),d[V]=_e,n&&(V===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_e),V===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_e)),!0):!1}function J(V,_e){let me=g,ce=!1;if(V)if(me=_.get(_e),me===void 0&&(me=[],_.set(_e,me)),V.isWebGLMultipleRenderTargets){const xe=V.texture;if(me.length!==xe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let De=0,qe=xe.length;De<qe;De++)me[De]=s.COLOR_ATTACHMENT0+De;me.length=xe.length,ce=!0}}else me[0]!==s.COLOR_ATTACHMENT0&&(me[0]=s.COLOR_ATTACHMENT0,ce=!0);else me[0]!==s.BACK&&(me[0]=s.BACK,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Qe(V){return m!==V?(s.useProgram(V),m=V,!0):!1}const y={[Bn]:s.FUNC_ADD,[xu]:s.FUNC_SUBTRACT,[vu]:s.FUNC_REVERSE_SUBTRACT};if(n)y[Ja]=s.MIN,y[Qa]=s.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(y[Ja]=V.MIN_EXT,y[Qa]=V.MAX_EXT)}const K={[yu]:s.ZERO,[Mu]:s.ONE,[Su]:s.SRC_COLOR,[sa]:s.SRC_ALPHA,[Ru]:s.SRC_ALPHA_SATURATE,[Au]:s.DST_COLOR,[bu]:s.DST_ALPHA,[Eu]:s.ONE_MINUS_SRC_COLOR,[aa]:s.ONE_MINUS_SRC_ALPHA,[wu]:s.ONE_MINUS_DST_COLOR,[Tu]:s.ONE_MINUS_DST_ALPHA,[Cu]:s.CONSTANT_COLOR,[Lu]:s.ONE_MINUS_CONSTANT_COLOR,[Pu]:s.CONSTANT_ALPHA,[Iu]:s.ONE_MINUS_CONSTANT_ALPHA};function j(V,_e,me,ce,xe,De,qe,lt,Bt,nt){if(V===bn){p===!0&&(Be(s.BLEND),p=!1);return}if(p===!1&&(Se(s.BLEND),p=!0),V!==_u){if(V!==M||nt!==Y){if((v!==Bn||C!==Bn)&&(s.blendEquation(s.FUNC_ADD),v=Bn,C=Bn),nt)switch(V){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ka:s.blendFunc(s.ONE,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $a:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ka:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $a:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,b=null,A=null,B=null,E.set(0,0,0),R=0,M=V,Y=nt}return}xe=xe||_e,De=De||me,qe=qe||ce,(_e!==v||xe!==C)&&(s.blendEquationSeparate(y[_e],y[xe]),v=_e,C=xe),(me!==S||ce!==b||De!==A||qe!==B)&&(s.blendFuncSeparate(K[me],K[ce],K[De],K[qe]),S=me,b=ce,A=De,B=qe),(lt.equals(E)===!1||Bt!==R)&&(s.blendColor(lt.r,lt.g,lt.b,Bt),E.copy(lt),R=Bt),M=V,Y=!1}function U(V,_e){V.side===jt?Be(s.CULL_FACE):Se(s.CULL_FACE);let me=V.side===Rt;_e&&(me=!me),P(me),V.blending===yi&&V.transparent===!1?j(bn):j(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),o.setMask(V.colorWrite);const ce=V.stencilWrite;l.setTest(ce),ce&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),de(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function P(V){L!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),L=V)}function k(V){V!==pu?(Se(s.CULL_FACE),V!==H&&(V===Ya?s.cullFace(s.BACK):V===mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),H=V}function ne(V){V!==x&&(oe&&s.lineWidth(V),x=V)}function de(V,_e,me){V?(Se(s.POLYGON_OFFSET_FILL),(O!==_e||$!==me)&&(s.polygonOffset(_e,me),O=_e,$=me)):Be(s.POLYGON_OFFSET_FILL)}function q(V){V?Se(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function w(V){V===void 0&&(V=s.TEXTURE0+G-1),I!==V&&(s.activeTexture(V),I=V)}function T(V,_e,me){me===void 0&&(I===null?me=s.TEXTURE0+G-1:me=I);let ce=N[me];ce===void 0&&(ce={type:void 0,texture:void 0},N[me]=ce),(ce.type!==V||ce.texture!==_e)&&(I!==me&&(s.activeTexture(me),I=me),s.bindTexture(V,_e||ye[V]),ce.type=V,ce.texture=_e)}function F(){const V=N[I];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(V){ee.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function Le(V){be.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),be.copy(V))}function Ce(V,_e){let me=h.get(_e);me===void 0&&(me=new WeakMap,h.set(_e,me));let ce=me.get(V);ce===void 0&&(ce=s.getUniformBlockIndex(_e,V.name),me.set(V,ce))}function Te(V,_e){const ce=h.get(_e).get(V);u.get(_e)!==ce&&(s.uniformBlockBinding(_e,ce,V.__bindingPointIndex),u.set(_e,ce))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},I=null,N={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,S=null,b=null,C=null,A=null,B=null,E=new ke(0,0,0),R=0,Y=!1,L=null,H=null,x=null,O=null,$=null,ee.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Se,disable:Be,bindFramebuffer:Re,drawBuffers:J,useProgram:Qe,setBlending:j,setMaterial:U,setFlipSided:P,setCullFace:k,setLineWidth:ne,setPolygonOffset:de,setScissorTest:q,activeTexture:w,bindTexture:T,unbindTexture:F,compressedTexImage2D:te,compressedTexImage3D:ue,texImage2D:fe,texImage3D:Ne,updateUBOMapping:Ce,uniformBlockBinding:Te,texStorage2D:z,texStorage3D:pe,texSubImage2D:he,texSubImage3D:Ee,compressedTexSubImage2D:ge,compressedTexSubImage3D:ve,scissor:we,viewport:Le,reset:Xe}}function Tg(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,T){return p?new OffscreenCanvas(w,T):ir("canvas")}function v(w,T,F,te){let ue=1;if((w.width>te||w.height>te)&&(ue=te/Math.max(w.width,w.height)),ue<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const he=T?Qr:Math.floor,Ee=he(ue*w.width),ge=he(ue*w.height);g===void 0&&(g=M(Ee,ge));const ve=F?M(Ee,ge):g;return ve.width=Ee,ve.height=ge,ve.getContext("2d").drawImage(w,0,0,Ee,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ee+"x"+ge+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return da(w.width)&&da(w.height)}function b(w){return o?!1:w.wrapS!==Dt||w.wrapT!==Dt||w.minFilter!==dt&&w.minFilter!==wt}function C(w,T){return w.generateMipmaps&&T&&w.minFilter!==dt&&w.minFilter!==wt}function A(w){s.generateMipmap(w)}function B(w,T,F,te,ue=!1){if(o===!1)return T;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he=T;if(T===s.RED&&(F===s.FLOAT&&(he=s.R32F),F===s.HALF_FLOAT&&(he=s.R16F),F===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(he=s.R8UI),F===s.UNSIGNED_SHORT&&(he=s.R16UI),F===s.UNSIGNED_INT&&(he=s.R32UI),F===s.BYTE&&(he=s.R8I),F===s.SHORT&&(he=s.R16I),F===s.INT&&(he=s.R32I)),T===s.RG&&(F===s.FLOAT&&(he=s.RG32F),F===s.HALF_FLOAT&&(he=s.RG16F),F===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RGBA){const Ee=ue?Kr:Je.getTransfer(te);F===s.FLOAT&&(he=s.RGBA32F),F===s.HALF_FLOAT&&(he=s.RGBA16F),F===s.UNSIGNED_BYTE&&(he=Ee===it?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function E(w,T,F){return C(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==dt&&w.minFilter!==wt?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function R(w){return w===dt||w===Yr||w===Ki?s.NEAREST:s.LINEAR}function Y(w){const T=w.target;T.removeEventListener("dispose",Y),H(T),T.isVideoTexture&&_.delete(T)}function L(w){const T=w.target;T.removeEventListener("dispose",L),O(T)}function H(w){const T=n.get(w);if(T.__webglInit===void 0)return;const F=w.source,te=m.get(F);if(te){const ue=te[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&x(w),Object.keys(te).length===0&&m.delete(F)}n.remove(w)}function x(w){const T=n.get(w);s.deleteTexture(T.__webglTexture);const F=w.source,te=m.get(F);delete te[T.__cacheKey],a.memory.textures--}function O(w){const T=w.texture,F=n.get(w),te=n.get(T);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(F.__webglFramebuffer[ue]))for(let he=0;he<F.__webglFramebuffer[ue].length;he++)s.deleteFramebuffer(F.__webglFramebuffer[ue][he]);else s.deleteFramebuffer(F.__webglFramebuffer[ue]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[ue])}else{if(Array.isArray(F.__webglFramebuffer))for(let ue=0;ue<F.__webglFramebuffer.length;ue++)s.deleteFramebuffer(F.__webglFramebuffer[ue]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ue=0;ue<F.__webglColorRenderbuffer.length;ue++)F.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[ue]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ue=0,he=T.length;ue<he;ue++){const Ee=n.get(T[ue]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(T[ue])}n.remove(T),n.remove(w)}let $=0;function G(){$=0}function oe(){const w=$;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),$+=1,w}function X(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function Q(w,T){const F=n.get(w);if(w.isVideoTexture&&de(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(F,w,T);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+T)}function I(w,T){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Se(F,w,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+T)}function N(w,T){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Se(F,w,T);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+T)}function le(w,T){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Be(F,w,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+T)}const re={[Xn]:s.REPEAT,[Dt]:s.CLAMP_TO_EDGE,[er]:s.MIRRORED_REPEAT},ee={[dt]:s.NEAREST,[Yr]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[ya]:s.LINEAR_MIPMAP_NEAREST,[wn]:s.LINEAR_MIPMAP_LINEAR},be={[ch]:s.NEVER,[mh]:s.ALWAYS,[lh]:s.LESS,[hh]:s.LEQUAL,[uh]:s.EQUAL,[ph]:s.GEQUAL,[dh]:s.GREATER,[fh]:s.NOTEQUAL};function Ie(w,T,F){if(F?(s.texParameteri(w,s.TEXTURE_WRAP_S,re[T.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,re[T.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,re[T.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ee[T.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ee[T.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==Dt||T.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,R(T.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,R(T.minFilter)),T.minFilter!==dt&&T.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===dt||T.minFilter!==Ki&&T.minFilter!==wn||T.type===un&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ye(w,T){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",Y));const te=T.source;let ue=m.get(te);ue===void 0&&(ue={},m.set(te,ue));const he=X(T);if(he!==w.__cacheKey){ue[he]===void 0&&(ue[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ue[he].usedTimes++;const Ee=ue[w.__cacheKey];Ee!==void 0&&(ue[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(T)),w.__cacheKey=he,w.__webglTexture=ue[he].texture}return F}function Se(w,T,F){let te=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=s.TEXTURE_3D);const ue=ye(w,T),he=T.source;t.bindTexture(te,w.__webglTexture,s.TEXTURE0+F);const Ee=n.get(he);if(he.version!==Ee.__version||ue===!0){t.activeTexture(s.TEXTURE0+F);const ge=Je.getPrimaries(Je.workingColorSpace),ve=T.colorSpace===Ut?null:Je.getPrimaries(T.colorSpace),z=T.colorSpace===Ut||ge===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const pe=b(T)&&S(T.image)===!1;let fe=v(T.image,pe,!1,u);fe=q(T,fe);const Ne=S(fe)||o,we=r.convert(T.format,T.colorSpace);let Le=r.convert(T.type),Ce=B(T.internalFormat,we,Le,T.colorSpace,T.isVideoTexture);Ie(te,T,Ne);let Te;const Xe=T.mipmaps,V=o&&T.isVideoTexture!==!0,_e=Ee.__version===void 0||ue===!0,me=E(T,fe,Ne);if(T.isDepthTexture)Ce=s.DEPTH_COMPONENT,o?T.type===un?Ce=s.DEPTH_COMPONENT32F:T.type===En?Ce=s.DEPTH_COMPONENT24:T.type===Gn?Ce=s.DEPTH24_STENCIL8:Ce=s.DEPTH_COMPONENT16:T.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vn&&Ce===s.DEPTH_COMPONENT&&T.type!==Ma&&T.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=En,Le=r.convert(T.type)),T.format===Ai&&Ce===s.DEPTH_COMPONENT&&(Ce=s.DEPTH_STENCIL,T.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Gn,Le=r.convert(T.type))),_e&&(V?t.texStorage2D(s.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Ce,fe.width,fe.height,0,we,Le,null));else if(T.isDataTexture)if(Xe.length>0&&Ne){V&&_e&&t.texStorage2D(s.TEXTURE_2D,me,Ce,Xe[0].width,Xe[0].height);for(let ce=0,xe=Xe.length;ce<xe;ce++)Te=Xe[ce],V?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Te.width,Te.height,we,Le,Te.data):t.texImage2D(s.TEXTURE_2D,ce,Ce,Te.width,Te.height,0,we,Le,Te.data);T.generateMipmaps=!1}else V?(_e&&t.texStorage2D(s.TEXTURE_2D,me,Ce,fe.width,fe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,we,Le,fe.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,fe.width,fe.height,0,we,Le,fe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&_e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Ce,Xe[0].width,Xe[0].height,fe.depth);for(let ce=0,xe=Xe.length;ce<xe;ce++)Te=Xe[ce],T.format!==Nt?we!==null?V?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Te.width,Te.height,fe.depth,we,Te.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Ce,Te.width,Te.height,fe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Te.width,Te.height,fe.depth,we,Le,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,Ce,Te.width,Te.height,fe.depth,0,we,Le,Te.data)}else{V&&_e&&t.texStorage2D(s.TEXTURE_2D,me,Ce,Xe[0].width,Xe[0].height);for(let ce=0,xe=Xe.length;ce<xe;ce++)Te=Xe[ce],T.format!==Nt?we!==null?V?t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,Ce,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Te.width,Te.height,we,Le,Te.data):t.texImage2D(s.TEXTURE_2D,ce,Ce,Te.width,Te.height,0,we,Le,Te.data)}else if(T.isDataArrayTexture)V?(_e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Le,fe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,we,Le,fe.data);else if(T.isData3DTexture)V?(_e&&t.texStorage3D(s.TEXTURE_3D,me,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Le,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,we,Le,fe.data);else if(T.isFramebufferTexture){if(_e)if(V)t.texStorage2D(s.TEXTURE_2D,me,Ce,fe.width,fe.height);else{let ce=fe.width,xe=fe.height;for(let De=0;De<me;De++)t.texImage2D(s.TEXTURE_2D,De,Ce,ce,xe,0,we,Le,null),ce>>=1,xe>>=1}}else if(Xe.length>0&&Ne){V&&_e&&t.texStorage2D(s.TEXTURE_2D,me,Ce,Xe[0].width,Xe[0].height);for(let ce=0,xe=Xe.length;ce<xe;ce++)Te=Xe[ce],V?t.texSubImage2D(s.TEXTURE_2D,ce,0,0,we,Le,Te):t.texImage2D(s.TEXTURE_2D,ce,Ce,we,Le,Te);T.generateMipmaps=!1}else V?(_e&&t.texStorage2D(s.TEXTURE_2D,me,Ce,fe.width,fe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Le,fe)):t.texImage2D(s.TEXTURE_2D,0,Ce,we,Le,fe);C(T,Ne)&&A(te),Ee.__version=he.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Be(w,T,F){if(T.image.length!==6)return;const te=ye(w,T),ue=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);const he=n.get(ue);if(ue.version!==he.__version||te===!0){t.activeTexture(s.TEXTURE0+F);const Ee=Je.getPrimaries(Je.workingColorSpace),ge=T.colorSpace===Ut?null:Je.getPrimaries(T.colorSpace),ve=T.colorSpace===Ut||Ee===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const z=T.isCompressedTexture||T.image[0].isCompressedTexture,pe=T.image[0]&&T.image[0].isDataTexture,fe=[];for(let ce=0;ce<6;ce++)!z&&!pe?fe[ce]=v(T.image[ce],!1,!0,l):fe[ce]=pe?T.image[ce].image:T.image[ce],fe[ce]=q(T,fe[ce]);const Ne=fe[0],we=S(Ne)||o,Le=r.convert(T.format,T.colorSpace),Ce=r.convert(T.type),Te=B(T.internalFormat,Le,Ce,T.colorSpace),Xe=o&&T.isVideoTexture!==!0,V=he.__version===void 0||te===!0;let _e=E(T,Ne,we);Ie(s.TEXTURE_CUBE_MAP,T,we);let me;if(z){Xe&&V&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Te,Ne.width,Ne.height);for(let ce=0;ce<6;ce++){me=fe[ce].mipmaps;for(let xe=0;xe<me.length;xe++){const De=me[xe];T.format!==Nt?Le!==null?Xe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe,Te,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe,0,0,De.width,De.height,Le,Ce,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe,Te,De.width,De.height,0,Le,Ce,De.data)}}}else{me=T.mipmaps,Xe&&V&&(me.length>0&&_e++,t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Te,fe[0].width,fe[0].height));for(let ce=0;ce<6;ce++)if(pe){Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,fe[ce].width,fe[ce].height,Le,Ce,fe[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Te,fe[ce].width,fe[ce].height,0,Le,Ce,fe[ce].data);for(let xe=0;xe<me.length;xe++){const qe=me[xe].image[ce].image;Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe+1,0,0,qe.width,qe.height,Le,Ce,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe+1,Te,qe.width,qe.height,0,Le,Ce,qe.data)}}else{Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Le,Ce,fe[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Te,Le,Ce,fe[ce]);for(let xe=0;xe<me.length;xe++){const De=me[xe];Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe+1,0,0,Le,Ce,De.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe+1,Te,Le,Ce,De.image[ce])}}}C(T,we)&&A(s.TEXTURE_CUBE_MAP),he.__version=ue.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Re(w,T,F,te,ue,he){const Ee=r.convert(F.format,F.colorSpace),ge=r.convert(F.type),ve=B(F.internalFormat,Ee,ge,F.colorSpace);if(!n.get(T).__hasExternalTextures){const pe=Math.max(1,T.width>>he),fe=Math.max(1,T.height>>he);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?t.texImage3D(ue,he,ve,pe,fe,T.depth,0,Ee,ge,null):t.texImage2D(ue,he,ve,pe,fe,0,Ee,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ne(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ue,n.get(F).__webglTexture,0,k(T)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ue,n.get(F).__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(w,T,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let te=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||ne(T)){const ue=T.depthTexture;ue&&ue.isDepthTexture&&(ue.type===un?te=s.DEPTH_COMPONENT32F:ue.type===En&&(te=s.DEPTH_COMPONENT24));const he=k(T);ne(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,te,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,he,te,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,te,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){const te=k(T);F&&ne(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,T.width,T.height):ne(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ue=0;ue<te.length;ue++){const he=te[ue],Ee=r.convert(he.format,he.colorSpace),ge=r.convert(he.type),ve=B(he.internalFormat,Ee,ge,he.colorSpace),z=k(T);F&&ne(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,z,ve,T.width,T.height):ne(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z,ve,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ve,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const te=n.get(T.depthTexture).__webglTexture,ue=k(T);if(T.depthTexture.format===Vn)ne(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(T.depthTexture.format===Ai)ne(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function y(w){const T=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Qe(T.__webglFramebuffer,w)}else if(F){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=s.createRenderbuffer(),J(T.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),J(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(w,T,F){const te=n.get(w);T!==void 0&&Re(te.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&y(w)}function j(w){const T=w.texture,F=n.get(w),te=n.get(T);w.addEventListener("dispose",L),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=T.version,a.memory.textures++);const ue=w.isWebGLCubeRenderTarget===!0,he=w.isWebGLMultipleRenderTargets===!0,Ee=S(w)||o;if(ue){F.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[ge]=[];for(let ve=0;ve<T.mipmaps.length;ve++)F.__webglFramebuffer[ge][ve]=s.createFramebuffer()}else F.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)F.__webglFramebuffer[ge]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(he)if(i.drawBuffers){const ge=w.texture;for(let ve=0,z=ge.length;ve<z;ve++){const pe=n.get(ge[ve]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ne(w)===!1){const ge=he?T:[T];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<ge.length;ve++){const z=ge[ve];F.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);const pe=r.convert(z.format,z.colorSpace),fe=r.convert(z.type),Ne=B(z.internalFormat,pe,fe,z.colorSpace,w.isXRRenderTarget===!0),we=k(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ne,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),J(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,T,Ee);for(let ge=0;ge<6;ge++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)Re(F.__webglFramebuffer[ge][ve],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ve);else Re(F.__webglFramebuffer[ge],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);C(T,Ee)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const ge=w.texture;for(let ve=0,z=ge.length;ve<z;ve++){const pe=ge[ve],fe=n.get(pe);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),Ie(s.TEXTURE_2D,pe,Ee),Re(F.__webglFramebuffer,w,pe,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),C(pe,Ee)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ge=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,te.__webglTexture),Ie(ge,T,Ee),o&&T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)Re(F.__webglFramebuffer[ve],w,T,s.COLOR_ATTACHMENT0,ge,ve);else Re(F.__webglFramebuffer,w,T,s.COLOR_ATTACHMENT0,ge,0);C(T,Ee)&&A(ge),t.unbindTexture()}w.depthBuffer&&y(w)}function U(w){const T=S(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,ue=F.length;te<ue;te++){const he=F[te];if(C(he,T)){const Ee=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=n.get(he).__webglTexture;t.bindTexture(Ee,ge),A(Ee),t.unbindTexture()}}}function P(w){if(o&&w.samples>0&&ne(w)===!1){const T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,te=w.height;let ue=s.COLOR_BUFFER_BIT;const he=[],Ee=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(w),ve=w.isWebGLMultipleRenderTargets===!0;if(ve)for(let z=0;z<T.length;z++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let z=0;z<T.length;z++){he.push(s.COLOR_ATTACHMENT0+z),w.depthBuffer&&he.push(Ee);const pe=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(pe===!1&&(w.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),ve&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[z]),pe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),ve){const fe=n.get(T[z]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,F,te,0,0,F,te,ue,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let z=0;z<T.length;z++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,ge.__webglColorRenderbuffer[z]);const pe=n.get(T[z]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function k(w){return Math.min(h,w.samples)}function ne(w){const T=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function de(w){const T=a.render.frame;_.get(w)!==T&&(_.set(w,T),w.update())}function q(w,T){const F=w.colorSpace,te=w.format,ue=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ha||F!==vt&&F!==Ut&&(Je.getTransfer(F)===it?o===!1?e.has("EXT_sRGB")===!0&&te===Nt?(w.format=ha,w.minFilter=wt,w.generateMipmaps=!1):T=ml.sRGBToLinear(T):(te!==Nt||ue!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}this.allocateTextureUnit=oe,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=le,this.rebindTextures=K,this.setupRenderTarget=j,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=ne}function Ag(s,e,t){const n=t.isWebGL2;function i(r,a=Ut){let o;const c=Je.getTransfer(a);if(r===An)return s.UNSIGNED_BYTE;if(r===sl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===al)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Yu)return s.BYTE;if(r===Ku)return s.SHORT;if(r===Ma)return s.UNSIGNED_SHORT;if(r===rl)return s.INT;if(r===En)return s.UNSIGNED_INT;if(r===un)return s.FLOAT;if(r===tr)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Zu)return s.ALPHA;if(r===Nt)return s.RGBA;if(r===$u)return s.LUMINANCE;if(r===Ju)return s.LUMINANCE_ALPHA;if(r===Vn)return s.DEPTH_COMPONENT;if(r===Ai)return s.DEPTH_STENCIL;if(r===ha)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qu)return s.RED;if(r===ol)return s.RED_INTEGER;if(r===eh)return s.RG;if(r===cl)return s.RG_INTEGER;if(r===ll)return s.RGBA_INTEGER;if(r===ds||r===fs||r===ps||r===ms)if(c===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ds)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ds)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ps)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ms)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===to||r===no||r===io||r===ro)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===to)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===no)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===io)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ro)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===so||r===ao)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===so)return c===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ao)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oo||r===co||r===lo||r===uo||r===ho||r===fo||r===po||r===mo||r===go||r===_o||r===xo||r===vo||r===yo||r===Mo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===oo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===co)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ho)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===po)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===go)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_o)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gs||r===So||r===Eo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===gs)return c===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===So)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Eo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nh||r===bo||r===To||r===Ao)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===gs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===To)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ao)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class wg extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rg={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cg extends ft{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Vn,u!==Vn&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vn&&(n=En),n===void 0&&u===Ai&&(n=Gn),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lg extends Kn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const M=[],v=[],S=new St;S.layers.enable(1),S.viewport=new tt;const b=new St;b.layers.enable(2),b.viewport=new tt;const C=[S,b],A=new wg;A.layers.enable(1),A.layers.enable(2);let B=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let N=M[I];return N===void 0&&(N=new zs,M[I]=N),N.getTargetRaySpace()},this.getControllerGrip=function(I){let N=M[I];return N===void 0&&(N=new zs,M[I]=N),N.getGripSpace()},this.getHand=function(I){let N=M[I];return N===void 0&&(N=new zs,M[I]=N),N.getHandSpace()};function R(I){const N=v.indexOf(I.inputSource);if(N===-1)return;const le=M[N];le!==void 0&&(le.update(I.inputSource,I.frame,l||a),le.dispatchEvent({type:I.type,data:I.inputSource}))}function Y(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",L);for(let I=0;I<M.length;I++){const N=v[I];N!==null&&(v[I]=null,M[I].disconnect(N))}B=null,E=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:d}),p=new qn(d.framebufferWidth,d.framebufferHeight,{format:Nt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,le=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=g.stencil?Ai:Vn,le=g.stencil?Gn:En);const ee={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ee),i.updateRenderState({layers:[f]}),p=new qn(f.textureWidth,f.textureHeight,{format:Nt,type:An,depthTexture:new Cg(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const be=e.properties.get(p);be.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(I){for(let N=0;N<I.removed.length;N++){const le=I.removed[N],re=v.indexOf(le);re>=0&&(v[re]=null,M[re].disconnect(le))}for(let N=0;N<I.added.length;N++){const le=I.added[N];let re=v.indexOf(le);if(re===-1){for(let be=0;be<M.length;be++)if(be>=v.length){v.push(le),re=be;break}else if(v[be]===null){v[be]=le,re=be;break}if(re===-1)break}const ee=M[re];ee&&ee.connect(le)}}const H=new W,x=new W;function O(I,N,le){H.setFromMatrixPosition(N.matrixWorld),x.setFromMatrixPosition(le.matrixWorld);const re=H.distanceTo(x),ee=N.projectionMatrix.elements,be=le.projectionMatrix.elements,Ie=ee[14]/(ee[10]-1),ye=ee[14]/(ee[10]+1),Se=(ee[9]+1)/ee[5],Be=(ee[9]-1)/ee[5],Re=(ee[8]-1)/ee[0],J=(be[8]+1)/be[0],Qe=Ie*Re,y=Ie*J,K=re/(-Re+J),j=K*-Re;N.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(j),I.translateZ(K),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const U=Ie+K,P=ye+K,k=Qe-j,ne=y+(re-j),de=Se*ye/P*U,q=Be*ye/P*U;I.projectionMatrix.makePerspective(k,ne,de,q,U,P),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function $(I,N){N===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(N.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;A.near=b.near=S.near=I.near,A.far=b.far=S.far=I.far,(B!==A.near||E!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,E=A.far);const N=I.parent,le=A.cameras;$(A,N);for(let re=0;re<le.length;re++)$(le[re],N);le.length===2?O(A,S,b):A.projectionMatrix.copy(S.projectionMatrix),G(I,A,N)};function G(I,N,le){le===null?I.matrix.copy(N.matrixWorld):(I.matrix.copy(le.matrixWorld),I.matrix.invert(),I.matrix.multiply(N.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(N.projectionMatrix),I.projectionMatrixInverse.copy(N.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Ri*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(I){c=I,f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let oe=null;function X(I,N){if(u=N.getViewerPose(l||a),_=N,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let re=!1;le.length!==A.cameras.length&&(A.cameras.length=0,re=!0);for(let ee=0;ee<le.length;ee++){const be=le[ee];let Ie=null;if(d!==null)Ie=d.getViewport(be);else{const Se=h.getViewSubImage(f,be);Ie=Se.viewport,ee===0&&(e.setRenderTargetTextures(p,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let ye=C[ee];ye===void 0&&(ye=new St,ye.layers.enable(ee),ye.viewport=new tt,C[ee]=ye),ye.matrix.fromArray(be.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(be.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ee===0&&(A.matrix.copy(ye.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),re===!0&&A.cameras.push(ye)}}for(let le=0;le<M.length;le++){const re=v[le],ee=M[le];re!==null&&ee!==void 0&&ee.update(re,N,l||a)}oe&&oe(I,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),_=null}const Q=new bl;Q.setAnimationLoop(X),this.setAnimationLoop=function(I){oe=I},this.dispose=function(){}}}function Pg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ml(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ig(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function l(M,v){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(M,b);const C=e.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function u(M){const v=h();M.__bindingPointIndex=v;const S=s.createBuffer(),b=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,b,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],S=M.uniforms,b=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,A=S.length;C<A;C++){const B=S[C];if(d(B,C,b)===!0){const E=B.__offset,R=Array.isArray(B.value)?B.value:[B.value];let Y=0;for(let L=0;L<R.length;L++){const H=R[L],x=g(H);typeof H=="number"?(B.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,E+Y,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=H.elements[0],B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=H.elements[0],B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=H.elements[0]):(H.toArray(B.__data,Y),Y+=x.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,E,B.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,v,S){const b=M.value;if(S[v]===void 0){if(typeof b=="number")S[v]=b;else{const C=Array.isArray(b)?b:[b],A=[];for(let B=0;B<C.length;B++)A.push(C[B].clone());S[v]=A}return!0}else if(typeof b=="number"){if(S[v]!==b)return S[v]=b,!0}else{const C=Array.isArray(S[v])?S[v]:[S[v]],A=Array.isArray(b)?b:[b];for(let B=0;B<C.length;B++){const E=C[B];if(E.equals(A[B])===!1)return E.copy(A[B]),!0}}return!1}function _(M){const v=M.uniforms;let S=0;const b=16;let C=0;for(let A=0,B=v.length;A<B;A++){const E=v[A],R={boundary:0,storage:0},Y=Array.isArray(E.value)?E.value:[E.value];for(let L=0,H=Y.length;L<H;L++){const x=Y[L],O=g(x);R.boundary+=O.boundary,R.storage+=O.storage}if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,A>0){C=S%b;const L=b-C;C!==0&&L-R.boundary<0&&(S+=b-C,E.__offset=S)}S+=R.storage}return C=S%b,C>0&&(S+=b-C),M.__size=S,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Ra{constructor(e={}){const{canvas:t=Ch(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const v=this;let S=!1,b=0,C=0,A=null,B=-1,E=null;const R=new tt,Y=new tt;let L=null;const H=new ke(0);let x=0,O=t.width,$=t.height,G=1,oe=null,X=null;const Q=new tt(0,0,O,$),I=new tt(0,0,O,$);let N=!1;const le=new Ta;let re=!1,ee=!1,be=null;const Ie=new Ve,ye=new Fe,Se=new W,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return A===null?G:1}let J=n;function Qe(D,Z){for(let ie=0;ie<D.length;ie++){const se=D[ie],ae=t.getContext(se,Z);if(ae!==null)return ae}return null}try{const D={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",_e,!1),J===null){const Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),J=Qe(Z,D),J===null)throw Qe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let y,K,j,U,P,k,ne,de,q,w,T,F,te,ue,he,Ee,ge,ve,z,pe,fe,Ne,we,Le;function Ce(){y=new Gp(J),K=new Op(J,y,e),y.init(K),Ne=new Ag(J,y,K),j=new bg(J,y,K),U=new Xp(J),P=new ug,k=new Tg(J,y,j,P,K,Ne,U),ne=new Bp(v),de=new Hp(v),q=new ed(J,K),we=new Np(J,y,q,K),w=new Vp(J,q,U,we),T=new Kp(J,w,q,U),z=new Yp(J,K,k),Ee=new Fp(P),F=new lg(v,ne,de,y,K,we,Ee),te=new Pg(v,P),ue=new dg,he=new xg(y,K),ve=new Dp(v,ne,de,j,T,f,c),ge=new Eg(v,T,K),Le=new Ig(J,U,K,j),pe=new Up(J,y,U,K),fe=new Wp(J,y,U,K),U.programs=F.programs,v.capabilities=K,v.extensions=y,v.properties=P,v.renderLists=ue,v.shadowMap=ge,v.state=j,v.info=U}Ce();const Te=new Lg(v,J);this.xr=Te,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const D=y.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=y.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(D){D!==void 0&&(G=D,this.setSize(O,$,!1))},this.getSize=function(D){return D.set(O,$)},this.setSize=function(D,Z,ie=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,$=Z,t.width=Math.floor(D*G),t.height=Math.floor(Z*G),ie===!0&&(t.style.width=D+"px",t.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(O*G,$*G).floor()},this.setDrawingBufferSize=function(D,Z,ie){O=D,$=Z,G=ie,t.width=Math.floor(D*ie),t.height=Math.floor(Z*ie),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy(Q)},this.setViewport=function(D,Z,ie,se){D.isVector4?Q.set(D.x,D.y,D.z,D.w):Q.set(D,Z,ie,se),j.viewport(R.copy(Q).multiplyScalar(G).floor())},this.getScissor=function(D){return D.copy(I)},this.setScissor=function(D,Z,ie,se){D.isVector4?I.set(D.x,D.y,D.z,D.w):I.set(D,Z,ie,se),j.scissor(Y.copy(I).multiplyScalar(G).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(D){j.setScissorTest(N=D)},this.setOpaqueSort=function(D){oe=D},this.setTransparentSort=function(D){X=D},this.getClearColor=function(D){return D.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(D=!0,Z=!0,ie=!0){let se=0;if(D){let ae=!1;if(A!==null){const Ae=A.texture.format;ae=Ae===ll||Ae===cl||Ae===ol}if(ae){const Ae=A.texture.type,Pe=Ae===An||Ae===En||Ae===Ma||Ae===Gn||Ae===sl||Ae===al,Ue=ve.getClearColor(),Oe=ve.getClearAlpha(),We=Ue.r,ze=Ue.g,He=Ue.b;Pe?(d[0]=We,d[1]=ze,d[2]=He,d[3]=Oe,J.clearBufferuiv(J.COLOR,0,d)):(_[0]=We,_[1]=ze,_[2]=He,_[3]=Oe,J.clearBufferiv(J.COLOR,0,_))}else se|=J.COLOR_BUFFER_BIT}Z&&(se|=J.DEPTH_BUFFER_BIT),ie&&(se|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ue.dispose(),he.dispose(),P.dispose(),ne.dispose(),de.dispose(),T.dispose(),we.dispose(),Le.dispose(),F.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Bt),Te.removeEventListener("sessionend",nt),be&&(be.dispose(),be=null),Et.stop()};function Xe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const D=U.autoReset,Z=ge.enabled,ie=ge.autoUpdate,se=ge.needsUpdate,ae=ge.type;Ce(),U.autoReset=D,ge.enabled=Z,ge.autoUpdate=ie,ge.needsUpdate=se,ge.type=ae}function _e(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function me(D){const Z=D.target;Z.removeEventListener("dispose",me),ce(Z)}function ce(D){xe(D),P.remove(D)}function xe(D){const Z=P.get(D).programs;Z!==void 0&&(Z.forEach(function(ie){F.releaseProgram(ie)}),D.isShaderMaterial&&F.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ie,se,ae,Ae){Z===null&&(Z=Be);const Pe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ue=Vl(D,Z,ie,se,ae);j.setMaterial(se,Pe);let Oe=ie.index,We=1;if(se.wireframe===!0){if(Oe=w.getWireframeAttribute(ie),Oe===void 0)return;We=2}const ze=ie.drawRange,He=ie.attributes.position;let ct=ze.start*We,Ct=(ze.start+ze.count)*We;Ae!==null&&(ct=Math.max(ct,Ae.start*We),Ct=Math.min(Ct,(Ae.start+Ae.count)*We)),Oe!==null?(ct=Math.max(ct,0),Ct=Math.min(Ct,Oe.count)):He!=null&&(ct=Math.max(ct,0),Ct=Math.min(Ct,He.count));const gt=Ct-ct;if(gt<0||gt===1/0)return;we.setup(ae,se,Ue,ie,Oe);let tn,at=pe;if(Oe!==null&&(tn=q.get(Oe),at=fe,at.setIndex(tn)),ae.isMesh)se.wireframe===!0?(j.setLineWidth(se.wireframeLinewidth*Re()),at.setMode(J.LINES)):at.setMode(J.TRIANGLES);else if(ae.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),j.setLineWidth(Ye*Re()),ae.isLineSegments?at.setMode(J.LINES):ae.isLineLoop?at.setMode(J.LINE_LOOP):at.setMode(J.LINE_STRIP)}else ae.isPoints?at.setMode(J.POINTS):ae.isSprite&&at.setMode(J.TRIANGLES);if(ae.isInstancedMesh)at.renderInstances(ct,gt,ae.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,as=Math.min(ie.instanceCount,Ye);at.renderInstances(ct,gt,as)}else at.render(ct,gt)};function De(D,Z,ie){D.transparent===!0&&D.side===jt&&D.forceSinglePass===!1?(D.side=Rt,D.needsUpdate=!0,ur(D,Z,ie),D.side=fn,D.needsUpdate=!0,ur(D,Z,ie),D.side=jt):ur(D,Z,ie)}this.compile=function(D,Z,ie=null){ie===null&&(ie=D),m=he.get(ie),m.init(),M.push(m),ie.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),D!==ie&&D.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),m.setupLights(v._useLegacyLights);const se=new Set;return D.traverse(function(ae){const Ae=ae.material;if(Ae)if(Array.isArray(Ae))for(let Pe=0;Pe<Ae.length;Pe++){const Ue=Ae[Pe];De(Ue,ie,ae),se.add(Ue)}else De(Ae,ie,ae),se.add(Ae)}),M.pop(),m=null,se},this.compileAsync=function(D,Z,ie=null){const se=this.compile(D,Z,ie);return new Promise(ae=>{function Ae(){if(se.forEach(function(Pe){P.get(Pe).currentProgram.isReady()&&se.delete(Pe)}),se.size===0){ae(D);return}setTimeout(Ae,10)}y.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let qe=null;function lt(D){qe&&qe(D)}function Bt(){Et.stop()}function nt(){Et.start()}const Et=new bl;Et.setAnimationLoop(lt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(D){qe=D,Te.setAnimationLoop(D),D===null?Et.stop():Et.start()},Te.addEventListener("sessionstart",Bt),Te.addEventListener("sessionend",nt),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Z),Z=Te.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Z,A),m=he.get(D,M.length),m.init(),M.push(m),Ie.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),le.setFromProjectionMatrix(Ie),ee=this.localClippingEnabled,re=Ee.init(this.clippingPlanes,ee),g=ue.get(D,p.length),g.init(),p.push(g),Yt(D,Z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(oe,X),this.info.render.frame++,re===!0&&Ee.beginShadows();const ie=m.state.shadowsArray;if(ge.render(ie,D,Z),re===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(g,D),m.setupLights(v._useLegacyLights),Z.isArrayCamera){const se=Z.cameras;for(let ae=0,Ae=se.length;ae<Ae;ae++){const Pe=se[ae];Ba(g,D,Pe,Pe.viewport)}}else Ba(g,D,Z);A!==null&&(k.updateMultisampleRenderTarget(A),k.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(v,D,Z),we.resetDefaultState(),B=-1,E=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Yt(D,Z,ie,se){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ie=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||le.intersectsSprite(D)){se&&Se.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ie);const Pe=T.update(D),Ue=D.material;Ue.visible&&g.push(D,Pe,Ue,ie,Se.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||le.intersectsObject(D))){const Pe=T.update(D),Ue=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Se.copy(D.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Se.copy(Pe.boundingSphere.center)),Se.applyMatrix4(D.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ue)){const Oe=Pe.groups;for(let We=0,ze=Oe.length;We<ze;We++){const He=Oe[We],ct=Ue[He.materialIndex];ct&&ct.visible&&g.push(D,Pe,ct,ie,Se.z,He)}}else Ue.visible&&g.push(D,Pe,Ue,ie,Se.z,null)}}const Ae=D.children;for(let Pe=0,Ue=Ae.length;Pe<Ue;Pe++)Yt(Ae[Pe],Z,ie,se)}function Ba(D,Z,ie,se){const ae=D.opaque,Ae=D.transmissive,Pe=D.transparent;m.setupLightsView(ie),re===!0&&Ee.setGlobalState(v.clippingPlanes,ie),Ae.length>0&&Gl(ae,Ae,Z,ie),se&&j.viewport(R.copy(se)),ae.length>0&&lr(ae,Z,ie),Ae.length>0&&lr(Ae,Z,ie),Pe.length>0&&lr(Pe,Z,ie),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Gl(D,Z,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const Ae=K.isWebGL2;be===null&&(be=new qn(1,1,{generateMipmaps:!0,type:y.has("EXT_color_buffer_half_float")?tr:An,minFilter:wn,samples:Ae?4:0})),v.getDrawingBufferSize(ye),Ae?be.setSize(ye.x,ye.y):be.setSize(Qr(ye.x),Qr(ye.y));const Pe=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(H),x=v.getClearAlpha(),x<1&&v.setClearColor(16777215,.5),v.clear();const Ue=v.toneMapping;v.toneMapping=Tn,lr(D,ie,se),k.updateMultisampleRenderTarget(be),k.updateRenderTargetMipmap(be);let Oe=!1;for(let We=0,ze=Z.length;We<ze;We++){const He=Z[We],ct=He.object,Ct=He.geometry,gt=He.material,tn=He.group;if(gt.side===jt&&ct.layers.test(se.layers)){const at=gt.side;gt.side=Rt,gt.needsUpdate=!0,ka(ct,ie,se,Ct,gt,tn),gt.side=at,gt.needsUpdate=!0,Oe=!0}}Oe===!0&&(k.updateMultisampleRenderTarget(be),k.updateRenderTargetMipmap(be)),v.setRenderTarget(Pe),v.setClearColor(H,x),v.toneMapping=Ue}function lr(D,Z,ie){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Ae=D.length;ae<Ae;ae++){const Pe=D[ae],Ue=Pe.object,Oe=Pe.geometry,We=se===null?Pe.material:se,ze=Pe.group;Ue.layers.test(ie.layers)&&ka(Ue,Z,ie,Oe,We,ze)}}function ka(D,Z,ie,se,ae,Ae){D.onBeforeRender(v,Z,ie,se,ae,Ae),D.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(v,Z,ie,se,D,Ae),ae.transparent===!0&&ae.side===jt&&ae.forceSinglePass===!1?(ae.side=Rt,ae.needsUpdate=!0,v.renderBufferDirect(ie,Z,se,ae,D,Ae),ae.side=fn,ae.needsUpdate=!0,v.renderBufferDirect(ie,Z,se,ae,D,Ae),ae.side=jt):v.renderBufferDirect(ie,Z,se,ae,D,Ae),D.onAfterRender(v,Z,ie,se,ae,Ae)}function ur(D,Z,ie){Z.isScene!==!0&&(Z=Be);const se=P.get(D),ae=m.state.lights,Ae=m.state.shadowsArray,Pe=ae.state.version,Ue=F.getParameters(D,ae.state,Ae,Z,ie),Oe=F.getProgramCacheKey(Ue);let We=se.programs;se.environment=D.isMeshStandardMaterial?Z.environment:null,se.fog=Z.fog,se.envMap=(D.isMeshStandardMaterial?de:ne).get(D.envMap||se.environment),We===void 0&&(D.addEventListener("dispose",me),We=new Map,se.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(se.currentProgram===ze&&se.lightsStateVersion===Pe)return Ha(D,Ue),ze}else Ue.uniforms=F.getUniforms(D),D.onBuild(ie,Ue,v),D.onBeforeCompile(Ue,v),ze=F.acquireProgram(Ue,Oe),We.set(Oe,ze),se.uniforms=Ue.uniforms;const He=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(He.clippingPlanes=Ee.uniform),Ha(D,Ue),se.needsLights=Xl(D),se.lightsStateVersion=Pe,se.needsLights&&(He.ambientLightColor.value=ae.state.ambient,He.lightProbe.value=ae.state.probe,He.directionalLights.value=ae.state.directional,He.directionalLightShadows.value=ae.state.directionalShadow,He.spotLights.value=ae.state.spot,He.spotLightShadows.value=ae.state.spotShadow,He.rectAreaLights.value=ae.state.rectArea,He.ltc_1.value=ae.state.rectAreaLTC1,He.ltc_2.value=ae.state.rectAreaLTC2,He.pointLights.value=ae.state.point,He.pointLightShadows.value=ae.state.pointShadow,He.hemisphereLights.value=ae.state.hemi,He.directionalShadowMap.value=ae.state.directionalShadowMap,He.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,He.spotShadowMap.value=ae.state.spotShadowMap,He.spotLightMatrix.value=ae.state.spotLightMatrix,He.spotLightMap.value=ae.state.spotLightMap,He.pointShadowMap.value=ae.state.pointShadowMap,He.pointShadowMatrix.value=ae.state.pointShadowMatrix),se.currentProgram=ze,se.uniformsList=null,ze}function za(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=Wr.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function Ha(D,Z){const ie=P.get(D);ie.outputColorSpace=Z.outputColorSpace,ie.instancing=Z.instancing,ie.instancingColor=Z.instancingColor,ie.skinning=Z.skinning,ie.morphTargets=Z.morphTargets,ie.morphNormals=Z.morphNormals,ie.morphColors=Z.morphColors,ie.morphTargetsCount=Z.morphTargetsCount,ie.numClippingPlanes=Z.numClippingPlanes,ie.numIntersection=Z.numClipIntersection,ie.vertexAlphas=Z.vertexAlphas,ie.vertexTangents=Z.vertexTangents,ie.toneMapping=Z.toneMapping}function Vl(D,Z,ie,se,ae){Z.isScene!==!0&&(Z=Be),k.resetTextureUnits();const Ae=Z.fog,Pe=se.isMeshStandardMaterial?Z.environment:null,Ue=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vt,Oe=(se.isMeshStandardMaterial?de:ne).get(se.envMap||Pe),We=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ze=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),He=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Ct=!!ie.morphAttributes.color;let gt=Tn;se.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=v.toneMapping);const tn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,at=tn!==void 0?tn.length:0,Ye=P.get(se),as=m.state.lights;if(re===!0&&(ee===!0||D!==E)){const Lt=D===E&&se.id===B;Ee.setState(se,D,Lt)}let ut=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==as.state.version||Ye.outputColorSpace!==Ue||ae.isInstancedMesh&&Ye.instancing===!1||!ae.isInstancedMesh&&Ye.instancing===!0||ae.isSkinnedMesh&&Ye.skinning===!1||!ae.isSkinnedMesh&&Ye.skinning===!0||ae.isInstancedMesh&&Ye.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ye.instancingColor===!1&&ae.instanceColor!==null||Ye.envMap!==Oe||se.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==We||Ye.vertexTangents!==ze||Ye.morphTargets!==He||Ye.morphNormals!==ct||Ye.morphColors!==Ct||Ye.toneMapping!==gt||K.isWebGL2===!0&&Ye.morphTargetsCount!==at)&&(ut=!0):(ut=!0,Ye.__version=se.version);let Ln=Ye.currentProgram;ut===!0&&(Ln=ur(se,Z,ae));let Ga=!1,Fi=!1,os=!1;const bt=Ln.getUniforms(),Pn=Ye.uniforms;if(j.useProgram(Ln.program)&&(Ga=!0,Fi=!0,os=!0),se.id!==B&&(B=se.id,Fi=!0),Ga||E!==D){bt.setValue(J,"projectionMatrix",D.projectionMatrix),bt.setValue(J,"viewMatrix",D.matrixWorldInverse);const Lt=bt.map.cameraPosition;Lt!==void 0&&Lt.setValue(J,Se.setFromMatrixPosition(D.matrixWorld)),K.logarithmicDepthBuffer&&bt.setValue(J,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&bt.setValue(J,"isOrthographic",D.isOrthographicCamera===!0),E!==D&&(E=D,Fi=!0,os=!0)}if(ae.isSkinnedMesh){bt.setOptional(J,ae,"bindMatrix"),bt.setOptional(J,ae,"bindMatrixInverse");const Lt=ae.skeleton;Lt&&(K.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),bt.setValue(J,"boneTexture",Lt.boneTexture,k),bt.setValue(J,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cs=ie.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0&&K.isWebGL2===!0)&&z.update(ae,ie,Ln),(Fi||Ye.receiveShadow!==ae.receiveShadow)&&(Ye.receiveShadow=ae.receiveShadow,bt.setValue(J,"receiveShadow",ae.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Pn.envMap.value=Oe,Pn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Fi&&(bt.setValue(J,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Wl(Pn,os),Ae&&se.fog===!0&&te.refreshFogUniforms(Pn,Ae),te.refreshMaterialUniforms(Pn,se,G,$,be),Wr.upload(J,za(Ye),Pn,k)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Wr.upload(J,za(Ye),Pn,k),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&bt.setValue(J,"center",ae.center),bt.setValue(J,"modelViewMatrix",ae.modelViewMatrix),bt.setValue(J,"normalMatrix",ae.normalMatrix),bt.setValue(J,"modelMatrix",ae.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Lt=se.uniformsGroups;for(let ls=0,jl=Lt.length;ls<jl;ls++)if(K.isWebGL2){const Va=Lt[ls];Le.update(Va,Ln),Le.bind(Va,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function Wl(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Xl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,Z,ie){P.get(D.texture).__webglTexture=Z,P.get(D.depthTexture).__webglTexture=ie;const se=P.get(D);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Z){const ie=P.get(D);ie.__webglFramebuffer=Z,ie.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,ie=0){A=D,b=Z,C=ie;let se=!0,ae=null,Ae=!1,Pe=!1;if(D){const Oe=P.get(D);Oe.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(J.FRAMEBUFFER,null),se=!1):Oe.__webglFramebuffer===void 0?k.setupRenderTarget(D):Oe.__hasExternalTextures&&k.rebindTextures(D,P.get(D.texture).__webglTexture,P.get(D.depthTexture).__webglTexture);const We=D.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const ze=P.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ze[Z])?ae=ze[Z][ie]:ae=ze[Z],Ae=!0):K.isWebGL2&&D.samples>0&&k.useMultisampledRTT(D)===!1?ae=P.get(D).__webglMultisampledFramebuffer:Array.isArray(ze)?ae=ze[ie]:ae=ze,R.copy(D.viewport),Y.copy(D.scissor),L=D.scissorTest}else R.copy(Q).multiplyScalar(G).floor(),Y.copy(I).multiplyScalar(G).floor(),L=N;if(j.bindFramebuffer(J.FRAMEBUFFER,ae)&&K.drawBuffers&&se&&j.drawBuffers(D,ae),j.viewport(R),j.scissor(Y),j.setScissorTest(L),Ae){const Oe=P.get(D.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Oe.__webglTexture,ie)}else if(Pe){const Oe=P.get(D.texture),We=Z||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Oe.__webglTexture,ie||0,We)}B=-1},this.readRenderTargetPixels=function(D,Z,ie,se,ae,Ae,Pe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){j.bindFramebuffer(J.FRAMEBUFFER,Ue);try{const Oe=D.texture,We=Oe.format,ze=Oe.type;if(We!==Nt&&Ne.convert(We)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===tr&&(y.has("EXT_color_buffer_half_float")||K.isWebGL2&&y.has("EXT_color_buffer_float"));if(ze!==An&&Ne.convert(ze)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===un&&(K.isWebGL2||y.has("OES_texture_float")||y.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-se&&ie>=0&&ie<=D.height-ae&&J.readPixels(Z,ie,se,ae,Ne.convert(We),Ne.convert(ze),Ae)}finally{const Oe=A!==null?P.get(A).__webglFramebuffer:null;j.bindFramebuffer(J.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(D,Z,ie=0){const se=Math.pow(2,-ie),ae=Math.floor(Z.image.width*se),Ae=Math.floor(Z.image.height*se);k.setTexture2D(Z,0),J.copyTexSubImage2D(J.TEXTURE_2D,ie,0,0,D.x,D.y,ae,Ae),j.unbindTexture()},this.copyTextureToTexture=function(D,Z,ie,se=0){const ae=Z.image.width,Ae=Z.image.height,Pe=Ne.convert(ie.format),Ue=Ne.convert(ie.type);k.setTexture2D(ie,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ie.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ie.unpackAlignment),Z.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,se,D.x,D.y,ae,Ae,Pe,Ue,Z.image.data):Z.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,se,D.x,D.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Pe,Z.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,se,D.x,D.y,Pe,Ue,Z.image),se===0&&ie.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,ie,se,ae=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=D.max.x-D.min.x+1,Pe=D.max.y-D.min.y+1,Ue=D.max.z-D.min.z+1,Oe=Ne.convert(se.format),We=Ne.convert(se.type);let ze;if(se.isData3DTexture)k.setTexture3D(se,0),ze=J.TEXTURE_3D;else if(se.isDataArrayTexture)k.setTexture2DArray(se,0),ze=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,se.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,se.unpackAlignment);const He=J.getParameter(J.UNPACK_ROW_LENGTH),ct=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Ct=J.getParameter(J.UNPACK_SKIP_PIXELS),gt=J.getParameter(J.UNPACK_SKIP_ROWS),tn=J.getParameter(J.UNPACK_SKIP_IMAGES),at=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,at.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,at.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,D.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,D.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,D.min.z),ie.isDataTexture||ie.isData3DTexture?J.texSubImage3D(ze,ae,Z.x,Z.y,Z.z,Ae,Pe,Ue,Oe,We,at.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(ze,ae,Z.x,Z.y,Z.z,Ae,Pe,Ue,Oe,at.data)):J.texSubImage3D(ze,ae,Z.x,Z.y,Z.z,Ae,Pe,Ue,Oe,We,at),J.pixelStorei(J.UNPACK_ROW_LENGTH,He),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ct),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Ct),J.pixelStorei(J.UNPACK_SKIP_ROWS,gt),J.pixelStorei(J.UNPACK_SKIP_IMAGES,tn),ae===0&&se.generateMipmaps&&J.generateMipmap(ze),j.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?k.setTextureCube(D,0):D.isData3DTexture?k.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?k.setTexture2DArray(D,0):k.setTexture2D(D,0),j.unbindTexture()},this.resetState=function(){b=0,C=0,A=null,j.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sa?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===ts?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?Wn:hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wn?rt:vt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Dg extends Ra{}Dg.prototype.isWebGL1Renderer=!0;class rr extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ng{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new W;class Ca{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ca(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _c=new W,xc=new tt,vc=new tt,Ug=new W,yc=new Ve,Dr=new W,Hs=new Jt,Mc=new Ve,Gs=new ar;class Og extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eo,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),e.ray.intersectsSphere(Hs)!==!1&&(Mc.copy(i).invert(),Gs.copy(e.ray).applyMatrix4(Mc),!(this.boundingBox!==null&&Gs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xc.fromBufferAttribute(i.attributes.skinIndex,e),vc.fromBufferAttribute(i.attributes.skinWeight,e),_c.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=vc.getComponent(r);if(a!==0){const o=xc.getComponent(r);yc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ug.copy(_c).applyMatrix4(yc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Cl extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fg extends ft{constructor(e=null,t=1,n=1,i,r,a,o,c,l=dt,u=dt,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sc=new Ve,Bg=new Ve;class La{constructor(e=[],t=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Bg;Sc.multiplyMatrices(o,t[r]),Sc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new La(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=fl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fg(t,e,e,Nt,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Cl),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class pa extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new Ve,Ec=new Ve,Nr=[],bc=new pn,kg=new Ve,Gi=new Ot,Vi=new Jt;class zg extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),bc.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Vi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mi),Ec.multiplyMatrices(n,mi),Gi.matrixWorld=Ec,Gi.raycast(e,Nr);for(let a=0,o=Nr.length;a<o;a++){const c=Nr[a];c.instanceId=r,c.object=this,t.push(c)}Nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ll extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new W,Ac=new W,wc=new Ve,Vs=new ar,Ur=new Jt;class Pa extends st{constructor(e=new Qt,t=new Ll){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Tc.fromBufferAttribute(t,i-1),Ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tc.distanceTo(Ac);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;wc.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new W,u=new W,h=new W,f=new W,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let v=p,S=M-1;v<S;v+=d){const b=_.getX(v),C=_.getX(v+1);if(l.fromBufferAttribute(m,b),u.fromBufferAttribute(m,C),Vs.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(f);B<e.near||B>e.far||t.push({distance:B,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let v=p,S=M-1;v<S;v+=d){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Vs.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Rc=new W,Cc=new W;class Hg extends Pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rc.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rc.distanceTo(Cc);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gg extends Pa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pl extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new Ve,ma=new ar,Or=new Jt,Fr=new W;class Vg extends st{constructor(e=new Qt,t=new Pl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Lc.copy(i).invert(),ma.copy(e.ray).applyMatrix4(Lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);Fr.fromBufferAttribute(h,m),Pc(Fr,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)Fr.fromBufferAttribute(h,_),Pc(Fr,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pc(s,e,t,n,i,r,a){const o=ma.distanceSqToPoint(s);if(o<t){const c=new W;ma.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Ws extends ft{constructor(e,t,n,i,r,a,o,c,l,u,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Ia extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends Ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Br(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Wg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ic(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Il(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class cr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jg extends cr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ro:r=e,o=2*t-n;break;case Co:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ro:a=e,c=2*n-t;break;case Co:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,M=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*m+(1.5+d)*g+.5*_,S=d*m-d*g;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+M*a[l+b]+v*a[c+b]+S*a[h+b];return r}}class qg extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class Yg extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class en{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Br(t,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Br(e.times,Array),values:Br(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wi:t=this.InterpolantFactoryMethodDiscrete;break;case jn:t=this.InterpolantFactoryMethodLinear;break;case _s:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wi;case this.InterpolantFactoryMethodLinear:return jn;case this.InterpolantFactoryMethodSmooth:return _s}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Wg(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_s,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=jn;class Ni extends en{}Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=wi;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class Dl extends en{}Dl.prototype.ValueTypeName="color";class Li extends en{}Li.prototype.ValueTypeName="number";class Kg extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Ht.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Yn extends en{InterpolantFactoryMethodLinear(e){return new Kg(this.times,this.values,this.getValueSize(),e)}}Yn.prototype.ValueTypeName="quaternion";Yn.prototype.DefaultInterpolation=jn;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ui extends en{}Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=wi;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Pi extends en{}Pi.prototype.ValueTypeName="vector";class Zg{constructor(e,t=-1,n,i=ih){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Jg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(en.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Xg(c);c=Ic(c,1,u),l=Ic(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];Il(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let M=0;M!==f[_].morphTargets.length;++M){const v=f[_];m.push(v.time),p.push(v.morphTarget===g?1:0)}i.push(new Li(".morphTargetInfluence["+g+"]",m,p))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Pi,d+".position",f,"pos",i),n(Yn,d+".quaternion",f,"rot",i),n(Pi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $g(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return Dl;case"quaternion":return Yn;case"bool":case"boolean":return Ni;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$g(s.type);if(s.times===void 0){const t=[],n=[];Il(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Nl{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Qg=new Nl;class Oi{constructor(e){this.manager=e!==void 0?e:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const cn={};class e_ extends Error{constructor(e,t){super(e),this.response=t}}class Ul extends Oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(cn[e]!==void 0){cn[e].push({onLoad:t,onProgress:n,onError:i});return}cn[e]=[],cn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=cn[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:v,value:S})=>{if(v)p.close();else{g+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let C=0,A=u.length;C<A;C++){const B=u[C];B.onProgress&&B.onProgress(b)}p.enqueue(S),M()}})}}});return new Response(m)}else throw new e_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Ii.add(e,l);const u=cn[e];delete cn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=cn[e];if(u===void 0)throw this.manager.itemError(e),l;delete cn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class t_ extends Oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ir("img");function c(){u(),Ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class n_ extends Oi{constructor(e){super(e)}load(e,t,n,i){const r=new ft,a=new t_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ss extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xs=new Ve,Dc=new W,Nc=new W;class Da{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),Nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nc),t.updateMatrixWorld(),Xs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class i_ extends Da{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ri*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class r_ extends ss{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new i_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uc=new Ve,Wi=new W,js=new W;class s_ extends Da{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),js.copy(n.position),js.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(js),n.updateMatrixWorld(),i.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc)}}class a_ extends ss{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new s_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class o_ extends Da{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ol extends ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new o_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class c_ extends ss{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ga{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class l_ extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Ii.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Na="\\[\\]\\.:\\/",u_=new RegExp("["+Na+"]","g"),Ua="[^"+Na+"]",h_="[^"+Na.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",Ua),f_=/(WCOD+)?/.source.replace("WCOD",h_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ua),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ua),g_=new RegExp("^"+d_+f_+p_+m_+"$"),__=["material","materials","bones","map"];class x_{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){const t=g_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=x_;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Oa{constructor(e){this.value=e}clone(){return new Oa(this.value.clone===void 0?this.value:this.value.clone())}}class Oc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);const Fc={type:"change"},qs={type:"start"},Bc={type:"end"},kr=new ar,kc=new Mn,v_=Math.cos(70*nr.DEG2RAD);class y_ extends Kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",T),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fc),n.update(),r=i.NONE},this.update=function(){const z=new W,pe=new Ht().setFromUnitVectors(e.up,new W(0,1,0)),fe=pe.clone().invert(),Ne=new W,we=new Ht,Le=new W,Ce=2*Math.PI;return function(Xe=null){const V=n.object.position;z.copy(V).sub(n.target),z.applyQuaternion(pe),o.setFromVector3(z),n.autoRotate&&r===i.NONE&&Y(E(Xe)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let _e=n.minAzimuthAngle,me=n.maxAzimuthAngle;isFinite(_e)&&isFinite(me)&&(_e<-Math.PI?_e+=Ce:_e>Math.PI&&(_e-=Ce),me<-Math.PI?me+=Ce:me>Math.PI&&(me-=Ce),_e<=me?o.theta=Math.max(_e,Math.min(me,o.theta)):o.theta=o.theta>(_e+me)/2?Math.max(_e,o.theta):Math.min(me,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?o.radius=X(o.radius):o.radius=X(o.radius*l),z.setFromSpherical(o),z.applyQuaternion(fe),V.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ce=!1;if(n.zoomToCursor&&C){let xe=null;if(n.object.isPerspectiveCamera){const De=z.length();xe=X(De*l);const qe=De-xe;n.object.position.addScaledVector(S,qe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const De=new W(b.x,b.y,0);De.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ce=!0;const qe=new W(b.x,b.y,0);qe.unproject(n.object),n.object.position.sub(qe).add(De),n.object.updateMatrixWorld(),xe=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(xe).add(n.object.position):(kr.origin.copy(n.object.position),kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(kr.direction))<v_?e.lookAt(n.target):(kc.setFromNormalAndCoplanarPoint(n.object.up,n.target),kr.intersectPlane(kc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ce=!0);return l=1,C=!1,ce||Ne.distanceToSquared(n.object.position)>a||8*(1-we.dot(n.object.quaternion))>a||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(Fc),Ne.copy(n.object.position),we.copy(n.object.quaternion),Le.copy(n.target),ce=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ue),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",ne),n.domElement.removeEventListener("wheel",w),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",ne),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Oc,c=new Oc;let l=1;const u=new W,h=new Fe,f=new Fe,d=new Fe,_=new Fe,g=new Fe,m=new Fe,p=new Fe,M=new Fe,v=new Fe,S=new W,b=new Fe;let C=!1;const A=[],B={};function E(z){return z!==null?2*Math.PI/60*n.autoRotateSpeed*z:2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function Y(z){c.theta-=z}function L(z){c.phi-=z}const H=function(){const z=new W;return function(fe,Ne){z.setFromMatrixColumn(Ne,0),z.multiplyScalar(-fe),u.add(z)}}(),x=function(){const z=new W;return function(fe,Ne){n.screenSpacePanning===!0?z.setFromMatrixColumn(Ne,1):(z.setFromMatrixColumn(Ne,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(fe),u.add(z)}}(),O=function(){const z=new W;return function(fe,Ne){const we=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;z.copy(Le).sub(n.target);let Ce=z.length();Ce*=Math.tan(n.object.fov/2*Math.PI/180),H(2*fe*Ce/we.clientHeight,n.object.matrix),x(2*Ne*Ce/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(fe*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),x(Ne*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(z){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(z){if(!n.zoomToCursor)return;C=!0;const pe=n.domElement.getBoundingClientRect(),fe=z.clientX-pe.left,Ne=z.clientY-pe.top,we=pe.width,Le=pe.height;b.x=fe/we*2-1,b.y=-(Ne/Le)*2+1,S.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(z){return Math.max(n.minDistance,Math.min(n.maxDistance,z))}function Q(z){h.set(z.clientX,z.clientY)}function I(z){oe(z),p.set(z.clientX,z.clientY)}function N(z){_.set(z.clientX,z.clientY)}function le(z){f.set(z.clientX,z.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;Y(2*Math.PI*d.x/pe.clientHeight),L(2*Math.PI*d.y/pe.clientHeight),h.copy(f),n.update()}function re(z){M.set(z.clientX,z.clientY),v.subVectors(M,p),v.y>0?$(R()):v.y<0&&G(R()),p.copy(M),n.update()}function ee(z){g.set(z.clientX,z.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g),n.update()}function be(z){oe(z),z.deltaY<0?G(R()):z.deltaY>0&&$(R()),n.update()}function Ie(z){let pe=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),pe=!0;break}pe&&(z.preventDefault(),n.update())}function ye(){if(A.length===1)h.set(A[0].pageX,A[0].pageY);else{const z=.5*(A[0].pageX+A[1].pageX),pe=.5*(A[0].pageY+A[1].pageY);h.set(z,pe)}}function Se(){if(A.length===1)_.set(A[0].pageX,A[0].pageY);else{const z=.5*(A[0].pageX+A[1].pageX),pe=.5*(A[0].pageY+A[1].pageY);_.set(z,pe)}}function Be(){const z=A[0].pageX-A[1].pageX,pe=A[0].pageY-A[1].pageY,fe=Math.sqrt(z*z+pe*pe);p.set(0,fe)}function Re(){n.enableZoom&&Be(),n.enablePan&&Se()}function J(){n.enableZoom&&Be(),n.enableRotate&&ye()}function Qe(z){if(A.length==1)f.set(z.pageX,z.pageY);else{const fe=ve(z),Ne=.5*(z.pageX+fe.x),we=.5*(z.pageY+fe.y);f.set(Ne,we)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const pe=n.domElement;Y(2*Math.PI*d.x/pe.clientHeight),L(2*Math.PI*d.y/pe.clientHeight),h.copy(f)}function y(z){if(A.length===1)g.set(z.pageX,z.pageY);else{const pe=ve(z),fe=.5*(z.pageX+pe.x),Ne=.5*(z.pageY+pe.y);g.set(fe,Ne)}m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g)}function K(z){const pe=ve(z),fe=z.pageX-pe.x,Ne=z.pageY-pe.y,we=Math.sqrt(fe*fe+Ne*Ne);M.set(0,we),v.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),$(v.y),p.copy(M)}function j(z){n.enableZoom&&K(z),n.enablePan&&y(z)}function U(z){n.enableZoom&&K(z),n.enableRotate&&Qe(z)}function P(z){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",k),n.domElement.addEventListener("pointerup",ne)),he(z),z.pointerType==="touch"?F(z):de(z))}function k(z){n.enabled!==!1&&(z.pointerType==="touch"?te(z):q(z))}function ne(z){Ee(z),A.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",ne)),n.dispatchEvent(Bc),r=i.NONE}function de(z){let pe;switch(z.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case $n.DOLLY:if(n.enableZoom===!1)return;I(z),r=i.DOLLY;break;case $n.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;N(z),r=i.PAN}else{if(n.enableRotate===!1)return;Q(z),r=i.ROTATE}break;case $n.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;Q(z),r=i.ROTATE}else{if(n.enablePan===!1)return;N(z),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qs)}function q(z){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;le(z);break;case i.DOLLY:if(n.enableZoom===!1)return;re(z);break;case i.PAN:if(n.enablePan===!1)return;ee(z);break}}function w(z){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(z.preventDefault(),n.dispatchEvent(qs),be(z),n.dispatchEvent(Bc))}function T(z){n.enabled===!1||n.enablePan===!1||Ie(z)}function F(z){switch(ge(z),A.length){case 1:switch(n.touches.ONE){case Jn.ROTATE:if(n.enableRotate===!1)return;ye(),r=i.TOUCH_ROTATE;break;case Jn.PAN:if(n.enablePan===!1)return;Se(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(),r=i.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;J(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qs)}function te(z){switch(ge(z),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Qe(z),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;y(z),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(z),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(z),n.update();break;default:r=i.NONE}}function ue(z){n.enabled!==!1&&z.preventDefault()}function he(z){A.push(z)}function Ee(z){delete B[z.pointerId];for(let pe=0;pe<A.length;pe++)if(A[pe].pointerId==z.pointerId){A.splice(pe,1);return}}function ge(z){let pe=B[z.pointerId];pe===void 0&&(pe=new Fe,B[z.pointerId]=pe),pe.set(z.pageX,z.pageY)}function ve(z){const pe=z.pointerId===A[0].pointerId?A[1]:A[0];return B[pe.pointerId]}n.domElement.addEventListener("contextmenu",ue),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",ne),n.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}var zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function M_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Hr(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fl={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function a(l,u){if(!i[l]){if(!n[l]){var h=typeof Hr=="function"&&Hr;if(!u&&h)return h(l,!0);if(o)return o(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var d=i[l]={exports:{}};n[l][0].call(d.exports,function(_){var g=n[l][1][_];return a(g||_)},d,d.exports,t,n,i,r)}return i[l].exports}for(var o=typeof Hr=="function"&&Hr,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(t,n,i){var r=t("./utils"),a=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(c){for(var l,u,h,f,d,_,g,m=[],p=0,M=c.length,v=M,S=r.getTypeOf(c)!=="string";p<c.length;)v=M-p,h=S?(l=c[p++],u=p<M?c[p++]:0,p<M?c[p++]:0):(l=c.charCodeAt(p++),u=p<M?c.charCodeAt(p++):0,p<M?c.charCodeAt(p++):0),f=l>>2,d=(3&l)<<4|u>>4,_=1<v?(15&u)<<2|h>>6:64,g=2<v?63&h:64,m.push(o.charAt(f)+o.charAt(d)+o.charAt(_)+o.charAt(g));return m.join("")},i.decode=function(c){var l,u,h,f,d,_,g=0,m=0,p="data:";if(c.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var M,v=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===o.charAt(64)&&v--,c.charAt(c.length-2)===o.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=a.uint8array?new Uint8Array(0|v):new Array(0|v);g<c.length;)l=o.indexOf(c.charAt(g++))<<2|(f=o.indexOf(c.charAt(g++)))>>4,u=(15&f)<<4|(d=o.indexOf(c.charAt(g++)))>>2,h=(3&d)<<6|(_=o.indexOf(c.charAt(g++))),M[m++]=l,d!==64&&(M[m++]=u),_!==64&&(M[m++]=h);return M}},{"./support":30,"./utils":32}],2:[function(t,n,i){var r=t("./external"),a=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),c=t("./stream/DataLengthProbe");function l(u,h,f,d,_){this.compressedSize=u,this.uncompressedSize=h,this.crc32=f,this.compression=d,this.compressedContent=_}l.prototype={getContentWorker:function(){var u=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),h=this;return u.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(u,h,f){return u.pipe(new o).pipe(new c("uncompressedSize")).pipe(h.compressWorker(f)).pipe(new c("compressedSize")).withStreamInfo("compression",h)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,i){var r=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,i){var r=t("./utils"),a=function(){for(var o,c=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;c[l]=o}return c}();n.exports=function(o,c){return o!==void 0&&o.length?r.getTypeOf(o)!=="string"?function(l,u,h,f){var d=a,_=f+h;l^=-1;for(var g=f;g<_;g++)l=l>>>8^d[255&(l^u[g])];return-1^l}(0|c,o,o.length,0):function(l,u,h,f){var d=a,_=f+h;l^=-1;for(var g=f;g<_;g++)l=l>>>8^d[255&(l^u.charCodeAt(g))];return-1^l}(0|c,o,o.length,0):0}},{"./utils":32}],5:[function(t,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,n,i){var r=null;r=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:r}},{lie:37}],7:[function(t,n,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),o=t("./utils"),c=t("./stream/GenericWorker"),l=r?"uint8array":"array";function u(h,f){c.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=f,this.meta={}}i.magic="\b\0",o.inherits(u,c),u.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,h.data),!1)},u.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(f){h.push({data:f,meta:h.meta})}},i.compressWorker=function(h){return new u("Deflate",h)},i.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,i){function r(d,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function a(d,_,g,m,p,M){var v,S,b=d.file,C=d.compression,A=M!==l.utf8encode,B=o.transformTo("string",M(b.name)),E=o.transformTo("string",l.utf8encode(b.name)),R=b.comment,Y=o.transformTo("string",M(R)),L=o.transformTo("string",l.utf8encode(R)),H=E.length!==b.name.length,x=L.length!==R.length,O="",$="",G="",oe=b.dir,X=b.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(Q.crc32=d.crc32,Q.compressedSize=d.compressedSize,Q.uncompressedSize=d.uncompressedSize);var I=0;_&&(I|=8),A||!H&&!x||(I|=2048);var N=0,le=0;oe&&(N|=16),p==="UNIX"?(le=798,N|=function(ee,be){var Ie=ee;return ee||(Ie=be?16893:33204),(65535&Ie)<<16}(b.unixPermissions,oe)):(le=20,N|=function(ee){return 63&(ee||0)}(b.dosPermissions)),v=X.getUTCHours(),v<<=6,v|=X.getUTCMinutes(),v<<=5,v|=X.getUTCSeconds()/2,S=X.getUTCFullYear()-1980,S<<=4,S|=X.getUTCMonth()+1,S<<=5,S|=X.getUTCDate(),H&&($=r(1,1)+r(u(B),4)+E,O+="up"+r($.length,2)+$),x&&(G=r(1,1)+r(u(Y),4)+L,O+="uc"+r(G.length,2)+G);var re="";return re+=`
\0`,re+=r(I,2),re+=C.magic,re+=r(v,2),re+=r(S,2),re+=r(Q.crc32,4),re+=r(Q.compressedSize,4),re+=r(Q.uncompressedSize,4),re+=r(B.length,2),re+=r(O.length,2),{fileRecord:h.LOCAL_FILE_HEADER+re+B+O,dirRecord:h.CENTRAL_FILE_HEADER+r(le,2)+re+r(Y.length,2)+"\0\0\0\0"+r(N,4)+r(m,4)+B+O+Y}}var o=t("../utils"),c=t("../stream/GenericWorker"),l=t("../utf8"),u=t("../crc32"),h=t("../signature");function f(d,_,g,m){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(f,c),f.prototype.push=function(d){var _=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,c.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},f.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var _=this.streamFiles&&!d.file.dir;if(_){var g=a(d,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(d){this.accumulate=!1;var _=this.streamFiles&&!d.file.dir,g=a(d,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return h.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var d=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-d,m=function(p,M,v,S,b){var C=o.transformTo("string",b(S));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(p,2)+r(p,2)+r(M,4)+r(v,4)+r(C.length,2)+C}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(d){this._sources.push(d);var _=this;return d.on("data",function(g){_.processChunk(g)}),d.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),d.on("error",function(g){_.error(g)}),this},f.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(d){var _=this._sources;if(!c.prototype.error.call(this,d))return!1;for(var g=0;g<_.length;g++)try{_[g].error(d)}catch{}return!0},f.prototype.lock=function(){c.prototype.lock.call(this);for(var d=this._sources,_=0;_<d.length;_++)d[_].lock()},n.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,i){var r=t("../compressions"),a=t("./ZipFileWorker");i.generateWorker=function(o,c,l){var u=new a(c.streamFiles,l,c.platform,c.encodeFileName),h=0;try{o.forEach(function(f,d){h++;var _=function(M,v){var S=M||v,b=r[S];if(!b)throw new Error(S+" is not a valid compression method !");return b}(d.options.compression,c.compression),g=d.options.compressionOptions||c.compressionOptions||{},m=d.dir,p=d.date;d._compressWorker(_,g).withStreamInfo("file",{name:f,dir:m,date:p,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=h}catch(f){u.error(f)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,i){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,o){return new r().loadAsync(a,o)},r.external=t("./external"),n.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,i){var r=t("./utils"),a=t("./external"),o=t("./utf8"),c=t("./zipEntries"),l=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function h(f){return new a.Promise(function(d,_){var g=f.decompressed.getContentWorker().pipe(new l);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==f.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(f,d){var _=this;return d=r.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(f)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",f,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new c(d);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],p=g.files;if(d.checkCRC32)for(var M=0;M<p.length;M++)m.push(h(p[M]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),p=m.files,M=0;M<p.length;M++){var v=p[M],S=v.fileNameStr,b=r.resolve(v.fileNameStr);_.file(b,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:d.createFolders}),v.dir||(_.file(b).unsafeOriginalName=S)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,i){var r=t("../utils"),a=t("../stream/GenericWorker");function o(c,l){a.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}r.inherits(o,a),o.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(u){l.push({data:u,meta:{percent:0}})}).on("error",function(u){l.isPaused?this.generatedError=u:l.error(u)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,i){var r=t("readable-stream").Readable;function a(o,c,l){r.call(this,c),this._helper=o;var u=this;o.on("data",function(h,f){u.push(h)||u._helper.pause(),l&&l(f)}).on("error",function(h){u.emit("error",h)}).on("end",function(){u.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,n,i){function r(b,C,A){var B,E=o.getTypeOf(C),R=o.extend(A||{},u);R.date=R.date||new Date,R.compression!==null&&(R.compression=R.compression.toUpperCase()),typeof R.unixPermissions=="string"&&(R.unixPermissions=parseInt(R.unixPermissions,8)),R.unixPermissions&&16384&R.unixPermissions&&(R.dir=!0),R.dosPermissions&&16&R.dosPermissions&&(R.dir=!0),R.dir&&(b=p(b)),R.createFolders&&(B=m(b))&&M.call(this,B,!0);var Y=E==="string"&&R.binary===!1&&R.base64===!1;A&&A.binary!==void 0||(R.binary=!Y),(C instanceof h&&C.uncompressedSize===0||R.dir||!C||C.length===0)&&(R.base64=!1,R.binary=!0,C="",R.compression="STORE",E="string");var L=null;L=C instanceof h||C instanceof c?C:_.isNode&&_.isStream(C)?new g(b,C):o.prepareContent(b,C,R.binary,R.optimizedBinaryString,R.base64);var H=new f(b,L,R);this.files[b]=H}var a=t("./utf8"),o=t("./utils"),c=t("./stream/GenericWorker"),l=t("./stream/StreamHelper"),u=t("./defaults"),h=t("./compressedObject"),f=t("./zipObject"),d=t("./generate"),_=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),m=function(b){b.slice(-1)==="/"&&(b=b.substring(0,b.length-1));var C=b.lastIndexOf("/");return 0<C?b.substring(0,C):""},p=function(b){return b.slice(-1)!=="/"&&(b+="/"),b},M=function(b,C){return C=C!==void 0?C:u.createFolders,b=p(b),this.files[b]||r.call(this,b,null,{dir:!0,createFolders:C}),this.files[b]};function v(b){return Object.prototype.toString.call(b)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(b){var C,A,B;for(C in this.files)B=this.files[C],(A=C.slice(this.root.length,C.length))&&C.slice(0,this.root.length)===this.root&&b(A,B)},filter:function(b){var C=[];return this.forEach(function(A,B){b(A,B)&&C.push(B)}),C},file:function(b,C,A){if(arguments.length!==1)return b=this.root+b,r.call(this,b,C,A),this;if(v(b)){var B=b;return this.filter(function(R,Y){return!Y.dir&&B.test(R)})}var E=this.files[this.root+b];return E&&!E.dir?E:null},folder:function(b){if(!b)return this;if(v(b))return this.filter(function(E,R){return R.dir&&b.test(E)});var C=this.root+b,A=M.call(this,C),B=this.clone();return B.root=A.name,B},remove:function(b){b=this.root+b;var C=this.files[b];if(C||(b.slice(-1)!=="/"&&(b+="/"),C=this.files[b]),C&&!C.dir)delete this.files[b];else for(var A=this.filter(function(E,R){return R.name.slice(0,b.length)===b}),B=0;B<A.length;B++)delete this.files[A[B].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(b){var C,A={};try{if((A=o.extend(b||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");o.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var B=A.comment||this.comment||"";C=d.generateWorker(this,A,B)}catch(E){(C=new c("error")).error(E)}return new l(C,A.type||"string",A.mimeType)},generateAsync:function(b,C){return this.generateInternalStream(b).accumulate(C)},generateNodeStream:function(b,C){return(b=b||{}).type||(b.type="nodebuffer"),this.generateInternalStream(b).toNodejsStream(C)}};n.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,i){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,i){var r=t("./DataReader");function a(o){r.call(this,o);for(var c=0;c<this.data.length;c++)o[c]=255&o[c]}t("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var c=o.charCodeAt(0),l=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===c&&this.data[f+1]===l&&this.data[f+2]===u&&this.data[f+3]===h)return f-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var c=o.charCodeAt(0),l=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),f=this.readData(4);return c===f[0]&&l===f[1]&&u===f[2]&&h===f[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,n,i){var r=t("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var c,l=0;for(this.checkOffset(o),c=this.index+o-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=o,l},readString:function(o){return r.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(t,n,i){var r=t("./Uint8ArrayReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,i){var r=t("./DataReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,n,i){var r=t("./ArrayReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,i){var r=t("../utils"),a=t("../support"),o=t("./ArrayReader"),c=t("./StringReader"),l=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");n.exports=function(h){var f=r.getTypeOf(h);return r.checkSupport(f),f!=="string"||a.uint8array?f==="nodebuffer"?new l(h):a.uint8array?new u(r.transformTo("uint8array",h)):new o(r.transformTo("array",h)):new c(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,i){var r=t("./GenericWorker"),a=t("../utils");function o(c){r.call(this,"ConvertWorker to "+c),this.destType=c}a.inherits(o,r),o.prototype.processChunk=function(c){this.push({data:a.transformTo(this.destType,c.data),meta:c.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,i){var r=t("./GenericWorker"),a=t("../crc32");function o(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,r),o.prototype.processChunk=function(c){this.streamInfo.crc32=a(c.data,this.streamInfo.crc32||0),this.push(c)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,i){var r=t("../utils"),a=t("./GenericWorker");function o(c){a.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}r.inherits(o,a),o.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}a.prototype.processChunk.call(this,c)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,i){var r=t("../utils"),a=t("./GenericWorker");function o(c){a.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(u){l.dataIsReady=!0,l.data=u,l.max=u&&u.length||0,l.type=r.getTypeOf(u),l.isPaused||l._tickAndRepeat()},function(u){l.error(u)})}r.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,i){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var c=0;c<this._listeners[a].length;c++)this._listeners[a][c].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(c){o.processChunk(c)}),a.on("end",function(){o.end()}),a.on("error",function(c){o.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=r},{}],29:[function(t,n,i){var r=t("../utils"),a=t("./ConvertWorker"),o=t("./GenericWorker"),c=t("../base64"),l=t("../support"),u=t("../external"),h=null;if(l.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(_,g){return new u.Promise(function(m,p){var M=[],v=_._internalType,S=_._outputType,b=_._mimeType;_.on("data",function(C,A){M.push(C),g&&g(A)}).on("error",function(C){M=[],p(C)}).on("end",function(){try{var C=function(A,B,E){switch(A){case"blob":return r.newBlob(r.transformTo("arraybuffer",B),E);case"base64":return c.encode(B);default:return r.transformTo(A,B)}}(S,function(A,B){var E,R=0,Y=null,L=0;for(E=0;E<B.length;E++)L+=B[E].length;switch(A){case"string":return B.join("");case"array":return Array.prototype.concat.apply([],B);case"uint8array":for(Y=new Uint8Array(L),E=0;E<B.length;E++)Y.set(B[E],R),R+=B[E].length;return Y;case"nodebuffer":return Buffer.concat(B);default:throw new Error("concat : unsupported type '"+A+"'")}}(v,M),b);m(C)}catch(A){p(A)}M=[]}).resume()})}function d(_,g,m){var p=g;switch(g){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=g,this._mimeType=m,r.checkSupport(p),this._worker=_.pipe(new a(p)),_.lock()}catch(M){this._worker=new o("error"),this._worker.error(M)}}d.prototype={accumulate:function(_){return f(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(p){g.call(m,p.data,p.meta)}):this._worker.on(_,function(){r.delay(g,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),i.blob=a.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!t("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,i){for(var r=t("./utils"),a=t("./support"),o=t("./nodejsUtils"),c=t("./stream/GenericWorker"),l=new Array(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;l[254]=l[254]=1;function h(){c.call(this,"utf-8 decode"),this.leftOver=null}function f(){c.call(this,"utf-8 encode")}i.utf8encode=function(d){return a.nodebuffer?o.newBufferFrom(d,"utf-8"):function(_){var g,m,p,M,v,S=_.length,b=0;for(M=0;M<S;M++)(64512&(m=_.charCodeAt(M)))==55296&&M+1<S&&(64512&(p=_.charCodeAt(M+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),M++),b+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(b):new Array(b),M=v=0;v<b;M++)(64512&(m=_.charCodeAt(M)))==55296&&M+1<S&&(64512&(p=_.charCodeAt(M+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),M++),m<128?g[v++]=m:(m<2048?g[v++]=192|m>>>6:(m<65536?g[v++]=224|m>>>12:(g[v++]=240|m>>>18,g[v++]=128|m>>>12&63),g[v++]=128|m>>>6&63),g[v++]=128|63&m);return g}(d)},i.utf8decode=function(d){return a.nodebuffer?r.transformTo("nodebuffer",d).toString("utf-8"):function(_){var g,m,p,M,v=_.length,S=new Array(2*v);for(g=m=0;g<v;)if((p=_[g++])<128)S[m++]=p;else if(4<(M=l[p]))S[m++]=65533,g+=M-1;else{for(p&=M===2?31:M===3?15:7;1<M&&g<v;)p=p<<6|63&_[g++],M--;1<M?S[m++]=65533:p<65536?S[m++]=p:(p-=65536,S[m++]=55296|p>>10&1023,S[m++]=56320|1023&p)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),r.applyFromCharCode(S)}(d=r.transformTo(a.uint8array?"uint8array":"array",d))},r.inherits(h,c),h.prototype.processChunk=function(d){var _=r.transformTo(a.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(M,v){var S;for((v=v||M.length)>M.length&&(v=M.length),S=v-1;0<=S&&(192&M[S])==128;)S--;return S<0||S===0?v:S+l[M[S]]>v?S:v}(_),p=_;m!==_.length&&(a.uint8array?(p=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(p=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:i.utf8decode(p),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,r.inherits(f,c),f.prototype.processChunk=function(d){this.push({data:i.utf8encode(d.data),meta:d.meta})},i.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,i){var r=t("./support"),a=t("./base64"),o=t("./nodejsUtils"),c=t("./external");function l(g){return g}function u(g,m){for(var p=0;p<g.length;++p)m[p]=255&g.charCodeAt(p);return m}t("setimmediate"),i.newBlob=function(g,m){i.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(g),p.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(g,m,p){var M=[],v=0,S=g.length;if(S<=p)return String.fromCharCode.apply(null,g);for(;v<S;)m==="array"||m==="nodebuffer"?M.push(String.fromCharCode.apply(null,g.slice(v,Math.min(v+p,S)))):M.push(String.fromCharCode.apply(null,g.subarray(v,Math.min(v+p,S)))),v+=p;return M.join("")},stringifyByChar:function(g){for(var m="",p=0;p<g.length;p++)m+=String.fromCharCode(g[p]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function f(g){var m=65536,p=i.getTypeOf(g),M=!0;if(p==="uint8array"?M=h.applyCanBeUsed.uint8array:p==="nodebuffer"&&(M=h.applyCanBeUsed.nodebuffer),M)for(;1<m;)try{return h.stringifyByChunk(g,p,m)}catch{m=Math.floor(m/2)}return h.stringifyByChar(g)}function d(g,m){for(var p=0;p<g.length;p++)m[p]=g[p];return m}i.applyFromCharCode=f;var _={};_.string={string:l,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,o.allocBuffer(g.length))}},_.array={string:f,array:l,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return f(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:l,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:f,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:l,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:f,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:l},i.transformTo=function(g,m){if(m=m||"",!g)return m;i.checkSupport(g);var p=i.getTypeOf(m);return _[p][g](m)},i.resolve=function(g){for(var m=g.split("/"),p=[],M=0;M<m.length;M++){var v=m[M];v==="."||v===""&&M!==0&&M!==m.length-1||(v===".."?p.pop():p.push(v))}return p.join("/")},i.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":r.nodebuffer&&o.isBuffer(g)?"nodebuffer":r.uint8array&&g instanceof Uint8Array?"uint8array":r.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(g){if(!r[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(g){var m,p,M="";for(p=0;p<(g||"").length;p++)M+="\\x"+((m=g.charCodeAt(p))<16?"0":"")+m.toString(16).toUpperCase();return M},i.delay=function(g,m,p){setImmediate(function(){g.apply(p||null,m||[])})},i.inherits=function(g,m){function p(){}p.prototype=m.prototype,g.prototype=new p},i.extend=function(){var g,m,p={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&p[m]===void 0&&(p[m]=arguments[g][m]);return p},i.prepareContent=function(g,m,p,M,v){return c.Promise.resolve(m).then(function(S){return r.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new c.Promise(function(b,C){var A=new FileReader;A.onload=function(B){b(B.target.result)},A.onerror=function(B){C(B.target.error)},A.readAsArrayBuffer(S)}):S}).then(function(S){var b=i.getTypeOf(S);return b?(b==="arraybuffer"?S=i.transformTo("uint8array",S):b==="string"&&(v?S=a.decode(S):p&&M!==!0&&(S=function(C){return u(C,r.uint8array?new Uint8Array(C.length):new Array(C.length))}(S))),S):c.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,i){var r=t("./reader/readerFor"),a=t("./utils"),o=t("./signature"),c=t("./zipEntry"),l=t("./support");function u(h){this.files=[],this.loadOptions=h}u.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(f)+", expected "+a.pretty(h)+")")}},isSignature:function(h,f){var d=this.reader.index;this.reader.setIndex(h);var _=this.reader.readString(4)===f;return this.reader.setIndex(d),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),f=l.uint8array?"uint8array":"array",d=a.transformTo(f,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,f,d,_=this.zip64EndOfCentralSize-44;0<_;)h=this.reader.readInt(2),f=this.reader.readInt(4),d=this.reader.readData(f),this.zip64ExtensibleData[h]={id:h,length:f,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,f;for(h=0;h<this.files.length;h++)f=this.files[h],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var f=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var _=f-d;if(0<_)this.isSignature(f,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(h){this.reader=r(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,i){var r=t("./reader/readerFor"),a=t("./utils"),o=t("./compressedObject"),c=t("./crc32"),l=t("./utf8"),u=t("./compressions"),h=t("./support");function f(d,_){this.options=d,this.loadOptions=_}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var _,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)&&u[p].magic===m)return u[p];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var _=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(_),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var _,g,m,p=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<p;)_=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[_]={id:_,length:g,value:m};d.setIndex(p)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var p=a.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var _=r(d.value);return _.readInt(1)!==1||c(this.fileName)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var _=r(d.value);return _.readInt(1)!==1||c(this.fileComment)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null}},n.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,i){function r(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),c=t("./utf8"),l=t("./compressedObject"),u=t("./stream/GenericWorker");r.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var p=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var M=!this._dataBinary;M&&!p&&(g=g.pipe(new c.Utf8EncodeWorker)),!M&&p&&(g=g.pipe(new c.Utf8DecodeWorker))}catch(v){(g=new u("error")).error(v)}return new a(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof l&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof u?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)r.prototype[h[d]]=f;n.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,i){(function(r){var a,o,c=r.MutationObserver||r.WebKitMutationObserver;if(c){var l=0,u=new c(_),h=r.document.createTextNode("");u.observe(h,{characterData:!0}),a=function(){h.data=l=++l%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var g=r.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},r.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var f=new r.MessageChannel;f.port1.onmessage=_,a=function(){f.port2.postMessage(0)}}var d=[];function _(){var g,m;o=!0;for(var p=d.length;p;){for(m=d,d=[],g=-1;++g<p;)m[g]();p=d.length}o=!1}n.exports=function(g){d.push(g)!==1||o||a()}}).call(this,typeof zr<"u"?zr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,i){var r=t("immediate");function a(){}var o={},c=["REJECTED"],l=["FULFILLED"],u=["PENDING"];function h(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,p!==a&&g(this,p)}function f(p,M,v){this.promise=p,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function d(p,M,v){r(function(){var S;try{S=M(v)}catch(b){return o.reject(p,b)}S===p?o.reject(p,new TypeError("Cannot resolve promise with itself")):o.resolve(p,S)})}function _(p){var M=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof M=="function")return function(){M.apply(p,arguments)}}function g(p,M){var v=!1;function S(A){v||(v=!0,o.reject(p,A))}function b(A){v||(v=!0,o.resolve(p,A))}var C=m(function(){M(b,S)});C.status==="error"&&S(C.value)}function m(p,M){var v={};try{v.value=p(M),v.status="success"}catch(S){v.status="error",v.value=S}return v}(n.exports=h).prototype.finally=function(p){if(typeof p!="function")return this;var M=this.constructor;return this.then(function(v){return M.resolve(p()).then(function(){return v})},function(v){return M.resolve(p()).then(function(){throw v})})},h.prototype.catch=function(p){return this.then(null,p)},h.prototype.then=function(p,M){if(typeof p!="function"&&this.state===l||typeof M!="function"&&this.state===c)return this;var v=new this.constructor(a);return this.state!==u?d(v,this.state===l?p:M,this.outcome):this.queue.push(new f(v,p,M)),v},f.prototype.callFulfilled=function(p){o.resolve(this.promise,p)},f.prototype.otherCallFulfilled=function(p){d(this.promise,this.onFulfilled,p)},f.prototype.callRejected=function(p){o.reject(this.promise,p)},f.prototype.otherCallRejected=function(p){d(this.promise,this.onRejected,p)},o.resolve=function(p,M){var v=m(_,M);if(v.status==="error")return o.reject(p,v.value);var S=v.value;if(S)g(p,S);else{p.state=l,p.outcome=M;for(var b=-1,C=p.queue.length;++b<C;)p.queue[b].callFulfilled(M)}return p},o.reject=function(p,M){p.state=c,p.outcome=M;for(var v=-1,S=p.queue.length;++v<S;)p.queue[v].callRejected(M);return p},h.resolve=function(p){return p instanceof this?p:o.resolve(new this(a),p)},h.reject=function(p){var M=new this(a);return o.reject(M,p)},h.all=function(p){var M=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=p.length,S=!1;if(!v)return this.resolve([]);for(var b=new Array(v),C=0,A=-1,B=new this(a);++A<v;)E(p[A],A);return B;function E(R,Y){M.resolve(R).then(function(L){b[Y]=L,++C!==v||S||(S=!0,o.resolve(B,b))},function(L){S||(S=!0,o.reject(B,L))})}},h.race=function(p){var M=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=p.length,S=!1;if(!v)return this.resolve([]);for(var b=-1,C=new this(a);++b<v;)A=p[b],M.resolve(A).then(function(B){S||(S=!0,o.resolve(C,B))},function(B){S||(S=!0,o.reject(C,B))});var A;return C}},{immediate:36}],38:[function(t,n,i){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,i){var r=t("./zlib/deflate"),a=t("./utils/common"),o=t("./utils/strings"),c=t("./zlib/messages"),l=t("./zlib/zstream"),u=Object.prototype.toString,h=0,f=-1,d=0,_=8;function g(p){if(!(this instanceof g))return new g(p);this.options=a.assign({level:f,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},p||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var v=r.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(v!==h)throw new Error(c[v]);if(M.header&&r.deflateSetHeader(this.strm,M.header),M.dictionary){var S;if(S=typeof M.dictionary=="string"?o.string2buf(M.dictionary):u.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(v=r.deflateSetDictionary(this.strm,S))!==h)throw new Error(c[v]);this._dict_set=!0}}function m(p,M){var v=new g(M);if(v.push(p,!0),v.err)throw v.msg||c[v.err];return v.result}g.prototype.push=function(p,M){var v,S,b=this.strm,C=this.options.chunkSize;if(this.ended)return!1;S=M===~~M?M:M===!0?4:0,typeof p=="string"?b.input=o.string2buf(p):u.call(p)==="[object ArrayBuffer]"?b.input=new Uint8Array(p):b.input=p,b.next_in=0,b.avail_in=b.input.length;do{if(b.avail_out===0&&(b.output=new a.Buf8(C),b.next_out=0,b.avail_out=C),(v=r.deflate(b,S))!==1&&v!==h)return this.onEnd(v),!(this.ended=!0);b.avail_out!==0&&(b.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(b.output,b.next_out))):this.onData(a.shrinkBuf(b.output,b.next_out)))}while((0<b.avail_in||b.avail_out===0)&&v!==1);return S===4?(v=r.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===h):S!==2||(this.onEnd(h),!(b.avail_out=0))},g.prototype.onData=function(p){this.chunks.push(p)},g.prototype.onEnd=function(p){p===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},i.Deflate=g,i.deflate=m,i.deflateRaw=function(p,M){return(M=M||{}).raw=!0,m(p,M)},i.gzip=function(p,M){return(M=M||{}).gzip=!0,m(p,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,i){var r=t("./zlib/inflate"),a=t("./utils/common"),o=t("./utils/strings"),c=t("./zlib/constants"),l=t("./zlib/messages"),u=t("./zlib/zstream"),h=t("./zlib/gzheader"),f=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var p=r.inflateInit2(this.strm,m.windowBits);if(p!==c.Z_OK)throw new Error(l[p]);this.header=new h,r.inflateGetHeader(this.strm,this.header)}function _(g,m){var p=new d(m);if(p.push(g,!0),p.err)throw p.msg||l[p.err];return p.result}d.prototype.push=function(g,m){var p,M,v,S,b,C,A=this.strm,B=this.options.chunkSize,E=this.options.dictionary,R=!1;if(this.ended)return!1;M=m===~~m?m:m===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof g=="string"?A.input=o.binstring2buf(g):f.call(g)==="[object ArrayBuffer]"?A.input=new Uint8Array(g):A.input=g,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(B),A.next_out=0,A.avail_out=B),(p=r.inflate(A,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&E&&(C=typeof E=="string"?o.string2buf(E):f.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,p=r.inflateSetDictionary(this.strm,C)),p===c.Z_BUF_ERROR&&R===!0&&(p=c.Z_OK,R=!1),p!==c.Z_STREAM_END&&p!==c.Z_OK)return this.onEnd(p),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&p!==c.Z_STREAM_END&&(A.avail_in!==0||M!==c.Z_FINISH&&M!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=o.utf8border(A.output,A.next_out),S=A.next_out-v,b=o.buf2string(A.output,v),A.next_out=S,A.avail_out=B-S,S&&a.arraySet(A.output,A.output,v,S,0),this.onData(b)):this.onData(a.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(R=!0)}while((0<A.avail_in||A.avail_out===0)&&p!==c.Z_STREAM_END);return p===c.Z_STREAM_END&&(M=c.Z_FINISH),M===c.Z_FINISH?(p=r.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===c.Z_OK):M!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(A.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},i.Inflate=d,i.inflate=_,i.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var u=l.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var h in u)u.hasOwnProperty(h)&&(c[h]=u[h])}}return c},i.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var a={arraySet:function(c,l,u,h,f){if(l.subarray&&c.subarray)c.set(l.subarray(u,u+h),f);else for(var d=0;d<h;d++)c[f+d]=l[u+d]},flattenChunks:function(c){var l,u,h,f,d,_;for(l=h=0,u=c.length;l<u;l++)h+=c[l].length;for(_=new Uint8Array(h),l=f=0,u=c.length;l<u;l++)d=c[l],_.set(d,f),f+=d.length;return _}},o={arraySet:function(c,l,u,h,f){for(var d=0;d<h;d++)c[f+d]=l[u+d]},flattenChunks:function(c){return[].concat.apply([],c)}};i.setTyped=function(c){c?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,o))},i.setTyped(r)},{}],42:[function(t,n,i){var r=t("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var c=new r.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function u(h,f){if(f<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(h,f));for(var d="",_=0;_<f;_++)d+=String.fromCharCode(h[_]);return d}c[254]=c[254]=1,i.string2buf=function(h){var f,d,_,g,m,p=h.length,M=0;for(g=0;g<p;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),M+=d<128?1:d<2048?2:d<65536?3:4;for(f=new r.Buf8(M),g=m=0;m<M;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),d<128?f[m++]=d:(d<2048?f[m++]=192|d>>>6:(d<65536?f[m++]=224|d>>>12:(f[m++]=240|d>>>18,f[m++]=128|d>>>12&63),f[m++]=128|d>>>6&63),f[m++]=128|63&d);return f},i.buf2binstring=function(h){return u(h,h.length)},i.binstring2buf=function(h){for(var f=new r.Buf8(h.length),d=0,_=f.length;d<_;d++)f[d]=h.charCodeAt(d);return f},i.buf2string=function(h,f){var d,_,g,m,p=f||h.length,M=new Array(2*p);for(d=_=0;d<p;)if((g=h[d++])<128)M[_++]=g;else if(4<(m=c[g]))M[_++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<p;)g=g<<6|63&h[d++],m--;1<m?M[_++]=65533:g<65536?M[_++]=g:(g-=65536,M[_++]=55296|g>>10&1023,M[_++]=56320|1023&g)}return u(M,_)},i.utf8border=function(h,f){var d;for((f=f||h.length)>h.length&&(f=h.length),d=f-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?f:d+c[h[d]]>f?d:f}},{"./common":41}],43:[function(t,n,i){n.exports=function(r,a,o,c){for(var l=65535&r|0,u=r>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;u=u+(l=l+a[c++]|0)|0,--h;);l%=65521,u%=65521}return l|u<<16|0}},{}],44:[function(t,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,i){var r=function(){for(var a,o=[],c=0;c<256;c++){a=c;for(var l=0;l<8;l++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}return o}();n.exports=function(a,o,c,l){var u=r,h=l+c;a^=-1;for(var f=l;f<h;f++)a=a>>>8^u[255&(a^o[f])];return-1^a}},{}],46:[function(t,n,i){var r,a=t("../utils/common"),o=t("./trees"),c=t("./adler32"),l=t("./crc32"),u=t("./messages"),h=0,f=4,d=0,_=-2,g=-1,m=4,p=2,M=8,v=9,S=286,b=30,C=19,A=2*S+1,B=15,E=3,R=258,Y=R+E+1,L=42,H=113,x=1,O=2,$=3,G=4;function oe(y,K){return y.msg=u[K],K}function X(y){return(y<<1)-(4<y?9:0)}function Q(y){for(var K=y.length;0<=--K;)y[K]=0}function I(y){var K=y.state,j=K.pending;j>y.avail_out&&(j=y.avail_out),j!==0&&(a.arraySet(y.output,K.pending_buf,K.pending_out,j,y.next_out),y.next_out+=j,K.pending_out+=j,y.total_out+=j,y.avail_out-=j,K.pending-=j,K.pending===0&&(K.pending_out=0))}function N(y,K){o._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,K),y.block_start=y.strstart,I(y.strm)}function le(y,K){y.pending_buf[y.pending++]=K}function re(y,K){y.pending_buf[y.pending++]=K>>>8&255,y.pending_buf[y.pending++]=255&K}function ee(y,K){var j,U,P=y.max_chain_length,k=y.strstart,ne=y.prev_length,de=y.nice_match,q=y.strstart>y.w_size-Y?y.strstart-(y.w_size-Y):0,w=y.window,T=y.w_mask,F=y.prev,te=y.strstart+R,ue=w[k+ne-1],he=w[k+ne];y.prev_length>=y.good_match&&(P>>=2),de>y.lookahead&&(de=y.lookahead);do if(w[(j=K)+ne]===he&&w[j+ne-1]===ue&&w[j]===w[k]&&w[++j]===w[k+1]){k+=2,j++;do;while(w[++k]===w[++j]&&w[++k]===w[++j]&&w[++k]===w[++j]&&w[++k]===w[++j]&&w[++k]===w[++j]&&w[++k]===w[++j]&&w[++k]===w[++j]&&w[++k]===w[++j]&&k<te);if(U=R-(te-k),k=te-R,ne<U){if(y.match_start=K,de<=(ne=U))break;ue=w[k+ne-1],he=w[k+ne]}}while((K=F[K&T])>q&&--P!=0);return ne<=y.lookahead?ne:y.lookahead}function be(y){var K,j,U,P,k,ne,de,q,w,T,F=y.w_size;do{if(P=y.window_size-y.lookahead-y.strstart,y.strstart>=F+(F-Y)){for(a.arraySet(y.window,y.window,F,F,0),y.match_start-=F,y.strstart-=F,y.block_start-=F,K=j=y.hash_size;U=y.head[--K],y.head[K]=F<=U?U-F:0,--j;);for(K=j=F;U=y.prev[--K],y.prev[K]=F<=U?U-F:0,--j;);P+=F}if(y.strm.avail_in===0)break;if(ne=y.strm,de=y.window,q=y.strstart+y.lookahead,w=P,T=void 0,T=ne.avail_in,w<T&&(T=w),j=T===0?0:(ne.avail_in-=T,a.arraySet(de,ne.input,ne.next_in,T,q),ne.state.wrap===1?ne.adler=c(ne.adler,de,T,q):ne.state.wrap===2&&(ne.adler=l(ne.adler,de,T,q)),ne.next_in+=T,ne.total_in+=T,T),y.lookahead+=j,y.lookahead+y.insert>=E)for(k=y.strstart-y.insert,y.ins_h=y.window[k],y.ins_h=(y.ins_h<<y.hash_shift^y.window[k+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[k+E-1])&y.hash_mask,y.prev[k&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=k,k++,y.insert--,!(y.lookahead+y.insert<E)););}while(y.lookahead<Y&&y.strm.avail_in!==0)}function Ie(y,K){for(var j,U;;){if(y.lookahead<Y){if(be(y),y.lookahead<Y&&K===h)return x;if(y.lookahead===0)break}if(j=0,y.lookahead>=E&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,j=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),j!==0&&y.strstart-j<=y.w_size-Y&&(y.match_length=ee(y,j)),y.match_length>=E)if(U=o._tr_tally(y,y.strstart-y.match_start,y.match_length-E),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=E){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,j=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else U=o._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(U&&(N(y,!1),y.strm.avail_out===0))return x}return y.insert=y.strstart<E-1?y.strstart:E-1,K===f?(N(y,!0),y.strm.avail_out===0?$:G):y.last_lit&&(N(y,!1),y.strm.avail_out===0)?x:O}function ye(y,K){for(var j,U,P;;){if(y.lookahead<Y){if(be(y),y.lookahead<Y&&K===h)return x;if(y.lookahead===0)break}if(j=0,y.lookahead>=E&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,j=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=E-1,j!==0&&y.prev_length<y.max_lazy_match&&y.strstart-j<=y.w_size-Y&&(y.match_length=ee(y,j),y.match_length<=5&&(y.strategy===1||y.match_length===E&&4096<y.strstart-y.match_start)&&(y.match_length=E-1)),y.prev_length>=E&&y.match_length<=y.prev_length){for(P=y.strstart+y.lookahead-E,U=o._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-E),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=P&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+E-1])&y.hash_mask,j=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=E-1,y.strstart++,U&&(N(y,!1),y.strm.avail_out===0))return x}else if(y.match_available){if((U=o._tr_tally(y,0,y.window[y.strstart-1]))&&N(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return x}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(U=o._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<E-1?y.strstart:E-1,K===f?(N(y,!0),y.strm.avail_out===0?$:G):y.last_lit&&(N(y,!1),y.strm.avail_out===0)?x:O}function Se(y,K,j,U,P){this.good_length=y,this.max_lazy=K,this.nice_length=j,this.max_chain=U,this.func=P}function Be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*A),this.dyn_dtree=new a.Buf16(2*(2*b+1)),this.bl_tree=new a.Buf16(2*(2*C+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(B+1),this.heap=new a.Buf16(2*S+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Re(y){var K;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=p,(K=y.state).pending=0,K.pending_out=0,K.wrap<0&&(K.wrap=-K.wrap),K.status=K.wrap?L:H,y.adler=K.wrap===2?0:1,K.last_flush=h,o._tr_init(K),d):oe(y,_)}function J(y){var K=Re(y);return K===d&&function(j){j.window_size=2*j.w_size,Q(j.head),j.max_lazy_match=r[j.level].max_lazy,j.good_match=r[j.level].good_length,j.nice_match=r[j.level].nice_length,j.max_chain_length=r[j.level].max_chain,j.strstart=0,j.block_start=0,j.lookahead=0,j.insert=0,j.match_length=j.prev_length=E-1,j.match_available=0,j.ins_h=0}(y.state),K}function Qe(y,K,j,U,P,k){if(!y)return _;var ne=1;if(K===g&&(K=6),U<0?(ne=0,U=-U):15<U&&(ne=2,U-=16),P<1||v<P||j!==M||U<8||15<U||K<0||9<K||k<0||m<k)return oe(y,_);U===8&&(U=9);var de=new Be;return(y.state=de).strm=y,de.wrap=ne,de.gzhead=null,de.w_bits=U,de.w_size=1<<de.w_bits,de.w_mask=de.w_size-1,de.hash_bits=P+7,de.hash_size=1<<de.hash_bits,de.hash_mask=de.hash_size-1,de.hash_shift=~~((de.hash_bits+E-1)/E),de.window=new a.Buf8(2*de.w_size),de.head=new a.Buf16(de.hash_size),de.prev=new a.Buf16(de.w_size),de.lit_bufsize=1<<P+6,de.pending_buf_size=4*de.lit_bufsize,de.pending_buf=new a.Buf8(de.pending_buf_size),de.d_buf=1*de.lit_bufsize,de.l_buf=3*de.lit_bufsize,de.level=K,de.strategy=k,de.method=j,J(y)}r=[new Se(0,0,0,0,function(y,K){var j=65535;for(j>y.pending_buf_size-5&&(j=y.pending_buf_size-5);;){if(y.lookahead<=1){if(be(y),y.lookahead===0&&K===h)return x;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var U=y.block_start+j;if((y.strstart===0||y.strstart>=U)&&(y.lookahead=y.strstart-U,y.strstart=U,N(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-Y&&(N(y,!1),y.strm.avail_out===0))return x}return y.insert=0,K===f?(N(y,!0),y.strm.avail_out===0?$:G):(y.strstart>y.block_start&&(N(y,!1),y.strm.avail_out),x)}),new Se(4,4,8,4,Ie),new Se(4,5,16,8,Ie),new Se(4,6,32,32,Ie),new Se(4,4,16,16,ye),new Se(8,16,32,32,ye),new Se(8,16,128,128,ye),new Se(8,32,128,256,ye),new Se(32,128,258,1024,ye),new Se(32,258,258,4096,ye)],i.deflateInit=function(y,K){return Qe(y,K,M,15,8,0)},i.deflateInit2=Qe,i.deflateReset=J,i.deflateResetKeep=Re,i.deflateSetHeader=function(y,K){return y&&y.state?y.state.wrap!==2?_:(y.state.gzhead=K,d):_},i.deflate=function(y,K){var j,U,P,k;if(!y||!y.state||5<K||K<0)return y?oe(y,_):_;if(U=y.state,!y.output||!y.input&&y.avail_in!==0||U.status===666&&K!==f)return oe(y,y.avail_out===0?-5:_);if(U.strm=y,j=U.last_flush,U.last_flush=K,U.status===L)if(U.wrap===2)y.adler=0,le(U,31),le(U,139),le(U,8),U.gzhead?(le(U,(U.gzhead.text?1:0)+(U.gzhead.hcrc?2:0)+(U.gzhead.extra?4:0)+(U.gzhead.name?8:0)+(U.gzhead.comment?16:0)),le(U,255&U.gzhead.time),le(U,U.gzhead.time>>8&255),le(U,U.gzhead.time>>16&255),le(U,U.gzhead.time>>24&255),le(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),le(U,255&U.gzhead.os),U.gzhead.extra&&U.gzhead.extra.length&&(le(U,255&U.gzhead.extra.length),le(U,U.gzhead.extra.length>>8&255)),U.gzhead.hcrc&&(y.adler=l(y.adler,U.pending_buf,U.pending,0)),U.gzindex=0,U.status=69):(le(U,0),le(U,0),le(U,0),le(U,0),le(U,0),le(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),le(U,3),U.status=H);else{var ne=M+(U.w_bits-8<<4)<<8;ne|=(2<=U.strategy||U.level<2?0:U.level<6?1:U.level===6?2:3)<<6,U.strstart!==0&&(ne|=32),ne+=31-ne%31,U.status=H,re(U,ne),U.strstart!==0&&(re(U,y.adler>>>16),re(U,65535&y.adler)),y.adler=1}if(U.status===69)if(U.gzhead.extra){for(P=U.pending;U.gzindex<(65535&U.gzhead.extra.length)&&(U.pending!==U.pending_buf_size||(U.gzhead.hcrc&&U.pending>P&&(y.adler=l(y.adler,U.pending_buf,U.pending-P,P)),I(y),P=U.pending,U.pending!==U.pending_buf_size));)le(U,255&U.gzhead.extra[U.gzindex]),U.gzindex++;U.gzhead.hcrc&&U.pending>P&&(y.adler=l(y.adler,U.pending_buf,U.pending-P,P)),U.gzindex===U.gzhead.extra.length&&(U.gzindex=0,U.status=73)}else U.status=73;if(U.status===73)if(U.gzhead.name){P=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>P&&(y.adler=l(y.adler,U.pending_buf,U.pending-P,P)),I(y),P=U.pending,U.pending===U.pending_buf_size)){k=1;break}k=U.gzindex<U.gzhead.name.length?255&U.gzhead.name.charCodeAt(U.gzindex++):0,le(U,k)}while(k!==0);U.gzhead.hcrc&&U.pending>P&&(y.adler=l(y.adler,U.pending_buf,U.pending-P,P)),k===0&&(U.gzindex=0,U.status=91)}else U.status=91;if(U.status===91)if(U.gzhead.comment){P=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>P&&(y.adler=l(y.adler,U.pending_buf,U.pending-P,P)),I(y),P=U.pending,U.pending===U.pending_buf_size)){k=1;break}k=U.gzindex<U.gzhead.comment.length?255&U.gzhead.comment.charCodeAt(U.gzindex++):0,le(U,k)}while(k!==0);U.gzhead.hcrc&&U.pending>P&&(y.adler=l(y.adler,U.pending_buf,U.pending-P,P)),k===0&&(U.status=103)}else U.status=103;if(U.status===103&&(U.gzhead.hcrc?(U.pending+2>U.pending_buf_size&&I(y),U.pending+2<=U.pending_buf_size&&(le(U,255&y.adler),le(U,y.adler>>8&255),y.adler=0,U.status=H)):U.status=H),U.pending!==0){if(I(y),y.avail_out===0)return U.last_flush=-1,d}else if(y.avail_in===0&&X(K)<=X(j)&&K!==f)return oe(y,-5);if(U.status===666&&y.avail_in!==0)return oe(y,-5);if(y.avail_in!==0||U.lookahead!==0||K!==h&&U.status!==666){var de=U.strategy===2?function(q,w){for(var T;;){if(q.lookahead===0&&(be(q),q.lookahead===0)){if(w===h)return x;break}if(q.match_length=0,T=o._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++,T&&(N(q,!1),q.strm.avail_out===0))return x}return q.insert=0,w===f?(N(q,!0),q.strm.avail_out===0?$:G):q.last_lit&&(N(q,!1),q.strm.avail_out===0)?x:O}(U,K):U.strategy===3?function(q,w){for(var T,F,te,ue,he=q.window;;){if(q.lookahead<=R){if(be(q),q.lookahead<=R&&w===h)return x;if(q.lookahead===0)break}if(q.match_length=0,q.lookahead>=E&&0<q.strstart&&(F=he[te=q.strstart-1])===he[++te]&&F===he[++te]&&F===he[++te]){ue=q.strstart+R;do;while(F===he[++te]&&F===he[++te]&&F===he[++te]&&F===he[++te]&&F===he[++te]&&F===he[++te]&&F===he[++te]&&F===he[++te]&&te<ue);q.match_length=R-(ue-te),q.match_length>q.lookahead&&(q.match_length=q.lookahead)}if(q.match_length>=E?(T=o._tr_tally(q,1,q.match_length-E),q.lookahead-=q.match_length,q.strstart+=q.match_length,q.match_length=0):(T=o._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++),T&&(N(q,!1),q.strm.avail_out===0))return x}return q.insert=0,w===f?(N(q,!0),q.strm.avail_out===0?$:G):q.last_lit&&(N(q,!1),q.strm.avail_out===0)?x:O}(U,K):r[U.level].func(U,K);if(de!==$&&de!==G||(U.status=666),de===x||de===$)return y.avail_out===0&&(U.last_flush=-1),d;if(de===O&&(K===1?o._tr_align(U):K!==5&&(o._tr_stored_block(U,0,0,!1),K===3&&(Q(U.head),U.lookahead===0&&(U.strstart=0,U.block_start=0,U.insert=0))),I(y),y.avail_out===0))return U.last_flush=-1,d}return K!==f?d:U.wrap<=0?1:(U.wrap===2?(le(U,255&y.adler),le(U,y.adler>>8&255),le(U,y.adler>>16&255),le(U,y.adler>>24&255),le(U,255&y.total_in),le(U,y.total_in>>8&255),le(U,y.total_in>>16&255),le(U,y.total_in>>24&255)):(re(U,y.adler>>>16),re(U,65535&y.adler)),I(y),0<U.wrap&&(U.wrap=-U.wrap),U.pending!==0?d:1)},i.deflateEnd=function(y){var K;return y&&y.state?(K=y.state.status)!==L&&K!==69&&K!==73&&K!==91&&K!==103&&K!==H&&K!==666?oe(y,_):(y.state=null,K===H?oe(y,-3):d):_},i.deflateSetDictionary=function(y,K){var j,U,P,k,ne,de,q,w,T=K.length;if(!y||!y.state||(k=(j=y.state).wrap)===2||k===1&&j.status!==L||j.lookahead)return _;for(k===1&&(y.adler=c(y.adler,K,T,0)),j.wrap=0,T>=j.w_size&&(k===0&&(Q(j.head),j.strstart=0,j.block_start=0,j.insert=0),w=new a.Buf8(j.w_size),a.arraySet(w,K,T-j.w_size,j.w_size,0),K=w,T=j.w_size),ne=y.avail_in,de=y.next_in,q=y.input,y.avail_in=T,y.next_in=0,y.input=K,be(j);j.lookahead>=E;){for(U=j.strstart,P=j.lookahead-(E-1);j.ins_h=(j.ins_h<<j.hash_shift^j.window[U+E-1])&j.hash_mask,j.prev[U&j.w_mask]=j.head[j.ins_h],j.head[j.ins_h]=U,U++,--P;);j.strstart=U,j.lookahead=E-1,be(j)}return j.strstart+=j.lookahead,j.block_start=j.strstart,j.insert=j.lookahead,j.lookahead=0,j.match_length=j.prev_length=E-1,j.match_available=0,y.next_in=de,y.input=q,y.avail_in=ne,j.wrap=k,d},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,i){n.exports=function(r,a){var o,c,l,u,h,f,d,_,g,m,p,M,v,S,b,C,A,B,E,R,Y,L,H,x,O;o=r.state,c=r.next_in,x=r.input,l=c+(r.avail_in-5),u=r.next_out,O=r.output,h=u-(a-r.avail_out),f=u+(r.avail_out-257),d=o.dmax,_=o.wsize,g=o.whave,m=o.wnext,p=o.window,M=o.hold,v=o.bits,S=o.lencode,b=o.distcode,C=(1<<o.lenbits)-1,A=(1<<o.distbits)-1;e:do{v<15&&(M+=x[c++]<<v,v+=8,M+=x[c++]<<v,v+=8),B=S[M&C];t:for(;;){if(M>>>=E=B>>>24,v-=E,(E=B>>>16&255)===0)O[u++]=65535&B;else{if(!(16&E)){if(!(64&E)){B=S[(65535&B)+(M&(1<<E)-1)];continue t}if(32&E){o.mode=12;break e}r.msg="invalid literal/length code",o.mode=30;break e}R=65535&B,(E&=15)&&(v<E&&(M+=x[c++]<<v,v+=8),R+=M&(1<<E)-1,M>>>=E,v-=E),v<15&&(M+=x[c++]<<v,v+=8,M+=x[c++]<<v,v+=8),B=b[M&A];n:for(;;){if(M>>>=E=B>>>24,v-=E,!(16&(E=B>>>16&255))){if(!(64&E)){B=b[(65535&B)+(M&(1<<E)-1)];continue n}r.msg="invalid distance code",o.mode=30;break e}if(Y=65535&B,v<(E&=15)&&(M+=x[c++]<<v,(v+=8)<E&&(M+=x[c++]<<v,v+=8)),d<(Y+=M&(1<<E)-1)){r.msg="invalid distance too far back",o.mode=30;break e}if(M>>>=E,v-=E,(E=u-h)<Y){if(g<(E=Y-E)&&o.sane){r.msg="invalid distance too far back",o.mode=30;break e}if(H=p,(L=0)===m){if(L+=_-E,E<R){for(R-=E;O[u++]=p[L++],--E;);L=u-Y,H=O}}else if(m<E){if(L+=_+m-E,(E-=m)<R){for(R-=E;O[u++]=p[L++],--E;);if(L=0,m<R){for(R-=E=m;O[u++]=p[L++],--E;);L=u-Y,H=O}}}else if(L+=m-E,E<R){for(R-=E;O[u++]=p[L++],--E;);L=u-Y,H=O}for(;2<R;)O[u++]=H[L++],O[u++]=H[L++],O[u++]=H[L++],R-=3;R&&(O[u++]=H[L++],1<R&&(O[u++]=H[L++]))}else{for(L=u-Y;O[u++]=O[L++],O[u++]=O[L++],O[u++]=O[L++],2<(R-=3););R&&(O[u++]=O[L++],1<R&&(O[u++]=O[L++]))}break}}break}}while(c<l&&u<f);c-=R=v>>3,M&=(1<<(v-=R<<3))-1,r.next_in=c,r.next_out=u,r.avail_in=c<l?l-c+5:5-(c-l),r.avail_out=u<f?f-u+257:257-(u-f),o.hold=M,o.bits=v}},{}],49:[function(t,n,i){var r=t("../utils/common"),a=t("./adler32"),o=t("./crc32"),c=t("./inffast"),l=t("./inftrees"),u=1,h=2,f=0,d=-2,_=1,g=852,m=592;function p(L){return(L>>>24&255)+(L>>>8&65280)+((65280&L)<<8)+((255&L)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(L){var H;return L&&L.state?(H=L.state,L.total_in=L.total_out=H.total=0,L.msg="",H.wrap&&(L.adler=1&H.wrap),H.mode=_,H.last=0,H.havedict=0,H.dmax=32768,H.head=null,H.hold=0,H.bits=0,H.lencode=H.lendyn=new r.Buf32(g),H.distcode=H.distdyn=new r.Buf32(m),H.sane=1,H.back=-1,f):d}function S(L){var H;return L&&L.state?((H=L.state).wsize=0,H.whave=0,H.wnext=0,v(L)):d}function b(L,H){var x,O;return L&&L.state?(O=L.state,H<0?(x=0,H=-H):(x=1+(H>>4),H<48&&(H&=15)),H&&(H<8||15<H)?d:(O.window!==null&&O.wbits!==H&&(O.window=null),O.wrap=x,O.wbits=H,S(L))):d}function C(L,H){var x,O;return L?(O=new M,(L.state=O).window=null,(x=b(L,H))!==f&&(L.state=null),x):d}var A,B,E=!0;function R(L){if(E){var H;for(A=new r.Buf32(512),B=new r.Buf32(32),H=0;H<144;)L.lens[H++]=8;for(;H<256;)L.lens[H++]=9;for(;H<280;)L.lens[H++]=7;for(;H<288;)L.lens[H++]=8;for(l(u,L.lens,0,288,A,0,L.work,{bits:9}),H=0;H<32;)L.lens[H++]=5;l(h,L.lens,0,32,B,0,L.work,{bits:5}),E=!1}L.lencode=A,L.lenbits=9,L.distcode=B,L.distbits=5}function Y(L,H,x,O){var $,G=L.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new r.Buf8(G.wsize)),O>=G.wsize?(r.arraySet(G.window,H,x-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(O<($=G.wsize-G.wnext)&&($=O),r.arraySet(G.window,H,x-O,$,G.wnext),(O-=$)?(r.arraySet(G.window,H,x-O,O,0),G.wnext=O,G.whave=G.wsize):(G.wnext+=$,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=$))),0}i.inflateReset=S,i.inflateReset2=b,i.inflateResetKeep=v,i.inflateInit=function(L){return C(L,15)},i.inflateInit2=C,i.inflate=function(L,H){var x,O,$,G,oe,X,Q,I,N,le,re,ee,be,Ie,ye,Se,Be,Re,J,Qe,y,K,j,U,P=0,k=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!L||!L.state||!L.output||!L.input&&L.avail_in!==0)return d;(x=L.state).mode===12&&(x.mode=13),oe=L.next_out,$=L.output,Q=L.avail_out,G=L.next_in,O=L.input,X=L.avail_in,I=x.hold,N=x.bits,le=X,re=Q,K=f;e:for(;;)switch(x.mode){case _:if(x.wrap===0){x.mode=13;break}for(;N<16;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(2&x.wrap&&I===35615){k[x.check=0]=255&I,k[1]=I>>>8&255,x.check=o(x.check,k,2,0),N=I=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&I)<<8)+(I>>8))%31){L.msg="incorrect header check",x.mode=30;break}if((15&I)!=8){L.msg="unknown compression method",x.mode=30;break}if(N-=4,y=8+(15&(I>>>=4)),x.wbits===0)x.wbits=y;else if(y>x.wbits){L.msg="invalid window size",x.mode=30;break}x.dmax=1<<y,L.adler=x.check=1,x.mode=512&I?10:12,N=I=0;break;case 2:for(;N<16;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(x.flags=I,(255&x.flags)!=8){L.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){L.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=I>>8&1),512&x.flags&&(k[0]=255&I,k[1]=I>>>8&255,x.check=o(x.check,k,2,0)),N=I=0,x.mode=3;case 3:for(;N<32;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}x.head&&(x.head.time=I),512&x.flags&&(k[0]=255&I,k[1]=I>>>8&255,k[2]=I>>>16&255,k[3]=I>>>24&255,x.check=o(x.check,k,4,0)),N=I=0,x.mode=4;case 4:for(;N<16;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}x.head&&(x.head.xflags=255&I,x.head.os=I>>8),512&x.flags&&(k[0]=255&I,k[1]=I>>>8&255,x.check=o(x.check,k,2,0)),N=I=0,x.mode=5;case 5:if(1024&x.flags){for(;N<16;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}x.length=I,x.head&&(x.head.extra_len=I),512&x.flags&&(k[0]=255&I,k[1]=I>>>8&255,x.check=o(x.check,k,2,0)),N=I=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(X<(ee=x.length)&&(ee=X),ee&&(x.head&&(y=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),r.arraySet(x.head.extra,O,G,ee,y)),512&x.flags&&(x.check=o(x.check,O,ee,G)),X-=ee,G+=ee,x.length-=ee),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(X===0)break e;for(ee=0;y=O[G+ee++],x.head&&y&&x.length<65536&&(x.head.name+=String.fromCharCode(y)),y&&ee<X;);if(512&x.flags&&(x.check=o(x.check,O,ee,G)),X-=ee,G+=ee,y)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(X===0)break e;for(ee=0;y=O[G+ee++],x.head&&y&&x.length<65536&&(x.head.comment+=String.fromCharCode(y)),y&&ee<X;);if(512&x.flags&&(x.check=o(x.check,O,ee,G)),X-=ee,G+=ee,y)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;N<16;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(I!==(65535&x.check)){L.msg="header crc mismatch",x.mode=30;break}N=I=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),L.adler=x.check=0,x.mode=12;break;case 10:for(;N<32;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}L.adler=x.check=p(I),N=I=0,x.mode=11;case 11:if(x.havedict===0)return L.next_out=oe,L.avail_out=Q,L.next_in=G,L.avail_in=X,x.hold=I,x.bits=N,2;L.adler=x.check=1,x.mode=12;case 12:if(H===5||H===6)break e;case 13:if(x.last){I>>>=7&N,N-=7&N,x.mode=27;break}for(;N<3;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}switch(x.last=1&I,N-=1,3&(I>>>=1)){case 0:x.mode=14;break;case 1:if(R(x),x.mode=20,H!==6)break;I>>>=2,N-=2;break e;case 2:x.mode=17;break;case 3:L.msg="invalid block type",x.mode=30}I>>>=2,N-=2;break;case 14:for(I>>>=7&N,N-=7&N;N<32;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if((65535&I)!=(I>>>16^65535)){L.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&I,N=I=0,x.mode=15,H===6)break e;case 15:x.mode=16;case 16:if(ee=x.length){if(X<ee&&(ee=X),Q<ee&&(ee=Q),ee===0)break e;r.arraySet($,O,G,ee,oe),X-=ee,G+=ee,Q-=ee,oe+=ee,x.length-=ee;break}x.mode=12;break;case 17:for(;N<14;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(x.nlen=257+(31&I),I>>>=5,N-=5,x.ndist=1+(31&I),I>>>=5,N-=5,x.ncode=4+(15&I),I>>>=4,N-=4,286<x.nlen||30<x.ndist){L.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;N<3;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}x.lens[ne[x.have++]]=7&I,I>>>=3,N-=3}for(;x.have<19;)x.lens[ne[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,j={bits:x.lenbits},K=l(0,x.lens,0,19,x.lencode,0,x.work,j),x.lenbits=j.bits,K){L.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Se=(P=x.lencode[I&(1<<x.lenbits)-1])>>>16&255,Be=65535&P,!((ye=P>>>24)<=N);){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(Be<16)I>>>=ye,N-=ye,x.lens[x.have++]=Be;else{if(Be===16){for(U=ye+2;N<U;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(I>>>=ye,N-=ye,x.have===0){L.msg="invalid bit length repeat",x.mode=30;break}y=x.lens[x.have-1],ee=3+(3&I),I>>>=2,N-=2}else if(Be===17){for(U=ye+3;N<U;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}N-=ye,y=0,ee=3+(7&(I>>>=ye)),I>>>=3,N-=3}else{for(U=ye+7;N<U;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}N-=ye,y=0,ee=11+(127&(I>>>=ye)),I>>>=7,N-=7}if(x.have+ee>x.nlen+x.ndist){L.msg="invalid bit length repeat",x.mode=30;break}for(;ee--;)x.lens[x.have++]=y}}if(x.mode===30)break;if(x.lens[256]===0){L.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,j={bits:x.lenbits},K=l(u,x.lens,0,x.nlen,x.lencode,0,x.work,j),x.lenbits=j.bits,K){L.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,j={bits:x.distbits},K=l(h,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,j),x.distbits=j.bits,K){L.msg="invalid distances set",x.mode=30;break}if(x.mode=20,H===6)break e;case 20:x.mode=21;case 21:if(6<=X&&258<=Q){L.next_out=oe,L.avail_out=Q,L.next_in=G,L.avail_in=X,x.hold=I,x.bits=N,c(L,re),oe=L.next_out,$=L.output,Q=L.avail_out,G=L.next_in,O=L.input,X=L.avail_in,I=x.hold,N=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Se=(P=x.lencode[I&(1<<x.lenbits)-1])>>>16&255,Be=65535&P,!((ye=P>>>24)<=N);){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(Se&&!(240&Se)){for(Re=ye,J=Se,Qe=Be;Se=(P=x.lencode[Qe+((I&(1<<Re+J)-1)>>Re)])>>>16&255,Be=65535&P,!(Re+(ye=P>>>24)<=N);){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}I>>>=Re,N-=Re,x.back+=Re}if(I>>>=ye,N-=ye,x.back+=ye,x.length=Be,Se===0){x.mode=26;break}if(32&Se){x.back=-1,x.mode=12;break}if(64&Se){L.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Se,x.mode=22;case 22:if(x.extra){for(U=x.extra;N<U;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}x.length+=I&(1<<x.extra)-1,I>>>=x.extra,N-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Se=(P=x.distcode[I&(1<<x.distbits)-1])>>>16&255,Be=65535&P,!((ye=P>>>24)<=N);){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(!(240&Se)){for(Re=ye,J=Se,Qe=Be;Se=(P=x.distcode[Qe+((I&(1<<Re+J)-1)>>Re)])>>>16&255,Be=65535&P,!(Re+(ye=P>>>24)<=N);){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}I>>>=Re,N-=Re,x.back+=Re}if(I>>>=ye,N-=ye,x.back+=ye,64&Se){L.msg="invalid distance code",x.mode=30;break}x.offset=Be,x.extra=15&Se,x.mode=24;case 24:if(x.extra){for(U=x.extra;N<U;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}x.offset+=I&(1<<x.extra)-1,I>>>=x.extra,N-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){L.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(Q===0)break e;if(ee=re-Q,x.offset>ee){if((ee=x.offset-ee)>x.whave&&x.sane){L.msg="invalid distance too far back",x.mode=30;break}be=ee>x.wnext?(ee-=x.wnext,x.wsize-ee):x.wnext-ee,ee>x.length&&(ee=x.length),Ie=x.window}else Ie=$,be=oe-x.offset,ee=x.length;for(Q<ee&&(ee=Q),Q-=ee,x.length-=ee;$[oe++]=Ie[be++],--ee;);x.length===0&&(x.mode=21);break;case 26:if(Q===0)break e;$[oe++]=x.length,Q--,x.mode=21;break;case 27:if(x.wrap){for(;N<32;){if(X===0)break e;X--,I|=O[G++]<<N,N+=8}if(re-=Q,L.total_out+=re,x.total+=re,re&&(L.adler=x.check=x.flags?o(x.check,$,re,oe-re):a(x.check,$,re,oe-re)),re=Q,(x.flags?I:p(I))!==x.check){L.msg="incorrect data check",x.mode=30;break}N=I=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;N<32;){if(X===0)break e;X--,I+=O[G++]<<N,N+=8}if(I!==(4294967295&x.total)){L.msg="incorrect length check",x.mode=30;break}N=I=0}x.mode=29;case 29:K=1;break e;case 30:K=-3;break e;case 31:return-4;case 32:default:return d}return L.next_out=oe,L.avail_out=Q,L.next_in=G,L.avail_in=X,x.hold=I,x.bits=N,(x.wsize||re!==L.avail_out&&x.mode<30&&(x.mode<27||H!==4))&&Y(L,L.output,L.next_out,re-L.avail_out)?(x.mode=31,-4):(le-=L.avail_in,re-=L.avail_out,L.total_in+=le,L.total_out+=re,x.total+=re,x.wrap&&re&&(L.adler=x.check=x.flags?o(x.check,$,re,L.next_out-re):a(x.check,$,re,L.next_out-re)),L.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(le==0&&re===0||H===4)&&K===f&&(K=-5),K)},i.inflateEnd=function(L){if(!L||!L.state)return d;var H=L.state;return H.window&&(H.window=null),L.state=null,f},i.inflateGetHeader=function(L,H){var x;return L&&L.state&&2&(x=L.state).wrap?((x.head=H).done=!1,f):d},i.inflateSetDictionary=function(L,H){var x,O=H.length;return L&&L.state?(x=L.state).wrap!==0&&x.mode!==11?d:x.mode===11&&a(1,H,O,0)!==x.check?-3:Y(L,H,O,O)?(x.mode=31,-4):(x.havedict=1,f):d},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,i){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,h,f,d,_,g,m,p){var M,v,S,b,C,A,B,E,R,Y=p.bits,L=0,H=0,x=0,O=0,$=0,G=0,oe=0,X=0,Q=0,I=0,N=null,le=0,re=new r.Buf16(16),ee=new r.Buf16(16),be=null,Ie=0;for(L=0;L<=15;L++)re[L]=0;for(H=0;H<d;H++)re[h[f+H]]++;for($=Y,O=15;1<=O&&re[O]===0;O--);if(O<$&&($=O),O===0)return _[g++]=20971520,_[g++]=20971520,p.bits=1,0;for(x=1;x<O&&re[x]===0;x++);for($<x&&($=x),L=X=1;L<=15;L++)if(X<<=1,(X-=re[L])<0)return-1;if(0<X&&(u===0||O!==1))return-1;for(ee[1]=0,L=1;L<15;L++)ee[L+1]=ee[L]+re[L];for(H=0;H<d;H++)h[f+H]!==0&&(m[ee[h[f+H]]++]=H);if(A=u===0?(N=be=m,19):u===1?(N=a,le-=257,be=o,Ie-=257,256):(N=c,be=l,-1),L=x,C=g,oe=H=I=0,S=-1,b=(Q=1<<(G=$))-1,u===1&&852<Q||u===2&&592<Q)return 1;for(;;){for(B=L-oe,R=m[H]<A?(E=0,m[H]):m[H]>A?(E=be[Ie+m[H]],N[le+m[H]]):(E=96,0),M=1<<L-oe,x=v=1<<G;_[C+(I>>oe)+(v-=M)]=B<<24|E<<16|R|0,v!==0;);for(M=1<<L-1;I&M;)M>>=1;if(M!==0?(I&=M-1,I+=M):I=0,H++,--re[L]==0){if(L===O)break;L=h[f+m[H]]}if($<L&&(I&b)!==S){for(oe===0&&(oe=$),C+=x,X=1<<(G=L-oe);G+oe<O&&!((X-=re[G+oe])<=0);)G++,X<<=1;if(Q+=1<<G,u===1&&852<Q||u===2&&592<Q)return 1;_[S=I&b]=$<<24|G<<16|C-g|0}}return I!==0&&(_[C+I]=L-oe<<24|64<<16|0),p.bits=$,0}},{"../utils/common":41}],51:[function(t,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,i){var r=t("../utils/common"),a=0,o=1;function c(P){for(var k=P.length;0<=--k;)P[k]=0}var l=0,u=29,h=256,f=h+1+u,d=30,_=19,g=2*f+1,m=15,p=16,M=7,v=256,S=16,b=17,C=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],B=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Y=new Array(2*(f+2));c(Y);var L=new Array(2*d);c(L);var H=new Array(512);c(H);var x=new Array(256);c(x);var O=new Array(u);c(O);var $,G,oe,X=new Array(d);function Q(P,k,ne,de,q){this.static_tree=P,this.extra_bits=k,this.extra_base=ne,this.elems=de,this.max_length=q,this.has_stree=P&&P.length}function I(P,k){this.dyn_tree=P,this.max_code=0,this.stat_desc=k}function N(P){return P<256?H[P]:H[256+(P>>>7)]}function le(P,k){P.pending_buf[P.pending++]=255&k,P.pending_buf[P.pending++]=k>>>8&255}function re(P,k,ne){P.bi_valid>p-ne?(P.bi_buf|=k<<P.bi_valid&65535,le(P,P.bi_buf),P.bi_buf=k>>p-P.bi_valid,P.bi_valid+=ne-p):(P.bi_buf|=k<<P.bi_valid&65535,P.bi_valid+=ne)}function ee(P,k,ne){re(P,ne[2*k],ne[2*k+1])}function be(P,k){for(var ne=0;ne|=1&P,P>>>=1,ne<<=1,0<--k;);return ne>>>1}function Ie(P,k,ne){var de,q,w=new Array(m+1),T=0;for(de=1;de<=m;de++)w[de]=T=T+ne[de-1]<<1;for(q=0;q<=k;q++){var F=P[2*q+1];F!==0&&(P[2*q]=be(w[F]++,F))}}function ye(P){var k;for(k=0;k<f;k++)P.dyn_ltree[2*k]=0;for(k=0;k<d;k++)P.dyn_dtree[2*k]=0;for(k=0;k<_;k++)P.bl_tree[2*k]=0;P.dyn_ltree[2*v]=1,P.opt_len=P.static_len=0,P.last_lit=P.matches=0}function Se(P){8<P.bi_valid?le(P,P.bi_buf):0<P.bi_valid&&(P.pending_buf[P.pending++]=P.bi_buf),P.bi_buf=0,P.bi_valid=0}function Be(P,k,ne,de){var q=2*k,w=2*ne;return P[q]<P[w]||P[q]===P[w]&&de[k]<=de[ne]}function Re(P,k,ne){for(var de=P.heap[ne],q=ne<<1;q<=P.heap_len&&(q<P.heap_len&&Be(k,P.heap[q+1],P.heap[q],P.depth)&&q++,!Be(k,de,P.heap[q],P.depth));)P.heap[ne]=P.heap[q],ne=q,q<<=1;P.heap[ne]=de}function J(P,k,ne){var de,q,w,T,F=0;if(P.last_lit!==0)for(;de=P.pending_buf[P.d_buf+2*F]<<8|P.pending_buf[P.d_buf+2*F+1],q=P.pending_buf[P.l_buf+F],F++,de===0?ee(P,q,k):(ee(P,(w=x[q])+h+1,k),(T=A[w])!==0&&re(P,q-=O[w],T),ee(P,w=N(--de),ne),(T=B[w])!==0&&re(P,de-=X[w],T)),F<P.last_lit;);ee(P,v,k)}function Qe(P,k){var ne,de,q,w=k.dyn_tree,T=k.stat_desc.static_tree,F=k.stat_desc.has_stree,te=k.stat_desc.elems,ue=-1;for(P.heap_len=0,P.heap_max=g,ne=0;ne<te;ne++)w[2*ne]!==0?(P.heap[++P.heap_len]=ue=ne,P.depth[ne]=0):w[2*ne+1]=0;for(;P.heap_len<2;)w[2*(q=P.heap[++P.heap_len]=ue<2?++ue:0)]=1,P.depth[q]=0,P.opt_len--,F&&(P.static_len-=T[2*q+1]);for(k.max_code=ue,ne=P.heap_len>>1;1<=ne;ne--)Re(P,w,ne);for(q=te;ne=P.heap[1],P.heap[1]=P.heap[P.heap_len--],Re(P,w,1),de=P.heap[1],P.heap[--P.heap_max]=ne,P.heap[--P.heap_max]=de,w[2*q]=w[2*ne]+w[2*de],P.depth[q]=(P.depth[ne]>=P.depth[de]?P.depth[ne]:P.depth[de])+1,w[2*ne+1]=w[2*de+1]=q,P.heap[1]=q++,Re(P,w,1),2<=P.heap_len;);P.heap[--P.heap_max]=P.heap[1],function(he,Ee){var ge,ve,z,pe,fe,Ne,we=Ee.dyn_tree,Le=Ee.max_code,Ce=Ee.stat_desc.static_tree,Te=Ee.stat_desc.has_stree,Xe=Ee.stat_desc.extra_bits,V=Ee.stat_desc.extra_base,_e=Ee.stat_desc.max_length,me=0;for(pe=0;pe<=m;pe++)he.bl_count[pe]=0;for(we[2*he.heap[he.heap_max]+1]=0,ge=he.heap_max+1;ge<g;ge++)_e<(pe=we[2*we[2*(ve=he.heap[ge])+1]+1]+1)&&(pe=_e,me++),we[2*ve+1]=pe,Le<ve||(he.bl_count[pe]++,fe=0,V<=ve&&(fe=Xe[ve-V]),Ne=we[2*ve],he.opt_len+=Ne*(pe+fe),Te&&(he.static_len+=Ne*(Ce[2*ve+1]+fe)));if(me!==0){do{for(pe=_e-1;he.bl_count[pe]===0;)pe--;he.bl_count[pe]--,he.bl_count[pe+1]+=2,he.bl_count[_e]--,me-=2}while(0<me);for(pe=_e;pe!==0;pe--)for(ve=he.bl_count[pe];ve!==0;)Le<(z=he.heap[--ge])||(we[2*z+1]!==pe&&(he.opt_len+=(pe-we[2*z+1])*we[2*z],we[2*z+1]=pe),ve--)}}(P,k),Ie(w,ue,P.bl_count)}function y(P,k,ne){var de,q,w=-1,T=k[1],F=0,te=7,ue=4;for(T===0&&(te=138,ue=3),k[2*(ne+1)+1]=65535,de=0;de<=ne;de++)q=T,T=k[2*(de+1)+1],++F<te&&q===T||(F<ue?P.bl_tree[2*q]+=F:q!==0?(q!==w&&P.bl_tree[2*q]++,P.bl_tree[2*S]++):F<=10?P.bl_tree[2*b]++:P.bl_tree[2*C]++,w=q,ue=(F=0)===T?(te=138,3):q===T?(te=6,3):(te=7,4))}function K(P,k,ne){var de,q,w=-1,T=k[1],F=0,te=7,ue=4;for(T===0&&(te=138,ue=3),de=0;de<=ne;de++)if(q=T,T=k[2*(de+1)+1],!(++F<te&&q===T)){if(F<ue)for(;ee(P,q,P.bl_tree),--F!=0;);else q!==0?(q!==w&&(ee(P,q,P.bl_tree),F--),ee(P,S,P.bl_tree),re(P,F-3,2)):F<=10?(ee(P,b,P.bl_tree),re(P,F-3,3)):(ee(P,C,P.bl_tree),re(P,F-11,7));w=q,ue=(F=0)===T?(te=138,3):q===T?(te=6,3):(te=7,4)}}c(X);var j=!1;function U(P,k,ne,de){re(P,(l<<1)+(de?1:0),3),function(q,w,T,F){Se(q),F&&(le(q,T),le(q,~T)),r.arraySet(q.pending_buf,q.window,w,T,q.pending),q.pending+=T}(P,k,ne,!0)}i._tr_init=function(P){j||(function(){var k,ne,de,q,w,T=new Array(m+1);for(q=de=0;q<u-1;q++)for(O[q]=de,k=0;k<1<<A[q];k++)x[de++]=q;for(x[de-1]=q,q=w=0;q<16;q++)for(X[q]=w,k=0;k<1<<B[q];k++)H[w++]=q;for(w>>=7;q<d;q++)for(X[q]=w<<7,k=0;k<1<<B[q]-7;k++)H[256+w++]=q;for(ne=0;ne<=m;ne++)T[ne]=0;for(k=0;k<=143;)Y[2*k+1]=8,k++,T[8]++;for(;k<=255;)Y[2*k+1]=9,k++,T[9]++;for(;k<=279;)Y[2*k+1]=7,k++,T[7]++;for(;k<=287;)Y[2*k+1]=8,k++,T[8]++;for(Ie(Y,f+1,T),k=0;k<d;k++)L[2*k+1]=5,L[2*k]=be(k,5);$=new Q(Y,A,h+1,f,m),G=new Q(L,B,0,d,m),oe=new Q(new Array(0),E,0,_,M)}(),j=!0),P.l_desc=new I(P.dyn_ltree,$),P.d_desc=new I(P.dyn_dtree,G),P.bl_desc=new I(P.bl_tree,oe),P.bi_buf=0,P.bi_valid=0,ye(P)},i._tr_stored_block=U,i._tr_flush_block=function(P,k,ne,de){var q,w,T=0;0<P.level?(P.strm.data_type===2&&(P.strm.data_type=function(F){var te,ue=4093624447;for(te=0;te<=31;te++,ue>>>=1)if(1&ue&&F.dyn_ltree[2*te]!==0)return a;if(F.dyn_ltree[18]!==0||F.dyn_ltree[20]!==0||F.dyn_ltree[26]!==0)return o;for(te=32;te<h;te++)if(F.dyn_ltree[2*te]!==0)return o;return a}(P)),Qe(P,P.l_desc),Qe(P,P.d_desc),T=function(F){var te;for(y(F,F.dyn_ltree,F.l_desc.max_code),y(F,F.dyn_dtree,F.d_desc.max_code),Qe(F,F.bl_desc),te=_-1;3<=te&&F.bl_tree[2*R[te]+1]===0;te--);return F.opt_len+=3*(te+1)+5+5+4,te}(P),q=P.opt_len+3+7>>>3,(w=P.static_len+3+7>>>3)<=q&&(q=w)):q=w=ne+5,ne+4<=q&&k!==-1?U(P,k,ne,de):P.strategy===4||w===q?(re(P,2+(de?1:0),3),J(P,Y,L)):(re(P,4+(de?1:0),3),function(F,te,ue,he){var Ee;for(re(F,te-257,5),re(F,ue-1,5),re(F,he-4,4),Ee=0;Ee<he;Ee++)re(F,F.bl_tree[2*R[Ee]+1],3);K(F,F.dyn_ltree,te-1),K(F,F.dyn_dtree,ue-1)}(P,P.l_desc.max_code+1,P.d_desc.max_code+1,T+1),J(P,P.dyn_ltree,P.dyn_dtree)),ye(P),de&&Se(P)},i._tr_tally=function(P,k,ne){return P.pending_buf[P.d_buf+2*P.last_lit]=k>>>8&255,P.pending_buf[P.d_buf+2*P.last_lit+1]=255&k,P.pending_buf[P.l_buf+P.last_lit]=255&ne,P.last_lit++,k===0?P.dyn_ltree[2*ne]++:(P.matches++,k--,P.dyn_ltree[2*(x[ne]+h+1)]++,P.dyn_dtree[2*N(k)]++),P.last_lit===P.lit_bufsize-1},i._tr_align=function(P){re(P,2,3),ee(P,v,Y),function(k){k.bi_valid===16?(le(k,k.bi_buf),k.bi_buf=0,k.bi_valid=0):8<=k.bi_valid&&(k.pending_buf[k.pending++]=255&k.bi_buf,k.bi_buf>>=8,k.bi_valid-=8)}(P)}},{"../utils/common":41}],53:[function(t,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,i){(function(r){(function(a,o){if(!a.setImmediate){var c,l,u,h,f=1,d={},_=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,c={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){M(S)})}:function(){if(a.postMessage&&!a.importScripts){var S=!0,b=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=b,S}}()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",v,!1):a.attachEvent("onmessage",v),function(S){a.postMessage(h+S,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(S){M(S.data)},function(S){u.port2.postMessage(S)}):g&&"onreadystatechange"in g.createElement("script")?(l=g.documentElement,function(S){var b=g.createElement("script");b.onreadystatechange=function(){M(S),b.onreadystatechange=null,l.removeChild(b),b=null},l.appendChild(b)}):function(S){setTimeout(M,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var b=new Array(arguments.length-1),C=0;C<b.length;C++)b[C]=arguments[C+1];var A={callback:S,args:b};return d[f]=A,c(f),f++},m.clearImmediate=p}function p(S){delete d[S]}function M(S){if(_)setTimeout(M,0,S);else{var b=d[S];if(b){_=!0;try{(function(C){var A=C.callback,B=C.args;switch(B.length){case 0:A();break;case 1:A(B[0]);break;case 2:A(B[0],B[1]);break;case 3:A(B[0],B[1],B[2]);break;default:A.apply(o,B)}})(b)}finally{p(S),_=!1}}}}function v(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(h)===0&&M(+S.data.slice(h.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof zr<"u"?zr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Fl);var S_=Fl.exports;const E_=M_(S_);class Bl{constructor(){this._zip=new E_}appFileBlob(e,t){this._zip.file(e,t)}generateAsync(){return this._zip.generateAsync({type:"blob"})}download(e,t){this.generateAsync().then(n=>{console.log("download!");const i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=e+".zip",i.click(),t&&t()})}}function zc(s,e){if(e===rh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===la||e===ul){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===la)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class b_ extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new C_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new H_(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=ga.extractUrlBase(e),this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ul(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kl){try{a[Ze.KHR_BINARY_GLTF]=new G_(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new t0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:a[h]=new w_;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[h]=new V_(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[h]=new W_;break;case Ze.KHR_MESH_QUANTIZATION:a[h]=new X_;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function T_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class A_{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ke(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],vt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ol(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new a_(u),l.distance=h;break;case"spot":l=new r_(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Sn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}let w_=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return zn}extendParams(e,t,n){const i=[];e.color=new ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,rt))}return Promise.all(i)}},R_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},C_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(o,o)}return Promise.all(r)}},L_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},P_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,rt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},I_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},D_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(o[0],o[1],o[2],vt),Promise.all(r)}},N_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},U_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(o[0],o[1],o[2],vt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,rt)),Promise.all(r)}},O_=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}};class F_{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class B_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class k_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class z_{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}let H_=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==zt.TRIANGLES&&l.mode!==zt.TRIANGLE_STRIP&&l.mode!==zt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const _ of h){const g=new Ve,m=new W,p=new Ht,M=new W(1,1,1),v=new zg(_.geometry,_.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),v.setMatrixAt(S,g.compose(m,p,M));for(const S in c)if(S==="_COLOR_0"){const b=c[S];v.instanceColor=new pa(b.array,b.itemSize,b.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);st.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}};const kl="glTF",Xi=12,Hc={JSON:1313821514,BIN:5130562};class G_{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xi,r=new DataView(e,Xi);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Hc.JSON){const l=new Uint8Array(e,Xi+a,o);this.content=n.decode(l)}else if(c===Hc.BIN){const l=Xi+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class V_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=_a[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=_a[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Si[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const _=f.attributes[d],g=c[d];g!==void 0&&(_.normalized=g)}h(f)},o,l)})})}}class W_{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class X_{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class zl extends cr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*l,g=_-l,m=-2*d+3*f,p=d-f,M=1-m,v=p-f+h;for(let S=0;S!==o;S++){const b=a[g+S+o],C=a[g+S+c]*u,A=a[_+S+o],B=a[_+S]*u;r[S]=M*b+v*C+m*A+p*B}return r}}const j_=new Ht;class q_ extends zl{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return j_.fromArray(r).normalize().toArray(r),r}}const zt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Si={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gc={9728:dt,9729:wt,9984:Yr,9985:ya,9986:Ki,9987:wn},Vc={33071:Dt,33648:er,10497:Xn},Ys={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_a={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Y_={CUBICSPLINE:void 0,LINEAR:jn,STEP:wi},Ks={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function K_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ia({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),s.DefaultMaterial}function On(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Z_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function $_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function J_(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zs(t.attributes):e=s.indices+":"+Zs(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Zs(s.targets[n]);return e}function Zs(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function xa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Q_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const e0=new Ve;class t0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new T_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new n_(this.options.manager):this.textureLoader=new l_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ul(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return On(r,o,i),Sn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ga.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ys[i.type],o=Si[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ot(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Ys[i.type],l=Si[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(M);v||(g=new l(o,p*d,i.count*d/u),v=new Ng(g,d/u),t.cache.add(M,v)),m=new Ca(v,c,f%d/u,_)}else o===null?g=new l(i.count*c):g=new l(o,f,i.count*c),m=new ot(g,c,_);if(i.sparse!==void 0){const p=Ys.SCALAR,M=Si[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,b=new M(a[1],v,i.sparse.count*p),C=new l(a[2],S,i.sparse.count*c);o!==null&&(m=new ot(m.array.slice(),m.itemSize,m.normalized));for(let A=0,B=b.length;A<B;A++){const E=b[A];if(m.setX(E,C[A*c]),c>=2&&m.setY(E,C[A*c+1]),c>=3&&m.setZ(E,C[A*c+2]),c>=4&&m.setW(E,C[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Gc[f.magFilter]||wt,u.minFilter=Gc[f.minFilter]||wn,u.wrapS=Vc[f.wrapS]||Xn,u.wrapT=Vc[f.wrapT]||Xn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new ft(g);m.needsUpdate=!0,f(m)}),t.load(ga.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||Q_(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Pl,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ll,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ia}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const h=i[Ze.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],vt),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,rt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=jt);const u=r.alphaMode||Ks.OPAQUE;if(u===Ks.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ks.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==zn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==zn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==zn){const h=r.emissiveFactor;o.emissive=new ke().setRGB(h[0],h[1],h[2],vt)}return r.emissiveTexture!==void 0&&a!==zn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,rt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Sn(h,r),t.associations.set(h,{materials:e}),r.extensions&&On(i,h,r),h})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Wc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=J_(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Wc(new Qt,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?K_(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=a[d];let p;const M=l[d];if(m.mode===zt.TRIANGLES||m.mode===zt.TRIANGLE_STRIP||m.mode===zt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Og(g,M):new Ot(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===zt.TRIANGLE_STRIP?p.geometry=zc(p.geometry,ul):m.mode===zt.TRIANGLE_FAN&&(p.geometry=zc(p.geometry,la));else if(m.mode===zt.LINES)p=new Hg(g,M);else if(m.mode===zt.LINE_STRIP)p=new Pa(g,M);else if(m.mode===zt.LINE_LOOP)p=new Gg(g,M);else if(m.mode===zt.POINTS)p=new Vg(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&$_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Sn(p,r),m.extensions&&On(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&On(i,h[0],r),h[0];const f=new Hn;r.extensions&&On(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(nr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Aa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new Ve;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new La(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let M=0,v=f.length;M<v;M++){const S=f[M],b=d[M],C=_[M],A=g[M],B=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=n._createAnimationTracks(S,b,C,A,B);if(E)for(let R=0;R<E.length;R++)p.push(E[R])}return new Zg(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,e0)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Cl:l.length>1?u=new Hn:l.length===1?u=l[0]:u=new st,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Sn(u,r),r.extensions&&On(n,u,r),r.matrix!==void 0){const h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Hn;n.name&&(r.name=i.createUniqueName(n.name)),Sn(r,n),n.extensions&&On(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof $t||f instanceof ft)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];yn[r.path]===yn.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(yn[r.path]){case yn.weights:l=Li;break;case yn.rotation:l=Yn;break;case yn.position:case yn.scale:l=Pi;break;default:switch(n.itemSize){case 1:l=Li;break;case 2:case 3:default:l=Pi;break}break}const u=i.interpolation!==void 0?Y_[i.interpolation]:jn,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+yn[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xa(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Yn?q_:zl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function n0(s,e,t){const n=e.attributes,i=new pn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new W(c[0],c[1],c[2]),new W(l[0],l[1],l[2])),o.normalized){const u=xa(Si[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new W,c=new W;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=xa(Si[f.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Jt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Wc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=_a[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Sn(s,e),n0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Z_(s,e.targets,t):s})}let Gr,$s,gi,Vr;function Js(s,e=1/0,t=null){$s||($s=new is(2,2,1,1)),gi||(gi=new Rn({uniforms:{blitTexture:new Oa(s)},vertexShader:`
            varying vec2 vUv;
            void main(){
                vUv = uv;
                gl_Position = vec4(position.xy * 1.0,0.,.999999);
            }`,fragmentShader:`
            uniform sampler2D blitTexture; 
            varying vec2 vUv;

            void main(){ 
                gl_FragColor = vec4(vUv.xy, 0, 1);
                
                #ifdef IS_SRGB
                gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
                #else
                gl_FragColor = texture2D( blitTexture, vUv);
                #endif
            }`})),gi.uniforms.blitTexture.value=s,gi.defines.IS_SRGB=s.colorSpace==rt,gi.needsUpdate=!0,Vr||(Vr=new Ot($s,gi),Vr.frustrumCulled=!1);const n=new St,i=new rr;i.add(Vr),t||(t=Gr=new Ra({antialias:!1})),t.setSize(Math.min(s.image.width,e),Math.min(s.image.height,e)),t.clear(),t.render(i,n);const r=new ft(t.domElement);return r.minFilter=s.minFilter,r.magFilter=s.magFilter,r.wrapS=s.wrapS,r.wrapT=s.wrapT,r.name=s.name,Gr&&(Gr.dispose(),Gr=null),r}const Xc={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Fa{constructor(){this.pluginCallbacks=[],this.register(function(e){return new d0(e)}),this.register(function(e){return new f0(e)}),this.register(function(e){return new g0(e)}),this.register(function(e){return new _0(e)}),this.register(function(e){return new x0(e)}),this.register(function(e){return new v0(e)}),this.register(function(e){return new p0(e)}),this.register(function(e){return new m0(e)}),this.register(function(e){return new y0(e)}),this.register(function(e){return new M0(e)}),this.register(function(e){return new S0(e)}),this.register(function(e){return new E0(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const r=new h0,a=[];for(let o=0,c=this.pluginCallbacks.length;o<c;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Ke={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Qs="KHR_mesh_quantization",Ft={};Ft[dt]=Ke.NEAREST;Ft[Yr]=Ke.NEAREST_MIPMAP_NEAREST;Ft[Ki]=Ke.NEAREST_MIPMAP_LINEAR;Ft[wt]=Ke.LINEAR;Ft[ya]=Ke.LINEAR_MIPMAP_NEAREST;Ft[wn]=Ke.LINEAR_MIPMAP_LINEAR;Ft[Dt]=Ke.CLAMP_TO_EDGE;Ft[Xn]=Ke.REPEAT;Ft[er]=Ke.MIRRORED_REPEAT;const jc={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},i0=new ke,qc=12,r0=1179937895,s0=2,Yc=8,a0=1313821514,o0=5130562;function qi(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function c0(s){return new TextEncoder().encode(s).buffer}function l0(s){return qi(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function u0(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=nr.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Hl(s){return Math.ceil(s/4)*4}function ea(s,e=0){const t=Hl(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function Kc(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Zc(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class h0{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,c=i.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(o),h=Object.keys(c);if(u.length>0&&(a.extensionsUsed=u),h.length>0&&(a.extensionsRequired=h),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=l.size),n.binary===!0){const f=new FileReader;f.readAsArrayBuffer(l),f.onloadend=function(){const d=ea(f.result),_=new DataView(new ArrayBuffer(Yc));_.setUint32(0,d.byteLength,!0),_.setUint32(4,o0,!0);const g=ea(c0(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(Yc));m.setUint32(0,g.byteLength,!0),m.setUint32(4,a0,!0);const p=new ArrayBuffer(qc),M=new DataView(p);M.setUint32(0,r0,!0),M.setUint32(4,s0,!0);const v=qc+m.byteLength+g.byteLength+_.byteLength+d.byteLength;M.setUint32(8,v,!0);const S=new Blob([p,m,g,_,d],{type:"application/octet-stream"}),b=new FileReader;b.readAsArrayBuffer(S),b.onloadend=function(){t(b.result)}}}else if(a.buffers&&a.buffers.length>0){const f=new FileReader;f.readAsDataURL(l),f.onloadend=function(){const d=f.result;a.buffers[0].uri=d,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new W;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new W;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(d){return d.colorSpace===rt?function(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}:function(g){return g}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof Ws&&(e=Js(e)),t instanceof Ws&&(t=Js(t));const i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),c=Kc();c.width=a,c.height=o;const l=c.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,a,o);const u=l.getImageData(0,0,a,o);if(i){l.drawImage(i,0,0,a,o);const d=n(e),_=l.getImageData(0,0,a,o).data;for(let g=2;g<_.length;g+=4)u.data[g]=d(_[g]/256)*256}if(r){l.drawImage(r,0,0,a,o);const d=n(t),_=l.getImageData(0,0,a,o).data;for(let g=1;g<_.length;g+=4)u.data[g]=d(_[g]/256)*256}l.putImageData(u,0,0);const f=(e||t).clone();return f.source=new ba(c),f.colorSpace=Ut,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),f}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case Ke.BYTE:case Ke.UNSIGNED_BYTE:o=1;break;case Ke.SHORT:case Ke.UNSIGNED_SHORT:o=2;break;default:o=4}const c=Hl(i*e.itemSize*o),l=new DataView(new ArrayBuffer(c));let u=0;for(let d=n;d<n+i;d++)for(let _=0;_<e.itemSize;_++){let g;e.itemSize>4?g=e.array[d*e.itemSize+_]:(_===0?g=e.getX(d):_===1?g=e.getY(d):_===2?g=e.getZ(d):_===3&&(g=e.getW(d)),e.normalized===!0&&(g=nr.normalize(g,e.array))),t===Ke.FLOAT?l.setFloat32(u,g,!0):t===Ke.INT?l.setInt32(u,g,!0):t===Ke.UNSIGNED_INT?l.setUint32(u,g,!0):t===Ke.SHORT?l.setInt16(u,g,!0):t===Ke.UNSIGNED_SHORT?l.setUint16(u,g,!0):t===Ke.BYTE?l.setInt8(u,g):t===Ke.UNSIGNED_BYTE&&l.setUint8(u,g),u+=o}const h={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(h.target=r),r===Ke.ARRAY_BUFFER&&(h.byteStride=e.itemSize*o),this.byteOffset+=c,a.bufferViews.push(h),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=ea(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){const r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=Ke.FLOAT;else if(e.array.constructor===Int32Array)o=Ke.INT;else if(e.array.constructor===Uint32Array)o=Ke.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=Ke.SHORT;else if(e.array.constructor===Uint16Array)o=Ke.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=Ke.BYTE;else if(e.array.constructor===Uint8Array)o=Ke.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const c=u0(e,n,i);let l;t!==void 0&&(l=e===t.index?Ke.ELEMENT_ARRAY_BUFFER:Ke.ARRAY_BUFFER);const u=this.processBufferView(e,o,n,i,l),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:o,count:i,max:c.max,min:c.min,type:a[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,a=r.cache,o=r.json,c=r.options,l=r.pending;a.images.has(e)||a.images.set(e,{});const u=a.images.get(e),h=i+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];o.images||(o.images=[]);const f={mimeType:i},d=Kc();d.width=Math.min(e.width,c.maxTextureSize),d.height=Math.min(e.height,c.maxTextureSize);const _=d.getContext("2d");if(n===!0&&(_.translate(0,d.height),_.scale(1,-1)),e.data!==void 0){t!==Nt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];_.putImageData(new ImageData(m,e.width,e.height),0,0)}else _.drawImage(e,0,0,d.width,d.height);c.binary===!0?l.push(Zc(d,i).then(m=>r.processBufferViewImage(m)).then(m=>{f.bufferView=m})):d.toDataURL!==void 0?f.uri=d.toDataURL(i):l.push(Zc(d,i).then(m=>new FileReader().readAsDataURL(m)).then(m=>{f.uri=m}));const g=o.images.push(f)-1;return u[h]=g,g}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Ft[e.magFilter],minFilter:Ft[e.minFilter],wrapS:Ft[e.wrapS],wrapT:Ft[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof Ws&&(e=Js(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,o)});const c=r.textures.push(o)-1;return i.textures.set(e,c),c}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(qi(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),c={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(c,o),i.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){const o={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),i.emissiveTexture=l}}if(e.normalMap){const o={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===jt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let v=0,S=e.material.length;v<S;v++)i.push(e.material[v].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;e.isLineSegments?o=Ke.LINES:e.isLineLoop?o=Ke.LINE_LOOP:e.isLine?o=Ke.LINE_STRIP:e.isPoints?o=Ke.POINTS:o=e.material.wireframe?Ke.LINES:Ke.TRIANGLES;const c={},l={},u=[],h=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=a.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let _=null;for(let v in a.attributes){if(v.slice(0,5)==="morph")continue;const S=a.attributes[v];if(v=f[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),t.attributes.has(this.getUID(S))){l[v]=t.attributes.get(this.getUID(S));continue}_=null;const C=S.array;v==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),_=new ot(new Uint16Array(C),S.itemSize,S.normalized));const A=this.processAccessor(_||S,a);A!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,S),l[v]=A,t.attributes.set(this.getUID(S),A))}if(d!==void 0&&a.setAttribute("normal",d),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const v=[],S=[],b={};if(e.morphTargetDictionary!==void 0)for(const C in e.morphTargetDictionary)b[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){const A={};let B=!1;for(const E in a.morphAttributes){if(E!=="position"&&E!=="normal"){B||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),B=!0);continue}const R=a.morphAttributes[E][C],Y=E.toUpperCase(),L=a.attributes[E];if(t.attributes.has(this.getUID(R,!0))){A[Y]=t.attributes.get(this.getUID(R,!0));continue}const H=R.clone();if(!a.morphTargetsRelative)for(let x=0,O=R.count;x<O;x++)for(let $=0;$<R.itemSize;$++)$===0&&H.setX(x,R.getX(x)-L.getX(x)),$===1&&H.setY(x,R.getY(x)-L.getY(x)),$===2&&H.setZ(x,R.getZ(x)-L.getZ(x)),$===3&&H.setW(x,R.getW(x)-L.getW(x));A[Y]=this.processAccessor(H,a),t.attributes.set(this.getUID(L,!0),A[Y])}h.push(A),v.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&S.push(b[C])}c.weights=v,S.length>0&&(c.extras={},c.extras.targetNames=S)}const g=Array.isArray(e.material);if(g&&a.groups.length===0)return null;const m=g?e.material:[e.material],p=g?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,S=p.length;v<S;v++){const b={mode:o,attributes:l};if(this.serializeUserData(a,b),h.length>0&&(b.targets=h),a.index!==null){let A=this.getUID(a.index);(p[v].start!==void 0||p[v].count!==void 0)&&(A+=":"+p[v].start+":"+p[v].count),t.attributes.has(A)?b.indices=t.attributes.get(A):(b.indices=this.processAccessor(a.index,a,p[v].start,p[v].count),t.attributes.set(A,b.indices)),b.indices===null&&delete b.indices}const C=this.processMaterial(m[p[v].materialIndex]);C!==null&&(b.material=C),u.push(b)}c.primitives=u,n.meshes||(n.meshes=[]),this._invokeAll(function(v){v.writeMesh&&v.writeMesh(e,c)});const M=n.meshes.push(c)-1;return t.meshes.set(r,M),M}detectMeshQuantization(e,t){if(this.extensionsUsed[Qs])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];Xc[i]&&Xc[i].includes(n)&&(this.extensionsUsed[Qs]=!0,this.extensionsRequired[Qs]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:nr.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Fa.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){const l=r[c],u=$e.parseTrackName(l.name);let h=$e.findNode(t,u.nodeName);const f=jc[u.propertyName];if(u.objectName==="bones"&&(h.isSkinnedMesh===!0?h=h.skeleton.getBoneByName(u.objectIndex):h=void 0),!h||!f)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name),null;const d=1;let _=l.values.length/l.times.length;f===jc.morphTargetInfluences&&(_/=h.morphTargetInfluences.length);let g;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",_/=3):l.getInterpolation()===wi?g="STEP":g="LINEAR",o.push({input:this.processAccessor(new ot(l.times,d)),output:this.processAccessor(new ot(l.values,_)),interpolation:g}),a.push({sampler:o.length-1,target:{node:i.get(h),path:f}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],c=new Float32Array(r.bones.length*16),l=new Ve;for(let h=0;h<r.bones.length;++h)o.push(n.get(r.bones[h])),l.copy(r.boneInverses[h]),l.multiply(e.bindMatrix).toArray(c,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ot(c,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();qi(o,[0,0,0,1])||(r.rotation=o),qi(c,[0,0,0])||(r.translation=c),qi(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),l0(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=this.processMesh(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let c=0,l=e.children.length;c<l;c++){const u=e.children[c];if(u.visible||n.onlyVisible===!1){const h=this.processNode(u);h!==null&&o.push(h)}}o.length>0&&(r.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,r)});const a=t.nodes.push(r)-1;return i.set(e,a),a}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,o=e.children.length;a<o;a++){const c=e.children[a];if(c.visible||n.onlyVisible===!1){const l=this.processNode(c);l!==null&&r.push(l)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}processObjects(e){const t=new rr;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof rr?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class d0{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class f0{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class p0{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class m0{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class g0{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class _0{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class x0{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class v0{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(i0)&&!e.specularIntensityMap&&!e.specularColorTexture)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const a={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){const a={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class y0{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const a={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class M0{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const a={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class S0{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class E0{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),a=new Float32Array(i.count*4),o=new Float32Array(i.count*3),c=new Ve,l=new W,u=new Ht,h=new W;for(let d=0;d<i.count;d++)i.getMatrixAt(d,c),c.decompose(l,u,h),l.toArray(r,d*3),u.toArray(a,d*4),h.toArray(o,d*3);const f={TRANSLATION:n.processAccessor(new ot(r,3)),ROTATION:n.processAccessor(new ot(a,4)),SCALE:n.processAccessor(new ot(o,3))};i.instanceColor&&(f._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Fa.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n));let o;if(s.times.length===0){i[0]=e;for(let c=0;c<n;c++)r[c]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let c=0;c<s.times.length;c++){if(Math.abs(s.times[c]-e)<.001)return c;if(s.times[c]<e&&s.times[c+1]>e){i.set(s.times.slice(0,c+1),0),i[c+1]=e,i.set(s.times.slice(c+1),c+2),r.set(s.values.slice(0,(c+1)*n),0),r.set(a.evaluate(e),(c+1)*n),r.set(s.values.slice((c+1)*n),(c+2)*n),o=c+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const o=$e.parseTrackName(a.name),c=$e.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(jn)}const l=c.morphTargetInfluences.length,u=c.morphTargetDictionary[o.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let h;if(n[c.uuid]===void 0){h=a.clone();const d=new h.ValueBufferType(l*h.times.length);for(let _=0;_<h.times.length;_++)d[_*l+u]=h.values[_];h.name=(o.nodeName||"")+".morphTargetInfluences",h.values=d,n[c.uuid]=h,t.push(h);continue}const f=a.createInterpolant(new a.ValueBufferType(1));h=n[c.uuid];for(let d=0;d<h.times.length;d++)h.values[d*l+u]=f.evaluate(h.times[d]);for(let d=0;d<a.times.length;d++){const _=this.insertKeyframe(h,a.times[d]);h.values[_*l+u]=a.values[d]}}return s.tracks=t,s}};function ta(s,e=!0){return new Blob([s],{type:e?"application/octet-stream":"text/plain"})}class b0{constructor(){this.zipTool=new Bl}loadModel(e,t){console.log("Load Model");let n=this.createFileMap(e);new Nl().setURLModifier(c=>{let l=n[c];return l&&console.log("Loading",c),URL.createObjectURL(l)});let r=e[0],a=r.name,o=new FileReader;o.addEventListener("progress",function(c){let l=Math.floor(c.loaded/c.total*100)+"%";console.log("Loading",a,l)}),o.addEventListener("load",c=>{var h;let l=(h=c.target)==null?void 0:h.result;new b_().parse(l,"",f=>{let d=f.scene;this.model=d,t(d)})},!1),o.readAsArrayBuffer(r)}createFileMap(e){let t={};for(let n=0;n<e.length;n++){let i=e[n];t[e.name]=i}return t}splitModel(){console.log("Split Model");let e={name:this.model.name,backgrounds:[],machines:[]},t=[];this.model.children.forEach(n=>{if(n.name=="Wall"){t.push(n);let i=[];n.updateMatrix(),n.matrix.toArray(i);let r={id:n.name,parent:n.parent?n.parent.name:null,type:1,tag:[],matrix4:i,path:"models/"+n.name+".glb",children:[]};e.backgrounds=[r]}else if(n.type=="Object3D"){let i=[];n.updateMatrix(),n.matrix.toArray(i);let r={id:n.name,parent:n.parent?n.parent.name:null,type:4,tag:[],matrix4:i,children:[]};for(let a=0;a<n.children.length;a++){let o=n.children[a],c=[];o.updateMatrix(),o.matrix.toArray(c),t.push(o);let l={id:o.name,parent:o.parent?o.parent.name:null,type:4,tag:[],matrix4:c,path:"models/"+o.name+".glb",children:[]};r.children.push(l)}e.machines.push(r)}else{t.push(n);let i=[];n.updateMatrix(),n.matrix.toArray(i);let r={id:n.name,parent:n.parent?n.parent.name:null,type:4,tag:[],matrix4:i,path:"models/"+n.name+".glb",children:[]};e.machines.push(r)}}),console.log(e),this.packageModel(e,t)}packageModel(e,t){const n=new Fa;this.zipTool.appFileBlob("modelTiles.json",ta(JSON.stringify(e),!1));for(let i=0;i<t.length;i++){let r=new rr;r.add(t[i]),t[i].position.copy(new W),t[i].quaternion.copy(new Ht),t[i].scale.copy(new W(1,1,1)),n.parse(r,a=>{let o=t[i].name;this.zipTool.appFileBlob(`models/${o}.glb`,ta(ta(a),!1)),i==t.length-1&&this.zipTool.download("model",()=>{alert("Successful!")})},a=>{console.log(a)},{binary:!0})}}}class T0{constructor(){this.render=()=>{requestAnimationFrame(this.render),this.controls.update(),this.renderer.render(this.scene,this.camera)},this.windowResized=()=>{let r=document.getElementById("container");const a=r==null?void 0:r.getBoundingClientRect();this.camera.aspect=(a==null?void 0:a.width)/(a==null?void 0:a.height),this.renderer.setSize(a==null?void 0:a.width,a==null?void 0:a.height)},this.zipTool=new Bl,this.modelTool=new b0,this.scene=new rr;let e=new c_(16777215,3);this.scene.add(e);let t=new Ol(16777215,2);this.scene.add(t),this.camera=new St(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.y=10,this.camera.position.z=-1,this.renderer=new Ra({antialias:!0}),this.renderer.setClearColor("#000000");let n=document.getElementById("container");const i=n==null?void 0:n.getBoundingClientRect();this.renderer.setSize(i==null?void 0:i.width,i==null?void 0:i.height),n==null||n.appendChild(this.renderer.domElement),this.controls=new y_(this.camera,this.renderer.domElement),this.render(),window.addEventListener("resize",this.windowResized,!1)}loadModel(e){this.modelTool.loadModel(e,t=>{this.scene.add(t),this.model=t,this.modelTool.splitModel()})}}function A0(s){let e,t,n;return{c(){e=Qc("div"),e.textContent="Drag and Drop to upload model",jr(e,"id","dragzone"),jr(e,"class","svelte-178qavp")},m(i,r){na(i,e,r),t||(n=[Xa(e,"dragover",s[0]),Xa(e,"drop",s[1])],t=!0)},p:Ei,d(i){i&&Xr(e),t=!1,sr(n)}}}function w0(s){let e,t,n=A0(s);return{c(){n&&n.c(),e=Jl(),t=Qc("div"),jr(t,"id","container"),jr(t,"class","svelte-178qavp")},m(i,r){n&&n.m(i,r),na(i,e,r),na(i,t,r)},p(i,[r]){},i:Ei,o:Ei,d(i){i&&(Xr(e),Xr(t)),n&&n.d(i)}}}function R0(s){let e;return tu(async()=>{e=new T0}),[i=>{i.preventDefault(),i.dataTransfer&&(i.dataTransfer.Effect="copy")},i=>{i.preventDefault(),e.loadModel(i.dataTransfer.files)}]}class C0 extends du{constructor(e){super(),hu(this,e,R0,w0,Kl,{})}}new C0({target:document.getElementById("app")});
