import React from 'react'

const StickyFooter = () => {
  return (
    <div className="w3-bottom w3-hide-small">
    <div className="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
      <a
        href="#home"
        style={{ width: "25%" }}
        className="w3-bar-item w3-button"
      >
        Home
      </a>
      <a href="#us" style={{ width: "25%" }} className="w3-bar-item w3-button">
        Jane &amp; John
      </a>
      <a
        href="#wedding"
        style={{ width: "25%" }}
        className="w3-bar-item w3-button"
      >
        Wedding
      </a>
      <a
        href="#rsvp"
        style={{ width: "25%" }}
        className="w3-bar-item w3-button w3-hover-black"
      >
        RSVP
      </a>
    </div>
  </div>
  )
}

export default StickyFooter