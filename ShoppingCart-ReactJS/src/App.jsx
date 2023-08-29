import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import PageContainer from './containers/PageContainer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <div>
      <PageContainer>
    <Router>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
    </PageContainer>
    </div>
  )
}

export default App
