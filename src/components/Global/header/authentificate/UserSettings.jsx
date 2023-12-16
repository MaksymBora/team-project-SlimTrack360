import { useMediaQuery } from 'react-responsive';
import {
  UserMode,
  UserSet,
  Pictogram,
  SelectGoals,
  GoalPic,
  GoalSelection,
  Goal,
  LoseFat,
  GoalBtn,
  SettingBtn,
  SelectWeight,
  WeightPic,
  WeightSelection,
  Weight,
  SetBtn,
  NumKg,
  Kg,
  WeightBtn,
} from './../header.styled.jsx';
import icon from './../../../../assets/sprite.svg';
import pict from './img/Lose fat image men.png';
import png from './img/Waight image.png';

export const UserSettings = () => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });

  return (
    <UserMode>
      {isMobile ? (
        // first
        <Pictogram>
          <svg>
            <use href={icon + '#icon-menu'}></use>
          </svg>
        </Pictogram>
      ) : (
        <UserSet>
          <SelectGoals>
            <GoalPic>
              <img src={pict} alt="running man" />
            </GoalPic>

            <GoalSelection>
              <Goal>Goal</Goal>

              <SettingBtn>
                <LoseFat>Lose fat</LoseFat>

                <GoalBtn type="button">
                  <svg>
                    <use href={icon + '#icon-arrow-down'}></use>
                  </svg>
                </GoalBtn>
              </SettingBtn>
            </GoalSelection>
          </SelectGoals>

          <SelectWeight>
            <WeightPic>
              <img src={png} alt="weight" />
            </WeightPic>

            <WeightSelection>
              <Weight>Weight</Weight>
              <SetBtn>
                <NumKg>
                  65
                  <Kg>kg</Kg>
                </NumKg>
                <WeightBtn type="button">
                  <svg>
                    <use href={icon + '#icon-edit-weight'}></use>
                  </svg>
                </WeightBtn>
              </SetBtn>
            </WeightSelection>
          </SelectWeight>
        </UserSet>
      )}
    </UserMode>
  );
};
