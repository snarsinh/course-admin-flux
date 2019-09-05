const courses = [
  {
    id: 1,
    title: "Machine Learning",
    slug: "ML",
    authorId: 1,
    category: "Computer Science"
  },
  {
    id: 2,
    title: "Data Structure and Algorithms",
    slug: "DSA",
    authorId: 1,
    category: "Computer Science"
  },
  {
    id: 3,
    title: "Database Management Systems",
    slug: "DBMS",
    authorId: 1,
    category: "Computer Science"
  },
  {
    id: 4,
    title: "Computer Networks",
    slug: "CN",
    authorId: 1,
    category: "Computer Science"
  },
  {
    id: 5,
    title: "Mathematics Foundations for Computer Science",
    slug: "MFCS",
    authorId: 1,
    category: "Computer Science"
  },
  {
    id: 6,
    title: "Web Development",
    slug: "WD",
    authorId: 1,
    category: "Computer Science"
  },
  {
    id: 7,
    title: "Engineering Drawing 1",
    slug: "ED1",
    authorId: 1,
    category: "Mechanical Engineering"
  },
  {
    id: 8,
    title: "Fundamentals of Economics",
    slug: "FE",
    authorId: 1,
    category: "Business"
  },
  {
    id: 9,
    title: "Entrepreneurship",
    slug: "ENT",
    authorId: 1,
    category: "Business"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "WCF",
    authorId: 1,
    category: "Design"
  }
];

const authors = [
  { id: 1, name: "John Deor" },
  { id: 2, name: "Allan Duran" },
  { id: 3, name: "Jack Li" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
