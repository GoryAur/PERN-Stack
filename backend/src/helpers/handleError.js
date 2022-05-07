const httpError = (res, err) => {
  console.log(err)
  res.status(500)
  res.send({ error: 'Use frontend server instead backend to see all data' })
}

module.exports = httpError;