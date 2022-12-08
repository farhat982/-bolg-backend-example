import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import CookieConsent from 'react-cookie-consent';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (

    <BrowserRouter>
    <div className="App">
      <Navbar />
        <div className='content'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
         <CookieConsent
           location="bottom"
           buttonText="Sure man!!"
           cookieName="myAwesomeCookieName2"
           style={{ background: "#2B373B" }}
           buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
           expires={150}
         >
          <h6 style={{ fontSize: "" , color:'white'}}>This website uses cookies to enhance the user experience.</h6>
          <span style={{ fontSize: "10px" , color:'white'}}>This bit of text is smaller :O</span>
         </CookieConsent>
    </div>
    </BrowserRouter>
  );
}

export default App;
