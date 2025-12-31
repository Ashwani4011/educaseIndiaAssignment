import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [agency, setAgency] = useState("yes");


  return (
    <div className="p-4">
      <h1 className="mb-6 text-3xl font-bold">
        Create your <br />PopX account
      </h1>
      <div className="mb-5 relative">
        <label className="text-sm ml-3 absolute -top-3  bg-gray-100 px-1 text-purple-500">
          Full Name<span className="text-red-600">*</span>
        </label>
        <input value={name} onChange={(e) => setName(e.target.value)}
          className="w-full placeholder:text-black rounded-lg border-2 text-black border-gray-200 p-2" placeholder="Marry Doe" />
      </div>
      <div className="mb-5 relative">
        <label className="text-sm ml-3 absolute -top-3  bg-gray-100 px-1 text-purple-500">
          Phone Number<span className="text-red-600">*</span>
        </label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)}
          className="w-full placeholder:text-black rounded-lg border-2 text-black border-gray-200 p-2" placeholder="Marry Doe" />
      </div>
      <div className="mb-5 relative">
        <label className="text-sm ml-3 absolute -top-3  bg-gray-100 px-1 text-purple-500">
          Email Address<span className="text-red-600">*</span>
        </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full placeholder:text-black rounded-lg border-2 text-black border-gray-200 p-2" placeholder="Marry Doe" />
      </div>
      <div className="mb-5 relative">
        <label className="text-sm ml-3 absolute -top-3  bg-gray-100 px-1 text-purple-500">
          Password<span className="text-red-600">*</span>
        </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full placeholder:text-black rounded-lg border-2 text-black border-gray-200 p-2" placeholder="Marry Doe" />
      </div>
      <div className="mb-5 relative">
        <label className="text-sm ml-3 absolute -top-3  bg-gray-100 px-1 text-purple-500">
          Company Name<span className="text-red-600">*</span>
        </label>
        <input value={companyname} onChange={(e) => setCompanyname(e.target.value)}
          className="w-full placeholder:text-black rounded-lg border-2 text-black border-gray-200 p-2" placeholder="Marry Doe" />
      </div>

      <span className="mb-2 text-sm">Are you an Agency?</span><span className="text-red-600">*</span>

      <div className="mb-2 flex gap-3">
        <label className="flex items-center gap-2">
          <input type="radio" value="yes" checked={agency === "yes"}
            onChange={() => setAgency("yes")} /> Yes
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" value="no" checked={agency === "no"}
            onChange={() => setAgency("no")} /> No
        </label>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="w-full mt-40 mb-5 hover:cursor-pointer rounded-lg bg-violet-700 py-2 font-semibold text-white"
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
