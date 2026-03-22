import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // Point to your NestJS GraphQL schema (introspection endpoint or schema file)
  schema: process.env.GRAPHQL_URL ?? "http://localhost:3000/graphql",

  // All .graphql files per module
  documents: ["src/modules/**/*.graphql"],

  generates: {
    // 1. TypeScript types + typed document nodes (used by both server fetch & Apollo)
    "src/gql/": {
      preset: "client",
      presetConfig: {
        // Fragment masking: import fragments explicitly for composability
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      config: {
        // Generate scalars mapping for common NestJS types
        scalars: {
          DateTime: "string",
          JSON: "Record<string, unknown>",
          Upload: "File",
        },
        strictScalars: true,
        enumsAsTypes: true,
        // Use const enums for tree-shaking
        useTypeImports: true,
      },
    },
  },

  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
