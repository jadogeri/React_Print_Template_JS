import React from 'react'

const Invitation = ({contentRef}) => {
  return (
<div ref={contentRef}>
  <div
    className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min"
    id="us"
  >
 
    <div className="w3-content">
      <h1 className="w3-center w3-text-grey">
        <b>Jane &amp; John</b>
      </h1>
      <img
        className="w3-round w3-grayscale-min"
        src="https://www.w3schools.com/w3images/wedding_couple2.jpg"
        style={{ width: "100%", margin: "32px 0" }}
      />
      <p>
        <i>
          You all know us. And we all know you. We are getting married lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </i>
      </p>
      <br />
      <p className="w3-center">
        <a
          href="#wedding"
          className="w3-button w3-black w3-round w3-padding-large w3-large"
        >
          Wedding Details
        </a>
      </p>
    </div>
  </div>
  {/* Background photo */}
  <div className="w3-display-container bgimg2">
    <div className="w3-display-middle w3-text-white w3-center">
      <h1 className="w3-jumbo">You Are Invited</h1>
      <br />
      <h2>Of course..</h2>
    </div>
  </div>
  {/* Wedding information */}
  <div
    className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center"
    id="wedding"
  >
    <div className="w3-content">
      <h1 className="w3-text-grey">
        <b>THE WEDDING</b>
      </h1>
      <img
        className="w3-round-large w3-grayscale-min"
        src="https://www.w3schools.com/w3images/wedding_location.jpg"
        style={{ width: "100%", margin: "64px 0" }}
      />
      <div className="w3-row">
        <div className="w3-half">
          <h2>When</h2>
          <p>Wedding Ceremony - 2:00pm</p>
          <p>Reception &amp; Dinner - 5:00pm</p>
        </div>
        <div className="w3-half">
          <h2>Where</h2>
          <p>Some place, an address</p>
          <p>Some where, some address</p>
        </div>
      </div>
    </div>
  </div>
  {/* RSVP section */}
  <div
    className="w3-container w3-padding-64 w3-pale-red w3-center w3-wide"
    id="rsvp"
  >
    <h1>HOPE YOU CAN MAKE IT!</h1>
    <p className="w3-large">Kindly Respond By January, 2017</p>
    <p className="w3-xlarge">
      <button
        onClick={()=>{document.getElementById('id01').style.display='block'}}
        className="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off"
        style={{ padding: "8px 60px" }}
      >
        RSVP
      </button>
    </p>
  </div>
  {/* RSVP modal */}
  <div id="id01" className="w3-modal">
    <div
      className="w3-modal-content w3-card-4 w3-animate-zoom"
      style={{ padding: 32, maxWidth: 600 }}
    >
      <div className="w3-container w3-white w3-center">
        <h1 className="w3-wide">CAN YOU COME?</h1>
        <p>We really hope you can make it.</p>
        <form>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Name(s)"
            name="name"
          />
        </form>
        <p>
          <i>Sincerely, John &amp; Jane</i>
        </p>
        <div className="w3-row">
          <div className="w3-half">
            <button
        onClick={()=>{document.getElementById('id01').style.display='none'}}
        type="button"
              className="w3-button w3-block w3-green"
            >
              Going
            </button>
          </div>
          <div className="w3-half">
            <button
        onClick={()=>{document.getElementById('id01').style.display='none'}}
        type="button"
              className="w3-button w3-block w3-red"
            >
              Can't come
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="w3-center w3-black w3-padding-16">
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </a>
    </p>
  </footer>
  <div className="w3-hide-small" style={{ marginBottom: 32 }}>
    &nbsp;
  </div>
  </div>
  )
}

export default Invitation