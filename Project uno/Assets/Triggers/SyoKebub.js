#pragma strict
var Target : Collider;
static var Triggered : boolean = false;

function Start(){

}

function OnTriggerEnter(collision : Collider) {
	var otherGO : GameObject = GameObject.Find("Pelaaja");
	var yourVar : Pelaajanpisteet = otherGO.GetComponent(Pelaajanpisteet);
	var lisaPiste = yourVar.Points;

	if (collision != Target){
		return;
	}else if(Triggered == false){
	otherGO.GetComponent(Pelaajanpisteet).Points = otherGO.GetComponent(Pelaajanpisteet).Points + 1000;
	Triggered = true;
	}
}
