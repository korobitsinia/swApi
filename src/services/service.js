export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";
  _imgUrl = "https://starwars-visualguide.com/assets/img";

  async getResource(string) {
    const combineUrl = `${this._baseUrl}${string}`;
    let response = await fetch(combineUrl);
    if (!response.ok) {
      throw new Error(`Could not fetch ${combineUrl}`);
    }
    return await response.json();
  }

  async getAllPeople() {
    let people = await this.getResource("/people/");
    let peopleAfterTransform = people.results.map((person) => {
      return this._transformPerson(person);
    });
    return peopleAfterTransform;
  }

  async getPerson(id) {
    const combineUrl = `/people/${id}`;
    const person = await this.getResource(combineUrl);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    let planets = await this.getResource("/planets/");
    let planetsAfterTransform = planets.results.map((planet) => {
      return this._transformPlanet(planet);
    });
    return planetsAfterTransform;
  }

  async getPlanet(id) {
    const combineUrl = `/planets/${id}`;
    const planet = await this.getResource(combineUrl);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    let starships = await this.getResource("/starships/");
    let starshipsAfterTransform = starships.results.map((starship) => {
      return this._transformStarship(starship);
    });
    return starshipsAfterTransform;
  }
  async getStarship(id) {
    const combineUrl = `/starships/${id}`;
    const starship = await this.getResource(combineUrl);
    return this._transformStarship(starship);
  }

  getImagePerson = (id) => `${this._imgUrl}/characters/${id}.jpg`;
  getImagePlanet = (id) => `${this._imgUrl}/planets/${id}.jpg`;
  getImageStarship = (id) => `${this._imgUrl}/starships/${id}.jpg`;

  _extractId(element) {
    const idRegExp = /\/(\d*)\/$/;
    return element.url.match(idRegExp)[1];
  }

  _transformPerson(person) {
    const id = this._extractId(person);
    return {
      id: id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  }

  _transformPlanet(planet) {
    const id = this._extractId(planet);
    return {
      id: id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship(starship) {
    const id = this._extractId(starship);
    return {
      id: id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  }
}
