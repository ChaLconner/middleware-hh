const postAssignmentVaidate = (req, res, next) => {
   const body = req.body;
   // console.log(body);
   // console.log('!body.title: ', !!body.title);
   // console.log('body.Content: ', !!body.content);
   // console.log('body.Category: ', !!body.category);
   // console.log('body.Email: ', !!body.Email);
   const checkEmail = (email) => {
      const chaeckMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return chaeckMail.test(email);
   };
   console.log('checkEmail: ', checkEmail(body.email));
   if (!body.title || !body.content || !body.category || !body.email) {
      return res.status(401).json({
         message:
            'ลืนใส่ Title, Content, Category หรือ Email  ไปเช็คให้หน่อยว่าใส่ครบอะป่าว',
      });
   }
   if (!checkEmail(body.email)) {
      return res.status(401).json({
         message: 'เฮ้ย! เขียนชื่อ email กลับไปแก้ไขใหม่ นะ!',
      });
   }
   const checkCategory = ['Math', 'English', 'Biology'];
   if (checkCategory.includes(body.category)) {
      return res.status(401).json({
         message:
            'ไม่มีTagนี้ไป ถ้าอยากดูเว็บอื่นนะ  มีแค่Tag Math,English,Biology เลือกเอา',
      });
   }
   const lengthText = body.content.length;
   console.log('lengthText: ', lengthText);
   if (lengthText <= 500) {
      return res.status(401).json({
         message: 'content น้อยไป อ่านนิดเดียวก็หมดแล้ว  ไปเพิ่มใหม่มากกว่า500',
      });
   } else if (lengthText >= 1000) {
      return res.status(401).json({
         message:
            'เฮ้ย! ที่ไม่พอเก็บ content มากไป ขอแค่เนื้อหาดิไม่เอาน้ำ  ไปปรับให้น้อยกว่า1000',
      });
   }
   next();
};

export default postAssignmentVaidate;
