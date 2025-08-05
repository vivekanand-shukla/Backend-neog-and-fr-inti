const mongoose = require("mongoose");

const foodRecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: String, 
  servings: {
    type: Number,
    required: true,},
  prepareTime: {
    type: String, 
    required: true,},
  cookingTime: {
    type: String, 
    required: true,},
  ingredients: [
    {type: String, 
      required: true, },],
  directions: [ { type: String, required: true,},],
  notes: String,
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", foodRecipeSchema);

module.exports = Recipe;
