import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // REGISTER FUNCTION

  const handleRegister = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert(response.data.message);

      navigate("/login");

    } catch (error) {

      alert(error.response.data.message);
    }
  };

  return (
    <div className="bg-purple-100 min-h-screen">

      <Navbar />

      <div className="flex justify-center items-center py-16 px-4">

        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">
           💖 1. Soft Beauty Signup
          </h1>

          {/* Name */}

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-xl mb-5"
          />

          {/* Email */}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-xl mb-5"
          />

          {/* Password */}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-xl mb-8"
          />

          {/* Button */}

          <button
            onClick={handleRegister}
            className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-green-800"
          >
            Register
          </button>

          <p className="text-center mt-5">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-purple-700 font-bold"
            >
              Login
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;