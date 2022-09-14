import LinkedButton from "../layout/LinkedButton"
import "./Home.css"

function Home(){
    return(
        <section className="Home_Container">
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start to generation your projects right now!!</p>
            <LinkedButton text="New Project" to='/NewProjects' />
            <img src="/src/public/savings.svg"></img>
        </section>
    )
}


export default Home