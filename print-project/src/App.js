import './App.css';
import { useRef } from 'react';
import printer from "./assets/images/printer-icon.png"
import Invitation from './components/Invitation';
import { useReactToPrint } from 'react-to-print';
import StickyFooter from './layouts/StickyFooter';
import Header from './layouts/Header';

function App() {
  const contentRef = useRef(null)
  const handlePrint = useReactToPrint({
    documentTitle: 'Wedding Invitation: Jane & John',
    contentRef: contentRef,
     });

  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,h1,h2{font-family: "Raleway", sans-serif}\nbody, html {height: 100%}\np {line-height: 2}\n.bgimg, .bgimg2 {\n  min-height: 100%;\n  background-position: center;\n  background-size: cover;\n}\n.bgimg {background-image: url("https://www.w3schools.com/w3images/wedding_couple.jpg")}\n.bgimg2 {background-image: url("https://www.w3schools.com/w3images/flowers.jpg")}\n'
    }}
  />
  {/* Header / Home*/}
  <Header />

  {/* Navbar (sticky bottom) */}
  <StickyFooter />

  {/* About / Jane And John */}
  <div
    className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min"
    id="printer">
      Print Wedding Invitation 
      <img src={printer} alt='printer' width={30} height={40} onClick={()=>{handlePrint()}}/>
  </div>
  {/** BEGIN OF PRINT COMPONENT **/}
  <Invitation contentRef={contentRef}/>

  {/** END OF PRINT COMPONENT**/}
</>

  );
}

export default App;
