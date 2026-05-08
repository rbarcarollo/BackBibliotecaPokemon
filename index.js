const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://front-biblioteca-pokemon.vercel.app/'
}));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API backend funcionando ✅' });
});

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT} `);
});