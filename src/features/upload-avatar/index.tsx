import { useEffect, useState } from "react";
import { mokkyApi } from "../../shared/api/baseUrl";
import { userStore } from "../../shared/store/auth/user-store";
import { observer } from "mobx-react-lite";

export const UploadAvatar = observer(() => {
  const [preview, setPreview] = useState<string>("");
  const [avatar, setAvatar] = useState<File | null>(null);

  // половину кода сгенерила нейронка по изменению/добавлению авы потому что мне было лень,
  // (себе будущему) чел если тебе не похуй на свой скилл я тя прошу сделай это нормально сука 

  useEffect(() => {
    if (userStore.user?.avatar) {
      setPreview(userStore.user.avatar);
    }
  }, [userStore.user?.avatar]);

  const handleAvatarClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        setAvatar(file);
        setPreview(URL.createObjectURL(file));
      }
    };
    input.click();
  };

  const uploadIcon = async () => {
    if (!avatar) return;

    try {
      const formData = new FormData();
      formData.append("file", avatar);

      const uploadResponse = await mokkyApi.post("/uploads", formData, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (uploadResponse.data.url && userStore.user) {
        userStore.setIcon(uploadResponse.data.url);
        setPreview(uploadResponse.data.url);
        setAvatar(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-black cursor-pointer hover:opacity-90 transition-opacity"
        onClick={handleAvatarClick}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : userStore.user?.avatar ? (
          <img
            src={userStore.user.avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Нет фото</span>
          </div>
        )}
      </div>

      {avatar && (
        <button
          onClick={uploadIcon}
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Сохранить
        </button>
      )}
    </div>
  );
});
