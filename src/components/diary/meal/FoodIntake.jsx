// import TitlePeriod from '../foodList/TitlePeriod';
// import breakfastImg from '../../../assets/images/diary/breakfast.png';
// import breakfastImg2x from '../../../assets/images/diary/breakfast-2x.png';
// import dinnerImg from '../../../assets/images/diary/dinner.png';
// import dinnerImg2x from '../../../assets/images/diary/dinner-2x.png';
// import lunchImg from '../../../assets/images/diary/lunch.png';
// import lunchImg2x from '../../../assets/images/diary/lunch-2x.png';
// import snackImg from '../../../assets/images/diary/snack.png';
// import snackImg2x from '../../../assets/images/diary/snack-2x.png';
// import FoodList from '../foodList/FoodList';
// import {
//   CardContainer,
//   CardTitleContainer,
//   Title,
//   TabletFood,
// } from './DiaryCard.styled';

// export const FoodIntakeTable = ({ title }) => {
//   const category = title;

//   const categoryImage =
//     title === 'Lunch'
//       ? lunchImg
//       : title === 'Breakfast'
//         ? breakfastImg
//         : title === 'Dinner'
//           ? dinnerImg
//           : title === 'Snack'
//             ? snackImg
//             : '';

//   const categoryImage2x =
//     title === 'Lunch'
//       ? lunchImg2x
//       : title === 'Breakfast'
//         ? breakfastImg2x
//         : title === 'Dinner'
//           ? dinnerImg2x
//           : title === 'Snack'
//             ? snackImg2x
//             : '';

//   return (
//     <CardContainer>
//       <TabletFood>
//         <CardTitleContainer>
//           <img
//             srcSet={`${categoryImage} 1x, ${categoryImage2x} 2x`}
//             src={categoryImage}
//             alt="breakfast"
//             width="32"
//             height="32"
//           />
//           <Title>{title}</Title>
//         </CardTitleContainer>

//         <TitlePeriod title={title} />
//       </TabletFood>
//       <FoodList
//         category={category}
//         categoryImage={categoryImage}
//         title={title}
//       />
//     </CardContainer>
//   );
// };

export const FoodIntakeTable = () => {
  return <></>;
};
