
-- +migrate Up
CREATE TABLE rankings 
  ( 
     id           INT NOT NULL auto_increment, 
     name         VARCHAR(255) NOT NULL, 
     created_user INT NOT NULL, 
     thumbnail_url varchar(255) not null,
     PRIMARY KEY(id), 
     FOREIGN KEY(created_user) REFERENCES users(id) 
  ); 
-- +migrate Down
