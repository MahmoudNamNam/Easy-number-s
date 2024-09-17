import React, { useState } from 'react';

const FAQ = () => {
  const [firstFAQ, setFirstFAQ] = useState(false);
  const [secondFAQ, setSecondFAQ] = useState(false);
  const [thirdFAQ, setThirdFAQ] = useState(false);
  const [fourthFAQ, setFourthFAQ] = useState(false);

  const handleFirstFAQ = () => {
    setFirstFAQ(!firstFAQ);
    setSecondFAQ(false);
    setThirdFAQ(false);
    setFourthFAQ(false);
  };


  const handleSecondFAQ = () => {
    setSecondFAQ(!secondFAQ);
    setFirstFAQ(false);
    setThirdFAQ(false);
    setFourthFAQ(false);
  };

  const handleThirdFAQ = () => {
    setThirdFAQ(!thirdFAQ);
    setFirstFAQ(false);
    setSecondFAQ(false);
    setFourthFAQ(false);
  };


  const handleFourthFAQ = () => {
    setFourthFAQ(!fourthFAQ);
    setFirstFAQ(false);
    setSecondFAQ(false);
    setThirdFAQ(false);
  };

  return (
    <footer className="card-color">
      <div className="container py-5">
        <h2 className="text-main text-center mb-4 display-3 fw-semibold">
          FAQ
        </h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div
              className="main-color px-2 py-2 d-flex justify-content-between align-items-center rounded-2 w-100"
              onClick={handleFirstFAQ}
            >
              <p className="text-white mb-0">أين يتم نقل ملكية الخطوط؟</p>
              <i
                className={`fas ${
                  firstFAQ ? "fa-angle-up" : "fa-angle-down"
                } text-white`}
                onClick={handleFirstFAQ}
              ></i>
            </div>
            <p className={`text-second px-2 my-1 ${firstFAQ ? "" : "d-none"}`}>
              نقل الملكية يتم داخل فرع فودافون، حيث يمكنك الذهاب لأقرب فرع
              بجانبك لإتمام العملية.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <div
              className="main-color px-2 py-2 d-flex justify-content-between align-items-center rounded-2 w-100"
              onClick={handleSecondFAQ}
            >
              <p className="text-white mb-0">ما هو النظام المتاح للخطوط؟</p>
              <i
                className={`fas ${
                  secondFAQ ? "fa-angle-up" : "fa-angle-down"
                } text-white`}
                onClick={handleSecondFAQ}
              ></i>
            </div>
            <p className={`text-second px-2 my-1 ${secondFAQ ? "" : "d-none"}`}>
              الخطوط على نظام الكارت، مما يعني أنه يمكنك تخصيص أي نظام ترغب فيه،
              سواء كانت باقات للمكالمات، الإنترنت، أو أي خدمات أخرى.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <div
              className="main-color px-2 py-2 d-flex justify-content-between align-items-center rounded-2 w-100"
              onClick={handleThirdFAQ}
            >
              <p className="text-white mb-0">
                ما هي المستندات المطلوبة لنقل الملكية؟
              </p>
              <i
                className={`fas ${
                  thirdFAQ ? "fa-angle-up" : "fa-angle-down"
                } text-white`}
                onClick={handleThirdFAQ}
              ></i>
            </div>
            <p className={`text-second px-2 my-1 ${thirdFAQ ? "" : "d-none"}`}>
              البطاقة الشخصية فقط
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <div
              className="main-color px-2 py-2 d-flex justify-content-between align-items-center rounded-2 w-100"
              onClick={handleFourthFAQ}
            >
              <p className="text-white mb-0">هل نقل الملكية يتم فورياً؟</p>
              <i
                className={`fas ${
                  fourthFAQ ? "fa-angle-up" : "fa-angle-down"
                } text-white`}
                onClick={handleFourthFAQ}
              ></i>
            </div>
            <p className={`text-second px-2 my-1 ${fourthFAQ ? "" : "d-none"}`}>
              نعم، بمجرد تقديم المستندات المطلوبة في فرع فودافون، سيتم نقل
              الملكية في نفس اليوم عادةً.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FAQ;
