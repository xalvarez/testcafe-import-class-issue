export default class ExampleClass {
  constructor () {
    this.container = document.querySelector('#container')
  }

  printHelloWorld () {
    const helloWorld = document.createElement('h1')
    helloWorld.textContent = 'Hello World!'
    this.container.appendChild(helloWorld)
  }
}
