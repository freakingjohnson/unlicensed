create table reviews (
    pro_getting_reviewed integer not null references users(id),
    comment text,
    user_posting_review text,
    rating decimal (4,1) not null
)