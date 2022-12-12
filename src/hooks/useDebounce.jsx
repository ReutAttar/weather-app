const useDebounce = (fn, delay = 250) => {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export default useDebounce;

