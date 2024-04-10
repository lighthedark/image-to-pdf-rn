import React, { useState } from 'react';

const buttonDebounce = (handler, delay = 300) => {
    const [disabled, setDisabled] = useState(false);

    const debouncedHandler = (...args) => {
        if (!disabled) {
            setDisabled(true);
            handler(...args);
            setTimeout(() => {
                setDisabled(false);
            }, delay);
        }
    };

    return [debouncedHandler, disabled];
};

export default buttonDebounce;