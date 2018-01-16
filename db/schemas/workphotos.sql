create table workphotos (
    user_id integer not null references users(id),
    photo text,
    photo_info text
)