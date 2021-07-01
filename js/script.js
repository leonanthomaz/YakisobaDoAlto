   //Validações

   function Vnome(){
      var nome =form_pedido.nome.value
      if(nome==""){
      alert("Por favor, informe seu nome completo.")
      return false
   }
   
   var regex=/[0-9]/
      if(regex.test(nome)==true){
         alert("Seu nome não pode ter números.")
         return false
      }

   var regex=/[!-@]/
   if(regex.test(nome)==true){
      alert("nao pode")
   }

   if(nome.length>=30){
      alert("Por favor, digite até 30 caracteres!")
   }

   if(nome.length<=2){
      alert("Digite seu nome.")
   }

   }
   function Vendereco(){
      var endereco =form_pedido.endereco.value
      if(endereco==""){
      alert("Por favor, informe seu endereço.")
   }
      var regex=/[0-9]/
      if(regex.test(endereco)==true){
         alert("Seu endereço não pode ter numeros.")
      }
   }

   function Vnumero(){
      var numero =form_pedido.numero.value
      if(numero==""){
         alert("Informe o número da sua casa ou apartamento.")
      }
      var regex=/[A-za-z]/
      if(regex.test(numero)==true){
         alert("Coloque apenas números.")
      }
      if(numero.length>=5){
         alert("Digite um numero válido")
      }
   }
   function Vbairros(){
      const Bairros = document.querySelectorAll("option")
      if(Bairros[0].selected==true){
         alert("Selecione uma região, por favor!")
   }
         
   } 
   function radio(){
   var radios= document.getElementsByName("pagamento")
      if(radios[0].checked== false && radios[1].checked==false&&radios[2].checked==false){
      alert("Escolha uma forma de pagamento.")
      radios.focus()
      return false
   }


      
   }

 
   function valida(){
      Vnome()
      Vbairros()
      Vendereco()
      Vnumero()
      radio()
      funcao()
      calcularTotal()
      
      
   
   }
      
      
   function limpar() {
   
      $('strong').show();
      

      
   }
   function filtrar() {
      var termo = $('#pesquisa').val().toUpperCase();
      $('.itens-container').each(function() { 
         if($(this).html().toUpperCase().indexOf(termo) === -1) {
            $(this).hide();
         }
         
      });

   
   }

   function stepDown(){
      alert("Inclua o produto no carrinho primeiro!")
   }

   function stepUp(){
      var mais = document.querySelectorAll(".plus")
      alert("Inclua o produto no carrinho primeiro!")
   }



        
   function AddCarrinho(produto, qtd, valor, posicao)
   {
         localStorage.setItem("produto" + posicao, produto);
         localStorage.setItem("qtd" + posicao, qtd);
         valor = valor * qtd;
         localStorage.setItem("valor" + posicao, valor);
         alert("Produto adicionado ao carrinho!");
         
      
   }

   function radio(){
      var radios= document.getElementsByName("pagamento #dinheiro #cartao")
         if(radios.checked== true){
         alert("Pagamento selecionado com sucesso!")
         radios.focus()
         return false
      }
   }


  
         
   /*Representação Completa dos Itens:

      YAKISOBA

      LEGUMES - KJ
      CARNE - KP
      FRANGO - KF
      CALABRESA - CL
      MISTA - MS
      CAMARÃO - CM
   
      GUARACAMP - GCM
      COCA - COLA 2L - CC2
      COCA - COLA LATA - CCL
      TOBI GUARANÁ - TB
      
      
   */

      // Definir variáveis universais
      var valorTotal = [/*-*/0, /*KJ*/0, /*KP*/0, /*CL*/0, /*MS*/0, /*CM*/0, 
         /*GCM*/ 0, /*CC2*/0, /*CCL*/0, /*TB*/0];
      
      var valorProduto = [0, /*legumes-*/15, /*carne-*/25, /*frango-*/20,
         /*calabresa-*/ 17, /*mista-*/ 25, /*camarão-*/ 35, /*Guaracamp-*/ 2, 
         /*Coca - Cola 2L-*/ 10, /*Coca-cola 2 Lata-*/ 5,
         /*Tobi-*/ 7
      ];
      var qtd = [/*-*/0, /*KJ*/0, /*KP*/0, /*CL*/0, /*MS*/0, /*CM*/0, 
         /*GCM*/ 0, /*CC2*/0, /*CCL*/0, /*TB*/0];
         
      
      // Aumentar a quantidade de itens de um produto
      function adicionarItem(item) {
         var quantidade = document.getElementById('quantidade' + item);
         var total = document.getElementById('total' + item);
         qtd[item] += 1;
         valorTotal[item] = valorProduto[item] * qtd[item];
         quantidade.innerHTML = qtd[item];
         total.innerHTML = valorTotal[item];
         console.log(quantidade);
         valorCompra();
      }

      // Diminuir a quantidade de itens de um produto
      function removerItem(item) {
         if (qtd[item] > 0) {
            qtd[item] -= 1;
            var quantidade = document.getElementById('quantidade' + item);
            var total = document.getElementById('total' + item);
            quantidade.innerHTML = qtd[item];
            valorTotal[item] = valorProduto[item] * qtd[item];
            total.innerHTML = valorTotal[item];
            valorCompra();
         }
      }

      // Remover o produto
      function removerProduto() {
         var exclusao = document.querySelectorAll('number-input');
         if (confirm('Deseja limpar o carrinho?')) {
            location.reload(exclusao);         
         }
      }

      // Calcular o valor total da compra
      function valorCompra() {
         var valorTotalCompra = document.getElementById('valorTotalCompra');
         var valor = 0;;
         for (var i = 0; i < valorTotal.length; i++) {
            valor += valorTotal[i];
         }
         valorTotalCompra.innerHTML = valor;
         console.log(valorTotal.length);
      }


      
      

      

     


      


         
      
         
  
        