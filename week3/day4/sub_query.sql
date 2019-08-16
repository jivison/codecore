SELECT course_title, enrolment_count FROM (
    SELECT courses.id, courses.title AS course_title, COUNT(enrolments.id) as enrolment_count
    FROM courses
    INNER JOIN enrolments ON courses.id = enrolments.course_id
    GROUP BY courses.id
) AS courses_with_enrolments
WHERE enrolment_count >= 5
ORDER BY enrolment_count DESC;