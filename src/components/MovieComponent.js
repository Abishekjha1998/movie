import styled from "styled-components"
import React from "react";
const MovieContainer=styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    width:280px;
    box-shadow:2px 5px 10px 0 #004d99; 
    cursor:pointer
 `;
const CoverImage=styled.img`
    height:320px;
    object-fit:cover;
`;

const MovieName=styled.span`
font-size:18px;
font-wieght:600;
color:black;
margin:15px 0;
text-overflow:ellipsis;
whitespaces:nowrap;
overflow:hidden;
`;

const InfoColumn=styled.div`
display:flex;
flex-direction:row;
justify-content : space-between;
`;

const MoviesInfo=styled.span`
font-size:16px;
font-weight:500;
color:black;
text-transform:capatalize;
`;
const MovieComponent  =(props)=>{
    const {Title,Year,imdbID,Type,Poster}=props.movie;
    
return (
<MovieContainer onClick={() => props.onMovieSelect(imdbID)}>
    <CoverImage src={Poster} />
    <MovieName>{Title}</MovieName>
    <InfoColumn>
        <MoviesInfo>Year : {Year}</MoviesInfo>
        <MoviesInfo>Type : {Type}</MoviesInfo>
    </InfoColumn>
</MovieContainer>

    );
}
export default MovieComponent