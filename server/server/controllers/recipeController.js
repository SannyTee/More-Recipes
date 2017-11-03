import { Recipes, reviews } from '../models';
import recipeHelper from '../helper/recipe';

export default {
  /**
   * Create a new Recipe
   * @param {object} req
   * @param {object} res
   * @returns  {JSON} Returns a JSON object
   */
  addRecipe(req, res) {
    if(!req.body.recipeName){
      return res.status(400).send({
        message: 'name of recipe required'
      });
    }
    if(!req.body.mealType){
      return res.status(400).send({
        message: 'mealtype required'
      });
    }
    if(!req.body.description){
      return res.status(400).send({
        message: 'description required'
      });
    }
    if(!req.body.method){
      return res.status(400).send({
        message: 'Method of cooking required'
      });
    }
    if(!req.body.ingredients){
      return res.status(400).send({
        message: 'Input ingredients required'
      });
    }
    recipeHelper.createRecipe(req, res, Recipes);
  },
  /**
   * Update a recipe
   * @param {object} req
   * @param {object} res
   * @returns  {JSON} Returns a JSON object
   */
  updateRecipe(req, res) {
    recipeHelper.editRecipe(req, res, Recipes);
  },
  /**
   * call a method to delete recipe
   * @param {object} req
   * @param {object} res
   * @returns  {JSON} Returns a JSON object
   */
  delete(req, res) {
    recipeHelper.deleteRecipe(req, res, Recipes);
  },
  /**
   * call a method to get recipe
   * @param {object} req
   * @param {object} res
   * @returns  {JSON} Returns a JSON object
   */
  get(req, res) {
    recipeHelper.getRecipe(req, res, Recipes, reviews);
  },
  /**
   * call a method to get  a recipe
   * @param {object} req
   * @param {object} res
   * @returns  {JSON} Returns a JSON object
   */
  getOne(req, res) {
    recipeHelper.getARecipe(req, res, Recipes, reviews);
  },

  /**
   * call a method to upvote recipe
   * @param {object} req
   * @param {object} res
   * @returns  {JSON} Returns a JSON object
   */
  upvote(req, res) {
    recipeHelper.upvoteRecipes(req, res, Recipes);
  },
  /**
   * call a method to downvote recipe
   * @param {object} req
   * @param {object} res
   * @returns  {JSON} Returns a JSON object
   */
  downvote(req, res) {
    recipeHelper.downvoteRecipes(req, res, Recipes);
  }
};