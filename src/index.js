import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import ko from 'knockout';

let viewModel =function(){

  let someText=ko.observable(10),
   click=()=>{someText(someText()+1)}

  return {
    someText,
    click
  }
}

ko.applyBindings(viewModel);


