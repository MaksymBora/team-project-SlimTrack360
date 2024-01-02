import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectorContainerWrapper } from './Styles/Graphs.styled';
import { IconArrowLeft, IconArrowUp } from '../../assets/spriteSVG';
import '../Dashboard/Styles/MobStyles/mob.SelCont.css';
import '../Dashboard/Styles/TabletStyles/tab.SelCont.css';
import '../Dashboard/Styles/Styles.css';
import { currentMonth } from '../../utils/currentMonth';
import { setRequiredMonth } from '../../Redux/statisctics/statisticsSlice';
import { useDispatch } from 'react-redux';

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
  const [selectedMonth, setSelectedMonth] = useState(currentMonth());
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);

    dispatch(setRequiredMonth(month));

    setIsDropdownOpen(false);
  };

  const handleIconClick = () => {
    navigate('/main');
  };

  return (
    <SelectorContainerWrapper>
      <div className="monthsArrows">
        <button className="IconArrowLeft" onClick={handleIconClick}>
          <IconArrowLeft width={24} height={24} />
        </button>
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
