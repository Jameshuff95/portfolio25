import React from 'react';

const SuccessMessage = () => {
  return (
    <article className="border rounded-md w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-50 bg-yellow-300 flex items-center text-xl">
      <div className="h-full w-5/6 m-auto p-2 text-background text-center flex flex-col gap-5">
        <p>Your message has been sent successfully!</p>
        <p>
          Thank you for your message! You will hear back from me as soon as I am
          available.
        </p>
      </div>
    </article>
  );
};

export default SuccessMessage;
