const db = require('./db')

//getAllProducts
const getAllProducts = () => {
    return db.Product.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data

                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'failed to fetch the data from database'

                }
            }
        })
}

//add-to-wishlist

const addToWishlist = (id, title, price, description, image) => {
    return db.Wishlist.findOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "product already in your wishlist",
            }
        } else {
            const newProduct = new db.Wishlist({
                id,
                title,
                price,
                description,
                image
            })
            newProduct.save()
            return {
                statusCode: 200,
                message: "product successfully added to  your wishlist",
            }
        }
    })

}
//getwishlist
const getWishlist = () => {
    return db.Wishlist.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data

                }
            } else {
                return {
                    statusCode: 404,
                    message: 'Your Wishlist is empty'

                }
            }
        })
}
//deleteItemWishlist
const deleteItemWishlist = (id) => {
    return db.Wishlist.deleteOne({
        id
    })
        .then(
            (data) => {
                if (data) {
                    // return {
                    //     statusCode:200,
                    //     message:'product removed from your wishlist',

                    // } 

                    return db.Wishlist.find()
                        .then((data) => {
                            if (data) {
                                return {
                                    statusCode: 200,
                                    wishlist: data,
                                    message: 'product removed from your wishlist'

                                }
                            } else {
                                return {
                                    statusCode: 404,
                                    message: 'Your Wishlist is empty'

                                }
                            }
                        })

                }
                else {
                    return {
                        statusCode: 404,
                        message: 'product not available'
                    }
                }
            }
        )
}

module.exports = {
    getAllProducts,
    addToWishlist,
    getWishlist,
    deleteItemWishlist
}