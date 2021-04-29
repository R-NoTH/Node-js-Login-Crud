const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
},
  {
    timestamps: true
  }
);
// cifrado de password
UserSchema.methods.encrypPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// compara la password ingresada con la db ;
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

// parametros del model('nombre x',nombre del Schame);
module.exports = model('User', UserSchema);