create table nonpro (
    id serial primary key,
    email text unique,
    hashpassword text
)