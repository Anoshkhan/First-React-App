import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Heading from "./Heading";

const name = 'Anosh Khan';
const fname = 'Alisha';
const lname = 'Rana';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/300/300';
const img3 = 'https://picsum.photos/250/300';
const linked = 'https://www.linkedin.com/in/anosh-khan-b2b980222/';
const headTwo = {
  color : 'green',
  fontSize : '30px',
  textAlign :'center',
  fontWeight : 'bold',
  textShadow : '0px 2px 4px #ffe9cf',
  fontFamily : '"Josefin Sans", sans-serif'
}

ReactDOM.render(
  <React.Fragment>
  <h1>Netflix Series</h1>
  <p>Here is the top five netflix series</p>
  <ol>
    <li>The Umbrella Academy: Season 3</li>
    <li>You Don't Know Me: Season 1</li>
    <li>First Kill: Season 1</li>
    <li>Man Vs Bee: Season 1</li>
    <li>Stranger Things</li>
  </ol>
  <h2>My name is {name}</h2>
  <h3>My age is {20+2}</h3>
  <h3>{`My baby name is ${fname} ${lname}`}</h3>
  <p>{`Current date is = ${date}`}</p>
  <p>{`Current Time is = ${time}`}</p>
  <br>

  </br>
  <Heading />
  <h1 className="heading">Image Gallery</h1>
  <p style = { {
    color: '#090380',fontFamily: 'monospace',fontSize : '22px'} } >This is Anosh Khan I am a web developer</p>
  <h2 style={headTwo}>My Name is Anosh</h2>
  <div className='imgdiv'>
    <img src={img1} alt="random image" />
    <img src={img2} alt="random image" />
    <a href={linked} target="_blank">
    <img src={img3} alt="random image" />
    </a>
  </div>
  
  </React.Fragment>,
  document.getElementById("root"));