SELECT courses.id, courses.title, AVG(enrolments.score) as avgscore FROM courses
LEFT JOIN enrolments
ON enrolments.course_id = courses.id
GROUP BY courses.id
ORDER BY avgscore DESC
;
