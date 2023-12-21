import axios from "axios";

const CreateBoat = () => {
	const handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData(e.target); // bezieht sofort alle Daten aus d <form>
		const response = await axios.post(
			`${import.meta.env.VITE_BACKEND}/api/boats`,
			formData,
		);
		console.log(response);
		e.target.reset();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Name' name='name' />
			<input type='number' placeholder='Baujahr' name='baujahr' />
			<input type='text' placeholder='Seriennummer' name='seriennummer' />
			<select name='bootsart'>
				<option value='Tretboot'>Tretboot</option>
				<option value='Segelboot'>Segelboot</option>
				<option value='Yacht'>Yacht</option>
				<option value='Kanu'>Kanu</option>
				<option value='Motorboot'>Motorboot</option>
				<option value='Ruderboot'>Ruderboot</option>
			</select>
			<input type='file' placeholder='Image' name='img' />
			<button type='submit'>Send</button>
		</form>
	);
};

export default CreateBoat;
