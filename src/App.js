
import './App.css';
import Four from './images/4.png';
import Two from './images/2.png';
import Three from './images/R2.png';
import One from './images/1.png';
import {useState} from "react";

function App() {

  const  albums = [
    {
      id: 1,
      name: 'Album 1',
      songs: ['- Song 1', '- Song 2', '- Song 3'],
      image: One,
    },
    {
      id: 2,
      name: 'Album 2',
      songs: ['- Song 4', '- Song 5', '- Song 6'],
      image: Two,
    },
    {
      id: 3,
      name: 'Album 3',
      songs: ['- Song 7', '- Song 8', '- Song 9'],
      image: Three,
    },
    {
      id: 4,
      name: 'Album 4',
      songs: ['- Song 10', '- Song 11', '- Song 12'],
      image: Four,
    },
  ];

  const [openAlbum, setOpenAlbum] = useState(null);

  const toggleAlbum = (id) => {
    if (openAlbum === id) {
      setOpenAlbum(null);
    } else {
      setOpenAlbum(id);
    }
  };

  return (
      <div className="App">
        <h1>Music Albums</h1>
        <div className="album-list">
          {albums.map((album) => (
              <div key={album.id} className="album">
                <img src={album.image} alt={album.name} />
                <h2 onClick={() => toggleAlbum(album.id)}>{album.name}</h2>
                {openAlbum === album.id && (
                    <ul>
                      {album.songs.map((song, index) => (
                          <li key={index}>{song}</li>
                      ))}
                    </ul>
                )}
              </div>
          ))}
        </div>
      </div>
  );

}

export default App;
