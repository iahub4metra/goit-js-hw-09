const formdata = {
    email: "",
    message: "",
}
const form = document.querySelector('.feedback-form');
const storageKey = "feedback-form-state";
const savedData = localStorage.getItem(storageKey);

if (savedData) {
    const parsedData = JSON.parse(savedData);
form.elements.email.value = (parsedData.email ?? "").trim();
    form.elements.message.value = (parsedData.message ?? "").trim();
    formdata.email = parsedData.email ?? "";
    formdata.message = parsedData.message ?? "";
}

form.addEventListener('input', function (e) {
    formdata[e.target.name]= e.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formdata))
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!formdata.email || !formdata.message) {
        alert("Fill please all fields!")
    }
    console.log(formdata);
    formdata.email = "";
    formdata.message = "";
    localStorage.removeItem(storageKey)
    form.reset();
})