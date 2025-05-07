import { UserAuthorization } from "./authorization-user/user-authorization";

export const UserAuth = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-blend-soft-light">
      <div className="min-h-screen backdrop-blur-sm flex items-center justify-center p-4">
        <UserAuthorization />
      </div>
    </div>
  );
};

