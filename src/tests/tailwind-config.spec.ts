import resolveConfig from "tailwindcss/resolveConfig";
import defaultConfigStub from "tailwindcss/stubs/defaultConfig.stub";

import tailwindConfig from "../../tailwind.config";
import tailwindConfigStub from "./tailwind-config.stub";

const fullConfig = resolveConfig(tailwindConfig);

describe("TailwindCSS config", () => {
  it("should include the right number of settings", () => {
    expect(Object.keys(fullConfig).length).toEqual(Object.keys(tailwindConfigStub).length);
  });

  it("should include some default values from Tailwind", () => {
    const defaults = ["target", "important", "presets", "purge", "prefix", "separator"];
    defaults.forEach((prop) => expect(fullConfig[prop]).toEqual(defaultConfigStub[prop]));
  });

  describe("customizations", () => {
    it("should match the stubbed theme", () => {
      expect(fullConfig.theme).toEqual(tailwindConfigStub.theme);
    });

    it("should include the right number of plugins for generating utilities", () => {
      fullConfig.plugins.forEach((plugin) => expect(plugin).toBeInstanceOf(Function));
      expect(fullConfig.plugins).toHaveLength(2);
    });

    it("should match remaining stubbed settings", () => {
      const customValues = ["future", "variants", "corePlugins"];
      customValues.forEach((prop) => expect(fullConfig[prop]).toEqual(tailwindConfigStub[prop]));
    });
  });
});
