select user_id, photo, photo_info, first_name, last_name, phone, email  from workphotos 
inner join users on workphotos.user_id = users.id
where users.id = $1