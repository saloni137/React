var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blogs = mongoose.model('Blogs');

router.get('/', function (req, res, next) {
  Blogs.find(function (err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.json(blogs);
    }
  }).sort([['updatedAt', 'descending']]);
});

//Detailed Blog
router.get('/:slug', function (req, res) {
  // console.log("slug:", req.params.slug); 
  Blogs.findOne({ slug: req.params.slug }, function (err, blog) {
    console.log(blog);
    res.json(blog);
  });
});


//Addition
router.post('/add', function (req, res) {
  var blog = new Blogs(req.body);
  blog.save()
    .then(blog => {
      res.status(200).json({ 'blog': 'Blog added successfully' });
    }).catch(err => {
      res.status(400).send('adding new blog failed');
    });
});

router.post('/delete', function (req, res) {
  Blogs.findOneAndRemove({ _id: req.params.id }, function (err, blog) {
    console.log(blog);
    res.json(blog);
  })
})

//Remove
router.post('/remove/slug', function (req, res) {
  Blogs.findOneAndRemove({ slug: req.params.slug }, function (err, blog) {
    console.log(blog);
    res.json(blog);
  });
});






module.exports = router;







































/*
router.get('/:id', function(req, res) {
  let id = req.params.id;
  Blogs.findById(id, function(err, blog) {

  });
});



*/





/**
 *   console.log("Post Request Reached");
  res.send("Post Request Reached");
  insertRecord(req, res)
})

//Function

function insertRecord (req, res) {
  const { title, body } = req.body
  var blog = new Blog();
  blog.title = title
  blog.body = body
  blog.save().then(blog => {
    res.status(200).json({'blog': 'blog added successfully'});
})
.catch(err => {
    res.status(400).send('adding new blog failed');
});


/*
router.post('/addBlog', (req, res, next) => {
  console.log("Reached")
  const { body } = req;
  const Blog = new Blogs(body);
  return Blog.save()
    .then(() => res.json({ blog: Blog.toJSON() }))
    .catch(next);
});



const Blogs = [
{
  "id": 1,
  "title": "Java",
  "body": "Java is Object Oriented Programming Language."
},
{
  "id": 2,
  "title": "Laravel",
  "body": "Its is a PHP Framework.Easy to Learn if you know basics of PHP"
},
{
  "id": 3,
  "title": "Nodejs",
  "body": "It a Framework work on javascript"
},
{
  "id": 4,
  "title": "React",
  "body": "React is a Front End Technology which use JSX."
},
{
  "id": 5,
  "title": "Python",
  "body": "Machine Learning is based on python"
}]
*/
