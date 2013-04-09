#pragma strict
var Target : Collider;
var Taso : String;
function Start () {

}
function OnTriggerEnter(collision : Collider){
if (collision != Target){
		return;
	} else {	
		Application.LoadLevel(Taso);
	}
	}