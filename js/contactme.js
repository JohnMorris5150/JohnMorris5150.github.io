
import React from "react";

const Spirit = {
    headline: 'testing testing',
    imageURL: 'https://miro.medium.com/v2/1*3e2QaxNNoSf5khSTAUuZQQ.jpeg',  
};

const h2 = React.createElement('h2', null, Spirit.headline);

const img = React.createElement('img',{ src: Spirit.imageURL}, null);

ReactDOM.render(h2, document.getElementById('title'));
ReactDOM.render(img, document.getElementById('img'));
