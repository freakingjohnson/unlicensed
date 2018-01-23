create table users (
    id serial primary key,
    first_name text,
    last_name text,
    phone text,
    email text,
    bio_info text,
    profile_photo text DEFAULT 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png',
    location text,
    user_password text
)