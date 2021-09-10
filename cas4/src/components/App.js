import React, { useState,useEffect } from 'react';
// import {Movies} from './Movies';
// import {Filmovi} from './Filmovi';

// let movies = [
//   {ime:"Pulp Fiction",zanr:"Crime,Drama",year:1994,plot:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",imgUrl:"https://www.indiewire.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-22-at-5.09.08-PM.png",imdbLink:"https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0"},
//   {ime:"Back to the future",zanr:"Sci-fi,Comedy",year:1985,plot:"Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",imgUrl:"https://images.newscientist.com/wp-content/uploads/2015/10/dn28374-1_800.jpg?width=800",imdbLink:"https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0"},
//   {ime:"The Dark Knight",zanr:"Crime",year:2008,plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",imgUrl:"https://m.media-amazon.com/images/M/MV5BNWJkYWJlOWMtY2ZhZi00YWM0LTliZDktYmRiMGYwNzczMTZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg",imdbLink:"https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0"}
// ]

export function App() {

  const [promenliva1, setPromenliva1] = useState("Prva Vrednost"); // const [ime Na Promenliva,funnkcija zadolzena za promena] = hook(pocetna Vrednost na promenlivata)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [counter,setCounter] = useState(0);


  //   function changedValue(event){
  //       setUsername(event.target.value);
  //   }

  //   function changedPassword(event){
  //     setPassword(event.target.value);
  // }

  useEffect(()=>{
    console.log("Username: ",username);
    console.log("Password: ",password);
  },[username,password]) // useEffect(()=>{} <- se izvrsuva sekogas,[]<- so prazen dependecy array = ComponentDidMount,so promenlivi vo dependecy array = ComponentDidUpdate)


  function showValues(){
      alert(`Username: ${username}\nPassword:${password}`);
  }

  return (
    <div id="app">
      {/* <Movies listaFilmovi={movies} />
        <Filmovi movies={movies}/> */}
      <p>{promenliva1}</p>
      <button onClick={() => { setPromenliva1("Vtora Vrednost") }}>Smeni Vrednost</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => { setUsername(event.target.value) }} //event
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }} // e -> kratenka za event
      />
      <br />
      <br />
      <button onClick={showValues}>
        Show Values
      </button>
        <br/>
        <br/>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        width="450"
        height="600"
        alt="nokia"
        onClick={()=>{setCounter(counter + 1)}}
      />
      <p>Counter: {counter}</p>
    </div>
  )
}