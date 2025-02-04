import React from "react";

//yaha aap {username} karke bhi pass kar sakte ho in argument of function that's like object destructuring.

//function ke parameter mein "props" karke ek object pass hota hai, jiski properties ko aap '.' operator se access kar sakte ho.

function Card(props){
  return(
    
    <div className="flex flex-col rounded-xl  p-4 mb-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{props.username}</h1>
            <h1 className="font-bold font-RubikBold">{props.btnText}</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
  )
}

export default Card