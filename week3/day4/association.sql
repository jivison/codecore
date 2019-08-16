SELECT * FROM students
INNER JOIN enrolments   ON students.id = enrolments.student_id
INNER JOIN courses      ON courses.id = enrolments.course_id
WHERE courses.title ILIKE '%hybrid matrix%';