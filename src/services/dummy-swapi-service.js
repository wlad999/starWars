export default class DummySwapiService {
    _people = [
        {
            id: 1,
            name: 'Bilbo Baggins [TEST DATA]',
            gender: 'male',
            birthYear: "Many yaers ago",
            eyeColor: "brown"
        },
        {
            id: 2,
            name: 'Frodo [TEST DATA]',
            gender: 'male',
            birthYear: "not so much time ago",
            eyeColor: "green"
        },
    ];
    _planets = [
        {
            id: 1,
            name: "Venus [TEST DATA]",
            population: 'not known',
            rotationPeriod: "243 days",
            diameter: "12.104 km"
        },
        {
            id: 2,
            name: "Mars [TEST DATA]",
            population: 'not known',
            rotationPeriod: "150days",
            diameter: "9.058 km"
        },
    ];
    _starships = [
        {
            id: 1,
            name: 'USA  Enterprise [TEST DATA]',
            model: "UIYVIY-84-61-5",
            manufacturer: "XXX",
            costInCredit: "not known",
            length: "300 meters",
            crew: 1000,
            passengers: 50,
            cargoCapacity: 100
        },

    ];

    getAllPeople = async () => {
        return this._people
    };
    getPerson = async () => {
        return this._people[0]
    };
    getAllPlanets = async () => {
        return this._planets
    };
    getAllStarship = async () => {
        return this._starships
    }
}