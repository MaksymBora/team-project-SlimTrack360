import{c as a,a as e}from"./index.esm-db9870a3.js";const r=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,s=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,i=a().shape({name:e().required("Name is required*"),email:e().matches(s,"Enter a valid Email*").email("Enter a valid Email*").required("Email is required*"),password:e().required("Password is required*").min(8,"Must be at least 8 characters long*").max(64,"Must not exceed 64 characters*").matches(r,"Password must meet the requirements*")});export{i as b};