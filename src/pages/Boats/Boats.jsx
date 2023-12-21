import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";

const Boats = () => {
	return (
		<div className='wrapper'>
			<Nav />
			<main>
				<h1>Boats</h1>
				<Link to={"/boats/new"}>+</Link>
				{/* 	{boats ? (
					<section>
						{boats.map(boat => (
							<div key={boat._id}>
								<h2>{boat.name}</h2>
								<img src={boat.image.url} alt={boat.name} />
							</div>
						))}
					</section>
				) : (
					<p>Loading Boats...</p>
				)} */}
			</main>
		</div>
	);
};

export default Boats;
