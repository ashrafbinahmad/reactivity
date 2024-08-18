import React from "react";

export default function WhatIsReact() {
  return (
    <div className="bg-gradient-to-b from-seconadaryLight to-black pt-48 text-[#ffffff8c]">
      <div className="container p-5 m-auto text-2xl border border-white">
        React.js, developed by Facebook, is a popular JavaScript library for
        building user interfaces, especially single-page applications. It
        revolves around components, which are reusable pieces of UI. Key
        concepts in React include props, which allow data to be passed between
        components, and state, which is used to manage data that can change over
        time within a component. React uses a virtual DOM, a lightweight copy of
        the actual DOM, to efficiently update only the parts of the web page
        that need to change, making applications faster and more responsive.
      </div>
    </div>
  );
}
