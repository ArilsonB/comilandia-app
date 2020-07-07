const getRecipes = (search) => {
  const apiUrl =
    'http://comilandia.api.192.168.0.156.xip.io/api/v1/receitas?recipe=' +
    search;
  return fetch(apiUrl)
    .then((r) => r.json())
    .catch((e) => e.json());
};

export default getRecipes;
