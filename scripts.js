window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = onSubmit.bind(form);
  }
  
  function onSubmit(event) {
    event.preventDefault();
  
    const input = document.querySelector("input");
    const value = input.value;
  
    printText(value);
  
    input.value = '';
  }
  
  function printText(value) {
    const list = document.querySelector("ul");
    let item = document.createElement('li');
    let text = document.createTextNode(value);
    item.appendChild(text);
    list.appendChild(item);
  
    addTextClass(item, value)
  }
  
  function addTextClass(item, value) {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(value)){
      item.classList.add('red');
    } else if (value.length > 3) {
      item.classList.add('green');
    }
  }