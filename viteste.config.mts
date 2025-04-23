import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [["src/http/controllers/**", "prisma"]],
    dir: "src",
    coverage: {
      provider: "v8",
      include: ["./tests"], // Adiciona o caminho dos testes
      all: false, // Garante que arquivos não testados apareçam no relatório
      reporter: ["text", "html", "lcov"],
    },
  },
});
