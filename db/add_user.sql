insert into users (
    first_name,
    last_name,
    phone,
    email,
    bio_info,
    profile_photo,
    user_password
   
)
values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
);
