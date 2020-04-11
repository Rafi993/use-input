import { useState, useCallback } from 'react';

var useInput = function (initialValue) {
    var _a = useState(initialValue), value = _a[0], setValue = _a[1];
    var handleChange = useCallback(function (event) {
        setValue(event.target.value);
    }, [setValue]);
    return { value: value, handleChange: handleChange, setValue: setValue };
};

export default useInput;
