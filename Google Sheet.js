const scriptURL = 'https://script.google.com/macros/s/AKfycbzj_1GGnIggi4uzdd6eyn_drUfnipnhKI75JT4mn5jJrS-oTqIm0fGwJW91CiXZHjeiOQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response =>$("#obrigada").show(); ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
