##☕ StarCafé API
Bem-vindo à StarCafé API, um sistema desenvolvido para gerenciar pedidos e o cardápio de uma cafeteria. Esta API permite que clientes façam pedidos e que a administração gerencie o estoque de produtos.


##Formato MVC
src/
├── controllers/
│   ├── cafeController.js
├── models/
│   ├── cafe.js
│   ├── listaCafes.js
├── routes/
│   ├── cafeRoutes.js
├── server.js
├── .env
├── package.json
├── README.md

- Models: Define as classes e lógica de dados.
- Controllers: Contém as funções que lidam com as requisições e respostas.
- Routes: Gerencia as rotas da API.
- Respostas

##📖 Endpoints
# - GET/menu - retorna o cardápio da cafeteria
cabeçalhos:
Respostas

# - POST/order - Permite que um cliente faça um pedido
Cabeçalhos:
Corpo da requisição:
Respostas

# - GET /order/:id - Consulta o status de um pedido.
Cabeçalhos:
Respostas:

# - DELETE /order/:id - Cancela um pedido (caso ainda não tenha sido preparado).
Cabeçalhos:
Respostas:
