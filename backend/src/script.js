const form = document.getElementById('mcq-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const answers = Array.from(formData.values());

  console.log(answers);
});

function returnAns(){
  return answers;
}

export default returnAns;