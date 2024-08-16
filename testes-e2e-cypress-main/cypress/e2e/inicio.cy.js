//    TITULO - H1 ////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve renderizar h1 com o texto correto', () => {
    cy.getByData('principal').find('h1').should('contain', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!') // Verifica o texto do h1
  })})
  
// IMAGENS - IMG /////////////////////////////////////////////////////////////////////////////////////////////////////

describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve renderizar a imagem corretamente!', () => {
    cy.getByData('img-1').should('be.visible') // Verifica se a imagem está visível
  })
})

describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve renderizar a imagem corretamente!', () => {
    cy.getByData('img-2').should('be.visible') // Verifica se a imagem está visível
  })
})

describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve renderizar a imagem corretamente!', () => {
    cy.getByData('img-3').should('be.visible') // Verifica se a imagem está visível
  })
})

describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve renderizar a imagem corretamente!', () => {
    cy.getByData('img-4').should('be.visible') // Verifica se a imagem está visível
  })
})

describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve renderizar a imagem corretamente!', () => {
    cy.getByData('img-5').should('be.visible') // Verifica se a imagem está visível
  })
})

// PARAGRAFOS - P /////////////////////////////////////////////////////////////////////////////////////////////////////

//describe('Página Principal', () => {
//  beforeEach( () => {
//    cy.visit('http://localhost:3000/')
//})
//  it('Deve renderizar p com o texto correto!', () => {
//    // cy.visit('http://localhost:3000')
//    cy.getByData('p-1').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
//  })
//})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar p com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('p-1').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar p com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('p-2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar p com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('p-3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar p com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('p-4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

// SUB-TITULO - H3 E H2 /////////////////////////////////////////////////////////////////////////////////////////////////////


describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar h2 com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo').contains('Vantagens do nosso banco:')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar h3 com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('h3-1').contains('Conta e cartão gratuitos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar h3 com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('h3-2').contains('Saques sem custo')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar h3 com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('h3-3').contains('Programa de pontos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
})
  it('Deve renderizar h3 com o texto correto!', () => {
    // cy.visit('http://localhost:3000')
    cy.getByData('h3-4').contains('Seguro Dispositivos')
  })
})
