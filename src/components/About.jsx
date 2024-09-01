import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in
          quod tenetur a porro, expedita doloremque, nemo sint, quisquam iste
          est? Eius, sit. Quia, beatae illo quis quaerat necessitatibus
          cupiditate placeat nulla fugiat ea fugit fuga sequi at molestiae nam
          consectetur id culpa praesentium sapiente mollitia laborum voluptate
          ipsum temporibus!
        </p>
        <br />
        <p className="text-xl"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          culpa tenetur ipsum mollitia reprehenderit sunt doloremque doloribus,
          velit fugit fugiat atque, soluta dolore illo molestiae ullam debitis
          architecto repellendus eius ea placeat inventore esse ipsam at. Ullam,
          ab ex officiis culpa voluptates, sed nobis a, iure consequuntur magnam
          nulla nihil!
        </p>
        </div>
      </div>
    </>
  );
};

export default About;
