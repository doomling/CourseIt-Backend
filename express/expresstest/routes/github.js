const express = require('express');
const router = express.Router();
const githubController = require('./../controllers/githubControllers');

const GithubController = new githubController;

router.get('/usergithub/:user', function (req, res, next) {
  GithubController.getUser(req, res);
});

router.get('/usergithub/:user/details', function (req, res, next) {
  GithubController.getDetails(req, res);
});

router.get('/usergithub/:user/newdetails', function (req, res, next) {
  GithubController.newGetDetails(req, res);
});

router.get('/primos', function (req, res, next) {
  GithubController.getPrimos(req,res);
})

module.exports = router;