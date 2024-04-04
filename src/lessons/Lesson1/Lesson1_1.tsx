import { ChangeEvent, useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState("Shincode")
  console.log("rendering")

  const handleClick = () => {
    setAge(preAge => preAge + 1);
    setAge(preAge => preAge + 1);
    setAge(preAge => preAge + 1);
    console.log(name)
  }

  return (
    <div>
      <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
      <button className="border p-2 rounded-md bg-red-100" onClick={handleClick}>Add Age</button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
