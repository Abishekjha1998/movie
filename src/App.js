import { useState } from "react";
import MovieComponent from "./components/MovieComponent";
import styled from 'styled-components'
import axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY ="58339063";
const Container=styled.div`
display:flex;
flex-direction:column;
`;
const Header=styled.div`
display:flex;
flex-direction:row;
background:#9999ff;
color:black;
justify-content:space-between;
padding:10px;
align-item:center;
font-size:30px;
fomt-weight:bold;
height:50px;
`;
const AppName=styled.div`
display:flex;
flex-direction:row;
align-items:center;
`;
const MovieImage=styled.img`
width:45px;
height:45px;
margin:15px;
`;
const SearchBox=styled.div`
display:flex;
flex-direction:row;
padding: 10px 10px;
background-color:white;
border-radius:6px;
margin-left: 20px;
width:50%;
`;
const SearchIcons=styled.img`
padding-top:1px;
margin-left:410px;
width:32px;
height:32px;
`;
const SearchedInput=styled.input`
outline:none;
border:none;
color:black;
font-size:16px;
margin-left:15px;
font-weight:bold;

`;
 
const MovieListContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-evenly;
padding:15px;
gap:25px;
`;

function App() {
  const [searchQuery,updateSearchQuery]= useState();
  const [timeoutID,updateTimeOut]= useState();
  const [movieList,updateMovieList]=useState([]);
  const [selectedMovie,onMovieSelect]=useState();


const fetchData = async(searchString)=>{
  const response =await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,)
  updateMovieList(response.data.Search)
};

  const onTextChange=(event)=>{
    clearTimeout(timeoutID)
    updateSearchQuery(event.target.value);
    const timeout=setTimeout(() => fetchData(event.target.value),2000);
    updateTimeOut(timeout)
  };

  return (
  <Container>
    <Header>
      <AppName>
        <MovieImage src="/movie.png" />
         Awesome Movies
        </AppName>
        <SearchBox>
          <SearchedInput placeholder="Search Movies" value={searchQuery} onChange={onTextChange} />
          <SearchIcons src="/search.png" />
        </SearchBox>
    </Header>
    {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie}  onMovieSelect={onMovieSelect}/>}
    <MovieListContainer>
    {movieList?.length? movieList.map((movie,index)=> (<MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} />)):
    "SORRY NO MOVIES SEARCHED" }
    
    </MovieListContainer>
  </Container>);
}

export default App;
