
-- +migrate Up
insert into rankings(name, created_user) values('面白い人', 1);
insert into rankings(name, created_user) values('プロ', 1);
insert into rankings(name, created_user) values('やさしい', 1);


-- +migrate Down
