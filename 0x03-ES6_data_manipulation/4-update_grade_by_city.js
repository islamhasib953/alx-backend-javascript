export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];
  return (students.filter((student) => student.location === city)).map((student) => {
    const gradeinfo = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeinfo ? gradeinfo.grade : 'N/A';
    return { ...student, grade };
  });
}
