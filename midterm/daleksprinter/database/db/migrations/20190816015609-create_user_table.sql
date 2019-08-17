
-- +migrate Up
CREATE TABLE users 
  ( 
     id           INT NOT NULL auto_increment, 
     name         VARCHAR(255) NOT NULL, 
     user_id      VARCHAR(255) NOT NULL, 
     password     VARCHAR(255) NOT NULL, 
     is_candidate BOOLEAN NOT NULL, 
     PRIMARY KEY(id) 
  ); 
-- +migrate Down
