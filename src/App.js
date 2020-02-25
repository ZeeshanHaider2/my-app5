import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "./pic/logo1.png";
import logo2 from "./pic/logo2.png";
import logo3 from "./pic/logo3.png";
import logo4 from "./pic/logo4.png";

class Ocean extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      nextIcon: <span className="glyphicon glyphicon-glass"></span>,
      prevIcon: <span className="glyphicon glyphicon-glass"></span>
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, nextIcon, prevIcon } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
      >
        <Carousel.Item>
          <div style={{ backgroundColor: "black", height: 600 }}>
            <Carousel.Caption>
              <img src={logo1} alt="Logo" style={{ padding: 50 }} />
              <h1
                style={{ fontFamily: " neue-haas-grotesk-display, sans-serif" }}
              >
                <strong>
                  This piece of software is{" "}
                  <em>
                    <span style={{ color: "#88FFED" }}>the shit</span>
                  </em>
                  ,<br /> I’ve never tried anything like it.
                </strong>
              </h1>
              <div style={{ padding: 50 }}>
                <img src={logo2} alt="Logo" style={{ padding: 10 }} />
                <h4>Mr. Face</h4>
                <p>Karma Guru @ Face Co™</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ backgroundColor: "black", height: 600 }}>
            <Carousel.Caption>
              <img src={logo3} alt="Logo" style={{ padding: 50 }} />
              <h1
                style={{ fontFamily: " neue-haas-grotesk-display, sans-serif" }}
              >
                <strong>
                  An experience that makes us feel like we’re
                  <br /> covered in maple syrup –
                  <span style={{ color: "#FF88AD" }}> It’s a good thing </span>
                </strong>
              </h1>
              <div style={{ padding: 50 }}>
                <img src={logo4} alt="Logo" style={{ padding: 10 }} />
                <h5>
                  The whole team @ <br />
                  The Pancake Collective™
                </h5>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundColor: "black", height: 600 }}>
            <Carousel.Caption>
              <img src={logo1} alt="Logo" style={{ padding: 50 }} />
              <h1
                style={{ fontFamily: " neue-haas-grotesk-display, sans-serif" }}
              >
                <strong>
                  This piece of software is{" "}
                  <em>
                    <span style={{ color: "#88FFED" }}>the shit</span>
                  </em>
                  ,<br /> I’ve never tried anything like it.
                </strong>
              </h1>
              <div style={{ padding: 50 }}>
                <img src={logo2} alt="Logo" style={{ padding: 10 }} />
                <h4>Mr. Face</h4>
                <p>Karma Guru @ Face Co™</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ backgroundColor: "black", height: 600 }}>
            <Carousel.Caption>
              <img src={logo3} alt="Logo" style={{ padding: 50 }} />
              <h1
                style={{ fontFamily: " neue-haas-grotesk-display, sans-serif" }}
              >
                <strong>
                  An experience that makes us feel like we’re
                  <br /> covered in maple syrup –
                  <span style={{ color: "#FF88AD" }}> It’s a good thing </span>
                </strong>
              </h1>
              <div style={{ padding: 50 }}>
                <img src={logo4} alt="Logo" style={{ padding: 10 }} />
                <h5>
                  The whole team @ <br />
                  The Pancake Collective™
                </h5>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Ocean;
