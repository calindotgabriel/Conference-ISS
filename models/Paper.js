import mongoose from 'mongoose';

var PaperSchema = new mongoose.Schema({
    firstGrader: String,
    secondGrader: String,
    firstGrade:  Number,
    secondGrade: Number
});

export default mongoose.model('paper', PaperSchema);