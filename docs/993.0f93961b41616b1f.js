"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[993],{7993:(me,O,y)=>{y.r(O),y.d(O,{ContatoModule:()=>ce});var T=y(6814),H=y(33),u=y(95),i=y(9468);function Z(a,l,e,t,s,n,h){try{var m=a[n](h),r=m.value}catch(o){return void e(o)}m.done?l(r):Promise.resolve(r).then(t,s)}const N=new i.OlP("ngx-mask config"),D=new i.OlP("new ngx-mask config"),$=new i.OlP("initial ngx-mask config"),L={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new i.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},B=["Hh:m0:s0","Hh:m0","m0:s0"],q=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let R=(()=>{class a{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,s,n,h)=>{let m=[],r="";if(Array.isArray(n)){const p=new RegExp(n.map(g=>"[\\^$.|?*+()".indexOf(g)>=0?`\\${g}`:g).join("|"));m=t.split(p),r=t.match(p)?.[0]??""}else m=t.split(n),r=n;const o=m.length>1?`${r}${m[1]}`:"";let c=m[0];const _=this.separatorLimit.replace(/\s/g,"");_&&+_&&(c="-"===c[0]?`-${c.slice(1,c.length).slice(0,_.length)}`:c.slice(0,_.length));const k=/(\d+)(\d{3})/;for(;s&&k.test(c);)c=c.replace(k,"$1"+s+"$2");return void 0===h?c+o:0===h?c:c+o.substr(0,h+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const s=t.split(".");return s.length>1?Number(s[s.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let s=this.suffix?.length-1;s>=0;s--){const n=this.suffix.substr(s,this.suffix?.length);if(t.includes(n)&&(s-1<0||!t.includes(this.suffix.substr(s-1,this.suffix?.length))))return t.replace(n,"")}return t},this.checkInputPrecision=(t,s,n)=>{if(s<1/0){if(Array.isArray(n)){const r=n.find(o=>o!==this.thousandSeparator);n=r||n[0]}const h=new RegExp(this._charToRegExpExpression(n)+`\\d{${s}}.*$`),m=t.match(h);m&&m[0].length-1>s&&(t=t.substring(0,t.length-(m[0].length-1-s))),0===s&&this._compareOrIncludes(t[t.length-1],n,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,n]=t;return this.customPattern=n,this.applyMask(e,s)}applyMask(e,t,s=0,n=!1,h=!1,m=(()=>{})){if(!t||"string"!=typeof e)return"";let r=0,o="",c=!1,_=!1,k=1,p=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const g=e.toString().split("");"IP"===t&&(this.ipError=g.filter(d=>"."===d).length<3&&g.length<7,t="099.099.099.099");const C=[];for(let d=0;d<e.length;d++)e[d]?.match("\\d")&&C.push(e[d]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==C.length&&14!==C.length,t=C.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const d=this.getPrecision(t);e=this.checkInputPrecision(e,d,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),o=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!h?e.slice(1,e.length):e,h&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const d=this._charToRegExpExpression(this.thousandSeparator);let f='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(d,"");if(Array.isArray(this.decimalMarker))for(const x of this.decimalMarker)f=f.replace(this._charToRegExpExpression(x),"");else f=f.replace(this._charToRegExpExpression(this.decimalMarker),"");const S=new RegExp("["+f+"]");(e.match(S)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const I=this.getPrecision(t),A=(e=this.checkInputPrecision(e,I,this.decimalMarker)).replace(new RegExp(d,"g"),"");o=this._formatWithSeparators(A,this.thousandSeparator,this.decimalMarker,I);const P=o.indexOf(",")-e.indexOf(","),v=o.length-e.length;if(v>0&&","!==o[s]){_=!0;let x=0;do{this._shift.add(s+x),x++}while(x<v)}else 0!==P&&s>0&&!(o.indexOf(",")>=s&&s>3)||!(o.indexOf(".")>=s&&s>3)&&v<=0?(this._shift.clear(),_=!0,k=v,this._shift.add(s+=v)):this._shift.clear()}else for(let d=0,f=g[0];d<g.length&&r!==t.length;d++,f=g[d])if(this._checkSymbolMask(f,t[r])&&"?"===t[r+1])o+=f,r+=2;else if("*"===t[r+1]&&c&&this._checkSymbolMask(f,t[r+2]))o+=f,r+=3,c=!1;else if(this._checkSymbolMask(f,t[r])&&"*"===t[r+1])o+=f,c=!0;else if("?"===t[r+1]&&this._checkSymbolMask(f,t[r+2]))o+=f,r+=3;else if(this._checkSymbolMask(f,t[r])){if("H"===t[r]&&Number(f)>2){r+=1,this._shiftStep(t,r,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("h"===t[r]&&"2"===o&&Number(f)>3){r+=1,d--;continue}if("m"===t[r]&&Number(f)>5){r+=1,this._shiftStep(t,r,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("s"===t[r]&&Number(f)>5){r+=1,this._shiftStep(t,r,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}const S=31;if("d"===t[r]&&(Number(f)>3&&this.leadZeroDateTime||Number(e.slice(r,r+2))>S||"/"===e[r+1])){r+=1,this._shiftStep(t,r,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("M"===t[r]){const A=0===r&&(Number(f)>2||Number(e.slice(r,r+2))>12||"/"===e[r+1]),P=e.slice(r-3,r-1).includes("/")&&("/"===e[r-2]&&Number(e.slice(r-1,r+1))>12&&"/"!==e[r]||"/"===e[r]||"/"===e[r-3]&&Number(e.slice(r-2,r))>12&&"/"!==e[r-1]||"/"===e[r-1]),v=Number(e.slice(r-3,r-1))<=S&&!e.slice(r-3,r-1).includes("/")&&"/"===e[r-1]&&(Number(e.slice(r,r+2))>12||"/"===e[r+1]),x=Number(e.slice(r-3,r-1))>S&&!e.slice(r-3,r-1).includes("/")&&!e.slice(r-2,r).includes("/")&&Number(e.slice(r-2,r))>12,fe=Number(e.slice(r-3,r-1))<=S&&!e.slice(r-3,r-1).includes("/")&&"/"!==e[r-1]&&Number(e.slice(r-1,r+1))>12;if(Number(f)>1&&this.leadZeroDateTime||A||P||v||x||fe){r+=1,this._shiftStep(t,r,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}}o+=f,r++}else-1!==this.maskSpecialCharacters.indexOf(t[r])?(o+=t[r],r++,this._shiftStep(t,r,g.length),d--):this.maskSpecialCharacters.indexOf(f)>-1&&this.maskAvailablePatterns[t[r]]&&this.maskAvailablePatterns[t[r]]?.optional?(g[r]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(o+=g[r]),r++,d--):"*"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2])&&this._findSpecialChar(f)===this.maskExpression[r+2]&&c||"?"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2])&&this._findSpecialChar(f)===this.maskExpression[r+2]&&c?(r+=3,o+=f):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(f)<0&&f!==this.placeHolderCharacter&&(p=!0);o.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(o+=t[t.length-1]);let M=s+1;for(;this._shift.has(M);)k++,M++;let b=n?r:this._shift.has(s)?k:0;p&&b--,m(b,_),k<0&&this._shift.clear();let w=!1;h&&(w=g.every(d=>this.maskSpecialCharacters.includes(d)));let E=`${this.prefix}${w?"":o}${this.suffix}`;return 0===o.length&&(E=`${this.prefix}${o}`),E}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,s)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===s&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,s){const n=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(n+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(n=>n!==s).includes(e):e===t}}return a.\u0275fac=function(e){return new(e||a)(i.LFG(N))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),F=(()=>{class a extends R{constructor(e,t,s,n){super(t),this.document=e,this._config=t,this._elementRef=s,this._renderer=n,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=h=>{}}applyMask(e,t,s=0,n=!1,h=!1,m=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const r=e&&"number"==typeof this.selStart?e[this.selStart]:"";let o="";if(this.hiddenInput&&!this.writingValue){let p=this.actualValue.split("");""!==e&&p.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>p.length?p.splice(this.selStart,0,r):e.length<p.length&&(p.length-e.length==1?p.splice(this.selStart-1,1):p.splice(this.selStart,this.selEnd-this.selStart))):p=[],this.showMaskTyped&&(e=this.removeMask(e)),o=this.actualValue.length&&p.length<=e.length?this.shiftTypedSymbols(p.join("")):e}o=o&&o.length?o:e;const c=super.applyMask(o,t,s,n,h,m);if(this.actualValue=this.getActualValue(c),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(p=>!this._compareOrIncludes(p,this.decimalMarker,this.thousandSeparator))),this.formControlResult(c),!this.showMaskTyped)return this.hiddenInput&&c&&c.length?this.hideInput(c,this.maskExpression):c;const _=c.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const p=this._numberSkipedSymbols(c);return c+k.slice(_+p)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?c+k:c+k.slice(_)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),n=0;for(;null!=s;)n+=1,s=t.exec(e);return n}applyValueChanges(e,t,s,n=(()=>{})){const h=this._elementRef.nativeElement;h.value=this.applyMask(h.value,this.maskExpression,e,t,s,n),h!==this.document.activeElement&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((s,n)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[n]]&&this.maskAvailablePatterns[t[n]]?.symbol?this.maskAvailablePatterns[t[n]]?.symbol:s).join("")}getActualValue(e){const t=e.split("").filter((s,n)=>this._checkSymbolMask(s,this.maskExpression[n])||this.maskSpecialCharacters.includes(this.maskExpression[n])&&s===this.maskExpression[n]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((n,h)=>{if(this.maskSpecialCharacters.includes(e[h+1])&&e[h+1]!==this.maskExpression[h+1])return t=n,e[h+1];if(t.length){const m=t;return t="",m}return n})||[]).join("")}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(s=>this._findSpecialChar(s)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++)e[s]?.match("\\d")&&t.push(e[s]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const n=[];for(let h=0;h<e.length;h++)e[h]?.match("\\d")&&n.push(e[h]);return n.length<=3?t.slice(n.length,t.length):n.length>3&&n.length<=6?t.slice(n.length+1,t.length):n.length>6&&n.length<=9?t.slice(n.length+2,t.length):n.length>9&&n.length<11?t.slice(n.length+3,t.length):11===n.length?"":12===n.length?s.slice(17===e.length?16:15,s.length):n.length>12&&n.length<=14?s.slice(n.length+4,s.length):""}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression);let s=this._retrieveSeparatorValue(e);return"."!==this.decimalMarker&&!Array.isArray(this.decimalMarker)&&(s=s.replace(this.decimalMarker,".")),this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return a.\u0275fac=function(e){return new(e||a)(i.LFG(T.K0),i.LFG(N),i.LFG(i.SBq),i.LFG(i.Qsj))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),Y=(()=>{class a{constructor(e,t,s){this.document=e,this._maskService=t,this._config=s,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new i.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=n=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:n,prefix:h,suffix:m,thousandSeparator:r,decimalMarker:o,dropSpecialCharacters:c,hiddenInput:_,showMaskTyped:k,placeHolderCharacter:p,shownMaskExpression:g,showTemplate:C,clearIfNotMatch:M,validation:b,separatorLimit:w,allowNegativeNumbers:E,leadZeroDateTime:d,triggerOnMaskChange:f}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((S,I)=>S.length-I.length),this._maskValue=this._maskExpressionArray[0],this.maskExpression=this._maskExpressionArray[0],this._maskService.maskExpression=this._maskExpressionArray[0]):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.maskSpecialCharacters=s.currentValue||[]}n&&n.currentValue&&(this._maskService.maskAvailablePatterns=n.currentValue),h&&(this._maskService.prefix=h.currentValue),m&&(this._maskService.suffix=m.currentValue),r&&(this._maskService.thousandSeparator=r.currentValue),o&&(this._maskService.decimalMarker=o.currentValue),c&&(this._maskService.dropSpecialCharacters=c.currentValue),_&&(this._maskService.hiddenInput=_.currentValue),k&&(this._maskService.showMaskTyped=k.currentValue),p&&(this._maskService.placeHolderCharacter=p.currentValue),g&&(this._maskService.shownMaskExpression=g.currentValue),C&&(this._maskService.showTemplate=C.currentValue),M&&(this._maskService.clearIfNotMatch=M.currentValue),b&&(this._maskService.validation=b.currentValue),w&&(this._maskService.separatorLimit=w.currentValue),E&&(this._maskService.allowNegativeNumbers=E.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(S=>"-"!==S))),d&&(this._maskService.leadZeroDateTime=d.currentValue),f&&(this._maskService.triggerOnMaskChange=f.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||q.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(B.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[s].optional&&(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(h=>h===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){!e&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let n=0,h=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(r,o)=>{this._justPasted=!1,n=r,h=o}),this.document.activeElement!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let m=this._position?this._inputValue.length+s+n:s+("Backspace"!==this._code||h?n:0);m>this._getActualInputLength()&&(m=this._getActualInputLength()),m<0&&(m=0),t.setSelectionRange(m,m),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const h=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==h&&(t.value=h),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault(),8===e.keyCode&&!t.readOnly&&0===t.selectionStart&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return function J(a){return function(){var l=this,e=arguments;return new Promise(function(t,s){var n=a.apply(l,e);function h(r){Z(n,t,s,h,m,"next",r)}function m(r){Z(n,t,s,h,m,"throw",r)}h(void 0)})}}(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(!!e.disable),e=e.value),"number"==typeof e&&(e=String(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,n)=>{if(this._start="{"===s?n:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=n;const h=Number(e.slice(this._start+1,this._end));return t+new Array(h+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(s=>":"!==s).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return a.\u0275fac=function(e){return new(e||a)(i.Y36(T.K0),i.Y36(F),i.Y36(N))},a.\u0275dir=i.lG2({type:a,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&i.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(n){return t.onModelChange(n)})("input",function(n){return t.onInput(n)})("blur",function(){return t.onBlur()})("click",function(n){return t.onClick(n)})("keydown",function(n){return t.onKeyDown(n)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[i._Bn([{provide:u.JU,useExisting:(0,i.Gpc)(()=>a),multi:!0},{provide:u.Cf,useExisting:(0,i.Gpc)(()=>a),multi:!0},F]),i.TTD]}),a})();function U(a,l){return l instanceof Function?{...a,...l()}:{...a,...l}}let Q=(()=>{class a{static forRoot(e){return{ngModule:a,providers:[{provide:D,useValue:e},{provide:$,useValue:L},{provide:N,useFactory:U,deps:[$,D]},R]}}static forChild(){return{ngModule:a}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({}),a})();const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo precisa de no m\xednimo 4 caracteres "),i.qZA())}function z(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo \xe9 obrigat\xf3rio "),i.qZA())}function W(a,l){if(1&a&&(i.TgZ(0,"div",11),i.YNc(1,G,2,0,"span",12),i.YNc(2,z,2,0,"span",12),i.qZA()),2&a){const e=i.oxw();i.xp6(1),i.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),i.xp6(1),i.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function K(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo precisa de no m\xednimo 10 caracteres "),i.qZA())}function X(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo \xe9 obrigat\xf3rio "),i.qZA())}function V(a,l){if(1&a&&(i.TgZ(0,"div",11),i.YNc(1,K,2,0,"span",12),i.YNc(2,X,2,0,"span",12),i.qZA()),2&a){const e=i.oxw();i.xp6(1),i.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),i.xp6(1),i.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function ee(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo precisa ser um email v\xe1lido "),i.qZA())}function te(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo \xe9 obrigat\xf3rio "),i.qZA())}function se(a,l){if(1&a&&(i.TgZ(0,"div",11),i.YNc(1,ee,2,0,"span",12),i.YNc(2,te,2,0,"span",12),i.qZA()),2&a){const e=i.oxw();i.xp6(1),i.Q6J("ngIf",e.formContato.controls.email.hasError("email")),i.xp6(1),i.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function ie(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo precisa de no m\xednimo 11 caracteres "),i.qZA())}function re(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo \xe9 obrigat\xf3rio "),i.qZA())}function ae(a,l){if(1&a&&(i.TgZ(0,"div",11),i.YNc(1,ie,2,0,"span",12),i.YNc(2,re,2,0,"span",12),i.qZA()),2&a){const e=i.oxw();i.xp6(1),i.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),i.xp6(1),i.Q6J("ngIf",e.formContato.controls.telefone.hasError("telefone"))}}function ne(a,l){1&a&&(i.TgZ(0,"span",13),i._uU(1," Este campo precisa de no m\xednimo 20 caracteres "),i.qZA())}function oe(a,l){if(1&a&&(i.TgZ(0,"div",11),i.YNc(1,ne,2,0,"span",12),i.qZA()),2&a){const e=i.oxw();i.xp6(1),i.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength"))}}j.KeyboardEvent||(j.KeyboardEvent=function(a,l){});const he=[{path:"",component:(()=>{var a;class l{constructor(t){this.fb=t,this.formContato=this.fb.group({nome:["",[u.kI.minLength(4),u.kI.required]],email:["",[u.kI.email,u.kI.required]],assunto:["",[u.kI.minLength(10),u.kI.required]],telefone:["",[u.kI.minLength(11),u.kI.required]],mensagem:["",[u.kI.minLength(20),u.kI.required]]})}enviarFormulario(){alert("Formul\xe1rio enviado com sucesso!"),this.formContato.reset()}}return(a=l).\u0275fac=function(t){return new(t||a)(i.Y36(u.qu))},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-contato"]],decls:20,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],["class","contact-form__error",4,"ngIf"],["type","text","placeholder","Digite o assunto","formControlName","assunto"],["type","email","placeholder","Digite seu email","formControlName","email"],["type","tel","placeholder","(00) 0 0000-0000","mask","(00) 0 0000-0000","formControlName","telefone"],["maxlength","300","rows","4","placeholder","Digite sua mensagem","formControlName","mensagem"],["type","submit",1,"contact-form__button",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5750909940916!2d-49.07288232378605!3d-26.916977176644707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1692381145572!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[1,"contact-form__error"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(t,s){1&t&&(i.TgZ(0,"h2",0),i._uU(1,"Entre em contato"),i.qZA(),i.TgZ(2,"section",1)(3,"form",2),i.NdJ("ngSubmit",function(){return s.enviarFormulario()}),i._UZ(4,"input",3),i.YNc(5,W,3,2,"div",4),i._UZ(6,"input",5),i.YNc(7,V,3,2,"div",4),i._UZ(8,"input",6),i.YNc(9,se,3,2,"div",4),i._UZ(10,"input",7),i.YNc(11,ae,3,2,"div",4),i._UZ(12,"textarea",8),i.YNc(13,oe,2,1,"div",4),i.TgZ(14,"button",9),i._uU(15," Enviar "),i.qZA()(),i.TgZ(16,"address"),i._UZ(17,"iframe",10),i.TgZ(18,"p"),i._uU(19," Tarum\xe3 Office - Rua 7 de Setembro, 1600 - 14\xba andar - Centro 89.010-204 - Blumenau / SC "),i.qZA()()()),2&t&&(i.xp6(3),i.Q6J("formGroup",s.formContato),i.xp6(1),i.ekj("valid",s.formContato.controls.nome.valid)("invalid",s.formContato.controls.nome.invalid&&(s.formContato.controls.nome.touched||s.formContato.controls.nome.dirty)),i.xp6(1),i.Q6J("ngIf",s.formContato.controls.nome.invalid&&(s.formContato.controls.nome.touched||s.formContato.controls.nome.dirty)),i.xp6(1),i.ekj("valid",s.formContato.controls.assunto.valid)("invalid",s.formContato.controls.assunto.invalid&&(s.formContato.controls.assunto.touched||s.formContato.controls.assunto.dirty)),i.xp6(1),i.Q6J("ngIf",s.formContato.controls.assunto.invalid&&(s.formContato.controls.assunto.touched||s.formContato.controls.assunto.dirty)),i.xp6(1),i.ekj("valid",s.formContato.controls.email.valid)("invalid",s.formContato.controls.email.invalid&&(s.formContato.controls.email.touched||s.formContato.controls.email.dirty)),i.xp6(1),i.Q6J("ngIf",s.formContato.controls.email.invalid&&(s.formContato.controls.email.touched||s.formContato.controls.email.dirty)),i.xp6(1),i.ekj("valid",s.formContato.controls.telefone.valid)("invalid",s.formContato.controls.telefone.invalid&&(s.formContato.controls.telefone.touched||s.formContato.controls.telefone.dirty)),i.xp6(1),i.Q6J("ngIf",s.formContato.controls.telefone.invalid&&(s.formContato.controls.telefone.touched||s.formContato.controls.telefone.dirty)),i.xp6(1),i.ekj("valid",s.formContato.controls.mensagem.valid)("invalid",s.formContato.controls.mensagem.invalid&&(s.formContato.controls.mensagem.touched||s.formContato.controls.mensagem.dirty)),i.xp6(1),i.Q6J("ngIf",s.formContato.controls.mensagem.invalid&&(s.formContato.controls.mensagem.touched||s.formContato.controls.mensagem.dirty)),i.xp6(1),i.Q6J("disabled",s.formContato.invalid))},dependencies:[T.O5,u._Y,u.Fj,u.JJ,u.JL,u.nD,u.sg,u.u,Y],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer;filter:brightness(1.3)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),l})()}];let le=(()=>{var a;class l{}return(a=l).\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[H.Bz.forChild(he),H.Bz]}),l})(),ce=(()=>{var a;class l{}return(a=l).\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[T.ez,le,u.UX,Q.forRoot()]}),l})()}}]);