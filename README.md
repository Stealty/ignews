# ignews

<hr />
<p>App construido durante o Chapter III do Ignite</p>
<br />
<h2>Como executar:</h2>
<hr />
<ol>
  <li>Utilizar o git clone nesse repositório.</li>
  <li>
    Acessar a pasta do repositório e executar o yarn para instalação de
    dependências.
  </li>
  <li>Executar yarn dev para rodar o app em desenvolvimento.</li>
</ol>
<hr />
<h3>Tecnologias utilizadas:</h3>
<br />
<ol>
  <li>Next, que é um framework do ReactJS.</li>
  <li>FaunaDB como banco de dados.</li>
  <li>Stripe como forma de pagamento.</li>
  <li>Axios para consumo de API.</li>
  <li>Next-Auth para autenticação no banco de dados.</li>
  <li>Prismic como CMS.</li>
</ol>
<hr />
<br />
<h2>Introdução ao App</h2>
<ol>
  <li>
    A primeira página é a página Home do nosso App. Nela você pode tanto fazer
    login quanto se cadastrar no nosso<br />
    Se o usuário não tiver conta registrada, ao clicar no botão de assinatura
    ele é redirecionado para a página de login com o Google.
    <br />
    <img
      src="https://imagensbrasil.org/images/2022/03/21/img1.md.jpg"
      alt="Print da página home do site Ignews com link das páginas home e posts, além de botões para login com o Google e assinatura pelo Stripe."
      aria-label="Print da página Home do site Ignews."
    />
  </li>
  <hr>
  <li>
      Página de login com o Google. Ao clicar em Login você é redirecionado para ela e após logar a cor do icone do Google é alterada.
      Sempre que você fizer login você é redirecionado para a página que você estava anteriormente. Se você estiver na preview de um post é redirecionado para o post completo, caso você tenha assinatura ativa.
      <br />
    <img src="https://imagensbrasil.org/images/2022/03/21/loginGoogle.jpg" alt="Print da página de login com o Google" aria-label="Print da página de login com o Google, mostrando o seu usuário e a opção de usar outra conta.">
  </li>
  <hr>
  <li>
      Página de assinatura com cartão de crédito via Stripe. Ao completar a assinatura o usuário é redirecionado para a página anterior.
    <br />
    <img src="https://imagensbrasil.org/images/2022/03/21/img3.jpg" alt="Print da pagina de assinatura do app Ignews" aria-label="Print da página de assinatura do app com campos de dados do cartão, endereço e dados do usuário.">
  </li>
  <hr>
  <li>
    A página de posts tem um resumo dos posts mais acessados para aqueles que
    não tem a assinatura do App. <br />
    Usuários sem assinatura são redirecionados para a página Home caso tentem
    acessar a página interna de algum dos posts.
    <br />
    <img
      src="https://imagensbrasil.org/images/2022/03/21/img2.jpg"
      alt="Página de posts para usuários sem assinatura"
      aria-label="Print da página de posts do site Ignews para usuários sem assinatura, onde só é exibido um resumo dos posts mais acessados"
    />
  </li>
  <hr>
  <li>
    Preview da página do post com um resumo das informações. Para acessar a página completa do post basta realizar o login com o Google e ter a assinatura ativa.
    <br />
    <img src="https://imagensbrasil.org/images/2022/03/21/preview.jpg" alt="Print de um preview da página interna do post com opção de assinatura abaixo do resumo das informações." aria-label="Print de um preview da página interna do post com opção de assinatura abaixo do resumo das informações e botão de login com Google no header.">
  </li>
  <hr>
  <li>
    Página interna de um post, com informações mais detalhadas. <br />
    só pode ser acessada por usuários com assinatura ativa.
    <br />
    <img
      src="https://imagensbrasil.org/images/2022/03/21/img4.jpg"
      alt="Print da página interna de um dos posts com informações mais detalhadas."
      aria-label="Print da página interna de um dos posts com informações mais detalhadas. A seguir as informações do post selecionado: "
    />
  </li>
  <hr>
</ol>
