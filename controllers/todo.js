const Todo = require("../models/Todo");
const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: 1 });
    res.render("index", { title: "todo list", todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTodoFormController = (req, res, next) => {
  try {
    res.render("newTodo", { title: "add todo" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTodoFormController = async (req, res, next) => {
  try {
    const id = req.query.id;
    const todo = await Todo.findById(id);
    res.render("updateTodo", { title: "update todo", todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTodoPageController = (req, res, next) => {
  try {
    const  id  = req.query.id;
    res.render("deleteTodo", { title: "delete todo", id: id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTodoController = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const newTodo = new Todo({ title, desc });
    await newTodo.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    const todo = await Todo.findById(id);
    todo.title = title;
    todo.desc = desc;
    await todo.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteTodoController = async (req, res, next) => {
  try {
    const  {id,confirm}  = req.query;
    if(confirm === "yes"){
        await Todo.findByIdAndDelete(id);
    }
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoPageController,
  addTodoController,
  updateTodoController,
  deleteTodoController
};
