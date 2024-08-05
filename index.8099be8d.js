function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var t,n=document.querySelectorAll("th"),r=document.querySelector("table tbody"),a=function(t){if(Array.isArray(t))return e(t)}(t=r.querySelectorAll("tr"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o={};n.forEach(function(e,t){e.addEventListener("click",function(){var e;e="asc"===(o[t]||"none")?"desc":"asc",o[t]=e,a.sort(function(n,r){var a=n.cells[t].textContent,o=r.cells[t].textContent;return"asc"===e?a.localeCompare(o,void 0,{numeric:!0}):o.localeCompare(a,void 0,{numeric:!0})}),r.innerHTML="",a.forEach(function(e){return r.appendChild(e)})})}),a.forEach(function(e){e.addEventListener("click",function(){a.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")})});var i=document.createElement("form");i.classList.add("new-employee-form");var l=document.createElement("label");l.textContent="Name: ";var c=document.createElement("input");c.name="name",c.type="text",c.setAttribute("data-qa","name"),c.required=!0,l.appendChild(c),i.appendChild(l);var u=document.createElement("label");u.textContent="Position: ";var d=document.createElement("input");d.name="position",d.type="text",d.setAttribute("data-qa","position"),d.required=!0,u.appendChild(d),i.appendChild(u);var m=document.createElement("label");m.textContent="Office: ";var s=document.createElement("select");s.name="office",s.setAttribute("data-qa","office"),s.required=!0,["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,s.appendChild(t)}),m.appendChild(s),i.appendChild(m);var p=document.createElement("label");p.textContent="Age: ";var f=document.createElement("input");f.name="age",f.type="number",f.setAttribute("data-qa","age"),f.required=!0,p.appendChild(f),i.appendChild(p);var v=document.createElement("label");v.textContent="Salary: ";var b=document.createElement("input");b.name="salary",b.type="number",b.setAttribute("data-qa","salary"),b.required=!0,v.appendChild(b),i.appendChild(v);var C=document.createElement("button");C.textContent="Save to table",C.type="submit",i.appendChild(C),document.body.appendChild(i);var y=document.createElement("div");function h(e,t){y.textContent=e,y.className=t}y.setAttribute("data-qa","notification"),document.body.appendChild(y),i.addEventListener("submit",function(e){e.preventDefault(),y.textContent="",y.className="";var t=i.elements.name.value,n=i.elements.position.value,r=i.elements.office.value,a=parseInt(i.elements.age.value,10),o=parseFloat(i.elements.salary.value);if(n.length<3){h("Position must be at least 3 characters long.","error");return}if(isNaN(o)||o<=0){h("Salary must be a positive number.","error");return}if(t.length<4){h("Name must be at least 4 characters long.","error");return}if(a<18||a>90){h("Age must be between 18 and 90.","error");return}var l=o.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),c=document.querySelector("table tbody").insertRow();c.insertCell().textContent=t,c.insertCell().textContent=n,c.insertCell().textContent=r,c.insertCell().textContent=a,c.insertCell().textContent=l,h("New employee added to the table.","success"),i.reset()});
//# sourceMappingURL=index.8099be8d.js.map
