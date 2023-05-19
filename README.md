# DesafioQA_PagBrasil
PagBrasil - Teste de Software

Escopo:
Com base no descritivo abaixo, elabore os possíveis cenários de teste (funcionais e não
funcionais) utilizando a metodologia BDD (Cucumber/Gherkin).

A imagem acima ilustra um formulário de contato simples, de uma página web. Ao
submeter, o frontend enviará os dados para backend e este realizará a validação dos dados. Caso
estejam corretos, fará o envio do e-mail para o destinatário.
Seguem as definições da estrutura do formulário proposto:
• O campo "Name" sendo um input type text com atributo “id" igual a “Name”, que deve
aceitar letras, espaços e números. Limite máximo de 255 caracteres.
• O campo "Email" sendo um input type text com atributo “id” igual a “Email”, que deve
aceitar a entrada de dados no formato de e-mail, ou seja, letras, números, arroba (@) e
ponto (.). Limite máximo de 150 caracteres.
• O campo "Company" sendo um input type text com atributo “id” igual a “Company”, que
deve aceitar letras, espaços e números. Limite máximo de 200 caracteres.
• O campo "Website" sendo um input type text com atributo “id” igual a “Website”, que deve
aceitar a entrada de dados no formato de URL, ou seja, letras, números, dois pontos (:),
barra (/) e ponto (.). Limite máximo de 200 caracteres.
• O campo "Phone" sendo um input type text com atributo “id” igual a “Phone”, que deve
aceitar a entrada de dados no padrão brasileiro de telefone com máscara, ou seja, números,
parênteses e hífen (-), seguindo a máscara "(xx) xxxxx-xxxx". Limite máximo de 15
caracteres.
• O campo "Inquiry" sendo um textarea com atributo “id” igual a “Inquiry”, que deve aceitar
letras, espaços e números. Limite máximo de 500 caracteres.

Este formulário (frontend) submeterá para a API (backend), via JavaScript (Ex: Ajax/Fetch),
os dados no seguinte formato (JSON):
{
"Name": "",
"Email": "",
"Company": "",
"Website": "",
"Phone": "",
"Inquiry": ""
}

O backend deve retornar um JSON no seguinte formato:
• Em caso de sucesso:
HTTP_CODE: 200
{
"sucesso": true
}
• Em caso de falha:
HTTP_CODE: 412
{
"sucesso": false,
"erro": "Campo xxx inválido."
}
OBS: xxx = nome do campo com formato incorreto.

Da mesma forma que as validações destes campos são aplicadas ao frontend, elas serão
revalidadas no backend, seguindo as mesmas regras. Isso ocorre para um caso haja uma submissão
direta "por fora" do frontend (por exemplo, chamada direta para API via Postman/SoapUI ou
similar).
Note que a validação citada não impede a submissão do formulário com os dados em branco
ou inválidos, apenas informa visualmente que o dado foi inserido de maneira incorreta. Caso isso
ocorra, considere que um elemento "label" com atributo “id” igual a “Error” será preenchido com a
mensagem de erro "Campo xxx inválido." (xxx = nome do campo incorreto) na página de contato
(frontend).

Desafio opcional:
Implemente os testes automatizados, contemplando o frontend (E2E) e o backend,
preferencialmente na ferramenta Cypress.

Prazo:
O prazo de envio do resultado do teste é até as 23h59 do dia posterior, a contar do
recebimento deste e-mail. Ex: Se receber o teste na segunda-feira, deve enviar o resultado do teste
até a terça feira às 23h59. Se receber o teste na sexta-feira, deve enviar o resultado do teste até o
sábado às 23h59.

Quaisquer opiniões/sugestões serão consideradas na avaliação do teste. Por favor responda
este e-mail com o seu conteúdo/teste em anexo, link para Google Drive/Dropbox ou repositório GIT
online (GitHub, BitBucket, etc.) no fim do prazo estabelecido.
Caso não seja possível finalizar dentro do prazo, por favor responda esta mensagem com
seu teste, mesmo que incompleto. Este teste não será "rodado" dentro de nenhuma ferramenta de
teste e/ou automação, será apenas interpretado e avaliado visualmente. Portanto considere a
clareza e organização, entre outros aspectos.

Quaisquer dúvidas que impeça/trave o desenvolvimento do seu teste, por favor informe no
recebimento deste e-mail.
Boa sorte!
