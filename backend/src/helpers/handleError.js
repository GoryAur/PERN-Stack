const httpError = (res, err) => {
  console.log(err)
  res.status(500)
  res.send({ error: 'Ups! algo ha ocurrido.' })
}

module.exports = httpError;