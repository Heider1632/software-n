<template>
    <div class="container-fluid">
        <div class="row bg">
          <!-- juego piramide -->
          <div class="piramid-container col-lg-5 col-md-5 col-sm-5">
            <div class="piramide">
              <div :id="level1.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
              <div :id="level2.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
              <div :id="level3.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
              <div :id="level4.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
              <div :id="level5.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
              <div :id="level6.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
              <div :id="level7.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
            </div>
          </div>

          <div class="col-lg-5 col-md-5 col-sm-5">
            <div class="column is-4 boxes-container" v-for="item in items">
              <div v-bind:class="[classOn]" :id="item" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
            </div>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-2">
            <navbar />
          </div>
        </div>
      </div>
</template>
<script>
import swal from 'sweetalert2'
import navbar from '../navbar'
import bulma from 'bulma'
export default {
    name: 'piramide',
    components: { navbar },
     data() {
        return {
          draggingItem: undefined,
          dragged: undefined,
          classOn: 'fill',
          inicio: 'active',
          items: {
            i1: 'i1',
            i2: 'i2',
            i3: 'i3',
            i4: 'i4',
            i5: 'i5',
            i6: 'i6',
            i7: 'i7',
            i8: 'i8',
            i9: 'i9',
            i10: 'i10',
            i11: 'i11',
            i12: 'i12',
            i13: 'i13',
            i14: 'i14',
            i15: 'i15'
          },
          level1:{
            id: 'v1',
            cad1: []
          },
          level2:{
            id: 'v2',
            cad2: []
          },
          level3:{
            id: 'v3',
            cad3: []
          },
          level4:{
            id: 'v4',
            cad4: []
          },
          level5:{
            id: 'v5',
            cad5: []
          },
          level6:{
            id: 'v6',
            cad6: []
          },
          level7: {
            id: 'v7',
            cad7: []
          }
      }
    },
    methods:{
      // Drag Functions //
      dragstart: function(e) {
        this.className = 'hold';
        this.draggingItem = e.target.id;
        this.dragged = e.target;
        e.target.style.opacity = 0.5;
        e.target.style.width = '50px';
        e.target.style.height = '50px';
      },
      dragend: function(e) {
          e.target.style.opacity = 1;
      },
      dragenter: function(e) {
        e.preventDefault();
      },
      dragleave: function(e){
        this.className = 'empty';
      },
      dragdrop: function(e){
        //push array//
        if(event.target.id == this.level1.id){
          this.level1.cad1.push( this.draggingItem );
          this.draggingItem = '';
          //level 1//
          for(var i = 0; i < this.level1.cad1.length; i+=1){
            if(this.level1.cad1[i] == 'i6'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else if(this.level1.cad1[i] == 'i7'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level2.id){
          this.level2.cad2.push( this.draggingItem );
          this.draggingItem = '';
          //level 2
          for(var i = 0; i < this.level2.cad2.length; i+=1){
            if(this.level2.cad2[i] == 'i4'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);
              //desvanece el item principal

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else if(this.level2.cad2[i] == 'i5'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);
              //desvanece el item principal

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{

              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level3.id){
          this.level3.cad3.push( this.draggingItem );
          this.draggingItem = '';
            //level 3
          for(var i = 0; i < this.level3.cad3.length; i+=1){
            if(this.level3.cad3[i] == 'i2'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else if(this.level3.cad3[i] == 'i3'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level4.id){
          this.level4.cad4.push( this.draggingItem );
          this.draggingItem = '';
          //level 4//
          for(var i = 0; i < this.level4.cad4.length; i+=1){
            if(this.level4.cad4[i] == 'i13'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else if( this.level4.cad4[i] == 'i14'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{

            swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level5.id){
          this.level5.cad5.push( this.draggingItem );
          this.draggingItem = '';
          // level 5//
          for(var i = 0; i < this.level5.cad5.length; i+=1){
            if(this.level5.cad5[i] == 'i9'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else if(this.level5.cad5[i] == 'i10'){
               //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else if(this.level5.cad5[i] == 'i12'){
               //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
            })
            }else{

              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level6.id){
          this.level6.cad6.push( this.draggingItem );
          this.draggingItem = '';
          // level 6//
          for(var i = 0; i < this.level6.cad6.length; i+=1){
            if(this.level6.cad6[i] == 'i8'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              });
            }else if(this.level6.cad6[i] == 'i11'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              });

            }else if(this.level6.cad6[i] == 'i15'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);

              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              });
            }
            else{

              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else{
          this.level7.cad7.push( this.draggingItem );
          this.draggingItem = '';
          //level 7//
          for (var i = 0; i < this.level7.cad7.length; i+=1) {
            if(this.level7.cad7[i] == 'i1'){
              //añade el hijo a la piramide
              event.target.appendChild(this.dragged);
              //desvanece el item principal
              this.$store.dispatch('incrementAsync');

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
             })
            }else{

              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }
        //final del codigo//
      },
      dragover: function(e){
        e.preventDefault();
      }
    }
}
</script>
<style>
.bg{
  margin-top: 30px;
}

.piramid-container{
  position: relative;
  top: 0px;
  left: 20px;
  /*IMPORTANTE*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.boxes-container{
  height: 70px;
  width: 80%;
  float: left;
  position: relative;
  left: 50px;
}

.fill {
  display: inline-block;
  height: 75px;
  width: 75px;
  cursor: pointer;
  margin: 10px;
}

.piramide{
  position: relative;
  margin-left: 600px;
}
#disable{
  display: none;
}

.enter{
  display: inline-block;
  height: 40px;
  width: 40px;
}

/* elementos de la piramide */

#v1{
  display: block;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-top: 0px solid transparent;
  border-left: 100px solid transparent;
  border-bottom: 150px solid #e74c3c;
}

#v2{
  display: block;
  width: 160px;
  height: 0px;
  border-right: 0px solid transparent;
  border-left: 60px solid transparent;
  border-bottom: 100px solid #f1c40f;
  position: relative;
  right: 60px;
}

#v3{
  display: block;
  width: 160px;
  height: 0px;
  border-right: 60px solid transparent;
  border-left: 0px solid transparent;
  border-bottom: 100px solid #d35400;
  position: relative;
  bottom: 100px;
  left: 100px;
}

#v4{
  display: block;
  width: 220px;
  height: 0px;
  border-right: 0px solid transparent;
  border-left: 60px solid transparent;
  border-bottom: 100px solid #f39c12;
  position: relative;
  bottom: 100px;
  right: 120px;
}

#v5{
  display: block;
  width: 220px;
  height: 0px;
  border-right: 60px solid transparent;
  border-left: 0px solid transparent;
  border-bottom: 100px solid #27ae60;
  position: relative;
  bottom: 200px;
  left: 100px;
}

#v6{
  display: block;
  width: 560px;
  height: 0px;
  border-right: 60px solid transparent;
  border-left: 60px solid transparent;
  border-bottom: 100px solid #2ecc71;
  position: relative;
  right: 180px;
  bottom: 200px;
}

#v7{
  display: block;
  width: 680px;
  height: 0px;
  border-right: 60px solid transparent;
  border-left: 60px solid transparent;
  border-bottom: 100px solid #3498db;
  position: relative;
  right: 240px;
  bottom: 200px;
}

/* elementos para dropear */

#i1{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/agua.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i2{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/jamon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i3{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/filete.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i4{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/cereal.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i5{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/avena.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i6{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/pizza.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i7{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/hamburguesa.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i8{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/pan.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i9{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/broccoli.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i10{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/carrot.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i11{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/queso.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i12{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/verduras.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i13{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/naranja.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i14{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/manzana.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i15{
  width: 75px;
  height: 75px;
  background: url("../../assets/icons/leche.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
