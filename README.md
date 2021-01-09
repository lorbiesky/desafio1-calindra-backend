## Desafio

A ideia do desafio é simples, entender como você pensa na hora de abordar os
problemas. Nas linguagens e tecnologias que se sentir mais confortável.

Criar uma API Rest que:

1. Receba dois ou mais endereços (ex: ​Av. Rio Branco, 1 ​ Centro, Rio de Janeiro ​ RJ,
   20090​003; Praça Mal. Âncora, 122 ​ Centro, Rio de Janeiro ​ RJ, 20021​200; Rua 19 de
   Fevereiro, 34 ​ Botafogo, Rio de Janeiro ​ RJ, 22280​030 ​) como parâmetros de entrada.

2. Resolva a geolocalização entre os endereços utilizando a API do Google
   https://developers.google.com/maps/documentation/geocoding/start

3. Após isso, com a latitude e longitude em mãos dos endereços, implementar o algoritmo de
   cálculo de distância Euclidiana e aplicar em todas as combinações de endereços.

4. Retorne as distâncias calculadas entre os todos os endereços e indique os endereços
   mais próximos e também os endereços mais distantes.

## Rodando aplicação

Após clonar o projeto, é preciso instalar todas as dependências com o comando:

```bash
npm install
```

Dentro da pasta do projeto, execute o seguinte comando para iniciar o app:

```bash
npm start
```

## Observação

```bash
  Para o teste da aplicação é necessário ter uma ferramenta para execução de requisições HTTP como o Postman: https://www.postman.com/downloads/
```

Com o Postman aberto, faça uma requisição do tipo GET no endereço http://localhost:3001/geocoding contendo no body um JSON como no exemplo a seguir:

```bash
  "addresses": ["Rua adelina leal, 358, Itaborai, RJ", "Rua alcedino rodrigues de oliveira, Ampliação, Itaboraí, RJ"]
```
