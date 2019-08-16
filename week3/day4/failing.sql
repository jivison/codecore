SELECT course_title, avg_score
FROM (
    SELECT courses.id, courses.title AS course_title, AVG(enrolments.score) as avg_score
    FROM courses
    INNER JOIN enrolments ON courses.id = enrolments.course_id
    GROUP BY courses.id
) AS course_avgs
WHERE avg_score < 60
ORDER BY avg_score DESC;