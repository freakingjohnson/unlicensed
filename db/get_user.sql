select users.*, 
    array_to_string( array_agg( distinct worktype.worktype ), ', ' ) as worktype
from users inner join worktype on users.id = worktype.userid
group by users.id;