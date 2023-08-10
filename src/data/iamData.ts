export const mainTitle = 'Software';
export const roles = ['Engineer', 'Architect', 'Designer'];
export const delay = 1500;
export const speed = 10;

export const sequence = roles.reduce((sequence: any[], role) => {
    return [...sequence, role, delay];
}, []);
