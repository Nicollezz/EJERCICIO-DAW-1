const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", anioPublicacion: 1967 },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela", anioPublicacion: 1605 },
    { id: 3, titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "Literatura infantil", anioPublicacion: 1943 }
];

app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
    if (!req.body.titulo || !req.body.autor) return res.status(400).json({ error: "Faltan datos" });
    
    const nuevo = { id: (books.at(-1)?.id || 0) + 1, ...req.body };
    books.push(nuevo);
    res.status(201).json(nuevo);
});

app.listen(port, ()=>{
    console.log(`Servidor está escuchando en http://localhost:${port}`);
});

