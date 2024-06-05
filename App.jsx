
import { styled } from 'styled-components'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Row title="Trending Now" id="TN" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={Request.fetchComedyMovies} />
      </Container>
  )
}

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

export default App
