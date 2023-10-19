import { saudacoes } from './alert'

describe('saudacoes', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it('O alert deve retornar "Login realizado com sucesso! Seja bem-vindo ao Dio Bank', () => {
    saudacoes()
    expect(mockAlert).toHaveBeenCalledWith(
      'Login realizado com sucesso! Seja bem-vindo ao Dio Bank'
    )
  })
})
