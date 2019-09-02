var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mlsistemi', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("SOMETHING WENT WRONG");
        console.log(err);
    }else {
        console.log("WE JUST SAVE A CAT TO THE DB: ");
        console.log(cat);
    }
});