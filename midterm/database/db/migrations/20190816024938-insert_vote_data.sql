
-- +migrate Up

insert into vote(user, candidate, ranking, comment) values(1, 2, 1, 'hoge');
insert into vote(user, candidate, ranking, comment) values(1, 3, 2, 'fuga');
insert into vote(user, candidate, ranking, comment) values(1, 4, 3, 'piyo');


insert into vote(user, candidate, ranking, comment) values(2, 1, 1, 'hogehoge');
insert into vote(user, candidate, ranking, comment) values(2, 1, 3, 'piyopiyo');



-- +migrate Down
