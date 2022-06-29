function index(req, res) {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM peliculas', (err, peliculas) => {
      if(err) {
        res.json(err);
      }
      res.render('peliculas/index', { peliculas });
    });
  });
}

function create(req, res) {

  res.render('peliculas/create');
}

function store(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('INSERT INTO peliculas SET ?', [data], (err, rows) => {
      res.redirect('/peliculas');
    });
  });
}

function destroy(req, res) {
  const id = req.body.id;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM peliculas WHERE id = ?', [id], (err, rows) => {
      res.redirect('/peliculas');
    });
  })
}

function edit(req, res) {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM peliculas WHERE id = ?', [id], (err, peliculas) => {
      if(err) {
        res.json(err);
      }
      res.render('peliculas/edit', { peliculas });
    });
  });
}

function update(req, res) {
  const id = req.params.id;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('UPDATE peliculas SET ? WHERE id = ?', [data, id], (err, rows) => {
      res.redirect('/peliculas');
    });
  });
}


module.exports = {
  index: index,
  create: create,
  store: store,
  destroy: destroy,
  edit: edit,
  update: update,
}