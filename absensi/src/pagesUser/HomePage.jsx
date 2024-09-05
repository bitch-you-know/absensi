
import NavbarUser from "../components/NavbarUser";
import '../style/HomePage.css';




const HomePage = () => {
    return (
        <div className="home-page" style={{ width: "100%", height: "100vh" }}>
            <div className="container">
                <NavbarUser />
              
            </div>
        </div>
    );
}

export default HomePage;
