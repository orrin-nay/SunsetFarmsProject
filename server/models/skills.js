const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const SkillSchema = mongoose.Schema({
  item: {
    type: String
  }
});
const Skill = mongoose.model("Affiliation", SkillSchema);
module.exports = Skill;

module.exports.getSkills = () => {
  return Skill.find();
};

module.exports.addAffiliation = affiliation => {
  const skill = new Skill({ item: affiliation });
  skill.save();
};
module.exports.removeAffiliation = async affiliation => {
  await Skill.find({ item: affiliation }).remove();
};
