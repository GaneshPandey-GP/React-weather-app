import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Current from "./components/Current";
import Footer from './components/Footer';
import Default from './components/Default';

const App = () => {
  const [location, setLocation] = useState();
  let currLocation = "";
  
  return (
    <>
      <div className="container text-uppercase text-center ">
        
        <div className="head ">
          <form onSubmit={(e)=>{ e.preventDefault();}}>
            <input
              type="text"
              placeholder="e.g. Delhi,IN"
              onChange={(event) => {
                return (currLocation = event.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") return setLocation(currLocation);
              }}
            />
            
          </form>
          
        </div>
      </div>
    <br/>
      {location ? <Current name={location} />: <Default/>}
      <Footer/>
    </>
  );
};
export default App;
