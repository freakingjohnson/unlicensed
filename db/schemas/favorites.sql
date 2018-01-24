create table favorites (
    email text not null references nonpro(email),
    userId integer not null references users(id)
)