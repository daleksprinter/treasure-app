
-- +migrate Up
CREATE TABLE candidate(
  id      INT NOT NULL auto_increment, 
  name    VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL, 
  user    INT NOT NULL, 
  PRIMARY KEY(id), 
  FOREIGN KEY (user) REFERENCES user(id) 
  );
-- +migrate Down
