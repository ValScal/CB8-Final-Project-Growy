import styles from "@/styles/signup.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Signup() {
  const router = useRouter();
  const text = "Just few quick things to get started".split(" ");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push("/login");
    } else {
      const error = await response.json();
      alert("User already exists");
      console.error(error);
    }
  };

  return (
    <div className={styles.signup_wrapper}>
      <Image
        className={styles.logo}
        src="/logoColoured.png"
        alt="logo"
        width="200"
        height="170"
      />

      <div className={styles.title}>
        <h1>
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: i / 4,
              }}
              key={i}
              className={i === 5 || i === 6 ? styles.highlight : ""}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.text}>Username</label>
          <input
            className={styles.input}
            type="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className={styles.text}>E-mail</label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@mail.com"
          />
        </div>

        <div>
          <label className={styles.text}>Password</label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="••••••••••
            "
          />
        </div>

        <button className={styles.button_signup} _signtype="submit">
          Sign Up
        </button>
      </form>
      <div>
        <p className={styles.redirect}>Already have an account?</p>
        <button
          className={styles.button_login}
          type="submit"
          onClick={() => router.push("/login")}
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default Signup;
