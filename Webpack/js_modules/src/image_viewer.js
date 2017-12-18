// import big from '../assets/big.jpg' //
import small from '../assets/small.jpg' //base 64 string
import '../styles/image_viewer.css';

export default () => {
   const smallImage = document.createElement('img');
   smallImage.src = small;
   document.body.appendChild(smallImage);
}

//to show both images
// const smallImage = document.createElement('img');
// smallImage.src = small;
//
// const bigImage = document.createElement('img');
// bigImage.src = big;
//
// document.body.appendChild(smallImage);
// document.body.appendChild(bigImage);
