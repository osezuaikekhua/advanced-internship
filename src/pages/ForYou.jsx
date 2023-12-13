import React from 'react'

function ForYou() {
  return (
    <>
      <div className='forYou__container'>

        <nav>
          <div className='nav__title'>Summarist</div>
          <div className='nav__section'>
            <div className='nav__section__text'>
                <div>For you</div>
                <div>My Libary</div>
                <div>Highlights</div>
                <div>Search</div>
            </div>
            <div className='nav__section__text'>
                <div>Settings</div>
                <div>Help & Support</div>
                <div>Logout</div>
            </div>
          </div>
        </nav>

        <section>
          <div className='search__container'>
            <input type="text" placeholder='Search for books'/>
          </div>
          <div className='content__container'>

          </div>
        </section>
      </div>
    </>
  )
}

export default ForYou