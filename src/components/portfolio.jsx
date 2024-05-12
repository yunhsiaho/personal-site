import React from 'react';
// Required Core Stylesheet
import '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';
// Optional Theme Stylesheet
// import 'node_modules\@glidejs\glide\src\assets\sass\glide.theme.scss';
// import Glide from '@glidejs/glide';
// new Glide('.glide').mount();


const Portfolio = () => {
  // const path = require('path');
// point the path to node modules
// module.exports = {
//     // other webpack config settings...
//     resolve: {
//         alias: {
//             '@glidejs/glide/src/assets/sass': path.resolve(__dirname, 'node_modules/@glidejs/glide/src/assets/sass')
//         }
//     }
// };
// sass loader
// module.exports = {
//   // other webpack config settings...
//   module: {
//       rules: [
//           {
//               test: /\.s[ac]ss$/i,
//               use: [
//                   'style-loader',
//                   'css-loader',
//                   'sass-loader',
//               ],
//           },
//       ],
//   },
// };


  // new Glide(".glide", {
  //   peek: 50,
  //   perView: 2,
  //   type: "carousel"
  // }).mount();

  return (
    <div className="portfolio-container container">
            <h1 className='bungee-regular'>portfolio</h1>
            <div class="glide">
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            Prev
          </button>
        </div>
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">0</li>
            <li class="glide__slide">1</li>
            <li class="glide__slide">2</li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio