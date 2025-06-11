import React, { useState, useRef, useEffect } from 'react';
import "../../Styles/QuestionAccordion.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRef = useRef(null);
  const { t } = useTranslation();

  // i18next-dən sorğuları və cavabları çəkirik
  const questions = t("accordion.questions", { returnObjects: true });
  const answers = t("accordion.answers", { returnObjects: true });

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
      <h2 className='questionMe'>{t("accordion.title")}</h2>
      <div className="accordion" ref={accordionRef}>
        {questions.map((question, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => handleClick(index)}>
              {question}
              <span className={`accordion-icon ${activeIndex === index ? 'open' : ''}`}>
                <IoIosArrowDown />
              </span>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              {answers[index].split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
