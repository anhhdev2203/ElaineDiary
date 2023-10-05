import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide1 from '../../assets/image/slide1Signup.png'
import Slide2 from '../../assets/image/slide2Signup.png'
import Slide3 from '../../assets/image/slide3Signup.png'

function createSlider() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return() => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
    return (
        <div style={{ width: '100%', height: `${windowHeight}px`}}>
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            stopOnHover={false}
            showStatus={false}
            showIndicators={false}
          >
            <div>
              <img src={Slide1} alt="image1" style={{ height: `${windowHeight}px`, objectFit: 'cover' }}  />
            </div>
            <div>
              <img src={Slide2} alt="image2" style={{ height: `${windowHeight}px`, objectFit: 'cover' }} />
            </div>
            <div>
              <img src={Slide3} alt="image3" style={{ height: `${windowHeight}px`, objectFit: 'cover' }} />
            </div>
          </Carousel>
        </div>
      );
}

export default createSlider