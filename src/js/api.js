const createUser = (name) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/rozpi2", {
		method: "GET",
		body: JSON.stringify([{label:"" , done: ""}]),
  
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			console.log({ status: res.status });
			return res.json(body);
		})
		.then((res) => {
			console.log({ res });
		})
		.catch((err) => {
			console.log({ err });
		});
};

const updateUser = (name, data) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/rozpi2", {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			console.log({ status: res.status });
			return res.json();
		})
		.then((res) => {
			console.log({ res });
		})
		.catch((err) => {
			console.log({ err });
		});
};

const deleteUser = (name) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			console.log({ status: res.status });
			return res.json();
		})
		.then((res) => {
			console.log({ res });
		})
		.catch((err) => {
			console.log({ err });
		});
};

export default {
	createUser,
	deleteUser,
	updateUser,
};
// const http = require("https");

// const options = {
//   "method": "GET",
//   "hostname": "assets.breatheco.de",
//   "port": null,
//   "path": "/apis/fake/todos/user/rozpi2",
//   "headers": {
//     "Content-Type": "application/json",
//     "Content-Length": "481"
//   }
// };

// const req = http.request(options, function (res) {
//   const chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     const body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write(JSON.stringify([
//   {label: 'Hacer la cama', done: false},
//   {label: 'Peinar al gato', done: false},
//   {label: 'Entender JS', done: false},
//   {label: 'Liberar al mundo', done: true},
//   {label: 'Dar de comer a la gata', done: false},
//   {label: 'Ser cabezon', done: false},
//   {label: 'Repetir hasta cansarse', done: false},
//   {label: 'Peinar al perro', done: false},
//   {label: 'Do the replits', done: false}
// ]));
// req.end();
// const http = require("https");

// const options1 = {
//   "method": "POST",
//   "hostname": "assets.breatheco.de",
//   "port": null,
//   "path": "/apis/fake/todos/user/rozpi2",
//   "headers": {
//     "Content-Type": "application/json",
//     "Content-Length": "481"
//   }
// };

// const req1 = http.request(options1, function (res) {
//   const chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     const body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write(JSON.stringify([
//   {label: 'Hacer la cama', done: false},
//   {label: 'Peinar al gato', done: false},
//   {label: 'Entender JS', done: false},
//   {label: 'Liberar al mundo', done: true},
//   {label: 'Dar de comer a la gata', done: false},
//   {label: 'Ser cabezon', done: false},
//   {label: 'Repetir hasta cansarse', done: false},
//   {label: 'Peinar al perro', done: false},
//   {label: 'Do the replits', done: false}
// ]));
// req1.end();