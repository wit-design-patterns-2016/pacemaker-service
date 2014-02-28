# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table activity (
  id                        bigint auto_increment not null,
  user_id                   bigint not null,
  kind                      varchar(255),
  location                  varchar(255),
  distance                  double,
  constraint pk_activity primary key (id))
;

create table my_user (
  id                        bigint auto_increment not null,
  firstname                 varchar(255),
  lastname                  varchar(255),
  email                     varchar(255),
  password                  varchar(255),
  constraint pk_my_user primary key (id))
;

alter table activity add constraint fk_activity_my_user_1 foreign key (user_id) references my_user (id) on delete restrict on update restrict;
create index ix_activity_my_user_1 on activity (user_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table activity;

drop table my_user;

SET FOREIGN_KEY_CHECKS=1;

