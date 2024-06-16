import "./App.css";
import { useState } from "react";
import {Button} from 'react-bootstrap'
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";


function App() {
  
  // initial state 
  const [searchVideo ,setSearchVideo] = useState('KGF 2');

  const [videoUrl ,setVideoUrl] = useState('')

  function handleSearch(){
    movieTrailer(searchVideo).then((res)=>{
      setVideoUrl(res)
      console.log(res)
    })
  }
 
  return (
   <div className="App">
    <h1>
        <label htmlFor="">Search Movie/Shows trailer Here</label>
      </h1>
    <div className="search-box">
      <input type="text" defaultValue={searchVideo} onChange={(e)=>{       
        setSearchVideo(e.target.value);
        console.log(e.target.value)
      }}/>
      <Button onClick={()=>handleSearch()}>Search</Button>
    </div>

    {/* reactplayer  */}
    <ReactPlayer url={videoUrl} controls={true}></ReactPlayer>
   </div>
  );
}

export default App;

