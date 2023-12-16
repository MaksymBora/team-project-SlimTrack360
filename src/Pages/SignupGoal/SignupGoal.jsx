import GoalForm from '../../components/SignupGoal/GoalForm';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const SignUpGoal = () => {
  const backLinkLocationRef = useRef(location.state?.from ?? '/signup');

  return (
    <>
      <img src="" alt=""></img>
      <h1>Your goal</h1>
      <h2>Choose a goal so that we can help you effectively</h2>
      <GoalForm />
      <Link to={backLinkLocationRef.current}>Back</Link>
    </>
  );
};

export default SignUpGoal;
