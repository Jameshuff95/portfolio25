import React from 'react';

const ErrorMessage = () => {
  return (
    <article className="border rounded-md w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-50 bg-yellow-300 flex items-center text-xl">
      <div className="border p-2 bg-foreground text-background">
        <p>There was an error sending your message. Please Try again Later.</p>
      </div>
    </article>
  );
};

export default ErrorMessage;
