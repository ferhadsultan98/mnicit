import React, { useState } from 'react';
import '../../'

const SubscriptionBanner = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="subscription-banner">
      <div className="banner-content">
        <h2>Abunə Olun Yeni Xəbərlər Üçün</h2>
        <p>Premium dəstək, təkmilləşdirilmiş xidmətlər və siçan bulud xidmətlərinə giriş üçün abunə olun.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-poçtunuzu daxil edin..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Abunə Ol</button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionBanner;