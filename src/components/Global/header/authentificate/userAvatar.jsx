// import { UserName, UserAva, UserLogoContainer, UserLogoText, UserLogoIcon } from './../header.styled.jsx'
// import icon from './../../../../assets/sprite.svg'

// export const UserAvatar = () => {

//      const userProfile = useSelector(currentUserEmailSelector);
//   const name = 'alex' ?? userProfile.userName;
//   const avatar = {} ?? userProfile.avatarURL;
//   const defaultName = name ? name.slice(0, 1).toUpperCase() : 'A';
//   const avatarUser = useSelector(currentUserAvatar);
//   const ava = avatarUser.avatarURL;
//   const [isModalOpen, setModalOpen] = useState(false);

//     return (
//         name && (
//             <UserLogoContainer>

//                 <UserName>faro</UserName>

//                 {ava ? (
//                     <UserAva
//                         src={ava} alt="Avatar"
//                     />
//                 ) : (
//             <UserLogoText>
//               <p>
//               {defaultName}
//               </p>
//                         </UserLogoText>

//                 )
//             }

//                 <UserLogoIcon>
//                     <svg>
//         <use href={icon + '#icon-arrow-down'}></use>
//       </svg>
//            </UserLogoIcon>

//             </UserLogoContainer>

//         )
//     )
// }
