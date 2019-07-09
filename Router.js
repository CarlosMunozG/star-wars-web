'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
  // if(url === '/'){
  //   this.generateLandingPage();
  // } else if( url === '/movies'){
  //   this.generateMoviesPage();
  // }
  switch(url){
    case '/':
      this.generateLandingPage(parentElement);
      break;
    case '/movies':
      this.generateMoviesPage(parentElement);
      break;
    default:
      this.generateLandingPage(parentElement);
  }
} 

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
}

Router.prototype.generateMoviesPage = function(parentElement) {
  this.page = new MoviesPage(parentElement);
  this.page.generate();
}


// creamos una variable aquí dentro para que solo creemos una instancia de Router. Si lo hacemos en app.js
// crearemos cada vez que llamemos a Router una instancia nueva en lugar de utilizar la misma
var routerInstance = new Router();