import { useState } from 'react';
import './../MainOld/css/Certificate.module.css'; // Import the CSS for styling
import nextIcon from "./../assets/arrow-right-solid.svg";
import previousIcon from "./../assets/arrow-left-solid.svg";

import cert1 from "./../assets/1st.jpg";
import cert2 from "./../assets/2nd.jpg";
import cert3 from "./../assets/3rd.jpg";
import cert4 from "./../assets/4th.jpg";
import cert5 from "./../assets/5th.jpg";
import cert6 from "./../assets/6th.jpg";
import cert7 from "./../assets/7th.jpg";

const certificateImages = [cert1, cert2, cert3, cert4, cert5, cert6, cert7];

function CertificateSlider() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((index) => (index + 1) % certificateImages.length);
    };

    const handlePrevious = () => {
        setIndex((index) => (index - 1 + certificateImages.length) % certificateImages.length);
    };

    return (
        <div className="certificate">
          <div className="main-certificate">
            <img className='next' src={previousIcon} alt="Previous" onClick={handlePrevious} />
            <img className='cert-image' src={certificateImages[index]} alt={`Certificate ${index + 1}`} />
            <img className='prev' src={nextIcon} alt="Next" onClick={handleNext} />
          </div>
          <div className="mobile-cert">
            <img className='cert-image' src={certificateImages[index]} alt={`Certificate ${index + 1}`} />
            <div className="mobile-control">
              <img className='next' src={previousIcon} alt="Previous" onClick={handlePrevious} />
              <img className='prev' src={nextIcon} alt="Next" onClick={handleNext} />
            </div>
          </div>
        </div>
    );
}

export default CertificateSlider;
