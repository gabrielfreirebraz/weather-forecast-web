import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
  const API_ENDPOINT = `http://localhost:5149`;

  /*
    Carrega o ficheiro de variáveis de ambiente ("env")
    com base no modo (`mode`) no diretório de trabalho atual.
  */
  /*
    Define o terceiro parâmetro para ('')
    para carregar todas as variáveis de ambiente ("env")
    independentemente do prefixo `VITE_`.
  */
  const env = loadEnv(mode, process.cwd(), "");
  // process.env = {...process.env, ...loadEnv(mode, process.cwd(), '')};

  const vetor_env = Object.entries(env);

  /*
    Recriamos a propriedade "define" para receber os valores dotenv automaticamente do arquivo ".env", 
    isso evitará inserir cada variável de ambiente de forma manual sempre em dois lugares diferentes
  */
  const envFiles = {};
  for (const vetor of vetor_env) {
    envFiles[`process.env.${vetor[0]}`] = JSON.stringify(vetor[1]);
  }

  // Criar variável global para endpoint da api
  envFiles[`process.env.API_ENDPOINT`] =
    process.env.NODE_ENV === "production"
      ? JSON.stringify(`${API_ENDPOINT}`)
      : JSON.stringify(`${API_ENDPOINT}`);

  return {
    // configurações de vite
    define: envFiles,
    plugins: [react()],
  };
});
