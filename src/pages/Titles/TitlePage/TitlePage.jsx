import React from "react";
import Container from "react-bootstrap/Container";

// Components

const TitlePage = ({ title }) =>
    <Container fluid>
        <h2>{title.PrimaryTitle}</h2>

        <p>url: {title.url}</p>
        <p>Type: {title.Type}</p>
        <p>IsAdult: {title.IsAdult}</p>
        <p>StartYear: {title.StartYear}</p>
        <p>EndYear: {title.EndYear}</p>
        <p>RunTimeMinutes: {title.RunTimeMinutes}</p>
        <p>Poster: {title.Poster}</p>
        <p>Plot: {title.Plot}</p>
        <p>AverageRating: {title.AverageRating}</p>
        <p>NumVotes: {title.NumVotes}</p>
        <p>TitleGenres: {title.TitleGenres}</p>
        <p>TitleCharacters: {title.TitleCharacters}</p>
        <p>SimilarTitlesUrl: {title.SimilarTitlesUrl}</p>
    </Container>;

export default TitlePage;