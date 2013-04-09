#pragma strict
var Target : Collider;
private var Triggered : boolean = false;

function Start(){

}

function OnTriggerEnter(collision : Collider) {
	var otherGO : GameObject = GameObject.Find("Lamppu");
	var yourVar : Pelaajanpisteet = otherGO.GetComponent(Light);

	if (collision != Target){
		return;
	} else if(Triggered==false){
	yourVar.range=0;
	Triggered=true;
	}
	else if(Triggered==true){
	yourVar.range=50;
	Triggered=false;}
}