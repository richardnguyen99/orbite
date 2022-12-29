import { useEffect, useRef, useState } from "react";

const getGreetingPrompt = (hour: number | null) => {
  if (hour === null || (hour >= 4 && hour < 12)) {
    return "Good Morning!";
  }

  if (hour >= 12 && hour < 17) {
    return "Good Afternoon!";
  }

  if (hour >= 17 && hour < 23) {
    return "Good Evening!";
  }

  return "Good Night!";
};

const GreetingWithTime = () => {
  const [date, setDate] = useState<Date>(new Date());
  const timerId = useRef<ReturnType<typeof setInterval>>();

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    timerId.current = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-extrabold">
        {getGreetingPrompt(date.getHours())}
      </h1>
    </div>
  );
};

export default GreetingWithTime;
