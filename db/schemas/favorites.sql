create table favorites (
    username text not null references non_pro(email),
    userId integer not null references users(id)
)