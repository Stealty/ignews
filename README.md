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
    <img
      src="https://imagensbrasil.org/images/2022/03/21/img1.md.jpg"
      alt="Print da página home do site Ignews com link das páginas home e posts, além de botões para login com o Google e assinatura pelo Stripe."
      aria-label="Print da página Home do site Ignews."
    />
  </li>
  <hr>
  <li>
    A página de posts tem um resumo dos posts mais acessados para aqueles que
    não tem a assinatura do App. <br />
    Usuários sem assinatura são redirecionados para a página Home caso tentem
    acessar a página interna de algum dos posts.
    <img
      src="https://imagensbrasil.org/images/2022/03/21/img2.jpg"
      alt="Página de posts para usuários sem assinatura"
      aria-label="Print da página de posts do site Ignews para usuários sem assinatura, onde só é exibido um resumo dos posts mais acessados"
    />
  </li>
  <hr>
  <li>
    Página interna de um post, com informações mais detalhadas. <br />
    só pode ser acessada por usuários com assinatura ativa.
    <img
      src="https://imagensbrasil.org/images/2022/03/21/img4.jpg"
      alt="Print da página interna de um dos posts com informações mais detalhadas."
      aria-label="Print da página interna de um dos posts com informações mais detalhadas. A seguir as informações do post selecionado: "
    />
  </li>
  <hr>
</ol>
