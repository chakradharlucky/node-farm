module.exports =  (template,data) => {
    let output = template.replace(/{%productImage%}/g,data.image)
    output = output.replace(/{%productName%}/g,data.productName)
    output = output.replace(/{%productQuantity%}/g,data.quantity)
    output = output.replace(/{%productPrice%}/g,data.price)
    output = output.replace(/{%productId%}/g,data.id)
    output = output.replace(/{%import%}/g,data.from)
    output = output.replace(/{%nutrients%}/g,data.nutrients)
    output = output.replace(/{%description%}/g,data.description)
    output = output.replace(/{%notOrganic%}/g, !data.organic ? 'not-organic' : "")
    return output
}