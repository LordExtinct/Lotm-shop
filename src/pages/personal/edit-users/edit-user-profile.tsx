import { observer } from "mobx-react-lite";
import { userStore } from "../../../shared/store/auth/user-store";
import { mokkyApi } from "../../../shared/api/baseUrl";

export const EditUser = observer(() => {
  const { user, UpdateNickName, UpdatedEmail } = userStore;

  const handleChangeName = (e: any) => {
    UpdateNickName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    UpdatedEmail(e.target.value);
  };

  const UpdateDataUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updateData = {
        name: user?.name,
        email: user?.email,
      };
      const res = await mokkyApi.patch("/users", ...[updateData], {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      // setUserUpdate(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <p>Изменить</p>
        <div>
          <form onSubmit={UpdateDataUser}></form>
          <input
            className="border-b-black"
            type="text"
            value={user?.name}
            onChange={handleChangeName}
          />
          <input
            className="border-b-black"
            type="text"
            value={user?.email}
            onChange={handleChangeEmail}
          />
          <button
            onClick={UpdateDataUser}
            className="px-4 ml-5 mt-3 py-1 bg-pink-600 text-stone-200 rounded-lg hover:bg-pink-800 transition-colors cursor-pointer"
            type="submit"
          >
            обновить данные
          </button>
        </div>

        <p className="text-red-600">
          Внимание, страница не работает, потому что делая запрос на измения на
          прямую в ендпоинт вся бд летит в мусор, так что в любой не понятной
          ситуации нужно винить только бэк.
        </p>
      </div>
    </>
  );
});
