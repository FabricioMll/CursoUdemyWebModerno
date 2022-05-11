create table if not exists cidades ( -- só cria se não existir outra tabela com esse nome
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    estado_id int unsigned not null,
    area decimal(10,2),
    primary key (id),
    foreign key (estado_id) references estados (id)
);
create table if not exists testes (
    id int unsigned not null auto_increment primary key
);

drop table if exists testes; -- deleta a tabela, caso ela exista

select * from testes;