import React from 'react'

const shop = () => {
  return (
    <div id="sidebar">
      <div>
      <form id="search-form" role="search">
      <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
            <form method="post">
            {/* <button type="submit">New</button> */}
            </form>
          </form>
      </div>
    </div>
  )
}

export default shop
