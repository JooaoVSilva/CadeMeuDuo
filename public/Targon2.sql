Create database targon ;

Use targon;

Create table campeao (
idCampeao int primary key auto_increment,
NomeCampeao varchar (45),
funcao varchar(45)
) auto_increment = 100;

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
tituloNome varchar (45)
)auto_increment = 50;

Insert into titulo values
(Null, 'Novato da lore'),
(Null, 'Pleno da  lore'),
(Null, 'Sabio da lore'),
(Null, 'Grão-Mestre da lore');

Create table usuario (
idUsuario int primary key auto_increment,
Nickname varchar(45), 
Email varchar(45),
Senha varchar(50),
CampeaoFavorito int,
Constraint CampeaoFavorito foreign key (CampeaoFavorito)
References campeao(idCampeao),
tituloUsuario int,
Constraint tituloUsuario foreign key (tituloUsuario) references titulo(idTitulo)
);