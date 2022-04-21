# CRUD SPRING BOOT

Clone o projeto:
```bash
git clone https://github.com/Pedrocardo005/crudspringboot
```

Crie um arquivo application.properties e insira as informações do banco de dados

## Passo a passo para utilizar o banco de dados com o docker

### Crie um volume
```bash
docker volume create --name volume-mysql
```

### Crie um container
```bash
docker run --name banco-mysql -v volume-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql
```

### Entre no container do banco de dados
```bash
docker exec -it banco-mysql bash
```

### Entre no banco de dados
```bash
mysql -p
```

### Configurando o banco de dados
```bash
CREATE DATABASE banco;
USE banco;
create table `pessoa` (`id` int unsigned not null auto_increment primary key, `nome` VARCHAR(255) null, `cpf` varchar(255) null, `sexo` CHAR(1) null);
```
