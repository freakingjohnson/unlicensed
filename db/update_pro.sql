update users
set first_name = $1,
    last_name = $2,
    phone = $3,
    email = $4,
    bio_info = $5,
    profile_photo = $6,
    location = $7,
where id = $8