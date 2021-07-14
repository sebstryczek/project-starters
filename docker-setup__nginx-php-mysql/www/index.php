<?php

try {
    $dsn = 'mysql:host=mariadb;dbname=db_name;charset=utf8;port=3306';
    $pdo = new PDO($dsn, 'db_user', 'db_pass');
    $db_name = $pdo->query('select database()')->fetchColumn();
    echo $db_name;
} catch (PDOException $e) {
    echo $e->getMessage();
}

phpinfo();
