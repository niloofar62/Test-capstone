import React from "react";
import PeopleList from "./components/PeopleList";
import Person from "./components/Person";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
// const data = [
//   { id: 1, name: "John", scores: [9, 8, 10] },
//   { id: 2, name: "Jane", scores: [7, 9, 8] },
//   { id: 3, name: "Bob", scores: [6, 8, 9] },
// ];

function App() {
  // const [data, setData] = useState([
  //   { id: 1, name: "John", scores: [9, 8, 7, 6, 10] },
  //   { id: 2, name: "Mary", scores: [7, 8, 9, 10, 8] },
  //   { id: 3, name: "Jane", scores: [8, 8, 8, 8, 8] },
  //   {
  //     id: 4,
  //     name: "Mike",
  //     scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  //   },
  //   { id: 5, name: "Emily", scores: [6, 7, 8, 9, 10] },
  // ]);

  const HousekeeperData = () => {
    const [housekeeperData, setHousekeeperData] = useState([]);

    useEffect(() => {
      axios
        .get(
          `https://sheets.googleapis.com/v4/spreadsheets/1HPkB9M2r9xvsFSkj2JW4NWIt9Wu4R51o7GJ-UqVpT4E/values/A1:Z1000?key=AIzaSyDyVz5IVWZi-9fa4zocg4ZcE1MXMn5WTfk`
        )
        .then((response) => response.json())
        .then((data) => {
          const groupedData = {};

          for (let i = 0; i < data.length; i++) {
            const name = data[i][0];
            const score = data[i][1];

            if (!groupedData[name]) {
              groupedData[name] = [];
            }

            groupedData[name].push(score);
          }

          const groupedDataArray = [];
          let id = 1;

          for (const name in groupedData) {
            groupedDataArray.push({
              id: id,
              name: name,
              scores: groupedData[name],
            });

            id++;
          }

          setHousekeeperData(groupedDataArray);
        });
    }, []);

    return (
      <div>
        {housekeeperData.map((data) => (
          <div key={data.id}>
            <p>
              Name: {data.name} - Scores: {data.scores.join(", ")}
            </p>
          </div>
        ))}
      </div>
    );
  };

  // export default HousekeeperData;
  //   return (
  //     <div>
  //       <PeopleList data={housekeeperData} />
  //       <h1> Five Top Score</h1>
  //       <div className="top-five-box">
  //         <Person data={housekeeperData} />
  //       </div>
  //     </div>
  //   );
  // }
}
export default App;
