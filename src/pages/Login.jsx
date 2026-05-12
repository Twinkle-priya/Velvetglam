import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ IMPORTANT (prevents refresh)

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("LOGIN RESPONSE:", response.data); // 🔥 debug

      // Store Token safely
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Login failed");
      }

    } catch (error) {
      console.log("LOGIN ERROR:", error.response?.data);

      alert(
        error.response?.data?.message ||
        "Server Error"
      );
    }
  };

  return (
    <div className="bg-lime-50 min-h-screen">

      <Navbar />

      <div className="flex justify-center items-center py-20 px-4">

        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <h1 className="text-2xl font-bold text-center text-#C2185B mb-8">
            💄✨ 1. Classic Beauty Login
          </h1>

          <form onSubmit={handleLogin}> {/* ✅ IMPORTANT FIX */}

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
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-pink-800"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-5">
            New User?{" "}
            <Link to="/register" className="text-pink-700 font-bold">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;