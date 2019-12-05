//import Layout from "../component/layout"
import Layout from "../component/mylayout"
/** Metode 1: High Level Component */
/*const page = () => (

     
    <p>Celle-ci c'est la page :  A propos de nous </p>
)*/
//Method 2 - Page content as a prop
const aboutcontenage = <p>celle-ci c'est la page : a propos de nous </p>

//export default withLayout(page);

export default function About(){
    return <Layout content={aboutcontenage}/>
}
