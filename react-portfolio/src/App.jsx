const App = () => {
  const mySkill = {name: 'Skills I have learned', comfort: 6};

  const mySkills = [
    {
      name:'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false
    },
    {
      name:'EJS',
      comfort: 7,
      frontEnd: true,
      backend: true
    },
  ];

  return (
    <>
    <h1>My React Portfolio</h1>
    <p>{mySkill.name}</p>

    <ul>
      {mySkills.map((mySkill, index) => 
      <li key={index}>
        {mySkill.comfort ? `Comfortable with ${mySkill.name}`: mySkill.name}
        </li>
      )}
    </ul>
    </>
  );
};

export default App
