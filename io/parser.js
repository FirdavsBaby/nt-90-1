function parser(req) {
    return new Promise(function(resolve, reject) {
        try {
            req.on("data", function(data) {
                resolve(JSON.parse(data))
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = parser