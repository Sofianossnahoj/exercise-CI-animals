import { shallowMount } from "@vue/test-utils";
import SearchFilter from "@/components/SearchFilter.vue";

describe("SearchFilter.vue", () => {
  let wrapper, data;
  beforeEach(() => {
    data = [
      "cat",
      "dog",
      "parrot",
      "goldfish",
      "horse",
      "elephant",
      "ant",
      "snake",
      "crow",
      "cow",
      "eagle",
      "rhinoceros",
      "chimpanzee",
    ];
    wrapper = shallowMount(SearchFilter, {
      data: () => {
        return {
          animals: data,
        };
      },
    });
    data;
  });
  it("Should return all animals when query is empty string", () => {
    const animalsCount = wrapper.findAll("ul > li").length;

    expect(animalsCount).toBe(data.length);
  });

  it('Should return "god" and "goldfish" when query is "d"', async () => {
    const inputElem = wrapper.find("input");
    await inputElem.setValue("d");

    const filteredAnimals = wrapper.findAll("ul > li").wrappers;
    const hasDog = filteredAnimals.some((li) => li.text() === "dog");
    const hasGoldfish = filteredAnimals.some((li) => li.text() === "goldfish");

    expect(hasDog && hasGoldfish).toBe(true);
    expect(filteredAnimals.length).toBe(2);
  });

  it('Should return "crow" and "cow" when query is "ow"', async () => {
    const inputElem = wrapper.find("input");
    await inputElem.setValue("ow");

    const filteredAnimals = wrapper.findAll("ul > li").wrappers;
    const hasCrow = filteredAnimals.some((li) => li.text() === "crow");
    const hasCow = filteredAnimals.some((li) => li.text() === "cow");

    expect(hasCrow && hasCow).toBe(true);
    expect(filteredAnimals.length).toBe(2);
  });
});
