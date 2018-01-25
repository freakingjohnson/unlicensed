select user_password, id, first_name, last_name, email from users
where email = $1 