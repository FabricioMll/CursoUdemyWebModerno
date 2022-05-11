// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'John Doe',
    metodo: req.method,
    // params: JSON.stringify(req.query), ou...
    nome: req.query.nome,
    idade: +req.query.idade,
    // o + é pra indicar que quero este valor como numérico e não como string
    esposa: req.query.esposa
   })
}
