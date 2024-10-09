const Rt=6e4,At=36e5,Vt=1e3,F=Symbol.for("constructDateFrom");function y(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&F in e?e[F](t):e instanceof Date?new e.constructor(t):new Date(t)}function l(e,t){return y(t||e,e)}let j={};function S(){return j}function W(e,t){var u,c,d,h;const n=S(),r=(t==null?void 0:t.weekStartsOn)??((c=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,a=l(e,t==null?void 0:t.in),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function v(e,t){return W(e,{...t,weekStartsOn:1})}function _(e,t){const n=l(e,t==null?void 0:t.in),r=n.getFullYear(),a=y(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=v(a),s=y(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const u=v(s);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function E(e){const t=l(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Q(e,...t){const n=y.bind(null,t.find(r=>typeof r=="object"));return t.map(n)}function D(e,t){const n=l(e,t==null?void 0:t.in);return n.setHours(0,0,0,0),n}function G(e,t,n){const[r,a]=Q(n==null?void 0:n.in,e,t),i=D(r),s=D(a),u=+i-E(i),c=+s-E(s);return Math.round((u-c)/864e5)}function I(e,t){const n=_(e,t),r=y(e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),v(r)}function Jt(e,t,n){const[r,a]=Q(n==null?void 0:n.in,e,t);return+D(r)==+D(a)}function B(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function R(e){return!(!B(e)&&typeof e!="number"||isNaN(+l(e)))}function A(e,t){const n=l(e,t==null?void 0:t.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const V={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},J=(e,t,n)=>{let r;const a=V[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function T(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const $={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},p={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},z={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},U={date:T({formats:$,defaultWidth:"full"}),time:T({formats:p,defaultWidth:"full"}),dateTime:T({formats:z,defaultWidth:"full"})},K={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Z=(e,t,n,r)=>K[e];function k(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,u=n!=null&&n.width?String(n.width):s;a=e.formattingValues[u]||e.formattingValues[s]}else{const s=e.defaultWidth,u=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const tt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},et={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},at={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},it={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},st=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ot={ordinalNumber:st,era:k({values:tt,defaultWidth:"wide"}),quarter:k({values:et,defaultWidth:"wide",argumentCallback:e=>e-1}),month:k({values:nt,defaultWidth:"wide"}),day:k({values:rt,defaultWidth:"wide"}),dayPeriod:k({values:at,defaultWidth:"wide",formattingValues:it,defaultFormattingWidth:"wide"})};function x(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?ct(u,g=>g.test(s)):ut(u,g=>g.test(s));let d;d=e.valueCallback?e.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d;const h=t.slice(s.length);return{value:d,rest:h}}}function ut(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ct(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function dt(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const u=t.slice(a.length);return{value:s,rest:u}}}const ft=/^(\d+)(th|st|nd|rd)?/i,ht=/\d+/i,mt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},lt={any:[/^b/i,/^(a|c)/i]},gt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},wt={any:[/1/i,/2/i,/3/i,/4/i]},yt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},bt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Mt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ot={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},xt={ordinalNumber:dt({matchPattern:ft,parsePattern:ht,valueCallback:e=>parseInt(e,10)}),era:x({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:lt,defaultParseWidth:"any"}),quarter:x({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:x({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),day:x({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:Ot,defaultMatchWidth:"any",parsePatterns:kt,defaultParseWidth:"any"})},Wt={code:"en-US",formatDistance:J,formatLong:U,formatRelative:Z,localize:ot,match:xt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function vt(e,t){const n=l(e,t==null?void 0:t.in);return G(n,A(n))+1}function Dt(e,t){const n=l(e,t==null?void 0:t.in),r=+v(n)-+I(n);return Math.round(r/6048e5)+1}function X(e,t){var h,g,P,O;const n=l(e,t==null?void 0:t.in),r=n.getFullYear(),a=S(),i=(t==null?void 0:t.firstWeekContainsDate)??((g=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(P=a.locale)==null?void 0:P.options)==null?void 0:O.firstWeekContainsDate)??1,s=y((t==null?void 0:t.in)||e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const u=W(s,t),c=y((t==null?void 0:t.in)||e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const d=W(c,t);return+n>=+u?r+1:+n>=+d?r:r-1}function St(e,t){var u,c,d,h;const n=S(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,a=X(e,t),i=y((t==null?void 0:t.in)||e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),W(i,t)}function Yt(e,t){const n=l(e,t==null?void 0:t.in),r=+W(n,t)-+St(n,t);return Math.round(r/6048e5)+1}function o(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const w={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return o(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):o(n+1,2)},d(e,t){return o(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return o(e.getHours()%12||12,t.length)},H(e,t){return o(e.getHours(),t.length)},m(e,t){return o(e.getMinutes(),t.length)},s(e,t){return o(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return o(a,t.length)}},M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},C={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return w.y(e,t)},Y:function(e,t,n,r){const a=X(e,r),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return o(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):o(i,t.length)},R:function(e,t){const n=_(e);return o(n,t.length)},u:function(e,t){const n=e.getFullYear();return o(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return o(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return o(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return w.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return o(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=Yt(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):o(a,t.length)},I:function(e,t,n){const r=Dt(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):o(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):w.d(e,t)},D:function(e,t,n){const r=vt(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):o(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return o(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return o(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return o(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=M.noon:r===0?a=M.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=M.evening:r>=12?a=M.afternoon:r>=4?a=M.morning:a=M.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):w.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):o(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):o(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):w.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):w.s(e,t)},S:function(e,t){return w.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return N(r);case"XXXX":case"XX":return b(r);case"XXXXX":case"XXX":default:return b(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return N(r);case"xxxx":case"xx":return b(r);case"xxxxx":case"xxx":default:return b(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(r,":");case"OOOO":default:return"GMT"+b(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(r,":");case"zzzz":default:return"GMT"+b(r,":")}},t:function(e,t,n){const r=Math.trunc(+e/1e3);return o(r,t.length)},T:function(e,t,n){return o(+e,t.length)}};function q(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+o(i,2)}function N(e,t){return e%60===0?(e>0?"-":"+")+o(Math.abs(e)/60,2):b(e,t)}function b(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=o(Math.trunc(r/60),2),i=o(r%60,2);return n+a+t+i}const H=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},L=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Tt=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return H(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",H(r,t)).replace("{{time}}",L(a,t))},Ft={p:L,P:Tt},Et=/^D+$/,Ct=/^Y+$/,qt=["D","DD","YY","YYYY"];function Nt(e){return Et.test(e)}function Ht(e){return Ct.test(e)}function _t(e,t,n){const r=Qt(e,t,n);if(console.warn(r),qt.includes(e))throw new RangeError(r)}function Qt(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Xt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Lt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jt=/^'([^]*?)'?$/,Gt=/''/g,It=/[a-zA-Z]/;function $t(e,t,n){var h,g,P,O;const r=S(),a=r.locale??Wt,i=r.firstWeekContainsDate??((g=(h=r.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??1,s=r.weekStartsOn??((O=(P=r.locale)==null?void 0:P.options)==null?void 0:O.weekStartsOn)??0,u=l(e,n==null?void 0:n.in);if(!R(u))throw new RangeError("Invalid time value");let c=t.match(Lt).map(m=>{const f=m[0];if(f==="p"||f==="P"){const Y=Ft[f];return Y(m,a.formatLong)}return m}).join("").match(Xt).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const f=m[0];if(f==="'")return{isToken:!1,value:Bt(m)};if(C[f])return{isToken:!0,value:m};if(f.match(It))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:m}});a.localize.preprocessor&&(c=a.localize.preprocessor(u,c));const d={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return c.map(m=>{if(!m.isToken)return m.value;const f=m.value;(Ht(f)||Nt(f))&&_t(f,t,String(e));const Y=C[f[0]];return Y(u,f,a.localize,d)}).join("")}function Bt(e){const t=e.match(jt);return t?t[1].replace(Gt,"'"):e}export{Rt as a,Vt as b,y as c,X as d,W as e,$t as f,S as g,v as h,Jt as i,Yt as j,Dt as k,E as l,At as m,Q as n,Wt as o,Ft as p,Ht as q,Nt as r,D as s,l as t,_t as w};
