SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Actor;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor DROP COLUMN salary;

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

ALTER TABLE Actor CHANGE sex gender VARCHAR(255);

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor SET `name`= 'Giovanna Grigio', birth_date= '1998-01-19' WHERE id= '003';

UPDATE Actor SET `name`= 'JULIANA PAES' WHERE id= '005';

UPDATE Actor SET `name`= 'Juliana Paes' WHERE id= '005';

UPDATE Actor SET `name`= 'Nome', birth_date= '1950-10-10', gender= 'male', favorite_ice_cream_flavor= 'Baunilha', `type`= 'Director' WHERE id= '005';

UPDATE Actor SET `name`= 'Nome' WHERE id= '008';

DELETE FROM Actor WHERE `name`= 'Giovanna Grigio';

SELECT COUNT(*) FROM Actor WHERE gender= 'female';

SELECT * FROM Actor LIMIT 3;

DESC Films;

SELECT COUNT(*), gender FROM Actor GROUP BY gender;

SELECT id, `name` FROM Actor ORDER BY `name` DESC;

ALTER TABLE Films ADD playing_limit_date INT;

ALTER TABLE Films CHANGE playing_limit_date playing_limit_date DECIMAL(3, 2);

ALTER TABLE Films CHANGE playing_limit_date playing_limit_date DATE;

ALTER TABLE Films CHANGE avaliação avaliação DECIMAL(4, 2);