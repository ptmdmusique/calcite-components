import { applyPolyfills, defineCustomElements } from "@esri/calcite-components/dist/loader";

export * from './components';
export const CalciteComponentsVue = {
  async install() {
      if (typeof window !== 'undefined') {
          await applyPolyfills();
          await defineCustomElements(window);
      }
  }
};
