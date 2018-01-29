select user_password, id, first_name, last_name, email, stripe_id from users
where email = $1 