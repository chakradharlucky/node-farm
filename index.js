const http = require('http')
const fs = require('fs')
const url = require('url')
const templateReplace = require('./modules/templateReplace')

const overviewhtml = fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8')
const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8')
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8')
const jsondata = fs.readFileSync(`${__dirname}/data.json`,'utf-8')
const data = JSON.parse(jsondata)

const result = data.map((product) => templateReplace(templateOverview,product)).join('')
const server = http.createServer((request,response) => {
    const { query, pathname }= url.parse(request.url, true)
    if(pathname === '/' || pathname === '/overview')
        response.end(overviewhtml.replace(/{%PRODUCTS%}/g,result))
    if(pathname === '/product')
        response.end(templateReplace(templateProduct,data[query.id]))
})
server.listen(1234, () => {
    console.log('Server listening on port 1234')
})