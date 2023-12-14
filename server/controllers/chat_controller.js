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
        if(!req.body.users||!req.body.name){
            return res.status(200).json({data:"Please fill all the fields"});
        }
        if(req.body.users.length<2){
            return res.status(200).json({data:"Please add more than 1 users"});
        }
        let users=req.body.users;
        users.push(req.userId);
        const groupChat=await Chat.create({chatname:req.body.name,users:users,isGroupChat:true,groupAdmin:req.userId});
        const fullChat=await Chat.findOne({_id:groupChat._id}).populate("users","-password").populate("groupAdmin","-password");
        return res.status(200).json({data:fullChat});
    }catch(err){
        console.log(err);
    }
}
module.exports.renameGroupChat=async function(req,res){
    try{
        const chatId=req.body.chatId;
        const chatName=req.body.chatName;
        const chat=await Chat.findOne({_id:chatId}).populate("users","-password").populate("groupAdmin","-password");
        chat.chatname=chatName;
        chat.save();
        return res.status(200).json({data:chat});
    }catch(err){
        console.log(err);
    }
}
module.exports.removeFromGroupChat=async function(req,res){
    try{
        const chatId=req.body.chatId;
        const remId=req.body.rem;
        const chat=await Chat.findOne({_id:chatId}).populate("users","-password").populate("groupAdmin","-password");
        for(let i=0;i<chat.users.length;i++){
            
            let idd=chat.users[i]._id.toString();
            if(idd===remId){
                chat.users.splice(i,1);
                break;
            }
        }
        await chat.save();
       
        return res.status(200).json({data:chat});
    }catch(err){
        console.log(err);
    }
}
module.exports.addGroupChat=async function(req,res){
    try{
        const chatId=req.body.chatId;
        const addId=req.body.add;
        const chat=await Chat.findOne({_id:chatId});
        let f=-1;
        for(let i=0;i<chat.users.length;i++){
            let idd=chat.users[i].toString();
            if(idd==addId){
                f=1;
                break;
            }
        }
        if(f==-1){
            chat.users.push(addId);
        }
        chat.save();
        
        const chat2=await Chat.findOne({_id:chatId}).populate("users","-password").populate("groupAdmin","-password");
        if(f==1){
            return res.status(200).json({data:"User already present in the group"});
        }else{
            return res.status(200).json({data:chat2});
        }
        
    }catch(err){
        console.log(err);
    }
}