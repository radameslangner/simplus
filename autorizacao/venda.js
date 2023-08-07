function vender( req, res, next ){
    venda= req.session.venda
    item = req.session.item
    if (req.session.empresa !== undefined){
        console.log("req.session.venda", req.session.venda)
        console.log("req.session.item", req.session.item)
         next()
         }else {
            res.redirect("/index")
    }
}

module.exports = vender