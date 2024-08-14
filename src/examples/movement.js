//Use node movement.js in the terminal for execute the script.
const server = process.env.API_BASEURL;
//Your token is automatically set
const token = process.env.API_TOKEN;
//Put your character name here
const character = process.env.CHARACTER;

async function movement() {
	const url = server + "/my/" + character + "/action/move";
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: "Bearer " + token,
		},
		body: '{"x":-1,"y":0}', //change the position here
	};

	try {
		const response = await fetch(url, options);
		const { data } = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

movement();
