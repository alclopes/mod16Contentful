// Content Delivery API - access token => refere-se ao conteudo publicado
// Content Preview API - access token API - access token => refere-se ao conteudo temporário
// Usamos no accessToken desta aplicação => Content Delivery API - access token


//Importante: temos normalmente no Gatsby alem dos plugins normais, mais dois tipos de plugins:
    // os source (que irão carregar o graphql/gatsby)
    // os transformer (que irão transformar o que foi carregado em algo que desejamos)
        // por exemplo: um campo escrito em formato markdown transformo em formato html.

//downloadLocal = true => irá carregar as imagens automaticamente no cache, 
    // isso fara com que apareçam novas propriedades no Graphql (localfile / childImageSharp)
    // se vc não fizer isso as imagens virão com a URL do conteful (quando você faz o upload lá)
        // se for um reactNative não altera em nada, mas se for um site irá perder performance.

require('dotenv').config()

module.exports = {
    plugins: [
        'gatsby-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true
            }
        }
    ]
}