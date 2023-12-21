import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Boats from "./pages/Boats/Boats";
import Reservation from "./pages/Reservation/Reservation";
import CreateBoat from "./pages/CreateBoat/CreateBoat";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/boats' element={<Boats />} />
					<Route path='/reservation' element={<Reservation />} />
					<Route path='/boats/new' element={<CreateBoat />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
