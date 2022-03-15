# Sistema de Chamados
Sistema de Chamados é um projeto web criado durante o curso "React Js do zero ao avançado na pratica" do Matheus Fraga (Sujeito Programador), disponível na plataforma Udemy. </br></br>
Para criação deste projeto, foi utilizada a linguagem JavaScript e sua biblioteca React.js. </br></br>
O projeto consiste em um sistema web que possui páginas de SignIn e SignUp, necessárias para acessar à página de Dashboard, que contém as informações dos chamados registrados, sendo possível visualizá-los mais detalhadamente ou editá-los, sendo armazenados/gerenciados pelo firebase. Além disso, possui outras 3 páginas: uma de cadastro de clientes, que estão relacionados diretamente ao chamado, outra de configurações de perfil, na qual pode-se editar dados do usuário como foto de perfil e nome, e a ultima de criação de chamados, na qual tem-se as opções de selecionar cliente, com base nos clientes já cadastrados, selecionar tipo de atendimento, status do atendimento (em aberto, em progresso ou atendido) e opcionalmente adicionar uma descrição do chamado. </br></br>
Durante seu desenvolvimento foi possível praticar as react hooks como useState, useEffect, useContext(Context Api), bem como useHistory, useParams e gerenciamento de rotas do react-router-dom. </br></br>
Além disso, foi utilizado o firebase para armazenamento/gerenciamento dos dados.

## Visualização do Projeto (hosting local):
#### Página inicial (login):
![image](https://user-images.githubusercontent.com/80121288/157976128-49ca86ff-460a-4745-b92c-52f58f962eff.png) </br></br>
#### Página de cadastro (pode ser acessada ao clicar em "criar uma conta" na página de login)
![image](https://user-images.githubusercontent.com/80121288/157976383-80b2a513-7703-4f26-a522-beac2657b1e1.png)
</br></br>
Realizando login:
![image](https://user-images.githubusercontent.com/80121288/157976196-99254f18-a968-472f-93cc-816744ac7162.png) </br></br>
![image](https://user-images.githubusercontent.com/80121288/157976489-0d6f10b8-b5f9-469f-8454-175ab932efb3.png) </br></br>
#### Página de dashboard (rota privada, só pode ser acessada se logado):
As informações da dashboard são carregadas de forma assíncrona, realizando a conexão com o firebase e carregando os dados solicitados ao banco:
![image](https://user-images.githubusercontent.com/80121288/157976815-34dcd678-604e-4f98-bae6-b636d280114e.png)</br></br>
Caso não ainda não haja nenhum chamado registrado, exibe a seguinte tela:
![image](https://user-images.githubusercontent.com/80121288/157977935-554eb783-e17c-438e-a6ac-a2c9a30e3948.png) </br></br>
Caso existam chamados, após serem carregadas, são exibidos:
![image](https://user-images.githubusercontent.com/80121288/157976610-faba31bb-fc74-4d83-a2be-35b4500d0539.png) </br></br>
Os chamados são carregados de 5 em 5. Ao clicar no botão "buscar mais" novos chamados são carregados:
![image](https://user-images.githubusercontent.com/80121288/157978690-1353d6bd-019f-430e-9fa5-3174dabcdeb6.png) </br></br>
![image](https://user-images.githubusercontent.com/80121288/157978780-34d20a48-2e30-40d1-a1c6-061ff6e56ffc.png) </br></br>
Caso não hajam mais chamados a serem carregados após o último clique no botão, ele deixa de ser exibido:
![image](https://user-images.githubusercontent.com/80121288/157979011-9223f40e-6376-4689-b25b-70b8d06e5d81.png) </br></br>
Pode-se registrar um novo chamado ao clicar no botão "novo chamado", redirecionando para a rota "/new":
![image](https://user-images.githubusercontent.com/80121288/157979220-559ceaaa-cf7a-4ec7-9e42-88f524775c2e.png) </br></br>
Criando novo chamado:
![image](https://user-images.githubusercontent.com/80121288/157979552-cc0458e6-9406-41d5-978e-188aa89cc6f0.png) </br></br>
![image](https://user-images.githubusercontent.com/80121288/157979730-d9a82763-bdbc-4e37-ae23-d0927ff03015.png) </br></br>
O último chamado registrado aparecerá no topo da lista na dashboard:
![image](https://user-images.githubusercontent.com/80121288/157979935-0cf011f5-1d2e-4944-a977-1867ece10606.png) </br></br>
Sendo possível visualizá-lo clicando na lupa correspondente ao chamado:
![image](https://user-images.githubusercontent.com/80121288/157979996-4602dd4b-c492-4c33-838a-b68da6b2433c.png) </br></br>
É possível também editá-lo clicando no botão de edit correspondente:
![image](https://user-images.githubusercontent.com/80121288/157980091-ab14bc13-3b03-4ac4-9304-f0a9d63b9626.png) </br></br>
Editando o chamado:
![image](https://user-images.githubusercontent.com/80121288/157980253-2bd7065f-1837-4a0f-90bb-f27238fe10b2.png) </br></br>
Ao editá-lo, é redirecionado para a dashboard e é possível visualizar que o chamado foi atualizado:
![image](https://user-images.githubusercontent.com/80121288/157980334-775e6974-323a-4612-add9-ef9b522c61ec.png) </br></br>
#### Página de Clientes (acesso ao clicar no menu clientes na navegação lateral):
Aqui pode-se cadastrar novos clientes que aparecerão na página de registro de chamados e poderão ser associados a um ou mais chamados:
![image](https://user-images.githubusercontent.com/80121288/157980404-959b745c-d212-415b-a284-791b639141b2.png) </br></br>
![image](https://user-images.githubusercontent.com/80121288/157980963-8b1e66af-9017-4be7-92e2-728830dca71d.png) </br></br>
![image](https://user-images.githubusercontent.com/80121288/157981059-98e0a4ff-951f-4567-8e27-63bcb06d951d.png) </br></br>
#### Página de configurações (menu configurações):
Nessa página é possível alterar dados do usuário como a foto de perfil e o nome, mas o email é bloqueado para alterações
Ao clicar em "Sair" é realizado o logout da conta
![image](https://user-images.githubusercontent.com/80121288/157981253-fb3afce6-ebc7-4932-9e6f-7559b5315c72.png) </br></br>
</br></br>
Este é um projeto de código aberto (open-source), você pode estar realizando o git clone do projeto para utilizá-lo em seu repositório local </br> OBS.: este projeto está vinculado à uma api do firebase, cujos dados foram encapsulados no processo de postagem do git (gitignore). Para utilizá-lo corretamente, sem alterações no código, faz-se necessária a criação de um projeto no firebase para então associar os dados da sua api ao projeto. </br>
Para associar os dados da api ao projeto, basta criar um arquivo .env na raiz do projeto e criar as variáveis de ambiente de acordo com os nomes das respectivas variáveis do arquivo firebaseConnection.js</br>
![image](https://user-images.githubusercontent.com/80121288/157984131-c063e88b-8515-4685-8d5f-e038c958f787.png) </br></br>
Para mais informações sobre como criar e utilizar variáveis de ambiente react, você pode estar acessando:
<a href="https://backefront.com.br/como-criar-variavel-ambiente-react/#:~:text=Para%20come%C3%A7ar%2C%20devemos%20criar%20um,env%20.&text=Agora%20quando%20rodarmos%20nosso%20projeto,%C3%A9%20necess%C3%A1rio%20reiniciar%20a%20aplica%C3%A7%C3%A3o!">Clique aqui</a>
