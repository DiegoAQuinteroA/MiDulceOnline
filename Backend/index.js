const app = require('./app')
const port = 7000
const mongoose = require('./src/conexDB/conn')

app.listen(port, () => {
    console.log(`Server ready on port ${port}`)
})