#!/bin/bash

cd /home

echo "Criando listas"
# Lista de pastas e permissões
declare -a pastas=('./publico' './adm' './ven' './sec')
declare -a permit=(777 770 770 770)

# Lista de usuários 
declare -a users=('carlos' 'maria' 'joao' 'debora' 'sebastiana' 'roberto' 'josefina' 'amanda' 'rogerio')
declare -a usergroups=(0 0 0 1 1 1 2 2 2)
declare -a usercomment=('Carlos da ADM' 'Maria da ADM' 'João da ADM' 'Débora de Vendas' 'Sebastiana de Vendas' 'Roberto de Vendas' 'Josefina de Secretariado' 'Amanda de Secretariado' 'Rogério de Secretariado')

# Lista de grupos
declare -a groups=('grp_adm' 'grp_ven' 'grp_sec')

criar_infraestrutura(){
echo "Criando infraestrutura de dados"
for i in "${groups[@]}"
do
	groupadd $i
done

declare -i tamanho=${#pastas[@]}

for ((j=0;j<${tamanho};j++))
do
  	mkdir ${pastas[$j]}
  	chmod =${permit[$j]} ${pastas[$j]} -R
	if(($j>0)); then
    		chown root:${groups[$j-1]} ${pastas[$j]} -R
  	fi
done
tamanho=${#users[@]}
for ((j=0;j<${tamanho};j++))
	do
	useradd ${users[$j]} -c "${usercomment[$j]}"  -s /bin/bash -m -p $(openssl passwd Senha1234)
	usermod ${users[$j]} -G ${usergroups[$j]} -a
done
echo "Infraestrutura de dados criada"
}


deletar_anterior(){
# Apagar dados anteriores
echo "Apagando infraestrutura de dados anterior"
for i in "${users[@]}"
do
	rm -Rf "./$i"
	userdel -rf $i
done

for i in "${pastas[@]}"
do
	rm -Rf $i
done

for i in "${groups[@]}"
do
	groupdel -f $i
done
echo "Infraestrutura de dados anterior apagada"
}


echo "Listas criadas."
#echo "Digite sua ação:"
#echo "1 - Apagar infraestrutura de dados anterior"
#echo "2 - Criar infraestrutura de dados"
#echo "3 - Sair"
#read var1

deletar_anterior
read var1
criar_infraestrutura
read var1
