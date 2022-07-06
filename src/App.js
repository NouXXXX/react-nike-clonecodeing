import React from 'react'
import Featured from './components/featured/Featured'
import Video from './components/video'
import Shoes from './components/shoes/Shoes'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
    <Navbar />
    <Video />
    <Shoes />
    <Featured />
    <Footer />
    </>
  );
}

export default App;
