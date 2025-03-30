const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
      const movieId = input.value;
  
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
          const titleElement = document.querySelector('#movieDetails h4');
          const summaryElement = document.querySelector('#movieDetails p');
          
          titleElement.textContent = data.title;
          summaryElement.textContent = data.summary;
        });
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);