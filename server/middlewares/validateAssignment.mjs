// // middleware/validateAssignment.mjs
// export const assignmentValidationRules(req, res, next) = {
//     if(!req.body.title) {
//       return res.status(400).json({ message: "Request body is required" });
//     }

//     if(!req.body.content) {
//       return res.status(400).json({ message: "Request body is required" });
//     }

//     if(!req.body.category) {
//       return res.status(400).json({ message: "Request body is required" });
//     }
//     if(!req.body.email) {
//         return res.status(400).json({ message: "Request body is required" });
//         }
// }
  


export const validateAssignment = (req, res, next) => {
    const { title, content, category, email } = req.body;
    if (!title || !content || !category || !email) {
        return res.status(400).json({ message: "Request body is required" });
    }

    next();
};


