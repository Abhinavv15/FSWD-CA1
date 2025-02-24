import TestimonialCard from "./components/TestimonialCard"
let data = [
  {
    name:"Messi",
    text:"The Service Was Good"
  },
  {
    name:"Ronaldo",
    text:"The Service Was Great"
  }
]
const App = () => {
  // let data = [
  //   {
  //     name:"Messi",
  //     text:"The Service Was Good"
  //   },
  //   {
  //     name:"Ronaldo",
  //     text:"The Service Was Great"
  //   }
  // ]
  return (
      <>{data.map(function(item){
        return <TestimonialCard name={item.name} text={item.text}/>
      })}
      </>
      // <TestimonialCard/>
  )
}

export default App