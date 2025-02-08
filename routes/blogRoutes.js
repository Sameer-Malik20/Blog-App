const express = require('express');
const { getAllBlogController, createBlogController, updateBlogController, getBlogController, deleteBlogController, userBlogController } = require('../controllers/blogController');

//router object
const router = express.Router();

//routes
router.get("/all-blog", getAllBlogController)

//post routes
router.post("/create-blog", createBlogController)

//update routes
router.put("/update-blog/:id", updateBlogController)

//delete routes
router.delete("/delete-blog/:id", deleteBlogController)

//single routes
router.get("/get-blog/:id", getBlogController)

//Get user blogs
router.get("/user-blog/:id", userBlogController)

module.exports = router;