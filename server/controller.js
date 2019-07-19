module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get("db");

        dbInstance.get_inventory().then(products => res.status(200).send(products)).catch(error => {
            res.status(500).send({errorMessage: "something went wrong"});
            console.log(error);
        });
    },

    getProduct: (req, res) => {
        const dbInstance = req.app.get("db");
        const { id } = req.params;

        dbInstance.read_product(id).then(product => res.status(200).send(product).catch(error => {
            res.status(500).send({ errorMessage: "something went wrong"})
        }))
    },
 
    addProduct: (req, res) => {
        const dbInstance = req.app.get("db");
        const { name, price, image} = req.body;

        dbInstance.create_product([  name, price, image]).then(() => res.sendStatus(200)).catch(error => {
            res.status(500).send({errorMessage: "something went wrong"});
            console.log(error);
        })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get("db");
        const { id} = req.params;

        dbInstance.delete_product(id).then(products => res.status(200).send(products)).catch(error => {
            res.status(500).send({errorMessage: "something went wrong, again!!"});
            console.log(error);
        })
    },
    update: (req, res) => {
        const dbInstance = req.app.get("db");
        const { params, query } = req;
    
        dbInstance
          .update_product(params.id, query.desc)
          .then(products => res.status(200).send(products))
          .catch(error => {
            res.status(500).send({ errorMessage: "something went wrong, man" });
            console.log(error);
          });
      }
    

}