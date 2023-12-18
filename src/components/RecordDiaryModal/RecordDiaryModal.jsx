import Modal from 'react-modal';
import { Formik, FieldArray } from 'formik';
import { useDispatch } from 'react-redux';
import {
  postFoodIntake,
  updateFoodIntake,
} from '../../Redux/foodIntake/operations';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import Icon from '../../components/common/Icon';

import {
  ModalWrapper,
  ModalTitle,
  MealWrapper,
  MealImage,
  MealTitle,
  StyledForm,
  FieldArrayWrapper,
  MealsList,
  MealItem,
  FieldWrapper,
  StyledField,
  StyledError,
  ButtonsContainer,
  ButtonAddMore,
  ButtonDelete,
  ButtonConfirm,
  ButtonCancel,
} from './RecordDiaryModal.styles';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    maxWidth: 'fit-content',
    maxHeight: 'fit-content',
    margin: 'auto',
    overflow: 'none',
    inset: 0,
    padding: 0,
    border: 'none',
    background: 'none',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 3000,
  },
};
const schema = yup.object({
  productList: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .required('Name is required')
        .matches(/^\p{L}+$/)
        .trim('Name cannot include leading and trailing spaces')
        .strict(true),
      carbonohidrates: yup
        .number()
        .required('Carbonohidrates is required')
        .typeError('Must be a number')
        .min(0, 'Must be a positive number')
        .max(1000, 'The maximum allowable value is 1000')
        .test(
          'maxDigitsAfterDecimal',
          'Must have 1 digits after decimal',
          (number) => /^\d+(\.\d{1})?$/.test(number)
        ),
      protein: yup
        .number()
        .required('Protein is required')
        .typeError('Must be a number')
        .min(0, 'Must be a positive number')
        .max(1000, 'The maximum allowable value is 1000')
        .test(
          'maxDigitsAfterDecimal',
          'Must have 1 digits after decimal',
          (number) => /^\d+(\.\d{1})?$/.test(number)
        ),
      fat: yup
        .number()
        .required('Fat is required')
        .typeError('Must be a number')
        .min(0, 'Must be a positive number')
        .test(
          'maxDigitsAfterDecimal',
          'Must have 1 digits after decimal',
          (number) => /^\d+(\.\d{1})?$/.test(number)
        ),

      calories: yup
        .number()
        .required('Calories is required')
        .typeError('Must be a number')
        .min(0, 'Must a be positive number')
        .max(1000, 'The maximum allowable value is 1000')
        .integer('Must be an integer'),
    })
  ),
});

const mealsIntakeTemplate = {
  name: '',
  carbonohidrates: '',
  protein: '',
  fat: '',
  calories: '',
};

