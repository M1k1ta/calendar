/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CurrentDate } from '../../types/CurrentDate';
import { daysOfTheWeek, monthsOfTheYear } from '../../utils/date';
import {
  PaginationButton,
  CalendarDate,
  ColumnName,
  Columns,
  Header,
  Management,
  Button,
  Box,
} from './Emotion';
import { getAvailableCountries } from '../../api/calendar';
import { Country } from '../../types/Country';
import { Select } from '../Select';
import { FilterModal } from '../FilterModal';
import { FilterIcon } from '../../icons/FilterIcon';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { DownloadIcon } from '../../icons/DownloadIcon';

interface Props {
  currentDate: CurrentDate;
  countryCode: string;
  onPrev: () => void;
  onNext: () => void;
  onCountryCode: (countryCode: string) => void;
  onSearchParam: (value: string) => void;
  onColorParam: (value: string) => void;
}

export const CalendarHeader: React.FC<Props> = ({
  currentDate,
  countryCode,
  onPrev,
  onNext,
  onCountryCode,
  onSearchParam,
  onColorParam,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  const { currentMonth, currentYear } = currentDate;

  const downloadImage = async () => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

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
        <Box>
          <Select
            countryCode={countryCode}
            countries={countries}
            onChange={onCountryCode}
          />

          <Button type="button" onClick={() => setIsFilter(true)}>
            <FilterIcon />
          </Button>

          <Button type="button" onClick={downloadImage}>
            <DownloadIcon />
          </Button>
        </Box>

        <CalendarDate>{`${monthsOfTheYear[currentMonth]} ${currentYear}`}</CalendarDate>

        <Box>
          <PaginationButton onClick={onPrev}>{'<'}</PaginationButton>
          <PaginationButton onClick={onNext}>{'>'}</PaginationButton>
        </Box>
      </Management>

      <Columns>
        {daysOfTheWeek.map((day) => (
          <ColumnName key={day}>{day}</ColumnName>
        ))}
      </Columns>

      {isFilter && (
        <FilterModal
          onClose={() => setIsFilter(false)}
          onSearchParam={onSearchParam}
          onColorParam={onColorParam}
        />
      )}
    </Header>
  );
};
