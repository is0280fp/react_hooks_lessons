import { useState } from "react";
import { useFetchUser } from "./useFetchUser";

const Lesson2_3 = () => {
  const [userId, setUserId] = useState<number>(1);
  const { user, loading } = useFetchUser(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>ユーザー情報が見つかりません。</div>;
  }

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(parseInt(e.target.value))
  }

  return (
    <div>
      <h1>ユーザー情報</h1>
      <select onChange={handleClick}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>
        <strong>名前:</strong> {user.name}
      </p>
      <p>
        <strong>ユーザー名:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>都市:</strong> {user.address.city}
      </p>
    </div>
  );
};

export default Lesson2_3;
