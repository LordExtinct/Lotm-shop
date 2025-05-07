import { observer } from "mobx-react-lite";
import { userStore } from "../../../shared/store/auth/user-store";
import { useEffect } from "react";
import { UploadAvatar } from "../../../features/upload-avatar";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

export const PersonInfo = observer(() => {
  const { userChecked, getMe, logOut } = userStore;

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <div className="">
        <div>
          <div className="w-full h-80 relative overflow-hidden rounded-b-2xl shadow-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              '
              <img
                className="w-full"
                src="https://i.ytimg.com/vi/K4vkn2tpzSE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCwgWShyMA8=&rs=AOn4CLDQ50e1gHgPt5ykusUtYCtUKbshWA"
                alt=""
              />
            </div>
          </div>
          <div className="flex ml-5 mt-4">
            <UploadAvatar />
            <div className="mt-5 ml-3">
              <span className="text-3xl font-bold">{userChecked?.name}</span>
              <span className="ml-4">ID: {userChecked?.id}</span>
              <div className="mt-1 font-sans">
                <span>{userChecked?.email}</span>
              </div>
              <Link to={"/edit"}>
                <IoMdSettings className="text-4xl" />
              </Link>
            </div>
          </div>

          <button
            onClick={logOut}
            className="px-4 ml-5 mt-3 py-1 bg-pink-600 text-stone-200 rounded-lg hover:bg-pink-800 transition-colors cursor-pointer"
          >
            Выйти
          </button>
        </div>
      </div>
    </>
  );
});
