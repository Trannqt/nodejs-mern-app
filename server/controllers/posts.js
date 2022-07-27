import {PostModel} from '../models/PostModel.js'
export const getPosts = async (req,res)=>{
    try{
        const post = new PostModel({
            title:'test',
            content:'test',
        });
        post.save();

        const posts = await PostModel.find();
        console.log('posts ',posts);
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).join({error:err});
    }
};

export const createPost = (req,res)=>{
    res.send('CREATE POST');
};