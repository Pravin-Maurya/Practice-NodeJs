const mongoose = require('mongoose');
const validator = require('validator');

// connection creation and creation of new db if not already created.
mongoose.connect("mongodb://localhost:27017/pravinchannel").then(()=>{
    console.log("connected successfully....");
})
.catch((err)=>{console.log("error connecting", err)})

// a mongoose schema defines the structure of the documents
// default values, validators etc.
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        minLength:[2, "minimum 2 character required"],
        maxLength:30,
    },
    ctype:{
        type:String,
        required: true,
        lowercase: true,
        enum:['fontend', 'backend', 'database']
    },
    videos:{
      type:Number,
      validate(value){
        if(value<0){
            throw new Error("Invalid value");
        }
      }           
    },
    author:String,      
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }   

        },
    },
    active:Boolean,
    date:{
        type: Date,
        default: Date.now(),
    }
})

// A mongoose model is a wrapper on the Mongoose schema.
// a mongoose schema defines the structure of the document,
// default values, validators etc., where a mongoose model
// provides an interface to the database for creating,
// query, update, and delete records etc.

// collection creation 
const Playlist= new mongoose.model('Playlist',playlistSchema);

// create or insert document

const createDocument = async()=>{
    try{
        // const JSPlaylist= new Playlist({
        //     name: "JavaScript",
        //     ctype:"Frontend",
        //     videos: 150,
        //     author: "Pravin Maurya",
        //     active: true,
        // })
        // const mongoDBPlaylist= new Playlist({
        //     name: "MongoDB",
        //     ctype:"Database",
        //     videos: 10,
        //     author: "Pravin Maurya",
        //     active: true,
        // })
        const mongoosePlaylist= new Playlist({
            name: "Mongoose",
            ctype:"database",
            videos: 7,
            author: "Pravin Maurya",
            email:"abc@gmail.com",
            active: true,
        })
            const result = await Playlist.insertMany([
                // JSPlaylist,
                // mongoDBPlaylist,
                mongoosePlaylist
                ]);
            console.log(result);
    }catch(err) {
        console.log(err);
    }
}
createDocument();


const getDocument=async()=>{
    try{
        const result = await Playlist
        .find({author: "Pravin Maurya"})
        .select({name:1})
        .sort({name: -1});
        // .countDocuments();
    // .skip(1)
    // .limit(2);
    console.log(result);
    }
    catch(err){
        console.log(err);
    };
}
// getDocument();

// update document
const updateDocument=async(_id)=>{
    try{
        const result = await Playlist.findOneAndUpdate({_id}, {$set:{
            ctype: "Fullstack"
        }}, 
        {
            new: true,
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }

}

// updateDocument("62cc5bb7c28ddff2627c705e")

// delete the document

const deleteDocument =async(_id) => {
    try{
        const result = await Playlist.findOneAndDelete({_id})
        console.log("Data Deleted:", result);
    }catch(err){
        console.log(err);
    }
}

// deleteDocument("62cd6cd35f2fb3578c226adc")