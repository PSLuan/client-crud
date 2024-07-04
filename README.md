Observações:

No arquivo jwt.strategy.ts, no lugar de secretOrKey (linha 11), é necessário gerar uma key local através do seguinte comando: openssl rand -base64 64 (linux). (A mesma key deve ser utilizada em secretKey no arquivo generate-jwt.js (linha 3) e no auth.module.ts (linha 10)).

Para gerar o jwt que será utilizado na autenticação dos serviços, é necessário executar o seguinte comando no diretório .src/ : node generate-jwt.js (com isso será apresentado um token jwt no terminal, e esse jwt será utilizado nas requisições como forma de autenticação).

Exemplo de build e start do projeto:

1 - npm run build

2 - npm run start

3 - cd src/ && node generate-jwt.js (ctrl + c no jwt apresentado no terminal)

4 - requisição: 

curl -X POST http://localhost:3000/clients \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcyMDA0MDk2MywiZXhwIjoxNzIwMDQ0NTYzfQ.oSdP2LFbM0GEIZ4_2XoGGjvf_KnzrjqRNP3huChwhj4" \
-H "Content-Type: application/json" \
-d '{
  "name": "Carlos Roberto",
  "address": "Rua Augusta, 123 - SP",
  "phoneNumber": "11 91234-5678"
}'
