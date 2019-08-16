
-- +migrate Up
insert into users(name, user_id, is_candidate, password) values('りょう', 'daleksprinter', true, 'password');
insert into users(name, user_id, is_candidate, password) values('アサシン', 'kzkzzk', true, 'password');
insert into users(name, user_id, is_candidate, password) values('たかゆき', 'TaKO8Ki', true, 'password');
insert into users(name, user_id, is_candidate, password) values('ひろき', 'ia17011', true, 'password');
insert into users(name, user_id, is_candidate, password) values('TA1', 'daleksprinter', false, 'password');

-- +migrate Down
