import { createAtom } from "@tanstack/store";

export type Data = { id: string; quantity: number };
export const data = createAtom<Data[]>([]);

export function addToData(item: Data) {
  data.set(() => {
    const newData = data.get();
    const matchingItem = newData.find((newData) => newData.id === item.id);
    if (matchingItem) {
      matchingItem.quantity = item.quantity;
    } else {
      newData.push(item);
    }
    return newData;
  });
}
