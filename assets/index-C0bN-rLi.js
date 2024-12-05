(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="171",Oo=0,na=1,zo=2,no=1,Vo=2,vn=3,In=0,We=1,gn=2,Pn=0,di=1,ia=2,ra=3,sa=4,Ho=5,Wn=100,Go=101,ko=102,Wo=103,Xo=104,qo=200,Yo=201,Zo=202,Ko=203,es=204,ns=205,$o=206,jo=207,Qo=208,Jo=209,tl=210,el=211,nl=212,il=213,rl=214,is=0,rs=1,ss=2,vi=3,as=4,os=5,ls=6,cs=7,ks=0,sl=1,al=2,Ln=0,ol=1,ll=2,cl=3,ul=4,hl=5,fl=6,dl=7,io=300,gi=301,_i=302,us=303,hs=304,xr=306,fs=1e3,qn=1001,ds=1002,sn=1003,pl=1004,Gi=1005,on=1006,Tr=1007,Yn=1008,Mn=1009,ro=1010,so=1011,Di=1012,Ws=1013,Zn=1014,_n=1015,Fi=1016,Xs=1017,qs=1018,xi=1020,ao=35902,oo=1021,lo=1022,rn=1023,co=1024,uo=1025,pi=1026,yi=1027,ho=1028,Ys=1029,fo=1030,Zs=1031,Ks=1033,hr=33776,fr=33777,dr=33778,pr=33779,ps=35840,ms=35841,vs=35842,gs=35843,_s=36196,xs=37492,ys=37496,Ms=37808,Ss=37809,Es=37810,ws=37811,Ts=37812,As=37813,bs=37814,Rs=37815,Cs=37816,Ps=37817,Ls=37818,Is=37819,Ds=37820,Us=37821,mr=36492,Ns=36494,Fs=36495,po=36283,Bs=36284,Os=36285,zs=36286,ml=3200,vl=3201,mo=0,gl=1,Cn="",Ke="srgb",Mi="srgb-linear",gr="linear",Ae="srgb",$n=7680,aa=519,_l=512,xl=513,yl=514,vo=515,Ml=516,Sl=517,El=518,wl=519,oa=35044,la="300 es",xn=2e3,_r=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ca=1234567;const Li=Math.PI/180,Ui=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function $s(i,t){return(i%t+t)%t}function Tl(i,t,e,n,a){return n+(i-t)*(a-n)/(e-t)}function Al(i,t,e){return i!==t?(e-i)/(t-i):0}function Ii(i,t,e){return(1-e)*i+e*t}function bl(i,t,e,n){return Ii(i,t,1-Math.exp(-e*n))}function Rl(i,t=1){return t-Math.abs($s(i,t*2)-t)}function Cl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ll(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Il(i,t){return i+Math.random()*(t-i)}function Dl(i){return i*(.5-Math.random())}function Ul(i){i!==void 0&&(ca=i);let t=ca+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nl(i){return i*Li}function Fl(i){return i*Ui}function Bl(i){return(i&i-1)===0&&i!==0}function Ol(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vl(i,t,e,n,a){const r=Math.cos,s=Math.sin,o=r(e/2),c=s(e/2),f=r((t+n)/2),u=s((t+n)/2),l=r((t-n)/2),h=s((t-n)/2),p=r((n-t)/2),v=s((n-t)/2);switch(a){case"XYX":i.set(o*u,c*l,c*h,o*f);break;case"YZY":i.set(c*h,o*u,c*l,o*f);break;case"ZXZ":i.set(c*l,c*h,o*u,o*f);break;case"XZX":i.set(o*u,c*v,c*p,o*f);break;case"YXY":i.set(c*p,o*u,c*v,o*f);break;case"ZYZ":i.set(c*v,c*p,o*u,o*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hl={DEG2RAD:Li,RAD2DEG:Ui,generateUUID:wi,clamp:ge,euclideanModulo:$s,mapLinear:Tl,inverseLerp:Al,lerp:Ii,damp:bl,pingpong:Rl,smoothstep:Cl,smootherstep:Pl,randInt:Ll,randFloat:Il,randFloatSpread:Dl,seededRandom:Ul,degToRad:Nl,radToDeg:Fl,isPowerOfTwo:Bl,ceilPowerOfTwo:Ol,floorPowerOfTwo:zl,setQuaternionFromProperEuler:Vl,normalize:Oe,denormalize:ui};class we{constructor(t=0,e=0){we.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,a,r,s,o,c,f){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,f)}set(t,e,n,a,r,s,o,c,f){const u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=s,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],f=n[1],u=n[4],l=n[7],h=n[2],p=n[5],v=n[8],g=a[0],m=a[3],d=a[6],x=a[1],M=a[4],_=a[7],A=a[2],P=a[5],U=a[8];return r[0]=s*g+o*x+c*A,r[3]=s*m+o*M+c*P,r[6]=s*d+o*_+c*U,r[1]=f*g+u*x+l*A,r[4]=f*m+u*M+l*P,r[7]=f*d+u*_+l*U,r[2]=h*g+p*x+v*A,r[5]=h*m+p*M+v*P,r[8]=h*d+p*_+v*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],f=t[7],u=t[8];return e*s*u-e*o*f-n*r*u+n*o*c+a*r*f-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],f=t[7],u=t[8],l=u*s-o*f,h=o*c-u*r,p=f*r-s*c,v=e*l+n*h+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*f-u*n)*g,t[2]=(o*n-a*s)*g,t[3]=h*g,t[4]=(u*e-a*c)*g,t[5]=(a*r-o*e)*g,t[6]=p*g,t[7]=(n*c-f*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),f=Math.sin(r);return this.set(n*c,n*f,-n*(c*s+f*o)+s+t,-a*f,a*c,-a*(-f*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new he;function go(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ni(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gl(){const i=Ni("canvas");return i.style.display="block",i}const ua={};function hi(i){i in ua||(ua[i]=!0,console.warn(i))}function kl(i,t,e){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ha=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fa=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ql(){const i={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Ae&&(a.r=yn(a.r),a.g=yn(a.g),a.b=yn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ae&&(a.r=mi(a.r),a.g=mi(a.g),a.b=mi(a.b))),a},fromWorkingColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},toWorkingColorSpace:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Cn?gr:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mi]:{primaries:t,whitePoint:n,transfer:gr,toXYZ:ha,fromXYZ:fa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:ha,fromXYZ:fa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const Me=ql();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class Yl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=Ni("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ni("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=yn(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zl=0;class _o{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(br(a[s].image)):r.push(br(a[s]))}else r=br(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kl=0;class Ve extends Ei{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=qn,a=qn,r=on,s=Yn,o=rn,c=Mn,f=Ve.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=wi(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==io)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=io;Ve.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,a=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,f=c[0],u=c[4],l=c[8],h=c[1],p=c[5],v=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(f+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(f+1)/2,_=(p+1)/2,A=(d+1)/2,P=(u+h)/4,U=(l+g)/4,L=(v+m)/4;return M>_&&M>A?M<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(M),a=P/n,r=U/n):_>A?_<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(_),n=P/a,r=L/a):A<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),n=U/r,a=L/r),this.set(n,a,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(h-u)/x,this.w=Math.acos((f+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $l extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const a={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends $l{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xo extends Ve{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jl extends Ve{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],f=n[a+1],u=n[a+2],l=n[a+3];const h=r[s+0],p=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=c,t[e+1]=f,t[e+2]=u,t[e+3]=l;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==h||f!==p||u!==v){let m=1-o;const d=c*h+f*p+u*v+l*g,x=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const A=Math.sqrt(M),P=Math.atan2(A,d*x);m=Math.sin(m*P)/A,o=Math.sin(o*P)/A}const _=o*x;if(c=c*m+h*_,f=f*m+p*_,u=u*m+v*_,l=l*m+g*_,m===1-o){const A=1/Math.sqrt(c*c+f*f+u*u+l*l);c*=A,f*=A,u*=A,l*=A}}t[e]=c,t[e+1]=f,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],f=n[a+2],u=n[a+3],l=r[s],h=r[s+1],p=r[s+2],v=r[s+3];return t[e]=o*v+u*l+c*p-f*h,t[e+1]=c*v+u*h+f*l-o*p,t[e+2]=f*v+u*p+o*h-c*l,t[e+3]=u*v-o*l-c*h-f*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,f=o(n/2),u=o(a/2),l=o(r/2),h=c(n/2),p=c(a/2),v=c(r/2);switch(s){case"XYZ":this._x=h*u*l+f*p*v,this._y=f*p*l-h*u*v,this._z=f*u*v+h*p*l,this._w=f*u*l-h*p*v;break;case"YXZ":this._x=h*u*l+f*p*v,this._y=f*p*l-h*u*v,this._z=f*u*v-h*p*l,this._w=f*u*l+h*p*v;break;case"ZXY":this._x=h*u*l-f*p*v,this._y=f*p*l+h*u*v,this._z=f*u*v+h*p*l,this._w=f*u*l-h*p*v;break;case"ZYX":this._x=h*u*l-f*p*v,this._y=f*p*l+h*u*v,this._z=f*u*v-h*p*l,this._w=f*u*l+h*p*v;break;case"YZX":this._x=h*u*l+f*p*v,this._y=f*p*l+h*u*v,this._z=f*u*v-h*p*l,this._w=f*u*l-h*p*v;break;case"XZY":this._x=h*u*l-f*p*v,this._y=f*p*l-h*u*v,this._z=f*u*v+h*p*l,this._w=f*u*l+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],f=e[2],u=e[6],l=e[10],h=n+o+l;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-f)*p,this._z=(s-a)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(u-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+f)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-f)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(s-a)/p,this._x=(r+f)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,f=e._z,u=e._w;return this._x=n*u+s*o+a*f-r*c,this._y=a*u+s*c+r*o-n*f,this._z=r*u+s*f+n*c-a*o,this._w=s*u-n*o-a*c-r*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const f=Math.sqrt(c),u=Math.atan2(f,o),l=Math.sin((1-e)*u)/f,h=Math.sin(e*u)/f;return this._w=s*l+this._w*h,this._x=n*l+this._x*h,this._y=a*l+this._y*h,this._z=r*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,e=0,n=0){at.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,f=2*(s*a-o*n),u=2*(o*e-r*a),l=2*(r*n-s*e);return this.x=e+c*f+s*l-o*u,this.y=n+c*u+o*f-r*l,this.z=a+c*l+r*u-s*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new at,da=new Bi;class Oi{constructor(t=new at(1/0,1/0,1/0),e=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Je):Je.fromBufferAttribute(r,s),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),Wi.subVectors(this.max,Ai),Qn.subVectors(t.a,Ai),Jn.subVectors(t.b,Ai),ti.subVectors(t.c,Ai),En.subVectors(Jn,Qn),wn.subVectors(ti,Jn),Fn.subVectors(Qn,ti);let e=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Fn.z,Fn.y,En.z,0,-En.x,wn.z,0,-wn.x,Fn.z,0,-Fn.x,-En.y,En.x,0,-wn.y,wn.x,0,-Fn.y,Fn.x,0];return!Cr(e,Qn,Jn,ti,Wi)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,Qn,Jn,ti,Wi))?!1:(Xi.crossVectors(En,wn),e=[Xi.x,Xi.y,Xi.z],Cr(e,Qn,Jn,ti,Wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new at,new at,new at,new at,new at,new at,new at,new at],Je=new at,ki=new Oi,Qn=new at,Jn=new at,ti=new at,En=new at,wn=new at,Fn=new at,Ai=new at,Wi=new at,Xi=new at,Bn=new at;function Cr(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Bn.fromArray(i,r);const o=a.x*Math.abs(Bn.x)+a.y*Math.abs(Bn.y)+a.z*Math.abs(Bn.z),c=t.dot(Bn),f=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(c,f,u),Math.min(c,f,u))>o)return!1}return!0}const Ql=new Oi,bi=new at,Pr=new at;class js{constructor(t=new at,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ql.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bi.subVectors(t,this.center);const e=bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(bi,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bi.copy(t.center).add(Pr)),this.expandByPoint(bi.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new at,Lr=new at,qi=new at,Tn=new at,Ir=new at,Yi=new at,Dr=new at;class Jl{constructor(t=new at,e=new at(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Lr.copy(t).add(e).multiplyScalar(.5),qi.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Lr);const r=t.distanceTo(e)*.5,s=-this.direction.dot(qi),o=Tn.dot(this.direction),c=-Tn.dot(qi),f=Tn.lengthSq(),u=Math.abs(1-s*s);let l,h,p,v;if(u>0)if(l=s*c-o,h=s*o-c,v=r*u,l>=0)if(h>=-v)if(h<=v){const g=1/u;l*=g,h*=g,p=l*(l+s*h+2*o)+h*(s*l+h+2*c)+f}else h=r,l=Math.max(0,-(s*h+o)),p=-l*l+h*(h+2*c)+f;else h=-r,l=Math.max(0,-(s*h+o)),p=-l*l+h*(h+2*c)+f;else h<=-v?(l=Math.max(0,-(-s*r+o)),h=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+h*(h+2*c)+f):h<=v?(l=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+f):(l=Math.max(0,-(s*r+o)),h=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+h*(h+2*c)+f);else h=s>0?-r:r,l=Math.max(0,-(s*h+o)),p=-l*l+h*(h+2*c)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Lr).addScaledVector(qi,h),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),a=fn.dot(fn)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const f=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,h=this.origin;return f>=0?(n=(t.min.x-h.x)*f,a=(t.max.x-h.x)*f):(n=(t.max.x-h.x)*f,a=(t.min.x-h.x)*f),u>=0?(r=(t.min.y-h.y)*u,s=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,s=(t.min.y-h.y)*u),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-h.z)*l,c=(t.max.z-h.z)*l):(o=(t.max.z-h.z)*l,c=(t.min.z-h.z)*l),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,a,r){Ir.subVectors(e,t),Yi.subVectors(n,t),Dr.crossVectors(Ir,Yi);let s=this.direction.dot(Dr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Tn.subVectors(this.origin,t);const c=o*this.direction.dot(Yi.crossVectors(Tn,Yi));if(c<0)return null;const f=o*this.direction.dot(Ir.cross(Tn));if(f<0||c+f>s)return null;const u=-o*Tn.dot(Dr);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,a,r,s,o,c,f,u,l,h,p,v,g,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,f,u,l,h,p,v,g,m)}set(t,e,n,a,r,s,o,c,f,u,l,h,p,v,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=a,d[1]=r,d[5]=s,d[9]=o,d[13]=c,d[2]=f,d[6]=u,d[10]=l,d[14]=h,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/ei.setFromMatrixColumn(t,0).length(),r=1/ei.setFromMatrixColumn(t,1).length(),s=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),f=Math.sin(a),u=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const h=s*u,p=s*l,v=o*u,g=o*l;e[0]=c*u,e[4]=-c*l,e[8]=f,e[1]=p+v*f,e[5]=h-g*f,e[9]=-o*c,e[2]=g-h*f,e[6]=v+p*f,e[10]=s*c}else if(t.order==="YXZ"){const h=c*u,p=c*l,v=f*u,g=f*l;e[0]=h+g*o,e[4]=v*o-p,e[8]=s*f,e[1]=s*l,e[5]=s*u,e[9]=-o,e[2]=p*o-v,e[6]=g+h*o,e[10]=s*c}else if(t.order==="ZXY"){const h=c*u,p=c*l,v=f*u,g=f*l;e[0]=h-g*o,e[4]=-s*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=s*u,e[9]=g-h*o,e[2]=-s*f,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const h=s*u,p=s*l,v=o*u,g=o*l;e[0]=c*u,e[4]=v*f-p,e[8]=h*f+g,e[1]=c*l,e[5]=g*f+h,e[9]=p*f-v,e[2]=-f,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const h=s*c,p=s*f,v=o*c,g=o*f;e[0]=c*u,e[4]=g-h*l,e[8]=v*l+p,e[1]=l,e[5]=s*u,e[9]=-o*u,e[2]=-f*u,e[6]=p*l+v,e[10]=h-g*l}else if(t.order==="XZY"){const h=s*c,p=s*f,v=o*c,g=o*f;e[0]=c*u,e[4]=-l,e[8]=f*u,e[1]=h*l+g,e[5]=s*u,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*u,e[10]=g*l+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tc,t,ec)}lookAt(t,e,n){const a=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),An.crossVectors(n,Ye),An.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),An.crossVectors(n,Ye)),An.normalize(),Zi.crossVectors(Ye,An),a[0]=An.x,a[4]=Zi.x,a[8]=Ye.x,a[1]=An.y,a[5]=Zi.y,a[9]=Ye.y,a[2]=An.z,a[6]=Zi.z,a[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],f=n[12],u=n[1],l=n[5],h=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],x=n[3],M=n[7],_=n[11],A=n[15],P=a[0],U=a[4],L=a[8],E=a[12],y=a[1],T=a[5],B=a[9],N=a[13],X=a[2],q=a[6],J=a[10],O=a[14],I=a[3],Q=a[7],$=a[11],F=a[15];return r[0]=s*P+o*y+c*X+f*I,r[4]=s*U+o*T+c*q+f*Q,r[8]=s*L+o*B+c*J+f*$,r[12]=s*E+o*N+c*O+f*F,r[1]=u*P+l*y+h*X+p*I,r[5]=u*U+l*T+h*q+p*Q,r[9]=u*L+l*B+h*J+p*$,r[13]=u*E+l*N+h*O+p*F,r[2]=v*P+g*y+m*X+d*I,r[6]=v*U+g*T+m*q+d*Q,r[10]=v*L+g*B+m*J+d*$,r[14]=v*E+g*N+m*O+d*F,r[3]=x*P+M*y+_*X+A*I,r[7]=x*U+M*T+_*q+A*Q,r[11]=x*L+M*B+_*J+A*$,r[15]=x*E+M*N+_*O+A*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],f=t[13],u=t[2],l=t[6],h=t[10],p=t[14],v=t[3],g=t[7],m=t[11],d=t[15];return v*(+r*c*l-a*f*l-r*o*h+n*f*h+a*o*p-n*c*p)+g*(+e*c*p-e*f*h+r*s*h-a*s*p+a*f*u-r*c*u)+m*(+e*f*l-e*o*p-r*s*l+n*s*p+r*o*u-n*f*u)+d*(-a*o*u-e*c*l+e*o*h+a*s*l-n*s*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],f=t[7],u=t[8],l=t[9],h=t[10],p=t[11],v=t[12],g=t[13],m=t[14],d=t[15],x=l*m*f-g*h*f+g*c*p-o*m*p-l*c*d+o*h*d,M=v*h*f-u*m*f-v*c*p+s*m*p+u*c*d-s*h*d,_=u*g*f-v*l*f+v*o*p-s*g*p-u*o*d+s*l*d,A=v*l*c-u*g*c-v*o*h+s*g*h+u*o*m-s*l*m,P=e*x+n*M+a*_+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return t[0]=x*U,t[1]=(g*h*r-l*m*r-g*a*p+n*m*p+l*a*d-n*h*d)*U,t[2]=(o*m*r-g*c*r+g*a*f-n*m*f-o*a*d+n*c*d)*U,t[3]=(l*c*r-o*h*r-l*a*f+n*h*f+o*a*p-n*c*p)*U,t[4]=M*U,t[5]=(u*m*r-v*h*r+v*a*p-e*m*p-u*a*d+e*h*d)*U,t[6]=(v*c*r-s*m*r-v*a*f+e*m*f+s*a*d-e*c*d)*U,t[7]=(s*h*r-u*c*r+u*a*f-e*h*f-s*a*p+e*c*p)*U,t[8]=_*U,t[9]=(v*l*r-u*g*r-v*n*p+e*g*p+u*n*d-e*l*d)*U,t[10]=(s*g*r-v*o*r+v*n*f-e*g*f-s*n*d+e*o*d)*U,t[11]=(u*o*r-s*l*r-u*n*f+e*l*f+s*n*p-e*o*p)*U,t[12]=A*U,t[13]=(u*g*a-v*l*a+v*n*h-e*g*h-u*n*m+e*l*m)*U,t[14]=(v*o*a-s*g*a-v*n*c+e*g*c+s*n*m-e*o*m)*U,t[15]=(s*l*a-u*o*a+u*n*c-e*l*c-s*n*h+e*o*h)*U,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,f=r*s,u=r*o;return this.set(f*s+n,f*o-a*c,f*c+a*o,0,f*o+a*c,u*o+n,u*c-a*s,0,f*c-a*o,u*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,f=r+r,u=s+s,l=o+o,h=r*f,p=r*u,v=r*l,g=s*u,m=s*l,d=o*l,x=c*f,M=c*u,_=c*l,A=n.x,P=n.y,U=n.z;return a[0]=(1-(g+d))*A,a[1]=(p+_)*A,a[2]=(v-M)*A,a[3]=0,a[4]=(p-_)*P,a[5]=(1-(h+d))*P,a[6]=(m+x)*P,a[7]=0,a[8]=(v+M)*U,a[9]=(m-x)*U,a[10]=(1-(h+g))*U,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=ei.set(a[0],a[1],a[2]).length();const s=ei.set(a[4],a[5],a[6]).length(),o=ei.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],tn.copy(this);const f=1/r,u=1/s,l=1/o;return tn.elements[0]*=f,tn.elements[1]*=f,tn.elements[2]*=f,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=l,tn.elements[9]*=l,tn.elements[10]*=l,e.setFromRotationMatrix(tn),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=xn){const c=this.elements,f=2*r/(e-t),u=2*r/(n-a),l=(e+t)/(e-t),h=(n+a)/(n-a);let p,v;if(o===xn)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===_r)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=xn){const c=this.elements,f=1/(e-t),u=1/(n-a),l=1/(s-r),h=(e+t)*f,p=(n+a)*u;let v,g;if(o===xn)v=(s+r)*l,g=-2*l;else if(o===_r)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ei=new at,tn=new Ce,tc=new at(0,0,0),ec=new at(1,1,1),An=new at,Zi=new at,Ye=new at,pa=new Ce,ma=new Bi;class un{constructor(t=0,e=0,n=0,a=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],f=a[5],u=a[9],l=a[2],h=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-s,f)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,f));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ge(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ma.setFromEuler(this),this.setFromQuaternion(ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nc=0;const va=new at,ni=new Bi,dn=new Ce,Ki=new at,Ri=new at,ic=new at,rc=new Bi,ga=new at(1,0,0),_a=new at(0,1,0),xa=new at(0,0,1),ya={type:"added"},sc={type:"removed"},ii={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Be extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new at,e=new un,n=new Bi,a=new at(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ce},normalMatrix:{value:new he}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(ga,t)}rotateY(t){return this.rotateOnAxis(_a,t)}rotateZ(t){return this.rotateOnAxis(xa,t)}translateOnAxis(t,e){return va.copy(t).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ga,t)}translateY(t){return this.translateOnAxis(_a,t)}translateZ(t){return this.translateOnAxis(xa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ri,Ki,this.up):dn.lookAt(Ki,Ri,this.up),this.quaternion.setFromRotationMatrix(dn),a&&(dn.extractRotation(a.matrixWorld),ni.setFromRotationMatrix(dn),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ya),ii.child=t,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sc),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ya),ii.child=t,this.dispatchEvent(ii),ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,t,ic),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,rc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let f=0,u=c.length;f<u;f++){const l=c[f];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,f=this.material.length;c<f;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),f=s(t.textures),u=s(t.images),l=s(t.shapes),h=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const c=[];for(const f in o){const u=o[f];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Be.DEFAULT_UP=new at(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new at,pn=new at,Nr=new at,mn=new at,ri=new at,si=new at,Ma=new at,Fr=new at,Br=new at,Or=new at,zr=new Re,Vr=new Re,Hr=new Re;class nn{constructor(t=new at,e=new at,n=new at){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),en.subVectors(t,e),a.cross(en);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){en.subVectors(a,e),pn.subVectors(n,e),Nr.subVectors(t,e);const s=en.dot(en),o=en.dot(pn),c=en.dot(Nr),f=pn.dot(pn),u=pn.dot(Nr),l=s*f-o*o;if(l===0)return r.set(0,0,0),null;const h=1/l,p=(f*c-o*u)*h,v=(s*u-o*c)*h;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(s,mn.y),c.addScaledVector(o,mn.z),c)}static getInterpolatedAttribute(t,e,n,a,r,s){return zr.setScalar(0),Vr.setScalar(0),Hr.setScalar(0),zr.fromBufferAttribute(t,e),Vr.fromBufferAttribute(t,n),Hr.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(zr,r.x),s.addScaledVector(Vr,r.y),s.addScaledVector(Hr,r.z),s}static isFrontFacing(t,e,n,a){return en.subVectors(n,e),pn.subVectors(t,e),en.cross(pn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),en.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,a,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;ri.subVectors(a,n),si.subVectors(r,n),Fr.subVectors(t,n);const c=ri.dot(Fr),f=si.dot(Fr);if(c<=0&&f<=0)return e.copy(n);Br.subVectors(t,a);const u=ri.dot(Br),l=si.dot(Br);if(u>=0&&l<=u)return e.copy(a);const h=c*l-u*f;if(h<=0&&c>=0&&u<=0)return s=c/(c-u),e.copy(n).addScaledVector(ri,s);Or.subVectors(t,r);const p=ri.dot(Or),v=si.dot(Or);if(v>=0&&p<=v)return e.copy(r);const g=p*f-c*v;if(g<=0&&f>=0&&v<=0)return o=f/(f-v),e.copy(n).addScaledVector(si,o);const m=u*v-p*l;if(m<=0&&l-u>=0&&p-v>=0)return Ma.subVectors(r,a),o=(l-u)/(l-u+(p-v)),e.copy(a).addScaledVector(Ma,o);const d=1/(m+g+h);return s=g*d,o=h*d,e.copy(n).addScaledVector(ri,s).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function Gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _e{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Me.workingColorSpace){if(t=$s(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Gr(s,r,t+1/3),this.g=Gr(s,r,t),this.b=Gr(s,r,t-1/3)}return Me.toWorkingColorSpace(this,a),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Mo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Me.fromWorkingColorSpace(Fe.copy(this),t),Math.round(ge(Fe.r*255,0,255))*65536+Math.round(ge(Fe.g*255,0,255))*256+Math.round(ge(Fe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,a=Fe.g,r=Fe.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,f;const u=(o+s)/2;if(o===s)c=0,f=0;else{const l=s-o;switch(f=u<=.5?l/(s+o):l/(2-s-o),s){case n:c=(a-r)/l+(a<r?6:0);break;case a:c=(r-n)/l+2;break;case r:c=(n-a)/l+4;break}c/=6}return t.h=c,t.s=f,t.l=u,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ke){Me.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,a=Fe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL($i);const n=Ii(bn.h,$i.h,e),a=Ii(bn.s,$i.s,e),r=Ii(bn.l,$i.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new _e;_e.NAMES=Mo;let ac=0;class zi extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=di,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=es,this.blendDst=ns,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==es&&(n.blendSrc=this.blendSrc),this.blendDst!==ns&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class So extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new at,ji=new we;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oa,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ji.fromBufferAttribute(this,e),ji.applyMatrix3(t),this.setXY(e,ji.x,ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),a=Oe(a,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oa&&(t.usage=this.usage),t}}class Eo extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wo extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cn extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let oc=0;const $e=new Ce,kr=new Be,ai=new at,Ze=new Oi,Ci=new Oi,Ue=new at;class Un extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(go(t)?wo:Eo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new cn(n,3))}else{const n=Math.min(t.length,e.count);for(let a=0;a<n;a++){const r=t[a];e.setXYZ(a,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(Ze.min,Ci.min),Ze.expandByPoint(Ue),Ue.addVectors(Ze.max,Ci.max),Ze.expandByPoint(Ue)):(Ze.expandByPoint(Ci.min),Ze.expandByPoint(Ci.max))}Ze.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)Ue.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Ue));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let f=0,u=o.count;f<u;f++)Ue.fromBufferAttribute(o,f),c&&(ai.fromBufferAttribute(t,f),Ue.add(ai)),a=Math.max(a,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,a=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new at,c[L]=new at;const f=new at,u=new at,l=new at,h=new we,p=new we,v=new we,g=new at,m=new at;function d(L,E,y){f.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),l.fromBufferAttribute(n,y),h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),v.fromBufferAttribute(r,y),u.sub(f),l.sub(f),p.sub(h),v.sub(h);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(l,-p.y).multiplyScalar(T),m.copy(l).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(T),o[L].add(g),o[E].add(g),o[y].add(g),c[L].add(m),c[E].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,E=x.length;L<E;++L){const y=x[L],T=y.start,B=y.count;for(let N=T,X=T+B;N<X;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new at,_=new at,A=new at,P=new at;function U(L){A.fromBufferAttribute(a,L),P.copy(A);const E=o[L];M.copy(E),M.sub(A.multiplyScalar(A.dot(E))).normalize(),_.crossVectors(P,E);const T=_.dot(c[L])<0?-1:1;s.setXYZW(L,M.x,M.y,M.z,T)}for(let L=0,E=x.length;L<E;++L){const y=x[L],T=y.start,B=y.count;for(let N=T,X=T+B;N<X;N+=3)U(t.getX(N+0)),U(t.getX(N+1)),U(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const a=new at,r=new at,s=new at,o=new at,c=new at,f=new at,u=new at,l=new at;if(t)for(let h=0,p=t.count;h<p;h+=3){const v=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),u.subVectors(s,r),l.subVectors(a,r),u.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),f.fromBufferAttribute(n,m),o.add(u),c.add(u),f.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let h=0,p=e.count;h<p;h+=3)a.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),u.subVectors(s,r),l.subVectors(a,r),u.cross(l),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){const f=o.array,u=o.itemSize,l=o.normalized,h=new f.constructor(c.length*u);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let d=0;d<u;d++)h[v++]=f[p++]}return new ln(h,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Un,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],f=t(c,n);e.setAttribute(o,f)}const r=this.morphAttributes;for(const o in r){const c=[],f=r[o];for(let u=0,l=f.length;u<l;u++){const h=f[u],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const f=s[o];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(t[f]=c[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const f=n[c];t.data.attributes[c]=f.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],u=[];for(let l=0,h=f.length;l<h;l++){const p=f[l];u.push(p.toJSON(t.data))}u.length>0&&(a[c]=u,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const f in a){const u=a[f];this.setAttribute(f,u.clone(e))}const r=t.morphAttributes;for(const f in r){const u=[],l=r[f];for(let h=0,p=l.length;h<p;h++)u.push(l[h].clone(e));this.morphAttributes[f]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let f=0,u=s.length;f<u;f++){const l=s[f];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sa=new Ce,On=new Jl,Qi=new js,Ea=new at,Ji=new at,tr=new at,er=new at,Wr=new at,nr=new at,wa=new at,ir=new at;class Qe extends Be{constructor(t=new Un,e=new So){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,f=r.length;c<f;c++){const u=o[c],l=r[c];u!==0&&(Wr.fromBufferAttribute(l,t),s?nr.addScaledVector(Wr,u):nr.addScaledVector(Wr.sub(e),u))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(Qi.containsPoint(On.origin)===!1&&(On.intersectSphere(Qi,Ea)===null||On.origin.distanceToSquared(Ea)>(t.far-t.near)**2))&&(Sa.copy(r).invert(),On.copy(t.ray).applyMatrix4(Sa),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,f=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=s[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,A=M;_<A;_+=3){const P=o.getX(_),U=o.getX(_+1),L=o.getX(_+2);a=rr(this,d,t,n,f,u,l,P,U,L),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);a=rr(this,s,t,n,f,u,l,x,M,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=s[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,A=M;_<A;_+=3){const P=_,U=_+1,L=_+2;a=rr(this,d,t,n,f,u,l,P,U,L),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=m,M=m+1,_=m+2;a=rr(this,s,t,n,f,u,l,x,M,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function lc(i,t,e,n,a,r,s,o){let c;if(t.side===We?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===In,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(ir);return f<e.near||f>e.far?null:{distance:f,point:ir.clone(),object:i}}function rr(i,t,e,n,a,r,s,o,c,f){i.getVertexPosition(o,Ji),i.getVertexPosition(c,tr),i.getVertexPosition(f,er);const u=lc(i,t,e,n,Ji,tr,er,wa);if(u){const l=new at;nn.getBarycoord(wa,Ji,tr,er,l),a&&(u.uv=nn.getInterpolatedAttribute(a,o,c,f,l,new we)),r&&(u.uv1=nn.getInterpolatedAttribute(r,o,c,f,l,new we)),s&&(u.normal=nn.getInterpolatedAttribute(s,o,c,f,l,new at),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:f,normal:new at,materialIndex:0};nn.getNormal(Ji,tr,er,h.normal),u.face=h,u.barycoord=l}return u}class Vi extends Un{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],f=[],u=[],l=[];let h=0,p=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new cn(f,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(l,2));function v(g,m,d,x,M,_,A,P,U,L,E){const y=_/U,T=A/L,B=_/2,N=A/2,X=P/2,q=U+1,J=L+1;let O=0,I=0;const Q=new at;for(let $=0;$<J;$++){const F=$*T-N;for(let j=0;j<q;j++){const z=j*y-B;Q[g]=z*x,Q[m]=F*M,Q[d]=X,f.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[d]=P>0?1:-1,u.push(Q.x,Q.y,Q.z),l.push(j/U),l.push(1-$/L),O+=1}}for(let $=0;$<L;$++)for(let F=0;F<U;F++){const j=h+F+q*$,z=h+F+q*($+1),b=h+(F+1)+q*($+1),R=h+(F+1)+q*$;c.push(j,z,R),c.push(z,b,R),I+=6}o.addGroup(p,I,E),p+=I,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=Si(i[e]);for(const a in n)t[a]=n[a]}return t}function cc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function To(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const uc={clone:Si,merge:ze};var hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hc,this.fragmentShader=fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=cc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ao extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new at,Ta=new we,Aa=new we;class je extends Ao{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Ta,Aa),e.subVectors(Aa,Ta)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Li*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,f=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/f,a*=s.width/c,n*=s.height/f}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oi=-90,li=1;class dc extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new je(oi,li,t,e);a.layers=this.layers,this.add(a);const r=new je(oi,li,t,e);r.layers=this.layers,this.add(r);const s=new je(oi,li,t,e);s.layers=this.layers,this.add(s);const o=new je(oi,li,t,e);o.layers=this.layers,this.add(o);const c=new je(oi,li,t,e);c.layers=this.layers,this.add(c);const f=new je(oi,li,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const f of e)this.remove(f);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,f,u]=this.children,l=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,s),t.setRenderTarget(n,2,a),t.render(e,o),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,f),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,a),t.render(e,u),t.setRenderTarget(l,h,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class bo extends Ve{constructor(t,e,n,a,r,s,o,c,f,u){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,a,r,s,o,c,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pc extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new bo(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Vi(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Pn});r.uniforms.tEquirect.value=e;const s=new Qe(a,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=on),new dc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}class mc extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Xr=new at,vc=new at,gc=new he;class Gn{constructor(t=new at(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Xr.subVectors(n,e).cross(vc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gc.getNormalMatrix(t),a=this.coplanarPoint(Xr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new js,sr=new at;class Qs{constructor(t=new Gn,e=new Gn,n=new Gn,a=new Gn,r=new Gn,s=new Gn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],f=a[4],u=a[5],l=a[6],h=a[7],p=a[8],v=a[9],g=a[10],m=a[11],d=a[12],x=a[13],M=a[14],_=a[15];if(n[0].setComponents(c-r,h-f,m-p,_-d).normalize(),n[1].setComponents(c+r,h+f,m+p,_+d).normalize(),n[2].setComponents(c+s,h+u,m+v,_+x).normalize(),n[3].setComponents(c-s,h-u,m-v,_-x).normalize(),n[4].setComponents(c-o,h-l,m-g,_-M).normalize(),e===xn)n[5].setComponents(c+o,h+l,m+g,_+M).normalize();else if(e===_r)n[5].setComponents(o,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(sr.x=a.normal.x>0?t.max.x:t.min.x,sr.y=a.normal.y>0?t.max.y:t.min.y,sr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ar extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ro extends Ve{constructor(t,e,n,a,r,s,o,c,f,u=pi){if(u!==pi&&u!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=Zn),n===void 0&&u===yi&&(n=xi),super(null,a,r,s,o,c,u,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Hi extends Un{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),f=o+1,u=c+1,l=t/o,h=e/c,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){const x=d*h-s;for(let M=0;M<f;M++){const _=M*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const M=x+f*d,_=x+f*(d+1),A=x+1+f*(d+1),P=x+1+f*d;p.push(M,_,P),p.push(_,A,P)}this.setIndex(p),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Js extends Un{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let f=0;const u=[],l=new at,h=new at,p=[],v=[],g=[],m=[];for(let d=0;d<=n;d++){const x=[],M=d/n;let _=0;d===0&&s===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const P=A/e;l.x=-t*Math.cos(a+P*r)*Math.sin(s+M*o),l.y=t*Math.cos(s+M*o),l.z=t*Math.sin(a+P*r)*Math.sin(s+M*o),v.push(l.x,l.y,l.z),h.copy(l).normalize(),g.push(h.x,h.y,h.z),m.push(P+_,1-M),x.push(f++)}u.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const M=u[d][x+1],_=u[d][x],A=u[d+1][x],P=u[d+1][x+1];(d!==0||s>0)&&p.push(M,_,P),(d!==n-1||c<Math.PI)&&p.push(_,A,P)}this.setIndex(p),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vs extends zi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _c extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xc extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ba={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yc{constructor(t,e,n){const a=this;let r=!1,s=0,o=0,c;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,l){return f.push(u,l),this},this.removeHandler=function(u){const l=f.indexOf(u);return l!==-1&&f.splice(l,2),this},this.getHandler=function(u){for(let l=0,h=f.length;l<h;l+=2){const p=f[l],v=f[l+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Mc=new yc;class ta{constructor(t){this.manager=t!==void 0?t:Mc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ta.DEFAULT_MATERIAL_NAME="__DEFAULT";class Sc extends ta{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ba.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=Ni("img");function c(){u(),ba.add(t,this),e&&e(this),r.manager.itemEnd(t)}function f(l){u(),a&&a(l),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Ec extends ta{constructor(t){super(t)}load(t,e,n,a){const r=new Ve,s=new Sc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class wc extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const qr=new Ce,Ra=new at,Ca=new at;class Tc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ra.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ra),Ca.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ca),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Co extends Ao{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,s=r+f*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ac extends Tc{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bc extends wc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Ac}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rc extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function Pa(i,t,e,n){const a=Cc(n);switch(e){case oo:return i*t;case co:return i*t;case uo:return i*t*2;case ho:return i*t/a.components*a.byteLength;case Ys:return i*t/a.components*a.byteLength;case fo:return i*t*2/a.components*a.byteLength;case Zs:return i*t*2/a.components*a.byteLength;case lo:return i*t*3/a.components*a.byteLength;case rn:return i*t*4/a.components*a.byteLength;case Ks:return i*t*4/a.components*a.byteLength;case hr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ms:case gs:return Math.max(i,16)*Math.max(t,8)/4;case ps:case vs:return Math.max(i,8)*Math.max(t,8)/2;case _s:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ss:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Es:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ts:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case As:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Is:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ds:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Us:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mr:case Ns:case Fs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case po:case Bs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Os:case zs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cc(i){switch(i){case Mn:case ro:return{byteLength:1,components:1};case Di:case so:case Fi:return{byteLength:2,components:1};case Xs:case qs:return{byteLength:2,components:4};case Zn:case Ws:case _n:return{byteLength:4,components:1};case ao:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Po(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pc(i){const t=new WeakMap;function e(o,c){const f=o.array,u=o.usage,l=f.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,f,u),o.onUploadCallback();let p;if(f instanceof Float32Array)p=i.FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)p=i.SHORT;else if(f instanceof Uint32Array)p=i.UNSIGNED_INT;else if(f instanceof Int32Array)p=i.INT;else if(f instanceof Int8Array)p=i.BYTE;else if(f instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,f){const u=c.array,l=c.updateRanges;if(i.bindBuffer(f,o),l.length===0)i.bufferSubData(f,0,u);else{l.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<l.length;p++){const v=l[h],g=l[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++h,l[h]=g)}l.length=h+1;for(let p=0,v=l.length;p<v;p++){const g=l[p];i.bufferSubData(f,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=t.get(o);if(f===void 0)t.set(o,e(o,c));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,o,c),f.version=o.version}}return{get:a,remove:r,update:s}}var Lc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ic=`#ifdef USE_ALPHAHASH
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
#endif`,Dc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bc=`#ifdef USE_AOMAP
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
#endif`,Oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wc=`#ifdef USE_IRIDESCENCE
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
#endif`,Xc=`#ifdef USE_BUMPMAP
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
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tu=`#define PI 3.141592653589793
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
} // validated`,eu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,nu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",lu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
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
}`,xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Su=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Eu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Pu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vu=`#if defined( USE_POINTS_UV )
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
#endif`,Hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ju=`#ifdef USE_NORMALMAP
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
#endif`,th=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ph=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_h=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xh=`#ifdef USE_SKINNING
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
#endif`,yh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eh=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Th=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ch=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ph=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
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
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Bh=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Oh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,zh=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gh=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wh=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Xh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,qh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yh=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kh=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$h=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,jh=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Jh=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,tf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ef=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rf=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sf=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,af=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,lf=`uniform vec3 color;
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
}`,cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,uf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,pe={alphahash_fragment:Lc,alphahash_pars_fragment:Ic,alphamap_fragment:Dc,alphamap_pars_fragment:Uc,alphatest_fragment:Nc,alphatest_pars_fragment:Fc,aomap_fragment:Bc,aomap_pars_fragment:Oc,batching_pars_vertex:zc,batching_vertex:Vc,begin_vertex:Hc,beginnormal_vertex:Gc,bsdfs:kc,iridescence_fragment:Wc,bumpmap_pars_fragment:Xc,clipping_planes_fragment:qc,clipping_planes_pars_fragment:Yc,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:Kc,color_fragment:$c,color_pars_fragment:jc,color_pars_vertex:Qc,color_vertex:Jc,common:tu,cube_uv_reflection_fragment:eu,defaultnormal_vertex:nu,displacementmap_pars_vertex:iu,displacementmap_vertex:ru,emissivemap_fragment:su,emissivemap_pars_fragment:au,colorspace_fragment:ou,colorspace_pars_fragment:lu,envmap_fragment:cu,envmap_common_pars_fragment:uu,envmap_pars_fragment:hu,envmap_pars_vertex:fu,envmap_physical_pars_fragment:Eu,envmap_vertex:du,fog_vertex:pu,fog_pars_vertex:mu,fog_fragment:vu,fog_pars_fragment:gu,gradientmap_pars_fragment:_u,lightmap_pars_fragment:xu,lights_lambert_fragment:yu,lights_lambert_pars_fragment:Mu,lights_pars_begin:Su,lights_toon_fragment:wu,lights_toon_pars_fragment:Tu,lights_phong_fragment:Au,lights_phong_pars_fragment:bu,lights_physical_fragment:Ru,lights_physical_pars_fragment:Cu,lights_fragment_begin:Pu,lights_fragment_maps:Lu,lights_fragment_end:Iu,logdepthbuf_fragment:Du,logdepthbuf_pars_fragment:Uu,logdepthbuf_pars_vertex:Nu,logdepthbuf_vertex:Fu,map_fragment:Bu,map_pars_fragment:Ou,map_particle_fragment:zu,map_particle_pars_fragment:Vu,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:Gu,morphinstance_vertex:ku,morphcolor_vertex:Wu,morphnormal_vertex:Xu,morphtarget_pars_vertex:qu,morphtarget_vertex:Yu,normal_fragment_begin:Zu,normal_fragment_maps:Ku,normal_pars_fragment:$u,normal_pars_vertex:ju,normal_vertex:Qu,normalmap_pars_fragment:Ju,clearcoat_normal_fragment_begin:th,clearcoat_normal_fragment_maps:eh,clearcoat_pars_fragment:nh,iridescence_pars_fragment:ih,opaque_fragment:rh,packing:sh,premultiplied_alpha_fragment:ah,project_vertex:oh,dithering_fragment:lh,dithering_pars_fragment:ch,roughnessmap_fragment:uh,roughnessmap_pars_fragment:hh,shadowmap_pars_fragment:fh,shadowmap_pars_vertex:dh,shadowmap_vertex:ph,shadowmask_pars_fragment:mh,skinbase_vertex:vh,skinning_pars_vertex:gh,skinning_vertex:_h,skinnormal_vertex:xh,specularmap_fragment:yh,specularmap_pars_fragment:Mh,tonemapping_fragment:Sh,tonemapping_pars_fragment:Eh,transmission_fragment:wh,transmission_pars_fragment:Th,uv_pars_fragment:Ah,uv_pars_vertex:bh,uv_vertex:Rh,worldpos_vertex:Ch,background_vert:Ph,background_frag:Lh,backgroundCube_vert:Ih,backgroundCube_frag:Dh,cube_vert:Uh,cube_frag:Nh,depth_vert:Fh,depth_frag:Bh,distanceRGBA_vert:Oh,distanceRGBA_frag:zh,equirect_vert:Vh,equirect_frag:Hh,linedashed_vert:Gh,linedashed_frag:kh,meshbasic_vert:Wh,meshbasic_frag:Xh,meshlambert_vert:qh,meshlambert_frag:Yh,meshmatcap_vert:Zh,meshmatcap_frag:Kh,meshnormal_vert:$h,meshnormal_frag:jh,meshphong_vert:Qh,meshphong_frag:Jh,meshphysical_vert:tf,meshphysical_frag:ef,meshtoon_vert:nf,meshtoon_frag:rf,points_vert:sf,points_frag:af,shadow_vert:of,shadow_frag:lf,sprite_vert:cf,sprite_frag:uf},Gt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},an={basic:{uniforms:ze([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:ze([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:ze([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:ze([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:ze([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new _e(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:ze([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:ze([Gt.points,Gt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:ze([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:ze([Gt.common,Gt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:ze([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:ze([Gt.sprite,Gt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:ze([Gt.common,Gt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:ze([Gt.lights,Gt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};an.physical={uniforms:ze([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const or={r:0,b:0,g:0},Vn=new un,hf=new Ce;function ff(i,t,e,n,a,r,s){const o=new _e(0);let c=r===!0?0:1,f,u,l=null,h=0,p=null;function v(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1;const A=v(M);A===null?d(o,c):A&&A.isColor&&(d(A,1),_=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const A=v(_);A&&(A.isCubeTexture||A.mapping===xr)?(u===void 0&&(u=new Qe(new Vi(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Si(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Vn.copy(_.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hf.makeRotationFromEuler(Vn)),u.material.toneMapped=Me.getTransfer(A.colorSpace)!==Ae,(l!==A||h!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=A,h=A.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new Qe(new Hi(2,2),new Dn({name:"BackgroundMaterial",uniforms:Si(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=Me.getTransfer(A.colorSpace)!==Ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(l!==A||h!==A.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,l=A,h=A.version,p=i.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null))}function d(M,_){M.getRGB(or,To(i)),n.buffers.color.setClear(or.r,or.g,or.b,_,s)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),f!==void 0&&(f.geometry.dispose(),f.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(o,c)},render:g,addToRenderList:m,dispose:x}}function df(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=h(null);let r=a,s=!1;function o(y,T,B,N,X){let q=!1;const J=l(N,B,T);r!==J&&(r=J,f(r.object)),q=p(y,N,B,X),q&&v(y,N,B,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,_(y,T,B,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function f(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function l(y,T,B){const N=B.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let q=X[T.id];q===void 0&&(q={},X[T.id]=q);let J=q[N];return J===void 0&&(J=h(c()),q[N]=J),J}function h(y){const T=[],B=[],N=[];for(let X=0;X<e;X++)T[X]=0,B[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:B,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,T,B,N){const X=r.attributes,q=T.attributes;let J=0;const O=B.getAttributes();for(const I in O)if(O[I].location>=0){const $=X[I];let F=q[I];if(F===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),$===void 0||$.attribute!==F||F&&$.data!==F.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function v(y,T,B,N){const X={},q=T.attributes;let J=0;const O=B.getAttributes();for(const I in O)if(O[I].location>=0){let $=q[I];$===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const F={};F.attribute=$,$&&$.data&&(F.data=$.data),X[I]=F,J++}r.attributes=X,r.attributesNum=J,r.index=N}function g(){const y=r.newAttributes;for(let T=0,B=y.length;T<B;T++)y[T]=0}function m(y){d(y,0)}function d(y,T){const B=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;B[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),X[y]!==T&&(i.vertexAttribDivisor(y,T),X[y]=T)}function x(){const y=r.newAttributes,T=r.enabledAttributes;for(let B=0,N=T.length;B<N;B++)T[B]!==y[B]&&(i.disableVertexAttribArray(B),T[B]=0)}function M(y,T,B,N,X,q,J){J===!0?i.vertexAttribIPointer(y,T,B,X,q):i.vertexAttribPointer(y,T,B,N,X,q)}function _(y,T,B,N){g();const X=N.attributes,q=B.getAttributes(),J=T.defaultAttributeValues;for(const O in q){const I=q[O];if(I.location>=0){let Q=X[O];if(Q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const $=Q.normalized,F=Q.itemSize,j=t.get(Q);if(j===void 0)continue;const z=j.buffer,b=j.type,R=j.bytesPerElement,H=b===i.INT||b===i.UNSIGNED_INT||Q.gpuType===Ws;if(Q.isInterleavedBufferAttribute){const K=Q.data,et=K.stride,k=Q.offset;if(K.isInstancedInterleavedBuffer){for(let it=0;it<I.locationSize;it++)d(I.location+it,K.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let it=0;it<I.locationSize;it++)m(I.location+it);i.bindBuffer(i.ARRAY_BUFFER,z);for(let it=0;it<I.locationSize;it++)M(I.location+it,F/I.locationSize,b,$,et*R,(k+F/I.locationSize*it)*R,H)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<I.locationSize;K++)d(I.location+K,Q.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<I.locationSize;K++)m(I.location+K);i.bindBuffer(i.ARRAY_BUFFER,z);for(let K=0;K<I.locationSize;K++)M(I.location+K,F/I.locationSize,b,$,F*R,F/I.locationSize*K*R,H)}}else if(J!==void 0){const $=J[O];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(I.location,$);break;case 3:i.vertexAttrib3fv(I.location,$);break;case 4:i.vertexAttrib4fv(I.location,$);break;default:i.vertexAttrib1fv(I.location,$)}}}}x()}function A(){L();for(const y in n){const T=n[y];for(const B in T){const N=T[B];for(const X in N)u(N[X].object),delete N[X];delete T[B]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const T=n[y.id];for(const B in T){const N=T[B];for(const X in N)u(N[X].object),delete N[X];delete T[B]}delete n[y.id]}function U(y){for(const T in n){const B=n[T];if(B[y.id]===void 0)continue;const N=B[y.id];for(const X in N)u(N[X].object),delete N[X];delete B[y.id]}}function L(){E(),s=!0,r!==a&&(r=a,f(r.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function pf(i,t,e){let n;function a(f){n=f}function r(f,u){i.drawArrays(n,f,u),e.update(u,n,1)}function s(f,u,l){l!==0&&(i.drawArraysInstanced(n,f,u,l),e.update(u,n,l))}function o(f,u,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,u,0,l);let p=0;for(let v=0;v<l;v++)p+=u[v];e.update(p,n,1)}function c(f,u,l,h){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<f.length;v++)s(f[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(n,f,0,u,0,h,0,l);let v=0;for(let g=0;g<l;g++)v+=u[g]*h[g];e.update(v,n,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function mf(i,t,e,n){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(U){return!(U!==rn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const L=U===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Mn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==_n&&!L)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const u=c(f);u!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",u,"instead."),f=u);const l=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:l,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:P}}function vf(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new Gn,o=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const p=l.length!==0||h||n!==0||a;return a=h,n=l.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,h){e=u(l,h,0)},this.setState=function(l,h,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,d=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?u(null):f();else{const x=r?0:n,M=x*4;let _=d.clippingState||null;c.value=_,_=u(v,h,M,p);for(let A=0;A!==M;++A)_[A]=e[A];d.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function f(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(l,h,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const d=p+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,_=p;M!==g;++M,_+=4)s.copy(l[M]).applyMatrix4(x,o),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function gf(i){let t=new WeakMap;function e(s,o){return o===us?s.mapping=gi:o===hs&&(s.mapping=_i),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===us||o===hs)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const f=new pc(c.height);return f.fromEquirectangularTexture(i,s),t.set(s,f),s.addEventListener("dispose",a),e(f.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const fi=4,La=[.125,.215,.35,.446,.526,.582],Xn=20,Yr=new Co,Ia=new _e;let Zr=null,Kr=0,$r=0,jr=!1;const kn=(1+Math.sqrt(5))/2,ci=1/kn,Da=[new at(-kn,ci,0),new at(kn,ci,0),new at(-ci,0,kn),new at(ci,0,kn),new at(0,kn,-ci),new at(0,kn,ci),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Zr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Kr,$r),this._renderer.xr.enabled=jr,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Fi,format:rn,colorSpace:Mi,depthBuffer:!1},a=Na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(r)),this._blurMaterial=xf(r,t,e)}return a}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,Yr)}_sceneToCubeUV(t,e,n,a){const o=new je(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,h=u.toneMapping;u.getClearColor(Ia),u.toneMapping=Ln,u.autoClear=!1;const p=new So({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),v=new Qe(new Vi,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ia),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,c[d],0),o.lookAt(f[d],0,0)):x===1?(o.up.set(0,0,c[d]),o.lookAt(0,f[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,f[d]));const M=this._cubeSize;lr(a,x*M,d>2?M:0,M,M),u.setRenderTarget(a),g&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===gi||t.mapping===_i;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,Yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Da[(a-r-1)%Da.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,f=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new Qe(this._lodPlanes[a],f),h=f.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const d=[];let x=0;for(let U=0;U<Xn;++U){const L=U/g,E=Math.exp(-L*L/2);d.push(E),U===0?x+=E:U<m&&(x+=2*E)}for(let U=0;U<d.length;U++)d[U]=d[U]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-n;const _=this._sizeLods[a],A=3*_*(a>M-fi?a-M+fi:0),P=4*(this._cubeSize-_);lr(e,A,P,3*_,2*_),c.setRenderTarget(e),c.render(l,Yr)}}function _f(i){const t=[],e=[],n=[];let a=i;const r=i-fi+1+La.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-fi?c=La[s-i+fi-1]:s===0&&(c=0),n.push(c);const f=1/(o-2),u=-f,l=1+f,h=[u,u,l,u,l,l,u,u,l,l,u,l],p=6,v=6,g=3,m=2,d=1,x=new Float32Array(g*v*p),M=new Float32Array(m*v*p),_=new Float32Array(d*v*p);for(let P=0;P<p;P++){const U=P%3*2/3-1,L=P>2?0:-1,E=[U,L,0,U+2/3,L,0,U+2/3,L+1,0,U,L,0,U+2/3,L+1,0,U,L+1,0];x.set(E,g*v*P),M.set(h,m*v*P);const y=[P,P,P,P,P,P];_.set(y,d*v*P)}const A=new Un;A.setAttribute("position",new ln(x,g)),A.setAttribute("uv",new ln(M,m)),A.setAttribute("faceIndex",new ln(_,d)),t.push(A),a>fi&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Na(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function xf(i,t,e){const n=new Float32Array(Xn),a=new at(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fa(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ba(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function yf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,f=c===us||c===hs,u=c===gi||c===_i;if(f||u){let l=t.get(o);const h=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Ua(i)),l=f?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const p=o.image;return f&&p&&p.height>0||u&&p&&a(p)?(e===null&&(e=new Ua(i)),l=f?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function a(o){let c=0;const f=6;for(let u=0;u<f;u++)o[u]!==void 0&&c++;return c===f}function r(o){const c=o.target;c.removeEventListener("dispose",r);const f=t.get(c);f!==void 0&&(t.delete(c),f.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Mf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const a=e(n);return a===null&&hi("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Sf(i,t,e,n){const a={},r=new WeakMap;function s(l){const h=l.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(l,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,e.memory.geometries++),h}function c(l){const h=l.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function f(l){const h=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let M=0,_=x.length;M<_;M+=3){const A=x[M+0],P=x[M+1],U=x[M+2];h.push(A,P,P,U,U,A)}}else if(v!==void 0){const x=v.array;g=v.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const A=M+0,P=M+1,U=M+2;h.push(A,P,P,U,U,A)}}else return;const m=new(go(h)?wo:Eo)(h,1);m.version=g;const d=r.get(l);d&&t.remove(d),r.set(l,m)}function u(l){const h=r.get(l);if(h){const p=l.index;p!==null&&h.version<p.version&&f(l)}else f(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function Ef(i,t,e){let n;function a(h){n=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function c(h,p){i.drawElements(n,p,r,h*s),e.update(p,n,1)}function f(h,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,h*s,v),e.update(p,n,v))}function u(h,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];e.update(m,n,1)}function l(h,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)f(h[d]/s,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,g,0,v);let d=0;for(let x=0;x<v;x++)d+=p[x]*g[x];e.update(d,n,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function wf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function Tf(i,t,e){const n=new WeakMap,a=new Re;function r(s,o,c){const f=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==l){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let A=o.attributes.position.count*_,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const U=new Float32Array(A*P*4*l),L=new xo(U,A,P,l);L.type=_n,L.needsUpdate=!0;const E=_*4;for(let T=0;T<l;T++){const B=d[T],N=x[T],X=M[T],q=A*P*4*T;for(let J=0;J<B.count;J++){const O=J*E;v===!0&&(a.fromBufferAttribute(B,J),U[q+O+0]=a.x,U[q+O+1]=a.y,U[q+O+2]=a.z,U[q+O+3]=0),g===!0&&(a.fromBufferAttribute(N,J),U[q+O+4]=a.x,U[q+O+5]=a.y,U[q+O+6]=a.z,U[q+O+7]=0),m===!0&&(a.fromBufferAttribute(X,J),U[q+O+8]=a.x,U[q+O+9]=a.y,U[q+O+10]=a.z,U[q+O+11]=X.itemSize===4?a.w:1)}}h={count:l,texture:L,size:new we(A,P)},n.set(o,h),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let v=0;for(let m=0;m<f.length;m++)v+=f[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",f)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Af(i,t,e,n){let a=new WeakMap;function r(c){const f=n.render.frame,u=c.geometry,l=t.get(c,u);if(a.get(l)!==f&&(t.update(l),a.set(l,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;a.get(h)!==f&&(h.update(),a.set(h,f))}return l}function s(){a=new WeakMap}function o(c){const f=c.target;f.removeEventListener("dispose",o),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:r,dispose:s}}const Lo=new Ve,Oa=new Ro(1,1),Io=new xo,Do=new jl,Uo=new bo,za=[],Va=[],Ha=new Float32Array(16),Ga=new Float32Array(9),ka=new Float32Array(4);function Ti(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=za[a];if(r===void 0&&(r=new Float32Array(a),za[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=Va[t];e===void 0&&(e=new Int32Array(t),Va[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Lf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;ka.set(n),i.uniformMatrix2fv(this.addr,!1,ka),De(e,n)}}function If(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Ga.set(n),i.uniformMatrix3fv(this.addr,!1,Ga),De(e,n)}}function Df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Ha.set(n),i.uniformMatrix4fv(this.addr,!1,Ha),De(e,n)}}function Uf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Of(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Gf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(Oa.compareFunction=vo,r=Oa):r=Lo,e.setTexture2D(t||r,a)}function kf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Do,a)}function Wf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||Uo,a)}function Xf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Io,a)}function qf(i){switch(i){case 5126:return bf;case 35664:return Rf;case 35665:return Cf;case 35666:return Pf;case 35674:return Lf;case 35675:return If;case 35676:return Df;case 5124:case 35670:return Uf;case 35667:case 35671:return Nf;case 35668:case 35672:return Ff;case 35669:case 35673:return Bf;case 5125:return Of;case 36294:return zf;case 36295:return Vf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}function Yf(i,t){i.uniform1fv(this.addr,t)}function Zf(i,t){const e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function Kf(i,t){const e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function $f(i,t){const e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function jf(i,t){const e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qf(i,t){const e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jf(i,t){const e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function td(i,t){i.uniform1iv(this.addr,t)}function ed(i,t){i.uniform2iv(this.addr,t)}function nd(i,t){i.uniform3iv(this.addr,t)}function id(i,t){i.uniform4iv(this.addr,t)}function rd(i,t){i.uniform1uiv(this.addr,t)}function sd(i,t){i.uniform2uiv(this.addr,t)}function ad(i,t){i.uniform3uiv(this.addr,t)}function od(i,t){i.uniform4uiv(this.addr,t)}function ld(i,t,e){const n=this.cache,a=t.length,r=yr(e,a);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||Lo,r[s])}function cd(i,t,e){const n=this.cache,a=t.length,r=yr(e,a);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||Do,r[s])}function ud(i,t,e){const n=this.cache,a=t.length,r=yr(e,a);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||Uo,r[s])}function hd(i,t,e){const n=this.cache,a=t.length,r=yr(e,a);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||Io,r[s])}function fd(i){switch(i){case 5126:return Yf;case 35664:return Zf;case 35665:return Kf;case 35666:return $f;case 35674:return jf;case 35675:return Qf;case 35676:return Jf;case 5124:case 35670:return td;case 35667:case 35671:return ed;case 35668:case 35672:return nd;case 35669:case 35673:return id;case 5125:return rd;case 36294:return sd;case 36295:return ad;case 36296:return od;case 35678:case 36198:case 36298:case 36306:case 35682:return ld;case 35679:case 36299:case 36307:return cd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return hd}}class dd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qf(e.type)}}class pd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fd(e.type)}}class md{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function Wa(i,t){i.seq.push(t),i.map[t.id]=t}function vd(i,t,e){const n=i.name,a=n.length;for(Qr.lastIndex=0;;){const r=Qr.exec(n),s=Qr.lastIndex;let o=r[1];const c=r[2]==="]",f=r[3];if(c&&(o=o|0),f===void 0||f==="["&&s+2===a){Wa(e,f===void 0?new dd(o,i,t):new pd(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new md(o),Wa(e,l)),e=l}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);vd(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function Xa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gd=37297;let _d=0;function xd(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}const qa=new he;function yd(i){Me._getMatrix(qa,Me.workingColorSpace,i);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ya(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+xd(i.getShaderSource(t),s)}else return a}function Md(i,t){const e=yd(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sd(i,t){let e;switch(t){case ol:e="Linear";break;case ll:e="Reinhard";break;case cl:e="Cineon";break;case ul:e="ACESFilmic";break;case fl:e="AgX";break;case dl:e="Neutral";break;case hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new at;function Ed(){Me.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function Td(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ad(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Pi(i){return i!==""}function Za(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ka(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(i){return i.replace(bd,Cd)}const Rd=new Map;function Cd(i,t){let e=pe[t];if(e===void 0){const n=Rd.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hs(e)}const Pd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(i){return i.replace(Pd,Ld)}function Ld(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function ja(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Id(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===no?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ud(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Nd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ks:t="ENVMAP_BLENDING_MULTIPLY";break;case sl:t="ENVMAP_BLENDING_MIX";break;case al:t="ENVMAP_BLENDING_ADD";break}return t}function Fd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bd(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=Id(e),f=Dd(e),u=Ud(e),l=Nd(e),h=Fd(e),p=wd(e),v=Td(r),g=a.createProgram();let m,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Pi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Pi).join(`
`),d.length>0&&(d+=`
`)):(m=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),d=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?pe.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Sd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Md("linearToOutputTexel",e.outputColorSpace),Ed(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),s=Hs(s),s=Za(s,e),s=Ka(s,e),o=Hs(o),o=Za(o,e),o=Ka(o,e),s=$a(s),o=$a(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+m+s,_=x+d+o,A=Xa(a,a.VERTEX_SHADER,M),P=Xa(a,a.FRAGMENT_SHADER,_);a.attachShader(g,A),a.attachShader(g,P),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function U(T){if(i.debug.checkShaderErrors){const B=a.getProgramInfoLog(g).trim(),N=a.getShaderInfoLog(A).trim(),X=a.getShaderInfoLog(P).trim();let q=!0,J=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,A,P);else{const O=Ya(a,A,"vertex"),I=Ya(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+O+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||X==="")&&(J=!1);J&&(T.diagnostics={runnable:q,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:d}})}a.deleteShader(A),a.deleteShader(P),L=new vr(a,g),E=Ad(a,g)}let L;this.getUniforms=function(){return L===void 0&&U(this),L};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(g,gd)),y},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_d++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=P,this}let Od=0;class zd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vd(t),e.set(t,n)),n}}class Vd{constructor(t){this.id=Od++,this.code=t,this.usedTimes=0}}function Hd(i,t,e,n,a,r,s){const o=new yo,c=new zd,f=new Set,u=[],l=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return f.add(E),E===0?"uv":`uv${E}`}function m(E,y,T,B,N){const X=B.fog,q=N.geometry,J=E.isMeshStandardMaterial?B.environment:null,O=(E.isMeshStandardMaterial?e:t).get(E.envMap||J),I=O&&O.mapping===xr?O.image.height:null,Q=v[E.type];E.precision!==null&&(p=a.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,F=$!==void 0?$.length:0;let j=0;q.morphAttributes.position!==void 0&&(j=1),q.morphAttributes.normal!==void 0&&(j=2),q.morphAttributes.color!==void 0&&(j=3);let z,b,R,H;if(Q){const ae=an[Q];z=ae.vertexShader,b=ae.fragmentShader}else z=E.vertexShader,b=E.fragmentShader,c.update(E),R=c.getVertexShaderID(E),H=c.getFragmentShaderID(E);const K=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),k=N.isInstancedMesh===!0,it=N.isBatchedMesh===!0,mt=!!E.map,St=!!E.matcap,Et=!!O,D=!!E.aoMap,dt=!!E.lightMap,ht=!!E.bumpMap,Xt=!!E.normalMap,xt=!!E.displacementMap,ne=!!E.emissiveMap,vt=!!E.metalnessMap,C=!!E.roughnessMap,S=E.anisotropy>0,Y=E.clearcoat>0,ct=E.dispersion>0,ut=E.iridescence>0,ot=E.sheen>0,wt=E.transmission>0,Tt=S&&!!E.anisotropyMap,Ft=Y&&!!E.clearcoatMap,le=Y&&!!E.clearcoatNormalMap,Mt=Y&&!!E.clearcoatRoughnessMap,kt=ut&&!!E.iridescenceMap,Zt=ut&&!!E.iridescenceThicknessMap,$t=ot&&!!E.sheenColorMap,Wt=ot&&!!E.sheenRoughnessMap,ce=!!E.specularMap,ie=!!E.specularColorMap,me=!!E.specularIntensityMap,W=wt&&!!E.transmissionMap,Lt=wt&&!!E.thicknessMap,lt=!!E.gradientMap,pt=!!E.alphaMap,Vt=E.alphaTest>0,Ot=!!E.alphaHash,re=!!E.extensions;let Te=Ln;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Te=i.toneMapping);const be={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:b,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:it,batchingColor:it&&N._colorsTexture!==null,instancing:k,instancingColor:k&&N.instanceColor!==null,instancingMorph:k&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Mi,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:St,envMap:Et,envMapMode:Et&&O.mapping,envMapCubeUVHeight:I,aoMap:D,lightMap:dt,bumpMap:ht,normalMap:Xt,displacementMap:h&&xt,emissiveMap:ne,normalMapObjectSpace:Xt&&E.normalMapType===gl,normalMapTangentSpace:Xt&&E.normalMapType===mo,metalnessMap:vt,roughnessMap:C,anisotropy:S,anisotropyMap:Tt,clearcoat:Y,clearcoatMap:Ft,clearcoatNormalMap:le,clearcoatRoughnessMap:Mt,dispersion:ct,iridescence:ut,iridescenceMap:kt,iridescenceThicknessMap:Zt,sheen:ot,sheenColorMap:$t,sheenRoughnessMap:Wt,specularMap:ce,specularColorMap:ie,specularIntensityMap:me,transmission:wt,transmissionMap:W,thicknessMap:Lt,gradientMap:lt,opaque:E.transparent===!1&&E.blending===di&&E.alphaToCoverage===!1,alphaMap:pt,alphaTest:Vt,alphaHash:Ot,combine:E.combine,mapUv:mt&&g(E.map.channel),aoMapUv:D&&g(E.aoMap.channel),lightMapUv:dt&&g(E.lightMap.channel),bumpMapUv:ht&&g(E.bumpMap.channel),normalMapUv:Xt&&g(E.normalMap.channel),displacementMapUv:xt&&g(E.displacementMap.channel),emissiveMapUv:ne&&g(E.emissiveMap.channel),metalnessMapUv:vt&&g(E.metalnessMap.channel),roughnessMapUv:C&&g(E.roughnessMap.channel),anisotropyMapUv:Tt&&g(E.anisotropyMap.channel),clearcoatMapUv:Ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&g(E.sheenRoughnessMap.channel),specularMapUv:ce&&g(E.specularMap.channel),specularColorMapUv:ie&&g(E.specularColorMap.channel),specularIntensityMapUv:me&&g(E.specularIntensityMap.channel),transmissionMapUv:W&&g(E.transmissionMap.channel),thicknessMapUv:Lt&&g(E.thicknessMap.channel),alphaMapUv:pt&&g(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(mt||pt),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:et,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Me.getTransfer(E.map.colorSpace)===Ae,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Me.getTransfer(E.emissiveMap.colorSpace)===Ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===We,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&E.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return be.vertexUv1s=f.has(1),be.vertexUv2s=f.has(2),be.vertexUv3s=f.has(3),f.clear(),be}function d(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)y.push(T),y.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(x(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const y=v[E.type];let T;if(y){const B=an[y];T=uc.clone(B.uniforms)}else T=E.uniforms;return T}function A(E,y){let T;for(let B=0,N=u.length;B<N;B++){const X=u[B];if(X.cacheKey===y){T=X,++T.usedTimes;break}}return T===void 0&&(T=new Bd(i,y,E,r),u.push(T)),T}function P(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function U(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:A,releaseProgram:P,releaseShaderCache:U,programs:u,dispose:L}}function Gd(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:a,dispose:r}}function kd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ja(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,h,p,v,g,m){let d=i[t];return d===void 0?(d={id:l.id,object:l,geometry:h,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=d):(d.id=l.id,d.object=l,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=l.renderOrder,d.z=g,d.group=m),t++,d}function o(l,h,p,v,g,m){const d=s(l,h,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?a.push(d):e.push(d)}function c(l,h,p,v,g,m){const d=s(l,h,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?a.unshift(d):e.unshift(d)}function f(l,h){e.length>1&&e.sort(l||kd),n.length>1&&n.sort(h||Qa),a.length>1&&a.sort(h||Qa)}function u(){for(let l=t,h=i.length;l<h;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:u,sort:f}}function Wd(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Ja,i.set(n,[s])):a>=r.length?(s=new Ja,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new at,color:new _e};break;case"SpotLight":e={position:new at,direction:new at,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new at,color:new _e,distance:0,decay:0};break;case"HemisphereLight":e={direction:new at,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":e={color:new _e,position:new at,halfWidth:new at,halfHeight:new at};break}return i[t.id]=e,e}}}function qd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yd=0;function Zd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kd(i){const t=new Xd,e=qd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new at);const a=new at,r=new Ce,s=new Ce;function o(f){let u=0,l=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,v=0,g=0,m=0,d=0,x=0,M=0,_=0,A=0,P=0,U=0;f.sort(Zd);for(let E=0,y=f.length;E<y;E++){const T=f[E],B=T.color,N=T.intensity,X=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=B.r*N,l+=B.g*N,h+=B.b*N;else if(T.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(T.sh.coefficients[J],N);U++}else if(T.isDirectionalLight){const J=t.get(T);if(J.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const O=T.shadow,I=e.get(T);I.shadowIntensity=O.intensity,I.shadowBias=O.bias,I.shadowNormalBias=O.normalBias,I.shadowRadius=O.radius,I.shadowMapSize=O.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=T.shadow.matrix,x++}n.directional[p]=J,p++}else if(T.isSpotLight){const J=t.get(T);J.position.setFromMatrixPosition(T.matrixWorld),J.color.copy(B).multiplyScalar(N),J.distance=X,J.coneCos=Math.cos(T.angle),J.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),J.decay=T.decay,n.spot[g]=J;const O=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,O.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[g]=O.matrix,T.castShadow){const I=e.get(T);I.shadowIntensity=O.intensity,I.shadowBias=O.bias,I.shadowNormalBias=O.normalBias,I.shadowRadius=O.radius,I.shadowMapSize=O.mapSize,n.spotShadow[g]=I,n.spotShadowMap[g]=q,_++}g++}else if(T.isRectAreaLight){const J=t.get(T);J.color.copy(B).multiplyScalar(N),J.halfWidth.set(T.width*.5,0,0),J.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=J,m++}else if(T.isPointLight){const J=t.get(T);if(J.color.copy(T.color).multiplyScalar(T.intensity),J.distance=T.distance,J.decay=T.decay,T.castShadow){const O=T.shadow,I=e.get(T);I.shadowIntensity=O.intensity,I.shadowBias=O.bias,I.shadowNormalBias=O.normalBias,I.shadowRadius=O.radius,I.shadowMapSize=O.mapSize,I.shadowCameraNear=O.camera.near,I.shadowCameraFar=O.camera.far,n.pointShadow[v]=I,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=T.shadow.matrix,M++}n.point[v]=J,v++}else if(T.isHemisphereLight){const J=t.get(T);J.skyColor.copy(T.color).multiplyScalar(N),J.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[d]=J,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==A||L.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-P,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=A,L.numLightProbes=U,n.version=Yd++)}function c(f,u){let l=0,h=0,p=0,v=0,g=0;const m=u.matrixWorldInverse;for(let d=0,x=f.length;d<x;d++){const M=f[d];if(M.isDirectionalLight){const _=n.directional[l];_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),l++}else if(M.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),s.identity(),r.copy(M.matrixWorld),r.premultiply(m),s.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),v++}else if(M.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function to(i){const t=new Kd(i),e=[],n=[];function a(u){f.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function s(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function $d(i){let t=new WeakMap;function e(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new to(i),t.set(a,[o])):r>=s.length?(o=new to(i),s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const jd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qd=`uniform sampler2D shadow_pass;
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
}`;function Jd(i,t,e){let n=new Qs;const a=new we,r=new we,s=new Re,o=new _c({depthPacking:vl}),c=new xc,f={},u=e.maxTextureSize,l={[In]:We,[We]:In,[gn]:gn},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:jd,fragmentShader:Qd}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Qe(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let d=this.type;this.render=function(P,U,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=d!==vn&&this.type===vn,X=d===vn&&this.type!==vn;for(let q=0,J=P.length;q<J;q++){const O=P[q],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const Q=I.getFrameExtents();if(a.multiply(Q),r.copy(I.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/Q.x),a.x=r.x*Q.x,I.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/Q.y),a.y=r.y*Q.y,I.mapSize.y=r.y)),I.map===null||N===!0||X===!0){const F=this.type!==vn?{minFilter:sn,magFilter:sn}:{};I.map!==null&&I.map.dispose(),I.map=new Kn(a.x,a.y,F),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const $=I.getViewportCount();for(let F=0;F<$;F++){const j=I.getViewport(F);s.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),B.viewport(s),I.updateMatrices(O,F),n=I.getFrustum(),_(U,L,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===vn&&x(I,L),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,T)};function x(P,U){const L=t.update(g);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Kn(a.x,a.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(U,null,L,h,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(U,null,L,p,g,null)}function M(P,U,L,E){let y=null;const T=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)y=T;else if(y=L.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const B=y.uuid,N=U.uuid;let X=f[B];X===void 0&&(X={},f[B]=X);let q=X[N];q===void 0&&(q=y.clone(),X[N]=q,U.addEventListener("dispose",A)),y=q}if(y.visible=U.visible,y.wireframe=U.wireframe,E===vn?y.side=U.shadowSide!==null?U.shadowSide:U.side:y.side=U.shadowSide!==null?U.shadowSide:l[U.side],y.alphaMap=U.alphaMap,y.alphaTest=U.alphaTest,y.map=U.map,y.clipShadows=U.clipShadows,y.clippingPlanes=U.clippingPlanes,y.clipIntersection=U.clipIntersection,y.displacementMap=U.displacementMap,y.displacementScale=U.displacementScale,y.displacementBias=U.displacementBias,y.wireframeLinewidth=U.wireframeLinewidth,y.linewidth=U.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=L}return y}function _(P,U,L,E,y){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===vn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const N=t.update(P),X=P.material;if(Array.isArray(X)){const q=N.groups;for(let J=0,O=q.length;J<O;J++){const I=q[J],Q=X[I.materialIndex];if(Q&&Q.visible){const $=M(P,Q,E,y);P.onBeforeShadow(i,P,U,L,N,$,I),i.renderBufferDirect(L,null,N,$,P,I),P.onAfterShadow(i,P,U,L,N,$,I)}}}else if(X.visible){const q=M(P,X,E,y);P.onBeforeShadow(i,P,U,L,N,q,null),i.renderBufferDirect(L,null,N,q,P,null),P.onAfterShadow(i,P,U,L,N,q,null)}}const B=P.children;for(let N=0,X=B.length;N<X;N++)_(B[N],U,L,E,y)}function A(P){P.target.removeEventListener("dispose",A);for(const L in f){const E=f[L],y=P.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const tp={[is]:rs,[ss]:ls,[as]:cs,[vi]:os,[rs]:is,[ls]:ss,[cs]:as,[os]:vi};function ep(i,t){function e(){let W=!1;const Lt=new Re;let lt=null;const pt=new Re(0,0,0,0);return{setMask:function(Vt){lt!==Vt&&!W&&(i.colorMask(Vt,Vt,Vt,Vt),lt=Vt)},setLocked:function(Vt){W=Vt},setClear:function(Vt,Ot,re,Te,be){be===!0&&(Vt*=Te,Ot*=Te,re*=Te),Lt.set(Vt,Ot,re,Te),pt.equals(Lt)===!1&&(i.clearColor(Vt,Ot,re,Te),pt.copy(Lt))},reset:function(){W=!1,lt=null,pt.set(-1,0,0,0)}}}function n(){let W=!1,Lt=!1,lt=null,pt=null,Vt=null;return{setReversed:function(Ot){if(Lt!==Ot){const re=t.get("EXT_clip_control");Lt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Te=Vt;Vt=null,this.setClear(Te)}Lt=Ot},getReversed:function(){return Lt},setTest:function(Ot){Ot?K(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!W&&(i.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(Lt&&(Ot=tp[Ot]),pt!==Ot){switch(Ot){case is:i.depthFunc(i.NEVER);break;case rs:i.depthFunc(i.ALWAYS);break;case ss:i.depthFunc(i.LESS);break;case vi:i.depthFunc(i.LEQUAL);break;case as:i.depthFunc(i.EQUAL);break;case os:i.depthFunc(i.GEQUAL);break;case ls:i.depthFunc(i.GREATER);break;case cs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Ot}},setLocked:function(Ot){W=Ot},setClear:function(Ot){Vt!==Ot&&(Lt&&(Ot=1-Ot),i.clearDepth(Ot),Vt=Ot)},reset:function(){W=!1,lt=null,pt=null,Vt=null,Lt=!1}}}function a(){let W=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,Te=null,be=null;return{setTest:function(ae){W||(ae?K(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(ae){Lt!==ae&&!W&&(i.stencilMask(ae),Lt=ae)},setFunc:function(ae,st,ft){(lt!==ae||pt!==st||Vt!==ft)&&(i.stencilFunc(ae,st,ft),lt=ae,pt=st,Vt=ft)},setOp:function(ae,st,ft){(Ot!==ae||re!==st||Te!==ft)&&(i.stencilOp(ae,st,ft),Ot=ae,re=st,Te=ft)},setLocked:function(ae){W=ae},setClear:function(ae){be!==ae&&(i.clearStencil(ae),be=ae)},reset:function(){W=!1,Lt=null,lt=null,pt=null,Vt=null,Ot=null,re=null,Te=null,be=null}}}const r=new e,s=new n,o=new a,c=new WeakMap,f=new WeakMap;let u={},l={},h=new WeakMap,p=[],v=null,g=!1,m=null,d=null,x=null,M=null,_=null,A=null,P=null,U=new _e(0,0,0),L=0,E=!1,y=null,T=null,B=null,N=null,X=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,O=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(I)[1]),J=O>=1):I.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),J=O>=2);let Q=null,$={};const F=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),z=new Re().fromArray(F),b=new Re().fromArray(j);function R(W,Lt,lt,pt){const Vt=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(W,Ot),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<lt;re++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Lt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return Ot}const H={};H[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(i.DEPTH_TEST),s.setFunc(vi),ht(!1),Xt(na),K(i.CULL_FACE),D(Pn);function K(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function et(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function k(W,Lt){return l[W]!==Lt?(i.bindFramebuffer(W,Lt),l[W]=Lt,W===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Lt),W===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function it(W,Lt){let lt=p,pt=!1;if(W){lt=h.get(Lt),lt===void 0&&(lt=[],h.set(Lt,lt));const Vt=W.textures;if(lt.length!==Vt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,re=Vt.length;Ot<re;Ot++)lt[Ot]=i.COLOR_ATTACHMENT0+Ot;lt.length=Vt.length,pt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(lt)}function mt(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const St={[Wn]:i.FUNC_ADD,[Go]:i.FUNC_SUBTRACT,[ko]:i.FUNC_REVERSE_SUBTRACT};St[Wo]=i.MIN,St[Xo]=i.MAX;const Et={[qo]:i.ZERO,[Yo]:i.ONE,[Zo]:i.SRC_COLOR,[es]:i.SRC_ALPHA,[tl]:i.SRC_ALPHA_SATURATE,[Qo]:i.DST_COLOR,[$o]:i.DST_ALPHA,[Ko]:i.ONE_MINUS_SRC_COLOR,[ns]:i.ONE_MINUS_SRC_ALPHA,[Jo]:i.ONE_MINUS_DST_COLOR,[jo]:i.ONE_MINUS_DST_ALPHA,[el]:i.CONSTANT_COLOR,[nl]:i.ONE_MINUS_CONSTANT_COLOR,[il]:i.CONSTANT_ALPHA,[rl]:i.ONE_MINUS_CONSTANT_ALPHA};function D(W,Lt,lt,pt,Vt,Ot,re,Te,be,ae){if(W===Pn){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),W!==Ho){if(W!==m||ae!==E){if((d!==Wn||_!==Wn)&&(i.blendEquation(i.FUNC_ADD),d=Wn,_=Wn),ae)switch(W){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,M=null,A=null,P=null,U.set(0,0,0),L=0,m=W,E=ae}return}Vt=Vt||Lt,Ot=Ot||lt,re=re||pt,(Lt!==d||Vt!==_)&&(i.blendEquationSeparate(St[Lt],St[Vt]),d=Lt,_=Vt),(lt!==x||pt!==M||Ot!==A||re!==P)&&(i.blendFuncSeparate(Et[lt],Et[pt],Et[Ot],Et[re]),x=lt,M=pt,A=Ot,P=re),(Te.equals(U)===!1||be!==L)&&(i.blendColor(Te.r,Te.g,Te.b,be),U.copy(Te),L=be),m=W,E=!1}function dt(W,Lt){W.side===gn?et(i.CULL_FACE):K(i.CULL_FACE);let lt=W.side===We;Lt&&(lt=!lt),ht(lt),W.blending===di&&W.transparent===!1?D(Pn):D(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),r.setMask(W.colorWrite);const pt=W.stencilWrite;o.setTest(pt),pt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){y!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),y=W)}function Xt(W){W!==Oo?(K(i.CULL_FACE),W!==T&&(W===na?i.cullFace(i.BACK):W===zo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),T=W}function xt(W){W!==B&&(J&&i.lineWidth(W),B=W)}function ne(W,Lt,lt){W?(K(i.POLYGON_OFFSET_FILL),(N!==Lt||X!==lt)&&(i.polygonOffset(Lt,lt),N=Lt,X=lt)):et(i.POLYGON_OFFSET_FILL)}function vt(W){W?K(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function C(W){W===void 0&&(W=i.TEXTURE0+q-1),Q!==W&&(i.activeTexture(W),Q=W)}function S(W,Lt,lt){lt===void 0&&(Q===null?lt=i.TEXTURE0+q-1:lt=Q);let pt=$[lt];pt===void 0&&(pt={type:void 0,texture:void 0},$[lt]=pt),(pt.type!==W||pt.texture!==Lt)&&(Q!==lt&&(i.activeTexture(lt),Q=lt),i.bindTexture(W,Lt||H[W]),pt.type=W,pt.texture=Lt)}function Y(){const W=$[Q];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $t(W){z.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),z.copy(W))}function Wt(W){b.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),b.copy(W))}function ce(W,Lt){let lt=f.get(Lt);lt===void 0&&(lt=new WeakMap,f.set(Lt,lt));let pt=lt.get(W);pt===void 0&&(pt=i.getUniformBlockIndex(Lt,W.name),lt.set(W,pt))}function ie(W,Lt){const pt=f.get(Lt).get(W);c.get(Lt)!==pt&&(i.uniformBlockBinding(Lt,pt,W.__bindingPointIndex),c.set(Lt,pt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,$={},l={},h=new WeakMap,p=[],v=null,g=!1,m=null,d=null,x=null,M=null,_=null,A=null,P=null,U=new _e(0,0,0),L=0,E=!1,y=null,T=null,B=null,N=null,X=null,z.set(0,0,i.canvas.width,i.canvas.height),b.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:K,disable:et,bindFramebuffer:k,drawBuffers:it,useProgram:mt,setBlending:D,setMaterial:dt,setFlipSided:ht,setCullFace:Xt,setLineWidth:xt,setPolygonOffset:ne,setScissorTest:vt,activeTexture:C,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ct,compressedTexImage3D:ut,texImage2D:kt,texImage3D:Zt,updateUBOMapping:ce,uniformBlockBinding:ie,texStorage2D:le,texStorage3D:Mt,texSubImage2D:ot,texSubImage3D:wt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Ft,scissor:$t,viewport:Wt,reset:me}}function np(i,t,e,n,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new we,u=new WeakMap;let l;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return p?new OffscreenCanvas(C,S):Ni("canvas")}function g(C,S,Y){let ct=1;const ut=vt(C);if((ut.width>Y||ut.height>Y)&&(ct=Y/Math.max(ut.width,ut.height)),ct<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ot=Math.floor(ct*ut.width),wt=Math.floor(ct*ut.height);l===void 0&&(l=v(ot,wt));const Tt=S?v(ot,wt):l;return Tt.width=ot,Tt.height=wt,Tt.getContext("2d").drawImage(C,0,0,ot,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ot+"x"+wt+")."),Tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,S,Y,ct,ut=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot=S;if(S===i.RED&&(Y===i.FLOAT&&(ot=i.R32F),Y===i.HALF_FLOAT&&(ot=i.R16F),Y===i.UNSIGNED_BYTE&&(ot=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.R8UI),Y===i.UNSIGNED_SHORT&&(ot=i.R16UI),Y===i.UNSIGNED_INT&&(ot=i.R32UI),Y===i.BYTE&&(ot=i.R8I),Y===i.SHORT&&(ot=i.R16I),Y===i.INT&&(ot=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ot=i.RG32F),Y===i.HALF_FLOAT&&(ot=i.RG16F),Y===i.UNSIGNED_BYTE&&(ot=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Y===i.UNSIGNED_INT&&(ot=i.RG32UI),Y===i.BYTE&&(ot=i.RG8I),Y===i.SHORT&&(ot=i.RG16I),Y===i.INT&&(ot=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Y===i.UNSIGNED_INT&&(ot=i.RGB32UI),Y===i.BYTE&&(ot=i.RGB8I),Y===i.SHORT&&(ot=i.RGB16I),Y===i.INT&&(ot=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Y===i.BYTE&&(ot=i.RGBA8I),Y===i.SHORT&&(ot=i.RGBA16I),Y===i.INT&&(ot=i.RGBA32I)),S===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),S===i.RGBA){const wt=ut?gr:Me.getTransfer(ct);Y===i.FLOAT&&(ot=i.RGBA32F),Y===i.HALF_FLOAT&&(ot=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ot=wt===Ae?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(C,S){let Y;return C?S===null||S===Zn||S===xi?Y=i.DEPTH24_STENCIL8:S===_n?Y=i.DEPTH32F_STENCIL8:S===Di&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zn||S===xi?Y=i.DEPTH_COMPONENT24:S===_n?Y=i.DEPTH_COMPONENT32F:S===Di&&(Y=i.DEPTH_COMPONENT16),Y}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),L(S),S.isVideoTexture&&u.delete(S)}function U(C){const S=C.target;S.removeEventListener("dispose",U),y(S)}function L(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Y=C.source,ct=h.get(Y);if(ct){const ut=ct[S.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&E(C),Object.keys(ct).length===0&&h.delete(Y)}n.remove(C)}function E(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const Y=C.source,ct=h.get(Y);delete ct[S.__cacheKey],s.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let ut=0;ut<S.__webglFramebuffer[ct].length;ut++)i.deleteFramebuffer(S.__webglFramebuffer[ct][ut]);else i.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[ct]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=C.textures;for(let ct=0,ut=Y.length;ct<ut;ct++){const ot=n.get(Y[ct]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),s.memory.textures--),n.remove(Y[ct])}n.remove(C)}let T=0;function B(){T=0}function N(){const C=T;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),T+=1,C}function X(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function q(C,S){const Y=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ct=C.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{b(Y,C,S);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function J(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){b(Y,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function O(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){b(Y,C,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function I(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){R(Y,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const Q={[fs]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[ds]:i.MIRRORED_REPEAT},$={[sn]:i.NEAREST,[pl]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},F={[_l]:i.NEVER,[wl]:i.ALWAYS,[xl]:i.LESS,[vo]:i.LEQUAL,[yl]:i.EQUAL,[El]:i.GEQUAL,[Ml]:i.GREATER,[Sl]:i.NOTEQUAL};function j(C,S){if(S.type===_n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Tr||S.magFilter===Gi||S.magFilter===Yn||S.minFilter===on||S.minFilter===Tr||S.minFilter===Gi||S.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Q[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,$[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,$[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,F[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==Gi&&S.minFilter!==Yn||S.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function z(C,S){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const ct=S.source;let ut=h.get(ct);ut===void 0&&(ut={},h.set(ct,ut));const ot=X(S);if(ot!==C.__cacheKey){ut[ot]===void 0&&(ut[ot]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),ut[ot].usedTimes++;const wt=ut[C.__cacheKey];wt!==void 0&&(ut[C.__cacheKey].usedTimes--,wt.usedTimes===0&&E(S)),C.__cacheKey=ot,C.__webglTexture=ut[ot].texture}return Y}function b(C,S,Y){let ct=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=i.TEXTURE_3D);const ut=z(C,S),ot=S.source;e.bindTexture(ct,C.__webglTexture,i.TEXTURE0+Y);const wt=n.get(ot);if(ot.version!==wt.__version||ut===!0){e.activeTexture(i.TEXTURE0+Y);const Tt=Me.getPrimaries(Me.workingColorSpace),Ft=S.colorSpace===Cn?null:Me.getPrimaries(S.colorSpace),le=S.colorSpace===Cn||Tt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Mt=g(S.image,!1,a.maxTextureSize);Mt=ne(S,Mt);const kt=r.convert(S.format,S.colorSpace),Zt=r.convert(S.type);let $t=M(S.internalFormat,kt,Zt,S.colorSpace,S.isVideoTexture);j(ct,S);let Wt;const ce=S.mipmaps,ie=S.isVideoTexture!==!0,me=wt.__version===void 0||ut===!0,W=ot.dataReady,Lt=A(S,Mt);if(S.isDepthTexture)$t=_(S.format===yi,S.type),me&&(ie?e.texStorage2D(i.TEXTURE_2D,1,$t,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,$t,Mt.width,Mt.height,0,kt,Zt,null));else if(S.isDataTexture)if(ce.length>0){ie&&me&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,ce[0].width,ce[0].height);for(let lt=0,pt=ce.length;lt<pt;lt++)Wt=ce[lt],ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,kt,Zt,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,kt,Zt,Wt.data);S.generateMipmaps=!1}else ie?(me&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,Mt.width,Mt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,kt,Zt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,Mt.width,Mt.height,0,kt,Zt,Mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,$t,ce[0].width,ce[0].height,Mt.depth);for(let lt=0,pt=ce.length;lt<pt;lt++)if(Wt=ce[lt],S.format!==rn)if(kt!==null)if(ie){if(W)if(S.layerUpdates.size>0){const Vt=Pa(Wt.width,Wt.height,S.format,S.type);for(const Ot of S.layerUpdates){const re=Wt.data.subarray(Ot*Vt/Wt.data.BYTES_PER_ELEMENT,(Ot+1)*Vt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Ot,Wt.width,Wt.height,1,kt,re)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,kt,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,$t,Wt.width,Wt.height,Mt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Wt.width,Wt.height,Mt.depth,kt,Zt,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,$t,Wt.width,Wt.height,Mt.depth,0,kt,Zt,Wt.data)}else{ie&&me&&e.texStorage2D(i.TEXTURE_2D,Lt,$t,ce[0].width,ce[0].height);for(let lt=0,pt=ce.length;lt<pt;lt++)Wt=ce[lt],S.format!==rn?kt!==null?ie?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,kt,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt.width,Wt.height,kt,Zt,Wt.data):e.texImage2D(i.TEXTURE_2D,lt,$t,Wt.width,Wt.height,0,kt,Zt,Wt.data)}else if(S.isDataArrayTexture)if(ie){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,$t,Mt.width,Mt.height,Mt.depth),W)if(S.layerUpdates.size>0){const lt=Pa(Mt.width,Mt.height,S.format,S.type);for(const pt of S.layerUpdates){const Vt=Mt.data.subarray(pt*lt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*lt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,Mt.width,Mt.height,1,kt,Zt,Vt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Zt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,Mt.width,Mt.height,Mt.depth,0,kt,Zt,Mt.data);else if(S.isData3DTexture)ie?(me&&e.texStorage3D(i.TEXTURE_3D,Lt,$t,Mt.width,Mt.height,Mt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Zt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,Mt.width,Mt.height,Mt.depth,0,kt,Zt,Mt.data);else if(S.isFramebufferTexture){if(me)if(ie)e.texStorage2D(i.TEXTURE_2D,Lt,$t,Mt.width,Mt.height);else{let lt=Mt.width,pt=Mt.height;for(let Vt=0;Vt<Lt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,$t,lt,pt,0,kt,Zt,null),lt>>=1,pt>>=1}}else if(ce.length>0){if(ie&&me){const lt=vt(ce[0]);e.texStorage2D(i.TEXTURE_2D,Lt,$t,lt.width,lt.height)}for(let lt=0,pt=ce.length;lt<pt;lt++)Wt=ce[lt],ie?W&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,kt,Zt,Wt):e.texImage2D(i.TEXTURE_2D,lt,$t,kt,Zt,Wt);S.generateMipmaps=!1}else if(ie){if(me){const lt=vt(Mt);e.texStorage2D(i.TEXTURE_2D,Lt,$t,lt.width,lt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Zt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,$t,kt,Zt,Mt);m(S)&&d(ct),wt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function R(C,S,Y){if(S.image.length!==6)return;const ct=z(C,S),ut=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);const ot=n.get(ut);if(ut.version!==ot.__version||ct===!0){e.activeTexture(i.TEXTURE0+Y);const wt=Me.getPrimaries(Me.workingColorSpace),Tt=S.colorSpace===Cn?null:Me.getPrimaries(S.colorSpace),Ft=S.colorSpace===Cn||wt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,Mt=S.image[0]&&S.image[0].isDataTexture,kt=[];for(let pt=0;pt<6;pt++)!le&&!Mt?kt[pt]=g(S.image[pt],!0,a.maxCubemapSize):kt[pt]=Mt?S.image[pt].image:S.image[pt],kt[pt]=ne(S,kt[pt]);const Zt=kt[0],$t=r.convert(S.format,S.colorSpace),Wt=r.convert(S.type),ce=M(S.internalFormat,$t,Wt,S.colorSpace),ie=S.isVideoTexture!==!0,me=ot.__version===void 0||ct===!0,W=ut.dataReady;let Lt=A(S,Zt);j(i.TEXTURE_CUBE_MAP,S);let lt;if(le){ie&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ce,Zt.width,Zt.height);for(let pt=0;pt<6;pt++){lt=kt[pt].mipmaps;for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];S.format!==rn?$t!==null?ie?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,$t,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ce,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,0,0,Ot.width,Ot.height,$t,Wt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt,ce,Ot.width,Ot.height,0,$t,Wt,Ot.data)}}}else{if(lt=S.mipmaps,ie&&me){lt.length>0&&Lt++;const pt=vt(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ce,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Mt){ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,kt[pt].width,kt[pt].height,$t,Wt,kt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,kt[pt].width,kt[pt].height,0,$t,Wt,kt[pt].data);for(let Vt=0;Vt<lt.length;Vt++){const re=lt[Vt].image[pt].image;ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,re.width,re.height,$t,Wt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ce,re.width,re.height,0,$t,Wt,re.data)}}else{ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$t,Wt,kt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,$t,Wt,kt[pt]);for(let Vt=0;Vt<lt.length;Vt++){const Ot=lt[Vt];ie?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,0,0,$t,Wt,Ot.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Vt+1,ce,$t,Wt,Ot.image[pt])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),ot.__version=ut.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function H(C,S,Y,ct,ut,ot){const wt=r.convert(Y.format,Y.colorSpace),Tt=r.convert(Y.type),Ft=M(Y.internalFormat,wt,Tt,Y.colorSpace),le=n.get(S),Mt=n.get(Y);if(Mt.__renderTarget=S,!le.__hasExternalTextures){const kt=Math.max(1,S.width>>ot),Zt=Math.max(1,S.height>>ot);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,ot,Ft,kt,Zt,S.depth,0,wt,Tt,null):e.texImage2D(ut,ot,Ft,kt,Zt,0,wt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ut,Mt.__webglTexture,0,ht(S)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ut,Mt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(C,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const ct=S.depthTexture,ut=ct&&ct.isDepthTexture?ct.type:null,ot=_(S.stencilBuffer,ut),wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=ht(S);Xt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,ot,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ot,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,C)}else{const ct=S.textures;for(let ut=0;ut<ct.length;ut++){const ot=ct[ut],wt=r.convert(ot.format,ot.colorSpace),Tt=r.convert(ot.type),Ft=M(ot.internalFormat,wt,Tt,ot.colorSpace),le=ht(S);Y&&Xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Ft,S.width,S.height):Xt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(S.depthTexture);ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ut=ct.__webglTexture,ot=ht(S);if(S.depthTexture.format===pi)Xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(S.depthTexture.format===yi)Xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function k(C){const S=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const ct=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){const ut=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",ut)};ct.addEventListener("dispose",ut),S.__depthDisposeCallback=ut}S.__boundDepthTexture=ct}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");et(S.__webglFramebuffer,C)}else if(Y){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=i.createRenderbuffer(),K(S.__webglDepthbuffer[ct],C,!1);else{const ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,S,Y){const ct=n.get(C);S!==void 0&&H(ct.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&k(C)}function mt(C){const S=C.texture,Y=n.get(C),ct=n.get(S);C.addEventListener("dispose",U);const ut=C.textures,ot=C.isWebGLCubeRenderTarget===!0,wt=ut.length>1;if(wt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=S.version,s.memory.textures++),ot){Y.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Tt]=[];for(let Ft=0;Ft<S.mipmaps.length;Ft++)Y.__webglFramebuffer[Tt][Ft]=i.createFramebuffer()}else Y.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)Y.__webglFramebuffer[Tt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(wt)for(let Tt=0,Ft=ut.length;Tt<Ft;Tt++){const le=n.get(ut[Tt]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),s.memory.textures++)}if(C.samples>0&&Xt(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Tt=0;Tt<ut.length;Tt++){const Ft=ut[Tt];Y.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt]);const le=r.convert(Ft.format,Ft.colorSpace),Mt=r.convert(Ft.type),kt=M(Ft.internalFormat,le,Mt,Ft.colorSpace,C.isXRRenderTarget===!0),Zt=ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,kt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),K(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),j(i.TEXTURE_CUBE_MAP,S);for(let Tt=0;Tt<6;Tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)H(Y.__webglFramebuffer[Tt][Ft],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ft);else H(Y.__webglFramebuffer[Tt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let Tt=0,Ft=ut.length;Tt<Ft;Tt++){const le=ut[Tt],Mt=n.get(le);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),j(i.TEXTURE_2D,le),H(Y.__webglFramebuffer,C,le,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),m(le)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ct.__webglTexture),j(Tt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)H(Y.__webglFramebuffer[Ft],C,S,i.COLOR_ATTACHMENT0,Tt,Ft);else H(Y.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,Tt,0);m(S)&&d(Tt),e.unbindTexture()}C.depthBuffer&&k(C)}function St(C){const S=C.textures;for(let Y=0,ct=S.length;Y<ct;Y++){const ut=S[Y];if(m(ut)){const ot=x(C),wt=n.get(ut).__webglTexture;e.bindTexture(ot,wt),d(ot),e.unbindTexture()}}}const Et=[],D=[];function dt(C){if(C.samples>0){if(Xt(C)===!1){const S=C.textures,Y=C.width,ct=C.height;let ut=i.COLOR_BUFFER_BIT;const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(C),Tt=S.length>1;if(Tt)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ft]);const le=n.get(S[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,ut,i.NEAREST),c===!0&&(Et.length=0,D.length=0,Et.push(i.COLOR_ATTACHMENT0+Ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Et.push(ot),D.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ft]);const le=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,le,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ht(C){return Math.min(a.maxSamples,C.samples)}function Xt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(C){const S=s.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ne(C,S){const Y=C.colorSpace,ct=C.format,ut=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Mi&&Y!==Cn&&(Me.getTransfer(Y)===Ae?(ct!==rn||ut!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(f.width=C.naturalWidth||C.width,f.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(f.width=C.displayWidth,f.height=C.displayHeight):(f.width=C.width,f.height=C.height),f}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=O,this.setTextureCube=I,this.rebindTextures=it,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Xt}function ip(i,t){function e(n,a=Cn){let r;const s=Me.getTransfer(a);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Xs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ao)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ro)return i.BYTE;if(n===so)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===Ws)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===oo)return i.ALPHA;if(n===lo)return i.RGB;if(n===rn)return i.RGBA;if(n===co)return i.LUMINANCE;if(n===uo)return i.LUMINANCE_ALPHA;if(n===pi)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===ho)return i.RED;if(n===Ys)return i.RED_INTEGER;if(n===fo)return i.RG;if(n===Zs)return i.RG_INTEGER;if(n===Ks)return i.RGBA_INTEGER;if(n===hr||n===fr||n===dr||n===pr)if(s===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ps||n===ms||n===vs||n===gs)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ms)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vs)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_s||n===xs||n===ys)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_s||n===xs)return s===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ys)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ms||n===Ss||n===Es||n===ws||n===Ts||n===As||n===bs||n===Rs||n===Cs||n===Ps||n===Ls||n===Is||n===Ds||n===Us)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ms)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ss)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Es)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ws)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ts)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===As)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bs)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rs)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cs)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ps)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ls)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Is)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ds)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Us)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===Ns||n===Fs)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return s===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ns)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fs)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===po||n===Bs||n===Os||n===zs)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bs)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Os)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const rp={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(f,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=f.joints["index-finger-tip"],l=f.joints["thumb-tip"],h=u.position.distanceTo(l.position),p=.02,v=.005;f.inputState.pinching&&h>p+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&h<=p-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),f!==null&&(f.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ap=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class op{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const a=new Ve,r=t.properties.get(a);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:sp,fragmentShader:ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lp extends Ei{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,f=null,u=null,l=null,h=null,p=null,v=null;const g=new op,m=e.getContextAttributes();let d=null,x=null;const M=[],_=[],A=new we;let P=null;const U=new je;U.viewport=new Re;const L=new je;L.viewport=new Re;const E=[U,L],y=new Rc;let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let R=M[b];return R===void 0&&(R=new Jr,M[b]=R),R.getTargetRaySpace()},this.getControllerGrip=function(b){let R=M[b];return R===void 0&&(R=new Jr,M[b]=R),R.getGripSpace()},this.getHand=function(b){let R=M[b];return R===void 0&&(R=new Jr,M[b]=R),R.getHandSpace()};function N(b){const R=_.indexOf(b.inputSource);if(R===-1)return;const H=M[R];H!==void 0&&(H.update(b.inputSource,b.frame,f||s),H.dispatchEvent({type:b.type,data:b.inputSource}))}function X(){a.removeEventListener("select",N),a.removeEventListener("selectstart",N),a.removeEventListener("selectend",N),a.removeEventListener("squeeze",N),a.removeEventListener("squeezestart",N),a.removeEventListener("squeezeend",N),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",q);for(let b=0;b<M.length;b++){const R=_[b];R!==null&&(_[b]=null,M[b].disconnect(R))}T=null,B=null,g.reset(),t.setRenderTarget(d),p=null,h=null,l=null,a=null,x=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||s},this.setReferenceSpace=function(b){f=b},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(b){if(a=b,a!==null){if(d=t.getRenderTarget(),a.addEventListener("select",N),a.addEventListener("selectstart",N),a.addEventListener("selectend",N),a.addEventListener("squeeze",N),a.addEventListener("squeezestart",N),a.addEventListener("squeezeend",N),a.addEventListener("end",X),a.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),a.renderState.layers===void 0){const R={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,R),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Kn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let R=null,H=null,K=null;m.depth&&(K=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,R=m.stencil?yi:pi,H=m.stencil?xi:Zn);const et={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};l=new XRWebGLBinding(a,e),h=l.createProjectionLayer(et),a.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Kn(h.textureWidth,h.textureHeight,{format:rn,type:Mn,depthTexture:new Ro(h.textureWidth,h.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),f=null,s=await a.requestReferenceSpace(o),z.setContext(a),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(b){for(let R=0;R<b.removed.length;R++){const H=b.removed[R],K=_.indexOf(H);K>=0&&(_[K]=null,M[K].disconnect(H))}for(let R=0;R<b.added.length;R++){const H=b.added[R];let K=_.indexOf(H);if(K===-1){for(let k=0;k<M.length;k++)if(k>=_.length){_.push(H),K=k;break}else if(_[k]===null){_[k]=H,K=k;break}if(K===-1)break}const et=M[K];et&&et.connect(H)}}const J=new at,O=new at;function I(b,R,H){J.setFromMatrixPosition(R.matrixWorld),O.setFromMatrixPosition(H.matrixWorld);const K=J.distanceTo(O),et=R.projectionMatrix.elements,k=H.projectionMatrix.elements,it=et[14]/(et[10]-1),mt=et[14]/(et[10]+1),St=(et[9]+1)/et[5],Et=(et[9]-1)/et[5],D=(et[8]-1)/et[0],dt=(k[8]+1)/k[0],ht=it*D,Xt=it*dt,xt=K/(-D+dt),ne=xt*-D;if(R.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ne),b.translateZ(xt),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),et[10]===-1)b.projectionMatrix.copy(R.projectionMatrix),b.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const vt=it+xt,C=mt+xt,S=ht-ne,Y=Xt+(K-ne),ct=St*mt/C*vt,ut=Et*mt/C*vt;b.projectionMatrix.makePerspective(S,Y,ct,ut,vt,C),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}}function Q(b,R){R===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(R.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(a===null)return;let R=b.near,H=b.far;g.texture!==null&&(g.depthNear>0&&(R=g.depthNear),g.depthFar>0&&(H=g.depthFar)),y.near=L.near=U.near=R,y.far=L.far=U.far=H,(T!==y.near||B!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,B=y.far),U.layers.mask=b.layers.mask|2,L.layers.mask=b.layers.mask|4,y.layers.mask=U.layers.mask|L.layers.mask;const K=b.parent,et=y.cameras;Q(y,K);for(let k=0;k<et.length;k++)Q(et[k],K);et.length===2?I(y,U,L):y.projectionMatrix.copy(U.projectionMatrix),$(b,y,K)};function $(b,R,H){H===null?b.matrix.copy(R.matrixWorld):(b.matrix.copy(H.matrixWorld),b.matrix.invert(),b.matrix.multiply(R.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(R.projectionMatrix),b.projectionMatrixInverse.copy(R.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Ui*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(b){c=b,h!==null&&(h.fixedFoveation=b),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=b)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let F=null;function j(b,R){if(u=R.getViewerPose(f||s),v=R,u!==null){const H=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let K=!1;H.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let k=0;k<H.length;k++){const it=H[k];let mt=null;if(p!==null)mt=p.getViewport(it);else{const Et=l.getViewSubImage(h,it);mt=Et.viewport,k===0&&(t.setRenderTargetTextures(x,Et.colorTexture,h.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(x))}let St=E[k];St===void 0&&(St=new je,St.layers.enable(k),St.viewport=new Re,E[k]=St),St.matrix.fromArray(it.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(it.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(mt.x,mt.y,mt.width,mt.height),k===0&&(y.matrix.copy(St.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(St)}const et=a.enabledFeatures;if(et&&et.includes("depth-sensing")){const k=l.getDepthInformation(H[0]);k&&k.isValid&&k.texture&&g.init(t,k,a.renderState)}}for(let H=0;H<M.length;H++){const K=_[H],et=M[H];K!==null&&et!==void 0&&et.update(K,R,f||s)}F&&F(b,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const z=new Po;z.setAnimationLoop(j),this.setAnimationLoop=function(b){F=b},this.dispose=function(){}}}const Hn=new un,cp=new Ce;function up(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,To(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,x,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),l(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,x,M):d.isSpriteMaterial?f(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===We&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===We&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,Hn.copy(_),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Hn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function l(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===We&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function hp(i,t,e,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function f(x,M){let _=a[x.id];_===void 0&&(v(x),_=u(x),a[x.id]=_,x.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(x,A);const P=t.render.frame;r[x.id]!==P&&(h(x),r[x.id]=P)}function u(x){const M=l();x.__bindingPointIndex=M;const _=i.createBuffer(),A=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function l(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=a[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,U=_.length;P<U;P++){const L=Array.isArray(_[P])?_[P]:[_[P]];for(let E=0,y=L.length;E<y;E++){const T=L[E];if(p(T,P,E,A)===!0){const B=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let q=0;q<N.length;q++){const J=N[q],O=g(J);typeof J=="number"||typeof J=="boolean"?(T.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,B+X,T.__data)):J.isMatrix3?(T.__data[0]=J.elements[0],T.__data[1]=J.elements[1],T.__data[2]=J.elements[2],T.__data[3]=0,T.__data[4]=J.elements[3],T.__data[5]=J.elements[4],T.__data[6]=J.elements[5],T.__data[7]=0,T.__data[8]=J.elements[6],T.__data[9]=J.elements[7],T.__data[10]=J.elements[8],T.__data[11]=0):(J.toArray(T.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,_,A){const P=x.value,U=M+"_"+_;if(A[U]===void 0)return typeof P=="number"||typeof P=="boolean"?A[U]=P:A[U]=P.clone(),!0;{const L=A[U];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return A[U]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function v(x){const M=x.uniforms;let _=0;const A=16;for(let U=0,L=M.length;U<L;U++){const E=Array.isArray(M[U])?M[U]:[M[U]];for(let y=0,T=E.length;y<T;y++){const B=E[y],N=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=N.length;X<q;X++){const J=N[X],O=g(J),I=_%A,Q=I%O.boundary,$=I+Q;_+=Q,$!==0&&A-$<O.storage&&(_+=A-$),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=O.storage}}}const P=_%A;return P>0&&(_+=A-P),x.__size=_,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=s.indexOf(M.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function d(){for(const x in a)i.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:c,update:f,dispose:d}}class fp{constructor(t={}){const{canvas:e=Gl(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Ln,this.toneMappingExposure=1;const _=this;let A=!1,P=0,U=0,L=null,E=-1,y=null;const T=new Re,B=new Re;let N=null;const X=new _e(0);let q=0,J=e.width,O=e.height,I=1,Q=null,$=null;const F=new Re(0,0,J,O),j=new Re(0,0,J,O);let z=!1;const b=new Qs;let R=!1,H=!1;const K=new Ce,et=new Ce,k=new at,it=new Re,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Et(){return L===null?I:1}let D=n;function dt(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gs}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),D===null){const V="webgl2";if(D=dt(V,w),D===null)throw dt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,Xt,xt,ne,vt,C,S,Y,ct,ut,ot,wt,Tt,Ft,le,Mt,kt,Zt,$t,Wt,ce,ie,me,W;function Lt(){ht=new Mf(D),ht.init(),ie=new ip(D,ht),Xt=new mf(D,ht,t,ie),xt=new ep(D,ht),Xt.reverseDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),ne=new wf(D),vt=new Gd,C=new np(D,ht,xt,vt,Xt,ie,ne),S=new gf(_),Y=new yf(_),ct=new Pc(D),me=new df(D,ct),ut=new Sf(D,ct,ne,me),ot=new Af(D,ut,ct,ne),$t=new Tf(D,Xt,C),Mt=new vf(vt),wt=new Hd(_,S,Y,ht,Xt,me,Mt),Tt=new up(_,vt),Ft=new Wd,le=new $d(ht),Zt=new ff(_,S,Y,xt,ot,p,c),kt=new Jd(_,ot,Xt),W=new hp(D,ne,Xt,xt),Wt=new pf(D,ht,ne),ce=new Ef(D,ht,ne),ne.programs=wt.programs,_.capabilities=Xt,_.extensions=ht,_.properties=vt,_.renderLists=Ft,_.shadowMap=kt,_.state=xt,_.info=ne}Lt();const lt=new lp(_,D);this.xr=lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(J,O,!1))},this.getSize=function(w){return w.set(J,O)},this.setSize=function(w,V,tt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,O=V,e.width=Math.floor(w*I),e.height=Math.floor(V*I),tt===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(J*I,O*I).floor()},this.setDrawingBufferSize=function(w,V,tt){J=w,O=V,I=tt,e.width=Math.floor(w*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,V,tt,Z){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,V,tt,Z),xt.viewport(T.copy(F).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,V,tt,Z){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,V,tt,Z),xt.scissor(B.copy(j).multiplyScalar(I).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){xt.setScissorTest(z=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(w=!0,V=!0,tt=!0){let Z=0;if(w){let G=!1;if(L!==null){const rt=L.texture.format;G=rt===Ks||rt===Zs||rt===Ys}if(G){const rt=L.texture.type,Ct=rt===Mn||rt===Zn||rt===Di||rt===xi||rt===Xs||rt===qs,zt=Zt.getClearColor(),Ht=Zt.getClearAlpha(),te=zt.r,Kt=zt.g,Nt=zt.b;Ct?(v[0]=te,v[1]=Kt,v[2]=Nt,v[3]=Ht,D.clearBufferuiv(D.COLOR,0,v)):(g[0]=te,g[1]=Kt,g[2]=Nt,g[3]=Ht,D.clearBufferiv(D.COLOR,0,g))}else Z|=D.COLOR_BUFFER_BIT}V&&(Z|=D.DEPTH_BUFFER_BIT),tt&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Zt.dispose(),Ft.dispose(),le.dispose(),vt.dispose(),S.dispose(),Y.dispose(),ot.dispose(),me.dispose(),W.dispose(),wt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",gt),lt.removeEventListener("sessionend",_t),Jt.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=ne.autoReset,V=kt.enabled,tt=kt.autoUpdate,Z=kt.needsUpdate,G=kt.type;Lt(),ne.autoReset=w,kt.enabled=V,kt.autoUpdate=tt,kt.needsUpdate=Z,kt.type=G}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const V=w.target;V.removeEventListener("dispose",re),Te(V)}function Te(w){be(w),vt.remove(w)}function be(w){const V=vt.get(w).programs;V!==void 0&&(V.forEach(function(tt){wt.releaseProgram(tt)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,tt,Z,G,rt){V===null&&(V=mt);const Ct=G.isMesh&&G.matrixWorld.determinant()<0,zt=At(w,V,tt,Z,G);xt.setMaterial(Z,Ct);let Ht=tt.index,te=1;if(Z.wireframe===!0){if(Ht=ut.getWireframeAttribute(tt),Ht===void 0)return;te=2}const Kt=tt.drawRange,Nt=tt.attributes.position;let ue=Kt.start*te,ee=(Kt.start+Kt.count)*te;rt!==null&&(ue=Math.max(ue,rt.start*te),ee=Math.min(ee,(rt.start+rt.count)*te)),Ht!==null?(ue=Math.max(ue,0),ee=Math.min(ee,Ht.count)):Nt!=null&&(ue=Math.max(ue,0),ee=Math.min(ee,Nt.count));const Se=ee-ue;if(Se<0||Se===1/0)return;me.setup(G,Z,zt,tt,Ht);let ve,se=Wt;if(Ht!==null&&(ve=ct.get(Ht),se=ce,se.setIndex(ve)),G.isMesh)Z.wireframe===!0?(xt.setLineWidth(Z.wireframeLinewidth*Et()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(G.isLine){let Yt=Z.linewidth;Yt===void 0&&(Yt=1),xt.setLineWidth(Yt*Et()),G.isLineSegments?se.setMode(D.LINES):G.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else G.isPoints?se.setMode(D.POINTS):G.isSprite&&se.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,Ee=G._multiDrawCounts,fe=G._multiDrawCount,Qt=Ht?ct.get(Ht).bytesPerElement:1,Pe=vt.get(Z).currentProgram.getUniforms();for(let xe=0;xe<fe;xe++)Pe.setValue(D,"_gl_DrawID",xe),se.render(Yt[xe]/Qt,Ee[xe])}else if(G.isInstancedMesh)se.renderInstances(ue,Se,G.count);else if(tt.isInstancedBufferGeometry){const Yt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ee=Math.min(tt.instanceCount,Yt);se.renderInstances(ue,Se,Ee)}else se.render(ue,Se)};function ae(w,V,tt){w.transparent===!0&&w.side===gn&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,It(w,V,tt),w.side=In,w.needsUpdate=!0,It(w,V,tt),w.side=gn):It(w,V,tt)}this.compile=function(w,V,tt=null){tt===null&&(tt=w),d=le.get(tt),d.init(V),M.push(d),tt.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),w!==tt&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const Z=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const rt=G.material;if(rt)if(Array.isArray(rt))for(let Ct=0;Ct<rt.length;Ct++){const zt=rt[Ct];ae(zt,tt,G),Z.add(zt)}else ae(rt,tt,G),Z.add(rt)}),M.pop(),d=null,Z},this.compileAsync=function(w,V,tt=null){const Z=this.compile(w,V,tt);return new Promise(G=>{function rt(){if(Z.forEach(function(Ct){vt.get(Ct).currentProgram.isReady()&&Z.delete(Ct)}),Z.size===0){G(w);return}setTimeout(rt,10)}ht.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let st=null;function ft(w){st&&st(w)}function gt(){Jt.stop()}function _t(){Jt.start()}const Jt=new Po;Jt.setAnimationLoop(ft),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(w){st=w,lt.setAnimationLoop(w),w===null?Jt.stop():Jt.start()},lt.addEventListener("sessionstart",gt),lt.addEventListener("sessionend",_t),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,V,L),d=le.get(w,M.length),d.init(V),M.push(d),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),b.setFromProjectionMatrix(et),H=this.localClippingEnabled,R=Mt.init(this.clippingPlanes,H),m=Ft.get(w,x.length),m.init(),x.push(m),lt.enabled===!0&&lt.isPresenting===!0){const rt=_.xr.getDepthSensingMesh();rt!==null&&Bt(rt,V,-1/0,_.sortObjects)}Bt(w,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,$),St=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,St&&Zt.addToRenderList(m,w),this.info.render.frame++,R===!0&&Mt.beginShadows();const tt=d.state.shadowsArray;kt.render(tt,w,V),R===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,G=m.transmissive;if(d.setupLights(),V.isArrayCamera){const rt=V.cameras;if(G.length>0)for(let Ct=0,zt=rt.length;Ct<zt;Ct++){const Ht=rt[Ct];Ut(Z,G,w,Ht)}St&&Zt.render(w);for(let Ct=0,zt=rt.length;Ct<zt;Ct++){const Ht=rt[Ct];bt(m,w,Ht,Ht.viewport)}}else G.length>0&&Ut(Z,G,w,V),St&&Zt.render(w),bt(m,w,V);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,V),me.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],R===!0&&Mt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Bt(w,V,tt,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||b.intersectsSprite(w)){Z&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const Ct=ot.update(w),zt=w.material;zt.visible&&m.push(w,Ct,zt,tt,it.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||b.intersectsObject(w))){const Ct=ot.update(w),zt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),it.copy(Ct.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(zt)){const Ht=Ct.groups;for(let te=0,Kt=Ht.length;te<Kt;te++){const Nt=Ht[te],ue=zt[Nt.materialIndex];ue&&ue.visible&&m.push(w,Ct,ue,tt,it.z,Nt)}}else zt.visible&&m.push(w,Ct,zt,tt,it.z,null)}}const rt=w.children;for(let Ct=0,zt=rt.length;Ct<zt;Ct++)Bt(rt[Ct],V,tt,Z)}function bt(w,V,tt,Z){const G=w.opaque,rt=w.transmissive,Ct=w.transparent;d.setupLightsView(tt),R===!0&&Mt.setGlobalState(_.clippingPlanes,tt),Z&&xt.viewport(T.copy(Z)),G.length>0&&nt(G,V,tt),rt.length>0&&nt(rt,V,tt),Ct.length>0&&nt(Ct,V,tt),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ut(w,V,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new Kn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Fi:Mn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const rt=d.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||T;rt.setSize(Ct.z,Ct.w);const zt=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(X),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),St&&Zt.render(tt);const Ht=_.toneMapping;_.toneMapping=Ln;const te=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),R===!0&&Mt.setGlobalState(_.clippingPlanes,Z),nt(w,tt,Z),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Nt=0,ue=V.length;Nt<ue;Nt++){const ee=V[Nt],Se=ee.object,ve=ee.geometry,se=ee.material,Yt=ee.group;if(se.side===gn&&Se.layers.test(Z.layers)){const Ee=se.side;se.side=We,se.needsUpdate=!0,Rt(Se,tt,Z,ve,se,Yt),se.side=Ee,se.needsUpdate=!0,Kt=!0}}Kt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}_.setRenderTarget(zt),_.setClearColor(X,q),te!==void 0&&(Z.viewport=te),_.toneMapping=Ht}function nt(w,V,tt){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,rt=w.length;G<rt;G++){const Ct=w[G],zt=Ct.object,Ht=Ct.geometry,te=Z===null?Ct.material:Z,Kt=Ct.group;zt.layers.test(tt.layers)&&Rt(zt,V,tt,Ht,te,Kt)}}function Rt(w,V,tt,Z,G,rt){w.onBeforeRender(_,V,tt,Z,G,rt),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(_,V,tt,Z,w,rt),G.transparent===!0&&G.side===gn&&G.forceSinglePass===!1?(G.side=We,G.needsUpdate=!0,_.renderBufferDirect(tt,V,Z,G,w,rt),G.side=In,G.needsUpdate=!0,_.renderBufferDirect(tt,V,Z,G,w,rt),G.side=gn):_.renderBufferDirect(tt,V,Z,G,w,rt),w.onAfterRender(_,V,tt,Z,G,rt)}function It(w,V,tt){V.isScene!==!0&&(V=mt);const Z=vt.get(w),G=d.state.lights,rt=d.state.shadowsArray,Ct=G.state.version,zt=wt.getParameters(w,G.state,rt,V,tt),Ht=wt.getProgramCacheKey(zt);let te=Z.programs;Z.environment=w.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(w.isMeshStandardMaterial?Y:S).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",re),te=new Map,Z.programs=te);let Kt=te.get(Ht);if(Kt!==void 0){if(Z.currentProgram===Kt&&Z.lightsStateVersion===Ct)return Pt(w,zt),Kt}else zt.uniforms=wt.getUniforms(w),w.onBeforeCompile(zt,_),Kt=wt.acquireProgram(zt,Ht),te.set(Ht,Kt),Z.uniforms=zt.uniforms;const Nt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=Mt.uniform),Pt(w,zt),Z.needsLights=jt(w),Z.lightsStateVersion=Ct,Z.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMap.value=G.state.directionalShadowMap,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotShadowMap.value=G.state.spotShadowMap,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMap.value=G.state.pointShadowMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Kt,Z.uniformsList=null,Kt}function qt(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=vr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Pt(w,V){const tt=vt.get(w);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function At(w,V,tt,Z,G){V.isScene!==!0&&(V=mt),C.resetTextureUnits();const rt=V.fog,Ct=Z.isMeshStandardMaterial?V.environment:null,zt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mi,Ht=(Z.isMeshStandardMaterial?Y:S).get(Z.envMap||Ct),te=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Kt=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!tt.morphAttributes.position,ue=!!tt.morphAttributes.normal,ee=!!tt.morphAttributes.color;let Se=Ln;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Se=_.toneMapping);const ve=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,se=ve!==void 0?ve.length:0,Yt=vt.get(Z),Ee=d.state.lights;if(R===!0&&(H===!0||w!==y)){const de=w===y&&Z.id===E;Mt.setState(Z,w,de)}let fe=!1;Z.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ee.state.version||Yt.outputColorSpace!==zt||G.isBatchedMesh&&Yt.batching===!1||!G.isBatchedMesh&&Yt.batching===!0||G.isBatchedMesh&&Yt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Yt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Yt.instancing===!1||!G.isInstancedMesh&&Yt.instancing===!0||G.isSkinnedMesh&&Yt.skinning===!1||!G.isSkinnedMesh&&Yt.skinning===!0||G.isInstancedMesh&&Yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Yt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Yt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Yt.instancingMorph===!1&&G.morphTexture!==null||Yt.envMap!==Ht||Z.fog===!0&&Yt.fog!==rt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Mt.numPlanes||Yt.numIntersection!==Mt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==Kt||Yt.morphTargets!==Nt||Yt.morphNormals!==ue||Yt.morphColors!==ee||Yt.toneMapping!==Se||Yt.morphTargetsCount!==se)&&(fe=!0):(fe=!0,Yt.__version=Z.version);let Qt=Yt.currentProgram;fe===!0&&(Qt=It(Z,V,G));let Pe=!1,xe=!1,qe=!1;const ye=Qt.getUniforms(),He=Yt.uniforms;if(xt.useProgram(Qt.program)&&(Pe=!0,xe=!0,qe=!0),Z.id!==E&&(E=Z.id,xe=!0),Pe||y!==w){xt.buffers.depth.getReversed()?(K.copy(w.projectionMatrix),Wl(K),Xl(K),ye.setValue(D,"projectionMatrix",K)):ye.setValue(D,"projectionMatrix",w.projectionMatrix),ye.setValue(D,"viewMatrix",w.matrixWorldInverse);const ke=ye.map.cameraPosition;ke!==void 0&&ke.setValue(D,k.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ye.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,xe=!0,qe=!0)}if(G.isSkinnedMesh){ye.setOptional(D,G,"bindMatrix"),ye.setOptional(D,G,"bindMatrixInverse");const de=G.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),ye.setValue(D,"boneTexture",de.boneTexture,C))}G.isBatchedMesh&&(ye.setOptional(D,G,"batchingTexture"),ye.setValue(D,"batchingTexture",G._matricesTexture,C),ye.setOptional(D,G,"batchingIdTexture"),ye.setValue(D,"batchingIdTexture",G._indirectTexture,C),ye.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ye.setValue(D,"batchingColorTexture",G._colorsTexture,C));const Ge=tt.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&$t.update(G,tt,Qt),(xe||Yt.receiveShadow!==G.receiveShadow)&&(Yt.receiveShadow=G.receiveShadow,ye.setValue(D,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(He.envMap.value=Ht,He.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(He.envMapIntensity.value=V.environmentIntensity),xe&&(ye.setValue(D,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&Dt(He,qe),rt&&Z.fog===!0&&Tt.refreshFogUniforms(He,rt),Tt.refreshMaterialUniforms(He,Z,I,O,d.state.transmissionRenderTarget[w.id]),vr.upload(D,qt(Yt),He,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(vr.upload(D,qt(Yt),He,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ye.setValue(D,"center",G.center),ye.setValue(D,"modelViewMatrix",G.modelViewMatrix),ye.setValue(D,"normalMatrix",G.normalMatrix),ye.setValue(D,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const de=Z.uniformsGroups;for(let ke=0,wr=de.length;ke<wr;ke++){const Nn=de[ke];W.update(Nn,Qt),W.bind(Nn,Qt)}}return Qt}function Dt(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function jt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,V,tt){vt.get(w.texture).__webglTexture=V,vt.get(w.depthTexture).__webglTexture=tt;const Z=vt.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=tt===void 0,Z.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){const tt=vt.get(w);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,tt=0){L=w,P=V,U=tt;let Z=!0,G=null,rt=!1,Ct=!1;if(w){const Ht=vt.get(w);if(Ht.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Ht.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ht.__hasExternalTextures)C.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(Ht.__boundDepthTexture!==Nt){if(Nt!==null&&vt.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const Kt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?G=Kt[V][tt]:G=Kt[V],rt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?G=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?G=Kt[tt]:G=Kt,T.copy(w.viewport),B.copy(w.scissor),N=w.scissorTest}else T.copy(F).multiplyScalar(I).floor(),B.copy(j).multiplyScalar(I).floor(),N=z;if(xt.bindFramebuffer(D.FRAMEBUFFER,G)&&Z&&xt.drawBuffers(w,G),xt.viewport(T),xt.scissor(B),xt.setScissorTest(N),rt){const Ht=vt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ht.__webglTexture,tt)}else if(Ct){const Ht=vt.get(w.texture),te=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,tt||0,te)}E=-1},this.readRenderTargetPixels=function(w,V,tt,Z,G,rt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){xt.bindFramebuffer(D.FRAMEBUFFER,zt);try{const Ht=w.texture,te=Ht.format,Kt=Ht.type;if(!Xt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&tt>=0&&tt<=w.height-G&&D.readPixels(V,tt,Z,G,ie.convert(te),ie.convert(Kt),rt)}finally{const Ht=L!==null?vt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,V,tt,Z,G,rt,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){const Ht=w.texture,te=Ht.format,Kt=Ht.type;if(!Xt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-Z&&tt>=0&&tt<=w.height-G){xt.bindFramebuffer(D.FRAMEBUFFER,zt);const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(V,tt,Z,G,ie.convert(te),ie.convert(Kt),0);const ue=L!==null?vt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,ue);const ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await kl(D,ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Nt),D.deleteSync(ee),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,tt=0){w.isTexture!==!0&&(hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-tt),G=Math.floor(w.image.width*Z),rt=Math.floor(w.image.height*Z),Ct=V!==null?V.x:0,zt=V!==null?V.y:0;C.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,tt,0,0,Ct,zt,G,rt),xt.unbindTexture()};const oe=D.createFramebuffer(),yt=D.createFramebuffer();this.copyTextureToTexture=function(w,V,tt=null,Z=null,G=0,rt=null){w.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],V=arguments[2],rt=arguments[3]||0,tt=null),rt===null&&(G!==0?(hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=G,G=0):rt=0);let Ct,zt,Ht,te,Kt,Nt,ue,ee,Se;const ve=w.isCompressedTexture?w.mipmaps[rt]:w.image;if(tt!==null)Ct=tt.max.x-tt.min.x,zt=tt.max.y-tt.min.y,Ht=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,Kt=tt.min.y,Nt=tt.isBox3?tt.min.z:0;else{const Ge=Math.pow(2,-G);Ct=Math.floor(ve.width*Ge),zt=Math.floor(ve.height*Ge),w.isDataArrayTexture?Ht=ve.depth:w.isData3DTexture?Ht=Math.floor(ve.depth*Ge):Ht=1,te=0,Kt=0,Nt=0}Z!==null?(ue=Z.x,ee=Z.y,Se=Z.z):(ue=0,ee=0,Se=0);const se=ie.convert(V.format),Yt=ie.convert(V.type);let Ee;V.isData3DTexture?(C.setTexture3D(V,0),Ee=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),Ee=D.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const fe=D.getParameter(D.UNPACK_ROW_LENGTH),Qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pe=D.getParameter(D.UNPACK_SKIP_PIXELS),xe=D.getParameter(D.UNPACK_SKIP_ROWS),qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt);const ye=w.isDataArrayTexture||w.isData3DTexture,He=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const Ge=vt.get(w),de=vt.get(V),ke=vt.get(Ge.__renderTarget),wr=vt.get(de.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,ke.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Nn=0;Nn<Ht;Nn++)ye&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,G,Nt+Nn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(V).__webglTexture,rt,Se+Nn)),D.blitFramebuffer(te,Kt,Ct,zt,ue,ee,Ct,zt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||vt.has(w)){const Ge=vt.get(w),de=vt.get(V);xt.bindFramebuffer(D.READ_FRAMEBUFFER,oe),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,yt);for(let ke=0;ke<Ht;ke++)ye?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,G,Nt+ke):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,G),He?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.__webglTexture,rt,Se+ke):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,rt),G!==0?D.blitFramebuffer(te,Kt,Ct,zt,ue,ee,Ct,zt,D.COLOR_BUFFER_BIT,D.NEAREST):He?D.copyTexSubImage3D(Ee,rt,ue,ee,Se+ke,te,Kt,Ct,zt):D.copyTexSubImage2D(Ee,rt,ue,ee,te,Kt,Ct,zt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else He?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ee,rt,ue,ee,Se,Ct,zt,Ht,se,Yt,ve.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,rt,ue,ee,Se,Ct,zt,Ht,se,ve.data):D.texSubImage3D(Ee,rt,ue,ee,Se,Ct,zt,Ht,se,Yt,ve):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,ue,ee,Ct,zt,se,Yt,ve.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,ue,ee,ve.width,ve.height,se,ve.data):D.texSubImage2D(D.TEXTURE_2D,rt,ue,ee,Ct,zt,se,Yt,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe),rt===0&&V.generateMipmaps&&D.generateMipmap(Ee),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,V,tt=null,Z=null,G=0){return w.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],V=arguments[3],G=arguments[4]||0),hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,tt,Z,G)},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){P=0,U=0,L=null,xt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}function ur(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ts={exports:{}},eo;function dp(){return eo||(eo=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,a,r){function s(f,u){if(!a[f]){if(!n[f]){var l=typeof ur=="function"&&ur;if(!u&&l)return l(f,!0);if(o)return o(f,!0);throw new Error("Cannot find module '"+f+"'")}var h=a[f]={exports:{}};n[f][0].call(h.exports,function(p){var v=n[f][1][p];return s(v||p)},h,h.exports,e,n,a,r)}return a[f].exports}for(var o=typeof ur=="function"&&ur,c=0;c<r.length;c++)s(r[c]);return s}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(f){f=f||{},this.lowerBound=new r,f.lowerBound&&this.lowerBound.copy(f.lowerBound),this.upperBound=new r,f.upperBound&&this.upperBound.copy(f.upperBound)}var o=new r;s.prototype.setFromPoints=function(f,u,l,h){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(f[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<f.length;m++){var d=f[m];g&&(g.vmult(d,o),d=o),d.x>v.x&&(v.x=d.x),d.x<p.x&&(p.x=d.x),d.y>v.y&&(v.y=d.y),d.y<p.y&&(p.y=d.y),d.z>v.z&&(v.z=d.z),d.z<p.z&&(p.z=d.z)}return u&&(u.vadd(p,p),u.vadd(v,v)),h&&(p.x-=h,p.y-=h,p.z-=h,v.x+=h,v.y+=h,v.z+=h),this},s.prototype.copy=function(f){return this.lowerBound.copy(f.lowerBound),this.upperBound.copy(f.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(f){var u=f.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var l=f.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var u=f.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var l=f.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var u=f.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var l=f.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(f){var u=this.lowerBound,l=this.upperBound,h=f.lowerBound,p=f.upperBound;return(h.x<=l.x&&l.x<=p.x||u.x<=p.x&&p.x<=l.x)&&(h.y<=l.y&&l.y<=p.y||u.y<=p.y&&p.y<=l.y)&&(h.z<=l.z&&l.z<=p.z||u.z<=p.z&&p.z<=l.z)},s.prototype.contains=function(f){var u=this.lowerBound,l=this.upperBound,h=f.lowerBound,p=f.upperBound;return u.x<=h.x&&l.x>=p.x&&u.y<=h.y&&l.y>=p.y&&u.z<=h.z&&l.z>=p.z},s.prototype.getCorners=function(f,u,l,h,p,v,g,m){var d=this.lowerBound,x=this.upperBound;f.copy(d),u.set(x.x,d.y,d.z),l.set(x.x,x.y,d.z),h.set(d.x,x.y,x.z),p.set(x.x,d.y,d.z),v.set(d.x,x.y,d.z),g.set(d.x,d.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(f,u){var l=c,h=l[0],p=l[1],v=l[2],g=l[3],m=l[4],d=l[5],x=l[6],M=l[7];this.getCorners(h,p,v,g,m,d,x,M);for(var _=0;_!==8;_++){var A=l[_];f.pointToLocal(A,A)}return u.setFromPoints(l)},s.prototype.toWorldFrame=function(f,u){var l=c,h=l[0],p=l[1],v=l[2],g=l[3],m=l[4],d=l[5],x=l[6],M=l[7];this.getCorners(h,p,v,g,m,d,x,M);for(var _=0;_!==8;_++){var A=l[_];f.pointToWorld(A,A)}return u.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,c){if(s=s.index,o=o.index,o>s){var f=o;o=s,s=f}this.matrix[(s*(s+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,d){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var f=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&f||g.sleepState===r.SLEEPING)&&(m.type&f||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,d,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,d,x):this.doBoundingSphereBroadphase(g,m,d,x)};var u=new s;new s,new o,new s,c.prototype.doBoundingSphereBroadphase=function(g,m,d,x){var M=u;m.position.vsub(g.position,M);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),A=M.norm2();A<_&&(d.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,d,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(d.push(g),x.push(m))};var l={keys:[]},h=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var d=l,x=h,M=p,_=g.length,A=0;A!==_;A++)x[A]=g[A],M[A]=m[A];g.length=0,m.length=0;for(var A=0;A!==_;A++){var P=x[A].id,U=M[A].id,L=P<U?P+","+U:U+","+P;d[L]=A,d.keys.push(L)}for(var A=0;A!==d.keys.length;A++){var L=d.keys.pop(),E=d[L];g.push(x[E]),m.push(M[E]),delete d[L]}},c.prototype.setWorld=function(g){};var v=new s;c.boundingSphereCheck=function(g,m){var d=v;return g.position.vsub(m.position,d),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>d.norm2()},c.prototype.aabbQuery=function(g,m,d){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function c(u,l,h,p,v){r.apply(this),this.nx=h||10,this.ny=p||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var f=new s;new s,c.prototype.collisionPairs=function(u,l,h){var p=u.numObjects(),v=u.bodies,K=this.aabbMax,H=this.aabbMin,g=this.nx,m=this.ny,d=this.nz,x=m*d,M=d,_=1,A=K.x,P=K.y,U=K.z,L=H.x,E=H.y,y=H.z,T=g/(A-L),B=m/(P-E),N=d/(U-y),X=(A-L)/g,q=(P-E)/m,J=(U-y)/d,O=Math.sqrt(X*X+q*q+J*J)*.5,I=o.types,Q=I.SPHERE,$=I.PLANE;I.BOX,I.COMPOUND,I.CONVEXPOLYHEDRON;for(var F=this.bins,j=this.binLengths,z=this.bins.length,b=0;b!==z;b++)j[b]=0;var R=Math.ceil,H=Math.min,K=Math.max;function et(le,Mt,kt,Zt,$t,Wt,ce){var ie=(le-L)*T|0,me=(Mt-E)*B|0,W=(kt-y)*N|0,Lt=R((Zt-L)*T),lt=R(($t-E)*B),pt=R((Wt-y)*N);ie<0?ie=0:ie>=g&&(ie=g-1),me<0?me=0:me>=m&&(me=m-1),W<0?W=0:W>=d&&(W=d-1),Lt<0?Lt=0:Lt>=g&&(Lt=g-1),lt<0?lt=0:lt>=m&&(lt=m-1),pt<0?pt=0:pt>=d&&(pt=d-1),ie*=x,me*=M,W*=_,Lt*=x,lt*=M,pt*=_;for(var Vt=ie;Vt<=Lt;Vt+=x)for(var Ot=me;Ot<=lt;Ot+=M)for(var re=W;re<=pt;re+=_){var Te=Vt+Ot+re;F[Te][j[Te]++]=ce}}for(var b=0;b!==p;b++){var k=v[b],it=k.shape;switch(it.type){case Q:var mt=k.position.x,St=k.position.y,Et=k.position.z,D=it.radius;et(mt-D,St-D,Et-D,mt+D,St+D,Et+D,k);break;case $:it.worldNormalNeedsUpdate&&it.computeWorldNormal(k.quaternion);var dt=it.worldNormal,ht=L+X*.5-k.position.x,Xt=E+q*.5-k.position.y,xt=y+J*.5-k.position.z,ne=f;ne.set(ht,Xt,xt);for(var vt=0,C=0;vt!==g;vt++,C+=x,ne.y=Xt,ne.x+=X)for(var S=0,Y=0;S!==m;S++,Y+=M,ne.z=xt,ne.y+=q)for(var ct=0,ut=0;ct!==d;ct++,ut+=_,ne.z+=J)if(ne.dot(dt)<O){var ot=C+Y+ut;F[ot][j[ot]++]=k}break;default:k.aabbNeedsUpdate&&k.computeAABB(),et(k.aabb.lowerBound.x,k.aabb.lowerBound.y,k.aabb.lowerBound.z,k.aabb.upperBound.x,k.aabb.upperBound.y,k.aabb.upperBound.z,k);break}}for(var b=0;b!==z;b++){var wt=j[b];if(wt>1)for(var Tt=F[b],vt=0;vt!==wt;vt++)for(var k=Tt[vt],S=0;S!==vt;S++){var Ft=Tt[S];this.needBroadphaseCollision(k,Ft)&&this.intersectionTest(k,Ft,l,h)}}this.makePairsUnique(l,h)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,f,u){var l=c.bodies,h=l.length,p,v,g,m;for(p=0;p!==h;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,f,u)},new s,o.prototype.aabbQuery=function(c,f,u){u=u||[];for(var l=0;l<c.bodies.length;l++){var h=c.bodies[l];h.aabbNeedsUpdate&&h.computeAABB(),h.aabb.overlaps(f)&&u.push(h)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,c){if(s=s.id,o=o.id,o>s){var f=o;o=s,s=f}c?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),f=e("../shapes/Shape"),u=e("../collision/AABB");function l(z,b){this.from=z?z.clone():new r,this.to=b?b.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var h=new u,p=[];l.prototype.intersectWorld=function(z,b){return this.mode=b.mode||l.ANY,this.result=b.result||new c,this.skipBackfaces=!!b.skipBackfaces,this.collisionFilterMask=typeof b.collisionFilterMask<"u"?b.collisionFilterMask:-1,this.collisionFilterGroup=typeof b.collisionFilterGroup<"u"?b.collisionFilterGroup:-1,b.from&&this.from.copy(b.from),b.to&&this.to.copy(b.to),this.callback=b.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(h),p.length=0,z.broadphase.aabbQuery(z,h,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(z,b,R,H){H.vsub(b,$),R.vsub(b,v),z.vsub(b,g);var K=$.dot($),et=$.dot(v),k=$.dot(g),it=v.dot(v),mt=v.dot(g),St,Et;return(St=it*k-et*mt)>=0&&(Et=K*mt-et*k)>=0&&St+Et<K*it-et*et}var d=new r,x=new s;l.prototype.intersectBody=function(z,b){b&&(this.result=b,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!z.collisionResponse)&&!(!(this.collisionFilterGroup&z.collisionFilterMask)||!(z.collisionFilterGroup&this.collisionFilterMask)))for(var H=d,K=x,et=0,k=z.shapes.length;et<k;et++){var it=z.shapes[et];if(!(R&&!it.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[et],K),z.quaternion.vmult(z.shapeOffsets[et],H),H.vadd(z.position,H),this.intersectShape(it,K,H,z),this.result._shouldStop))break}},l.prototype.intersectBodies=function(z,b){b&&(this.result=b,this._updateDirection());for(var R=0,H=z.length;!this.result._shouldStop&&R<H;R++)this.intersectBody(z[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(z,b,R,H){var K=this.from,et=j(K,this._direction,R);if(!(et>z.boundingSphereRadius)){var k=this[z.type];k&&k.call(this,z,b,R,H)}},new r,new r;var M=new r,_=new r,A=new r,P=new r;new r,new c,l.prototype.intersectBox=function(z,b,R,H){return this.intersectConvex(z.convexPolyhedronRepresentation,b,R,H)},l.prototype[f.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(z,b,R,H){var K=this.from,et=this.to,k=this._direction,it=new r(0,0,1);b.vmult(it,it);var mt=new r;K.vsub(R,mt);var St=mt.dot(it);et.vsub(R,mt);var Et=mt.dot(it);if(!(St*Et>0)&&!(K.distanceTo(et)<St)){var D=it.dot(k);if(!(Math.abs(D)<this.precision)){var dt=new r,ht=new r,Xt=new r;K.vsub(R,dt);var xt=-it.dot(dt)/D;k.scale(xt,ht),K.vadd(ht,Xt),this.reportIntersection(it,Xt,z,H,-1)}}},l.prototype[f.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(z){var b=this.to,R=this.from;z.lowerBound.x=Math.min(b.x,R.x),z.lowerBound.y=Math.min(b.y,R.y),z.lowerBound.z=Math.min(b.z,R.z),z.upperBound.x=Math.max(b.x,R.x),z.upperBound.y=Math.max(b.y,R.y),z.upperBound.z=Math.max(b.z,R.z)};var U={faceList:[0]};l.prototype.intersectHeightfield=function(z,b,R,H){z.data,z.elementSize;var K=new r,et=new l(this.from,this.to);o.pointToLocalFrame(R,b,et.from,et.from),o.pointToLocalFrame(R,b,et.to,et.to);var k=[],it=null,mt=null,St=null,Et=null,D=z.getIndexOfPosition(et.from.x,et.from.y,k,!1);if(D&&(it=k[0],mt=k[1],St=k[0],Et=k[1]),D=z.getIndexOfPosition(et.to.x,et.to.y,k,!1),D&&((it===null||k[0]<it)&&(it=k[0]),(St===null||k[0]>St)&&(St=k[0]),(mt===null||k[1]<mt)&&(mt=k[1]),(Et===null||k[1]>Et)&&(Et=k[1])),it!==null){var dt=[];z.getRectMinMax(it,mt,St,Et,dt),dt[0],dt[1];for(var ht=it;ht<=St;ht++)for(var Xt=mt;Xt<=Et;Xt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(ht,Xt,!1),o.pointToWorldFrame(R,b,z.pillarOffset,K),this.intersectConvex(z.pillarConvex,b,K,H,U),this.result._shouldStop))return;z.getConvexTrianglePillar(ht,Xt,!0),o.pointToWorldFrame(R,b,z.pillarOffset,K),this.intersectConvex(z.pillarConvex,b,K,H,U)}}},l.prototype[f.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var L=new r,E=new r;l.prototype.intersectSphere=function(z,b,R,H){var K=this.from,et=this.to,k=z.radius,it=Math.pow(et.x-K.x,2)+Math.pow(et.y-K.y,2)+Math.pow(et.z-K.z,2),mt=2*((et.x-K.x)*(K.x-R.x)+(et.y-K.y)*(K.y-R.y)+(et.z-K.z)*(K.z-R.z)),St=Math.pow(K.x-R.x,2)+Math.pow(K.y-R.y,2)+Math.pow(K.z-R.z,2)-Math.pow(k,2),Et=Math.pow(mt,2)-4*it*St,D=L,dt=E;if(!(Et<0))if(Et===0)K.lerp(et,Et,D),D.vsub(R,dt),dt.normalize(),this.reportIntersection(dt,D,z,H,-1);else{var ht=(-mt-Math.sqrt(Et))/(2*it),Xt=(-mt+Math.sqrt(Et))/(2*it);if(ht>=0&&ht<=1&&(K.lerp(et,ht,D),D.vsub(R,dt),dt.normalize(),this.reportIntersection(dt,D,z,H,-1)),this.result._shouldStop)return;Xt>=0&&Xt<=1&&(K.lerp(et,Xt,D),D.vsub(R,dt),dt.normalize(),this.reportIntersection(dt,D,z,H,-1))}},l.prototype[f.types.SPHERE]=l.prototype.intersectSphere;var y=new r;new r,new r;var T=new r;l.prototype.intersectConvex=function(b,R,H,K,et){for(var k=y,it=T,mt=et&&et.faceList||null,St=b.faces,Et=b.vertices,D=b.faceNormals,dt=this._direction,ht=this.from,Xt=this.to,xt=ht.distanceTo(Xt),ne=mt?mt.length:St.length,vt=this.result,C=0;!vt._shouldStop&&C<ne;C++){var S=mt?mt[C]:C,Y=St[S],ct=D[S],ut=R,ot=H;it.copy(Et[Y[0]]),ut.vmult(it,it),it.vadd(ot,it),it.vsub(ht,it),ut.vmult(ct,k);var wt=dt.dot(k);if(!(Math.abs(wt)<this.precision)){var Tt=k.dot(it)/wt;if(!(Tt<0)){dt.mult(Tt,M),M.vadd(ht,M),_.copy(Et[Y[0]]),ut.vmult(_,_),ot.vadd(_,_);for(var Ft=1;!vt._shouldStop&&Ft<Y.length-1;Ft++){A.copy(Et[Y[Ft]]),P.copy(Et[Y[Ft+1]]),ut.vmult(A,A),ut.vmult(P,P),ot.vadd(A,A),ot.vadd(P,P);var le=M.distanceTo(ht);!(m(M,_,A,P)||m(M,A,_,P))||le>xt||this.reportIntersection(k,M,b,K,S)}}}}},l.prototype[f.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var B=new r,N=new r,X=new r,q=new r,J=new r,O=new r;new u;var I=[],Q=new o;l.prototype.intersectTrimesh=function(b,R,H,K,et){var k=B,it=I,mt=Q,St=T,Et=N,D=X,dt=q,ht=O,Xt=J;et&&et.faceList;var xt=b.indices;b.vertices,b.faceNormals;var ne=this.from,vt=this.to,C=this._direction;mt.position.copy(H),mt.quaternion.copy(R),o.vectorToLocalFrame(H,R,C,Et),o.pointToLocalFrame(H,R,ne,D),o.pointToLocalFrame(H,R,vt,dt);var S=D.distanceSquared(dt);b.tree.rayQuery(this,mt,it);for(var Y=0,ct=it.length;!this.result._shouldStop&&Y!==ct;Y++){var ut=it[Y];b.getNormal(ut,k),b.getVertex(xt[ut*3],_),_.vsub(D,St);var ot=Et.dot(k),wt=k.dot(St)/ot;if(!(wt<0)){Et.scale(wt,M),M.vadd(D,M),b.getVertex(xt[ut*3+1],A),b.getVertex(xt[ut*3+2],P);var Tt=M.distanceSquared(D);!(m(M,A,_,P)||m(M,_,A,P))||Tt>S||(o.vectorToWorldFrame(R,k,Xt),o.pointToWorldFrame(H,R,M,ht),this.reportIntersection(Xt,ht,b,K,ut))}}it.length=0},l.prototype[f.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(z,b,R,H,K){var et=this.from,k=this.to,it=et.distanceTo(b),mt=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(mt.hitFaceIndex=typeof K<"u"?K:-1,this.mode){case l.ALL:this.hasHit=!0,mt.set(et,k,z,b,R,H,it),mt.hasHit=!0,this.callback(mt);break;case l.CLOSEST:(it<mt.distance||!mt.hasHit)&&(this.hasHit=!0,mt.hasHit=!0,mt.set(et,k,z,b,R,H,it));break;case l.ANY:this.hasHit=!0,mt.hasHit=!0,mt.set(et,k,z,b,R,H,it),mt._shouldStop=!0;break}};var $=new r,F=new r;function j(z,b,R){R.vsub(z,$);var H=$.dot(b);b.mult(H,F),F.vadd(z,F);var K=R.distanceTo(F);return K}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,c,f,u,l,h,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(f),this.hitPointWorld.copy(u),this.shape=l,this.body=h,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(f){c.push(f.body)},this._removeBodyHandler=function(f){var u=c.indexOf(f.body);u!==-1&&c.splice(u,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var c=1,f=o.length;c<f;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=u.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=u}return o},s.insertionSortY=function(o){for(var c=1,f=o.length;c<f;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=u.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=u}return o},s.insertionSortZ=function(o){for(var c=1,f=o.length;c<f;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=u.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=u}return o},s.prototype.collisionPairs=function(o,c,f){var u=this.axisList,l=u.length,h=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=u[p];for(v=p+1;v<l;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,h))break;this.intersectionTest(g,m,c,f)}}}},s.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,f=o.length,u=0;u!==f;u++){var l=o[u];l.aabbNeedsUpdate&&l.computeAABB()}c===0?s.insertionSortX(o):c===1?s.insertionSortY(o):c===2&&s.insertionSortZ(o)},s.checkBounds=function(o,c,f){var u,l;f===0?(u=o.position.x,l=c.position.x):f===1?(u=o.position.y,l=c.position.y):f===2&&(u=o.position.z,l=c.position.z);var h=o.boundingRadius,p=c.boundingRadius,v=u+h,g=l-p;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,c=0,f=0,u=0,l=0,h=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var d=p[m],x=d.position.x;o+=x,c+=x*x;var M=d.position.y;f+=M,u+=M*M;var _=d.position.z;l+=_,h+=_*_}var A=c-o*o*g,P=u-f*f*g,U=h-l*l*g;A>P?A>U?this.axisIndex=0:this.axisIndex=2:P>U?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,c,f){f=f||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,l="x";u===1&&(l="y"),u===2&&(l="z");var h=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<h.length;p++){var v=h[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&f.push(v)}return f}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=f,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function f(u,l,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6,v=h.pivotA?h.pivotA.clone():new c,g=h.pivotB?h.pivotB.clone():new c;this.axisA=h.axisA?h.axisA.clone():new c,this.axisB=h.axisB?h.axisB.clone():new c,r.call(this,u,v,l,g,p),this.collideConnected=!!h.collideConnected,this.angle=typeof h.angle<"u"?h.angle:0;var m=this.coneEquation=new s(u,l,h),d=this.twistEquation=new o(u,l,h);this.twistAngle=typeof h.twistAngle<"u"?h.twistAngle:0,m.maxForce=0,m.minForce=-p,d.maxForce=0,d.minForce=-p,this.equations.push(m,d)}f.prototype=new r,f.constructor=f,new c,new c,f.prototype.update=function(){var u=this.bodyA,l=this.bodyB,h=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,h.axisA),l.vectorToWorldFrame(this.axisB,h.axisB),this.axisA.tangents(p.axisA,p.axisA),u.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),h.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,c,f){f=r.defaults(f,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=s.idCounter++,this.collideConnected=f.collideConnected,f.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(c,f,u,l){r.call(this,c,f),typeof u>"u"&&(u=c.position.distanceTo(f.position)),typeof l>"u"&&(l=1e6),this.distance=u;var h=this.distanceEquation=new s(c,f);this.equations.push(h),h.minForce=-l,h.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,f=this.bodyB,u=this.distanceEquation,l=this.distance*.5,h=u.ni;f.position.vsub(c.position,h),h.normalize(),h.mult(l,u.ri),h.mult(-l,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=f,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function f(h,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,d=v.pivotB?v.pivotB.clone():new c;r.call(this,h,m,p,d,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var M=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);M.normalize();var _=this.rotationalEquation1=new s(h,p,v),A=this.rotationalEquation2=new s(h,p,v),P=this.motorEquation=new o(h,p,g);P.enabled=!1,this.equations.push(_,A,P)}f.prototype=new r,f.constructor=f,f.prototype.enableMotor=function(){this.motorEquation.enabled=!0},f.prototype.disableMotor=function(){this.motorEquation.enabled=!1},f.prototype.setMotorSpeed=function(h){this.motorEquation.targetVelocity=h},f.prototype.setMotorMaxForce=function(h){this.motorEquation.maxForce=h,this.motorEquation.minForce=-h};var u=new c,l=new c;f.prototype.update=function(){var h=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,d=u,x=l,M=this.axisA,_=this.axisB;r.prototype.update.call(this),h.quaternion.vmult(M,d),p.quaternion.vmult(_,x),d.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(h.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(f,u,l){l=l||{};var h=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;f.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),f.pointToLocalFrame(g,p),r.call(this,f,p,u,v,h);var m=this.rotationalEquation1=new s(f,u,l),d=this.rotationalEquation2=new s(f,u,l),x=this.rotationalEquation3=new s(f,u,l);this.equations.push(m,d,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var f=this.bodyA,u=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,h=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),f.vectorToWorldFrame(o.UNIT_X,l.axisA),u.vectorToWorldFrame(o.UNIT_Y,l.axisB),f.vectorToWorldFrame(o.UNIT_Y,h.axisA),u.vectorToWorldFrame(o.UNIT_Z,h.axisB),f.vectorToWorldFrame(o.UNIT_Z,p.axisA),u.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(f,u,l,h,p){r.call(this,f,l),p=typeof p<"u"?p:1e6,this.pivotA=u?u.clone():new o,this.pivotB=h?h.clone():new o;var v=this.equationX=new s(f,l),g=this.equationY=new s(f,l),m=this.equationZ=new s(f,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var f=this.bodyA,u=this.bodyB,l=this.equationX,h=this.equationY,p=this.equationZ;f.quaternion.vmult(this.pivotA,l.ri),u.quaternion.vmult(this.pivotB,l.rj),h.ri.copy(l.ri),h.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(u,l,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6;s.call(this,u,l,-p,p),this.axisA=h.axisA?h.axisA.clone():new r(1,0,0),this.axisB=h.axisB?h.axisB.clone():new r(0,1,0),this.angle=typeof h.angle<"u"?h.angle:0}o.prototype=new s,o.prototype.constructor=o;var c=new r,f=new r;o.prototype.computeB=function(u){var l=this.a,h=this.b,p=this.axisA,v=this.axisB,g=c,m=f,d=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.angle)-p.dot(v),_=this.computeGW(),A=this.computeGiMf(),P=-M*l-_*h-u*A;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,d,x){x=typeof x<"u"?x:1e6,r.call(this,m,d,0,x),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,f=new s,u=new s;o.prototype.computeB=function(m){var d=this.a,x=this.b,M=this.bi,_=this.bj,A=this.ri,P=this.rj,U=c,L=f,E=M.velocity,y=M.angularVelocity;M.force,M.torque;var T=_.velocity,B=_.angularVelocity;_.force,_.torque;var N=u,X=this.jacobianElementA,q=this.jacobianElementB,J=this.ni;A.cross(J,U),P.cross(J,L),J.negate(X.spatial),U.negate(X.rotational),q.spatial.copy(J),q.rotational.copy(L),N.copy(_.position),N.vadd(P,N),N.vsub(M.position,N),N.vsub(A,N);var O=J.dot(N),I=this.restitution+1,Q=I*T.dot(J)-I*E.dot(J)+B.dot(L)-y.dot(U),$=this.computeGiMf(),F=-O*d-Q*x-m*$;return F};var l=new s,h=new s,p=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,d=h,x=p,M=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,M),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(M,d),m.vsub(d,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,d,x){this.id=o.id++,this.minForce=typeof d>"u"?-1e6:d,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,d){var x=m,M=g,_=d;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*M*(1+4*x))},o.prototype.computeB=function(g,m,d){var x=this.computeGW(),M=this.computeGq(),_=this.computeGiMf();return-M*g-x*m-_*d},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,M=d.position,_=x.position;return g.spatial.dot(M)+m.spatial.dot(_)};var c=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,M=d.velocity,_=x.velocity,A=d.angularVelocity||c,P=x.angularVelocity||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,P)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,M=d.vlambda,_=x.vlambda,A=d.wlambda||c,P=x.wlambda||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,P)};var f=new s,u=new s,l=new s,h=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,M=d.force,_=d.torque,A=x.force,P=x.torque,U=d.invMassSolve,L=x.invMassSolve;return d.invInertiaWorldSolve?d.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(P,h):h.set(0,0,0),M.mult(U,f),A.mult(L,u),g.multiplyVectors(f,l)+m.multiplyVectors(u,h)};var p=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,x=this.bj,M=d.invMassSolve,_=x.invMassSolve,A=d.invInertiaWorldSolve,P=x.invInertiaWorldSolve,U=M+_;return A&&(A.vmult(g.rotational,p),U+=p.dot(g.rotational)),P&&(P.vmult(m.rotational,p),U+=p.dot(m.rotational)),U};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,d=this.jacobianElementB,x=this.bi,M=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),d.spatial.mult(M.invMassSolve*g,_),M.vlambda.vadd(_,M.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),M.invInertiaWorldSolve&&(M.invInertiaWorldSolve.vmult(d.rotational,_),_.mult(g,_),M.wlambda.vadd(_,M.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(u,l,h){r.call(this,u,l,-h,h),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,f=new s;o.prototype.computeB=function(u){this.a;var l=this.b;this.bi,this.bj;var h=this.ri,p=this.rj,v=c,g=f,m=this.t;h.cross(m,v),p.cross(m,g);var d=this.jacobianElementA,x=this.jacobianElementB;m.negate(d.spatial),v.negate(d.rotational),x.spatial.copy(m),x.rotational.copy(g);var M=this.computeGW(),_=this.computeGiMf(),A=-M*l-u*_;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(u,l,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6;s.call(this,u,l,-p,p),this.axisA=h.axisA?h.axisA.clone():new r(1,0,0),this.axisB=h.axisB?h.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var c=new r,f=new r;o.prototype.computeB=function(u){var l=this.a,h=this.b,p=this.axisA,v=this.axisB,g=c,m=f,d=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.maxAngle)-p.dot(v),_=this.computeGW(),A=this.computeGiMf(),P=-M*l-_*h-u*A;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,f,u){u=typeof u<"u"?u:1e6,s.call(this,c,f,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var f=this.b;this.bi,this.bj;var u=this.axisA,l=this.axisB,h=this.jacobianElementA,p=this.jacobianElementB;h.rotational.copy(u),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*f-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,c,f){f=r.defaults(f,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,c],this.friction=f.friction,this.restitution=f.restitution,this.contactEquationStiffness=f.contactEquationStiffness,this.contactEquationRelaxation=f.contactEquationRelaxation,this.frictionEquationStiffness=f.frictionEquationStiffness,this.frictionEquationRelaxation=f.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},s.prototype.getTrace=function(c){var c=c||new r,f=this.elements;c.x=f[0],c.y=f[4],c.z=f[8]},s.prototype.vmult=function(o,c){c=c||new r;var f=this.elements,u=o.x,l=o.y,h=o.z;return c.x=f[0]*u+f[1]*l+f[2]*h,c.y=f[3]*u+f[4]*l+f[5]*h,c.z=f[6]*u+f[7]*l+f[8]*h,c},s.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},s.prototype.mmult=function(o,c){for(var f=c||new s,u=0;u<3;u++)for(var l=0;l<3;l++){for(var h=0,p=0;p<3;p++)h+=o.elements[u+p*3]*this.elements[p+l*3];f.elements[u+l*3]=h}return f},s.prototype.scale=function(o,c){c=c||new s;for(var f=this.elements,u=c.elements,l=0;l!==3;l++)u[3*l+0]=o.x*f[3*l+0],u[3*l+1]=o.y*f[3*l+1],u[3*l+2]=o.z*f[3*l+2];return c},s.prototype.solve=function(o,c){c=c||new r;for(var f=3,u=4,l=[],h=0;h<f*u;h++)l.push(0);var h,p;for(h=0;h<3;h++)for(p=0;p<3;p++)l[h+u*p]=this.elements[h+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,d=4,x;do{if(h=g-v,l[h+u*h]===0){for(p=h+1;p<g;p++)if(l[h+u*p]!==0){m=d;do x=d-m,l[x+u*h]+=l[x+u*p];while(--m);break}}if(l[h+u*h]!==0)for(p=h+1;p<g;p++){var M=l[h+u*p]/l[h+u*h];m=d;do x=d-m,l[x+u*p]=x<=h?0:l[x+u*p]-l[x+u*h]*M;while(--m)}}while(--v);if(c.z=l[2*u+3]/l[2*u+2],c.y=(l[1*u+3]-l[1*u+2]*c.z)/l[1*u+1],c.x=(l[0*u+3]-l[0*u+2]*c.z-l[0*u+1]*c.y)/l[0*u+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},s.prototype.e=function(o,c,f){if(f===void 0)return this.elements[c+3*o];this.elements[c+3*o]=f},s.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},s.prototype.toString=function(){for(var o="",c=",",f=0;f<9;f++)o+=this.elements[f]+c;return o},s.prototype.reverse=function(o){o=o||new s;for(var c=3,f=6,u=[],l=0;l<c*f;l++)u.push(0);var l,h;for(l=0;l<3;l++)for(h=0;h<3;h++)u[l+f*h]=this.elements[l+3*h];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var p=3,v=p,g,m=f,d;do{if(l=v-p,u[l+f*l]===0){for(h=l+1;h<v;h++)if(u[l+f*h]!==0){g=m;do d=m-g,u[d+f*l]+=u[d+f*h];while(--g);break}}if(u[l+f*l]!==0)for(h=l+1;h<v;h++){var x=u[l+f*h]/u[l+f*l];g=m;do d=m-g,u[d+f*h]=d<=l?0:u[d+f*h]-u[d+f*l]*x;while(--g)}}while(--p);l=2;do{h=l-1;do{var x=u[l+f*h]/u[l+f*l];g=f;do d=f-g,u[d+f*h]=u[d+f*h]-u[d+f*l]*x;while(--g)}while(h--)}while(--l);l=2;do{var x=1/u[l+f*l];g=f;do d=f-g,u[d+f*l]=u[d+f*l]*x;while(--g)}while(l--);l=2;do{h=2;do{if(d=u[c+h+f*l],isNaN(d)||d===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,h,d)}while(h--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var c=o.x,f=o.y,u=o.z,l=o.w,h=c+c,p=f+f,v=u+u,g=c*h,m=c*p,d=c*v,x=f*p,M=f*v,_=u*v,A=l*h,P=l*p,U=l*v,L=this.elements;return L[3*0+0]=1-(x+_),L[3*0+1]=m-U,L[3*0+2]=d+P,L[3*1+0]=m+U,L[3*1+1]=1-(g+_),L[3*1+2]=M-A,L[3*2+0]=d-P,L[3*2+1]=M+A,L[3*2+2]=1-(g+x),this},s.prototype.transpose=function(o){o=o||new s;for(var c=o.elements,f=this.elements,u=0;u!==3;u++)for(var l=0;l!==3;l++)c[3*u+l]=f[3*l+u];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(h,p,v,g){this.x=h!==void 0?h:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(h,p,v,g){this.x=h,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(h,p){var v=Math.sin(p*.5);this.x=h.x*v,this.y=h.y*v,this.z=h.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(h){h=h||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(h.x=this.x,h.y=this.y,h.z=this.z):(h.x=this.x/v,h.y=this.y/v,h.z=this.z/v),[h,p]};var o=new r,c=new r;s.prototype.setFromVectors=function(h,p){if(h.isAntiparallelTo(p)){var v=o,g=c;h.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=h.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(h.norm(),2)*Math.pow(p.norm(),2))+h.dot(p),this.normalize()}};var f=new r,u=new r,l=new r;s.prototype.mult=function(h,p){p=p||new s;var v=this.w,g=f,m=u,d=l;return g.set(this.x,this.y,this.z),m.set(h.x,h.y,h.z),p.w=v*h.w-g.dot(m),g.cross(m,d),p.x=v*m.x+h.w*g.x+d.x,p.y=v*m.y+h.w*g.y+d.y,p.z=v*m.z+h.w*g.z+d.z,p},s.prototype.inverse=function(h){var p=this.x,v=this.y,g=this.z,m=this.w;h=h||new s,this.conjugate(h);var d=1/(p*p+v*v+g*g+m*m);return h.x*=d,h.y*=d,h.z*=d,h.w*=d,h},s.prototype.conjugate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h.w=this.w,h},s.prototype.normalize=function(){var h=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);h===0?(this.x=0,this.y=0,this.z=0,this.w=0):(h=1/h,this.x*=h,this.y*=h,this.z*=h,this.w*=h)},s.prototype.normalizeFast=function(){var h=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;h===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=h,this.y*=h,this.z*=h,this.w*=h)},s.prototype.vmult=function(h,p){p=p||new r;var v=h.x,g=h.y,m=h.z,d=this.x,x=this.y,M=this.z,_=this.w,A=_*v+x*m-M*g,P=_*g+M*v-d*m,U=_*m+d*g-x*v,L=-d*v-x*g-M*m;return p.x=A*_+L*-d+P*-M-U*-x,p.y=P*_+L*-x+U*-d-A*-M,p.z=U*_+L*-M+A*-x-P*-d,p},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this.w=h.w,this},s.prototype.toEuler=function(h,p){p=p||"YZX";var v,g,m,d=this.x,x=this.y,M=this.z,_=this.w;switch(p){case"YZX":var A=d*x+M*_;if(A>.499&&(v=2*Math.atan2(d,_),g=Math.PI/2,m=0),A<-.499&&(v=-2*Math.atan2(d,_),g=-Math.PI/2,m=0),isNaN(v)){var P=d*d,U=x*x,L=M*M;v=Math.atan2(2*x*_-2*d*M,1-2*U-2*L),g=Math.asin(2*A),m=Math.atan2(2*d*_-2*x*M,1-2*P-2*L)}break;default:throw new Error("Euler order "+p+" not supported yet.")}h.y=v,h.z=g,h.x=m},s.prototype.setFromEuler=function(h,p,v,g){g=g||"XYZ";var m=Math.cos(h/2),d=Math.cos(p/2),x=Math.cos(v/2),M=Math.sin(h/2),_=Math.sin(p/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=M*d*x+m*_*A,this.y=m*_*x-M*d*A,this.z=m*d*A+M*_*x,this.w=m*d*x-M*_*A):g==="YXZ"?(this.x=M*d*x+m*_*A,this.y=m*_*x-M*d*A,this.z=m*d*A-M*_*x,this.w=m*d*x+M*_*A):g==="ZXY"?(this.x=M*d*x-m*_*A,this.y=m*_*x+M*d*A,this.z=m*d*A+M*_*x,this.w=m*d*x-M*_*A):g==="ZYX"?(this.x=M*d*x-m*_*A,this.y=m*_*x+M*d*A,this.z=m*d*A-M*_*x,this.w=m*d*x+M*_*A):g==="YZX"?(this.x=M*d*x+m*_*A,this.y=m*_*x+M*d*A,this.z=m*d*A-M*_*x,this.w=m*d*x-M*_*A):g==="XZY"&&(this.x=M*d*x-m*_*A,this.y=m*_*x-M*d*A,this.z=m*d*A+M*_*x,this.w=m*d*x+M*_*A),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(f){f=f||{},this.position=new r,f.position&&this.position.copy(f.position),this.quaternion=new s,f.quaternion&&this.quaternion.copy(f.quaternion)}var c=new s;o.pointToLocalFrame=function(f,u,l,p){var p=p||new r;return l.vsub(f,p),u.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(f,u){return o.pointToLocalFrame(this.position,this.quaternion,f,u)},o.pointToWorldFrame=function(f,u,l,p){var p=p||new r;return u.vmult(l,p),p.vadd(f,p),p},o.prototype.pointToWorld=function(f,u){return o.pointToWorldFrame(this.position,this.quaternion,f,u)},o.prototype.vectorToWorldFrame=function(f,l){var l=l||new r;return this.quaternion.vmult(f,l),l},o.vectorToWorldFrame=function(f,u,l){return f.vmult(u,l),l},o.vectorToLocalFrame=function(f,u,l,p){var p=p||new r;return u.w*=-1,u.vmult(l,p),u.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(u,l,h){this.x=u||0,this.y=l||0,this.z=h||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,l){var h=u.x,p=u.y,v=u.z,g=this.x,m=this.y,d=this.z;return l=l||new s,l.x=m*v-d*p,l.y=d*h-g*v,l.z=g*p-m*h,l},s.prototype.set=function(u,l,h){return this.x=u,this.y=l,this.z=h,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,l){if(l)l.x=u.x+this.x,l.y=u.y+this.y,l.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,l){if(l)l.x=this.x-u.x,l.y=this.y-u.y,l.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,l=this.y,h=this.z,p=Math.sqrt(u*u+l*l+h*h);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(u){u=u||new s;var l=this.x,h=this.y,p=this.z,v=Math.sqrt(l*l+h*h+p*p);return v>0?(v=1/v,u.x=l*v,u.y=h*v,u.z=p*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,l=this.y,h=this.z;return Math.sqrt(u*u+l*l+h*h)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var l=this.x,h=this.y,p=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-l)*(v-l)+(g-h)*(g-h)+(m-p)*(m-p))},s.prototype.distanceSquared=function(u){var l=this.x,h=this.y,p=this.z,v=u.x,g=u.y,m=u.z;return(v-l)*(v-l)+(g-h)*(g-h)+(m-p)*(m-p)},s.prototype.mult=function(u,l){l=l||new s;var h=this.x,p=this.y,v=this.z;return l.x=u*h,l.y=u*p,l.z=u*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new s,c=new s;s.prototype.tangents=function(u,l){var h=this.norm();if(h>0){var p=o,v=1/h;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,u)):(g.set(0,1,0),p.cross(g,u)),p.cross(u,l)}else u.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,l,h){var p=this.x,v=this.y,g=this.z;h.x=p+(u.x-p)*l,h.y=v+(u.y-v)*l,h.z=g+(u.z-g)*l},s.prototype.almostEquals=function(u,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-u.x)>l||Math.abs(this.y-u.y)>l||Math.abs(this.z-u.z)>l)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var f=new s;s.prototype.isAntiparallelTo=function(u,l){return this.negate(f),f.almostEquals(u,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var f=e("../collision/AABB"),u=e("../shapes/Box");function l(T){T=T||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof T.collisionFilterGroup=="number"?T.collisionFilterGroup:1,this.collisionFilterMask=typeof T.collisionFilterMask=="number"?T.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,T.position&&this.position.copy(T.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,T.velocity&&this.velocity.copy(T.velocity),this.initVelocity=new s,this.force=new s;var B=typeof T.mass=="number"?T.mass:0;this.mass=B,this.invMass=B>0?1/B:0,this.material=T.material||null,this.linearDamping=typeof T.linearDamping=="number"?T.linearDamping:.01,this.type=B<=0?l.STATIC:l.DYNAMIC,typeof T.type==typeof l.STATIC&&(this.type=T.type),this.allowSleep=typeof T.allowSleep<"u"?T.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof T.sleepSpeedLimit<"u"?T.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof T.sleepTimeLimit<"u"?T.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new c,T.quaternion&&this.quaternion.copy(T.quaternion),this.initQuaternion=new c,this.angularVelocity=new s,T.angularVelocity&&this.angularVelocity.copy(T.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof T.fixedRotation<"u"?T.fixedRotation:!1,this.angularDamping=typeof T.angularDamping<"u"?T.angularDamping:.01,this.aabb=new f,this.aabbNeedsUpdate=!0,this.wlambda=new s,T.shape&&this.addShape(T.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var T=this.sleepState;this.sleepState=0,T===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(T){if(this.allowSleep){var B=this.sleepState,N=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);B===l.AWAKE&&N<X?(this.sleepState=l.SLEEPY,this.timeLastSleepy=T,this.dispatchEvent(l.sleepyEvent)):B===l.SLEEPY&&N>X?this.wakeUp():B===l.SLEEPY&&T-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(T,N){var N=N||new s;return T.vsub(this.position,N),this.quaternion.conjugate().vmult(N,N),N},l.prototype.vectorToLocalFrame=function(T,N){var N=N||new s;return this.quaternion.conjugate().vmult(T,N),N},l.prototype.pointToWorldFrame=function(T,N){var N=N||new s;return this.quaternion.vmult(T,N),N.vadd(this.position,N),N},l.prototype.vectorToWorldFrame=function(T,N){var N=N||new s;return this.quaternion.vmult(T,N),N};var h=new s,p=new c;l.prototype.addShape=function(T,B,N){var X=new s,q=new c;return B&&X.copy(B),N&&q.copy(N),this.shapes.push(T),this.shapeOffsets.push(X),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var T=this.shapes,B=this.shapeOffsets,N=T.length,X=0,q=0;q!==N;q++){var J=T[q];J.updateBoundingSphereRadius();var O=B[q].norm(),I=J.boundingSphereRadius;O+I>X&&(X=O+I)}this.boundingRadius=X};var v=new f;l.prototype.computeAABB=function(){for(var T=this.shapes,B=this.shapeOffsets,N=this.shapeOrientations,X=T.length,q=h,J=p,O=this.quaternion,I=this.aabb,Q=v,$=0;$!==X;$++){var F=T[$];N[$].mult(O,J),J.vmult(B[$],q),q.vadd(this.position,q),F.calculateWorldAABB(q,J,Q.lowerBound,Q.upperBound),$===0?I.copy(Q):I.extend(Q)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(T){var B=this.invInertia;if(!(B.x===B.y&&B.y===B.z&&!T)){var N=g,X=m;N.setRotationFromQuaternion(this.quaternion),N.transpose(X),N.scale(B,N),N.mmult(X,this.invInertiaWorld)}};var d=new s,x=new s;l.prototype.applyForce=function(T,B){if(this.type===l.DYNAMIC){var N=d;B.vsub(this.position,N);var X=x;N.cross(T,X),this.force.vadd(T,this.force),this.torque.vadd(X,this.torque)}};var M=new s,_=new s;l.prototype.applyLocalForce=function(T,B){if(this.type===l.DYNAMIC){var N=M,X=_;this.vectorToWorldFrame(T,N),this.pointToWorldFrame(B,X),this.applyForce(N,X)}};var A=new s,P=new s,U=new s;l.prototype.applyImpulse=function(T,B){if(this.type===l.DYNAMIC){var N=A;B.vsub(this.position,N);var X=P;X.copy(T),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var q=U;N.cross(T,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var L=new s,E=new s;l.prototype.applyLocalImpulse=function(T,B){if(this.type===l.DYNAMIC){var N=L,X=E;this.vectorToWorldFrame(T,N),this.pointToWorldFrame(B,X),this.applyImpulse(N,X)}};var y=new s;l.prototype.updateMassProperties=function(){var T=y;this.invMass=this.mass>0?1/this.mass:0;var B=this.inertia,N=this.fixedRotation;this.computeAABB(),T.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(T,this.mass,B),this.invInertia.set(B.x>0&&!N?1/B.x:0,B.y>0&&!N?1/B.y:0,B.z>0&&!N?1/B.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(T,B){var N=new s;return T.vsub(this.position,N),this.angularVelocity.cross(N,B),this.velocity.vadd(B,B),B}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=f;function f(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new r,new r,new r;var u=new r,l=new r,h=new r;new o,f.prototype.addWheel=function(O){O=O||{};var I=new c(O),Q=this.wheelInfos.length;return this.wheelInfos.push(I),Q},f.prototype.setSteeringValue=function(O,I){var Q=this.wheelInfos[I];Q.steering=O},new r,f.prototype.applyEngineForce=function(O,I){this.wheelInfos[I].engineForce=O},f.prototype.setBrake=function(O,I){this.wheelInfos[I].brake=O},f.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var I=this;this.preStepCallback=function(){I.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},f.prototype.getVehicleAxisWorld=function(O,I){I.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(I,I)},f.prototype.updateVehicle=function(O){for(var I=this.wheelInfos,Q=I.length,$=this.chassisBody,F=0;F<Q;F++)this.updateWheelTransform(F);this.currentVehicleSpeedKmHour=3.6*$.velocity.norm();var j=new r;this.getVehicleAxisWorld(this.indexForwardAxis,j),j.dot($.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var F=0;F<Q;F++)this.castRay(I[F]);this.updateSuspension(O);for(var z=new r,b=new r,F=0;F<Q;F++){var R=I[F],H=R.suspensionForce;H>R.maxSuspensionForce&&(H=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(H*O,z),R.raycastResult.hitPointWorld.vsub($.position,b),$.applyImpulse(z,R.raycastResult.hitPointWorld)}this.updateFriction(O);var K=new r,et=new r,k=new r;for(F=0;F<Q;F++){var R=I[F];$.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,k);var it=1;switch(this.indexUpAxis){case 1:it=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var mt=et.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(mt,K),et.vsub(K,et);var St=et.dot(k);R.deltaRotation=it*St*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},f.prototype.updateSuspension=function(O){for(var I=this.chassisBody,Q=I.mass,$=this.wheelInfos,F=$.length,j=0;j<F;j++){var z=$[j];if(z.isInContact){var b,R=z.suspensionRestLength,H=z.suspensionLength,K=R-H;b=z.suspensionStiffness*K*z.clippedInvContactDotSuspension;var et=z.suspensionRelativeVelocity,k;et<0?k=z.dampingCompression:k=z.dampingRelaxation,b-=k*et,z.suspensionForce=b*Q,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},f.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;f.prototype.castRay=function(O){var I=p,Q=v;this.updateWheelTransformWorld(O);var $=this.chassisBody,F=-1,j=O.suspensionRestLength+O.radius;O.directionWorld.scale(j,I);var z=O.chassisConnectionPointWorld;z.vadd(I,Q);var b=O.raycastResult;b.reset();var R=$.collisionResponse;$.collisionResponse=!1,this.world.rayTest(z,Q,b),$.collisionResponse=R;var H=b.body;if(O.raycastResult.groundObject=0,H){F=b.distance,O.raycastResult.hitNormalWorld=b.hitNormalWorld,O.isInContact=!0;var K=b.distance;O.suspensionLength=K-O.radius;var et=O.suspensionRestLength-O.maxSuspensionTravel,k=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<et&&(O.suspensionLength=et),O.suspensionLength>k&&(O.suspensionLength=k,O.raycastResult.reset());var it=O.raycastResult.hitNormalWorld.dot(O.directionWorld),mt=new r;$.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,mt);var St=O.raycastResult.hitNormalWorld.dot(mt);if(it>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var Et=-1/it;O.suspensionRelativeVelocity=St*Et,O.clippedInvContactDotSuspension=Et}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return F},f.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var I=this.chassisBody;I.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),I.vectorToWorldFrame(O.directionLocal,O.directionWorld),I.vectorToWorldFrame(O.axleLocal,O.axleWorld)},f.prototype.updateWheelTransform=function(O){var I=u,Q=l,$=h,F=this.wheelInfos[O];this.updateWheelTransformWorld(F),F.directionLocal.scale(-1,I),Q.copy(F.axleLocal),I.cross(Q,$),$.normalize(),Q.normalize();var j=F.steering,z=new s;z.setFromAxisAngle(I,j);var b=new s;b.setFromAxisAngle(Q,F.rotation);var R=F.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,R),R.mult(b,R),R.normalize();var H=F.worldTransform.position;H.copy(F.directionWorld),H.scale(F.suspensionLength,H),H.vadd(F.chassisConnectionPointWorld,H)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];f.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new r,d=[],x=[],M=1;f.prototype.updateFriction=function(O){for(var I=m,Q=this.wheelInfos,$=Q.length,F=this.chassisBody,j=x,z=d,b=0;b<$;b++){var R=Q[b],H=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,j[b]||(j[b]=new r),z[b]||(z[b]=new r)}for(var b=0;b<$;b++){var R=Q[b],H=R.raycastResult.body;if(H){var K=z[b],et=this.getWheelTransformWorld(b);et.vectorToWorldFrame(g[this.indexRightAxis],K);var k=R.raycastResult.hitNormalWorld,it=K.dot(k);k.scale(it,I),K.vsub(I,K),K.normalize(),k.cross(K,j[b]),j[b].normalize(),R.sideImpulse=J(F,R.raycastResult.hitPointWorld,H,R.raycastResult.hitPointWorld,K),R.sideImpulse*=M}}var mt=1,St=.5;this.sliding=!1;for(var b=0;b<$;b++){var R=Q[b],H=R.raycastResult.body,Et=0;if(R.slipInfo=1,H){var D=0,dt=R.brake?R.brake:D;Et=U(F,H,R.raycastResult.hitPointWorld,j[b],dt),Et+=R.engineForce*O;var ht=dt/Et;R.slipInfo*=ht}if(R.forwardImpulse=0,R.skidInfo=1,H){R.skidInfo=1;var Xt=R.suspensionForce*O*R.frictionSlip,xt=Xt,ne=Xt*xt;R.forwardImpulse=Et;var vt=R.forwardImpulse*St,C=R.sideImpulse*mt,S=vt*vt+C*C;if(R.sliding=!1,S>ne){this.sliding=!0,R.sliding=!0;var ht=Xt/Math.sqrt(S);R.skidInfo*=ht}}}if(this.sliding)for(var b=0;b<$;b++){var R=Q[b];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var b=0;b<$;b++){var R=Q[b],Y=new r;if(Y.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var ct=new r;j[b].scale(R.forwardImpulse,ct),F.applyImpulse(ct,Y)}if(R.sideImpulse!==0){var H=R.raycastResult.body,ut=new r;ut.copy(R.raycastResult.hitPointWorld);var ot=new r;z[b].scale(R.sideImpulse,ot),F.pointToLocalFrame(Y,Y),Y["xyz"[this.indexUpAxis]]*=R.rollInfluence,F.pointToWorldFrame(Y,Y),F.applyImpulse(ot,Y),ot.scale(-1,ot),H.applyImpulse(ot,ut)}}};var _=new r,A=new r,P=new r;function U(O,I,Q,$,F){var j=0,z=Q,b=_,R=A,H=P;O.getVelocityAtWorldPoint(z,b),I.getVelocityAtWorldPoint(z,R),b.vsub(R,H);var K=$.dot(H),et=B(O,Q,$),k=B(I,Q,$),it=1,mt=it/(et+k);return j=-K*mt,F<j&&(j=F),j<-F&&(j=-F),j}var L=new r,E=new r,y=new r,T=new r;function B(O,I,Q){var $=L,F=E,j=y,z=T;return I.vsub(O.position,$),$.cross(Q,F),O.invInertiaWorld.vmult(F,z),z.cross($,j),O.invMass+Q.dot(j)}var N=new r,X=new r,q=new r;function J(O,I,Q,$,F,it){var z=F.norm2();if(z>1.1)return 0;var b=N,R=X,H=q;O.getVelocityAtWorldPoint(I,b),Q.getVelocityAtWorldPoint($,R),b.vsub(R,H);var K=F.dot(H),et=.2,k=1/(O.invMass+Q.invMass),it=-et*K*k;return it}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),f=e("../constraints/HingeConstraint");n.exports=u;function u(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var d=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(d);var x=new f(this.chassisBody,v,{pivotA:g,axisA:d,pivotB:c.ZERO,axisB:d,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),d=Math.sin(p),x=g.x,M=g.y;this.constraints[v].axisA.set(m*x-d*M,d*x+m*M,0)},u.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},u.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;u.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},u.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],d=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),d.vadd(l,d)},u.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},u.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var h=new c;u.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,h),m.dot(h)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,d=v.id,x=this.smoothingRadius*this.smoothingRadius,M=o,_=0;_!==m;_++){var A=this.particles[_];A.position.vsub(v.position,M),d!==A.id&&M.norm2()<x&&g.push(A)}};var c=new r,f=new r,u=new r,l=new r,h=new r,p=new r;s.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,d=this.eps,x=0;x!==v;x++){var M=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(M,_),_.push(this.particles[x]);for(var A=_.length,P=0,U=0;U!==A;U++){M.position.vsub(_[U].position,g);var L=g.norm(),E=this.w(L);P+=_[U].mass*E}this.densities[x]=P,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var y=f,T=u,B=l,N=h,X=p,x=0;x!==v;x++){var q=this.particles[x];y.set(0,0,0),T.set(0,0,0);for(var J,O,_=this.neighbors[x],A=_.length,U=0;U!==A;U++){var I=_[U];q.position.vsub(I.position,N);var Q=N.norm();J=-I.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+d)+this.pressures[U]/(this.densities[U]*this.densities[U]+d)),this.gradw(N,B),B.mult(J,B),y.vadd(B,y),I.velocity.vsub(q.velocity,X),X.mult(1/(1e-4+this.densities[x]*this.densities[U])*this.viscosity*I.mass,X),O=this.nablaw(Q),X.mult(O,X),T.vadd(X,T)}T.mult(q.mass,T),y.mult(q.mass,y),q.force.vadd(T,q.force),q.force.vadd(y,q.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),d=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(d,9))*Math.pow(d*d-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(x,M,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=M,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}s.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},s.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},s.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},s.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,f=new r,u=new r,l=new r,h=new r,p=new r,v=new r,g=new r,m=new r,d=new r;s.prototype.applyForce=function(){var x=this.stiffness,M=this.damping,_=this.restLength,A=this.bodyA,P=this.bodyB,U=o,L=c,E=f,y=u,T=d,B=l,N=h,X=p,q=v,J=g,O=m;this.getWorldAnchorA(B),this.getWorldAnchorB(N),B.vsub(A.position,X),N.vsub(P.position,q),N.vsub(B,U);var I=U.norm();L.copy(U),L.normalize(),P.velocity.vsub(A.velocity,E),P.angularVelocity.cross(q,T),E.vadd(T,E),A.angularVelocity.cross(X,T),E.vsub(T,E),L.mult(-x*(I-_)-M*E.dot(L),y),A.force.vsub(y,A.force),P.force.vadd(y,P.force),X.cross(y,J),q.cross(y,O),A.torque.vsub(J,A.torque),P.torque.vadd(O,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=f;function f(h){h=c.defaults(h,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=h.maxSuspensionTravel,this.customSlidingRotationalSpeed=h.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=h.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=h.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=h.chassisConnectionPointWorld.clone(),this.directionLocal=h.directionLocal.clone(),this.directionWorld=h.directionWorld.clone(),this.axleLocal=h.axleLocal.clone(),this.axleWorld=h.axleWorld.clone(),this.suspensionRestLength=h.suspensionRestLength,this.suspensionMaxLength=h.suspensionMaxLength,this.radius=h.radius,this.suspensionStiffness=h.suspensionStiffness,this.dampingCompression=h.dampingCompression,this.dampingRelaxation=h.dampingRelaxation,this.frictionSlip=h.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=h.rollInfluence,this.maxSuspensionForce=h.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=h.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,u=new r,l=new r;f.prototype.updateWheel=function(h){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(h.position,u),h.getVelocityAtWorldPoint(u,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,h=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-l,-h,-p),new v(l,-h,-p),new v(l,h,-p),new v(-l,h,-p),new v(-l,-h,p),new v(l,-h,p),new v(l,h,p),new v(-l,h,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var d=new o(g,m);this.convexPolyhedronRepresentation=d,d.material=this.material},c.prototype.calculateLocalInertia=function(l,h){return h=h||new s,c.calculateInertia(this.halfExtents,l,h),h},c.calculateInertia=function(l,h,p){var v=l;p.x=1/12*h*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*h*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*h*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,h){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),h!==void 0)for(var g=0;g!==p.length;g++)h.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var f=new s;new s,c.prototype.forEachWorldCorner=function(l,h,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)f.set(g[m][0],g[m][1],g[m][2]),h.vmult(f,f),l.vadd(f,f),p(f.x,f.y,f.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];c.prototype.calculateWorldAABB=function(l,h,p,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];h.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var d=1;d<8;d++){var m=u[d];h.vmult(m,m),l.vadd(m,m);var x=m.x,M=m.y,_=m.z;x>v.x&&(v.x=x),M>v.y&&(v.y=M),_>v.z&&(v.z=_),x<p.x&&(p.x=x),M<p.y&&(p.y=M),_<p.z&&(p.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(F,j,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=F||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=j||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var f=new s;c.prototype.computeEdges=function(){var F=this.faces,j=this.vertices;j.length;var z=this.uniqueEdges;z.length=0;for(var b=f,R=0;R!==F.length;R++)for(var H=F[R],K=H.length,et=0;et!==K;et++){var k=(et+1)%K;j[H[et]].vsub(j[H[k]],b),b.normalize();for(var it=!1,mt=0;mt!==z.length;mt++)if(z[mt].almostEquals(b)||z[mt].almostEquals(b)){it=!0;break}it||z.push(b.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var F=0;F<this.faces.length;F++){for(var j=0;j<this.faces[F].length;j++)if(!this.vertices[this.faces[F][j]])throw new Error("Vertex "+this.faces[F][j]+" not found!");var z=this.faceNormals[F]||new s;this.getFaceNormal(F,z),z.negate(z),this.faceNormals[F]=z;var b=this.vertices[this.faces[F][0]];if(z.dot(b)<0){console.error(".faceNormals["+F+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var j=0;j<this.faces[F].length;j++)console.warn(".vertices["+this.faces[F][j]+"] = Vec3("+this.vertices[this.faces[F][j]].toString()+")")}}};var u=new s,l=new s;c.computeNormal=function(F,j,z,b){j.vsub(F,l),z.vsub(j,u),u.cross(l,b),b.isZero()||b.normalize()},c.prototype.getFaceNormal=function(F,j){var z=this.faces[F],b=this.vertices[z[0]],R=this.vertices[z[1]],H=this.vertices[z[2]];return c.computeNormal(b,R,H,j)};var h=new s;c.prototype.clipAgainstHull=function(F,j,z,b,R,H,K,et,k){for(var it=h,mt=-1,St=-Number.MAX_VALUE,Et=0;Et<z.faces.length;Et++){it.copy(z.faceNormals[Et]),R.vmult(it,it);var D=it.dot(H);D>St&&(St=D,mt=Et)}for(var dt=[],ht=z.faces[mt],Xt=ht.length,xt=0;xt<Xt;xt++){var ne=z.vertices[ht[xt]],vt=new s;vt.copy(ne),R.vmult(vt,vt),b.vadd(vt,vt),dt.push(vt)}mt>=0&&this.clipFaceAgainstHull(H,F,j,dt,K,et,k)};var p=new s,v=new s,g=new s,m=new s,d=new s,x=new s;c.prototype.findSeparatingAxis=function(F,j,z,b,R,H,K,et){var k=p,it=v,mt=g,St=m,Et=d,D=x,dt=Number.MAX_VALUE,ht=this;if(ht.uniqueAxes)for(var xt=0;xt!==ht.uniqueAxes.length;xt++){z.vmult(ht.uniqueAxes[xt],k);var vt=ht.testSepAxis(k,F,j,z,b,R);if(vt===!1)return!1;vt<dt&&(dt=vt,H.copy(k))}else for(var Xt=K?K.length:ht.faces.length,xt=0;xt<Xt;xt++){var ne=K?K[xt]:xt;k.copy(ht.faceNormals[ne]),z.vmult(k,k);var vt=ht.testSepAxis(k,F,j,z,b,R);if(vt===!1)return!1;vt<dt&&(dt=vt,H.copy(k))}if(F.uniqueAxes)for(var xt=0;xt!==F.uniqueAxes.length;xt++){R.vmult(F.uniqueAxes[xt],it);var vt=ht.testSepAxis(it,F,j,z,b,R);if(vt===!1)return!1;vt<dt&&(dt=vt,H.copy(it))}else for(var C=et?et.length:F.faces.length,xt=0;xt<C;xt++){var ne=et?et[xt]:xt;it.copy(F.faceNormals[ne]),R.vmult(it,it);var vt=ht.testSepAxis(it,F,j,z,b,R);if(vt===!1)return!1;vt<dt&&(dt=vt,H.copy(it))}for(var S=0;S!==ht.uniqueEdges.length;S++){z.vmult(ht.uniqueEdges[S],St);for(var Y=0;Y!==F.uniqueEdges.length;Y++)if(R.vmult(F.uniqueEdges[Y],Et),St.cross(Et,D),!D.almostZero()){D.normalize();var ct=ht.testSepAxis(D,F,j,z,b,R);if(ct===!1)return!1;ct<dt&&(dt=ct,H.copy(D))}}return b.vsub(j,mt),mt.dot(H)>0&&H.negate(H),!0};var M=[],_=[];c.prototype.testSepAxis=function(F,j,z,b,R,H){var K=this;c.project(K,F,z,b,M),c.project(j,F,R,H,_);var et=M[0],k=M[1],it=_[0],mt=_[1],St=et-mt,Et=it-k,D=St<Et?St:Et;return D};var A=new s,P=new s;c.prototype.calculateLocalInertia=function(F,j){this.computeLocalAABB(A,P);var z=P.x-A.x,b=P.y-A.y,R=P.z-A.z;j.x=1/12*F*(2*b*2*b+2*R*2*R),j.y=1/12*F*(2*z*2*z+2*R*2*R),j.z=1/12*F*(2*b*2*b+2*z*2*z)},c.prototype.getPlaneConstantOfFace=function(F){var j=this.faces[F],z=this.faceNormals[F],b=this.vertices[j[0]],R=-z.dot(b);return R};var U=new s,L=new s,E=new s,y=new s,T=new s,B=new s,N=new s,X=new s;c.prototype.clipFaceAgainstHull=function(F,j,z,b,R,H,K){for(var et=U,k=L,it=E,mt=y,St=T,Et=B,D=N,dt=X,ht=this,Xt=[],xt=b,ne=Xt,vt=-1,C=Number.MAX_VALUE,S=0;S<ht.faces.length;S++){et.copy(ht.faceNormals[S]),z.vmult(et,et);var Y=et.dot(F);Y<C&&(C=Y,vt=S)}if(!(vt<0)){var ct=ht.faces[vt];ct.connectedFaces=[];for(var ut=0;ut<ht.faces.length;ut++)for(var ot=0;ot<ht.faces[ut].length;ot++)ct.indexOf(ht.faces[ut][ot])!==-1&&ut!==vt&&ct.connectedFaces.indexOf(ut)===-1&&ct.connectedFaces.push(ut);xt.length;for(var wt=ct.length,Tt=0;Tt<wt;Tt++){var Ft=ht.vertices[ct[Tt]],le=ht.vertices[ct[(Tt+1)%wt]];Ft.vsub(le,k),it.copy(k),z.vmult(it,it),j.vadd(it,it),mt.copy(this.faceNormals[vt]),z.vmult(mt,mt),j.vadd(mt,mt),it.cross(mt,St),St.negate(St),Et.copy(Ft),z.vmult(Et,Et),j.vadd(Et,Et),-Et.dot(St);var Zt;{var Mt=ct.connectedFaces[Tt];D.copy(this.faceNormals[Mt]);var kt=this.getPlaneConstantOfFace(Mt);dt.copy(D),z.vmult(dt,dt);var Zt=kt-dt.dot(j)}for(this.clipFaceAgainstPlane(xt,ne,dt,Zt);xt.length;)xt.shift();for(;ne.length;)xt.push(ne.shift())}D.copy(this.faceNormals[vt]);var kt=this.getPlaneConstantOfFace(vt);dt.copy(D),z.vmult(dt,dt);for(var Zt=kt-dt.dot(j),ut=0;ut<xt.length;ut++){var $t=dt.dot(xt[ut])+Zt;if($t<=R&&(console.log("clamped: depth="+$t+" to minDist="+(R+"")),$t=R),$t<=H){var Wt=xt[ut];if($t<=0){var ce={point:Wt,normal:dt,depth:$t};K.push(ce)}}}}},c.prototype.clipFaceAgainstPlane=function(F,j,z,b){var R,H,K=F.length;if(K<2)return j;var et=F[F.length-1],k=F[0];R=z.dot(et)+b;for(var it=0;it<K;it++){if(k=F[it],H=z.dot(k)+b,R<0)if(H<0){var mt=new s;mt.copy(k),j.push(mt)}else{var mt=new s;et.lerp(k,R/(R-H),mt),j.push(mt)}else if(H<0){var mt=new s;et.lerp(k,R/(R-H),mt),j.push(mt),j.push(k)}et=k,R=H}return j},c.prototype.computeWorldVertices=function(F,j){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new s);for(var b=this.vertices,R=this.worldVertices,H=0;H!==z;H++)j.vmult(b[H],R[H]),F.vadd(R[H],R[H]);this.worldVerticesNeedsUpdate=!1},new s,c.prototype.computeLocalAABB=function(F,j){var z=this.vertices.length,b=this.vertices;F.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),j.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<z;R++){var H=b[R];H.x<F.x?F.x=H.x:H.x>j.x&&(j.x=H.x),H.y<F.y?F.y=H.y:H.y>j.y&&(j.y=H.y),H.z<F.z?F.z=H.z:H.z>j.z&&(j.z=H.z)}},c.prototype.computeWorldFaceNormals=function(F){for(var j=this.faceNormals.length;this.worldFaceNormals.length<j;)this.worldFaceNormals.push(new s);for(var z=this.faceNormals,b=this.worldFaceNormals,R=0;R!==j;R++)F.vmult(z[R],b[R]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var F=0,j=this.vertices,z=0,b=j.length;z!==b;z++){var R=j[z].norm2();R>F&&(F=R)}this.boundingSphereRadius=Math.sqrt(F)};var q=new s;c.prototype.calculateWorldAABB=function(F,j,z,b){for(var R=this.vertices.length,H=this.vertices,K,et,k,it,mt,St,Et=0;Et<R;Et++){q.copy(H[Et]),j.vmult(q,q),F.vadd(q,q);var D=q;D.x<K||K===void 0?K=D.x:(D.x>it||it===void 0)&&(it=D.x),D.y<et||et===void 0?et=D.y:(D.y>mt||mt===void 0)&&(mt=D.y),D.z<k||k===void 0?k=D.z:(D.z>St||St===void 0)&&(St=D.z)}z.set(K,et,k),b.set(it,mt,St)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(F){F=F||new s;for(var j=this.vertices.length,z=this.vertices,b=0;b<j;b++)F.vadd(z[b],F);return F.mult(1/j,F),F},c.prototype.transformAllPoints=function(F,j){var z=this.vertices.length,b=this.vertices;if(j){for(var R=0;R<z;R++){var H=b[R];j.vmult(H,H)}for(var R=0;R<this.faceNormals.length;R++){var H=this.faceNormals[R];j.vmult(H,H)}}if(F)for(var R=0;R<z;R++){var H=b[R];H.vadd(F,H)}};var J=new s,O=new s,I=new s;c.prototype.pointIsInside=function(F){var j=this.vertices.length,z=this.vertices,b=this.faces,R=this.faceNormals,H=null,K=this.faces.length,et=J;this.getAveragePointLocal(et);for(var k=0;k<K;k++){this.faces[k].length;var j=R[k],it=z[b[k][0]],mt=O;F.vsub(it,mt);var St=j.dot(mt),Et=I;et.vsub(it,Et);var D=j.dot(Et);if(St<0&&D>0||St>0&&D<0)return!1}return H?1:-1},new s;var Q=new s,$=new s;c.project=function(F,j,z,b,R){var H=F.vertices.length,K=Q,et=0,k=0,it=$,mt=F.vertices;it.setZero(),o.vectorToLocalFrame(z,b,j,K),o.pointToLocalFrame(z,b,it,it);var St=it.dot(K);k=et=mt[0].dot(K);for(var Et=1;Et<H;Et++){var D=mt[Et].dot(K);D>et&&(et=D),D<k&&(k=D)}if(k-=St,et-=St,k>et){var dt=k;k=et,et=dt}R[0]=et,R[1]=k}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(f,u,l,h){var p=h,v=[],g=[],m=[],d=[],x=[],M=Math.cos,_=Math.sin;v.push(new s(u*M(0),u*_(0),-l*.5)),d.push(0),v.push(new s(f*M(0),f*_(0),l*.5)),x.push(1);for(var A=0;A<p;A++){var P=2*Math.PI/p*(A+1),U=2*Math.PI/p*(A+.5);A<p-1?(v.push(new s(u*M(P),u*_(P),-l*.5)),d.push(2*A+2),v.push(new s(f*M(P),f*_(P),l*.5)),x.push(2*A+3),m.push([2*A+2,2*A+3,2*A+1,2*A])):m.push([0,1,2*A+1,2*A]),(p%2===1||A<p/2)&&g.push(new s(M(U),_(U),0))}m.push(x),g.push(new s(0,0,1));for(var L=[],A=0;A<d.length;A++)L.push(d[d.length-A-1]);m.push(L),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=f;function f(u,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}f.prototype=new r,f.prototype.update=function(){this._cachedPillars={}},f.prototype.updateMinValue=function(){for(var u=this.data,l=u[0][0],h=0;h!==u.length;h++)for(var p=0;p!==u[h].length;p++){var v=u[h][p];v<l&&(l=v)}this.minValue=l},f.prototype.updateMaxValue=function(){for(var u=this.data,l=u[0][0],h=0;h!==u.length;h++)for(var p=0;p!==u[h].length;p++){var v=u[h][p];v>l&&(l=v)}this.maxValue=l},f.prototype.setHeightValueAtIndex=function(u,l,h){var p=this.data;p[u][l]=h,this.clearCachedConvexTrianglePillar(u,l,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,l,!0),this.clearCachedConvexTrianglePillar(u-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(u,l-1,!0),this.clearCachedConvexTrianglePillar(u,l-1,!1)),l>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,l-1,!0)},f.prototype.getRectMinMax=function(u,l,h,p,v){v=v||[];for(var g=this.data,m=this.minValue,d=u;d<=h;d++)for(var x=l;x<=p;x++){var M=g[d][x];M>m&&(m=M)}v[0]=this.minValue,v[1]=m},f.prototype.getIndexOfPosition=function(u,l,h,p){var v=this.elementSize,g=this.data,m=Math.floor(u/v),d=Math.floor(l/v);return h[0]=m,h[1]=d,p&&(m<0&&(m=0),d<0&&(d=0),m>=g.length-1&&(m=g.length-1),d>=g[0].length-1&&(d=g[0].length-1)),!(m<0||d<0||m>=g.length-1||d>=g[0].length-1)},f.prototype.getHeightAt=function(u,l,h){var p=[];this.getIndexOfPosition(u,l,p,h);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},f.prototype.getCacheConvexTrianglePillarKey=function(u,l,h){return u+"_"+l+"_"+(h?1:0)},f.prototype.getCachedConvexTrianglePillar=function(u,l,h){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,h)]},f.prototype.setCachedConvexTrianglePillar=function(u,l,h,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,h)]={convex:p,offset:v}},f.prototype.clearCachedConvexTrianglePillar=function(u,l,h){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,h)]},f.prototype.getConvexTrianglePillar=function(u,l,h){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,l,h);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,d=p.faces;p.vertices.length=6;for(var x=0;x<6;x++)p.vertices[x]||(p.vertices[x]=new o);d.length=5;for(var x=0;x<5;x++)d[x]||(d[x]=[]);var M=p.vertices,_=(Math.min(g[u][l],g[u+1][l],g[u][l+1],g[u+1][l+1])-this.minValue)/2+this.minValue;h?(v.set((u+.75)*m,(l+.75)*m,_),M[0].set(.25*m,.25*m,g[u+1][l+1]-_),M[1].set(-.75*m,.25*m,g[u][l+1]-_),M[2].set(.25*m,-.75*m,g[u+1][l]-_),M[3].set(.25*m,.25*m,-_-1),M[4].set(-.75*m,.25*m,-_-1),M[5].set(.25*m,-.75*m,-_-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=2,d[2][1]=5,d[2][2]=3,d[2][3]=0,d[3][0]=3,d[3][1]=4,d[3][2]=1,d[3][3]=0,d[4][0]=1,d[4][1]=4,d[4][2]=5,d[4][3]=2):(v.set((u+.25)*m,(l+.25)*m,_),M[0].set(-.25*m,-.25*m,g[u][l]-_),M[1].set(.75*m,-.25*m,g[u+1][l]-_),M[2].set(-.25*m,.75*m,g[u][l+1]-_),M[3].set(-.25*m,-.25*m,-_-1),M[4].set(.75*m,-.25*m,-_-1),M[5].set(-.25*m,.75*m,-_-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=0,d[2][1]=2,d[2][2]=5,d[2][3]=3,d[3][0]=1,d[3][1]=0,d[3][2]=3,d[3][3]=4,d[4][0]=4,d[4][1]=5,d[4][2]=2,d[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,l,h,p,v)},f.prototype.calculateLocalInertia=function(u,l){return l=l||new o,l.set(0,0,0),l},f.prototype.volume=function(){return Number.MAX_VALUE},f.prototype.calculateWorldAABB=function(u,l,h,p){h.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},f.prototype.updateBoundingSphereRadius=function(){var u=this.data,l=this.elementSize;this.boundingSphereRadius=new o(u.length*l,u[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,f){return f=f||new s,f.set(0,0,0),f},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,f,u,l){u.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(f){var u=this.worldNormal;u.set(0,0,1),f.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(f,u){return u=u||new s,u},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new s;o.prototype.calculateWorldAABB=function(f,u,l,h){c.set(0,0,1),u.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),h.set(p,p,p),c.x===1&&(h.x=f.x),c.y===1&&(h.y=f.y),c.z===1&&(h.z=f.z),c.x===-1&&(l.x=f.x),c.y===-1&&(l.y=f.y),c.z===-1&&(l.z=f.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,f){f=f||new s;var u=2*c*this.radius*this.radius/5;return f.x=u,f.y=u,f.z=u,f},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,f,u,l){for(var h=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];u[g]=c[g]-h,l[g]=c[g]+h}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=u;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),f=e("../utils/Octree");function u(L,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(L),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new c,this.edges=null,this.scale=new s(1,1,1),this.tree=new f,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var l=new s;u.prototype.updateTree=function(){var L=this.tree;L.reset(),L.aabb.copy(this.aabb);var E=this.scale;L.aabb.lowerBound.x*=1/E.x,L.aabb.lowerBound.y*=1/E.y,L.aabb.lowerBound.z*=1/E.z,L.aabb.upperBound.x*=1/E.x,L.aabb.upperBound.y*=1/E.y,L.aabb.upperBound.z*=1/E.z;for(var y=new c,T=new s,B=new s,N=new s,X=[T,B,N],q=0;q<this.indices.length/3;q++){var J=q*3;this._getUnscaledVertex(this.indices[J],T),this._getUnscaledVertex(this.indices[J+1],B),this._getUnscaledVertex(this.indices[J+2],N),y.setFromPoints(X),L.insert(y,q)}L.removeEmptyNodes()};var h=new c;u.prototype.getTrianglesInAABB=function(L,E){h.copy(L);var y=this.scale,T=y.x,B=y.y,N=y.z,X=h.lowerBound,q=h.upperBound;return X.x/=T,X.y/=B,X.z/=N,q.x/=T,q.y/=B,q.z/=N,this.tree.aabbQuery(h,E)},u.prototype.setScale=function(L){var E=this.scale.x===this.scale.y===this.scale.z,y=L.x===L.y===L.z;E&&y||this.updateNormals(),this.scale.copy(L),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var L=l,E=this.normals,y=0;y<this.indices.length/3;y++){var T=y*3,B=this.indices[T],N=this.indices[T+1],X=this.indices[T+2];this.getVertex(B,d),this.getVertex(N,x),this.getVertex(X,M),u.computeNormal(x,d,M,L),E[T]=L.x,E[T+1]=L.y,E[T+2]=L.z}},u.prototype.updateEdges=function(){for(var L={},E=function(J,O){var I=B<N?B+"_"+N:N+"_"+B;L[I]=!0},y=0;y<this.indices.length/3;y++){var T=y*3,B=this.indices[T],N=this.indices[T+1];this.indices[T+2],E(),E(),E()}var X=Object.keys(L);this.edges=new Int16Array(X.length*2);for(var y=0;y<X.length;y++){var q=X[y].split("_");this.edges[2*y]=parseInt(q[0],10),this.edges[2*y+1]=parseInt(q[1],10)}},u.prototype.getEdgeVertex=function(L,E,y){var T=this.edges[L*2+(E?1:0)];this.getVertex(T,y)};var p=new s,v=new s;u.prototype.getEdgeVector=function(L,E){var y=p,T=v;this.getEdgeVertex(L,0,y),this.getEdgeVertex(L,1,T),T.vsub(y,E)};var g=new s,m=new s;u.computeNormal=function(L,E,y,T){E.vsub(L,m),y.vsub(E,g),g.cross(m,T),T.isZero()||T.normalize()};var d=new s,x=new s,M=new s;u.prototype.getVertex=function(L,E){var y=this.scale;return this._getUnscaledVertex(L,E),E.x*=y.x,E.y*=y.y,E.z*=y.z,E},u.prototype._getUnscaledVertex=function(L,E){var y=L*3,T=this.vertices;return E.set(T[y],T[y+1],T[y+2])},u.prototype.getWorldVertex=function(L,E,y,T){return this.getVertex(L,T),o.pointToWorldFrame(E,y,T,T),T},u.prototype.getTriangleVertices=function(L,E,y,T){var B=L*3;this.getVertex(this.indices[B],E),this.getVertex(this.indices[B+1],y),this.getVertex(this.indices[B+2],T)},u.prototype.getNormal=function(L,E){var y=L*3;return E.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new c;u.prototype.calculateLocalInertia=function(L,E){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,T=_.upperBound.y-_.lowerBound.y,B=_.upperBound.z-_.lowerBound.z;return E.set(1/12*L*(2*T*2*T+2*B*2*B),1/12*L*(2*y*2*y+2*B*2*B),1/12*L*(2*T*2*T+2*y*2*y))};var A=new s;u.prototype.computeLocalAABB=function(L){var E=L.lowerBound,y=L.upperBound,T=this.vertices.length;this.vertices;var B=A;this.getVertex(0,B),E.copy(B),y.copy(B);for(var N=0;N!==T;N++)this.getVertex(N,B),B.x<E.x?E.x=B.x:B.x>y.x&&(y.x=B.x),B.y<E.y?E.y=B.y:B.y>y.y&&(y.y=B.y),B.z<E.z?E.z=B.z:B.z>y.z&&(y.z=B.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var L=0,E=this.vertices,y=new s,T=0,B=E.length/3;T!==B;T++){this.getVertex(T,y);var N=y.norm2();N>L&&(L=N)}this.boundingSphereRadius=Math.sqrt(L)},new s;var P=new o,U=new c;u.prototype.calculateWorldAABB=function(L,E,y,T){var B=P,N=U;B.position=L,B.quaternion=E,this.aabb.toWorldFrame(B,N),y.copy(N.lowerBound),T.copy(N.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(L,E,y,T,B){L=L||1,E=E||.5,y=y||8,T=T||6,B=B||Math.PI*2;for(var N=[],X=[],q=0;q<=y;q++)for(var J=0;J<=T;J++){var O=J/T*B,I=q/y*Math.PI*2,Q=(L+E*Math.cos(I))*Math.cos(O),$=(L+E*Math.cos(I))*Math.sin(O),F=E*Math.sin(I);N.push(Q,$,F)}for(var q=1;q<=y;q++)for(var J=1;J<=T;J++){var j=(T+1)*q+J-1,z=(T+1)*(q-1)+J-1,b=(T+1)*(q-1)+J,R=(T+1)*q+J;X.push(j,z,R),X.push(z,b,R)}return new u(N,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],c=[],f=[];s.prototype.solve=function(u,l){var h=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,d=l.bodies,x=d.length,M=u,_,A,P,U,L,E;if(m!==0)for(var y=0;y!==x;y++)d[y].updateSolveMassProperties();var T=c,B=f,N=o;T.length=m,B.length=m,N.length=m;for(var y=0;y!==m;y++){var X=g[y];N[y]=0,B[y]=X.computeB(M),T[y]=1/X.computeC()}if(m!==0){for(var y=0;y!==x;y++){var q=d[y],J=q.vlambda,O=q.wlambda;J.set(0,0,0),O&&O.set(0,0,0)}for(h=0;h!==p;h++){U=0;for(var I=0;I!==m;I++){var X=g[I];_=B[I],A=T[I],E=N[I],L=X.computeGWlambda(),P=A*(_-L-X.eps*E),E+P<X.minForce?P=X.minForce-E:E+P>X.maxForce&&(P=X.maxForce-E),N[I]+=P,U+=P>0?P:-P,X.addToWlambda(P)}if(U*U<v)break}for(var y=0;y!==x;y++){var q=d[y],Q=q.velocity,$=q.angularVelocity;Q.vadd(q.vlambda,Q),$&&$.vadd(q.wlambda,$)}}return h}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,c=o.indexOf(s);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(d){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=d,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],f=[],u={bodies:[]},l=s.STATIC;function h(d){for(var x=d.length,M=0;M!==x;M++){var _=d[M];if(!_.visited&&!(_.body.type&l))return _}return!1}var p=[];function v(d,x,M,_){for(p.push(d),d.visited=!0,x(d,M,_);p.length;)for(var A=p.pop(),P;P=h(A.children);)P.visited=!0,x(P,M,_),p.push(P)}function g(d,x,M){x.push(d.body);for(var _=d.eqs.length,A=0;A!==_;A++){var P=d.eqs[A];M.indexOf(P)===-1&&M.push(P)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(d,x){for(var M=c,_=this.nodePool,A=x.bodies,P=this.equations,U=P.length,L=A.length,E=this.subsolver;_.length<L;)_.push(this.createNode());M.length=L;for(var y=0;y<L;y++)M[y]=_[y];for(var y=0;y!==L;y++){var T=M[y];T.body=A[y],T.children.length=0,T.eqs.length=0,T.visited=!1}for(var B=0;B!==U;B++){var N=P[B],y=A.indexOf(N.bi),X=A.indexOf(N.bj),q=M[y],J=M[X];q.children.push(J),q.eqs.push(N),J.children.push(q),J.eqs.push(N)}var O,I=0,Q=f;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var $=u;O=h(M);){Q.length=0,$.bodies.length=0,v(O,g,$.bodies,Q);var F=Q.length;Q=Q.sort(m);for(var y=0;y!==F;y++)E.addEquation(Q[y]);E.solve(d,$),E.removeAllEquations(),I++}return I};function m(d,x){return x.id-d.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[s]===void 0&&(c[s]=[]),c[s].indexOf(o)===-1&&c[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[s]!==void 0&&c[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[s]===void 0)return this;var f=c[s].indexOf(o);return f!==-1&&c[s].splice(f,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,c=o[s.type];if(c!==void 0){s.target=this;for(var f=0,u=c.length;f<u;f++)c[f].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,h){h=h||{},h.root=null,h.aabb=l,o.call(this,h),this.maxDepth=typeof h.maxDepth<"u"?h.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,h){this.children.length=this.data.length=0},o.prototype.insert=function(l,h,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var d=0;d!==8;d++)if(g[d].insert(l,h,p+1))return!0;m&&(g.length=0)}return v.push(h),!0};var f=new s;o.prototype.subdivide=function(){var l=this.aabb,h=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(h,f),f.scale(.5,f);for(var g=this.root||this,m=0;m!==8;m++){var d=v[m];d.root=g;var x=d.aabb.lowerBound;x.x*=f.x,x.y*=f.y,x.z*=f.z,x.vadd(h,x),x.vadd(f,d.aabb.upperBound)}},o.prototype.aabbQuery=function(l,h){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(h,v.data),Array.prototype.push.apply(p,v.children)}return h};var u=new r;o.prototype.rayQuery=function(l,h,p){return l.getAABB(u),u.toLocalFrame(h,u),this.aabbQuery(u,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var h=l.pop(),p=h.children.length-1;p>=0;p--)h.children[p].data.length||h.children.splice(p,1);Array.prototype.push.apply(l,h.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var c=o;o=s,s=c}return this.data[s+"-"+o]},r.prototype.set=function(s,o,c){if(s>o){var f=o;o=s,s=f}var u=s+"-"+o;this.get(s,o)||this.data.keys.push(u),this.data[u]=c},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var c=o.pop();delete s[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var c in o)c in s||(s[c]=o[c]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),f=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),h=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(st){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=st,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(st,ft,gt,_t,Jt,Bt){var bt;this.contactPointPool.length?(bt=this.contactPointPool.pop(),bt.bi=st,bt.bj=ft):bt=new h(st,ft),bt.enabled=st.collisionResponse&&ft.collisionResponse&&gt.collisionResponse&&_t.collisionResponse;var Ut=this.currentContactMaterial;bt.restitution=Ut.restitution,bt.setSpookParams(Ut.contactEquationStiffness,Ut.contactEquationRelaxation,this.world.dt);var nt=gt.material||st.material,Rt=_t.material||ft.material;return nt&&Rt&&nt.restitution>=0&&Rt.restitution>=0&&(bt.restitution=nt.restitution*Rt.restitution),bt.si=Jt||gt,bt.sj=Bt||_t,bt},v.prototype.createFrictionEquationsFromContact=function(st,ft){var gt=st.bi,_t=st.bj,Jt=st.si,Bt=st.sj,bt=this.world,Ut=this.currentContactMaterial,nt=Ut.friction,Rt=Jt.material||gt.material,It=Bt.material||_t.material;if(Rt&&It&&Rt.friction>=0&&It.friction>=0&&(nt=Rt.friction*It.friction),nt>0){var qt=nt*bt.gravity.length(),Pt=gt.invMass+_t.invMass;Pt>0&&(Pt=1/Pt);var At=this.frictionEquationPool,Dt=At.length?At.pop():new p(gt,_t,qt*Pt),jt=At.length?At.pop():new p(gt,_t,qt*Pt);return Dt.bi=jt.bi=gt,Dt.bj=jt.bj=_t,Dt.minForce=jt.minForce=-qt*Pt,Dt.maxForce=jt.maxForce=qt*Pt,Dt.ri.copy(st.ri),Dt.rj.copy(st.rj),jt.ri.copy(st.ri),jt.rj.copy(st.rj),st.ni.tangents(Dt.t,jt.t),Dt.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,bt.dt),jt.setSpookParams(Ut.frictionEquationStiffness,Ut.frictionEquationRelaxation,bt.dt),Dt.enabled=jt.enabled=st.enabled,ft.push(Dt,jt),!0}return!1};var g=new c,m=new c,d=new c;v.prototype.createFrictionFromAverage=function(st){var ft=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ft,this.frictionResult)||st===1)){var gt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),d.setZero();var Jt=ft.bi;ft.bj;for(var Bt=0;Bt!==st;Bt++)ft=this.result[this.result.length-1-Bt],ft.bodyA!==Jt?(g.vadd(ft.ni,g),m.vadd(ft.ri,m),d.vadd(ft.rj,d)):(g.vsub(ft.ni,g),m.vadd(ft.rj,m),d.vadd(ft.ri,d));var bt=1/st;m.scale(bt,gt.ri),d.scale(bt,gt.rj),_t.ri.copy(gt.ri),_t.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,_t.t)}};var x=new c,M=new c,_=new u,A=new u;v.prototype.getContacts=function(st,ft,gt,_t,Jt,Bt,bt){this.contactPointPool=Jt,this.frictionEquationPool=bt,this.result=_t,this.frictionResult=Bt;for(var Ut=_,nt=A,Rt=x,It=M,qt=0,Pt=st.length;qt!==Pt;qt++){var At=st[qt],Dt=ft[qt],jt=null;At.material&&Dt.material&&(jt=gt.getContactMaterial(At.material,Dt.material)||null);for(var oe=0;oe<At.shapes.length;oe++){At.quaternion.mult(At.shapeOrientations[oe],Ut),At.quaternion.vmult(At.shapeOffsets[oe],Rt),Rt.vadd(At.position,Rt);for(var yt=At.shapes[oe],w=0;w<Dt.shapes.length;w++){Dt.quaternion.mult(Dt.shapeOrientations[w],nt),Dt.quaternion.vmult(Dt.shapeOffsets[w],It),It.vadd(Dt.position,It);var V=Dt.shapes[w];if(!(Rt.distanceTo(It)>yt.boundingSphereRadius+V.boundingSphereRadius)){var tt=null;yt.material&&V.material&&(tt=gt.getContactMaterial(yt.material,V.material)||null),this.currentContactMaterial=tt||jt||gt.defaultContactMaterial;var Z=this[yt.type|V.type];Z&&(yt.type<V.type?Z.call(this,yt,V,Rt,It,Ut,nt,At,Dt,yt,V):Z.call(this,V,yt,It,Rt,nt,Ut,Dt,At,yt,V))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(st,ft,gt,_t,Jt,Bt,bt,Ut){st.convexPolyhedronRepresentation.material=st.material,ft.convexPolyhedronRepresentation.material=ft.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ft.convexPolyhedronRepresentation,gt,_t,Jt,Bt,bt,Ut,st,ft)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(st,ft,gt,_t,Jt,Bt,bt,Ut){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ft,gt,_t,Jt,Bt,bt,Ut,st,ft)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(st,ft,gt,_t,Jt,Bt,bt,Ut){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexParticle(st.convexPolyhedronRepresentation,ft,gt,_t,Jt,Bt,bt,Ut,st,ft)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=this.createContactEquation(bt,Ut,st,ft);_t.vsub(gt,nt.ni),nt.ni.normalize(),nt.ri.copy(nt.ni),nt.rj.copy(nt.ni),nt.ri.mult(st.radius,nt.ri),nt.rj.mult(-ft.radius,nt.rj),nt.ri.vadd(gt,nt.ri),nt.ri.vsub(bt.position,nt.ri),nt.rj.vadd(_t,nt.rj),nt.rj.vsub(Ut.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)};var P=new c,U=new c,L=new c;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=new c,Rt=P;Rt.set(0,0,1),Jt.vmult(Rt,Rt);for(var It=0;It<ft.vertices.length/3;It++){ft.getVertex(It,nt);var qt=new c;qt.copy(nt),f.pointToWorldFrame(_t,Bt,qt,nt);var Pt=U;nt.vsub(gt,Pt);var At=Rt.dot(Pt);if(At<=0){var Dt=this.createContactEquation(bt,Ut,st,ft);Dt.ni.copy(Rt);var jt=L;Rt.scale(Pt.dot(Rt),jt),nt.vsub(jt,jt),Dt.ri.copy(jt),Dt.ri.vsub(bt.position,Dt.ri),Dt.rj.copy(nt),Dt.rj.vsub(Ut.position,Dt.rj),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}};var E=new c,y=new c;new c;var T=new c,B=new c,N=new c,X=new c,q=new c,J=new c,O=new c,I=new c,Q=new c,$=new c,F=new c,j=new r,z=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=N,Rt=X,It=q,qt=J,Pt=O,At=I,Dt=j,jt=B,oe=y,yt=z;f.pointToLocalFrame(_t,Bt,gt,Pt);var w=st.radius;Dt.lowerBound.set(Pt.x-w,Pt.y-w,Pt.z-w),Dt.upperBound.set(Pt.x+w,Pt.y+w,Pt.z+w),ft.getTrianglesInAABB(Dt,yt);for(var V=T,tt=st.radius*st.radius,Z=0;Z<yt.length;Z++)for(var G=0;G<3;G++)if(ft.getVertex(ft.indices[yt[Z]*3+G],V),V.vsub(Pt,oe),oe.norm2()<=tt){jt.copy(V),f.pointToWorldFrame(_t,Bt,jt,V),V.vsub(gt,oe);var rt=this.createContactEquation(bt,Ut,st,ft);rt.ni.copy(oe),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.ri.scale(st.radius,rt.ri),rt.ri.vadd(gt,rt.ri),rt.ri.vsub(bt.position,rt.ri),rt.rj.copy(V),rt.rj.vsub(Ut.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}for(var Z=0;Z<yt.length;Z++)for(var G=0;G<3;G++){ft.getVertex(ft.indices[yt[Z]*3+G],nt),ft.getVertex(ft.indices[yt[Z]*3+(G+1)%3],Rt),Rt.vsub(nt,It),Pt.vsub(Rt,At);var Ct=At.dot(It);Pt.vsub(nt,At);var zt=At.dot(It);if(zt>0&&Ct<0){Pt.vsub(nt,At),qt.copy(It),qt.normalize(),zt=At.dot(qt),qt.scale(zt,At),At.vadd(nt,At);var Ht=At.distanceTo(Pt);if(Ht<st.radius){var rt=this.createContactEquation(bt,Ut,st,ft);At.vsub(Pt,rt.ni),rt.ni.normalize(),rt.ni.scale(st.radius,rt.ri),f.pointToWorldFrame(_t,Bt,At,At),At.vsub(Ut.position,rt.rj),f.vectorToWorldFrame(Bt,rt.ni,rt.ni),f.vectorToWorldFrame(Bt,rt.ri,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}}for(var te=Q,Kt=$,Nt=F,ue=E,Z=0,ee=yt.length;Z!==ee;Z++){ft.getTriangleVertices(yt[Z],te,Kt,Nt),ft.getNormal(yt[Z],ue),Pt.vsub(te,At);var Ht=At.dot(ue);if(ue.scale(Ht,At),Pt.vsub(At,At),Ht=At.distanceTo(Pt),o.pointInTriangle(At,te,Kt,Nt)&&Ht<st.radius){var rt=this.createContactEquation(bt,Ut,st,ft);At.vsub(Pt,rt.ni),rt.ni.normalize(),rt.ni.scale(st.radius,rt.ri),f.pointToWorldFrame(_t,Bt,At,At),At.vsub(Ut.position,rt.rj),f.vectorToWorldFrame(Bt,rt.ni,rt.ni),f.vectorToWorldFrame(Bt,rt.ri,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}yt.length=0};var b=new c,R=new c;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=this.createContactEquation(bt,Ut,st,ft);if(nt.ni.set(0,0,1),Bt.vmult(nt.ni,nt.ni),nt.ni.negate(nt.ni),nt.ni.normalize(),nt.ni.mult(st.radius,nt.ri),gt.vsub(_t,b),nt.ni.mult(nt.ni.dot(b),R),b.vsub(R,nt.rj),-b.dot(nt.ni)<=st.radius){var Rt=nt.ri,It=nt.rj;Rt.vadd(gt,Rt),Rt.vsub(bt.position,Rt),It.vadd(_t,It),It.vsub(Ut.position,It),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}};var H=new c,K=new c,et=new c;function k(st,ft,gt){for(var _t=null,Jt=st.length,Bt=0;Bt!==Jt;Bt++){var bt=st[Bt],Ut=H;st[(Bt+1)%Jt].vsub(bt,Ut);var nt=K;Ut.cross(ft,nt);var Rt=et;gt.vsub(bt,Rt);var It=nt.dot(Rt);if(_t===null||It>0&&_t===!0||It<=0&&_t===!1){_t===null&&(_t=It>0);continue}else return!1}return!0}var it=new c,mt=new c,St=new c,Et=new c,D=[new c,new c,new c,new c,new c,new c],dt=new c,ht=new c,Xt=new c,xt=new c;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=this.v3pool,Rt=D;gt.vsub(_t,it),ft.getSideNormals(Rt,Bt);for(var It=st.radius,qt=!1,Pt=ht,At=Xt,Dt=xt,jt=null,oe=0,yt=0,w=0,V=null,tt=0,Z=Rt.length;tt!==Z&&qt===!1;tt++){var G=mt;G.copy(Rt[tt]);var rt=G.norm();G.normalize();var Ct=it.dot(G);if(Ct<rt+It&&Ct>0){var zt=St,Ht=Et;zt.copy(Rt[(tt+1)%3]),Ht.copy(Rt[(tt+2)%3]);var te=zt.norm(),Kt=Ht.norm();zt.normalize(),Ht.normalize();var Nt=it.dot(zt),ue=it.dot(Ht);if(Nt<te&&Nt>-te&&ue<Kt&&ue>-Kt){var xe=Math.abs(Ct-rt-It);(V===null||xe<V)&&(V=xe,yt=Nt,w=ue,jt=rt,Pt.copy(G),At.copy(zt),Dt.copy(Ht),oe++)}}}if(oe){qt=!0;var Qt=this.createContactEquation(bt,Ut,st,ft);Pt.mult(-It,Qt.ri),Qt.ni.copy(Pt),Qt.ni.negate(Qt.ni),Pt.mult(jt,Pt),At.mult(yt,At),Pt.vadd(At,Pt),Dt.mult(w,Dt),Pt.vadd(Dt,Qt.rj),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(bt.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Ut.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}for(var ee=nt.get(),Se=dt,ve=0;ve!==2&&!qt;ve++)for(var se=0;se!==2&&!qt;se++)for(var Yt=0;Yt!==2&&!qt;Yt++)if(ee.set(0,0,0),ve?ee.vadd(Rt[0],ee):ee.vsub(Rt[0],ee),se?ee.vadd(Rt[1],ee):ee.vsub(Rt[1],ee),Yt?ee.vadd(Rt[2],ee):ee.vsub(Rt[2],ee),_t.vadd(ee,Se),Se.vsub(gt,Se),Se.norm2()<It*It){qt=!0;var Qt=this.createContactEquation(bt,Ut,st,ft);Qt.ri.copy(Se),Qt.ri.normalize(),Qt.ni.copy(Qt.ri),Qt.ri.mult(It,Qt.ri),Qt.rj.copy(ee),Qt.ri.vadd(gt,Qt.ri),Qt.ri.vsub(bt.position,Qt.ri),Qt.rj.vadd(_t,Qt.rj),Qt.rj.vsub(Ut.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}nt.release(ee),ee=null;for(var Ee=nt.get(),fe=nt.get(),Qt=nt.get(),Pe=nt.get(),xe=nt.get(),qe=Rt.length,ve=0;ve!==qe&&!qt;ve++)for(var se=0;se!==qe&&!qt;se++)if(ve%3!==se%3){Rt[se].cross(Rt[ve],Ee),Ee.normalize(),Rt[ve].vadd(Rt[se],fe),Qt.copy(gt),Qt.vsub(fe,Qt),Qt.vsub(_t,Qt);var ye=Qt.dot(Ee);Ee.mult(ye,Pe);for(var Yt=0;Yt===ve%3||Yt===se%3;)Yt++;xe.copy(gt),xe.vsub(Pe,xe),xe.vsub(fe,xe),xe.vsub(_t,xe);var He=Math.abs(ye),Ge=xe.norm();if(He<Rt[Yt].norm()&&Ge<It){qt=!0;var de=this.createContactEquation(bt,Ut,st,ft);fe.vadd(Pe,de.rj),de.rj.copy(de.rj),xe.negate(de.ni),de.ni.normalize(),de.ri.copy(de.rj),de.ri.vadd(_t,de.ri),de.ri.vsub(gt,de.ri),de.ri.normalize(),de.ri.mult(It,de.ri),de.ri.vadd(gt,de.ri),de.ri.vsub(bt.position,de.ri),de.rj.vadd(_t,de.rj),de.rj.vsub(Ut.position,de.rj),this.result.push(de),this.createFrictionEquationsFromContact(de,this.frictionResult)}}nt.release(Ee,fe,Qt,Pe,xe)};var ne=new c,vt=new c,C=new c,S=new c,Y=new c,ct=new c,ut=new c,ot=new c,wt=new c,Tt=new c;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=this.v3pool;gt.vsub(_t,ne);for(var Rt=ft.faceNormals,It=ft.faces,qt=ft.vertices,Pt=st.radius,At=0;At!==qt.length;At++){var Dt=qt[At],jt=Y;Bt.vmult(Dt,jt),_t.vadd(jt,jt);var oe=S;if(jt.vsub(gt,oe),oe.norm2()<Pt*Pt){w=!0;var yt=this.createContactEquation(bt,Ut,st,ft);yt.ri.copy(oe),yt.ri.normalize(),yt.ni.copy(yt.ri),yt.ri.mult(Pt,yt.ri),jt.vsub(_t,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(bt.position,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Ut.position,yt.rj),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);return}}for(var w=!1,At=0,V=It.length;At!==V&&w===!1;At++){var tt=Rt[At],Z=It[At],G=ct;Bt.vmult(tt,G);var rt=ut;Bt.vmult(qt[Z[0]],rt),rt.vadd(_t,rt);var Ct=ot;G.mult(-Pt,Ct),gt.vadd(Ct,Ct);var zt=wt;Ct.vsub(rt,zt);var Ht=zt.dot(G),te=Tt;if(gt.vsub(rt,te),Ht<0&&te.dot(G)>0){for(var Kt=[],Nt=0,ue=Z.length;Nt!==ue;Nt++){var ee=nt.get();Bt.vmult(qt[Z[Nt]],ee),_t.vadd(ee,ee),Kt.push(ee)}if(k(Kt,G,gt)){w=!0;var yt=this.createContactEquation(bt,Ut,st,ft);G.mult(-Pt,yt.ri),G.negate(yt.ni);var Se=nt.get();G.mult(-Ht,Se);var ve=nt.get();G.mult(-Pt,ve),gt.vsub(_t,yt.rj),yt.rj.vadd(ve,yt.rj),yt.rj.vadd(Se,yt.rj),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Ut.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(bt.position,yt.ri),nt.release(Se),nt.release(ve),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Nt=0,se=Kt.length;Nt!==se;Nt++)nt.release(Kt[Nt]);return}else for(var Nt=0;Nt!==Z.length;Nt++){var Yt=nt.get(),Ee=nt.get();Bt.vmult(qt[Z[(Nt+1)%Z.length]],Yt),Bt.vmult(qt[Z[(Nt+2)%Z.length]],Ee),_t.vadd(Yt,Yt),_t.vadd(Ee,Ee);var fe=vt;Ee.vsub(Yt,fe);var Qt=C;fe.unit(Qt);var Pe=nt.get(),xe=nt.get();gt.vsub(Yt,xe);var qe=xe.dot(Qt);Qt.mult(qe,Pe),Pe.vadd(Yt,Pe);var ye=nt.get();if(Pe.vsub(gt,ye),qe>0&&qe*qe<fe.norm2()&&ye.norm2()<Pt*Pt){var yt=this.createContactEquation(bt,Ut,st,ft);Pe.vsub(_t,yt.rj),Pe.vsub(gt,yt.ni),yt.ni.normalize(),yt.ni.mult(Pt,yt.ri),yt.rj.vadd(_t,yt.rj),yt.rj.vsub(Ut.position,yt.rj),yt.ri.vadd(gt,yt.ri),yt.ri.vsub(bt.position,yt.ri),this.result.push(yt),this.createFrictionEquationsFromContact(yt,this.frictionResult);for(var Nt=0,se=Kt.length;Nt!==se;Nt++)nt.release(Kt[Nt]);nt.release(Yt),nt.release(Ee),nt.release(Pe),nt.release(ye),nt.release(xe);return}nt.release(Yt),nt.release(Ee),nt.release(Pe),nt.release(ye),nt.release(xe)}for(var Nt=0,se=Kt.length;Nt!==se;Nt++)nt.release(Kt[Nt])}}},new c,new c,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(st,ft,gt,_t,Jt,Bt,bt,Ut){ft.convexPolyhedronRepresentation.material=ft.material,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.planeConvex(st,ft.convexPolyhedronRepresentation,gt,_t,Jt,Bt,bt,Ut)};var Ft=new c,le=new c,Mt=new c,kt=new c;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=Ft,Rt=le;Rt.set(0,0,1),Jt.vmult(Rt,Rt);for(var It=0,qt=Mt,Pt=0;Pt!==ft.vertices.length;Pt++){nt.copy(ft.vertices[Pt]),Bt.vmult(nt,nt),_t.vadd(nt,nt),nt.vsub(gt,qt);var At=Rt.dot(qt);if(At<=0){var Dt=this.createContactEquation(bt,Ut,st,ft),jt=kt;Rt.mult(Rt.dot(qt),jt),nt.vsub(jt,jt),jt.vsub(gt,Dt.ri),Dt.ni.copy(Rt),nt.vsub(_t,Dt.rj),Dt.ri.vadd(gt,Dt.ri),Dt.ri.vsub(bt.position,Dt.ri),Dt.rj.vadd(_t,Dt.rj),Dt.rj.vsub(Ut.position,Dt.rj),this.result.push(Dt),It++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Dt,this.frictionResult)}}this.enableFrictionReduction&&It&&this.createFrictionFromAverage(It)};var Zt=new c,$t=new c;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(st,ft,gt,_t,Jt,Bt,bt,Ut,nt,Rt,It,qt){var Pt=Zt;if(!(gt.distanceTo(_t)>st.boundingSphereRadius+ft.boundingSphereRadius)&&st.findSeparatingAxis(ft,gt,Jt,_t,Bt,Pt,It,qt)){var At=[],Dt=$t;st.clipAgainstHull(gt,Jt,ft,_t,Bt,Pt,-100,100,At);for(var jt=0,oe=0;oe!==At.length;oe++){var yt=this.createContactEquation(bt,Ut,st,ft,nt,Rt),w=yt.ri,V=yt.rj;Pt.negate(yt.ni),At[oe].normal.negate(Dt),Dt.mult(At[oe].depth,Dt),At[oe].point.vadd(Dt,w),V.copy(At[oe].point),w.vsub(gt,w),V.vsub(_t,V),w.vadd(gt,w),w.vsub(bt.position,w),V.vadd(_t,V),V.vsub(Ut.position,V),this.result.push(yt),jt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(yt,this.frictionResult)}this.enableFrictionReduction&&jt&&this.createFrictionFromAverage(jt)}};var Wt=new c,ce=new c,ie=new c;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=Wt;nt.set(0,0,1),bt.quaternion.vmult(nt,nt);var Rt=ce;_t.vsub(bt.position,Rt);var It=nt.dot(Rt);if(It<=0){var qt=this.createContactEquation(Ut,bt,ft,st);qt.ni.copy(nt),qt.ni.negate(qt.ni),qt.ri.set(0,0,0);var Pt=ie;nt.mult(nt.dot(_t),Pt),_t.vsub(Pt,Pt),qt.rj.copy(Pt),this.result.push(qt),this.createFrictionEquationsFromContact(qt,this.frictionResult)}};var me=new c;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=me;nt.set(0,0,1),_t.vsub(gt,nt);var Rt=nt.norm2();if(Rt<=st.radius*st.radius){var It=this.createContactEquation(Ut,bt,ft,st);nt.normalize(),It.rj.copy(nt),It.rj.mult(st.radius,It.rj),It.ni.copy(nt),It.ni.negate(It.ni),It.ri.set(0,0,0),this.result.push(It),this.createFrictionEquationsFromContact(It,this.frictionResult)}};var W=new u,Lt=new c;new c;var lt=new c,pt=new c,Vt=new c;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=-1,Rt=lt,It=Vt,qt=null,Pt=Lt;if(Pt.copy(_t),Pt.vsub(gt,Pt),Jt.conjugate(W),W.vmult(Pt,Pt),st.pointIsInside(Pt)){st.worldVerticesNeedsUpdate&&st.computeWorldVertices(gt,Jt),st.worldFaceNormalsNeedsUpdate&&st.computeWorldFaceNormals(Jt);for(var At=0,Dt=st.faces.length;At!==Dt;At++){var jt=[st.worldVertices[st.faces[At][0]]],oe=st.worldFaceNormals[At];_t.vsub(jt[0],pt);var yt=-oe.dot(pt);(qt===null||Math.abs(yt)<Math.abs(qt))&&(qt=yt,nt=At,Rt.copy(oe))}if(nt!==-1){var w=this.createContactEquation(Ut,bt,ft,st);Rt.mult(qt,It),It.vadd(_t,It),It.vsub(gt,It),w.rj.copy(It),Rt.negate(w.ni),w.ri.set(0,0,0);var V=w.ri,tt=w.rj;V.vadd(_t,V),V.vsub(Ut.position,V),tt.vadd(gt,tt),tt.vsub(bt.position,tt),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(st,ft,gt,_t,Jt,Bt,bt,Ut){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexHeightfield(st.convexPolyhedronRepresentation,ft,gt,_t,Jt,Bt,bt,Ut)};var Ot=new c,re=new c,Te=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=ft.data,Rt=ft.elementSize,It=st.boundingSphereRadius,qt=re,Pt=Te,At=Ot;f.pointToLocalFrame(_t,Bt,gt,At);var Dt=Math.floor((At.x-It)/Rt)-1,jt=Math.ceil((At.x+It)/Rt)+1,oe=Math.floor((At.y-It)/Rt)-1,yt=Math.ceil((At.y+It)/Rt)+1;if(!(jt<0||yt<0||Dt>nt.length||oe>nt[0].length)){Dt<0&&(Dt=0),jt<0&&(jt=0),oe<0&&(oe=0),yt<0&&(yt=0),Dt>=nt.length&&(Dt=nt.length-1),jt>=nt.length&&(jt=nt.length-1),yt>=nt[0].length&&(yt=nt[0].length-1),oe>=nt[0].length&&(oe=nt[0].length-1);var w=[];ft.getRectMinMax(Dt,oe,jt,yt,w);var V=w[0],tt=w[1];if(!(At.z-It>tt||At.z+It<V))for(var Z=Dt;Z<jt;Z++)for(var G=oe;G<yt;G++)ft.getConvexTrianglePillar(Z,G,!1),f.pointToWorldFrame(_t,Bt,ft.pillarOffset,qt),gt.distanceTo(qt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ft.pillarConvex,gt,qt,Jt,Bt,bt,Ut,null,null,Pt,null),ft.getConvexTrianglePillar(Z,G,!0),f.pointToWorldFrame(_t,Bt,ft.pillarOffset,qt),gt.distanceTo(qt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ft.pillarConvex,gt,qt,Jt,Bt,bt,Ut,null,null,Pt,null)}};var be=new c,ae=new c;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(st,ft,gt,_t,Jt,Bt,bt,Ut){var nt=ft.data,Rt=st.radius,It=ft.elementSize,qt=ae,Pt=be;f.pointToLocalFrame(_t,Bt,gt,Pt);var At=Math.floor((Pt.x-Rt)/It)-1,Dt=Math.ceil((Pt.x+Rt)/It)+1,jt=Math.floor((Pt.y-Rt)/It)-1,oe=Math.ceil((Pt.y+Rt)/It)+1;if(!(Dt<0||oe<0||At>nt.length||oe>nt[0].length)){At<0&&(At=0),Dt<0&&(Dt=0),jt<0&&(jt=0),oe<0&&(oe=0),At>=nt.length&&(At=nt.length-1),Dt>=nt.length&&(Dt=nt.length-1),oe>=nt[0].length&&(oe=nt[0].length-1),jt>=nt[0].length&&(jt=nt[0].length-1);var yt=[];ft.getRectMinMax(At,jt,Dt,oe,yt);var w=yt[0],V=yt[1];if(!(Pt.z-Rt>V||Pt.z+Rt<w))for(var tt=this.result,Z=At;Z<Dt;Z++)for(var G=jt;G<oe;G++){var rt=tt.length;ft.getConvexTrianglePillar(Z,G,!1),f.pointToWorldFrame(_t,Bt,ft.pillarOffset,qt),gt.distanceTo(qt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ft.pillarConvex,gt,qt,Jt,Bt,bt,Ut),ft.getConvexTrianglePillar(Z,G,!0),f.pointToWorldFrame(_t,Bt,ft.pillarOffset,qt),gt.distanceTo(qt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ft.pillarConvex,gt,qt,Jt,Bt,bt,Ut);var Ct=tt.length-rt;if(Ct>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=_;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var f=e("./Narrowphase"),u=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),h=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),d=e("../collision/AABB"),x=e("../collision/Ray"),M=e("../collision/NaiveBroadphase");function _(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new M,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new f(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new h("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new u,new d;var A=new x;if(_.prototype.getContactMaterial=function(I,Q){return this.contactMaterialTable.get(I.id,Q.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var I=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=I,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(I){this.bodies.indexOf(I)===-1&&(I.index=this.bodies.length,this.bodies.push(I),I.world=this,I.initPosition.copy(I.position),I.initVelocity.copy(I.velocity),I.timeLastSleepy=this.time,I instanceof v&&(I.initAngularVelocity.copy(I.angularVelocity),I.initQuaternion.copy(I.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=I,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(I){this.constraints.push(I)},_.prototype.removeConstraint=function(I){var Q=this.constraints.indexOf(I);Q!==-1&&this.constraints.splice(Q,1)},_.prototype.rayTest=function(I,Q,$){$ instanceof m?this.raycastClosest(I,Q,{skipBackfaces:!0},$):this.raycastAll(I,Q,{skipBackfaces:!0},$)},_.prototype.raycastAll=function(I,Q,$,F){return $.mode=x.ALL,$.from=I,$.to=Q,$.callback=F,A.intersectWorld(this,$)},_.prototype.raycastAny=function(I,Q,$,F){return $.mode=x.ANY,$.from=I,$.to=Q,$.result=F,A.intersectWorld(this,$)},_.prototype.raycastClosest=function(I,Q,$,F){return $.mode=x.CLOSEST,$.from=I,$.to=Q,$.result=F,A.intersectWorld(this,$)},_.prototype.remove=function(I){I.world=null;var Q=this.bodies.length-1,$=this.bodies,F=$.indexOf(I);if(F!==-1){$.splice(F,1);for(var j=0;j!==$.length;j++)$[j].index=j;this.collisionMatrix.setNumObjects(Q),this.removeBodyEvent.body=I,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(I){this.materials.push(I)},_.prototype.addContactMaterial=function(I){this.contactmaterials.push(I),this.contactMaterialTable.set(I.materials[0].id,I.materials[1].id,I)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var U=new s;_.prototype.step=function(I,Q,$){if($=$||10,Q=Q||0,Q===0)this.internalStep(I),this.time+=I;else{var F=Math.floor((this.time+Q)/I)-Math.floor(this.time/I);F=Math.min(F,$);for(var j=performance.now(),z=0;z!==F&&(this.internalStep(I),!(performance.now()-j>I*1e3));z++);this.time+=Q;for(var b=this.time%I,R=b/I,H=U,K=this.bodies,et=0;et!==K.length;et++){var k=K[et];k.type!==v.STATIC&&k.sleepState!==v.SLEEPING?(k.position.vsub(k.previousPosition,H),H.scale(R,H),k.position.vadd(H,k.interpolatedPosition)):(k.interpolatedPosition.copy(k.position),k.interpolatedQuaternion.copy(k.quaternion))}}};var L={type:"postStep"},E={type:"preStep"},y={type:"collide",body:null,contact:null},T=[],B=[],N=[],X=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var q=new o,J=new o,O=new s;_.prototype.internalStep=function(I){this.dt=I;var Q=this.contacts,$=N,F=X,j=this.numObjects(),z=this.bodies,b=this.solver,R=this.gravity,H=this.doProfiling,K=this.profile,et=v.DYNAMIC,k,it=this.constraints,mt=B;R.norm();var St=R.x,Et=R.y,D=R.z,dt=0;for(H&&(k=performance.now()),dt=0;dt!==j;dt++){var ht=z[dt];if(ht.type&et){var Xt=ht.force,xt=ht.mass;Xt.x+=xt*St,Xt.y+=xt*Et,Xt.z+=xt*D}}for(var dt=0,ne=this.subsystems.length;dt!==ne;dt++)this.subsystems[dt].update();H&&(k=performance.now()),$.length=0,F.length=0,this.broadphase.collisionPairs(this,$,F),H&&(K.broadphase=performance.now()-k);var Zt=it.length;for(dt=0;dt!==Zt;dt++){var vt=it[dt];if(!vt.collideConnected)for(var C=$.length-1;C>=0;C-=1)(vt.bodyA===$[C]&&vt.bodyB===F[C]||vt.bodyB===$[C]&&vt.bodyA===F[C])&&($.splice(C,1),F.splice(C,1))}this.collisionMatrixTick(),H&&(k=performance.now());var S=T,Y=Q.length;for(dt=0;dt!==Y;dt++)S.push(Q[dt]);Q.length=0;var ct=this.frictionEquations.length;for(dt=0;dt!==ct;dt++)mt.push(this.frictionEquations[dt]);this.frictionEquations.length=0,this.narrowphase.getContacts($,F,this,Q,S,this.frictionEquations,mt),H&&(K.narrowphase=performance.now()-k),H&&(k=performance.now());for(var dt=0;dt<this.frictionEquations.length;dt++)b.addEquation(this.frictionEquations[dt]);for(var ut=Q.length,ot=0;ot!==ut;ot++){var vt=Q[ot],ht=vt.bi,wt=vt.bj;vt.si,vt.sj;var Tt;if(ht.material&&wt.material?Tt=this.getContactMaterial(ht.material,wt.material)||this.defaultContactMaterial:Tt=this.defaultContactMaterial,Tt.friction,ht.material&&wt.material&&(ht.material.friction>=0&&wt.material.friction>=0&&ht.material.friction*wt.material.friction,ht.material.restitution>=0&&wt.material.restitution>=0&&(vt.restitution=ht.material.restitution*wt.material.restitution)),b.addEquation(vt),ht.allowSleep&&ht.type===v.DYNAMIC&&ht.sleepState===v.SLEEPING&&wt.sleepState===v.AWAKE&&wt.type!==v.STATIC){var Ft=wt.velocity.norm2()+wt.angularVelocity.norm2(),le=Math.pow(wt.sleepSpeedLimit,2);Ft>=le*2&&(ht._wakeUpAfterNarrowphase=!0)}if(wt.allowSleep&&wt.type===v.DYNAMIC&&wt.sleepState===v.SLEEPING&&ht.sleepState===v.AWAKE&&ht.type!==v.STATIC){var Mt=ht.velocity.norm2()+ht.angularVelocity.norm2(),kt=Math.pow(ht.sleepSpeedLimit,2);Mt>=kt*2&&(wt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ht,wt,!0),this.collisionMatrixPrevious.get(ht,wt)||(y.body=wt,y.contact=vt,ht.dispatchEvent(y),y.body=ht,wt.dispatchEvent(y))}for(H&&(K.makeContactConstraints=performance.now()-k,k=performance.now()),dt=0;dt!==j;dt++){var ht=z[dt];ht._wakeUpAfterNarrowphase&&(ht.wakeUp(),ht._wakeUpAfterNarrowphase=!1)}var Zt=it.length;for(dt=0;dt!==Zt;dt++){var vt=it[dt];vt.update();for(var C=0,$t=vt.equations.length;C!==$t;C++){var Wt=vt.equations[C];b.addEquation(Wt)}}b.solve(I,this),H&&(K.solve=performance.now()-k),b.removeAllEquations();var ce=Math.pow;for(dt=0;dt!==j;dt++){var ht=z[dt];if(ht.type&et){var ie=ce(1-ht.linearDamping,I),me=ht.velocity;me.mult(ie,me);var W=ht.angularVelocity;if(W){var Lt=ce(1-ht.angularDamping,I);W.mult(Lt,W)}}}for(this.dispatchEvent(E),dt=0;dt!==j;dt++){var ht=z[dt];ht.preStep&&ht.preStep.call(ht)}H&&(k=performance.now());var lt=q,pt=J,Vt=this.stepnumber,Ot=v.DYNAMIC|v.KINEMATIC,re=Vt%(this.quatNormalizeSkip+1)===0,Te=this.quatNormalizeFast,be=I*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,dt=0;dt!==j;dt++){var ae=z[dt],st=ae.force,ft=ae.torque;if(ae.type&Ot&&ae.sleepState!==v.SLEEPING){var gt=ae.velocity,_t=ae.angularVelocity,Jt=ae.position,Bt=ae.quaternion,bt=ae.invMass,Ut=ae.invInertiaWorld;gt.x+=st.x*bt*I,gt.y+=st.y*bt*I,gt.z+=st.z*bt*I,ae.angularVelocity&&(Ut.vmult(ft,O),O.mult(I,O),O.vadd(_t,_t)),Jt.x+=gt.x*I,Jt.y+=gt.y*I,Jt.z+=gt.z*I,ae.angularVelocity&&(lt.set(_t.x,_t.y,_t.z,0),lt.mult(Bt,pt),Bt.x+=be*pt.x,Bt.y+=be*pt.y,Bt.z+=be*pt.z,Bt.w+=be*pt.w,re&&(Te?Bt.normalizeFast():Bt.normalize())),ae.aabb&&(ae.aabbNeedsUpdate=!0),ae.updateInertiaWorld&&ae.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,H&&(K.integrate=performance.now()-k),this.time+=I,this.stepnumber+=1,this.dispatchEvent(L),dt=0;dt!==j;dt++){var ht=z[dt],nt=ht.postStep;nt&&nt.call(ht)}if(this.allowSleep)for(dt=0;dt!==j;dt++)z[dt].sleepTick(this.time)},_.prototype.clearForces=function(){for(var I=this.bodies,Q=I.length,$=0;$!==Q;$++){var F=I[$];F.force,F.torque,F.force.set(0,0,0),F.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})}(ts)),ts.exports}dp();const Mr=new fp({antialias:!0}),No=window.innerWidth,Fo=window.innerHeight,pp=-1e-4;Mr.setSize(No,Fo);document.body.appendChild(Mr.domElement);const mp=new Ec,vp=mp.load("resources/alien.jpg");vp.colorSpace=Ke;const gp=75,_p=No/Fo,xp=.1,yp=1e3,Sn=new je(gp,_p,xp,yp);Sn.position.z=15;const Sr=new mc;Sr.background=new _e(30719);class Mp{constructor(t,e,n,a){this.x=t,this.y=e,this.z=n,this.r=a}load(){this.geometry=new Js(this.r,20,20),this.material=new Vs({color:30549}),this.wire=new Vs({color:16777215,wireframe:!0}),this.mesh=new Qe(this.geometry,this.material),this.wiredMesh=new Qe(this.geometry,this.wire),this.wiredMesh.scale.setScalar(1.001),this.mesh.add(this.wiredMesh),this.mesh.position.x=this.x,this.mesh.position.y=this.y,this.mesh.position.z=this.z,this.mesh.rotateZ(Hl.degToRad(90)),this.light=new bc(16777215,5),this.light.position.set(this.x,this.y+10,this.z+5)}}class Sp{constructor(t,e){this.width=t,this.height=e}load(){this.geometry=new Hi(this.width,this.height),this.material=new Vs({color:16746649}),this.mesh=new Qe(this.geometry,this.material),this.mesh.receiveShadow=!0}}let Xe=new Mp(0,0,0,1);Xe.load();Sr.add(Xe.mesh,Xe.light);Sn.position.y=Xe.mesh.position.y;Sn.position.x=Xe.mesh.position.x;Sn.position.z=Xe.mesh.position.z+10;let Er=new Sp(20,1e3);Er.load();Er.mesh.rotation.x=80;Er.mesh.position.set(0,Xe.mesh.position.y-Xe.r,0);Sr.add(Er.mesh);Sn.lookAt(Xe.mesh.position.x,Xe.mesh.position.y,Xe.mesh.position.z);function Bo(i=0){Sn.position.set(0,Xe.mesh.position.y+5,Xe.mesh.position.z+10),Mr.render(Sr,Sn),requestAnimationFrame(Bo)}function Ep(i){i.which==38&&(Xe.mesh.rotation.x+=pp*1e3)}document.addEventListener("keydown",Ep,!1);Bo();window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;Mr.setSize(i,t),Sn.aspect=i/t,Sn.updateProjectionMatrix()});
