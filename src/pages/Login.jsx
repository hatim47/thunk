import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Head from "../Head"
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setToken(data.token);
      localStorage.setItem("token", data.token); // ✅ Save token
        navigate("/contactadmin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>  
     <Head></Head>
    <div className="flex items-center justify-center h-screen w-screen bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-[#2c2c2c] p-8 rounded-xl w-96 shadow-lg space-y-6"
      >
        <h2 className="text-2xl uppercase font-title font-bold text-center">Admin Login</h2>

        <div>
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           className="w-full bg-[#333333] border border-[#555555] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
        </div>

        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#333333] border border-[#555555] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
          />
        </div>

        {error && <span className="text-red-500 text-sm">{error}
            <br />
<br /></span>}

          <motion.button
                               type="submit"    className="w-fit relative text-white overflow-hidden uppercase px-8 text-xs sm:text-base  py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
                                 initial={{ opacity: 0, x: 100 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 viewport={{ once: true, amount: 0.1 }}
                                 transition={{ duration: 1.5, ease: "easeInOut" }}
                                 disabled={status.loading}
                               >
                                 <span className="block h-[1.5em] sm:h-[1.2em] overflow-hidden">
                                   {/* First layer */}
                                   <span className=" block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                   Login  • 
                                   </span>
                                   {/* Second layer */}
                                   <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                   Login • 
                                   </span>
                                 </span>
                               </motion.button>
      </form>
    </div>
    
    </>
  );
}
