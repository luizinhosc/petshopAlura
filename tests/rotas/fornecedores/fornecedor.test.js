jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe Fornecedor', () => {
  test('o metodo validar() retorna true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Testes de Fornecedor',
      email: 'email@qualque3r.com',
      categoria: 'brinquedos'
    })
    expect(fornecedor.validar()).toBe(undefined)
  })

  test('o metodo criar() foi executado com sucesso',async()=>{

    const fornecedor = new Fornecedor({
      empresa: 'Testes de Fornecedor',
      email: 'email@qualque3r.com',
      categoria: 'brinquedos'
    })
    await fornecedor.criar()
    expect(fornecedor.id).toBe(500)
    expect(fornecedor.dataCriacao).toBe('10/12/3420')
    expect(fornecedor.dataAtualizacao).toBe('10/12/3420')
    expect(fornecedor.versao).toBe(90)

  })
})
