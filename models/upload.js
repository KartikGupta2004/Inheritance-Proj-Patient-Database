const cloudinary=require('cloudinary').v2
const dotenv=require('dotenv');
dotenv.config();

cloudinary.config({ 
  cloud_name:'diolwukvp', 
  api_key: '668557591541927', 
  api_secret:'MmpMpj3Ly7bbycTN_akROTwydEo',
});
const image='../sw1.jpg'
try{

cloudinary.uploader.upload(image).then(result=>{
    console.log(result);

})
}
catch(err){
    console.log(err);
}
