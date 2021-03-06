import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Row from  './Row';
import Banner from './Banner';
import Nav from './Nav';
import SignUp from './SignUp';
import './App.css';
import requests from './requests';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/genres">
        <div className="App">
          <Nav />
          <Banner/>
          <Row 
            title="NETFLIX ORIGINALS" 
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
      </div>  
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
