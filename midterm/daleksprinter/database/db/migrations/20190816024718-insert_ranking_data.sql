
-- +migrate Up
insert into rankings(name, created_user, thumbnail_url) values('面白い人', 1, "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/Funny-Spanish-Phrases-You-Must-Know-1.jpg");
insert into rankings(name, created_user, thumbnail_url) values('プロっプロのプロ', 1, "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/Wyvern-programming-languages-in-one.jpg");
insert into rankings(name, created_user, thumbnail_url) values('やさしいひと', 1, "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/kindness-hands-flower.jpg.653x0_q80_crop-smart.jpg");


-- +migrate Down
