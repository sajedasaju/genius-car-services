import React from "react";
import './Expert.css'

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 g-5">
      <div className="card"
        style={{ width: "18rem" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>

    /* 
        <div class="infocardContainer">
          <div id="main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png"></img>
          </div>
          <div id="textbois">
            <h2>Emil Alicic</h2>
            <h4>Professional Memeologist</h4>
            <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
            <div id="hotlinks">
              <a href="https://codepen.io/LIMESTA"><img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
              </a>
              <a href="https://codepen.io/LIMESTA">
                <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
              </a>
              <a href="https://codepen.io/LIMESTA">
                <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
              </a>
            </div>
          </div>
        </div> */
  );
};

export default Expert;
