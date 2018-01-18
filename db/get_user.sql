select users.*, 
<<<<<<< HEAD
    array_to_string( array_agg( distinct worktype.worktype ), ', ' ) as worktype,
    array_to_string( array_agg( distinct workphotos.photo ), ', ' ) as workphotos,
    array_to_string( array_agg( distinct workphotos.photo_info ), ', ') as photo_info
from users left join worktype on users.id = worktype.userid
left join workphotos on users.id = workphotos.user_id
=======
    array_to_string( array_agg( distinct worktype.worktype ), ', ' ) as worktype
from users inner join worktype on users.id = worktype.userid
>>>>>>> ba0dfc777c459718d45b87f3ee176fd39be55a6c
group by users.id;