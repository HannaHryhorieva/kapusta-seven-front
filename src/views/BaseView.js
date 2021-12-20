import React from 'react';

function BaseView({ children }) {
  return (
    <>
      <div className="background-bottom"></div>
      <div className="background-top"></div>
      <div className="container">{children}</div>
    </>
  );
}

export default BaseView;
