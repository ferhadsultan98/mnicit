import React, { useState, useRef, useEffect } from 'react';
import "../../Styles/QuestionAccordion.scss";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRef = useRef(null);

  const questions = [
    "SAP ERP nədir və işinizə nə dərəcədə fayda verir?",
    "SAP ERP-də hansı əsas modullar mövcuddur?",
    "SAP ERP-ni digər sistemlər və ya proqram terminalları ilə inteqrasiya edə bilərəm?",
    "SAP ERP üçün hansı yerləşdirmə seçimləri var?",
    "SAP ERP-nin tətbiqatını necə təmin edə bilərəm?"
  ];

  const answers = [
    "SAP ERP biznes proseslərini idarə etmək üçün inteqrasiya olunmuş bir sistemdir və operativ nəticələri yaxşılaşdırır.",
    "SAP ERP-də maliyyə, insan resursları, loqistika kimi əsas modullar mövcuddur.",
    "Bəli, SAP ERP digər sistemlərlə inteqrasiya üçün API və xüsusi interfeys təklif edir.",
    "SAP ERP bulud, yerli server və ya hibrid seçimlərlə mövcuddur.",
    "Tətbiqat üçün SAP sertifikatlı məşqçulardan dəstək ala bilərsiniz."
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accordionRef.current && !accordionRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <h2 className=''>Sualınız var mı?</h2>
      <div className="accordion" ref={accordionRef}>
        {questions.map((question, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => handleClick(index)}>
              {question}
              <span className={`accordion-icon ${activeIndex === index ? 'open' : ''}`}><IoIosArrowDown /></span>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              <p>{answers[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;