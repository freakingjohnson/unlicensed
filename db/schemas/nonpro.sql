create table nonpro (
    id serial primary key,
    first_name text,
    last_name text,
    zip_code text,
    email text unique,
    hashpassword text
)