import meter1 from "./Ninety-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png";
import meter2 from "./Eighty-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png";
import meter3 from "./Eighty-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" >
      <div className="container" >
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            
              <h2 id="skills">Top Skills</h2>
              <TrackVisibility partialVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn": "invisible"}>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={500} 
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>C# .net</h5>
                </div>
              </Carousel>
            
            </div>}
            </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}