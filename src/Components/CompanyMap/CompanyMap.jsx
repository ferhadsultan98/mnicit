import React from 'react';
import '../../Styles/CompanyMap.scss';

const CompanyMap = () => {
return (
    <div className="mapContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.0!2d49.8707393!3d40.3886404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d006336b661%3A0x4eb1905ae1e41940!2sB%C3%BCrotime%20Baku!5e0!3m2!1sen!2saz!4v1739320800000"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default CompanyMap;