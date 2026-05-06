import React from 'react'
import '../assets/styles/LandingPage.css'
import SearchIcon from '@mui/icons-material/Search'
const LandingPage = () => {
  return (
    <>
      <div className="landingpage">
        <div className="poster">

        </div>
        <div className="content">
          <div className="search">
            <input type="text" placeholder='Search' />
            <button><SearchIcon/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
