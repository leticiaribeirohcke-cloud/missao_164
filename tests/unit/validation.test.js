// Importa a função normalizeTitle do arquivo validation.js
const {normalizeTitle} = require('../../src/validation');

// Agrupa um bloco de testes relacionado para mnater a organização
describe('Validação de tarefas', () => {
    test('Remove espaços do início e do fim do título', () => {
        expect(normalizeTitle('   Teste Unitário   ')).toBe('Teste Unitário');
    });

    test('Retorna string vazia se o título não for uma string', () => {
        expect(normalizeTitle(15487)).toBe('');
        expect(normalizeTitle(null)).toBe('');
        expect(normalizeTitle(undefined)).toBe('');
    });

    // Casos de teste para a função validateTaskInput
    // Função que valida uma tarefa
function validateTaskInput(task) {
    if (!task || task.trim() === "") {
        return false;
    }

    return true;
}

// Caso de teste 1: tarefa válida
console.log(validateTaskInput("Estudar programação"));
// Saída esperada: true

// Caso de teste 2: tarefa vazia
console.log(validateTaskInput(""));
// Saída esperada: false

// Caso de teste 3: tarefa com espaços
console.log(validateTaskInput("   "));
// Saída esperada: false

});