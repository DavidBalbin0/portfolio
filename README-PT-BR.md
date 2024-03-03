# Meu Portfólio de Desenvolvimento
![GitHub License](https://img.shields.io/github/license/DavidBalbin0/portfolio)



Bem-vindo ao repositório do meu portfólio. Aqui você encontrará mais informações acerca dos meus projetos, apresentados de forma intuitiva e bem explicada.
Explore os projetos, descubra suas funcionalidades e conheça um pouco mais sobre mim e minha jornada no mundo do desenvolvimento.

## Tecnologias Utilizadas:

**TypeScript**: Escolhi TypeScript para o desenvolvimento deste portfólio devido à sua tipagem estática, o que me proporciona maior conforto e segurança durante o desenvolvimento.
Vindo de um background em Java, encontrei no TypeScript uma linguagem mais concisa e sólida para trabalhar.

**React**: Optei por utilizar React na construção deste portfólio devido à sua eficiência no gerenciamento de estado, tornando a manipulação de dados mais facilitada e intuitiva.

**SCSS**: Utilizei SCSS para a estilização, configurando um arquivo principal para atender às necessidades de uma landing page.
A escolha do SCSS proporcionou uma experiência de desenvolvimento mais organizada e flexível na estilização dos elementos.

## Recursos Principais:

* Integração do [DATO CMS](https://www.datocms.com/) para gerenciamento de conteúdo, permitindo a adição e edição de projetos de forma fácil e prática.
* Estrutura de modelos no CMS para categorização de projetos por tags, facilitando a organização e navegação.
* Utilização de SCSS para estilização, garantindo uma interface visual atrativa e responsiva.
* Carregamento seguro de imagens por meio do [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html), proporcionando uma experiência de visualização confiável e protegida.

## Gerenciamento de Conteúdo

Integrei o DATO CMS para gerenciar o conteúdo do meu portfólio, oferecendo uma interface amigável e eficiente para adicionar, editar e organizar projetos. O uso de um CMS simplifica o processo de atualização do portfólio, permitindo-me focar mais na criação de projetos e menos na manutenção do site. 
Além disso, permite uma colaboração mais fácil com outros membros da equipe, se aplicável.


 * **Posts**: Os posts representam os projetos individuais no meu portfólio. 
Cada post inclui atributos como título, descrição, imagens, URLs do repositório e do projeto. 
Além disso, os posts podem ser associados a múltiplas tags, permitindo uma organização e categorização eficaz dos projetos.

* **Tags**: As tags são utilizadas para categorizar os projetos por tecnologias, temas ou outras categorias relevantes. 
Cada tag possui um título e uma URL de ícone, facilitando a identificação visual rápida das tecnologias utilizadas em cada projeto.

## Integração de Dados:

* **Requisições GraphQL:** Utilizo o GraphQL para fazer requisições ao DATO CMS e obter os dados dos meus projetos no portfólio. O GraphQL permite especificar exatamente quais dados desejo recuperar de forma eficiente e flexível, reduzindo o tempo de carregamento da página e otimizando o consumo de dados.

* **Processamento dos Dados:** Após enviar uma requisição GraphQL, recebo uma resposta contendo os dados dos projetos em formato JSON. Esses dados são então processados no lado do cliente, onde são convertidos em objetos JavaScript para serem utilizados no portfólio.

* **Utilização no Portfólio:** Os dados convertidos em objetos JavaScript são utilizados para renderizar os projetos no portfólio. Por exemplo, o título, descrição, URLs de repositório e projeto são exibidos para cada projeto, enquanto as tags associadas a cada projeto são utilizadas para categorizá-los e facilitar a navegação.

Essa abordagem de integração de dados via GraphQL oferece uma maneira eficaz e flexível de obter e utilizar os dados dos projetos no portfólio, proporcionando uma experiência de visualização suave e personalizada para os visitantes.

## Carregamento de Imagens:

* **Requisição Segura ao Amazon S3:** Para carregar as imagens de forma segura em meu portfólio, utilizo o Amazon Simple Storage Service (S3) da AWS. Quando recebo os dados dos projetos do DATO CMS, cada projeto inclui o nome da imagem associada.

* **Acesso Seguro com AWS SDK:** Utilizando o AWS SDK, mais especificamente o pacote S3 Client, realizo uma requisição para obter o objeto correspondente ao nome da imagem em meu S3 Bucket. Este processo garante um acesso seguro e confiável às imagens armazenadas no S3.

* **Configuração de Credenciais e Segurança:** Todas as configurações de diretório e credenciais são gerenciadas no AWS IAM (Identity and Access Management), onde as credenciais são configuradas apenas para leitura, garantindo a segurança dos dados armazenados no S3.

* **Geração de Signed URL:* Após obter o objeto da imagem do S3 Bucket, gero uma Signed URL, que é uma URL temporária e segura, válida por um período específico (geralmente 3600 segundos), para acessar a imagem de forma segura.

* **Carregamento das Imagens no Portfólio:** Com a Signed URL gerada, as imagens são carregadas de forma segura no portfólio, garantindo a integridade e segurança dos dados. Isso proporciona uma experiência de visualização confiável e protegida para os visitantes do portfólio.


Conecte-se comigo em meu [LinkedIn](https://www.linkedin.com/in/david-balbino/)!


Obrigado pela visita!