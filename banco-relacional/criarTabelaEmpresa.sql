create table if not exists empresas (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned, -- cnpj pode ser um varchar, 
    primary key (id),
    unique key (cnpj)
)

create table if not exists empresas_unidades (
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede tinyint(1) not null, -- tinyint é um booleano que só aceita 1 ou 0.
    primary key (empresa_id, cidade_id)
);