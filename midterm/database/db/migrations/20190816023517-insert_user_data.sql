
-- +migrate Up
insert into user(name, user_id, is_candidate) values('りょう', 'daleksprinter', true);
insert into user(name, user_id, is_candidate) values('アサシン', 'kzkzzk', true);
insert into user(name, user_id, is_candidate) values('たかゆき', 'TaKO8Ki', true);
insert into user(name, user_id, is_candidate) values('ひろき', 'ia17011', true);
insert into user(name, user_id, is_candidate) values('TA1', 'daleksprinter', false);

-- +migrate Down
