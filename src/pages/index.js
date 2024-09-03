// import { useState } from "react";

import { useState } from "react";

// const Page = () => {
//   const [count, setCount] = useState(0);
//   const add = () => {
//     setCount(count + 1);
//   };
//   const minus = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => add()}> add</button>
//       <button onClick={() => minus()}>minus</button>
//     </div>
//   );
// };
// export default Page;
const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [editTask, setEditTask] = useState();

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const add = (value) => {
    if (inputValue === "") return;

    const id = Math.floor(Math.random() * 100);
    const newTask = {
      id: id,
      inputValue: inputValue,
    };
    setLists([...lists, newTask]);
    setInputValue("");
  };

  const del = (id) => {
    console.log(id);
    const newTask = lists.filter((task) => {
      return task.id !== id;
    });
    setLists(newTask);
  };
  const edit = () => {
    const input = document.createElement("input");
    const doneButton = document.createElement("button");
    doneButton.innerHTML = "done";
    doneButton.className = "delete";
    const edit = document.getElementsByClassName("edit")[0];
    edit.appendChild(input);
    edit.appendChild(doneButton);
    const editDone = () => {};
  };
  console.log(lists);
  return (
    <div className="container">
      <div>
        <input
          className="input"
          value={inputValue}
          placeholder="Task to be done..."
          onChange={(event) => handleInputValue(event.target.value)}
        />
        <button onClick={() => add()}>Add</button>
      </div>
      <div className="box">
        {lists.map((list, index) => {
          return (
            <div className="task" key={index}>
              {list.inputValue}
              <div>
                <button className="delete" onClick={() => del(list.id)}>
                  Del
                </button>
                <button className="delete" onClick={() => edit()}>
                  Edit
                </button>
                <button className="delete">Done</button>
                <div className="edit"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
