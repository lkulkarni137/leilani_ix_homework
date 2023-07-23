import logo from './logo.svg';
import './App.css';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

  async function fetchPosts() {


    const res = await fetch(url + 'posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
  }

  async function fetchOwnPost() {
    const res = await fetch('https://localhost:3000' + 'posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'applications/json',
      }
    })
  }

}

export default App;