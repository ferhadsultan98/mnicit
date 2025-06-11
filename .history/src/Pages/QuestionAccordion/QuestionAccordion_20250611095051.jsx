import React, { useState, useRef, useEffect } from 'react';
import "../../Styles/QuestionAccordion.scss";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRef = useRef(null);

  const questions = [
    "SAP ERP nədir və biznesinizə necə fayda gətirir?",
    "SAP ERP-də hansı əsas modullar mövcuddur?",
    "SAP ERP-ni digər sistemlər və ya proqram təminatları ilə necə inteqrasiya edə bilərəm?",
    "SAP ERP üçün hansı yerləşdirmə seçimləri var?",
    "SAP ERP-nin uğurlu tətbiqatını necə təmin edə bilərəm?"
  ];

  const answers = [
    "SAP ERP (Enterprise Resource Planning) müxtəlif biznes proseslərini idarə etmək və optimallaşdırmaq üçün nəzərdə tutulmuş inteqrasiyaya olunmuş tətbiqlər paketidir. Bu proseslərə maliyyə, insan resursları, tədarük zənciri və müştəri münasibətləri idarəçiliyi daxildir. Əsas üstünlüklərə artan effektivlik, real vaxt məlumat görünürlüğü, yaxşılaşdırılmış qərar qəbul etmə qabiliyyətləri və biznes əməliyyatlarının sadələşdirilməsi daxildir.",
    "SAP Financial Accounting (FI): Maliyyə əməliyyatlarını və hesabatları idarə edir.\nSAP Controlling (CO): Daxili xərclərin idarəçiliyi və hesabatını həyata keçirir.\nSAP Sales and Distribution (SD): Satış sifarişləri, çatdırılmalar və fakturalama ilə məşğuldur.\nSAP Material Management (MM): Təchizat və anbar idarəçiliyinə nəzarət edir.\nSAP Production Planning (PP): İstehsal planlaması və nəzarətini koordina edir.\nSAP Human Capital Management (HCM): İşçi məlumatlarını, maaş və işə qəbulu idarə edir.",
    "APIs (Proqramlaşdırma İnterfeysləri): Realtaym məlumat mübadiləsi üçün.\nAralıq Proqram təminatı: SAP PI/PO (Process Integration / Process Orchestration) kimi vasitələr inteqrasiyanı asanlaşdırır.\nMəlumat İnterfeysləri: Batch məlumat köçürməsi üçün IDocs (Intermediate Documents) kimi üsullar.\nXüsusi İnkişaf: Xüsusi inteqrasiya ehtiyaclarını qarşılamaq üçün həllər.",
    "Yerində: Şirkətinizin serverlərində quraşdırılır və saxlanılır.\nBulud əsaslı: SAP-nin bulud infrastrukturu üzərində yerləşir, miqyaslanma və azaldılmış texniki xidmət təklif edir.\nHibrid: Yerində və bulud yerləşdirmələrinin qarışığı, biznes ehtiyaclarına uyğun çeviklik təmin edir.",
    "Ətraflı Planlaşdırma: Aydın məqsəd, əhatə və müddət müəyyən edin.\nTərəfdaşların Cəlb Edilməsi: Əsas istifadəçiləri və maraqlı tərəfləri proses boyunca daxil edin.\nMəlumat Köçürülməsi: Köhnə sistemlərdən dəqiq və tam məlumat köçürülməsini təmin edin.\nXüsusi Təminat və Konfiqurasiya: Sistemi biznes tələblərinə uyğunlaşdırın.\nTəlim və Dəstək: İstifadəçilər üçün kifayət qədər təlim təmin edin və dəstək mexanizmləri qurun.\nTest Edilmə: Canlıya keçmədən əvvəl problemləri müəyyənləşdirmək və həll etmək üçün ətraflı test edin"
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
      <h2 className='questionMe'>Sualınız var mı?</h2>
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