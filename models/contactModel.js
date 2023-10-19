const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required:[true,"please provide contact"],
    },
    email:{
        type:String,
        required:[true,"please provide email"],
    },
    phone:{
        type:String,
        required:[true,"please provide phoneno"],
    },

},

{
    timestamps:true,
}

);

module.exports=mongoose.model("Contact",contactSchema);