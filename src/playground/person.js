const isAdult = x => x >= 18;
const canDrink = x => x >= 21;
const isSenior = x => x >= 65;

export {
    isAdult,
    canDrink,
    isSenior as default
}