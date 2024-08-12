export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) 0;
  return students.reduce((acc, student) => acc + student.id, 0);
}
