

## Cifra de César


Conta a história que Júlio César utilizava um código nas mensagens enviadas a seus generais,
um sistema simples de substituição, no qual cada letra da mensagem original era trocada pela
letra que se situa três posições à sua frente. Ficando da seguinte forma:
Cada letra “A” era substituída pela Letra “D”, “B” por “E” e assim sucessivamente.
Qualquer código que tenha esse padrão é considerado um código de César.
O alfabéto possui 26 letras, dessa forma pode-se cifrar o texto de 26 formas diferente.
<p align="center">
<img src="https://media.giphy.com/media/4bSoQR9w5h0TC/giphy.gif" width="200" heigth="200"> 
</p>

## 1. Processo de decisões do desenho:
* Definição de provável usuário. 
* Definição de principal problema do usuário e solução.
* Realizado fluxograma geral da aplicação.
* Utilizada ferramenta [<code>***pencil***</code>](https://pencil.evolus.vn/) para criar um esboço da interface da aplicação.

### 1.1 Indentificação do usuario:
Destinado a jornalistas e suas fontes para cifragem e decifragem de textos.

### 1.2 Indentificação do problema e solução:
O problema, seria a interceptação do texto do usuário e vizualização de seu conteúdo.
A solução seria a cifragem desse conteúdo com uma chave de offset escolhida pelo usuário, e a decifragem seria realizada pelo seu contato utilizando a chave escolhida.

### 1.3 Realização de fluxograma geral da aplicação:
Foi definido o fluxograma pensando na experiência do usuário, conforme imagem abaixo:


![Fluxograma geral da aplicação](img_readme/fluxograma_geral.jpg)

### 1.4 Definição de Wireframe:
Define-se wireframe como um esqueleto, um protótipo ou uma versão bastante primitiva do visual de um projeto.
Nesse projeto o Wireframe foi definido, pensando na experiencia do usuario conforme esboço abaixo, realizado na ferramente <code>***Pencil***</code>


![wireframe cifra de césar](img_readme/pagina_result.png)

## 2. Montagem do ambiente de desenvolvimento.

:warning:Será necessária instalação do [<code>***Node.js***</code>](https://nodejs.org/en/)(que contém o [<code>***npm***</code>](https://docs.npmjs.com/))
****

* Clone o projeto na sua máquina:
https
```sh
git clone https://github.com/naereloire/SAP004-cipher.git
```

* Instale as dependências do projeto: 
```sh
npm install
```
* Rode o projeto na sua máquina:
```sh
npm start
```
* Vizualize o projeto no seu navegador:
```sh
http://localhost:5000
```
## :clipboard: 3.Testes
* Para executar os testes:
```sh
npm test
```










<!-- ctrl+shift+v pré vizualizar -->