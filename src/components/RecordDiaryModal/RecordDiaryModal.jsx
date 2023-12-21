import Modal from 'react-modal';
import { Formik, FieldArray } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFoodIntake,
  updateFoodIntake,
} from '../../Redux/foodIntake/operations';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import Icon from '../../components/common/Icon';
import { date } from '../../utils/dateToday';

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
import { getFoodIntake } from '../../Redux/foodIntake/selector';

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
      carbonohidretes: yup
        .number()
        .required('Carbonohidretes is required')
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
  carbonohidretes: '',
  protein: '',
  fat: '',
  calories: '',
  productId: '',
};

const RecordDiaryModal = ({
  isModalOpen,
  onClose,
  category,
  categoryImage,
  item,
}) => {
  const dispatch = useDispatch();

  const {
    breakfast: { products: breakfastProducts },
    lunch: { products: lunchProducts },
    dinner: { products: dinnerProducts },
    snack: { products: snackProducts },
  } = useSelector(getFoodIntake);
  const foodIntakeResponse = useSelector(getFoodIntake);

  const dailyProducts =
    category === 'Lunch'
      ? lunchProducts
      : category === 'Breakfast'
        ? breakfastProducts
        : category === 'Dinner'
          ? dinnerProducts
          : category === 'Snack'
            ? snackProducts
            : [];

  // -------------- Відправка даних на бекенд --------------------- //
  const handleSubmit = async (values, { resetForm }) => {
    const products = values.mealsIntake.map((product) => ({
      productId: nanoid(),
      ...product,
    }));

    // const productsForUpdate = values.mealsIntake.map((product) => ({
    //   ...product,
    // }));

    const dataForBackend = {
      date,
      [category.toLowerCase()]: {
        products,
      },
    };

    const updateDataForBackend = {
      [category.toLowerCase()]: {
        // products: productsForUpdate,
        products: values.mealsIntake,
      },
    };

    console.log(updateDataForBackend, 'updateDataForBackend');

    const dataToBeSend = {
      objectId: foodIntakeResponse._id,
      updateDataForBackend,
    };

    if (item) {
      dispatch(updateFoodIntake(dataToBeSend));
    } else {
      dispatch(addFoodIntake(dataForBackend));

      resetForm();
    }

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
            mealsIntake:
              item && dailyProducts
                ? dailyProducts.map((product) => ({
                    name: product.name || '',
                    carbonohidretes: product.carbonohidretes || '',
                    protein: product.protein || '',
                    fat: product.fat || '',
                    calories: product.calories || '',
                    productId: product.productId || '',
                  }))
                : [mealsIntakeTemplate],
          }}
          onSubmit={handleSubmit}
          validationSchema={schema}
          validateOnBlur
        >
          {({ errors, touched, values, setFieldValue }) => (
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
                                  onChange={(e) => {
                                    const { name, value } = e.target;
                                    setFieldValue(name, value);
                                  }}
                                  value={values.mealsIntake[index].name}
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
                                  name={`mealsIntake.${index}.carbonohidretes`}
                                  id={`mealsIntake.${index}.carbonohidretes`}
                                  placeholder="Carbonoh."
                                  type="number"
                                  min={0}
                                  max={1000}
                                  required
                                />
                                <StyledError
                                  name={`mealsIntake.${index}.carbonohidretes`}
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
