import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  )
}

function HeroImage(){
  return(
    <img 
      src="./src/assets/"
      className="img-fluid" 
      alt="A fish swimming"  width="100"
    />
  )
}

export default App 

