export const COUNTER_INCREMENT = 'INCREMENT';
export const TEXT_INSERT = 'INSERT';
export const TEXT_RESET = 'RESET';

export function incrementBy(number) {
 return { type: COUNTER_INCREMENT, val: number };
}
export function insert(name) {
    // console.log(`action add: ${name}`);
    return { type: TEXT_INSERT, val: name };
   }

export function del() {
    // console.log(`action reset`);
    return { type: TEXT_RESET};
   }