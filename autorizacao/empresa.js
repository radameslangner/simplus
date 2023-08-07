function empresa( req, res, next ){
    empresa = req.session.empresa
    if (req.session.empresa !== undefined){
        console.log("req.session.empresa", req.session.empresa)
         next()
         }else {
            res.redirect("/index")
    }
}

module.exports = empresa