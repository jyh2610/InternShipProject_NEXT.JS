function FindInput({ name, classData, setName, stateName }: { name: string; classData: string; setName: Function; stateName: string }) {
  const inputHandler = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  return (
    <form className={`${classData} findinput`}>
      <label htmlFor={name}>{name}</label>
      <input onChange={inputHandler} type="text" id="Name" name={stateName} />
    </form>
  );
}

export default FindInput;
