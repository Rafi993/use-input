'use strict';

var react = require('react');

var useInput = function (initialValue) {
    var _a = react.useState(initialValue), value = _a[0], setValue = _a[1];
    var handleChange = react.useCallback(function (event) {
        setValue(event.target.value);
    }, [setValue]);
    return { value: value, handleChange: handleChange, setValue: setValue };
};

module.exports = useInput;
