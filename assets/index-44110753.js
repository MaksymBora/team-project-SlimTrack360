import{u as r,t as e}from"./index-74bbd92c.js";import{c as a,a as i}from"./index.esm-d378b7e1.js";const p=r.p`
  color: ${e.color.primaryGrey};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-top: 14px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    animation: 1s ease-in-out infinite;
    color: ${e.color.primaryWhite};
  }

  @media screen and (min-width: 834px) {
    padding-top: 20px;
  }
`,d=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 54px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    padding-top: 222px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 184px;
  }
`,l=r.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: all 0.3s ease-in-out;
  animation: 1s ease-in-out infinite;
  color: ${e.color.primaryWhite};
  &:hover {
    cursor: pointer;
    animation: 1s ease-in-out infinite;
    color: ${e.color.primaryGreenLite};
  }
  &:focus {
    background-color: ${e.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${e.color.primaryBlack};
  }
`,o=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,c=a().shape({name:i().required("Name is required*"),email:i().matches(t,"Enter a valid Email*").email("Enter a valid Email*").required("Email is required*"),password:i().required("Password is required*").matches(o,"Password must meet the requirements*")});export{l as L,d as O,p as P,c as b};
