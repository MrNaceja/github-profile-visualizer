<div align='center'>
 
![Magazord](src/assets/logo-magazord.png)
 
 </div>

# Teste para vaga de front-end no Magazord.com.br
Este repositório tem como fim testar os candidatos para vaga de front-end developer na empresa [Magazord](https://magazord.com.br).
> Para esta vaga buscamos alguém apaixonado por HTML, CSS, JavaScript e atento aos detalhes!

__________

# Desenvolvimento

#### Ferramentas utilizadas
> * Vite (Arquitetura da aplicação)
> * React JS (Framework de desenvolvimento)
> * Typescript (Linguagem de desenvolvimento)
> * Styled-Components (Biblioteca de estilização)
> * Radix UI (Biblioteca de componentes pré contruídos)
> Utilizado estruturação de pastas prezando componentização organizada relevantes a cada contexto
> Realizado documentação nos programas

___________

#### Resumo do que foi feito

1 Recriado interface conforme [Layout Figma](https://www.figma.com/file/sf1CmqcEZbUzkeZOA4AUGj/TESTE-FRONT-MAGAZORD?node-id=0%3A1)
    1.1. Desenvolvido algumas adaptações na interface
    1.2. Desenvolvido responsividade
    1.3. Adicionado novas features
2. Desafio opcional
    2.1. Criado API para busca dos dados do usuário dinamicamente conforme o mesmo fornecido pelo contexto
    2.2. Desenvolvido sistema de pesquisa através do componente de barra de pesquisa
    2.3. Desenvolvido sistema de filtragem através do componente de filtros
    2.4. Ao clicar no repositório será redirecionado para o repositório no github
3. Novas features
    3.1. Desenvolvido tela de carregamento
    3.2. API dinâmica
    3.3. Desenvolvido animações
    3.4. Hint na visualização dos repositórios apresentando a quantidade dos mesmos

________

## Instruções Básicas

1. Rodar o projeto
    1.1. Baixar/clonar projeto do github
    1.2. Rodar comando _npm install_ para instalar as dependências necessárias
    1.3. Rodar _npm run dev_
O projeto estará rodando, note que mesmo estará com meu perfil configurado para busca das informações.
Para ver outro perfil refletido na interface, acesse _[Alterar Usuário do perfil](src/contexts/ContextUserGithubProvider/Interfaces/user.ts)_ e mude o valor da constante USER_PROFILE_TO_INTERFACE (seguindo a orientação presente na mesma)

___________

## Nota de desenvolvimento

Os Filtros de Tipo (Type) só estão presentes na interface mas não possuem comportamento, apenas os de linguagens possui.

