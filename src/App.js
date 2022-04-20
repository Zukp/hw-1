import Apple from './comp/Apple'
import './App.css';

function App() {
 
  let name =  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  };


  return (
    <div className="App">
     <Apple  id={name.id}  Url={name.url} prise={name.title}/>
    </div>
  );
}

export default App;
