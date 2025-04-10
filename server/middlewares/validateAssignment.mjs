export const validateAssignment = (req, res, next) => {
  const { title, content, category, email } = req.body;
  if (!title || !content || !category || !email) {
    return res.status(400).json({ message: "Request body is required" });
  }

  //The email of the assignment creator must be in a valid email format
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!validateEmail.test(email)) {
    return res.status(400).json({ message: "Email is invalid" });
  }

  //The category must be a string and one of "Math", "English", or "Biology" only
  const categories = ["Math", "English", "Biology"];
  if (!categories.includes(category)) {
    return res.status(400).json({ message: "Category is invalid" });
  }

  //The content length must be between 500 and 1000 characters
  if (content.length < 500 || content.length > 1000) {
    return res.status(400).json({ message: "Content must be between 500 and 1000 characters" });
  }

  next();
};


