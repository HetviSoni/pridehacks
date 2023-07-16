import React from 'react';

const Donate = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Payment submitted');
  };

  return (

      <form onSubmit={handleSubmit}>
        <label>
          Card Details:
          {/* <CardElement /> */}
        </label>
        <button type="submit">Donate</button>
      </form>

  );
};

export default Donate;
