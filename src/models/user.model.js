import mongoose ,{Schema}from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema({
       username:{
        type: String,
        required:true,
        unique:true, 
        lowercase:true,
        trim:true,
        index:true//whene we have to enable serching fiels then use index
       },
       email:{
        type: String,
        required:true,
        unique:true, 
        lowercase:true,
        trim:true,
        index:true
       },
       fullname:{
        type: String,
        required:true, 
        lowercase:true,
        trim:true,
        index:true
       },
       avtar:{
        type:String,//cloudneary url 
        required:true,
       },
       coverImage:{
        type:String,//cloudnery url
       },
       watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }],
        password:{
            type:String,
            required:[true, "password is required "]
        },
        refreshToken:{
            type:String
        }
       
},{timestamps:true})
userSchema.pre("save", async function(next){
if(!this.isModified("password")) return next();
  this.password= bcrypt.hash(this.password,10)
  next()//jab password filed bhjeu tabhi encrpt karo
})
userSchema.methods.isPosswordCorrect = async function
(password){
 return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({           // this methods generte token
     _id: this_id,
     email: this.email,
     username :this.username,
     fulname:this.fullname,
    },
     process.env.ACCESS_TOKEN_SECRET,
    { 
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign({           // this methods generte token
     _id: this_id,
     email: this.email,
     username :this.username,
     fulname:this.fullname,
    },
     process.env.REFRESH_TOKEN_SECRET,
    { 
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
export const User = mongoose.model("User", userSchema)