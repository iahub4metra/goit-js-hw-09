import"./assets/modulepreload-polyfill-3cfb730f.js";const a={email:"",message:""},t=document.querySelector(".feedback-form"),s="feedback-form-state",m=localStorage.getItem(s);if(m){const e=JSON.parse(m);t.elements.email.value=(e.email??"").trim(),t.elements.message.value=(e.message??"").trim(),a.email=e.email??"",a.message=e.message??""}t.addEventListener("input",function(e){a[e.target.name]=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(a))});t.addEventListener("submit",function(e){e.preventDefault(),(!a.email||!a.message)&&alert("Fill please all fields!"),console.log(a),a.email="",a.message="",localStorage.removeItem(s),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
