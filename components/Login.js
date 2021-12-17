import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative ">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Papafam logo */}
        <Image
          className="object-cover rounded-full animate-pulse"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uji9z--5PEJMIEDsvWw-9WDGD9L5hCzp-tOBYP9Zxq8ArE7vC6UBf268NOYgiNMIwwQ&usqp=CAU"
          width={200}
          height={200}
        />

        {/* Login button */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-bounce"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        {/* login form */}
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
