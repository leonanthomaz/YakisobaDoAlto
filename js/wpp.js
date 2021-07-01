//BOtão de enviar as informações no WhatsApp

$(document).ready(function(){
    
    $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       var observacao = $("textarea").val()
       var troco = $("#troco").val()
       
       // FORMA de pagamento selecionada
       const formasDePagamento= document.querySelectorAll("form input[type=radio]")
       var formaSelecionada = ""
       if(formasDePagamento[0].checked){
           formaSelecionada = "Cartão"
        } else {
            formaSelecionada = "Dinheiro"
            
        }

      
        // Legume
   

        var valor = 15;
        var pedido = ""
        const pedidoDisponivel = document.querySelectorAll(".pedido1 input[type=number]")
        var pedidoSelecionado = ""
        var qtd1 = 0; 
        var soma = 0;
        

        for ( pedido of pedidoDisponivel) {

            if(pedido.value){
              pedidoSelecionado +=` ${pedido.alt} -> ${valor},00 Reais -> Qtd: ${pedido.value} / `
                var pedidoValor = parseInt(pedido.value)
                qtd1 = pedidoValor  * valor
                soma += qtd1

                
            }
  
          }


           // Carne
   

           var valor2 = 25;
           var pedido2 = ""
           const pedidoDisponivel2 = document.querySelectorAll(".pedido2 input[type=number]")
           var pedidoSelecionada2 = ""
           var qtd2 = 0; 
           
           
   
           for ( pedido2 of pedidoDisponivel2) {
   
               if(pedido2.value){
                   pedidoSelecionada2 +=` ${pedido2.alt} -> ${valor2},00 Reais -> Qtd: ${pedido2.value} / `
                   var pedidoValor2 = parseInt(pedido2.value)
                   qtd2 = pedidoValor2  * valor2
                   soma += qtd2
   
                   
               }
   
           }

           // Frango
   

           var valor3 = 20;
           var pedido3 = ""
           const pedidoDisponivel3 = document.querySelectorAll(".pedido3 input[type=number]")
           var pedidoSelecionada3 = ""
           var qtd3 = 0; 
           
           
   
           for ( pedido3 of pedidoDisponivel3) {
   
               if(pedido3.value){
                   pedidoSelecionada3 +=` ${pedido3.alt} -> ${valor3},00 Reais -> Qtd: ${pedido3.value} / `
                   var pedidoValor3 = parseInt(pedido3.value)
                   qtd3 = pedidoValor3  * valor3
                   soma += qtd3
   
                   
               }
   
           }

           // Calabresa
   

           var valor4 = 17;
           var pedido4 = ""
           const pedidoDisponivel4 = document.querySelectorAll(".pedido4 input[type=number]")
           var pedidoSelecionada4 = ""
           var qtd4 = 0; 
           
           
   
           for ( pedido4 of pedidoDisponivel4) {
   
               if(pedido4.value){
                   pedidoSelecionada4 +=` ${pedido4.alt} -> ${valor4},00 Reais -> Qtd: ${pedido4.value} / `
                   var pedidoValor4 = parseInt(pedido4.value)
                   qtd4 = pedidoValor4  * valor4
                   soma += qtd4
   
                   
               }
   
           }

           // Misto
   

           var valor5 = 25;
           var pedido5 = ""
           const pedidoDisponivel5 = document.querySelectorAll(".pedido5 input[type=number]")
           var pedidoSelecionada5 = ""
           var qtd5 = 0; 
           
           
   
           for ( pedido5 of pedidoDisponivel5) {
   
               if(pedido5.value){
                   pedidoSelecionada5 +=` ${pedido5.alt} -> ${valor5},00 Reais -> Qtd: ${pedido5.value} / `
                   var pedidoValor5 = parseInt(pedido5.value)
                   qtd5 = pedidoValor5  * valor5
                   soma += qtd5
   
                   
               }
   
           }

           // Camarão
   

           var valor6 = 35;
           var pedido6 = ""
           const pedidoDisponivel6 = document.querySelectorAll(".pedido6 input[type=number]")
           var pedidoSelecionada6 = ""
           var qtd6 = 0; 
           
           
   
           for ( pedido6 of pedidoDisponivel6) {
   
               if(pedido6.value){
                   pedidoSelecionada6 +=` ${pedido6.alt} -> ${valor6},00 Reais -> Qtd: ${pedido6.value} / `
                   var pedidoValor6 = parseInt(pedido6.value)
                   qtd6 = pedidoValor6  * valor6
                   soma += qtd6
   
                   
               }
   
           }

           // Guaracamp
   

           var valor7 = 2;
           var pedido7 = ""
           const pedidoDisponivel7 = document.querySelectorAll(".pedido7 input[type=number]")
           var pedidoSelecionada7 = ""
           var qtd7 = 0; 
           
           
   
           for ( pedido7 of pedidoDisponivel7) {
   
               if(pedido7.value){
                   pedidoSelecionada7 +=` ${pedido7.alt} -> ${valor7},00 Reais -> Qtd: ${pedido7.value} / `
                   var pedidoValor7 = parseInt(pedido7.value)
                   qtd7 = pedidoValor7  * valor7
                   soma += qtd7
   
                   
               }
   
           }

           // Coca de 2 Litros
   

           var valor8 = 10;
           var pedido8 = ""
           const pedidoDisponivel8 = document.querySelectorAll(".pedido8 input[type=number]")
           var pedidoSelecionada8 = ""
           var qtd8 = 0; 
           
           
   
           for ( pedido8 of pedidoDisponivel8) {
   
               if(pedido8.value){
                   pedidoSelecionada8 +=` ${pedido8.alt} -> ${valor8},00 Reais -> Qtd: ${pedido8.value} / `
                   var pedidoValor8 = parseInt(pedido8.value)
                   qtd8 = pedidoValor8  * valor8
                   soma += qtd8
   
                   
               }
   
           }

           // Coca Lata
   

           var valor9 = 5;
           var pedido9 = ""
           const pedidoDisponivel9 = document.querySelectorAll(".pedido9 input[type=number]")
           var pedidoSelecionada9 = ""
           var qtd9 = 0; 
           
           
   
           for ( pedido9 of pedidoDisponivel9) {
   
               if(pedido9.value){
                   pedidoSelecionada9 +=` ${pedido9.alt} -> ${valor9},00 Reais -> Qtd: ${pedido9.value} / `
                   var pedidoValor9 = parseInt(pedido9.value)
                   qtd9 = pedidoValor9  * valor9
                   soma += qtd9
   
                   
               }
   
           }

          

           // Tobi
   

           var valor13 = 7;
           var pedido13 = ""
           const pedidoDisponivel13 = document.querySelectorAll(".pedido13 input[type=number]")
           var pedidoSelecionada13 = ""
           var qtd13 = 0; 
           
           
   
           for ( pedido13 of pedidoDisponivel13) {
   
               if(pedido13.value){
                   pedidoSelecionada13 +=` ${pedido13.alt} -> ${valor13},00 Reais -> Qtd: ${pedido13.value} / `
                   var pedidoValor13 = parseInt(pedido13.value)
                   qtd13 = pedidoValor13  * valor13
                   soma += qtd13
   
                   
               }
   
           }

        
       




        // Adicional Selecionado
        
        const AdicionaisDisponiveis = document.querySelectorAll(".input-add")
        var adicionalSelecionado = ""

        for (adicional of AdicionaisDisponiveis){
            if(adicional.checked == true){
                adicionalSelecionado += `${adicional.alt} - Adicional: ${adicional.id} -> ${adicional.value} Reais;`
                var adicionalValores = parseInt(adicional.value)
                
                soma += adicionalValores
                
            }
            
        }

        
        
        //Taxa de entrega
        var TaxaDeEntrega = 0;
        var bairro = ""
        const Bairros = document.querySelectorAll("option")
        if(Bairros[1].selected==true){
            bairro = 'Tijuaçu'
            TaxaDeEntrega += parseInt(Bairros[1].value)
            
        } else if(Bairros[2].selected==true){
            TaxaDeEntrega += parseInt(Bairros[2].value)
            bairro = 'Mata Machado/Maracaí'
        } else if(Bairros[3].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[3].value)
            bairro = 'Agrícola'
            
        } else if(Bairros[4].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[4].value)
            bairro = 'Biguá'
            
        } else if (Bairros[5].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[5].value)
            bairro = 'Furnas'

        } else if (Bairros[6].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[5].value)
            bairro = 'Taquara'
            
        } else {
            TaxaDeEntrega += parseInt(Bairros[7].value)
            bairro = 'Outros'
        }

        var cupom = $("#cupom").val()
           if( cupom == 'falcon10' ) {
           var desconto = 10
        }else{ 
        if( cupom == '' ) {
        var desconto = 0
     } 
           
    }

    
    var texto=`🍜🍝 *Obrigado por escolher ao Yakisoba do Alto!* 🍜🍝 --- Em instantes você será atendido! --- *A Descrição do seu pedido é:*  *Nome:* ${nome}; 🏠 *Endereço:* ${endereco}; *N°:* ${numero}; *Região:* ${bairro};  *Obs:* ${observacao};
    💳 *Forma de Pagamento:* ${formaSelecionada}, 🛒 *Pedido:* ${pedidoSelecionado}, ${pedidoSelecionada2}, ${pedidoSelecionada3}, ${pedidoSelecionada4}, ${pedidoSelecionada5}, ${pedidoSelecionada6},  ${pedidoSelecionada7},  ${pedidoSelecionada8},  ${pedidoSelecionada9}, ${pedidoSelecionada13}, ${adicionalSelecionado},
    💰 *Valor do Pedido =* ${soma},00 
    ;🛵 *Taxa de entrega =* ${TaxaDeEntrega},00 
    ;🪙 *Troco para =* ${troco},00 Reais 
    ;💲 *Desconto =* ${desconto},00  
    ;💵 *Valor Total:* ${(soma+TaxaDeEntrega)- desconto},00`
    var site="https://api.whatsapp.com/send?phone=5521972555869&text="+texto.replace(" ","%20","%0a")
    
    
   
    if(confirm("Confirma seu pedido?")){ 
        alert("Perfeito!😃 Seu pedido já foi formulado. Agora basta nos enviar a descrição do seu pedido e pronto!😄")  
        window.location.href=site;
        
    } else {
        document.location.reload(true);

    }
})
})