const RecordDiaryModal = ({
  isModalOpen,
  onClose,
  category,
  categoryImage,
  item,
}) => {
  const dispatch = useDispatch();

  // Відправка даних на бекенд
  const handleSubmit = async (values, { resetForm }) => {
    const currentDate = new Date().toISOString(); // Отримуємо поточну дату у форматі ISO
    const formattedDate = currentDate.substring(0, 10); // Беремо перші 10 символів
    const products = values.mealsIntake.map((product) => ({
      productId: nanoid(),
      ...product,
    }));

    const dataForBackend = {
      date: formattedDate,
      [category.toLowerCase()]: {
        products,
      },
    };
    // console.log('dataForBackend', dataForBackend);

    if (item) {
      dispatch(updateFoodIntake({ productId: item._id, dataForBackend }));
    } else {
      dispatch(postFoodIntake(dataForBackend));
    }
    // dispatch(fetchStatistics('today'));
    resetForm();
    onClose();
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={onClose} style={customStyles}>
      <ModalWrapper>
        <ModalTitle>Record your meal</ModalTitle>
        <MealWrapper>
          <MealImage src={categoryImage} alt="categoryImage" />
          <MealTitle>{category}</MealTitle>
        </MealWrapper>

        <Formik
          initialValues={{
            mealsIntake: item
              ? [
                  {
                    category,
                    name: item.name ?? '',
                    carbonohidrates: item.carbohydrate ?? '',
                    protein: item.protein ?? '',
                    fat: item.fat ?? '',
                    calories: item.calories ?? '',
                  },
                ]
              : [mealsIntakeTemplate], // початковий елемент, якщо item відсутній
          }}
          onSubmit={handleSubmit}
          validationSchema={schema}
          validateOnBlur
        >
          {({ errors, touched, values }) => (
            <StyledForm autoComplete="off">
              <FieldArray name="mealsIntake">
                {({ insert, remove }) => {
                  return (
                    <FieldArrayWrapper>
                      <MealsList>
                        {values.mealsIntake.map((product, index) => {
                          return (
                            <MealItem key={index}>
                              <FieldWrapper>
                                <StyledField
                                  name={`mealsIntake.${index}.name`}
                                  id={`mealsIntake.${index}.name`}
                                  placeholder="The name of the product or dish"
                                  type="text"
                                  onKeyDown={(e) => {
                                    if (/\d/.test(e.key)) {
                                      e.preventDefault();
                                    }
                                  }}
                                  required
                                />
                                {errors[`mealsIntake.${index}.name`] &&
                                touched[`mealsIntake.${index}.name`] ? (
                                  <StyledError
                                    name={`mealsIntake.${index}.name`}
                                    component="div"
                                  />
                                ) : null}
                              </FieldWrapper>

                              <FieldWrapper>
                                <StyledField
                                  name={`mealsIntake.${index}.carbonohidrates`}
                                  id={`mealsIntake.${index}.carbonohidrates`}
                                  placeholder="Carbonoh."
                                  type="number"
                                  min={0}
                                  max={1000}
                                  required
                                />
                                <StyledError
                                  name={`mealsIntake.${index}.carbonohidrates`}
                                  component="div"
                                />
                              </FieldWrapper>

                              <FieldWrapper>
                                <StyledField
                                  name={`mealsIntake.${index}.protein`}
                                  id={`mealsIntake.${index}.protein`}
                                  placeholder="Protein"
                                  type="number"
                                  min={0}
                                  max={1000}
                                  required
                                />
                                {errors[`mealsIntake.${index}.protein`] &&
                                touched[`mealsIntake.${index}.protein`] ? (
                                  <StyledError
                                    name={`mealsIntake.${index}.protein`}
                                    component="div"
                                  />
                                ) : null}
                              </FieldWrapper>

                              <FieldWrapper>
                                <StyledField
                                  name={`mealsIntake.${index}.fat`}
                                  id={`mealsIntake.${index}.fat`}
                                  placeholder="Fat"
                                  type="number"
                                  min={0}
                                  max={1000}
                                  required
                                />
                                {errors[`mealsIntake.${index}.fat`] &&
                                touched[`mealsIntake.${index}.fat`] ? (
                                  <StyledError
                                    name={`mealsIntake.${index}.fat`}
                                    component="div"
                                  />
                                ) : null}
                              </FieldWrapper>

                              <FieldWrapper>
                                <StyledField
                                  name={`mealsIntake.${index}.calories`}
                                  id={`mealsIntake.${index}.calories`}
                                  placeholder="Calories"
                                  type="number"
                                  min={0}
                                  max={1000}
                                  required
                                />
                                {errors[`mealsIntake.${index}.calories`] &&
                                touched[`mealsIntake.${index}.calories`] ? (
                                  <StyledError
                                    name={`mealsIntake.${index}.calories`}
                                    component="div"
                                  />
                                ) : null}
                              </FieldWrapper>

                              <ButtonDelete
                                type="button"
                                onClick={() => remove(index)}
                              >
                                <Icon
                                  name="icon-trash"
                                  width={20}
                                  height={20}
                                />
                              </ButtonDelete>
                            </MealItem>
                          );
                        })}
                      </MealsList>
                      <ButtonAddMore
                        type="button"
                        onClick={() => {
                          if (
                            values &&
                            values.mealsIntake &&
                            values.mealsIntake.length > 0
                          ) {
                            const mealsIntake =
                              values.mealsIntake[values.mealsIntake.length - 1];
                            console.log(
                              'Масив спожита їжа:',
                              values.mealsIntake
                            );
                            const fieldEmpty = Object.values(
                              mealsIntake || {}
                            ).some(
                              (value) =>
                                typeof value === 'string' && !value.trim()
                            );
                            if (!fieldEmpty) {
                              insert(
                                values.mealsIntake.length,
                                mealsIntakeTemplate
                              );
                            }
                          } else {
                            insert(0, mealsIntakeTemplate);
                          }
                        }}
                      >
                        <Icon
                          name="icon-add"
                          icon-add-more
                          width={16}
                          height={16}
                        />
                        Add more
                      </ButtonAddMore>
                    </FieldArrayWrapper>
                  );
                }}
              </FieldArray>

              <ButtonsContainer>
                <ButtonConfirm type="submit">Confirm</ButtonConfirm>
                <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
              </ButtonsContainer>
            </StyledForm>
          )}
        </Formik>
      </ModalWrapper>
    </Modal>
  );
};

export default RecordDiaryModal;