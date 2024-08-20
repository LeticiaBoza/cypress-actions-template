const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNhZWFiODJkLTNjYzctNDViMC05ZDYxLWMzZDMzMjMxNjM5Mi0xNzI0MTEzNDE4NzY3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzZjMThlOWItYTU0NC00MDQ0LTk3M2UtMzY5ZjQzZWNjZGUwIiwidHlwZSI6InQifQ.hTH-IZjGfhaJaFhRxAKVkH3RFyUKRSzPwJotMunc52E'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
