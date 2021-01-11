export function calculateTotal(items) {
  return items.reduce((accumulator, current) => accumulator + current.price, 0);
}
