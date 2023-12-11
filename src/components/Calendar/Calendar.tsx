import React, { useEffect, useState } from 'react';
import { CalendarMain } from '../CalendarMain';
import { CalendarHeader } from '../CalendarHeader';
import styled from '@emotion/styled';
import { readSearchParams, updateSearchParams } from '../../utils/searchParams';

const CalendarBox = styled('section')`
  width: 100%;
  height: 100vh;
  background-color: #eeeff1;
`;

const Cap = styled('div')`
  height: 20px;
  background-color: #fd8701;
`;

const defaultDate = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
};

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(defaultDate);
  const [countryCode, setCountryCode] = useState('UA');
  const [searchParam, setSearchParam] = useState(
    readSearchParams('search') || '',
  );
  const [colorParam, setColorParam] = useState(readSearchParams('color') || '');

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

  useEffect(() => {
    updateSearchParams('search', searchParam);
    updateSearchParams('color', colorParam);
  }, [searchParam, colorParam]);

  return (
    <CalendarBox>
      <Cap />
      <CalendarHeader
        currentDate={currentDate}
        countryCode={countryCode}
        onPrev={handlePrev}
        onNext={handleNext}
        onCountryCode={setCountryCode}
        onSearchParam={setSearchParam}
        onColorParam={setColorParam}
      />
      <CalendarMain
        currentDate={currentDate}
        countryCode={countryCode}
        searchParam={searchParam}
        colorParam={colorParam}
        onSearchParam={setSearchParam}
        onColorParam={setColorParam}
      />
    </CalendarBox>
  );
};
