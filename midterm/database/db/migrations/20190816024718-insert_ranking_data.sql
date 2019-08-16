
-- +migrate Up
insert into ranking(name) values('面白い人');
insert into ranking(name) values('プロ');
insert into ranking(name) values('やさしい');


-- +migrate Down
