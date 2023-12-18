import {
  CustomRadio,
  CustomRadioInput,
  StylesBtnForm,
  StylesForm,
  StylesLabelForm,
  StylesRadioBtn,
} from './ActivityForm.styled';

export const ActivityForm = () => {
  return (
    <StylesForm>
      <StylesRadioBtn>
        <CustomRadio>
          <CustomRadioInput type="radio" id="1.2" name="activity" value="1.2" />
          <StylesLabelForm htmlFor="1.2">
            1.2 - if you do not have physical activity and sedentary work
          </StylesLabelForm>
        </CustomRadio>

        <CustomRadio>
          <CustomRadioInput
            type="radio"
            id="1.375"
            name="activity"
            value="1.375"
          />
          <StylesLabelForm htmlFor="1.375">
            1.375 - if you do short runs or light gymnastics 1-3 times a week
          </StylesLabelForm>
        </CustomRadio>

        <CustomRadio>
          <CustomRadioInput
            type="radio"
            id="1.55"
            name="activity"
            value="1.55"
          />
          <StylesLabelForm htmlFor="1.55">
            1.55 - if you play sports with average loads 3-5 times a week
          </StylesLabelForm>
        </CustomRadio>

        <CustomRadio>
          <CustomRadioInput
            type="radio"
            id="1.725"
            name="activity"
            value="1.725"
          />
          <StylesLabelForm htmlFor="1.725">
            1.725 - if you train fully 6-7 times a week
          </StylesLabelForm>
        </CustomRadio>

        <CustomRadio>
          <CustomRadioInput type="radio" id="1.9" name="activity" value="1.9" />
          <StylesLabelForm htmlFor="1.9">
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </StylesLabelForm>
        </CustomRadio>
      </StylesRadioBtn>

      <StylesBtnForm type="button">Sign Up</StylesBtnForm>
    </StylesForm>
  );
};

export default ActivityForm;
