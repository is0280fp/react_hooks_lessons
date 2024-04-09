import { RefObject, useRef } from "react";

const Lesson3_2 = () => {
  const listRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[index];

    imgNode?.scrollIntoView({
      behavior: "smooth",
      inline: "center"
    })
  };
  
  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Cat1</button>
        <button onClick={() => scrollToIndex(1)}>Cat2</button>
        <button onClick={() => scrollToIndex(2)}>Cat3</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "2000px", margin: "auto" }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
          ref={listRef}
        >
          <li>
            <img src="https://picsum.photos/id/237/200/300" alt="Cat 1" />
          </li>
          <li>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Cat 2" />
          </li>
          <li>
            <img src="https://picsum.photos/200/300?grayscale" alt="Cat 3" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;
