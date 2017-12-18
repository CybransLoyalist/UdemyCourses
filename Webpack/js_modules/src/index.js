const button = document.createElement('button');
button.innerText = 'Click me!';
button.onclick = () => {
  System.import('./image_viewer').then(module =>{ //only using System.import enables code splitting in webpack
    module.default();
  })
};

document.body.appendChild(button);
