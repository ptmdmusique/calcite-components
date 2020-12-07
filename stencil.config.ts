import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import { angularOutputTarget, ValueAccessorConfig } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";
import { vueOutputTarget, ComponentModelConfig } from "@stencil/vue-output-target";
// import { svelteOutputTarget, ComponentBindingConfig } from "@stencil/svelte-output-target";
import { generatePreactTypes } from "./support/preact";

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  // {
  //   elementSelectors: ['my-input[type=text]'],
  //   event: 'myChange',
  //   targetAttr: 'value',
  //   type: 'text',
  // },
  // {
  //   elementSelectors: ['my-input[type=number]'],
  //   event: 'myChange',
  //   targetAttr: 'value',
  //   type: 'number',
  // },
  // {
  //   elementSelectors: ['my-checkbox'],
  //   event: 'myChange',
  //   targetAttr: 'checked',
  //   type: 'boolean',
  // },
  // {
  //   elementSelectors: ['my-radio'],
  //   event: 'mySelect',
  //   targetAttr: 'checked',
  //   type: 'radio',
  // },
  // {
  //   elementSelectors: ['my-range', 'my-radio-group'],
  //   event: 'myChange',
  //   targetAttr: 'value',
  //   type: 'select',
  // },
];

const vueComponentModels: ComponentModelConfig[] = [
  // {
  //   elements: ['my-input', 'my-range'],
  //   event: 'myChange',
  //   targetAttr: 'value',
  // },
  // {
  //   elements: ['my-checkbox'],
  //   event: 'myChange',
  //   targetAttr: 'checked',
  // },
  // {
  //   elements: ['my-radio'],
  //   event: 'mySelect',
  //   targetAttr: 'checked',
  // },
  // {
  //   elements: ['my-range', 'my-radio-group'],
  //   event: 'myChange',
  //   targetAttr: 'value',
  // },
];

// const svelteComponentBindings: ComponentBindingConfig[] = [
  // {
  //   elements: ['my-input', 'my-range'],
  //   event: 'myChange',
  //   targetProp: 'value',
  // },
  // {
  //   elements: ['my-checkbox'],
  //   event: 'myChange',
  //   targetProp: 'checked',
  // },
  // {
  //   elements: ['my-radio'],
  //   event: 'mySelect',
  //   targetProp: 'checked',
  // },
  // {
  //   elements: ['my-range', 'my-radio-group'],
  //   event: 'myChange',
  //   targetProp: 'value',
  // },
// ];


export const create: () => Config = () => ({
  buildEs5: "prod",
  namespace: "calcite",
  bundles: [
    { components: ["calcite-accordion", "calcite-accordion-item"] },
    {
      components: ["calcite-action", "calcite-action-group", "calcite-action-bar", "calcite-action-pad"]
    },
    { components: ["calcite-alert"] },
    { components: ["calcite-avatar"] },
    {
      components: ["calcite-block", "calcite-block-section"]
    },
    { components: ["calcite-button"] },
    { components: ["calcite-card"] },
    { components: ["calcite-chip"] },
    { components: ["calcite-color", "calcite-color-hex-input", "calcite-color-swatch"] },
    { components: ["calcite-combobox"] },
    {
      components: ["calcite-date", "calcite-date-month", "calcite-date-month-header", "calcite-date-day"]
    },
    {
      components: ["calcite-dropdown", "calcite-dropdown-group", "calcite-dropdown-item"]
    },
    { components: ["calcite-icon"] },
    { components: ["calcite-input"] },
    { components: ["calcite-input-message"] },
    { components: ["calcite-label"] },
    { components: ["calcite-link"] },
    { components: ["calcite-loader"] },
    { components: ["calcite-modal"] },
    { components: ["calcite-notice"] },
    { components: ["calcite-pagination"] },
    { components: ["calcite-fab"] },
    {
      components: ["calcite-panel", "calcite-flow"]
    },
    { components: ["calcite-popover", "calcite-popover-manager"] },
    { components: ["calcite-progress"] },
    { components: ["calcite-radio-group", "calcite-radio-group-item"] },
    { components: ["calcite-rating"] },
    { components: ["calcite-scrim"] },
    { components: ["calcite-select", "calcite-option", "calcite-option-group"] },
    {
      components: ["calcite-shell", "calcite-shell-panel"]
    },
    { components: ["calcite-slider"] },
    { components: ["calcite-stepper", "calcite-stepper-item"] },
    { components: ["calcite-switch"] },
    {
      components: ["calcite-tab", "calcite-tab-title", "calcite-tab-nav", "calcite-tabs"]
    },
    {
      components: ["calcite-tip", "calcite-tip-group", "calcite-tip-manager"]
    },
    { components: ["calcite-tooltip", "calcite-tooltip-manager"] },
    { components: ["calcite-tree", "calcite-tree-item"] }
  ],
  outputTargets: [
    { type: "dist-hydrate-script" },
    { type: "dist-custom-elements-bundle" },
    { type: "dist" },
    { type: "docs-readme" },
    { type: "custom", name: "preact", generator: generatePreactTypes },
    angularOutputTarget({
      componentCorePackage: "@esri/calcite-components",
      directivesProxyFile: "./frameworks/angular/src/directives/proxies.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: "@esri/calcite-components",
      proxiesFile: "./frameworks/react/src/components.ts",
    }),
    vueOutputTarget({
      componentCorePackage: "@esri/calcite-components",
      proxiesFile: "./frameworks/vue/src/proxies.ts",
      componentModels: vueComponentModels,
    }),
    // svelteOutputTarget({
    //   accessors: true,
    //   componentCorePackage: "@esri/calcite-components",
    //   proxiesFile: "../calcite-components-svelte/src/proxies.ts",
    //   componentBindings: svelteComponentBindings,
    // }),
    {
      type: "www",
      baseUrl: "https://stenciljs.com/",
      prerenderConfig: "./prerender.config.ts",
      copy: [
        { src: "demos", dest: "demos" },
        {
          src: "../node_modules/dedent/dist",
          dest: "vendor/dedent"
        }
      ],
      serviceWorker: {
        unregister: true
      }
    }
  ],
  globalStyle: "src/assets/styles/global.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/assets/styles/includes.scss"]
    }),
    postcss({
      plugins: [tailwind(), autoprefixer()]
    })
  ],
  testing: {
    moduleNameMapper: {
      "^/assets/(.*)$": "<rootDir>/src/tests/iconPathDataStub.ts"
    },
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"]
  },
  hydratedFlag: {
    selector: "attribute",
    name: "calcite-hydrated"
  },
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
    slotChildNodesFix: true
  }
});

export const config = create();
