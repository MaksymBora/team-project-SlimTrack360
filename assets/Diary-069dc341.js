import{s as i,t,u as a,r as o,f as d,j as e,L as x}from"./index-e499228a.js";import{d as l}from"./dateToday-97cb1add.js";const m=i.div`
  padding: 20px 34px 52px 34px;
  background-color: ${t.color.primaryBlack};
`,s=i.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  font-family: Poppins;
  color: ${t.color.primaryWhite};
`;i.button`
  background-color: transparent;
  border: none;
`;i.svg`
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
`;i.h2`
  display: inline;
  font-size: 24px;
`;i.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
`;i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;i.h3`
  display: inline;
  font-size: 18px;
`;const n=`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43; 
`;i.span`
  font-size: 14px;
  ${n}
  color: ${t.color.primaryWhite};
`;i.span`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
  color: ${t.color.primaryGreenLite};
  width: 160px;
`;i.div`
  margin-left: 0;
  margin-top: 6px;
  padding-left: 0;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  overflow-y: auto;

  @media (min-width: 320px) {
    padding: 0 12px 16px;
    width: 300px;
  }

  @media (min-width: 834px) {
    padding: 0 14px 32px;
    width: 720px;
  }

  @media (min-width: 1440px) {
    max-width: 676px;
  }
`;i.li`
  list-style-type: none;
  margin-top: 30px;

  @media (min-width: 320px) {
    flex-wrap: wrap;
  }

  @media (min-width: 834px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1440px) {
  }
`;i.div`
  display: flex;

  @media (min-width: 320px) {
    flex-wrap: wrap;
  }

  @media (min-width: 834px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1440px) {
  }
`;i.ul`
  margin-left: 0;
  padding-left: 0;
`;i.input`
  color: ${t.color.primaryWhite};
  margin-right: 12px;
  font-size: 14px;
  ${n}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 164px;
  }

  @media (min-width: 834px) {
    width: 275px;
  }

  @media (min-width: 1440px) {
    width: 260px;
  }
`;i.input`
  color: ${t.color.primaryWhite};
  font-size: 14px;
  margin-right: 12px;
  ${n}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;i.input`
  color: ${t.color.primaryWhite};
  margin-right: 12px;
  font-size: 14px;
  ${n}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;i.input`
  color: ${t.color.primaryWhite};
  margin-right: 12px;
  font-size: 14px;
  ${n}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;i.div`
  color: ${t.color.primaryWhite};
  margin-right: 16px;
  font-size: 14px;
  ${n}
  background-color: transparent;
  width: 16px;
`;const h=i.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`,c=i.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`,g=()=>{const r=a(),p={date:l};return o.useEffect(()=>{r(d(p))},[r]),e.jsxs(m,{children:[e.jsxs(h,{children:[e.jsx(x,{to:"/"}),e.jsx(s,{children:"Diary"})]}),e.jsx(c,{})]})};export{g as default};
