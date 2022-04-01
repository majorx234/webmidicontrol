function getServerAddress() {
  server_ip = document.getElementById("server_id").value;
  var server_adress = 'http://'.concat(server_ip,':5000');
  return server_adress;
}

function outputToConsole(text) {
  var para = document.createElement("p");
  var node = document.createTextNode(text);
  para.appendChild(node);
    document.getElementById("console").appendChild(para);
    para.scrollIntoView();
}

class MidiREST {
  constructor(){
    document.getElementById("server_id").setAttribute('value','127.0.0.1');
  }

  slide(index,value){
    var midi_msg = [0xb1, index, value];
    var midi_msg_json = JSON.stringify(midi_msg);
    this.send_data(midi_msg_json);
    outputToConsole("note_on " + midi_msg_json );
  }
    
  send_data(midi_msg){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
      }
    };
    var midi_endpoint = "".concat(getServerAddress(),'/midi_endpoint');
    xhttp.open("POST", midi_endpoint, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(midi_msg); 
  }
}

let midi = new MidiREST();

$( function() {
  $( "#slider-vertical1" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount1" ).val( ui.value );
      midi.slide(1,ui.value);
    }
  });
  $( "#amount1" ).val( $( "#slider-vertical1" ).slider( "value" ) );

  $( "#slider-vertical2" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount2" ).val( ui.value );
      midi.slide(2,ui.value);
    }
  });
  $( "#amount2" ).val( $( "#slider-vertical2" ).slider( "value" ) );

  $( "#slider-vertical3" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount3" ).val( ui.value );
      midi.slide(3,ui.value);
    }
  });
  $( "#amount3" ).val( $( "#slider-vertical3" ).slider( "value" ) );

  $( "#slider-vertical4" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount4" ).val( ui.value );
      midi.slide(4,ui.value);
    }
  });
  $( "#amount4" ).val( $( "#slider-vertical4" ).slider( "value" ) );

  $( "#slider-vertical5" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount5" ).val( ui.value );
      midi.slide(5,ui.value);
    }
  });
  $( "#amount5" ).val( $( "#slider-vertical5" ).slider( "value" ) );

  $( "#slider-vertical6" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount6" ).val( ui.value );
      midi.slide(6,ui.value);
    }
  });
  $( "#amount6" ).val( $( "#slider-vertical6" ).slider( "value" ) );

  $( "#slider-vertical7" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount7" ).val( ui.value );
      midi.slide(7,ui.value);
    }
  });
  $( "#amount7" ).val( $( "#slider-vertical7" ).slider( "value" ) );

  $( "#slider-vertical8" ).slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 127,
    value: 0,
    slide: function( event, ui ) {
      $( "#amount8" ).val( ui.value );
      midi.slide(8,ui.value);
    }
  });
  $( "#amount8" ).val( $( "#slider-vertical8" ).slider( "value" ) );
  } 
);