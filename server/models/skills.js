const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SkillSchema = mongoose.Schema({
  item: {
    type: String,
  },
});
const Skill = mongoose.model('Affiliation', SkillSchema);
module.exports = Skill;

module.exports.getSkills = () =>{
  return Skill.find()
}
