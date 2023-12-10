const { use } = require('bcrypt/promises');
const Chat=require('../models/chat');
const User=require('../models/user');
module.exports.fetchChat=async function(req,res){
    try{
        var chats=await Chat.find({users:{$elemMatch:{$eq:req.userId}}}).populate("users","-password").populate("latestMessage").populate("groupAdmin","-password").sort({updatedAt:-1});
        chats=await User.populate(chats,{
            path:"latestMessage.sender",
            select:"name email"
        });
        return res.status(200).json({data:chats});
    }catch(err){
        console.log(err);
    }
}
module.exports.accessChat=async function(req,res){
    try{    
        const userId=req.body.userId;
        if(!userId){
            return res.status(400);
        }
        var isChat=await Chat.find({
            isGroupChat:false,
            $and:[
                {users:{$elemMatch:{$eq:req.userId}}},
                {users:{$elemMatch:{$eq:userId}}}
            ]
        }).populate("users","-password").populate("latestMessage");
        isChat=await User.populate(isChat,{
            path:"latestMessage.sender",
            select:"name email"
        });
        if(isChat.length>0){
            return res.status(200).json({data:isChat});
        }else{
            var chatData={
                chatname:"sender",
                isGroupChat:false,
                users:[req.userId,userId]
            };
            try{
                const createdChat=await Chat.create(chatData);
                const fullChat=await Chat.findOne({_id:createdChat._id}).populate("users","-password");
                return res.status(200).json({data:fullChat});
            }catch(err){
                console.log(err);
            }

        }
    }catch(err){
        console.log(err);
    }
}
module.exports.createGroupChat=async function(req,res){
    try{

    }catch(err){
        console.log(err);
    }
}
module.exports.renameGroupChat=async function(req,res){
    try{

    }catch(err){
        console.log(err);
    }
}
module.exports.removeFromGroupChat=async function(req,res){
    try{

    }catch(err){
        console.log(err);
    }
}
module.exports.addGroupChat=async function(req,res){
    try{

    }catch(err){
        console.log(err);
    }
}