class R{constructor(t){this.properties=t??[]}get(t){const n=this.properties.filter(r=>r.name===t).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+t+'"');if(n.length!==0)return n[0]}getString(t){return this.getByType(t,"string")}getNumber(t){return this.getByType(t,"number")}getBoolean(t){return this.getByType(t,"boolean")}getByType(t,n){const r=this.get(t);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+t+'" to have type "'+n+'"');return r}}mustGetString(t){return this.mustGetByType(t,"string")}mustGetNumber(t){return this.mustGetByType(t,"number")}mustGetBoolean(t){return this.mustGetByType(t,"boolean")}mustGetByType(t,n){const r=this.get(t);if(r===void 0)throw new Error('Property "'+t+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+t+'" to have type "'+n+'"');return r}getType(t){const n=this.properties.filter(r=>r.name===t).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+t+'"');if(n.length!==0)return n[0]}}const ye="https://unpkg.com/@workadventure/scripting-api-extra@1.7.4/dist";class Te{constructor(t){this.name=t.name,this.x=t.x,this.y=t.y,this.properties=new R(t.properties)}get isReadable(){const t=this.properties.getString("readableBy");return t?WA.player.tags.includes(t):!0}get isWritable(){const t=this.properties.getString("writableBy");return t?WA.player.tags.includes(t):!0}}function X(e){const t=e?"#"+e.join():"";WA.nav.openCoWebSite(ye+"/configuration.html"+t,!0)}async function Oe(e,t){const n=await WA.room.getTiledMap(),r=new Map;return Ee(n.layers,r,e,t),r}function Ee(e,t,n,r){for(const s of e)if(s.type==="objectgroup"){for(const o of s.objects)if(o.type==="variable"||o.class==="variable"){if(n&&s.name!==n||r&&!r.includes(o.name))continue;t.set(o.name,new Te(o))}}else s.type==="group"&&Ee(s.layers,t,n,r)}let j;async function M(){return j===void 0&&(j=Ie()),j}async function Ie(){return Ne(await WA.room.getTiledMap())}function Ne(e){const t=new Map;return me(e.layers,"",t),t}function me(e,t,n){for(const r of e)r.type==="group"?me(r.layers,t+r.name+"/",n):(r.name=t+r.name,n.set(r.name,r))}async function ve(){const e=await M(),t=[];for(const n of e.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&t.push(r);return t}function Le(e){let t=1/0,n=1/0,r=0,s=0;const o=e.data;if(typeof o=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<e.height;i++)for(let a=0;a<e.width;a++)o[a+i*e.width]!==0&&(t=Math.min(t,a),s=Math.max(s,a),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:t,right:s+1,bottom:r+1}}function Ae(e){let t=1/0,n=1/0,r=0,s=0;for(const o of e){const i=Le(o);i.left<t&&(t=i.left),i.top<n&&(n=i.top),i.right>s&&(s=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:t,right:s,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var Me=Object.prototype.toString,O=Array.isArray||function(t){return Me.call(t)==="[object Array]"};function F(e){return typeof e=="function"}function We(e){return O(e)?"array":typeof e}function V(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Q(e,t){return e!=null&&typeof e=="object"&&t in e}function Pe(e,t){return e!=null&&typeof e!="object"&&e.hasOwnProperty&&e.hasOwnProperty(t)}var Ge=RegExp.prototype.test;function Be(e,t){return Ge.call(e,t)}var xe=/\S/;function ke(e){return!Be(xe,e)}var De={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Ue(e){return String(e).replace(/[&<>"'`=\/]/g,function(n){return De[n]})}var je=/\s*/,Ve=/\s+/,z=/\s*=/,$e=/\s*\}/,He=/#|\^|\/|>|\{|&|=|!/;function Ke(e,t){if(!e)return[];var n=!1,r=[],s=[],o=[],i=!1,a=!1,c="",u=0;function d(){if(i&&!a)for(;o.length;)delete s[o.pop()];else o=[];i=!1,a=!1}var h,l,v;function w(S){if(typeof S=="string"&&(S=S.split(Ve,2)),!O(S)||S.length!==2)throw new Error("Invalid tags: "+S);h=new RegExp(V(S[0])+"\\s*"),l=new RegExp("\\s*"+V(S[1])),v=new RegExp("\\s*"+V("}"+S[1]))}w(t||y.tags);for(var p=new W(e),A,f,m,I,B,C;!p.eos();){if(A=p.pos,m=p.scanUntil(h),m)for(var U=0,Re=m.length;U<Re;++U)I=m.charAt(U),ke(I)?(o.push(s.length),c+=I):(a=!0,n=!0,c+=" "),s.push(["text",I,A,A+1]),A+=1,I===`
`&&(d(),c="",u=0,n=!1);if(!p.scan(h))break;if(i=!0,f=p.scan(He)||"name",p.scan(je),f==="="?(m=p.scanUntil(z),p.scan(z),p.scanUntil(l)):f==="{"?(m=p.scanUntil(v),p.scan($e),p.scanUntil(l),f="&"):m=p.scanUntil(l),!p.scan(l))throw new Error("Unclosed tag at "+p.pos);if(f==">"?B=[f,m,A,p.pos,c,u,n]:B=[f,m,A,p.pos],u++,s.push(B),f==="#"||f==="^")r.push(B);else if(f==="/"){if(C=r.pop(),!C)throw new Error('Unopened section "'+m+'" at '+A);if(C[1]!==m)throw new Error('Unclosed section "'+C[1]+'" at '+A)}else f==="name"||f==="{"||f==="&"?a=!0:f==="="&&w(m)}if(d(),C=r.pop(),C)throw new Error('Unclosed section "'+C[1]+'" at '+p.pos);return Ye(Fe(s))}function Fe(e){for(var t=[],n,r,s=0,o=e.length;s<o;++s)n=e[s],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(t.push(n),r=n));return t}function Ye(e){for(var t=[],n=t,r=[],s,o,i=0,a=e.length;i<a;++i)switch(s=e[i],s[0]){case"#":case"^":n.push(s),r.push(s),n=s[4]=[];break;case"/":o=r.pop(),o[5]=s[2],n=r.length>0?r[r.length-1][4]:t;break;default:n.push(s)}return t}function W(e){this.string=e,this.tail=e,this.pos=0}W.prototype.eos=function(){return this.tail===""};W.prototype.scan=function(t){var n=this.tail.match(t);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};W.prototype.scanUntil=function(t){var n=this.tail.search(t),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function T(e,t){this.view=e,this.cache={".":this.view},this.parent=t}T.prototype.push=function(t){return new T(t,this)};T.prototype.lookup=function(t){var n=this.cache,r;if(n.hasOwnProperty(t))r=n[t];else{for(var s=this,o,i,a,c=!1;s;){if(t.indexOf(".")>0)for(o=s.view,i=t.split("."),a=0;o!=null&&a<i.length;)a===i.length-1&&(c=Q(o,i[a])||Pe(o,i[a])),o=o[i[a++]];else o=s.view[t],c=Q(s.view,t);if(c){r=o;break}s=s.parent}n[t]=r}return F(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(t,n){this._cache[t]=n},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(t,n){var r=this.templateCache,s=t+":"+(n||y.tags).join(":"),o=typeof r<"u",i=o?r.get(s):void 0;return i==null&&(i=Ke(t,n),o&&r.set(s,i)),i};g.prototype.render=function(t,n,r,s){var o=this.getConfigTags(s),i=this.parse(t,o),a=n instanceof T?n:new T(n,void 0);return this.renderTokens(i,a,r,t,s)};g.prototype.renderTokens=function(t,n,r,s,o){for(var i="",a,c,u,d=0,h=t.length;d<h;++d)u=void 0,a=t[d],c=a[0],c==="#"?u=this.renderSection(a,n,r,s,o):c==="^"?u=this.renderInverted(a,n,r,s,o):c===">"?u=this.renderPartial(a,n,r,o):c==="&"?u=this.unescapedValue(a,n):c==="name"?u=this.escapedValue(a,n,o):c==="text"&&(u=this.rawValue(a)),u!==void 0&&(i+=u);return i};g.prototype.renderSection=function(t,n,r,s,o){var i=this,a="",c=n.lookup(t[1]);function u(l){return i.render(l,n,r,o)}if(c){if(O(c))for(var d=0,h=c.length;d<h;++d)a+=this.renderTokens(t[4],n.push(c[d]),r,s,o);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")a+=this.renderTokens(t[4],n.push(c),r,s,o);else if(F(c)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,s.slice(t[3],t[5]),u),c!=null&&(a+=c)}else a+=this.renderTokens(t[4],n,r,s,o);return a}};g.prototype.renderInverted=function(t,n,r,s,o){var i=n.lookup(t[1]);if(!i||O(i)&&i.length===0)return this.renderTokens(t[4],n,r,s,o)};g.prototype.indentPartial=function(t,n,r){for(var s=n.replace(/[^ \t]/g,""),o=t.split(`
`),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=s+o[i]);return o.join(`
`)};g.prototype.renderPartial=function(t,n,r,s){if(r){var o=this.getConfigTags(s),i=F(r)?r(t[1]):r[t[1]];if(i!=null){var a=t[6],c=t[5],u=t[4],d=i;c==0&&u&&(d=this.indentPartial(i,u,a));var h=this.parse(d,o);return this.renderTokens(h,n,r,d,s)}}};g.prototype.unescapedValue=function(t,n){var r=n.lookup(t[1]);if(r!=null)return r};g.prototype.escapedValue=function(t,n,r){var s=this.getConfigEscape(r)||y.escape,o=n.lookup(t[1]);if(o!=null)return typeof o=="number"&&s===y.escape?String(o):s(o)};g.prototype.rawValue=function(t){return t[1]};g.prototype.getConfigTags=function(t){return O(t)?t:t&&typeof t=="object"?t.tags:void 0};g.prototype.getConfigEscape=function(t){if(t&&typeof t=="object"&&!O(t))return t.escape};var y={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){N.templateCache=e},get templateCache(){return N.templateCache}},N=new g;y.clearCache=function(){return N.clearCache()};y.parse=function(t,n){return N.parse(t,n)};y.render=function(t,n,r,s){if(typeof t!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+We(t)+'" was given as the first argument for mustache#render(template, view, partials)');return N.render(t,n,r,s)};y.escape=Ue;y.Scanner=W;y.Context=T;y.Writer=g;class we{constructor(t,n){this.template=t,this.state=n,this.ast=y.parse(t)}getValue(){return this.value===void 0&&(this.value=y.render(this.template,this.state)),this.value}onChange(t){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const s=y.render(this.template,this.state);s!==this.value&&(this.value=s,t(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const t=new Set;return this.recursiveGetUsedVariables(this.ast,t),t}recursiveGetUsedVariables(t,n){for(const r of t){const s=r[0],o=r[1],i=r[4];["name","&","#","^"].includes(s)&&n.add(o),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function qe(){var e;const t=await ve();for(const n of t){const r=(e=n.properties)!==null&&e!==void 0?e:[];for(const s of r){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const o=new we(s.value,WA.state);if(o.isPureString())continue;const i=o.getValue();await Z(n.name,s.name,i),o.onChange(async a=>{await Z(n.name,s.name,a)})}}}async function Je(){var e;const t=await M();for(const[n,r]of t.entries())if(r.type!=="objectgroup"){const s=(e=r.properties)!==null&&e!==void 0?e:[];for(const o of s){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const i=new we(o.value,WA.state);if(i.isPureString())continue;const a=i.getValue();ee(n,o.name,a),i.onChange(c=>{ee(n,o.name,c)})}}}async function Z(e,t,n){console.log(e),(await WA.room.area.get(e)).setProperty(t,n)}function ee(e,t,n){WA.room.setProperty(e,t,n),t==="visible"&&(n?WA.room.showLayer(e):WA.room.hideLayer(e))}const Xe="https://admin.workadventu.re/html";let H,Y=0,q=0;function te(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const n of t.split(`
`))WA.room.showLayer(n);t=e.properties.mustGetString("closeLayer");for(const n of t.split(`
`))WA.room.hideLayer(n)}else{let t=e.properties.mustGetString("openLayer");for(const n of t.split(`
`))WA.room.hideLayer(n);t=e.properties.mustGetString("closeLayer");for(const n of t.split(`
`))WA.room.showLayer(n)}}function Qe(e){const t=e.properties.getString("openSound"),n=e.properties.getNumber("soundRadius");let r=1;if(n){const s=Ce(e.properties.mustGetString("openLayer").split(`
`));if(s>n)return;r=1-s/n}t&&WA.sound.loadSound(t).play({volume:r})}function ze(e){const t=e.properties.getString("closeSound"),n=e.properties.getNumber("soundRadius");let r=1;if(n){const s=Ce(e.properties.mustGetString("closeLayer").split(`
`));if(s>n)return;r=1-s/n}t&&WA.sound.loadSound(t).play({volume:r})}function Se(e){return e.map(t=>H.get(t)).filter(t=>(t==null?void 0:t.type)==="tilelayer")}function Ce(e){const t=Se(e),n=Ae(t),r=((n.right-n.left)/2+n.left)*32,s=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(Y-r,2)+Math.pow(q-s,2))}function Ze(e){WA.state.onVariableChange(e.name).subscribe(()=>{WA.state[e.name]?Qe(e):ze(e),te(e)}),te(e)}function ne(e,t,n,r){const s=e.name;let o,i,a=!1;const c=n.getString("tag");let u=!0;c&&!WA.player.tags.includes(c)&&(u=!1);const d=!!c;function h(){var f;o&&o.remove(),o=WA.ui.displayActionMessage({message:(f=n.getString("closeTriggerMessage"))!==null&&f!==void 0?f:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,l()}})}function l(){var f;o&&o.remove(),o=WA.ui.displayActionMessage({message:(f=n.getString("openTriggerMessage"))!==null&&f!==void 0?f:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,h()}})}function v(){let f;if(e.type==="tilelayer")f=Ae(Se(t.properties.mustGetString("closeLayer").split(`
`)));else{if(e.x===void 0||e.y===void 0||e.width===void 0||e.height===void 0)throw new Error(`Doorstep zone "${e.name}" is missing x, y, width or height`);f={top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}i=WA.room.website.create({name:"doorKeypad"+s,url:r+"/keypad.html#"+encodeURIComponent(s),position:{x:f.right*32,y:f.top*32,width:32*3,height:32*4},allowApi:!0})}function w(){i&&(WA.room.website.delete(i.name),i=void 0)}function p(){if(a=!0,n.getBoolean("autoOpen")&&u){WA.state[t.name]=!0;return}if(!WA.state[t.name]&&(d&&!u||!d)&&(n.getString("code")||n.getString("codeVariable"))){v();return}u&&(WA.state[t.name]?h():l())}function A(){a=!1,n.getBoolean("autoClose")&&(WA.state[t.name]=!1),o&&o.remove(),w()}e.type==="tilelayer"?(WA.room.onEnterLayer(s).subscribe(p),WA.room.onLeaveLayer(s).subscribe(A)):(WA.room.area.onEnter(s).subscribe(p),WA.room.area.onLeave(s).subscribe(A)),WA.state.onVariableChange(t.name).subscribe(()=>{a&&(!n.getBoolean("autoClose")&&WA.state[t.name]===!0&&h(),i&&WA.state[t.name]===!0&&w(),!n.getBoolean("autoOpen")&&WA.state[t.name]===!1&&l())})}function et(e){const t=e.properties.mustGetString("bellSound"),n=e.properties.getNumber("soundRadius");let r=1;if(n){const s=Math.sqrt(Math.pow(e.x-Y,2)+Math.pow(e.y-q,2));if(s>n)return;r=1-s/n}WA.sound.loadSound(t).play({volume:r})}function tt(e){WA.state[e.name]===void 0&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe(()=>{WA.state[e.name]&&et(e)})}function re(e,t,n){let r;const s=t.getString("bellPopup");if(n.type==="tilelayer"){const o=n.name;WA.room.onEnterLayer(o).subscribe(()=>{var i;s?r=WA.ui.openPopup(s,"",[{label:(i=t.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1}),WA.room.onLeaveLayer(o).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const o=n.name;WA.room.area.onEnter(o).subscribe(()=>{var i;s?r=WA.ui.openPopup(s,"",[{label:(i=t.getString("bellButtonText"))!==null&&i!==void 0?i:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1}),WA.room.area.onLeave(o).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function nt(e){e=e??Xe;const t=await Oe();H=await M();for(const n of t.values())n.properties.get("door")&&Ze(n),n.properties.get("bell")&&tt(n);for(const n of H.values()){const r=new R(n.properties),s=r.getString("doorVariable");if(s&&n.type==="tilelayer"){const i=t.get(s);if(i===void 0)throw new Error('Cannot find variable "'+s+'" referred in the "doorVariable" property of layer "'+n.name+'"');ne(n,i,r,e)}const o=r.getString("bellVariable");o&&n.type==="tilelayer"&&re(o,r,n)}for(const n of await ve()){const r=new R(n.properties),s=r.getString("doorVariable");if(s){const i=t.get(s);if(i===void 0)throw new Error('Cannot find variable "'+s+'" referred in the "doorVariable" property of object "'+n.name+'"');ne(n,i,r,e)}const o=r.getString("bellVariable");o&&re(o,r,n)}WA.player.onPlayerMove(n=>{Y=n.x,q=n.y})}function rt(e,t){const n=e.getString("bindVariable");if(n){const r=e.get("enterValue"),s=e.get("leaveValue"),o=e.getString("triggerMessage"),i=e.getString("tag");st(n,t,r,s,o,i)}}function st(e,t,n,r,s,o){o&&!WA.player.tags.includes(o)||(n!==void 0&&WA.room.onEnterLayer(t).subscribe(()=>{s||(WA.state[e]=n)}),r!==void 0&&WA.room.onLeaveLayer(t).subscribe(()=>{WA.state[e]=r}))}async function ot(){const e=await M();for(const t of e.values()){const n=new R(t.properties);rt(n,t.name)}}let se;async function it(e){const t=await WA.room.getTiledMap();e=e??ye,se=await M();const n=t.layers.find(r=>r.name==="configuration");if(n){const s=new R(n.properties).getString("tag");(!s||WA.player.tags.includes(s))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)});for(const o of se.values()){const i=new R(o.properties),a=i.getString("openConfig");a&&o.type==="tilelayer"&&at(a.split(","),o.name,i)}}}function at(e,t,n){let r;const s=n.getString("openConfigAdminTag");let o=!0;s&&!WA.player.tags.includes(s)&&(o=!1);function i(){var c;r&&r.remove(),r=WA.ui.displayActionMessage({message:(c=n.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>X(e)})}function a(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(t).subscribe(()=>{const c=n.getString("openConfigTrigger");o&&(c&&c==="onaction"?i():X(e))}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&r.remove(),a()})}function Mt(){return WA.onInit().then(()=>{nt().catch(e=>console.error(e)),ot().catch(e=>console.error(e)),it().catch(e=>console.error(e)),Je().catch(e=>console.error(e)),qe().catch(e=>console.error(e))}).catch(e=>console.error(e))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=["user","model","function"];var ie;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(ie||(ie={}));var ae;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(ae||(ae={}));var ce;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(ce||(ce={}));var ue;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(ue||(ue={}));var k;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(k||(k={}));var le;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(le||(le={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(e){e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT"})(fe||(fe={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class x extends E{constructor(t,n){super(t),this.response=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="https://generativelanguage.googleapis.com",ut="v1",lt="0.3.1",ft="genai-js";var b;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(b||(b={}));class P{constructor(t,n,r,s,o){this.model=t,this.task=n,this.apiKey=r,this.stream=s,this.requestOptions=o}toString(){var t;const n=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||ut;let r=`${ct}/${n}/${this.model}:${this.task}`;return this.stream&&(r+="?alt=sse"),r}}function dt(){return`${ft}/${lt}`}async function G(e,t,n){let r;try{if(r=await fetch(e.toString(),Object.assign(Object.assign({},pt(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":dt(),"x-goog-api-key":e.apiKey},body:t})),!r.ok){let s="";try{const o=await r.json();s=o.error.message,o.error.details&&(s+=` ${JSON.stringify(o.error.details)}`)}catch{}throw new Error(`[${r.status} ${r.statusText}] ${s}`)}}catch(s){const o=new E(`Error fetching from ${e.toString()}: ${s.message}`);throw o.stack=s.stack,o}return r}function pt(e){const t={};if((e==null?void 0:e.timeout)>=0){const n=new AbortController,r=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=r}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new x(`${_(e)}`,e);return ht(e)}else if(e.promptFeedback)throw new x(`Text not available. ${_(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function call from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new x(`${_(e)}`,e);return gt(e)}else if(e.promptFeedback)throw new x(`Function call not available. ${_(e)}`,e)},e}function ht(e){var t,n,r,s;return!((s=(r=(n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0?void 0:n.parts)===null||r===void 0?void 0:r[0])===null||s===void 0)&&s.text?e.candidates[0].content.parts.map(({text:o})=>o).join(""):""}function gt(e){var t,n,r,s;return(s=(r=(n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0?void 0:n.parts)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.functionCall}const yt=[k.RECITATION,k.SAFETY];function K(e){return!!e.finishReason&&yt.includes(e.finishReason)}function _(e){var t,n,r;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((r=e.candidates)===null||r===void 0)&&r[0]){const o=e.candidates[0];K(o)&&(s+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(s+=`: ${o.finishMessage}`))}return s}function L(e){return this instanceof L?(this.v=e,this):new L(e)}function Et(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),s,o=[];return s={},i("next"),i("throw"),i("return"),s[Symbol.asyncIterator]=function(){return this},s;function i(l){r[l]&&(s[l]=function(v){return new Promise(function(w,p){o.push([l,v,w,p])>1||a(l,v)})})}function a(l,v){try{c(r[l](v))}catch(w){h(o[0][3],w)}}function c(l){l.value instanceof L?Promise.resolve(l.value.v).then(u,d):h(o[0][2],l)}function u(l){a("next",l)}function d(l){a("throw",l)}function h(l,v){l(v),o.shift(),o.length&&a(o[0][0],o[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function mt(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=wt(t),[r,s]=n.tee();return{stream:At(r),response:vt(s)}}async function vt(e){const t=[],n=e.getReader();for(;;){const{done:r,value:s}=await n.read();if(r)return J(St(t));t.push(s)}}function At(e){return Et(this,arguments,function*(){const n=e.getReader();for(;;){const{value:r,done:s}=yield L(n.read());if(s)break;yield yield L(J(r))}})}function wt(e){const t=e.getReader();return new ReadableStream({start(r){let s="";return o();function o(){return t.read().then(({value:i,done:a})=>{if(a){if(s.trim()){r.error(new E("Failed to parse stream"));return}r.close();return}s+=i;let c=s.match(de),u;for(;c;){try{u=JSON.parse(c[1])}catch{r.error(new E(`Error parsing JSON response: "${c[1]}"`));return}r.enqueue(u),s=s.substring(c[0].length),c=s.match(de)}return o()})}}})}function St(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const r of e)if(r.candidates)for(const s of r.candidates){const o=s.index;if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:s.index}),n.candidates[o].citationMetadata=s.citationMetadata,n.candidates[o].finishReason=s.finishReason,n.candidates[o].finishMessage=s.finishMessage,n.candidates[o].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[o].content||(n.candidates[o].content={role:s.content.role||"user",parts:[]});const i={};for(const a of s.content.parts)a.text&&(i.text=a.text),a.functionCall&&(i.functionCall=a.functionCall),Object.keys(i).length===0&&(i.text=""),n.candidates[o].content.parts.push(i)}}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(e,t,n,r){const s=new P(t,b.STREAM_GENERATE_CONTENT,e,!0,r),o=await G(s,JSON.stringify(n),r);return mt(o)}async function _e(e,t,n,r){const s=new P(t,b.GENERATE_CONTENT,e,!1,r),i=await(await G(s,JSON.stringify(n),r)).json();return{response:J(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Ct(t)}function Ct(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const o of e)"functionResponse"in o?(n.parts.push(o),s=!0):(t.parts.push(o),r=!0);if(r&&s)throw new E("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new E("No content is provided for sending chat message.");return r?t:n}function $(e){return e.contents?e:{contents:[D(e)]}}function bt(e){return typeof e=="string"||Array.isArray(e)?{content:D(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=["text","inlineData","functionCall","functionResponse"],_t={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"]},he={user:["model"],function:["model"],model:["user","function"]};function Rt(e){let t;for(const n of e){const{role:r,parts:s}=n;if(!t&&r!=="user")throw new E(`First content should be with role 'user', got ${r}`);if(!oe.includes(r))throw new E(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(oe)}`);if(!Array.isArray(s))throw new E("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new E("Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0};for(const a of s)for(const c of pe)c in a&&(o[c]+=1);const i=_t[r];for(const a of pe)if(!i.includes(a)&&o[a]>0)throw new E(`Content with role '${r}' can't contain '${a}' part`);if(t&&!he[r].includes(t.role))throw new E(`Content with role '${r}' can't follow '${t.role}'. Valid previous roles: ${JSON.stringify(he)}`);t=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="SILENT_ERROR";class Tt{constructor(t,n,r,s){this.model=n,this.params=r,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,r!=null&&r.history&&(Rt(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var n,r,s;await this._sendPromise;const o=D(t),i={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,contents:[...this._history,o]};let a;return this._sendPromise=this._sendPromise.then(()=>_e(this._apiKey,this.model,i,this.requestOptions)).then(c=>{var u;if(c.response.candidates&&c.response.candidates.length>0){this._history.push(o);const d=Object.assign({parts:[],role:"model"},(u=c.response.candidates)===null||u===void 0?void 0:u[0].content);this._history.push(d)}else{const d=_(c.response);d&&console.warn(`sendMessage() was unsuccessful. ${d}. Inspect response object for details.`)}a=c}),await this._sendPromise,a}async sendMessageStream(t){var n,r,s;await this._sendPromise;const o=D(t),i={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,contents:[...this._history,o]},a=be(this._apiKey,this.model,i,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(c=>{throw new Error(ge)}).then(c=>c.response).then(c=>{if(c.candidates&&c.candidates.length>0){this._history.push(o);const u=Object.assign({},c.candidates[0].content);u.role||(u.role="model"),this._history.push(u)}else{const u=_(c);u&&console.warn(`sendMessageStream() was unsuccessful. ${u}. Inspect response object for details.`)}}).catch(c=>{c.message!==ge&&console.error(c)}),a}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n,r){const s=new P(t,b.COUNT_TOKENS,e,!1,{});return(await G(s,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e,t,n,r){const s=new P(t,b.EMBED_CONTENT,e,!1,{});return(await G(s,JSON.stringify(n),r)).json()}async function Nt(e,t,n,r){const s=new P(t,b.BATCH_EMBED_CONTENTS,e,!1,{}),o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await G(s,JSON.stringify({requests:o}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,n,r){this.apiKey=t,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.requestOptions=r||{}}async generateContent(t){const n=$(t);return _e(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},n),this.requestOptions)}async generateContentStream(t){const n=$(t);return be(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},n),this.requestOptions)}startChat(t){return new Tt(this.apiKey,this.model,Object.assign({tools:this.tools},t),this.requestOptions)}async countTokens(t){const n=$(t);return Ot(this.apiKey,this.model,n)}async embedContent(t){const n=bt(t);return It(this.apiKey,this.model,n)}async batchEmbedContents(t){return Nt(this.apiKey,this.model,t,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new E("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Lt(this.apiKey,t,n)}}export{Wt as G,Mt as b};
