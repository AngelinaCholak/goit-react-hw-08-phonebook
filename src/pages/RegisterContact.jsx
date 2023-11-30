// import React from 'react'

// export const RegisterContact = () => {
//    const onSubmit = e => {
//      e.preventDefault();
//      const name = e.currentTarget.elements.userName.value;
//      const email = e.currentTarget.elements.userEmail.value;
//      const password = e.currentTarget.elements.userPassword.value;
//    };
//   return (
//     <div>
//       {' '}
//       <div className="login-container">
//         <h1>Login</h1>
//         <form onSubmit={onSubmit}  className="login-form">
//           <label htmlFor="username">Name</label>
//           <input
//             type="text"
//             placeholder="Name"
//             required
//             name="userName"
//           />
//           <label htmlFor="username">Email</label>
//           <input
//             type="email"
//             placeholder="Contact@contact.com"
//             required
//             name="userEmail"
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             placeholder="*******"
//             required
//             name="userPassword"
//             minLength={7}
//           />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }
