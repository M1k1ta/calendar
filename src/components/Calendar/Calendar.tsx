import React, { useState } from 'react';
import { CalendarMain } from '../CalendarMain';
import { CalendarHeader } from '../CalendarHeader';
import styled from '@emotion/styled';

export const CalendarBox = styled('section')`
  width: 100%;
  height: 100vh;
  background-color: #eeeff1;
`;

export const Cap = styled('div')`
  height: 20px;
  background-color: #fd8701;
`;

const defaultDate = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
};

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(defaultDate);
  const [countryCode, setCountryCode] = useState<string>('UA');

  const handlePrev = () => {
    setCurrentDate((currentDate) => {
      if (currentDate.currentMonth <= 0) {
        return { currentMonth: 11, currentYear: currentDate.currentYear - 1 };
      }

      return { ...currentDate, currentMonth: currentDate.currentMonth - 1 };
    });
  };

  const handleNext = () => {
    setCurrentDate((currentDate) => {
      if (currentDate.currentMonth >= 11) {
        return { currentMonth: 0, currentYear: currentDate.currentYear + 1 };
      }

      return { ...currentDate, currentMonth: currentDate.currentMonth + 1 };
    });
  };

  return (
    <CalendarBox>
      <Cap />
      <CalendarHeader
        currentDate={currentDate}
        countryCode={countryCode}
        onPrev={handlePrev}
        onNext={handleNext}
        onCountryCode={setCountryCode}
      />
      <CalendarMain currentDate={currentDate} countryCode={countryCode} />
    </CalendarBox>
  );
};
