#!/bin/bash

cd /home

rm -Rf ./guest1
userdel -r guest1

# Lista de pastas e permissões
declare -a pastas = ('./publico' './adm' './ven' './sec')
declare -a permit = (777 770 770 770)

# Lista de usuários 
declare -a users=('carlos' 'maria' 'joao' 'debora' 'sebastiana' 'roberto' 'josefina' 'amanda' 'rogerio')
declare -a usergroups = ( 0 0 0 1 1 1 2 2 2)
declare -a usercomment = ('Carlos da ADM' 'Maria da ADM' 'João da ADM' 'Débora de Vendas' 'Sebastiana de Vendas' 'Roberto de Vendas' 'Josefina de Secretariado' 'Amanda de Secretariado' 'Rogério de Secretariado')

# Lista de grupos
declare -a groups=('grp_adm' 'grp_ven' 'grp_sec')

for i in "${groups[@]}"
do
   groupadd $i
done

$tamanho=${#pastas[@]}

for (( j=0; j<${tamanho}; j++ ));
do
  mkdir ${pastas[$j]}
  chmod =${permit[$j]} ${pastas[$j]} -R
  if($j!=0)
  then
    chown root:${groups[$j-1]} ${pastas[$j]} -R
  fi
done

$tamanho=${#users[@]}
for (( j=0; j<${tamanho}; j++ ));
do
    useradd ${users[$j]} -c ${usercomment[$j]}  -s /bin/bash -m -p $(openssl passwd Senha1234) -a ${usergroups[$j]} 
done
