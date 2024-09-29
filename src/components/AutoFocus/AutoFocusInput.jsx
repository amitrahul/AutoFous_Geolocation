import { useEffect, useRef } from "react";

export const AutoFocusInput = () => {
  const refInput = useRef(null);
  /* 
    calling refInput.current?.focus() inside useEffect beacuse
    on payload we can give autofocus on input elemet.
    through ref we can directly access the dom elemet 
    and takes the control of it.
    */
  useEffect(() => {
    refInput.current?.focus();
  }, []);

  return (
    <>
      <input
        type="text"
        name="firstName"
        placeholder="FirstName"
        ref={refInput}
      />
    </>
  );
};
