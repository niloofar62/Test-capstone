import React from "react";
// import "jowel.png";
// import "crown.jpeg";

// function PeopleList({ data }) {
//   const people = data.map((person) => {
//     const averageScore =
//       person.scores.reduce((sum, score) => sum + score, 0) /
//       person.scores.length;
//     return (
//       <div key={person.id}>
//         {averageScore > 8 && (
//           <img src={"./jowel.jpeg"} alt={`${person.name}'s jowel`} />
//         )}
//         <img src={"./crown.png"} alt={`${person.name}'s crown`} />
//         <p>{person.name}</p>
//       </div>
//     );
//   });

//   return <div>{people}</div>;
// }
//

// function PeopleList({ data }) {
//   const people = data.map((person) => {
//     // const averageScore =
//     //   person.scores.reduce((sum, score) => sum + score, 0) /
//     //   person.scores.length;
//     let jowelsEarned = 0;
//     // //  if (averageScore > 8) {
//     const jewels = person.scores.filter((score) => score > 8);

//     jowelsEarned = jewels.length;
//     console.log(person.name, jowelsEarned);

//     return (
//       <div key={person.id}>
//         {jowelsEarned > 0 && (
//           <p> 💎 </p>
//           // <img
//           //   src={`${process.env.PUBLIC_URL}/jowel.jpeg`}
//           //   alt={`${person.name}'s jowel`}
//           // />
//         )}
//         {jowelsEarned >= 5 && (
//           <p>👑</p>
//           // <img
//           //   src={`${process.env.PUBLIC_URL}/crown.png`}
//           //   alt={`${person.name}'s extra crown`}
//           // />
//         )}
//         <p> 👑</p>
//         {/* <img
//           src={`${process.env.PUBLIC_URL}/crown.png`}
//           alt={`${person.name}'s crown`}
//         /> */}

//         <p>{person.name}</p>
//       </div>
//     );
//   });
//   // console.log({people.jowels});

//   return <div>{people}</div>;
// }

// export default PeopleList;

function PeopleList({ data }) {
  const people = data.map((person) => {
    let jowelsEarned = 0;
    const jewels = person.scores.filter((score) => score > 8);
    jowelsEarned = jewels.length;
    console.log(person.name, jowelsEarned);

    return (
      <div className="person-container" key={person.id}>
        {Array.from({ length: jowelsEarned }).map(() => "💎")}
        {/* {jowelsEarned > 0 && <p className="jowel">💎</p>} */}
        {/* {jowelsEarned >= 5 && <p className="extra-crown">👑</p>} */}
        {jowelsEarned >= 5 && (
          <div className="extra-crown">
            {Array.from({ length: Math.floor(jowelsEarned / 5) }, (_, i) => (
              <p key={i}>👑</p>
            ))}
          </div>
        )}
        <p className="crown">👑</p>
        <p className="name">{person.name}</p>
      </div>
    );
  });

  return <div className="people-list">{people}</div>;
}

export default PeopleList;
