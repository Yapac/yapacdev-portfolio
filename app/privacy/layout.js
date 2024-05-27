import "./privacy.css";

import React from "react";

export const metadata = {
  title: "Privacy policy",
};

const layout = ({ children }) => {
  return (
    <div className="privacy container min-h-screen text-white pt-32 pb-16">
      {children}
    </div>
  );
};

export default layout;
