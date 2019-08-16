SELECT courses.title, students.first_name, enrolments.score FROM courses
INNER JOIN enrolments ON courses.id = enrolments.course_id
INNER JOIN students ON enrolments.student_id = students.id
WHERE students.first_name ILIKE 'Jo%';