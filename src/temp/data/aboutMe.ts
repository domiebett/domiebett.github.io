const careerStartDate = new Date(2017, 5, 5);
const todayDate = new Date();

const yearsOfExperience =
  todayDate.getFullYear() - careerStartDate.getFullYear();

export const aboutMe = {
  name: "Dominic Bett",
  rolePrefix: "Software",
  rolePostFix: ["Engineer", "Architect", "Designer"],
  description: `Bringing ${yearsOfExperience} years of experience building innovative, scalable, and user-focused software solutions.`,
};
