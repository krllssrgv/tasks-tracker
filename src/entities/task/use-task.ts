export const useTask = (id: number) => {
  const handleMakeDone = () => {
    console.log(id);
  };

  const handleRemove = () => {
    console.log(id);
  };

  return {
    handleMakeDone,
    handleRemove,
  };
};
