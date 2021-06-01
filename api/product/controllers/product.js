'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

 const categories = [
    {
        id: 1,
        name: 'Brown Brim',
        cat_id: 1,
        price: '25.00',
        remote_url: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        local_url:'/img/hats/brown-brim.png'
    },
    {
        id: 2,
        name: 'Blue Beanie',
        cat_id: 1,
        price: '18.00',
        remote_url: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        local_url:'/img/hats/blue-beanie.png'
    },
    {
        id: 3,
        name: 'Brown Cowboy',
        cat_id: 1,
        price: '35.00',
        remote_url: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        local_url:'/img/hats/brown-cowboy.png'
    },
    {
        id: 4,
        name: 'Grey Brim',
        cat_id: 1,
        price: '25.00',
        remote_url: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        local_url:'/img/hats/grey-brim.png'
    },
    {
        id: 5,
        name: 'Black Jean Shearling',
        cat_id: 2,
        price: '125.00',
        remote_url: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        local_url:'/img/jackets/black-shearling.png'
    },
    {
        id: 6,
        name: 'Adidas NMD',
        cat_id: 3,
        price: '220.00',
        remote_url: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        local_url:'/img/sneakers/adidas-nmd.png'
    },
    {
        id: 7,
        name: 'Brown Brim',
        cat_id: 4,
        price: '25.00',
        remote_url: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        local_url:'/img/hats/brown-brim.png'
    },
    {
        id: 8,
        name: 'Brown Brim',
        cat_id: 5,
        price: '25.00',
        remote_url: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        local_url:'/img/hats/brown-brim.png'
    },
  ];
module.exports = {
    overview: async (ctx) => {
        // return res.render('products2_27_overview', { 
        //     title: '408410727 (static)' ,
        //     data: categories
        //   });
        const data = await strapi.services.product.find();
        console.log("data",data);
        return await ctx.render("products2_27", {
            data,
            title: "Shop Products"
        });
    },
    shopPage: async (ctx) => {
        const data = await strapi.services.product.find();
        console.log("data",data);
        return await ctx.render("products2_27", {
            data,
            title: "Shop Products"
        });
    },
    categoryPage: async (ctx) => {
        const category = ctx.params.category;
        console.log("category", category);
        const cat = await strapi.services.category.findOne({ name: category });
        console.log("cat", category, cat.cid);
        const data = await strapi.connections.default.raw(
            `SELECT * FROM products where category = ${cat.cid}`
        );
        console.log("data", JSON.stringify(data));
        return await ctx.render("products2_27", {
            data,
            title: ctx.params.category
        });
    }
};
