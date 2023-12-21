import Nav from "../../components/Nav/Nav.jsx";
import "./Home.css";

const Home = () => {
	//TODO fetch boat data
	return (
		<div className='wrapper'>
			<Nav />
			<main>
				<h1>Boat Rental</h1>
			</main>
		</div>
	);
};

export default Home;
