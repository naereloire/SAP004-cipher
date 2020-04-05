# Cifra de César

Conta a história que Júlio César utilizava um código nas mensagens enviadas a seus generais,
um sistema simples de substituição, no qual cada letra da mensagem original era trocada pela
letra que se situa três posições à sua frente. Ficando da seguinte forma:
Cada letra “A” era substituída pela Letra “D”, “B” por “E” e assim sucessivamente.
Qualquer código que tenha esse padrão é considerado um código de César.
O alfabéto possui 26 letras, dessa forma pode-se cifrar o texto de 26 formas diferente.


## 1. Processo de decisões do desenho:
* Definição de provável usuário. 
* Definição de principal problema do usuário e solução.
* Realizado fluxograma geral da aplicação.
* Utilizada ferramenta pencil para criar um esboço da interface da aplicação.

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
Nesse projeto o Wireframe foi definido, pensando na experiencia do usuario conforme esboço abaixo, realizado na ferramente ***Pencil***


![wireframe cifra de césar](img_readme/pagina_result.png)


## 2.CHECKLIST
* [x] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [x] `README.md` explicar claramente quem são os usuários e as suas relações com o produto.
* [x] `README.md` explicar claramente como o produto soluciona osproblemas/necessidades dos usuários.
* [ ] `README.md` explicar claramente como o pode ser feito deploy e instalação.
* [x] Usar VanillaJS.
* [x] **Não** usar `this`.
* [x] Implementar `cipher.encode`.
* [x] Implementar `cipher.decode`.
* [ ] Passar o linter com a configuração definida.
* [x] Passar as provas unitárias.
* [x] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [x] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [x] Interface que permita escrever um texto para ser cifrado.
* [x] Interface que mostre o resultado da cifra corretamente.
* [x] Interface que permita escrever um texto para ser decifrado.
* [x] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.

<!-- ctrl+shift+v pré vizualizar -->