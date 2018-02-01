delete from favorites
where username = $1 and userid = $2;

select * from favorites
where username = $1