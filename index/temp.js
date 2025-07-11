const getdata = async () => {
	let res = await fetch(`${api}?t=${search_box.value}&apikey=${api_key}`);
	let data = await res.json();
	console.log(data);

	createit(data);
};
const createit = ({
	Title,
	Actors,
	Country,
	Director,
	Poster,
	DVD,
	imdbRating,
	Runtime,
	Plot,
	Genre,
}) => {
	main.innerHTML = "";
	let card = document.createElement("div");
	let info = document.createElement("div");
	// Movie title
	let title_div = document.createElement("div");
	let title = document.createElement("h1");
	title.innerText = Title;
	title_div.append(title);
	title.setAttribute("class", "title");
	// plot
	let plot_div = document.createElement("div");
	let plot = document.createElement("p");
	plot.innerText = Plot;
	plot_div.append(plot);
	plot.setAttribute("class", "plot");

	// cast & info
	let cast = document.createElement("div");
	cast.setAttribute("class", "cast");
	let actors = document.createElement("h5");
	actors.innerText = `Actors : ${Actors}`;
	let directors = document.createElement("h5");
	directors.innerText = `Director : ${Director}`;
	let genre = document.createElement("h5");
	genre.innerText = `Genre : ${Genre}`;
	let runtime = document.createElement("h5");
	runtime.innerText = `Runtime : ${Runtime}`;
	let dvd = document.createElement("h5");
	dvd.innerText = `DVD : ${DVD}`;
	let country = document.createElement("h5");
	country.innerText = `Country : ${Country}`;
	let imdb = document.createElement("h5");
	imdb.innerText = `Imdb ratings: ${imdbRating}`;

	cast.append(actors, directors, genre, runtime, dvd, country, imdb);

	info.append(title_div, plot_div, cast);
	info.setAttribute("class", "info");
	card.setAttribute("class", "movie_cards");
	let img_box = document.createElement("div");
	let img = document.createElement("img");
	img.setAttribute("class", "img");
	img_box.setAttribute("class", "img_box");
	img_box.append(img);
	img.src = Poster;
	card.append(img_box, info);
	main.append(card);
};
