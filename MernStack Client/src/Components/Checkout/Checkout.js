// import React, { useState } from "react";
// // import Services from "../Pages/Services/Services";

// function Checkout() {
//   const [name, setName] = useState("");
//   const [Address, setAddress] = useState("");
//   const [Phone, setPhone] = useState("");
//   const [error, setError] = useState("");

//   const handleNameBlur = (event) => {
//     setName(event.target.value);
//   };
//   const handleAddressBlur = (event) => {
//     setAddress(event.target.value);
//   };

//   const handlePhoneBlur = (event) => {
//     setPhone(event.target.value);
//   };

//   const handleCreateUser = (event) => {
//     event.preventDefault();
//     const chechoutInfo = { name, Phone, Address };
//     console.log(chechoutInfo);
//   };

//   // checkout section

//   // const Checkout = ({ service }) => {
//   //   const { name, img, description, price } = service;


//   return (
//     <div>
//       <div>Checkout</div>
//       <div>

//         {/* <div className="service">
//             <img src={img} alt="Our service" />
//             <h3>{name}</h3>
//             <p>Price:${price}</p>
//             <p>
//               <small>{description}</small>
//             </p>
//           </div> */}


//         {/* <Services></Services> */}
//       </div>
//       <div>Checkout info</div>
//       <form onSubmit={handleCreateUser}>
//         <input
//           onBlur={handleNameBlur}
//           type="text"
//           placeholder="your name"
//           required
//         />{" "}
//         <br />
//         <input
//           onBlur={handleAddressBlur}
//           type="text"
//           placeholder="your Address"
//           required
//         />{" "}
//         <br />
//         <input
//           onBlur={handlePhoneBlur}
//           type="text"
//           placeholder="your Phone"
//           required
//         />{" "}
//         <br />
//         <input type="submit" value="Checkout" />
//       </form>
//     </div>
//   );
// }

// export default Checkout;
