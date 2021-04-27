import React from 'react' ;
import './App.css';
import Cards from './conponents/smallcards'


function App () {
  return (<div>
      <ul className="navbar" >
        <li><img src="https://www.docplanner.com/img/sygnet.png"></img>Docplanner Group</li>
        <li>About us</li>
        <li>Career</li>
        <li>Departments</li>
      </ul>
      <img className="logo" src="https://www.docplanner.com/img/sygnet.png"></img>
      <h3>Making the healthcare experience more human</h3>
      <div className="intro">
    <div className="col-6">
      <p className=" parag">
      We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
      </p>
      </div>
      <div className="col-6">
      <p className="parag">
      We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
      </p>
      </div>
      </div>
      <div className="cards">
      <div className="col-3 ">
        <div class="serivce">
          <img src="https://www.docplanner.com/icons/icon-patients.svg"></img>
          <h1 className="patient">For patients</h1>
          <h2 className="find">Find a doctor, book a visit and solve any health-related doubt</h2>
          <div className="choose">
            <select>
            <option>Choose contry</option>
            <option>Argentina</option>
            <option>Itali</option>
            <option>Brazil</option>
            </select>
          </div>

        </div>

      </div>
      <div className="col-3 ">
        <div className="serivce1">
          <img src="https://www.docplanner.com/icons/icon-patients.svg"></img>
          <h1 className="patient"> For doctors</h1>
          <h2 className="find">Save time managing visits and cut no-shows by half</h2>
          <div className="choose">
            <select>
            <option>Choose contry</option>
            <option>Argentina</option>
            <option>Itali</option>
            <option>Brazil</option>
            </select>
          </div>

        </div>

      </div>
      <div className="col-3 ">
        <div className="serivce2">
          <img src="https://www.docplanner.com/icons/icon-patients.svg"></img>
          <h1 className="patient">For clinics</h1>
          <h2 className="find">Deliver an exceptional patient experience in your clinic</h2>
          <div className="choose">
            <select>
            <option>Choose contry</option>
            <option>Argentina</option>
            <option>Itali</option>
            <option>Brazil</option>
            </select>
          </div>

        </div>

      </div>
      </div>
     
        <div>
          <h5 class="global">We are global campany <br></br>
            with local culture

          </h5>
        </div>
        <div className="section">
          <div className="container">
          <div className="row ">
            <h5 className="world">The world's biggest <br></br>healthcare platform</h5>
            <h6 className="work">We work from 7 offices all over the world,<br></br> bringing Docplanner Group to life in a dozen countries.</h6>
            </div>

          </div>
          <div className="container">
            <div className="row">
          <Cards />
          <Cards />
          <Cards />
          </div>
          </div>
        </div>
      
    </div>
    
  );
    
   

}

export default App;