import React from 'react';
import '../../Styles/CompanyMap.scss';

const CompanyMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/place/B%C3%BCrotime+Baku/@40.3886404,49.8681644,663m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40307d006336b661:0x4eb1905ae1e41940!8m2!3d40.3886404!4d49.8707393!16s%2Fg%2F11x1qp65xs?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default CompanyMap;