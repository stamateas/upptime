function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,m=!1;function p(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:p(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function S(e){return document.createTextNode(e)}function E(){return S(" ")}function x(){return S("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function R(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:R(e,r,t[r])}function I(e){return Array.from(e.childNodes)}function P(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function k(e,t,n,r,s=!1){P(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function L(e,t,n,r){return k(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function C(e,t,n){return L(e,t,n,w)}function O(e,t,n){return L(e,t,n,y)}function H(e,t){return k(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>S(t)),!0)}function U(e){return H(e," ")}function M(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function j(e){const t=M(e,"HTML_TAG_START",0),n=M(e,"HTML_TAG_END",t);if(t===n)return new K;P(e);const r=e.splice(t,n+1);_(r[0]),_(r[r.length-1]);const s=r.slice(1,r.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new K(s)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function B(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function V(e){h=e}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function W(e){J().$$.on_mount.push(e)}function F(e){J().$$.after_update.push(e)}function Y(e){J().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function re(e){Z.push(e)}const se=new Set;let oe=0;function ie(){const e=h;do{for(;oe<X.length;){const e=X[oe];oe++,V(e),ae(e.$$)}for(V(null),X.length=0,oe=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];se.has(t)||(se.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,se.clear(),V(e)}function ae(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function fe(){le.r||s(le.c),le=le.p}function de(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function me(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function pe(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||re((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(re)}function _e(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ie)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,o,i,a,c,l,u=[-1]){const f=h;V(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&$e(t,e)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const e=I(n.target);d.fragment&&d.fragment.l(e),e.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&de(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),m=!1,ie()}V(f)}class ye{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Se=[];function Ee(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!Se.length;for(const e of s)e[1](),Se.push(e,t);if(e){for(let e=0;e<Se.length;e+=2)Se[e][0](Se[e+1]);Se.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const xe={};var Te={owner:"stamateas",repo:"upptime",sites:[{name:"Recatt Server",url:"https://recatt.its-telekom.eu",maxResponseTime:2e3},{name:"GitLab Server",url:"https://gitlab01.its-telekom.eu",maxResponseTime:2e3},{name:"Jenkins Server",url:"https://jenkins01.its-telekom.eu/",expectedStatusCodes:[200,201,404,403],maxResponseTime:2e3},{name:"ReportPortal Server",url:"https://reporting.its-telekom.eu/",maxResponseTime:2e3},{name:"Authentication Server",url:"https://auth.its-telekom.eu/",maxResponseTime:2e3},{name:"Mattermost Server",url:"https://mattermost.its-telekom.eu/",maxResponseTime:2e3},{name:"Proxima/DNS Server",url:"http://proxima01.its-telekom.eu/livewatch.php",maxResponseTime:2e3},{name:"Secret Site",url:"$SECRET_SITE"}],"status-website":{cname:"status.its-telekom.eu",name:"Server Status",introTitle:"IVA Test Automation Server Status",introMessage:null,navbar:[{title:"Server Status",href:"/"}]},i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All Servers are operational!",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Server Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by Test Automation @ IVA",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"},notifications:[{type:"slack",channel:"C01K93LEFGT"}],workflowSchedule:{graphs:"0 0 * * *",responseTime:"0 23 * * *",staticSite:"0 1 * * *",summary:"0 * * * *",updateTemplate:"0 0 * * *",updates:"0 * * * *",uptime:"*/5 * * * *"},path:"https://status.its-telekom.eu"};function Ae(e,t,n){const r=e.slice();return r[1]=t[n],r}function Re(t){let n,r,s,o=Te["status-website"]&&!Te["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=w("img"),this.h()},l(e){n=C(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){R(n,"alt",""),c(n.src,r=Te["status-website"].logoUrl)||R(n,"src",r),R(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}(),i=Te["status-website"]&&!Te["status-website"].hideNavTitle&&function(t){let n,r,s=Te["status-website"].name+"";return{c(){n=w("div"),r=S(s)},l(e){n=C(e,"DIV",{});var t=I(n);r=H(t,s),t.forEach(_)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=E(),i&&i.c(),this.h()},l(e){n=C(e,"DIV",{});var t=I(n);r=C(t,"A",{href:!0,class:!0});var a=I(r);o&&o.l(a),s=U(a),i&&i.l(a),a.forEach(_),t.forEach(_),this.h()},h(){R(r,"href",Te["status-website"].logoHref||Te.path),R(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(e,t){Te["status-website"]&&!Te["status-website"].hideNavLogo&&o.p(e,t),Te["status-website"]&&!Te["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&_(n),o&&o.d(),i&&i.d()}}}function Ne(e){let t,n,r,s,o,i,a=e[1].title+"";return{c(){t=w("li"),n=w("a"),r=S(a),i=E(),this.h()},l(e){t=C(e,"LI",{});var s=I(t);n=C(s,"A",{"aria-current":!0,href:!0,class:!0});var o=I(n);r=H(o,a),o.forEach(_),i=U(s),s.forEach(_),this.h()},h(){R(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),R(n,"href",o=e[1].href.replace("$OWNER",Te.owner).replace("$REPO",Te.repo)),R(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,i)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&R(n,"aria-current",s)},d(e){e&&_(t)}}}function Ie(t){let n,r,s,o,i,a=Te["status-website"]&&Te["status-website"].logoUrl&&Re(),c=Te["status-website"]&&Te["status-website"].navbar&&function(e){let t,n=Te["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ne(Ae(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=Te["status-website"].navbar,o=0;o<n.length;o+=1){const i=Ae(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ne(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),l=Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&function(t){let n,r,s,o=Te.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=S(o),this.h()},l(e){n=C(e,"LI",{});var t=I(n);r=C(t,"A",{href:!0,class:!0});var i=I(r);s=H(i,o),i.forEach(_),t.forEach(_),this.h()},h(){R(r,"href",`https://github.com/${Te.owner}/${Te.repo}`),R(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=E(),o=w("ul"),c&&c.c(),i=E(),l&&l.c(),this.h()},l(e){n=C(e,"NAV",{class:!0});var t=I(n);r=C(t,"DIV",{class:!0});var u=I(r);a&&a.l(u),s=U(u),o=C(u,"UL",{class:!0});var f=I(o);c&&c.l(f),i=U(f),l&&l.l(f),f.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){R(o,"class","svelte-a08hsz"),R(r,"class","container svelte-a08hsz"),R(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Te["status-website"]&&Te["status-website"].logoUrl&&a.p(e,t),Te["status-website"]&&Te["status-website"].navbar&&c.p(e,t),Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Pe(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class ke extends ye{constructor(e){super(),we(this,e,Pe,Ie,i,{segment:0})}}var Le={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ce(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Oe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function He(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Le[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ce(Oe(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=He(Ce(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Oe(s[8])+'" alt="'+Oe(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Oe(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+He(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Oe(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[3]=t[n],r}function je(e,t,n){const r=e.slice();return r[8]=t[n],r}function De(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){R(n,"rel","stylesheet"),R(n,"href",`${Te.path}/themes/${(Te["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ge(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){R(n,"rel","stylesheet"),R(n,"href",(Te["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n,r;return{c(){n=w("script"),this.h()},l(e){n=C(e,"SCRIPT",{src:!0}),I(n).forEach(_),this.h()},h(){c(n.src,r=t[8].src)||R(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){R(n,"rel",t[3].rel),R(n,"href",t[3].href),R(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=C(e,"META",{name:!0,content:!0}),this.h()},h(){R(n,"name",t[3].name),R(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n,r,s,o,i,a,c,u,f,d,h,m,p,b,y,S,T,A,N=He(Te.i18n.footer.replace(/\$REPO/,`https://github.com/${Te.owner}/${Te.repo}`))+"",P=(Te["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,r=x(),this.h()},l(e){n=j(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();let k=((Te["status-website"]||{}).themeUrl?Ge:De)(t),L=(Te["status-website"]||{}).scripts&&function(e){let t,n=(Te["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=je(e,n,o);r[o]?r[o].p(i,s):(r[o]=qe(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),O=(Te["status-website"]||{}).links&&function(e){let t,n=(Te["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Me(e,n,o);r[o]?r[o].p(i,s):(r[o]=Be(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),H=(Te["status-website"]||{}).metaTags&&function(e){let t,n=(Te["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=ze(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ue(e,n,o);r[o]?r[o].p(i,s):(r[o]=ze(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),M=Te["status-website"].css&&function(t){let n,r,s=`<style>${Te["status-website"].css}</style>`;return{c(){n=new K,r=x(),this.h()},l(e){n=j(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),D=Te["status-website"].js&&function(t){let n,r,s=`<script>${Te["status-website"].js}<\/script>`;return{c(){n=new K,r=x(),this.h()},l(e){n=j(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),G=(Te["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,r=x(),this.h()},l(e){n=j(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();m=new ke({props:{segment:t[0]}});const q=t[2].default,B=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(q,t,t[1],null);return{c(){P&&P.c(),n=x(),k.c(),r=w("link"),s=w("link"),o=w("link"),L&&L.c(),i=x(),O&&O.c(),a=x(),H&&H.c(),c=x(),M&&M.c(),u=x(),D&&D.c(),f=x(),d=E(),G&&G.c(),h=E(),ge(m.$$.fragment),p=E(),b=w("main"),B&&B.c(),y=E(),S=w("footer"),T=w("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);P&&P.l(t),n=x(),k.l(t),r=C(t,"LINK",{rel:!0,href:!0}),s=C(t,"LINK",{rel:!0,type:!0,href:!0}),o=C(t,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(t),i=x(),O&&O.l(t),a=x(),H&&H.l(t),c=x(),M&&M.l(t),u=x(),D&&D.l(t),f=x(),t.forEach(_),d=U(e),G&&G.l(e),h=U(e),be(m.$$.fragment,e),p=U(e),b=C(e,"MAIN",{class:!0});var l=I(b);B&&B.l(l),l.forEach(_),y=U(e),S=C(e,"FOOTER",{class:!0});var g=I(S);T=C(g,"P",{}),I(T).forEach(_),g.forEach(_),this.h()},h(){R(r,"rel","stylesheet"),R(r,"href",`${Te.path}/global.css`),R(s,"rel","icon"),R(s,"type","image/svg"),R(s,"href",(Te["status-website"]||{}).faviconSvg||(Te["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),R(o,"rel","icon"),R(o,"type","image/png"),R(o,"href",(Te["status-website"]||{}).favicon||"/logo-192.png"),R(b,"class","container"),R(S,"class","svelte-jbr799")},m(e,t){P&&P.m(document.head,null),g(document.head,n),k.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),L&&L.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(e,d,t),G&&G.m(e,t),v(e,h,t),ve(m,e,t),v(e,p,t),v(e,b,t),B&&B.m(b,null),v(e,y,t),v(e,S,t),g(S,T),T.innerHTML=N,A=!0},p(e,[t]){(Te["status-website"]||{}).customHeadHtml&&P.p(e,t),k.p(e,t),(Te["status-website"]||{}).scripts&&L.p(e,t),(Te["status-website"]||{}).links&&O.p(e,t),(Te["status-website"]||{}).metaTags&&H.p(e,t),Te["status-website"].css&&M.p(e,t),Te["status-website"].js&&D.p(e,t),(Te["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),B&&B.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const i=l(t,n,r,o);e.p(i,s)}}(B,q,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(de(m.$$.fragment,e),de(B,e),A=!0)},o(e){he(m.$$.fragment,e),he(B,e),A=!1},d(e){P&&P.d(e),_(n),k.d(e),_(r),_(s),_(o),L&&L.d(e),_(i),O&&O.d(e),_(a),H&&H.d(e),_(c),M&&M.d(e),_(u),D&&D.d(e),_(f),e&&_(d),G&&G.d(e),e&&_(h),_e(m,e),e&&_(p),e&&_(b),B&&B.d(e),e&&_(y),e&&_(S)}}}function Ve(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Je extends ye{constructor(e){super(),we(this,e,Ve,Ke,i,{segment:0})}}function We(e){let t,n,r=e[1].stack+"";return{c(){t=w("pre"),n=S(r)},l(e){t=C(e,"PRE",{});var s=I(t);n=H(s,r),s.forEach(_)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&D(n,r)},d(e){e&&_(t)}}}function Fe(t){let n,r,s,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&We(t);return{c(){r=E(),s=w("h1"),o=S(t[0]),i=E(),a=w("p"),c=S(f),l=E(),d&&d.c(),u=x(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=U(e),s=C(e,"H1",{class:!0});var n=I(s);o=H(n,t[0]),n.forEach(_),i=U(e),a=C(e,"P",{class:!0});var h=I(a);c=H(h,f),h.forEach(_),l=U(e),d&&d.l(e),u=x(),this.h()},h(){R(s,"class","svelte-17w3omn"),R(a,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(o,e[0]),2&t&&f!==(f=e[1].message+"")&&D(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=We(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&_(r),e&&_(s),e&&_(i),e&&_(a),e&&_(l),d&&d.d(e),e&&_(u)}}}function Ye(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Xe extends ye{constructor(e){super(),we(this,e,Ye,Fe,i,{status:0,error:1})}}function Qe(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ge(n.$$.fragment),r=x()},l(e){n&&be(n.$$.fragment,e),r=x()},m(e,t){n&&ve(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?me(o,[pe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{_e(e,1)})),fe()}i?(n=new i(a()),ge(n.$$.fragment),de(n.$$.fragment,1),ve(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&de(n.$$.fragment,e),s=!0)},o(e){n&&he(n.$$.fragment,e),s=!1},d(e){e&&_(r),n&&_e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,r){ve(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function et(e){let t,n,r,s;const o=[Ze,Qe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=x()},l(e){n.l(e),r=x()},m(e,n){i[t].m(e,n),v(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(ue(),he(i[c],1,1,(()=>{i[c]=null})),fe(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),de(n,1),n.m(r.parentNode,r))},i(e){s||(de(n),s=!0)},o(e){he(n),s=!1},d(e){i[t].d(e),e&&_(r)}}}function tt(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Je({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),r=!0},p(e,[t]){const r=12&t?me(s,[4&t&&{segment:e[2][0]},8&t&&pe(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(de(n.$$.fragment,e),r=!0)},o(e){he(n.$$.fragment,e),r=!1},d(e){_e(n,e)}}}function nt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return F(l),u=xe,f=r,J().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class rt extends ye{constructor(e){super(),we(this,e,nt,tt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const st=[],ot=[{js:()=>Promise.all([import("./index.7e20b10c.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.2517994f.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.dd081879.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.7bc36a82.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.08d39101.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],it=(at=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:at(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:at(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var at;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,ft=1;const dt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let mt,pt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(mt))return null;let t=e.pathname.slice(mt.length);if(""===t&&(t="/"),!st.some((e=>e.test(t))))for(let n=0;n<it.length;n+=1){const r=it[n],s=r.pattern.exec(t);if(s){const n=gt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=bt(s);if(o){wt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),dt.pushState({id:ut},"",s.href)}}function _t(){return{x:pageXOffset,y:pageYOffset}}function $t(e){if(ht[ut]=_t(),e.state){const t=bt(new URL(location.href));t?wt(t,e.state.id):location.href=location.href}else!function(e){ft=e}(ft+1),function(e){ut=e}(ft),dt.replaceState({id:ut},"",location.href)}function wt(e,t,n,r){return ct(this,void 0,void 0,(function*(){const s=!!t;if(s)ut=t;else{const e=_t();ht[ut]=e,ut=t=++ft,ht[ut]=n?e:{x:0,y:0}}if(yield pt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function yt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let St,Et=null;function xt(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,yt(document)));if(t)Et&&e===Et.href||(Et={href:e,promise:qt(t)}),Et.promise}(t.href)}function Tt(e){clearTimeout(St),St=setTimeout((()=>{xt(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,yt(document)));if(n){const r=wt(n,null,t.noscroll);return dt[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),r}return location.href=e,new Promise((()=>{}))}const Rt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,It,Pt,kt=!1,Lt=[],Ct="{}";const Ot={page:function(e){const t=Ee(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ee(null),session:Ee(Rt&&Rt.session)};let Ht,Ut,Mt;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Dt(e){return ct(this,void 0,void 0,(function*(){Nt&&Ot.preloading.set(!0);const t=function(e){return Et&&Et.href===e.href?Et.promise:qt(e)}(e),n=It={},r=yield t,{redirect:s}=r;if(n===It)if(s)yield At(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Gt(n,t,jt(t,e.page))}}))}function Gt(e,t,n){return ct(this,void 0,void 0,(function*(){Ot.page.set(n),Ot.preloading.set(!1),Nt?Nt.$set(t):(t.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},t.level0={props:yield Pt},t.notify=Ot.page.notify,Nt=new rt({target:Mt,props:t,hydrate:!0})),Lt=e,Ct=JSON.stringify(n.query),kt=!0,Ut=!1}))}function qt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Pt){const e=()=>({});Pt=Rt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ht)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ct(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==Ct)return!0;const s=Lt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let h;if(Ut||u||!Lt[a]||Lt[a].part!==t.i){u=!1;const{default:r,preload:s}=yield ot[t.i].js();let o;o=kt||!Rt.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ht):{}:Rt.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:t.i}}else h=Lt[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Bt,zt,Kt;Ot.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Ht=e,!kt)return;Ut=!0;const t=bt(new URL(location.href)),n=It={},{redirect:r,props:s,branch:o}=yield qt(t);n===It&&(r?yield At(r.location,{replaceState:!0}):yield Gt(o,s,jt(s,t.page)))})))),Bt={target:document.querySelector("#sapper")},zt=Bt.target,Mt=zt,Kt=Rt.baseUrl,mt=Kt,pt=Dt,"scrollRestoration"in dt&&(dt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{dt.scrollRestoration="auto"})),addEventListener("load",(()=>{dt.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",$t),addEventListener("touchstart",xt),addEventListener("mousemove",Tt),Rt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Rt;Pt||(Pt=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Pt},level1:{props:{status:o,error:i},component:Xe},segments:s},c=gt(n);Gt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;dt.replaceState({id:ft},"",t);const n=bt(new URL(location.href));if(n)return wt(n,ft,!0,e)}));export{_e as A,T as B,s as C,Q as D,j as E,c as F,f as G,K as H,z as I,He as J,y as K,O as L,At as M,G as N,A as O,t as P,N as Q,me as R,ye as S,F as T,Y as U,u as V,pe as W,re as X,B as Y,I as a,H as b,C as c,_ as d,w as e,R as f,v as g,g as h,we as i,E as j,U as k,ue as l,he as m,e as n,fe as o,de as p,W as q,Te as r,i as s,S as t,D as u,x as v,$ as w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';