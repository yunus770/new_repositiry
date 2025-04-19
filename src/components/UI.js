import React from "react";
  
function formatname (user){
return   user.firstname + ' ' + user.lastname;
}
const userr = {
    firstname:"Yunus",
    lastname:"Atayew"
} 


const element = (
    <h1>
        hello, {formatname(userr)}
    </h1>
)
 

const isActive = true;

const knopkastil = {
  backgroundColor: isActive?  'blue' : 'gray',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',

}

const Click = () =>{
    alert ('basyldy')
}

const knopka = (
    <button style={knopkastil} onClick={Click}>
        barlap gor
    </button>
)


export  {element, knopka}
