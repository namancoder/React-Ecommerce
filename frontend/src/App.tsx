import Footer from "./components/Footer"
import Header from "./components/Header"
import {Container} from 'react-bootstrap'
import { HomeScreen } from "./screens/HomeScreen"

function App() {

  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>

      <h1>Welcome to ShopEasy</h1>
      <HomeScreen/>
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App
