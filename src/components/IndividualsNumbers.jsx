import React from "react";
import img from "../Assets/image.png";
import data from "../numbers.json";

const IndividualsNumbers = () => {
  const handleWhatsAppClick = (phoneNumber) => {
    const message = `Hello, I would like to inquire about ${phoneNumber}`; // Dynamic message

    const whatsappURL = `https://wa.me/201068999933?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="individual-numbers bg-main py-3  ">
      <div className="container p-3">
        <h2 className="text-white mb-3">Individual Numbers</h2>
        <div className="row">
          {data.individuals.map((item, index) => (
            <div key={index} className="col-md-4 g-3">
              <div className="mx-1 px-2 card-color mb-3 mb-md-0  py-3 ">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={img}
                      alt="Phone banner"
                      className="img-fluid h-100 object-fit-cover"
                      style={{ height: "100px",width:'90px' }}
                    />
                  </div>
                  <div className="col-8 py-2 text-white">
                    <h4 className="mb-5 ">Phone No : {item.phoneNumber}</h4>
                    <div className="d-flex align-items-center">
                      {/* {Array.from({ length: item.rating }).map((_, i) => (
                        <i key={i} className="fa fa-star text-main me-1"></i>
                      ))} */}
                      <button
                        onClick={() => handleWhatsAppClick(item.phoneNumber)}
                        className="btn btn-danger text-semibold d-block ms-auto"
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
