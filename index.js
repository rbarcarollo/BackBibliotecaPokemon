const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API backend funcionando ✅, com CI/CD Completo' });
});

app.get('/v1', (req, res) => {
  const dataAtual = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  res.json({
    message: "Api v1 respondendo no container docker...",
    chamada_em: dataAtual
  });
});

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
});