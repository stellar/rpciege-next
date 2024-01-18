import { useEffect, useState } from 'react';

import { useInterval } from './useInterval';

type DateType = string | number | Date;

type UseCountdownOptions = { time: DateType };

export const useCountdown = (options: UseCountdownOptions) => {
  const [currentTime, setCurrentTime] = useState(0);

  const interval = useInterval({ callback: () => setCurrentTime(Date.now()), timeout: 1000 });

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  useEffect(() => {
    if (currentTime > new Date(options.time).getTime()) {
      interval.stop();
    }
  }, [currentTime]);

  return timeDifference(currentTime, options.time);
};

function timeDifference(date1: DateType, date2: DateType) {
  date1 = new Date(date1);
  date2 = new Date(date2);

  if (date2 <= date1) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  var difference = date2.getTime() - date1.getTime();

  var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  var months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { years, months, days, hours, minutes, seconds };
}
