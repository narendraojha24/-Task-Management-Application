import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
        trim:true,
        minlength:[3, "Name should be at least 3 characters"],
        maxlength:[30, "Name should not exceed 30 characters"],
        },
    email:{
        type:String,
        required:[true, "Please add an email"],
        unique:true,
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        required: [true, "Please add a password"],
        minlength: 6
    },
    
},{
    timestamps:true,
});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
         return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User=mongoose.model("User", userSchema);
export default User;