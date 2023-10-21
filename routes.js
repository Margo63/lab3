const express = require("express");
const router = express.Router();
const fs = require("fs");
let users = require("./data.json");

router.get("/admin/users", (req, res, next) => {

    res.render("index.ejs",{list: users})
});

router.get("/admin/users/:id([0-9a-zA-Z]{1,})",
    (req, res)=>{
        const user = users.filter((g)=>{
            if(g.id == req.params.id) return true;
        });

        const friendList = users.filter((g)=>{
           if(user[0].friends.includes(g.id)) return true;
        });

        res.render("user_friend_list_page.ejs",{element :user[0], friendList: friendList});
});

router.get("/admin/users/:id([0-9a-zA-Z]{1,})/news",
    (req, res)=>{
        const user = users.filter((g)=>{
            if(g.id == req.params.id) return true;
        });

        const newsList = users.filter((g)=>{
            if(user[0].friends.includes(g.id)) return true;
        });

        //console.log(newsList)

        res.render("user_news_list.ejs",{element :user[0], newsList: newsList});
    });

router.get("/getList",(req, res, next) => {
    res.send(JSON.stringify(users))

});


module.exports = router;