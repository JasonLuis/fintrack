export class Helper {
  static currency = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
