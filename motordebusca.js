
	<h2 style="color: #FFF !important; padding-top: 0;">

    <div class="row-form  painelHo"> 
       <form>
           <fieldset>  
               <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">  
                   <label>Data de Entrada:<input class="form-control datetime hasDatepicker" id="checkin" type="date" name="d"> </label>
                   
                   <label>Data de Saída:<input class="form-control datetime hasDatepicker" id="checkout" type="date" name="df"> </label>
               
                   <label>Adultos:  <br>
                       <select class="form-control" id="adultos" name="a">  
                           <option value="1">1  </option><option value="2">2  </option>
                           <option value="3">3  </option><option value="4">4  </option>
                           <option value="5">5  </option><option value="6">6  </option>
                           <option value="7">7  </option><option value="8">8  </option>
                           <option value="9">9  </option>
                       </select>  
                   </label>  
               
                   <label>Crianças de 0 a 11:<br>  
                       <select class="form-control"  id="criancas3" name="c3">  
                           <option value="0">0  </option><option value="1">1  </option>
                           <option value="2">2  </option><option value="3">3  </option>
                       </select>  
                   </label> 
                   
                   <button target="_blank" type="button" id="btnPesquisa2" class="btn btn-primary" onclick="sendParameters()">Pesquisar</button>  
               </div>
           </fieldset> 
       </form>
   </div>  


<script>
   function sendParameters() {
       let url = "https://reservas.aviva.com.br/b2c/hotel/U28972/M154826/";
       let entrada = document.getElementById("checkin").value;
       entrada = entrada.split('-');
       entrada = entrada[2] + '-' + entrada[1] + '-' + entrada[0]; 
       let saida = document.getElementById("checkout").value;
       saida = saida.split('-');
       saida = saida[2] + '-' + saida[1] + '-' + saida[0]; 
       let adultos = document.getElementById("adultos").value;
       let criancas = document.getElementById("criancas3").value;
       let urlCriancas;

       switch(criancas) {
           case '0':
               urlCriancas = '';
           break;
           case '1':
               urlCriancas = '-11';
           break;
           case '2':
               urlCriancas = '-11-11';
           break;
           case '3':
               urlCriancas = '-11-11-11';
           break;
           default:
               urlCriancas = '';
           break;
       }

       window.location.href = url + entrada + '/' + saida + '/' + adultos + urlCriancas;

   }
</script>