import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { AppDataSource } from './database/data-source';
import router from './routes/router';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
const PORT = process.env.PORT || '3000';

app.use(express.json());

// Vincula todas as rotas centralizadas do aplicativo sob o prefixo /api
app.use('/api', router);

// O middleware de erro DEVE vir por último para capturar os erros das rotas
app.use(errorMiddleware);

// Inicializa a conexão com o PostgreSQL através do TypeORM
AppDataSource.initialize()
    .then(() => {
        console.log('[banco]: Conexão com o PostgreSQL estabelecida com sucesso!');

        // Inicia o servidor HTTP apenas após a conexão bem-sucedida com o banco
        app.listen(PORT, () => {
            console.log(`[servidor]: Aplicação rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('[banco]: Erro fatal durante a inicialização do DataSource:', error);
    });
