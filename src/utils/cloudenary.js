import {v2 as cloudinary} from cloudinary;
import fs from  "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLODINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECREAT_KEY
});

const upaloadCloudinary = async (localFilePath)=>{
    try{
      if(!localFilePath) return null
      //uplaod file on cloudinary 
       const responce = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
      })
      //file has been uploaded successfully
      console.log("file upload success ",responce.url);
      return responce;

    }catch(error){
       fs.unlinkSync(localFilePath)//remove the loacally saved temooray file as the uploaded operation got faild
       return null;
    }
}
// vese to esse v kam ho jayega but hmm profectional tarike se karege mehtod make bante paramiter mai file ka path dege and upaload hoga to unlink kar dege  and this is little time taking to trycathcn async
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

export {upaloadCloudinary}