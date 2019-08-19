
-- +migrate Up

insert into votes(user, candidate, ranking, comment) values(1, 2, 1, 'hoge');
insert into votes(user, candidate, ranking, comment) values(1, 3, 2, 'fuga');
insert into votes(user, candidate, ranking, comment) values(1, 4, 3, 'piyo');


insert into votes(user, candidate, ranking, comment) values(2, 1, 1, 'hogehoge');
insert into votes(user, candidate, ranking, comment) values(2, 1, 3, 'piyopiyo');

insert into votes(user, candidate, ranking, comment) values(3, 1, 1, 'sooogoood');


-- +migrate Down
