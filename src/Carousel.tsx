import { Component, MouseEvent } from "react";
import React from "react";

interface IProps {
  images:string[];
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.index) {
     this.setState({
      active: +e.target.dataset.index, //+ coerces the string into number    
    }); 
    }
    
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img data-testid="hero" src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              data-testid={`thumbnail${index}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
