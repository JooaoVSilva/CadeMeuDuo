Create database targon ;
Use targon;

Create table campeao (
idCampeao int primary key auto_increment,
NomeCampeao varchar (45),
funcao varchar(45)
);

Insert into campeao values 
(Null, 'Aphelios', 'Atirador'),
(Null, 'Aurelion Sol', 'Mago'),
(Null, 'Diana', 'Mago,Assasino'),
(Null, 'Leona', 'Suporte,Tank'),
(Null, 'Taric', 'Suporte,Tank'),
(Null, 'Pantheon', 'Lutador'),
(Null, 'Soraka', 'Suporte,Encantador'),
(Null, 'Zoe', 'Mago');

Create table titulo (
idTitulo int primary key auto_increment,
tituloNome varchar (45) unique
);

Insert into titulo values
(null, 'Gordox da lore'),
(Null, 'Novato da lore'),
(Null, 'Pleno da  lore'),
(Null, 'Sábio da lore'),
(Null, 'Grão-Mestre da lore');

Create table usuario (
idUsuario int primary key auto_increment,
Nickname varchar(45), 
Email varchar(45) unique,
Senha varchar(50) unique,
CampeaoFavorito int,
Constraint CampeaoFavorito foreign key (CampeaoFavorito)
References campeao(idCampeao),
tituloUsuario varchar(45),
Constraint tituloUsuario foreign key (tituloUsuario) references titulo(tituloNome)
);

insert into usuario values
(null, 'Haxixe Docê', 'jonas@jonas.com', 123456, null, null),
(null, 'Lunaris', 'luna@luna.com', 456789, 3, 'Gordox da lore'),
(null, 'Solaris', 'sola@sola.com', 963852, 4, 'Novato da lore'),
(null, 'Panth', 'panth@panth.com', 741852, 6, 'Sábio da lore'),
(null, 'Tarik', 'tarik@tarik.com', 789123, 5, 'Novato da lore');

create table login (
idLogin int primary key auto_increment,
emailUsuario varchar(45),
senhaUsuario varchar(50),
constraint emailUsuario foreign key (emailUsuario)
references usuario(Email),
constraint senhaUsuario foreign key (senhaUsuario)
references usuario(Senha)
);