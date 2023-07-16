import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/Carousel.css";
import Autoplay from "embla-carousel-autoplay";
import "../jsons/accomadation_pics.js";
import { rooms } from "../jsons/accomadation_pics.js";
import { Banquet, lawn, ph } from "../jsons/venues_pics";
export default function Venues() {
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef3] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef4] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div>
      <br />
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villa">
          <div className="villades">
            <div className="text12">
              <h3>Banquet Halls</h3>
              <div className="tess">
                <b> Area: </b>Indoor <br />
                <b> Seating:</b> 400 <br />
                <b> Total Area:</b> 6,391 SFT <br />
                <div className="ameni">
                  <b> Amenities:</b> <br />
                </div>
                <div className="lis">
                  <div className="lis1">
                    <li>Fully Air Conditioned</li>
                  </div>
                  <div className="lis2">
                    <li>Two waiting halls </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="villapics">
            <div className="embla" ref={emblaRef1}>
              <div className="embla__container">
                {Banquet.map((item, key) => (
                  <div className="embla__slide" key={key}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villarev">
          <div className="villapics">
            <div className="embla" ref={emblaRef2}>
              <div className="embla__container">
                {lawn.map((item, key) => (
                  <div className="embla__slide" key={key}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="villades">
            <div className="text12">
              <h5>Lawn 1</h5>
              <div className="tess">
                <div className="lawn1">
                <b> Area: </b>Out Door <br />
                <b> Seating:</b> 3000 <br />
                <b> Total Area:</b> 70,000 SFT <br />
                  
                </div>
                    {/* <br /> */}
                <div className="lis">
                  <div className="lis1">
                    <h5>Lawn 2</h5>
                    <b> Area: </b>Out Door <br />
                    <b> Seating:</b> 1000 <br />
                    <b> Total Area:</b> 41,664 SFT <br />
                  </div>
                  <div className="lis2">
                    <h5>Lawn 3</h5>
                    <b> Area: </b>Out Door <br />
                    <b> Seating:</b> 1200 <br />
                    <b> Total Area:</b> 58,000 SFT <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villa">
          <div className="villades">
            <div className="text12">
              <h3>Party Halls</h3>
              <div className="tess">
                <b> Area: </b>Indoor <br />
                <b> Seating:</b> 100 <br />
                <b> Total Area:</b> 3,550 SFT <br />
                <div className="ameni">
                  <b> Amenities:</b> <br />
                </div>
                <div className="lis">
                  <div className="lis1">
                    <li>Fully Air Conditioned</li>
                  </div>
                  <div className="lis2">
                    <li>Music System </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="villapics">
            <div className="embla" ref={emblaRef3}>
              <div className="embla__container">
                {ph.map((item, key) => (
                  <div className="embla__slide" key={key}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villarev">
          <div className="villapics">
            <div className="embla" ref={emblaRef4}>
              <div className="embla__container">
                {rooms.map((item, key) => (
                  <div className="embla__slide" key={key}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="villades">
            <div className="text12">
              <h3>Pool</h3>
              <div className="tess">
                <b> Seating:</b> 100 <br />
                <b> Total Area:</b> 6,300 SFT <br />
                <div className="ameni">
                  <b> Amenities:</b> <br />
                </div>
                <div className="lis">
                  <div className="lis1">
                    <li>Swimming Pool</li>
                    <li>Indoor A/C </li>
                  </div>
                  <div className="lis2">
                    <li>Dining Space </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
