function generate() {
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById( 'verb').value;
    var place = document.getElementById('place').value;

    var madLib = 'The ' + noun + ' ' + verb + ' in the ' + place + '.';

    /*
    var madLibDisplay = document.getElementById('mad-lib');
    madLibDisplay.textContent = madLib; 
    */
   
    document.getElementById('mad-lib').textContent = madLib;
}