# MedClinic API - Tarefa 1: Definição de Tipos Globais

## Objetivo
Criar **apenas** o arquivo de definição de tipos para que o Express reconheça a propriedade `req.user`.

## Arquivo a ser criado:
`src/types/express.d.ts`

## Código Requerido:
import * as express from 'express';

declare global {
namespace Express {
interface Request {
user?: {
id: string;
role: string;
};
}
}


## Instrução
Escreva e retorne apenas o código acima dentro do arquivo especificado. Não gere nenhum outro arquivo.
