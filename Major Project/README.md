Before running below commands you have to run postgres database named `online_vidya` containing table named `students`.
schemas of student table should be :

```sql
CREATE TABLE IF NOT EXISTS public.students
(
    sno integer,
    name character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    course character varying(255) COLLATE pg_catalog."default"
)
```

To insert data in database, 
```javascript
run node insert
```

To display data in database, 
```javascript
run node display
```