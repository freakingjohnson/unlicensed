delete from favorites
where email = $1 and userId = $2;

select * from favorites
where email = $1