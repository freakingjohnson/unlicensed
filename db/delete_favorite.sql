delete from favorites
where username = $1 and userId = $2;

select * from favorites
where username = $1