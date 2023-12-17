import { useContext } from "react";
import UserContext from "../uitis/UserContext";

const About = () => {
    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="about-container">
            <h1>About Page</h1>
            <h1 className="font-bold text-black">{loggedInUser}</h1>
            <h2>This is about us page</h2>
        </div>
    )
}

export default About;