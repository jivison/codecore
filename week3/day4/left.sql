SELECT students.id, first_name FROM students LEFT JOIN projects
ON students.id = projects.student_id
WHERE projects.id IS NULL;