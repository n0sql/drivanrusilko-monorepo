const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    'no-console': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'camelcase': 'off',
    "@typescript-eslint/no-explicit-any":"off",
    "react/jsx-sort-props": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access":"off",
    "react/self-closing-comp":"off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-floating-promises":"off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "@typescript-eslint/naming-convention": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type":"off",
    "@next/next/no-html-link-for-pages": "off",
    "react/button-has-type":"off",
    "import/newline-after-import": "off",
    "import/no-named-as-default-member": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/no-array-index-key": "off",
    "import/order": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/consistent-type-imports":"off",
    "@typescript-eslint/no-unsafe-call":"off",
    "@typescript-eslint/no-unused-vars":"off",
    "unicorn/filename-case": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "no-alert": "off",
    "react/no-unknown-property":"off",
    "no-undef":"off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-var":"off",
    "@typescript-eslint/no-unnecessary-condition":"off",
    "import/no-duplicates":"off",
    "@typescript-eslint/no-unsafe-argument":"off",
    "@typescript-eslint/no-unsafe-return":"off",
    "@typescript-eslint/no-shadow":"off",
    "no-unneeded-ternary":"off",
    "@typescript-eslint/no-unnecessary-type-arguments":"off",
    "jsx-a11y/no-static-element-interactions":"off",
    "array-callback-return":"off",
    "@typescript-eslint/no-misused-promises":"off",
    "@typescript-eslint/no-non-null-assertion":"off",
    "@typescript-eslint/non-nullable-type-assertion-style":"off",
    "import/no-absolute-path":"off",
    "react/jsx-no-leaked-render": "off",
    "@next/next/no-sync-scripts":"off",
    "react/jsx-curly-brace-presence":"off",
    "react/hook-use-state":"off",
    "react-hooks/exhaustive-deps":"off",
    "object-shorthand":"off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/require-await": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "jsx-a11y/alt-text" : "off",
    "react/no-unescaped-entities": "off",
    "import/no-named-as-defaults": "off",

  },
};
