import { makeAutoObservable, runInAction } from "mobx";
import { mokkyApi } from "../../../api/baseUrl";

export type IUser = {
  id: number;
  name: string;
  email: string;
  token: string;
  avatar?: string;
};

class UserStore {
  user: IUser | null = null ;
  userChecked: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initUser();
  }

  private initUser = () => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (savedUser && token) {
      const parsedUser = JSON.parse(savedUser);
      this.user = parsedUser;
      this.getMe();
    }
  };

  setUser = (userData: IUser) => {
    this.user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
    if (userData.token) {
      localStorage.setItem("token", userData.token);
    }
  };

  setIcon = (avatarUrl: string) => {
    if (this.user) {
      const updatedUser = {
        ...this.user,
        avatar: avatarUrl,
      };
      this.user = updatedUser;
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  getMe = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await mokkyApi.get<IUser>("auth_me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      runInAction(() => {
        this.userChecked = res.data;
        const currentAvatar = this.user?.avatar;
        const updatedUser = {
          ...res.data,
          avatar: currentAvatar || res.data.avatar,
        };
        this.setUser(updatedUser);
      });
    } catch (e) {
      console.error(e);
    }
  };

  UpdateNickName = (newUser: string) => {
    if (this.user) return (this.user.name = newUser);
  };

  UpdatedEmail = (newEmail: string) => {
    if (this.user) return (this.user.email = newEmail);
  };

  // UpdateDataUser = async () => {
  //   try {
  //     const res = await mokkyApi.patch("/users");
  //     runInAction(() => {
  //       this.user = res.data;
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  logOut = () => {
    this.user = null;
    this.userChecked = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
}

export const userStore = new UserStore();
