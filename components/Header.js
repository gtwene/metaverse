import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uji9z--5PEJMIEDsvWw-9WDGD9L5hCzp-tOBYP9Zxq8ArE7vC6UBf268NOYgiNMIwwQ&usqp=CAU"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            {/* Avatar */}
            <Avatar logoutOnPress />
          </div>

          {/* Welcome Message */}
          <h1 className="text-3xl">WelCome to the FAM</h1>

          {/* Username */}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          {/* Change username component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
