const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.py4e.com/api/people')
        .then(resposen => resposen.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        });
        
}

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.py4e.com/api/people')
    const data = await getRequest.json();
    return {
        count: data.count,
        results: data.results
    }
}

const promise = new Promise((resolve, reject) => {
    fetch('https://swapi.py4e.com/api/people')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error))
})
promise
    .then(data => console.log(data))
    .catch(error => console.error(error));


module.exports = {
    getPeoplePromise,
    getPeople
}