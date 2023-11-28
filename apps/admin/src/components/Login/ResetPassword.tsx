import { useState, useEffect } from "react";

const ResetPassword = ({ id }: { id: string }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch(`/api/auth/resetpassword/${id}`, {
      method: "POST",
      body: JSON.stringify({
        password,
      }),
    }).then((res) => {
      res.text().then((text) => {
        alert(text);
        if (text === "Password reset successful") {
          window.location.href = "/";
        }
      });
    });
  };

  return (
    <div className="mt-24">
      <form onSubmit={handleResetPassword} className="form">
        <h4 className="text-center  text-primary font-bold mb-5">Reset Your Password</h4>

        <div className="relative mb-5 text-center ">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            required
            aria-required="true"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-96  w-72 py-5 rounded-xl  sm:text-sm form-input "
          />
        </div>

        <div className="relative mb-7 text-center ">
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            required
            aria-required="true"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-96  w-72 py-5 rounded-xl  sm:text-sm form-input "
          />
        </div>

        <div className="mb-5 form-submit text-center">
          <input
            type="submit"
            className="btn bg-primary w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
            value="Reset Password"
          />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
