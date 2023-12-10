/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CurrentDate } from '../../types/CurrentDate';
import { daysOfTheWeek, monthsOfTheYear } from '../../utils/date';
import {
  Button,
  CalendarDate,
  ColumnName,
  Columns,
  Header,
  Management,
  Pagination,
} from './Emotion';
import { getAvailableCountries } from '../../api/calendar';
import { Country } from '../../types/Country';
import { Select } from '../Select';

interface Props {
  currentDate: CurrentDate;
  countryCode: string;
  onPrev: () => void;
  onNext: () => void;
  onCountryCode: (countryCode: string) => void;
}

export const CalendarHeader: React.FC<Props> = ({
  currentDate,
  countryCode,
  onPrev,
  onNext,
  onCountryCode,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const { currentMonth, currentYear } = currentDate;

  const loadCountyCodes = async () => {
    try {
      const { data } = await getAvailableCountries();

      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCountyCodes();
  }, []);

  return (
    <Header>
      <Management>
        <Select
          countryCode={countryCode}
          countries={countries}
          onChange={onCountryCode}
        />

        <CalendarDate>{`${monthsOfTheYear[currentMonth]} ${currentYear}`}</CalendarDate>

        <Pagination>
          <Button onClick={onPrev}>{'<'}</Button>
          <Button onClick={onNext}>{'>'}</Button>
        </Pagination>
      </Management>

      <Columns>
        {daysOfTheWeek.map((day) => (
          <ColumnName key={day}>{day}</ColumnName>
        ))}
      </Columns>
    </Header>
  );
};
