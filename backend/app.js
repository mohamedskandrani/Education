//********************module importation*************************/
//import express module
const express = require("express");

//import body parser module
const bodyParser = require("body-parser");
//*********************Importation:mongoose*************************/
// const mongoose = require("mongoose");
//*********************express application************************/
//creates express application
const app = express();

//*********************app configuaration*************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Fake datebase
//courses
let coursesTab = [
  {
    id: 1,
    title: "mondialisation",
    description: "lorem eli lorem",
    price: "300$",
    duration: "50 hour",
    ageOfKids:"13-15",
    totalSeats:10,
    img:"assets/img/class-3.jpg",
    img1:"assets/img/blog-2.jpg"
  },
  {
    id: 2,
    title: "electricité",
    description: "lorem eli lorem",
    price: "3000$",
    duration: "250 hour",
    ageOfKids:"15-18",
    totalSeats:15,
    img:"assets/img/class-1.jpg",
    img1:"assets/img/blog-1.jpg"
  },
  {
    id: 3,
    title: "html",
    description: "lorem eli lorem",
    price: "1500$",
    duration: "150 hour",
    ageOfKids:"14-17",
    totalSeats:12,
    img:"assets/img/class-2.jpg",
    img1:"assets/img/blog-3.jpg"
  },
];
//teachers
let teachersTab = [
  { id: 1, name: "samia", speciality: "math", experience: "10ans",img:"assets/img/team-1.jpg" },
  { id: 2, name: "alia", speciality: "phys", experience: "5ans",img:"assets/img/testimonial-3.jpg" },
  { id: 3, name: "saliha", speciality: "francais", experience: "7ans",img:"assets/img/testimonial-1.jpg" },
  { id: 4, name: "lamia", speciality: "info", experience: "2ans",img:"assets/img/testimonial-2.jpg" }
];
function generateId(T) {
  let max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 0; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max + 1;
}

//business Logics: add course
app.post("/api/course", (req, res) => {
    //instructon
    console.log("here into BL:Add course", req.body);
    req.body.id = generateId(coursesTab);
    coursesTab.push(req.body);
    res.json({ isAdded: true });
  });
  //business Logics: Edit course
  app.put("/api/course", (req, res) => {
    //instruction
    console.log("here into BL:Edit course", req.body);
    for (let i = 0; i < coursesTab.length; i++) {
      if (coursesTab[i].id == req.body.id) {
        coursesTab[i] = req.body;
        break;
      }
    }
    res.json({ isEdited: "success" });
  });
  //business Logics: get all course
  app.get("/api/course", (req, res) => {
    //instruction
    console.log("here into BL:Get All course");
    res.json({ courses: coursesTab });
  });
  // business Logics : delete course by ID
  app.delete("/api/course/:id", (req, res) => {
    //instruction
    console.log("Here into BL : delete course By id", req.params.id);
    for (let i = 0; i < coursesTab.length; i++) {
      if (coursesTab[i].id == req.params.id) {
        coursesTab.splice(i, 1);
        break;
      }
    }
    res.json({ isDeleted: true });
  });
  //business Logics : get course by id
  app.get("/api/course/:id", (req, res) => {
    console.log("here get course By id", req.params.id);
    for (let i = 0; i < coursesTab.length; i++) {
      if (coursesTab[i].id == req.params.id) {
        res.json({ course: coursesTab[i] });
        break;
      }
    }
  });
  app.post("/api/course/search", (req, res) => {
    //instructon search
    console.log("here into BL:Add course", req.body);
    let courses = [];
    for (let i = 0; i < coursesTab.length; i++) {
      if (
        coursesTab[i].scoreOne == req.body.score1 ||
        coursesTab[i].scoreTwo == req.body.score2
      ) {
        courses.push(coursesTab[i]);
      }}
  res.json({ T: courses });
  });

//business Logics: add teachers
app.post("/api/teacher", (req, res) => {
  //instructon
  console.log("here into BL:Add teacher", req.body);
  req.body.id = generateId(teachersTab);
  teachersTab.push(req.body);
  res.json({ isAdded: true });
});
//business Logics: Edit teacher
app.put("/api/teacher", (req, res) => {
  //instruction
  console.log("here into BL:Edit teacher", req.body);
  for (let i = 0; i < teachersTab.length; i++) {
    if (teachersTab[i].id == req.body.id) {
      teachersTab[i] = req.body;
      break;
    }
  }
  res.json({ isEdited: "success" });
});
//business Logics: get all teacher
app.get("/api/teacher", (req, res) => {
  //instruction
  console.log("here into BL:Get All teacher");
  res.json({ teachers: teachersTab });
});
// business Logics : delete teacher by ID
app.delete("/api/teacher/:id", (req, res) => {
  //instruction
  console.log("Here into BL : delete teacher By id", req.params.id);
  for (let i = 0; i < teachersTab.length; i++) {
    if (teachersTab[i].id == req.params.id) {
      teachersTab.splice(i, 1);
      break;
    }
  }
  res.json({ isDeleted: true });
});
//business Logics : get teacher by id
app.get("/api/teacher/:id", (req, res) => {
  console.log("here get teacher By id", req.params.id);
  for (let i = 0; i < teachersTab.length; i++) {
    if (teachersTab[i].id == req.params.id) {
      res.json({ teacher: teachersTab[i] });
      break;
    }
  }
});
app.post("/api/teacher/search", (req, res) => {
  //instructon
  console.log("here into BL:Add teacher", req.body);
  let teachers = [];
  for (let i = 0; i < teachersTab.length; i++) {
    if (
      teachersTab[i].name == req.body.Name ||
      teachersTab[i].speciality == req.body.speciality
    ) {
      teachers.push(teachersTab[i]);
    }
  }
  res.json({ T: teachers });
});

module.exports = app;
