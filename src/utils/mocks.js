const USER_MOCK = {
  firstName: 'Bito ',
  lastName: 'de oliveira',
  roles: 'fornecedor',
  email: 'gabrielao.developer@gmail.com',
  password: 'gabigol10',
  active: true,
}

const EVENT_MOCK = {
  title: 'THIAGO VENTURA em MODO EFETIVO ',
  dataEvent: new Date(),
  price: 80,
  category: 'comedy',
  describe: `Sobre Thiago Ventura
            Administrador de empresas e ex-bancário, Thiago Ventura Iniciou sua carreira como comediante
            em 2010 e desde então se apresentou nos maiores festivais, casas de comédia e teatros do Brasil.
            Com mais de 4 milhões de inscritos em seu canal de Youtube, seus vídeos alcançam resultados
            surpreendentess. Alguns deles já geraram mais de 20 mil compartilhamentos e cerca de 50
            milhões de views. Nas redes sociais, o humorista também é sucesso, acumulando mais de 4,2
            milhões de seguidores no Instagram.`,
  userId: '123e4567-e89b-12d3-a456-426655440000',

  active: true,
}

module.exports = {
  USER_MOCK,
  EVENT_MOCK,
}
