#!/bin/bash
# Precisa ser executado como super user

#infos do projeto a ser implementado
project=portifolio
name=main
gituser=lrNas
website=https://github.com/$gituser/$project/archive/refs/heads/$name.zip

#localização do ficheiro de arquivos Apache
fileslocation=/home/public/Apache/www/html

apt-get update -y
apt-get upgrade -y
apt-get dist-upgrade -y
apt-get install apache2 unzip wget -y

cd /tmp
wget $website
unzip -o $name.zip
cp -Rf /tmp/$project-$name/* $fileslocation