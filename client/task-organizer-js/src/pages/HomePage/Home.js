import { InfoSection, Navbar, Footer } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from "./Data";

const Home = () => {
    return ( 
        <>
            <Navbar/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
            <Footer/>
        </>
     );
}
 
export default Home;