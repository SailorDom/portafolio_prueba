document.getElementById ('submitButton').addEventListener ('click', sendEmail);

function sendEmail(){
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }
  console.log('params', params)

  const serviceId = 'service_an4iv2b';
  const templateId = 'template_eiiorel';

  emailjs.send(serviceId, templateId, params)
  .then(
    res => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('ya esto hay que definirlo pero así queda')
    })
    .catch(
      err => {
        console.log(err);
        alert('un mensajito por si todo salió mal')
      }
    )
};