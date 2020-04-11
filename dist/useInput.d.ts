/// <reference types="react" />
declare const useInput: (initialValue: any) => {
    value: any;
    handleChange: (event: any) => void;
    setValue: import("react").Dispatch<any>;
};
export default useInput;
