import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-5">
      <h1 className="mb-2 text-3xl font-bold">
        Signin to your <br />
        PopX account
      </h1>

      <p className="mb-6 text-xl text-gray-500">
        Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
      </p>

      <div className="relative mb-4">
        <label className="text-sm ml-3 absolute -top-3  bg-gray-100 px-1 text-violet-600">Email Address</label>
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="mb-2 w-full rounded-lg border-2 border-gray-200 p-2"
          placeholder="Enter email address"
        />
      </div>
      <div className="relative mb-3">
        <label className="text-sm absolute ml-3 -top-3 bg-gray-100 text-violet-600">Password</label>
        <input
          type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="mb-1 w-full rounded-lg  border-2 border-gray-200 p-2"
          placeholder="Enter password"
        />
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="w-full rounded-lg hover:cursor-pointer bg-gray-300 py-2 font-medium text-xl text-white"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
