
-- +migrate Up
CREATE TABLE user 
  ( 
     id      INT NOT NULL auto_increment, 
     name    VARCHAR(255) NOT NULL, 
     user_id VARCHAR(255) NOT NULL, 
     PRIMARY KEY(id) 
  ); 
-- +migrate Down
