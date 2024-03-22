export function getUiD(allIds: number[]): number {
  let id = 1;
  while (allIds.includes(id)) {
    id += 1
  }
  return id;
}
