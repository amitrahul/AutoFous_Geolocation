import { AutoFocusInput } from "./AutoFocusInput";

const InputForm = () => {
  return (
    <>
      <h1>AutoFocus problem statement</h1>
      {/* using ref we can achieve the aautoFocus property. */}
      <AutoFocusInput />
      <input type="text" name="middleName" placeholder="middleName" />
      {/* 
        By using 'autoFocus' property in HTMl we can achieve autofous behaviour.
        here added ref property on 'AutoFocusInput' componenent then autofocus will 
        not work here.
      */}
      <input type="text" name="lastName" placeholder="lastname" autoFocus />

      <br />
      <button>submit</button>
    </>
  );
};

export default InputForm;
