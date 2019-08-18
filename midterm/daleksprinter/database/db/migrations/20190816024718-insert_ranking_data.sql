
-- +migrate Up
insert into rankings(name, created_user, thumbnail_url) values('面白い人', 1, "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/too-funny-png-you-re-so-funny-emoticon-256.png");
insert into rankings(name, created_user, thumbnail_url) values('プロ', 1, "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/Wyvern-programming-languages-in-one.jpg");
insert into rankings(name, created_user, thumbnail_url) values('やさしい', 1, "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/1024px-Friendly_stickman.svg.png");


-- +migrate Down
