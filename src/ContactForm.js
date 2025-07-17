import { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`आपका ईमेल: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ईमेल दर्ज करें"
      />
      <button type="submit">भेजें</button>
    </form>
  );
}
