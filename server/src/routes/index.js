import recipeController from '../controllers/recipeController';
import authentication from '../middlewares/authenticate';
import userController from '../controllers/userController';
import reviewController from '../controllers/reviewController';
import favoriteController from '../controllers/favoriteController';
import voteController from '../controllers/voteController';

export default (app) => {
  app.post('/api/v1/users/signup', userController.signup);
  app.post('/api/v1/users/signin', userController.signIn);
  app.get('/api/v1/recipes', recipeController.get);
  app.get('/api/v1/recipes/:recipeId', authentication.verifyUser, recipeController.getOne);
  app.post('/api/v1/recipes', authentication.verifyUser, recipeController.addRecipe);
  app.put('/api/v1/recipes/:recipeId', authentication.verifyUser, recipeController.updateRecipe);
  app.delete('/api/v1/recipes/:recipeId', authentication.verifyUser, recipeController.delete);
  app.post('/api/v1/recipes/:recipeId/reviews', authentication.verifyUser, reviewController.add);
  app.post('/api/v1/users/:userId/recipes', authentication.verifyUser, favoriteController.add);
  app.get('/api/v1/users/:userId/recipes', authentication.verifyUser, favoriteController.get);
  app.post('/api/v1/recipes/:recipeId/votes', authentication.verifyUser, voteController.vote);
};