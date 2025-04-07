import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Authentication from './components/Authentication'
import Home from './components/Home'
import BookDatail from './components/BookDatail'
import Book from './components/Book'


// const BookGallery = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Book Gallery</h1>
//       <p>Мұнда кітаптар көрсетіледі.</p>
//     </div>
//   );
// };

// <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
// <Link to="/home" style={{ margin: '0 15px' }}>Home</Link>
// <Link to="/book-gallery" style={{ margin: '0 15px' }}>Book Gallery</Link>
// </nav>

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
          
        <Route path='/'element={<Authentication/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/bookdetail' element={<BookDatail/>} />
        <Route path='/authentication' element={<Book/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
