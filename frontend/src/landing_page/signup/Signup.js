// import { useState } from "react";

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   function handleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Signup Data:", formData);

//     // later you can send this to backend
//     // axios.post("/api/signup", formData)
//   }

//   return (
//     <div className="signup-container">
//       <h2>Create an account</h2>
//       <p>Start investing with Zerodha</p>

//       <form onSubmit={handleSubmit} className="signup-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Sign up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;



// import { useState } from "react";
function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("OTP flow will be added next");
  }

  return (
    <div className="signup-page">

      {/* HERO SECTION */}
      <section className="signup-hero">
        <h1>Open a free demat and trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </section>

      {/* SIGNUP MAIN SECTION */}
      <section className="signup-main">

        {/* LEFT IMAGE */}
        <div className="signup-left">
          <img
            src="media/images/signup.png"
            alt="Zerodha platforms"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="signup-right">
          <h2>Signup now</h2>
          <p>Or track your existing application</p>

          <form onSubmit={handleSubmit}>
            <div className="mobile-input">
              <span>+91</span>
              <input
                type="text"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <button type="submit" className="otp-btn">
              Get OTP
            </button>
          </form>

          <p className="terms">
            By proceeding, you agree to the Zerodha{" "}
            <a href="">terms</a> & <a href="">privacy policy</a>
          </p>

          <p className="nri">
            Looking to open NRI account? <a href="">Click here</a>
          </p>
        </div>

      </section>

    </div>
  );
}

export default Signup;
