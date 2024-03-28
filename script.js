const name = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getAnimations('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if(fname.value ==='' || fname.value == null){
        messages.push('Name is required')
    }
   if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
   }
   
})
