(()=>{"use strict";function e(e){localStorage.setItem("tasks",JSON.stringify(e))}function t(){return localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]}const n=function(n){var i=t(),a={description:n,completed:!1,index:i.length+1};i.push(a),e(i)},i=function(n){var i=t().filter((function(e,t){return t!==n}));i.forEach((function(e,t){e.index=t+1})),e(i)},a=function a(){var r=t(),o=document.getElementById("tasks");o.innerHTML="";var d=document.createElement("li"),c=document.createElement("h1"),s=document.createElement("div");s.classList.add("icon-refresh"),c.textContent="Today's To Do",c.classList.add("heading"),d.appendChild(c),d.appendChild(s),o.appendChild(d),s.addEventListener("click",(function(){s.classList.add("rotate"),setTimeout((function(){s.classList.remove("rotate"),a()}),2e3)}));var l=document.createElement("input");l.classList.add("add-task"),l.id="add-task",l.type="text",l.placeholder="Add to your list";var u=document.createElement("input");u.classList.add("icon-return"),u.type="submit",u.value="",u.id="submit-new-item",u.title="click this or press enter to submit";var p=document.createElement("li");p.appendChild(l),p.appendChild(u),o.appendChild(p);var m=function(){""!==l.value.trim()&&(n(l.value.trim()),a(),l.value="",document.getElementById("add-task").focus())};l.addEventListener("keydown",(function(e){"Enter"===e.key&&m()})),u.addEventListener("click",(function(){m()})),r.forEach((function(t,n){var d=document.createElement("li");d.setAttribute("id",n+1);var c=function(t,n,i){var a=document.createElement("input");return a.classList.add("checkbox"),a.type="checkbox",a.checked=t.completed,a.addEventListener("change",(function(a){t.completed=a.target.checked,e(n),i(n)})),a}(t,r,a);d.appendChild(c);var s=document.createElement("button");s.className="remove-task",s.classList.add("hidden");var l=document.createElement("textarea");l.setAttribute("rows","1"),l.value=t.description,!0===t.completed&&l.classList.add("completed"),l.addEventListener("focus",(function(){s.classList.remove("hidden"),s.addEventListener("mousedown",(function(){i(n),a()}))})),l.addEventListener("blur",(function(){s.classList.add("hidden")})),l.addEventListener("input",(function(e){t.description=e.target.value,l.style.height="auto",l.style.height="".concat(l.scrollHeight,"px")})),l.addEventListener("keydown",(function(n){"Enter"===n.key&&(n.preventDefault(),t.description=l.value,e(r),a())})),d.appendChild(l),d.appendChild(s);var u=document.createElement("span");u.classList.add("dots"),d.appendChild(u),o.appendChild(d)}));var f=document.createElement("button");f.classList.add("clear-btn"),f.setAttribute("id","clear-all"),f.textContent="Clear completed tasks";var v=document.createElement("li");v.classList.remove("ripple"),f.addEventListener("click",(function(){v.classList.add("ripple"),f.innerHTML="Done &#10003;",setTimeout((function(){(function(){var n=t().filter((function(e){return!e.completed}));n.forEach((function(e,t){e.index=t+1})),e(n)})(),a()}),360)})),v.classList.add("clear-btn-container"),v.appendChild(f),o.appendChild(v)};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===r(a)?a:String(a)),i)}var a}(new(function(){function e(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tasks=[],this.listContainer=n,this.tasks=t(),this.render=a(),this.inputField=document.querySelector(".add-task")}var r,d;return r=e,(d=[{key:"add",value:function(e){n(this)}},{key:"remove",value:function(e){i(this)}},{key:"displayList",value:function(){a(),document.getElementById("add-task").focus()}}])&&o(r.prototype,d),Object.defineProperty(r,"prototype",{writable:!1}),e}())).displayList()})();