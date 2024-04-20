/*!
 * PSPDFKit for Web 2024.3.0 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(self.webpackChunkPSPDFKit=self.webpackChunkPSPDFKit||[]).push([[5658],{86528:(e,t,n)=>{n.d(t,{V:()=>s});var r=n(87463),i=n(33427),a=n(11765),o=n(21853);class s{constructor(e){this.ctx=e}renderTile(e,t,n,s,l,c){let d;c&&(d={annotations:c.annotations.filter(i.d).map(a.Hs).toJS().map((e=>({content:e}))),formFieldValues:c.formFieldValues.map(a.kr).toJS(),formFields:c.formFields.map(a.vD).toJS(),signatures:c.signatures||[],attachments:c.attachments});const m=r.f.Renderer.renderTile(this.ctx,e,t,n,{renderForPrinting:s,renderText:l,priority:t.width===n.width&&t.height===n.height?r.f.Priority.High:r.f.Priority.Normal},d).then((e=>(0,o.R9)({buffer:e.buffer,width:n.width,height:n.height,format:e.format}).then((e=>{if(null===e)throw new Error("Image handle is null");return e}))));return{promise:m.promise,cancel:m.cancel}}}},87460:(e,t,n)=>{n.d(t,{W:()=>m});var r=n(96156),i=n(35369),a=n(15359),o=n(45249),s=n(33427),l=n(60209);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}class m{constructor(){(0,r.Z)(this,"attachmentsCache",(0,i.D5)()),(0,r.Z)(this,"cachedAPStreams",(0,i.D5)()),(0,r.Z)(this,"pageAPStreamsPromises",(0,i.D5)()),(0,r.Z)(this,"annotationAPStreamPromises",(0,i.D5)())}getAnnotationFormFieldAndValue(e){var t;const n=this.provider;(0,a.kG)(n instanceof n.constructor,"Backend can only use backend annotation provider");const r=e instanceof o.x_?null===(t=n._readStateCallbacks)||void 0===t?void 0:t.getFormFieldByName(e.formFieldName):null;return{formField:r,formFieldValue:!r||r instanceof o.Yo?null:new o.KD({name:r.name,value:void 0!==r.formattedValue?r.formattedValue:"string"==typeof r.value?r.value:r.values})}}getAnnotationAvailableVariants(e){var t;const n=this.provider;(0,a.kG)(n instanceof n.constructor,"Backend can only use backend annotation provider");return[...(null===(t=n._readStateCallbacks)||void 0===t?void 0:t.getAvailableVariants(e))||[],"normal"]}cachedRenderAnnotation(e,t,n,r,i){const o=this.provider;(0,a.kG)(o instanceof o.constructor,"Backend can only use backend annotation provider");const{formField:l,formFieldValue:c}=this.getAnnotationFormFieldAndValue(e);if(!(0,s._R)(e,l))return this.renderAnnotation(e,c,t,n,r,i);const m=this.getAnnotationAvailableVariants(e);let h=!1,u=()=>{h=!0};return{promise:new Promise((async(a,o)=>{const s=t=>{const n=this.annotationAPStreamPromises.get(e.id);n&&(this.annotationAPStreamPromises=this.annotationAPStreamPromises.delete(e.id),n(t))},l=this.annotationAPStreamPromises.get(e.id);this.annotationAPStreamPromises=this.annotationAPStreamPromises.set(e.id,a),l&&l(null);try{const o=this.pageAPStreamsPromises.get(e.pageIndex);if(!o){const t=new Promise((t=>{this.annotationAPStreamPromises=this.annotationAPStreamPromises.set(e.id,t)}));return void a(await t)}await o;const l=this.cachedAPStreams.get(e.pageIndex);if(l){const t=l?l.get(e.id):null;if(t)return void s(this.getAPStream(t,i))}const{promise:p,cancel:f}=this.renderAPStream(e,c,t,n,r,m,i);if(h)s(null);else if(u=f,m.length>1){const t=await Promise.all(p.map((e=>e.promise)));s(t[m.indexOf(i||"normal")]),t.some(Boolean)&&this.cacheAPStream(m.reduce(((e,n,r)=>d(d({},e),{},{[n]:t[r]})),{}),e)}else{const t=await p,n=t?this.getAPStream(t,i):null;s(n),n&&this.cacheAPStream(t,e)}}catch(e){o(e)}})),cancel:u}}cacheAPStream(e,t){let n=this.cachedAPStreams.get(t.pageIndex);n||(this.cachedAPStreams=this.cachedAPStreams.set(t.pageIndex,(0,i.D5)()),n=this.cachedAPStreams.get(t.pageIndex)),this.cachedAPStreams=this.cachedAPStreams.setIn([t.pageIndex,t.id],e)}clearAllPageAPStreams(e){const t=this.cachedAPStreams.get(e);t&&(t.forEach((e=>{this.releaseAPStream(e)})),this.cachedAPStreams=this.cachedAPStreams.delete(e)),this.pageAPStreamsPromises=this.pageAPStreamsPromises.delete(e)}clearPageAPStreams(e,t){const n=this.cachedAPStreams.get(e);n&&(n.filter(((e,n)=>t.has(n))).forEach((e=>{this.releaseAPStream(e)})),this.cachedAPStreams=this.cachedAPStreams.updateIn([e],(e=>e.filter(((e,n)=>!t.has(n))))))}getAPStream(e,t){return e instanceof l.Z?e:(null==e?void 0:e[t||"normal"])||null}renderAPStream(e,t,n,r,i,a,o){if(a.length>1){const o=a.map((a=>this.renderAnnotation(e,t,n,r,i,"normal"!==a?a:void 0)));return{promise:o,cancel:()=>{o.forEach((e=>{e.cancel()}))}}}return this.renderAnnotation(e,t,n,r,i,o)}releaseAPStream(e){e instanceof l.Z?e.release():Object.values(e).forEach((e=>{e.release()}))}}},67055:(e,t,n)=>{n.d(t,{i:()=>s});var r=n(35369);class i extends(r.WV({id:"",attachmentId:"",description:null,fileName:null,fileSize:null,updatedAt:null})){}var a=n(34923);function o(e,t){return t}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return o(0,n)?new i({id:(0,a.C)(),description:t.fileDescription,attachmentId:e,fileName:t.fileName||null,fileSize:t.fileSize||null,updatedAt:t.modificationDate?new Date(t.modificationDate):null}):new i({id:e,description:t.description,attachmentId:t.fileAttachmentId,fileName:t.fileName||null,fileSize:t.fileSize||null,updatedAt:new Date(t.updatedAt)||null})}},7407:(e,t,n)=>{n.d(t,{a:()=>l,i:()=>c});var r=n(15359),i=n(35369),a=n(96029),o=n(74751),s=n(45249);function l(e){return{type:"pspdfkit/outline-element",children:e.children&&e.children.map((e=>l(e))).toJS(),title:e.title,color:e.color&&(0,o.C)(e.color),isBold:e.isBold,isItalic:e.isItalic,isExpanded:e.isExpanded,action:e.action&&(0,a.vP)(e.action)}}function c(e){let t,n;(0,r.kG)("pspdfkit/outline-element"===e.type,"invalid outline element type."),(0,r.kG)(null==e.children||Array.isArray(e.children),"children must be an Array<OutlineElement>."),(0,r.kG)("string"==typeof e.title,"title must be a string."),(0,r.kG)(null==e.isBold||"boolean"==typeof e.isBold,"isBold must be a boolean."),(0,r.kG)(null==e.isItalic||"boolean"==typeof e.isItalic,"isItalic must be a boolean."),(0,r.kG)(null==e.isExpanded||"boolean"==typeof e.isExpanded,"isExpanded must be a boolean.");try{t=e.action&&(0,a.lk)(e.action)}catch(t){(0,r.ZK)(`PDF Action not supported ${JSON.stringify(e.action)})`)}try{n=e.color&&(0,o.b)(e.color)}catch(t){(0,r.ZK)(`Invalid color:\n\n${e.color}`)}const l={title:e.title,color:n,isBold:!0===e.isBold,isItalic:!0===e.isItalic,isExpanded:!0===e.isExpanded,action:t,children:(0,i.aV)()};return e.children&&e.children.length>0&&(l.children=(0,i.aV)(e.children.map(c))),new s.sT(l)}},88265:(e,t,n)=>{n.d(t,{M:()=>o});var r=n(96156);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n,r,i,o){let s;return e.has(n)?s=e.get(n):(s=i.toString(),t[s]=n,e.set(n,s)),a(a({},r),{},{[o]:s})}},84254:(e,t,n)=>{n.d(t,{E:()=>s});var r=n(35369),i=n(15359),a=n(98492),o=n(68804);function s(e){return(0,i.kG)(Array.isArray(e),"Wrong `json` field"),(0,r.aV)(e.map((e=>((0,i.kG)("number"==typeof e.pageIndex,"Wrong `pageIndex` field"),(0,i.kG)("string"==typeof e.previewText,"Wrong `previewText` field"),(0,i.kG)(Array.isArray(e.rangeInPreview),"Wrong `rangeInPreview` field"),(0,i.kG)(Array.isArray(e.rectsOnPage),"Wrong `rectsOnPage` field"),new o.Z({pageIndex:e.pageIndex,previewText:e.previewText,locationInPreview:e.rangeInPreview[0],lengthInPreview:e.rangeInPreview[1],rectsOnPage:(0,r.aV)(e.rectsOnPage).map((e=>(0,a.k)(e))),isAnnotation:!!e.isAnnotation,annotationRect:e.annotationRect?(0,a.k)(e.annotationRect):null})))).filter(Boolean))}}}]);