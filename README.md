# Sistema de Reembolso (Refund App)

<p align="center" dir="auto">
  <img alt="Projeto 01" src=".github/refund-1.jpg" style="max-width: 100%;"></a>
</p>


## 💻 Descrição

Desenvolvi um projeto fullstack de reembolsos, com foco em autenticação, controle de acesso por roles e integração completa entre front-end e back-end.
A aplicação conta com cadastro e login, dividindo os usuários em dois perfis:
<br />--> Employee: pode se autenticar e cadastrar pedidos de reembolso em diferentes categorias (alimentação, transporte, hospedagem e outros), enviando os detalhes e o comprovante de pagamento.
<br/>--> Manager: pode se autenticar e visualizar todos os pedidos através de um dashboard, acessar os detalhes de cada solicitação (nome do solicitante, descrição, categoria e comprovante) e tomar as medidas necessárias.

## 🛠 Tecnologias

🖥️ Front-end
- Construído com React, Vite e TypeScript, utilizando:
- React Router para roteamento e useParams para captura de parâmetros da URL
- Componentização e Context API com estados globais para controle da sessão logada
- Persistência de autenticação com localStorage
- Validação de formulários com Zod
- Estilização com Tailwind CSS, utilizando clsx e tailwind-merge para composição de classes
- Formatação de valores monetários com Intl.NumberFormat

A aplicação possui:
- 2 telas de autenticação (cadastro e login)
- 2 telas para o Employee (cadastro de reembolso e confirmação)
- 2 telas para o Manager (dashboard e detalhes do reembolso)
- 1 tela de Not Found (rota não encontrada)

Projeto que consolidou bastante meu aprendizado em React, TypeScript, autenticação, controle de acesso, validação de dados, integração fullstack e deploy em produção. 🚀

## 💛 Contato

vinibrunheroto12@gmail.com
