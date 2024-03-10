import './polyfills.server.mjs';
import{A as h,Aa as tt,B as T,Ba as it,C as Ce,D as f,E as De,Ea as ie,F as a,Fa as nt,G as s,H as R,I as je,J as C,K as D,L as X,M as c,N as Ge,O as Be,P as j,Q as G,R as B,S as w,T as I,U as Ue,V as U,W as H,X as He,Z as Le,a as Pe,b as ke,c as z,ca as K,d as Z,e as Te,ea as Ve,f as Y,fa as We,g as Re,ga as be,h as J,i as P,ia as $e,j as k,ja as Q,k as b,ka as qe,l as pe,la as ze,m as p,ma as ee,n as A,na as te,o as M,oa as Ze,p as me,pa as Ye,q as ge,qa as Je,r as ye,ra as Xe,s as E,sa as Ke,t as F,ta as Qe,u as m,v as ve,w as v,wa as et,x as d,y as u,z as _e}from"./chunk-OZXK55JK.mjs";import{a as y,b as V}from"./chunk-VVCT4QZE.mjs";var S={url:"https://test.api.amadeus.com/v1",key:"4bIxbDc1FJlYh3CQxA6Cm1sYSXyKy3sk",secret:"A62DvR2AgApOxe4D"};var Ae=function(t){return t.AIRPORT="AIRPORT",t.CITY="CITY",t.POINT_OF_INTEREST="POINT_OF_INTEREST",t.DISTRICT="DISTRICT",t}(Ae||{});var g=class{static hasSSRRendered(){return typeof window<"u"&&typeof window.document<"u"}};var x=(()=>{let e=class e extends g{constructor(){super(...arguments),this.http=m(Ye)}getBearerToken(){let i=new URLSearchParams;i.set("grant_type","client_credentials"),i.set("client_id",S.key),i.set("client_secret",S.secret);let r=new te({"Content-Type":"application/x-www-form-urlencoded"});return this.http.post(`${S.url}/security/oauth2/token`,i,{headers:r}).pipe(Y(o=>z(()=>o.error.errors[0].detail)))}getAirports(i){let r=new Ze().set("keyword",i).set("subType",Ae.AIRPORT),o=new te({Authorization:`${localStorage.getItem("Authorization")}`});return this.http.get(`${S.url}/reference-data/locations`,{params:r,headers:o}).pipe(Y(l=>z(()=>l.error.errors[0].detail)),Z(l=>(l.data.length>5&&(l.data=l.data.slice(0,5)),l)))}getAirportDetails(i){let r=new te({Authorization:`${localStorage.getItem("Authorization")}`});return this.http.get(`${S.url}/reference-data/locations/${i}`,{headers:r}).pipe(Y(o=>z(()=>o.error.errors[0].detail)))}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=v(e)))(o||e)}})(),e.\u0275prov=ge({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var rt=(()=>{let e=class e extends g{constructor(){super(...arguments),this.airportsService=m(x)}ngOnInit(){g.hasSSRRendered()&&this.airportsService.getBearerToken().subscribe({next:i=>{localStorage.setItem("Authorization",`${i.token_type} ${i.access_token}`)}})}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=v(e)))(o||e)}})(),e.\u0275cmp=b({type:e,selectors:[["app-root"]],standalone:!0,features:[h,I],decls:1,vars:0,template:function(r,o){r&1&&R(0,"router-outlet")},dependencies:[it]});let t=e;return t})();var ft=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(_e),u(me))},e.\u0275dir=p({type:e});let t=e;return t})(),Tt=(()=>{let e=class e extends ft{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=v(e)))(o||e)}})(),e.\u0275dir=p({type:e,features:[h]});let t=e;return t})(),pt=new E("");var Rt={provide:pt,useExisting:F(()=>de),multi:!0};function jt(){let t=be()?be().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Gt=new E(""),de=(()=>{let e=class e extends ft{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!jt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(_e),u(me),u(Gt,8))},e.\u0275dir=p({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&C("input",function(_){return o._handleInput(_.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(_){return o._compositionEnd(_.target.value)})},features:[w([Rt]),h]});let t=e;return t})();function Bt(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Ut(t){return t!=null&&typeof t.length=="number"}var ce=new E(""),mt=new E("");function Ht(t){return Bt(t.value)?{required:!0}:null}function Lt(t){return e=>Ut(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function ot(t){return null}function gt(t){return t!=null}function yt(t){return Le(t)?ke(t):t}function vt(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function _t(t,e){return e.map(n=>n(t))}function Wt(t){return!t.validate}function Ct(t){return t.map(e=>Wt(e)?e:n=>e.validate(n))}function $t(t){if(!t)return null;let e=t.filter(gt);return e.length==0?null:function(n){return vt(_t(n,e))}}function Ee(t){return t!=null?$t(Ct(t)):null}function qt(t){if(!t)return null;let e=t.filter(gt);return e.length==0?null:function(n){let i=_t(n,e).map(yt);return Te(i).pipe(Z(vt))}}function Fe(t){return t!=null?qt(Ct(t)):null}function st(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function zt(t){return t._rawValidators}function Zt(t){return t._rawAsyncValidators}function Me(t){return t?Array.isArray(t)?t:[t]:[]}function oe(t,e){return Array.isArray(t)?t.includes(e):t===e}function at(t,e){let n=Me(e);return Me(t).forEach(r=>{oe(n,r)||n.push(r)}),n}function lt(t,e){return Me(e).filter(n=>!oe(t,n))}var se=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ee(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Fe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},O=class extends se{get formDirective(){return null}get path(){return null}},q=class extends se{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ae=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Yt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},un=V(y({},Yt),{"[class.ng-submitted]":"isSubmitted"}),Dt=(()=>{let e=class e extends ae{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(q,2))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&De("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[h]});let t=e;return t})(),Vt=(()=>{let e=class e extends ae{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(O,10))},e.\u0275dir=p({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&De("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[h]});let t=e;return t})();var L="VALID",re="INVALID",N="PENDING",W="DISABLED";function bt(t){return(he(t)?t.validators:t)||null}function Jt(t){return Array.isArray(t)?Ee(t):t||null}function At(t,e){return(he(e)?e.asyncValidators:t)||null}function Xt(t){return Array.isArray(t)?Fe(t):t||null}function he(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Kt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new J(1e3,"");if(!i[n])throw new J(1001,"")}function Qt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new J(1002,"")})}var le=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===L}get invalid(){return this.status===re}get pending(){return this.status==N}get disabled(){return this.status===W}get enabled(){return this.status!==W}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(at(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(at(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(lt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(lt(e,this._rawAsyncValidators))}hasValidator(e){return oe(this._rawValidators,e)}hasAsyncValidator(e){return oe(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=N,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=W,this.errors=null,this._forEachChild(i=>{i.disable(V(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=L,this._forEachChild(i=>{i.enable(V(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===L||this.status===N)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?W:L}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=N,this._hasOwnPendingAsyncValidator=!0;let n=yt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?W:this.errors?re:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(N)?N:this._anyControlsHaveStatus(re)?re:L}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){he(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Jt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Xt(this._rawAsyncValidators)}},ue=class extends le{constructor(e,n,i){super(bt(n),At(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Qt(this,!0,e),Object.keys(e).forEach(i=>{Kt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var we=new E("CallSetDisabledState",{providedIn:"root",factory:()=>Ie}),Ie="always";function ei(t,e){return[...e.path,t]}function Mt(t,e,n=Ie){Et(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ii(t,e),ri(t,e),ni(t,e),ti(t,e)}function ut(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function ti(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Et(t,e){let n=zt(t);e.validator!==null?t.setValidators(st(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Zt(t);e.asyncValidator!==null?t.setAsyncValidators(st(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();ut(e._rawValidators,r),ut(e._rawAsyncValidators,r)}function ii(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ft(t,e)})}function ni(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ft(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ft(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ri(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function oi(t,e){t==null,Et(t,e)}function si(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ai(t){return Object.getPrototypeOf(t.constructor)===Tt}function li(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ui(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===de?n=o:ai(o)?i=o:r=o}),r||i||n||null}var di={provide:O,useExisting:F(()=>Se)},$=Promise.resolve(),Se=(()=>{let e=class e extends O{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new P,this.form=new ue({},Ee(i),Fe(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){$.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),Mt(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){$.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){$.then(()=>{let r=this._findContainer(i.path),o=new ue({});oi(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){$.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){$.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,li(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(u(ce,10),u(mt,10),u(we,8))},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&C("submit",function(_){return o.onSubmit(_)})("reset",function(){return o.onReset()})},inputs:{options:[k.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[w([di]),h]});let t=e;return t})();function dt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ct(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ci=class extends le{constructor(e=null,n,i){super(bt(n),At(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),he(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ct(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){dt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){dt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ct(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var hi={provide:q,useExisting:F(()=>xe)},ht=Promise.resolve(),xe=(()=>{let e=class e extends q{constructor(i,r,o,l,_,kt){super(),this._changeDetectorRef=_,this.callSetDisabledState=kt,this.control=new ci,this._registered=!1,this.name="",this.update=new P,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ui(this,l)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),si(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ht.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ve(r);ht.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?ei(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(u(O,9),u(ce,10),u(mt,10),u(pt,10),u(K,8),u(we,8))},e.\u0275dir=p({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[k.None,"disabled","isDisabled"],model:[k.None,"ngModel","model"],options:[k.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[w([hi]),h,ve]});let t=e;return t})(),wt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();function fi(t){return typeof t=="number"?t:parseInt(t,10)}var It=(()=>{let e=class e{constructor(){this._validator=ot}ngOnChanges(i){if(this.inputName in i){let r=this.normalizeInput(i[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):ot,this._onChange&&this._onChange()}}validate(i){return this._validator(i)}registerOnValidatorChange(i){this._onChange=i}enabled(i){return i!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=p({type:e,features:[ve]});let t=e;return t})();var pi={provide:ce,useExisting:F(()=>Ne),multi:!0};var Ne=(()=>{let e=class e extends It{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Ve,this.createValidator=i=>Ht}enabled(i){return i}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=v(e)))(o||e)}})(),e.\u0275dir=p({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,o){r&2&&Ce("required",o._enabled?"":null)},inputs:{required:"required"},features:[w([pi]),h]});let t=e;return t})();var mi={provide:ce,useExisting:F(()=>Oe),multi:!0},Oe=(()=>{let e=class e extends It{constructor(){super(...arguments),this.inputName="maxlength",this.normalizeInput=i=>fi(i),this.createValidator=i=>Lt(i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=v(e)))(o||e)}})(),e.\u0275dir=p({type:e,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(r,o){r&2&&Ce("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},features:[w([mi]),h]});let t=e;return t})();var gi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=pe({type:e}),e.\u0275inj=ye({});let t=e;return t})();var fe=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:we,useValue:i.callSetDisabledState??Ie}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=pe({type:e}),e.\u0275inj=ye({imports:[gi]});let t=e;return t})();function _i(t,e){t&1&&(a(0,"div")(1,"span"),c(2,"Za pretragu zra\u010Dnih luka upi\u0161ite ime grada"),s()())}function Ci(t,e){t&1&&(a(0,"div")(1,"span"),c(2,"Za upisan pojam nema rezultata"),s()())}var Di=t=>["/airport-details",t];function Vi(t,e){if(t&1&&(a(0,"li",8)(1,"div",9)(2,"div",4)(3,"strong"),c(4),U(5,"titlecase"),s(),R(6,"br"),c(7),U(8,"titlecase"),U(9,"titlecase"),s(),a(10,"div",10)(11,"button",11),c(12,"Detalji"),s()()()()),t&2){let n=e.$implicit;d(4),Ge(H(5,4,n.name)),d(3),Be(" ",H(8,6,n.address.countryName)," | ",H(9,8,n.address.cityName)," "),d(4),f("routerLink",Ue(10,Di,n.id))}}function bi(t,e){if(t&1&&(a(0,"div"),T(1,Ci,3,0,"div",6)(2,Vi,13,12,"li",7),s()),t&2){let n=e.ngIf;d(),f("ngIf",n.data.length===0),d(),f("ngForOf",n.data)}}var St=(()=>{let e=class e{constructor(){this.airportsService=m(x),this.cdr=m(K),this.airportData$=void 0,this.searchInput$=new Pe("")}ngOnInit(){this.searchInput$.pipe(Re(300)).subscribe(i=>{if(i){let r=i.value;r.trim()!==""?(this.airportData$=this.airportsService.getAirports(r),this.cdr.detectChanges()):(this.airportData$=void 0,this.cdr.detectChanges())}})}ngOnDestroy(){this.searchInput$.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["app-airports"]],standalone:!0,features:[I],decls:11,vars:4,consts:[[1,"container"],[1,"row","mt-3"],[1,"col-6"],["type","text","placeholder","Pretra\u017Ei zra\u010Dne luke",1,"form-control",3,"input"],[1,"col"],[1,"list-group"],[4,"ngIf"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"row"],[1,"col-auto"],[1,"btn","btn-primary",3,"routerLink"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3),C("input",function(_){return o.searchInput$.next(_.target)}),s()()(),R(4,"hr"),a(5,"div",1)(6,"div",4)(7,"ul",5),T(8,_i,3,0,"div",6)(9,bi,3,2,"div",6),U(10,"async"),s()()()()),r&2&&(d(8),f("ngIf",o.airportData$===void 0),d(),f("ngIf",H(10,2,o.airportData$)))},dependencies:[ee,$e,Q,qe,ze,fe,ie]});let t=e;return t})();function Ai(t,e){if(t&1){let n=je();a(0,"div",1)(1,"div",2)(2,"form",6,7),C("ngSubmit",function(){A(n);let r=X(3),o=D();return M(o.onSubmit(r))}),a(4,"div",8)(5,"label",9),c(6,"Id"),s(),a(7,"input",10),B("ngModelChange",function(r){A(n);let o=D();return G(o.airportDetails.data.id,r)||(o.airportDetails.data.id=r),M(r)}),s()(),a(8,"div",8)(9,"label",11),c(10,"Ime"),s(),a(11,"input",12),B("ngModelChange",function(r){A(n);let o=D();return G(o.airportDetails.data.name,r)||(o.airportDetails.data.name=r),M(r)}),s()(),a(12,"div",8)(13,"label",13),c(14,"Grad"),s(),a(15,"input",14),B("ngModelChange",function(r){A(n);let o=D();return G(o.airportDetails.data.address.cityName,r)||(o.airportDetails.data.address.cityName=r),M(r)}),s()(),a(16,"div",8)(17,"label",15),c(18,"Dr\u017Eava"),s(),a(19,"input",16),B("ngModelChange",function(r){A(n);let o=D();return G(o.airportDetails.data.address.countryName,r)||(o.airportDetails.data.address.countryName=r),M(r)}),s()(),a(20,"button",17),c(21," Spremi "),s()()()()}if(t&2){let n=X(3),i=D();d(7),f("disabled",!0),j("ngModel",i.airportDetails.data.id),d(4),f("maxlength",50),j("ngModel",i.airportDetails.data.name),d(4),f("maxlength",50),j("ngModel",i.airportDetails.data.address.cityName),d(4),f("maxlength",50),j("ngModel",i.airportDetails.data.address.countryName),d(),f("disabled",!n.valid)}}function Mi(t,e){t&1&&(a(0,"div",1)(1,"div",2)(2,"p"),c(3,"Dohva\u0107anje podataka..."),s()()())}var xt=(()=>{let e=class e extends g{constructor(){super(...arguments),this.airportsService=m(x),this.route=m(tt),this.id=void 0,this.airportDetails=void 0}ngOnInit(){this.route.params.subscribe(i=>{if(this.id=i.id,this.id&&g.hasSSRRendered()){let r=localStorage.getItem(this.id);r?this.airportDetails=JSON.parse(r):this.airportsService.getAirportDetails(this.id).subscribe(o=>{this.airportDetails=o})}})}onSubmit(i){let r=i.value;if(g.hasSSRRendered()&&this.airportDetails){let o=y({},this.airportDetails);o.data.name=r.name,o.data.address.cityName=r.cityName,o.data.address.countryName=r.countryName,localStorage.setItem(o.data.id,JSON.stringify(o))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=v(e)))(o||e)}})(),e.\u0275cmp=b({type:e,selectors:[["app-airport-details"]],standalone:!0,features:[h,I],decls:8,vars:2,consts:[[1,"container"],[1,"row","mt-3"],[1,"col-12"],["routerLink","/",1,"btn","btn-outline-primary"],["class","row mt-3",4,"ngIf","ngIfElse"],["loading",""],[3,"ngSubmit"],["form","ngForm"],[1,"mb-3"],["for","id",1,"form-label"],["type","text","id","id","name","id",1,"form-control",3,"disabled","ngModel","ngModelChange"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"maxlength","ngModel","ngModelChange"],["for","cityName",1,"form-label"],["type","text","id","cityName","name","cityName","required","",1,"form-control",3,"maxlength","ngModel","ngModelChange"],["for","countryName",1,"form-label"],["type","text","id","countryName","name","countryName","required","",1,"form-control",3,"maxlength","ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"]],template:function(r,o){if(r&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),c(4,"Povratak"),s()()(),T(5,Ai,22,9,"div",4)(6,Mi,4,0,"ng-template",null,5,He),s()),r&2){let l=X(7);d(5),f("ngIf",o.airportDetails)("ngIfElse",l)}},dependencies:[ee,Q,fe,wt,de,Dt,Vt,Ne,Oe,xe,Se,ie]});let t=e;return t})();var Nt=[{path:"",component:St},{path:"airport-details/:id",component:xt},{path:"**",redirectTo:""}];var Ot={providers:[nt(Nt),Qe(),Je(Xe())]};var Ei={providers:[et()]},Pt=We(Ot,Ei);var Fi=()=>Ke(rt,Pt),Wn=Fi;export{Wn as a};