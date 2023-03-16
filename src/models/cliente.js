import {Schema,model} from "mongoose"

const clientSchema = Schema ({
  name: {type:String},
  lastName: {type:String}
},{
  versionKey: false,
  timestamps: true,
});

export default model("Cliente",clientSchema)
