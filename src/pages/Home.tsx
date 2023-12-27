import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const [current, setCurrent] = useState<string>("");
  const [startTyping, setStartTyping] = useState<boolean>();
  const textRef = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    if (startTyping && textRef.current) {
      textRef.current.focus();
    }
  }, [startTyping]);

  const handleStartTyping = () => {
    setStartTyping(true);
  };

  const text = `trees rustling leaves birds chirping sky painted hues of blue nature's symphony playing breeze whispering secrets river flowing steadily life's rhythm unfolds mountains standing majestic silent witnesses to time's passage endless stories etched in stone flowers blooming colors vibrant dance under the sun moonlight casting shadows dreams woven in silver threads night's embrace a canvas of stars universe painting mysteries each moment a brushstroke in the masterpiece of existence.`;
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setCurrent(e.currentTarget.value);
  };

  console.log(current);

  return (
    <div className="text-white h-[70vh] flex flex-col justify-center">
      <div
        id="timer"
        className="container flex justify-center items-center my-5 flex-col"
      >
        <p>TIMER</p>
        <h5 className="text-3xl font-bold text-gray-600">15</h5>
      </div>
      <div
        id="test"
        className="container mx-auto h-[35%] sm:w-3/4 my-5 relative"
      >
        <textarea
          rows={5}
          value={current}
          onChange={handleInput}
          onClick={handleStartTyping}
          className="resize-none text-lg absolute w-full  border-none outline-none bg-transparent z-10 text-transparent"
        ></textarea>
        <p className="text-lg absolute text-gray-300">
          {[...current].map((character, index) => {
            return (
              <span
                className={`${
                  character != text[index] ? "text-red-800" : "text-green-900"
                }`}
              >
                {text[index]}
              </span>
            );
          })}
          <span>{text.slice(current.length)}</span>
        </p>
      </div>
      <div className="relative my-5 container mx-auto flex items-center justify-center">
        <button className="bg-yellow-500 text-white rounded-lg text-sm px-4 py-1">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;