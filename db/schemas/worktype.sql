create table worktype (
    userid integer not null references users(id),
    worktype text
)

