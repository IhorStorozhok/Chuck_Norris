const url = "https://api.chucknorris.io/jokes/";

async function getRandomJoke() {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  const data = await response.json();

  return data;
}

async function getJokeFromCategory(category) {
  const response = await fetch(`${url}random?category=${category}`);
  const data = await response.json();

  return data;
}

async function getCategories() {
  const response = await fetch(`${url}categories`);
  const data = await response.json();

  return data;
}

async function getJokeByQuery() {
  const response = await fetch(`${url}categories`);
  const data = await response.json();

  return data;
}

export { getCategories, getRandomJoke, getJokeByQuery, getJokeFromCategory };
