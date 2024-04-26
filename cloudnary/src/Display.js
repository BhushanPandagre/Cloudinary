// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Display = () => {
//   const [data, setData] = useState([]);

//   const loadData = () => {
//     axios.get("http://localhost:8000/product/display").then((res) => {
//       setData(res.data);
//     });
//   };
//   useEffect(() => {
//     loadData();
//   }, []);
//   const ans = data.map((key) => {
//     return (
//       <>
//         {/* <tr>
//           <td>{key.name}</td>
//           <td>{key.brand}</td>
//           <td>{key.price}</td>
//           <td>{key.image}</td>
//         </tr> */}
//         <div
//           className="food-display"
//           style={{
//             fontSize: "18px",
//             width: "300px",
//           }}
//         >
//           <h2>Name: {key.name}</h2>
//           <h2>Price {key.price}</h2>
//           <h2>Brand:{key.brand}</h2>
//           <img src={key.image} alt="" width="200px" />
//         </div>
//       </>
//     );
//   });
//   return (
//     <>
//       <h1>
//         Card Display
//       </h1>

//       <div>
//         <div className="food-display-list">{ans}</div>
//       </div>
//     </>
//   );
// };
// export default Display;

//  import axios from "axios";
//  import React, { useEffect, useState } from "react";


//  const Display = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8000/product/display").then((res) => {
//       setData(res.data);
//     });
//   }, []);

//   const cards = data.map((item, index) => (
//     <div className="food-display" key={index}>
//       <img src={item.image} alt={item.name} />
//       <div className="food-display-content">
//         <h2>{item.name}</h2>
//         <p>Brand: {item.brand}</p>
//         <p className="food-display-price">Price: ${item.price}</p>
//       </div>
//     </div>
//   ));

//   return (
//     <>
//       <h1>Card Display</h1>
//       <div className="food-display-list">{cards}</div>
//     </>
//   );
// };

// export default Display;

import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Display.css"; // Import the CSS file for styling

const Display = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/product/display").then((res) => {
      setData(res.data);
    });
  }, []);

  const cards = data.map((item, index) => (
    <div className="food-display" key={index}>
      <img src={item.image} alt={item.name} />
      <div className="food-display-content">
        <h2>{item.name}</h2>
        <p>Brand: {item.brand}</p>
        <p className="food-display-price">Price: ${item.price}</p>
      </div>
    </div>
  ));

  return (
    <div className="display-container"> {/* Wrap content in a container */}
      <h1 className="display-title">Card Display</h1> {/* Apply class for styling */}
      <div className="food-display-list">{cards}</div>
    </div>
  );
};

export default Display;

