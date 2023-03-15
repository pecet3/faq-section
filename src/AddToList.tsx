import React, { useState } from "react";

const AddToList: React.FC = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
  });

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    console.log(input);
  };

  return (
    <>
      <p>AddToList</p>
      <input
        type="text"
        name="name"
        onChange={onChangeInput}
        value={input.name}
        placeholder="podaj imie"
      />
      <input
        type="text"
        name="age"
        onChange={onChangeInput}
        value={input.age}
        placeholder="podaj wiek"
      />
      <textarea
        name="note"
        onChange={onChangeInput}
        value={input.note}
        placeholder="notatka"
      />
    </>
  );
};

export default AddToList;
