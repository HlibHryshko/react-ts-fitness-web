import { useState } from "react";
const useToggledMenu = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisibility((previousValue: boolean) => !previousValue);
  };

  const makeMenuVisible = () => {
    setMenuVisibility(true);
  };

  const makeMenuInvisible = () => {
    setMenuVisibility(false);
  };

  return {
    isMenuVisible,
    toggleMenuVisibility,
    makeMenuVisible,
    makeMenuInvisible,
  };
};

export default useToggledMenu;
