#pragma strict
var Target : Collider;
private var Triggered : boolean = false;

function Start(){

}

function OnTriggerEnter(collision : Collider) {
	var otherGO : GameObject = GameObject.Find("Lamppu");
	var yourVar : Light = otherGO.GetComponent(Light);

	if (collision != Target){
		return;
	} else if(Triggered==false){
	yourVar.range=0;
	transform.Rotate(0, 180, 0, Space.Self);
	Triggered=true;
	}
	else if(Triggered==true){
	yourVar.range=50;
	transform.Rotate(0, 180, 0, Space.Self);
	Triggered=false;}
}