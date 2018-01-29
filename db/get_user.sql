select id, first_name, last_name, phone, email, bio_info, profile_photo, location,
   array_to_string( array_agg( distinct worktype.worktype ), ', ' ) as worktype,
   array_to_string( array_agg( distinct workphotos.photo ), ', ' ) as workphotos,
   array_to_string( array_agg( distinct workphotos.photo_info ), ', ') as photo_info
from users left join worktype on users.id = worktype.userid
left join workphotos on users.id = workphotos.user_id
group by users.id;