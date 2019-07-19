module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get("db");

        dbInstance.get_inventory().then(products => res.status(200).send(products)).catch(error => {
            res.status(500).send({errorMessage: "something went wrong, sorry dude"});
            console.log(error);
        });
    },
    
}