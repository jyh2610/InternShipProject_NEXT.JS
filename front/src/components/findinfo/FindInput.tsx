function FindInput({ name, classData }: { name: string; classData: string }) {
  return (
    <form className={`${classData} findinput`}>
      <label htmlFor={name}>{name}</label>
      <input type="text" id="Name" name={name} />
    </form>
  );
}

export default FindInput;
