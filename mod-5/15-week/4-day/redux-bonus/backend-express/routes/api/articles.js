const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Article } = require('../../db/models');
const { validateCreate } = require('../../validations/articles');

router.get('/', asyncHandler(async (_req, res) => {
  // console.log("\nStep 4 in API endpoint\n")
  const articles = await Article.findAll();
  // console.log("Step 5: see what you're sending as a reponse\n", articles)
  res.json(articles);
}));

router.post('/', validateCreate, asyncHandler(async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
}));

router.put('/:id', validateCreate, asyncHandler(async (req, res) => {
  const article = await Article.findByPk(Number(req.params.id));
  article.title = req.body.title
  article.imageUrl = req.body.imageUrl
  article.body = req.body.body
  await article.save()
  res.json(article);
}));
module.exports = router;