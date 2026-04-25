import { beforeEach, describe, expect, it } from "vitest";
import dataJson from "./data.json" with { type: "json" };
import { addToData, data, type Data } from "./add.ts";
import fs from "node:fs";

beforeEach(() => {
  data.set(dataJson.slice(0, 2));
});

describe("push", () => {
  it("add a new item to sampleAtom", () => {
    addToData({ ...dataJson[0], quantity: 2 } as Data);
    expect(data.get()[0]?.quantity).toBe(2);
  });
  it("doesn't modify dataJson", () => {
    const realDataJson = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    expect(dataJson).toEqual(realDataJson);
  });
});
