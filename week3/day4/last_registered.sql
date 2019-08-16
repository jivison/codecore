SELECT courses.id, courses.title, MAX(enrolments.created_at) as recent FROM courses
INNER JOIN enrolments ON enrolments.course_id = courses.id
GROUP BY courses.id
ORDER BY recent DESC;