  // const [avatar, setAvatar] = useState<File | null>(null);

  // const [preview, setPreview] = useState<string>("");

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsAuth(true);
  //     navigate("/main");
  //   }
  // }, [navigate]);

  // const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     setAvatar(file);
  //     setPreview(URL.createObjectURL(file));
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     let avatarUrl = "";
  //     if (avatar) {
  //       const formData = new FormData();
  //       formData.append("file", avatar);

  //       const uploadResponse = await axios.post(
  //         "https://d6a55f81178c55c0.mokky.dev/uploads",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //       avatarUrl = uploadResponse.data.url;
  //     }

  //     const response = await axios.post(
  //       "https://d6a55f81178c55c0.mokky.dev/register",
  //       {
  //         email,
  //         password,
  //         fullName: user,
  //         avatarUrl,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.data && response.data.token) {
  //       localStorage.setItem("token", response.data.token);
  //       localStorage.setItem("userEmail", email);

  //       const userResponse = await axios.get(
          // "https://d6a55f81178c55c0.mokky.dev/users/me",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${response.data.token}`,
  //           },
  //         }
  //       );

  //       if (userResponse.data) {
  //         localStorage.setItem("userName", userResponse.data.fullName);
  //         if (userResponse.data.avatarUrl) {
  //           localStorage.setItem("userAvatar", userResponse.data.avatarUrl);
  //         }
  //       }

  //       setIsAuth(true);
  //       navigate("/main");
  //     }
  //   } catch (error: any) {
  //     console.error("Ошибка регистрации:", error);
  //     if (error.response) {
  //       alert(`Ошибка: ${error.response.data.message || "Неизвестная ошибка"}`);
  //     }
  //   }
  // };

  // if (isAuth) {
  //   return (
  //     <div className="text-center bg-black/40 p-8 rounded-lg backdrop-blur-md border border-purple-500/20 shadow-2xl">
  //       <h1 className="text-2xl font-bold text-purple-300 mb-6">
  //         Спасибо за регистрацию!
  //       </h1>
  //       <Link to="/">
  //         <button
  //           onClick={() => {
  //             localStorage.removeItem("token");
  //             setIsAuth(false);
  //           }}
  //           className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
  //         >
  //           Выйти
  //         </button>
  //       </Link>
  //     </div>
  //   );
  // }