const { default: mongoose } = require("mongoose");
const BlogModel = require("../models/blogModel");
const userModel = require("../models/userModel");

//get All blog
exports.getAllBlogController = async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        if (!blogs) {
            return res.status(404).send({ message: "No blog found", success: false })
        }
        return res.status(200).send({
            message: "All blogs",
            success: true,
            blogCount: blogs.length,
            blogs
        });


    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Error in get all blog callback", success: false, err });
    }
}

//create blog
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image, user } = req.body
        if (!description || !title || !image || !user) {
            return res.status(400).send({ message: "All fields are required", success: false });
        }
        const existingUser = await userModel.findById(user)
        if (!existingUser) {
            return res.status(400).send({ message: "User does not exist", success: false });
        }
        const newBlog = new BlogModel({ title, description, image, user })
        const session = await mongoose.startSession()
        session.startTransaction()
        await newBlog.save({ session })
        existingUser.blogs.push(newBlog)
        await existingUser.save({ session })
        await session.commitTransaction();
        await newBlog.save()
        return res.status(201).send({ message: "Blog created successfully", success: true, blog: newBlog });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Error in create blog callback", success: false, err });
    }
}

//update blog
exports.updateBlogController = async (req, res) => {
    try {
        const { title, description, image } = req.body
        if (!title) {
            return res.status(400).send({ message: "All fields are required", success: false });
        }
        const blog = await BlogModel.findOneAndUpdate({ _id: req.params.id }, { title, description, image }, { new: true })
        if (!blog) {
            return res.status(404).send({ message: "No blog found", success: false });
        }
        return res.status(200).send({ message: "Blog updated successfully", success: true, blog });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Error in update blog callback", success: false, err });
    }
}

//delete blog
exports.deleteBlogController = async (req, res) => {
    try {
        const blog = await BlogModel.findOneAndDelete({ _id: req.params.id })
        if (!blog) {
            return res.status(404).send({ message: "No blog found", success: false });
        }
        return res.status(200).send({ message: "Blog deleted successfully", success: true, blog });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Error in delete blog callback", success: false, err });
    }
}

//get single blog
exports.getBlogController = async (req, res) => {
    try {
        const { id } = req.params.id
        const blog = await BlogModel.findOne({ id })
        if (!blog) {
            return res.status(404).send({ message: "No blog found", success: false });
        }
        return res.status(200).send({ message: "Single blog", success: true, blog });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Error in get single blog callback", success: false, err });
    }
}

//get user blog
exports.userBlogController = async (req, res) => {
    try {
        const userBlog = await userModel.findById(req.params.id).populate("blogs")
        if (!userBlog) {
            return res.status(404).send({ message: "No user found", success: false });
        }
        return res.status(200).send({ message: "User's blogs", success: true, userBlog });
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Error in get user blog callback", success: false, error });
    }
}