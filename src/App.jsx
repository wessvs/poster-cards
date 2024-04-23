import Card from "./components/Card"
import friendsPosterImg from "./assets/friends.jpg"
import himymPosterImg from "./assets/himym.jfif"
import theOfficePosterImg from "./assets/the-office.jpg"
import Button from "./components/Button"


function App() {

  return (
    <>
      <div className='app'>
        <Card title="The Office(2005)" posterImg={theOfficePosterImg} />
        <Card title="How I Met Your Mother(2005) " posterImg={himymPosterImg} />
        <Card title="Friends(1994) " posterImg={friendsPosterImg} />
      </div>
    </>
  )
}

export default App
