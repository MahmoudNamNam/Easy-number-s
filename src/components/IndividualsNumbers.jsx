import React from "react";
import img from "../Assets/image.png";
import data from "../numbers.json";

const IndividualsNumbers = () => {
  const countZerosAfterPrefix = (phoneNumber) => {
    const afterPrefix = phoneNumber.split("01")[1] || "";
    let count = 0;
    for (const char of afterPrefix) {
      if (char === "0") {
        count++; 
      } else {
        break; 
      }
    }
    return count;
  };

  // Sort individuals by the count of consecutive 0s after "01"
  const sortedIndividuals = [...data.individuals].sort((a, b) => {
    const zerosA = countZerosAfterPrefix(a.phoneNumber);
    const zerosB = countZerosAfterPrefix(b.phoneNumber);
    return zerosB - zerosA; 
  });

  const handleWhatsAppClick = (phoneNumber) => {
    const message = `Hello, I would like to inquire about ${phoneNumber}`;
    const whatsappURL = `https://wa.me/201068999933?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="individual-numbers bg-main py-3">
      <div className="container p-3">
        <h2 className="text-white mb-3">Individual Numbers</h2>
        <div className="row">
          {sortedIndividuals.map((item, index) => (
            <div key={index} className="col-md-4 g-3">
              <div className="mx-1 px-2 card-color mb-3 mb-md-0 py-3">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={img}
                      alt="Phone banner"
                      className="img-fluid h-100"
                      style={{
                        height: "100px",
                        width: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="col-8 py-2 text-white">
                    <h4 className="mb-5">Phone No : {item.phoneNumber}</h4>
                    {item.soldOut && (
                      <span className="text-danger">Sold Out</span>
                    )}
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => handleWhatsAppClick(item.phoneNumber)}
                        className="btn btn-danger text-semibold d-block ms-auto"
                        disabled={item.soldOut} // Disable button if sold out
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndividualsNumbers;
