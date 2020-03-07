import React from 'react';
import Profil from './Profil';
import './App.css';


const myProfil={

	photo:'https://media-exp1.licdn.com/dms/image/C4D03AQFC9AFykfGuBw/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=gzf_KgBl4iZZHik0-i14cjbfMOd4O-Gw407FKv_qtOU',

	Name:{firstName:'Rahma', lastName:'Rejab'},

	profileLink:'https://www.facebook.com/rahma.rejab.54',


}

function App() {
  return (
    <div className="App">
    
      <h1>WELCOME</h1>
      <Profil mp={myProfil}/>
    </div>
  );
}

export default App;
