#pragma strict


var pointss : String;


function Start() {
	
}


function Update () {
	var otherGO : GameObject = GameObject.Find("Pelaaja");
	var yourVar : Pelaajanpisteet = otherGO.GetComponent(Pelaajanpisteet);
	var otherVar = yourVar.Points;
	pointss = otherVar.ToString();

	guiText.text = pointss;
}