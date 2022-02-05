// function calculateAge(birthday) {
//     var ageDifMs = Date.now() - birthday.getTime();
//     var ageDate = new Date(ageDifMs);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

export const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
