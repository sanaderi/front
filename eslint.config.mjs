import { createConfigForNuxt } from "@nuxt/eslint-config";

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
})
  .override("nuxt/rules", {
    rules: {
      "nuxt/nuxt-config-keys-order": "off",
    },
  })
  .override("nuxt/stylistic", {
    rules: {
      "@stylistic/quotes": "off",
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/semi": "off",
      "@stylistic/max-statements-per-line": "off",
      "@stylistic/indent": "off",
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/brace-style": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/quote-props": "off",
    },
  })
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/unified-signatures": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "nuxt/nuxt-config-keys-order": "off",
    },
  })
  .override("nuxt/rules", {
    rules: {
      "no-unused-vars": "off",
      "vue/multi-word-component-names": "off",
      "vue/require-prop-types": "off",
      "vue/no-unused-components": "off",
      "vue/no-unused-vars": "off",
      "vue/no-v-html": "off",
      "vue/no-v-text-v-html-on-component": "off",
      "vue/no-v-text-v-html-on-component": "off",
      "vue/valid-v-slot": "off",
      "no-empty": "off",
      "no-undef": "off",
      "vue/no-template-shadow": "off",
      "no-useless-catch": "off",
      "no-useless-escape": "off",
      "vue/no-duplicate-attributes": "off",
      "vue/no-side-effects-in-computed-properties": "off",
      "vue/no-use-v-if-with-v-for": "off",
      "vue/no-mutating-props": "off",
      "vue/require-prop-type-constructor": "off",
      "vue/require-explicit-emits": "off",
      "no-unsafe-optional-chaining": "off",
      "vue/valid-v-for": "off",
      "vue/no-multiple-template-root": "off",
      "vue/require-v-for-key": "off",
      "vue/require-valid-default-prop": "off",
      "no-constant-condition": "off",
      "import/no-duplicates": "off",
      "vue/no-deprecated-dollar-listeners-api": "off",
      "vue/prop-name-casin": "off",
      "no-dupe-keys": "off",
      "vue/prop-name-casing": "off",
      "vue/valid-v-else": "off",
      "vue/no-reserved-component-names": "off",
      "vue/valid-template-root": "off",
      "vue/no-lone-template": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/attributes-order": "off",
      "vue/html-quotes": "off",
      "vue/html-indent": "off",
      "vue/html-self-closing": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-closing-bracket-spacing": "off",
    },
  });
