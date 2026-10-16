let tarefas = ["Estudar JavaScript","Fazer exercícios","Ler um livro"];

function executarMenu() {
    let continuar = true;

    while (continuar) {
    let menu = "--- GERENCIADOR DE TAREFAS ---\n" +
   "1. Cadastrar tarefa\n" +
   "2. Listar tarefas\n" +
   "3. Buscar tarefa\n" +
   "4. Atualizar tarefa\n" +
   "5. Excluir tarefa\n" +
   "6. Filtrar tarefas\n" +
   "7. Organizar tarefas\n" +
   "0. Sair do programa\n\n" +
   "Escolha uma opção:";

  let opcao = prompt(menu);

    switch (opcao) {
      case "1":
  // Cadastrar tarefa
    let novaTarefa = prompt("Digite o nome da nova tarefa:");
    if (novaTarefa) {
    tarefas.push(novaTarefa);
    alert("Tarefa \"" + novaTarefa + "\" adicionada ao final.");
  }
    break;

    case "2":
  // Listar tarefas
    if (tarefas.length === 0) {
    alert("A lista de tarefas está vazia.");
  } else {
    let listaFormatada = "--- Lista de Tarefas ---\n";
    tarefas.forEach(function(tarefa, indice) {
    listaFormatada += (indice + 1) + ". " + tarefa + "\n";});
    alert(listaFormatada);
 }
   break;

   case "3":
  // Buscar tarefa
   let busca = prompt("Digite o nome da tarefa que deseja buscar:");
   if (tarefas.includes(busca)) {
    let achado = tarefas.find(function(t) { return t === busca; });
    alert("A tarefa \"" + achado + "\" está cadastrada!");
   } else {
    alert("A tarefa \"" + busca + "\" não foi encontrada.");
  }
    break;

    case "4":
  // Atualizar tarefa
    let nomeAtual = prompt("Digite o nome atual da tarefa:");
    let indiceAtualizar = tarefas.indexOf(nomeAtual);

   if (indiceAtualizar !== -1) {
    let novoNome = prompt("Digite o novo nome para a tarefa:");
    if (novoNome) {
   tarefas[indiceAtualizar] = novoNome;
    alert("Tarefa atualizada com sucesso!");
    }
  } else {
    alert("Tarefa atualizada não encontrada.");
  }
    break;

    case "5":
    // Excluir tarefa
    let nomeExcluir = prompt("Digite o nome da tarefa que deseja remover:");
    let indiceExcluir = tarefas.findIndex(function(tarefa) { return tarefa === nomeExcluir; });

     if (indiceExcluir !== -1) {
      tarefas.splice(indiceExcluir, 1);
     alert("Tarefa \"" + nomeExcluir + "\" removida.");
   } else {
      alert("Tarefa não encontrada para exclusão.");
   }
   break;

    case "6":
   // Filtrar tarefas
    let termoFiltrar = prompt("Digite uma letra ou palavra para filtrar:");
   if (termoFiltrar) {
    let filtradas = tarefas.filter(function(tarefa) { 
      return tarefa.toLowerCase().indexOf(termoFiltrar.toLowerCase()) !== -1;});
                    
   if (filtradas.length > 0) {
    alert("Tarefas encontradas:\n" + filtradas.join("\n"));
  } else {
    alert("Nenhuma tarefa corresponde ao filtro.");}
  }
    break;

    case "7":
  // Organizar tarefas
    let subMenu = "Escolha como organizar:\n" +
   "1. Adicionar no início (unshift)\n" +
   "2. Remover a primeira (shift)\n" +
   "3. Remover a última (pop)";
    let opcaoOrg = prompt(subMenu);

    if (opcaoOrg === "1") {
    let tarefaInicio = prompt("Digite a tarefa para o início:");
    if (tarefaInicio) {
    tarefas.unshift(tarefaInicio);
    alert("Tarefa adicionada no início.");}
  } 
  else if (opcaoOrg === "2") {
     if (tarefas.length > 0) {
    let removidaPref = tarefas.shift();
    alert("Primeira tarefa removida: \"" + removidaPref + "\"");}
   else {alert("Lista vazia, nada para remover.");}
 } else if (opcaoOrg === "3") {
if (tarefas.length > 0) {
let removidaUlt = tarefas.pop();
alert("Última tarefa removida: \"" + removidaUlt + "\"");
} else {
alert("Lista vazia, nada para remover.");
}
} else {
alert("Opção inválida de organização.");
}
break;

case "8":
alert("Até logo!");
continuar = false;
break;

default:
alert("Opção inválida! Tente novamente.");
break;
}
}
}

executarMenu();