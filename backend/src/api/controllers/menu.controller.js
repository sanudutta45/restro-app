const mongoose = require("mongoose");
const APIError = require("../utils/APIError");
const { MSG } = require("../utils/messages");
const { CONSTANT } = require("../utils/constants");
const Users = require("../models/users.model");
const Dish = require("../models/dish.model");
const handleResponse = require("../utils/handleResponse");

exports.getMenu = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    handleResponse.error(
      res,
      new APIError({
        message: MSG.INVALID_ID,
        status: 403,
      })
    );
  }
  else{
      try{
          let user = await Users.findOne({_id:id}).lean();
          if(user){
              await Promise.all(user.category.map(async (item,index)=>{
                    const dishes = await Dish.find({userId:user._id,category:item},{userId:0});
                    user.category[index]= {
                        title:item,
                        dishes: dishes
                    };
              }));
              handleResponse.success(res,user,200);
          }else{
            handleResponse.error(
                res,
                new APIError({
                  message: MSG.NOT_FOUND,
                  status: 403,
                })
              );
          }
      }catch(error){
        handleResponse.error(
            res,
            new APIError({
              message: MSG.NOT_FOUND,
              error: error,
              status: 400,
            })
          );
      
    }
  }
};
