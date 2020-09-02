
  var elem = document.getElementsByClassName('wc-pao-addon-field wc-pao-addon-checkbox')[0]
  
document.getElementsByClassName('wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving')[0].setAttribute('hidden', true);
document.getElementsByClassName('wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving-font')[0].setAttribute('hidden', true);
  
elem.onclick = () => {
	document.getElementsByClassName('input-text wc-pao-addon-field wc-pao-addon-custom-text')[0].value='';
	document.getElementsByClassName('wc-pao-addon-field wc-pao-addon-select')[0].selectedIndex = 0;
	document.getElementsByClassName('wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving')[0].toggleAttribute('hidden');
 	document.getElementsByClassName('wc-pao-addon-container wc-pao-addon wc-pao-addon-engraving-font')[0].toggleAttribute('hidden');
	
	
}

	let fonts = {
  "caligraphy-1": "Lucida Calligraphy Italic",
  "fancy-script-2": "Edwardian",
  "italic-3": "Zapfchan",
  "block-4": "Times New Roman",
  "script-5": "Amazone BT"
};
let ipt = document.getElementsByClassName("input-text wc-pao-addon-field wc-pao-addon-custom-text")[0];
let etype = document.getElementsByClassName("wc-pao-addon-field wc-pao-addon-select")[0];
etype.onchange = () => { ipt.style.fontFamily = "'" + fonts[etype.value] + "'" }
