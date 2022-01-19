import React,{useState, useEffect} from 'react';
import { fetchMovies } from '../../service';
import RBCarousel from 'react-bootstrap-carousel'

export const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);


  useEffect(() => {
    const fetchAPI = async () =>{
      setNowPlaying(await fetchMovies())
    }
    fetchAPI()

  },[])
  return (
      <div className="container">
        <div className="row">
          <div className="col">
              <RBCarousel>

              </RBCarousel>
          </div>
        </div>
      </div>
    )
};
