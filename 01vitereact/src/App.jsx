//Yaha import bhi uppercase mein karna.Keep everything in uppercase bas filename lowercase mein chalega....
//Aap App() ke through only ek hi element return kar sakte ho.Agar aap "<Chai />" iske baad kuch bhi HTML likhoge toh error aayega, toh to return more stuff sabko <> </> iske andar likhdo..



import Chai from './chai'


function App() {
  const userName = "chai aur code"
  //Usse {} ke ander likhna to get the required values.
  //"{}" ke andar js nahi dal sakte loops wager only variables use ke liye chalega.

  return (
    <>
      <Chai />
      <p>Why pratham.</p>
      <h4>why not anyone else, {userName}</h4>
    
    </>
    
  )
}

export default App
