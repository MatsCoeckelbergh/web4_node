import axios from 'axios'
 
getLectors()

function getLectors() {
    axios.get('http://localhost:8080/Controller?command=Overview')
      .then(response => console.log(response.data))
        .then(()=>setTimeout(getLectors, 1000))
}