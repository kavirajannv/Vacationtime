import { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  // 1️⃣ Initialize invisible reCAPTCHA
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container", // div id
        { size: "invisible" }, // invisible reCAPTCHA
        auth
      );
    }
  };

  // 2️⃣ Send OTP
  const sendOtp = async () => {
    if (!phone) return alert("Enter phone number");

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = phone.startsWith("+") ? phone : "+91" + phone; // Add country code

    try {
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent! Use Firebase test number on localhost for testing.");
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP: " + err.message);
    }
  };

  // 3️⃣ Verify OTP
  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("Phone login successful!");
      navigate("/"); // Redirect after login
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Phone Login</h2>

        {!confirmationResult && (
          <>
            <input
              type="text"
              placeholder="Phone number e.g. 9999999999"
              className="border w-full p-2 mb-3 rounded"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div id="recaptcha-container"></div>
            <button
              onClick={sendOtp}
              className="bg-blue-500 w-full py-2 text-white rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {confirmationResult && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="border w-full p-2 mb-3 rounded"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              className="bg-green-500 w-full py-2 text-white rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
