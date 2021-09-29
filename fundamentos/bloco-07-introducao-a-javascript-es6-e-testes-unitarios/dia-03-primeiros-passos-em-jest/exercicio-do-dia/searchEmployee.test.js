const { it, expect } = require('@jest/globals');
const searchEmployee = require('./searchEmployee');

describe('Bonus', () => {
  it('Verifica se a função existe', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Verifica se o retorno da consulta para searchEmployee("8579-6", "firstName") é Ana', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  it('Verifica se o retorno da consulta para searchEmployee("4678-2", "lastName") é Dodds', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });

  it('Verifica se o retorno da consulta para searchEmployee("9852-2-2", "specialities") é ["Ruby", "SQL"]', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });

  it('Retorna o erro "ID não identificada" caso o id esteja incorreto', () => {
    expect(() => searchEmployee('1a', 'specialities')).toThrowError(new Error('ID não identificada'));
  });

  it('Retorna o erro "Informação indisponível" caso o detail esteja incorreto', () => {
    expect(() => searchEmployee('9852-2-2', 'oi')).toThrowError(new Error('Informação indisponível'));
  });
});
