// src/components/Dashboard/SelectorContainer.jsx
import { useState } from 'react';
import { SelectorContainerWrapper } from './Styles/Graphs.styled';
import { IconArrowLeft, IconArrowUp } from '../../assets/spriteSVG';
import '../Dashboard/Styles/MobStyles/mob.SelCont.css';
import '../Dashboard/Styles/TabletStyles/tab.SelCont.css';
import '../Dashboard/Styles/Styles.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SelectorContainer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('December');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };

  return (
    <SelectorContainerWrapper>
      <div className="monthsArrows">
        <div className="IconArrowLeft">
          <IconArrowLeft width={24} height={24} />
        </div>
        <label className="monthTitle" htmlFor="monthSelector">
          Months
        </label>
        <div className="IconArrowUp" onClick={toggleDropdown}>
          <IconArrowUp width={16} height={16} />
        </div>
      </div>
      <div className={`monthSelector ${isDropdownOpen ? 'open' : ''}`}>
        <div className="selectedMonth">{selectedMonth}</div>
        {isDropdownOpen && (
          <div className="dropdown">
            {months.map((month) => (
              <div
                key={month}
                className={`monthOption ${
                  selectedMonth === month ? 'selected' : ''
                }`}
                onClick={() => handleMonthSelect(month)}
              >
                {month}
              </div>
            ))}
          </div>
        )}
      </div>
    </SelectorContainerWrapper>
  );
};

export default SelectorContainer;
