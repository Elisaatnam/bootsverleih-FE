import axios from "axios";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateReservation = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [availBoats, setAvailBoats] = useState([]);
	console.log(startDate);

	const fetchAvailableBoats = async (startDate, endDate) => {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_BACKEND}/api/boats/availBoats`,
				{ startDate, endDate },
			);
			console.log(response);
			setAvailBoats(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData(e.target); // bezieht sofort alle Daten aus d <form>
		const response = await axios.post(
			`${import.meta.env.VITE_BACKEND}/api/reservation`,
			formData,
		);
		console.log(response);
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<ReactDatePicker
				selected={startDate}
				onChange={date => setStartDate(date)}
				onSelect={fetchAvailableBoats}
			/>
			<ReactDatePicker
				selected={endDate}
				onChange={date => setEndDate(date)}
				onSelect={fetchAvailableBoats}
			/>

			<select name='whichBoat'>
				<option disabled selected>
					verfuegbares Boot waehlen
				</option>
				{availBoats.map(boat => (
					<option key={boat._id} value={boat._id}>
						{boat.name}
					</option>
				))}
			</select>

			<button type='submit'>Send</button>
		</form>
	);
};

export default CreateReservation;
