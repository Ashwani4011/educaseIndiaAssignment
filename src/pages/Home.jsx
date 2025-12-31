import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col justify-end p-6">
      <h1 className="mb-3 text-2xl font-bold">Welcome to PopX</h1>

      <p className="mb-6 pl-0 text-xl text-gray-500">
        Lorem ipsum dolor sit amet,<br /> 
        consectetur adipiscing elit.
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="mb-2 w-full rounded-lg hover:cursor-pointer bg-violet-600 py-3 font-medium text-white">
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="w-full mb-4 hover:cursor-pointer rounded-lg bg-purple-200 py-3 font-medium text-black"
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Home;
