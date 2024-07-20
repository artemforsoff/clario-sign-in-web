export const lib = {
    getColor: (color: 'success' | 'error' | 'disabled', opacity = 1) => {
        if (opacity < 0 || opacity > 1) {
            throw new Error('Opacity must be between 0 and 1');
        }
        return `rgba(var(--${color}-color), ${opacity})`;
    },
    isHasAllRegisters: (str = '') => {
        const hasUppercase = /[A-Z]/.test(str);
        const hasLowercase = /[a-z]/.test(str);
        return hasUppercase && hasLowercase;
    },
    isHasOneDigit: (str = '') => /[0-9]/.test(str),
};
