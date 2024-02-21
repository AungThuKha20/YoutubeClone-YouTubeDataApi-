import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const handleOpen = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, handleOpen, setCategory, category }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
export default SidebarProvider;
