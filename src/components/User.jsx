import React from 'react'

const User = (props) => {
 console.log(props.name);
 
  
  return (
    <div style={{color:'white'}}>
      Ekta,{props.name}
    </div>
  )
}

export default User
