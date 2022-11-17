const { createUserService, getUserService } = require("../services/user.services")

exports.createUser=async (req, res) => {
    try {
      const result=await createUserService(req.body)
      res.status(200).json({
        stauts: "success",
        massage: "Data inside successfully",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
    }
  }

exports.getUser=async (req, res) => {
    try {
      //create method
      const users=await getUserService();
      res.send(users)
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
  
    }
    
  }