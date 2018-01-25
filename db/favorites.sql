select users.*,
   array_to_string( array_agg( distinct worktype.worktype ), ', ' ) as worktype,
   array_to_string( array_agg( distinct workphotos.photo ), ', ' ) as workphotos,
   array_to_string( array_agg( distinct workphotos.photo_info ), ', ') as photo_info
from users left join worktype on users.id = worktype.userid
left join workphotos on users.id = workphotos.user_id
left join favorites on users.id = favorites.userId
where favorites.email = $1
group by users.id